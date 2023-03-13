import events from '../events.js';

// CLASSES
class Ship {
    constructor(length = null, dir = null, name = null, coords = null) {
        this.length = length;
        this.dir = dir;
        this.name = name;
        this.hits = 0;
        this.sunk = false;
        this.coords = coords;
    }

    isPlaced() {
        this.placed = true;
    }
    logHit() {
        this.hits += 1;
        this.isSunk();
    }
    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }
}
class Gameboard {
    constructor() {
        this.grid = [[[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []]];
        this.ships = [];
        this.replacing = undefined;
        this.shipsSunk = 0;
    }

    getShip(targetCoord) {
        for (let i = 0; i < this.ships.length; i++) {
            for (let j = 0; j < this.ships[i].coords.length; j++) {
                if (this.ships[i].coords[j] === targetCoord) {
                    return this.ships[i];
                }
            }
        }
    }
    removeShip(shipName) {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].name === shipName) {
                if (this.ships.length === 7) {
                    this.replacing = this.ships[i];
                }
                this.ships.splice(i, 1);
            }
        }
    }

    resetBoard() {
        this.clearShips();
        this.clearBoard();
        this.replacing = undefined;
        this.shipsSunk = 0;
    }
    clearShips() {
        while (this.ships.length > 0) {
            this.ships.pop();
        }
    }
    clearBoard() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j] = [];
            }
        }
    }

    placeShip(startCoord, dir, shipLen, shipName) {
        shipLen = parseInt(shipLen);
        let coordSet = this.getCoords(startCoord, dir, shipLen); // used by computer AI to generate ship placement
        if (this.setIsValid(coordSet)) {    // used by computer AI to varifyplacement validity
            this.ships.push(makeShip(shipLen, dir, shipName, coordSet));
            if (this.ships.length === 7) {
                events.publish('makePlayLive', ''); // subscribed by ui.js, game.js
            }
            return true;    // used by computer AI to control placement loop
        }
        return false;   // ""
    }
    replaceShipToOriginal() {
        this.ships.push(this.replacing);
        this.replacing = undefined;
    }
    getCoords(startCoord, dir, shipLen) {
        shipLen = parseInt(shipLen);
        console.log(startCoord, dir, shipLen);
        let coordSet = [startCoord];
        let i = 0;
        switch (dir) {
            case 'u': {
                let yPosition = parseInt(startCoord.split('')[1]);
                while (i < shipLen - 1) {
                    yPosition -= 1;
                    yPosition.toString();
                    let newCoord = startCoord.split('')[0] + yPosition;
                    coordSet.splice(0, 0, newCoord);
                    i++;
                }
                break;
            }
            case 'd': {
                let yPosition = parseInt(startCoord.split('')[1]);
                while (i < shipLen - 1) {
                    yPosition += 1;
                    yPosition.toString();
                    let newCoord = startCoord.split('')[0] + yPosition;
                    coordSet.push(newCoord);
                    i++;
                }
                break;
            }
            case 'l': {
                let xPosition = parseInt(startCoord.split('')[0]);
                while (i < shipLen - 1) {
                    xPosition -= 1;
                    xPosition.toString();
                    let newCoord = xPosition + startCoord.split('')[1];
                    coordSet.splice(0, 0, newCoord);
                    i++;
                }
                break;
            }
            case 'r': {
                let xPosition = parseInt(startCoord.split('')[0]);
                while (i < shipLen - 1) {
                    xPosition += 1;
                    xPosition.toString();
                    let newCoord = xPosition + startCoord.split('')[1];
                    coordSet.push(newCoord);
                    i++;
                }
            }
        }
        return coordSet;
    }
    setIsValid(coordSet) {
        console.log(coordSet);
        for (let i = 0; i < coordSet.length; i++) {
            if (coordSet[i].length > 2) {
                console.log(`${coordSet[i]} outside bounds`);
                return false;
            }
            let newX = parseInt(coordSet[i].split('')[0]);
            let newY = parseInt(coordSet[i].split('')[1]);
            for (let j = 0; j < this.ships.length; j++) {
                let ship = this.ships[j];
                let xMin = parseInt(ship.coords[0].split('')[0]) - 1;
                let xMax = parseInt(ship.coords[ship.coords.length - 1].split('')[0]) + 1
                let yMin = parseInt(ship.coords[0].split('')[1]) - 1;
                let yMax = parseInt(ship.coords[ship.coords.length - 1].split('')[1]) + 1
                if (newX >= xMin && newX <= xMax && newY >= yMin && newY <= yMax) {
                    console.log(`${coordSet[i]} too close to placed ship`);
                    return false
                }
            }
        }
        console.log('valid set');
        return true;
    }

    receiveAttack(player, coord) {
        let outcome = this.isHit(coord);
        let hit = outcome[0];
        let ship = outcome[1];
        if (hit) {
            this.markBoard(coord, 'x');
            ship.logHit();
            if (ship.sunk) {
                this.shipsSunk += 1;
                events.publish('displaySunk', player, ship.name); // subscribed by ui.js
                let buffer = this.getBuffer(ship);
                events.publish('displayBuffer', player, buffer); // subscribed by ui.js
            }
        } else if (!hit) {
            this.markBoard(coord, 'o');
        }
        events.publish('displayHit', player, coord, hit); // subscribed by ui.js
    }
    isHit(attackCoord) {
        for (let i = 0; i < this.ships.length; i++) {
            let ship = this.ships[i];
            for (let j = 0; j < ship.coords.length; j++) {
                let shipCoord = ship.coords[j];
                if (attackCoord === shipCoord) {
                    return [true, ship];
                }
            }
        }
        return [false, undefined];
    }
    markBoard(coord, mark) {
        let x = parseInt(coord.split('')[0]);
        let y = parseInt(coord.split('')[1]);
        this.grid[y][x] = mark;
    }
    getBuffer(shipObject) {
        let bufferSet = [];
        if (shipObject.dir === 'd' || shipObject.dir === 'u') {
            let i = 0;
            while (i < shipObject.coords.length) {
                let coordX = parseInt(shipObject.coords[i].split('')[0]);
                let coordY = parseInt(shipObject.coords[i].split('')[1]);
                let bufferCoord;
                if (i === 0 && coordY !== 0) {
                    // console.log('get above');
                    bufferCoord = `${coordX}${coordY - 1}`;
                    bufferSet.push(bufferCoord);
                    if (coordX !== 0) {
                        // console.log('get left corner');
                        bufferCoord = `${coordX - 1}${coordY - 1}`
                        bufferSet.push(bufferCoord);
                    }
                    if (coordX !== 9) {
                        // console.log('get right corner');
                        bufferCoord = `${coordX + 1}${coordY - 1}`
                        bufferSet.push(bufferCoord);
                    }
                }
                if ((i === shipObject.coords.length - 1 || shipObject.length === 1) && coordY !== 9) {
                    // console.log('get above');
                    bufferCoord = `${coordX}${coordY + 1}`;
                    bufferSet.push(bufferCoord);
                    if (coordX !== 0) {
                        // console.log('get left corner');
                        bufferCoord = `${coordX - 1}${coordY + 1}`
                        bufferSet.push(bufferCoord);
                    }
                    if (coordX !== 9) {
                        // console.log('get right corner');
                        bufferCoord = `${coordX + 1}${coordY + 1}`
                        bufferSet.push(bufferCoord);
                    }
                }
                if (coordX !== 0) {
                    // console.log('get left');
                    bufferCoord = `${coordX - 1}${coordY}`;
                    bufferSet.push(bufferCoord);
                }
                if (coordX !== 9) {
                    // console.log('get right');
                    bufferCoord = `${coordX + 1}${coordY}`
                    bufferSet.push(bufferCoord);
                }
                i++;
            }
        } else if (shipObject.dir === 'l' || shipObject.dir === 'r') {
            let i = 0;
            while (i < shipObject.coords.length) {
                let coordX = parseInt(shipObject.coords[i].split('')[0]);
                let coordY = parseInt(shipObject.coords[i].split('')[1]);
                let bufferCoord;
                if (i === 0 && coordX !== 0) {
                    // console.log('get left');
                    bufferCoord = `${coordX - 1}${coordY}`;
                    bufferSet.push(bufferCoord);
                    if (coordY !== 0) {
                        // console.log('get top corner);
                        bufferCoord = `${coordX - 1}${coordY - 1}`
                        bufferSet.push(bufferCoord);
                    }
                    if (coordY !== 9) {
                        // console.log('get bottom corner');
                        bufferCoord = `${coordX - 1}${coordY + 1}`
                        bufferSet.push(bufferCoord);
                    }
                }
                if ((i === shipObject.coords.length - 1 || shipObject.length === 1) && coordX !== 9) {
                    // console.log('get right');
                    bufferCoord = `${coordX + 1}${coordY}`;
                    bufferSet.push(bufferCoord);
                    if (coordY !== 0) {
                        // console.log('get top corner');
                        bufferCoord = `${coordX + 1}${coordY - 1}`
                        bufferSet.push(bufferCoord);
                    }
                    if (coordY !== 9) {
                        // console.log('get bottom corner')
                        bufferCoord = `${coordX + 1}${coordY + 1}`
                        bufferSet.push(bufferCoord);
                    }
                }
                if (coordY !== 0) {
                    // console.log('get above');
                    bufferCoord = `${coordX}${coordY - 1}`;
                    bufferSet.push(bufferCoord);
                }
                if (coordY !== 9) {
                    // console.log('get below');
                    bufferCoord = `${coordX}${coordY + 1}`;
                    bufferSet.push(bufferCoord);
                }
                i++;
            }
        }
        return bufferSet;
    }

    isLoser() {
        if (this.shipsSunk === this.ships.length) {
            return true;
        }
    }
}
class Human {
    constructor() {
        this.type = 'human';
        this.board = makeGameboard();
    }

    sendAttack(player, coord, board) {
        board.receiveAttack(player, coord);
    }
}
class Computer extends Human {
    constructor() {
        super(Human);
        this.type = 'computer';
        this.attacksMade = [];
    }

    randomizeShips() {
        let availShips = [[1, 'sub1'],
                          [1, 'sub2'],
                          [2, 'dest1'],
                          [2, 'dest2'],
                          [3, 'crus'],
                          [4, 'bs'],
                          [5, 'acc'],
                        ];
        let dirs = ['u', 'd', 'l', 'r'];
        
        while (availShips.length > 0) {
            let shipLen = availShips[0][0];
            let shipName = availShips[0][1];
            availShips.splice(0, 1);

            let dir = dirs[Math.floor(Math.random() * dirs.length)];

            let valid = false;
            while (valid === false) {
                let coord = '';
                let i = 0;
                while (i < 2) {
                    let index = Math.floor(Math.random() * 10).toString();
                    coord += index;
                    i++;
                }
                valid = this.board.placeShip(coord, dir, shipLen, shipName);
            }
        }
    }
    randomizeAttack(board) {
        let valid = false;
        while (valid === false) {
            let coord = '';
            let i = 0;
            while (i < 2) {
                let index = Math.floor(Math.random() * 10).toString();
                coord += index;
                i++;
            }
            if (!this.attacksMade.includes(coord)) {
                valid = true;
                this.attacksMade.push(coord);
                this.sendAttack('human', coord, board)
            }
        }
    }
}

// FACTORIES
function makeShip(length, dir, name, coords) {
    return new Ship(length, dir, name, coords);
}
function makeGameboard() {
    return new Gameboard();
}
function makePlayer(type) {
    if (type === 'human') {
        return new Human();
    } else if (type === 'computer') {
        return new Computer();
    }
}

// export { makeShip as default, makeGameboard, makePlayer };   // testing export
export default makePlayer;
