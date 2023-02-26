// CLASSES
class Ship {
    constructor(length = null, name = null, coords = null) {
        this.length = length;
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
                this.ships.splice(i, 1);
            }
        }
    }
    placeShip(startCoord, dir, shipLen, shipName) {
        let coordSet = this.getCoords(startCoord, dir, shipLen);
        if (this.setIsValid(coordSet)) {
            this.ships.push(makeShip(shipLen, shipName, coordSet));
            console.log(this.ships);
            return true;    // used by computer AI to mark valid placements
        }
        return false;   // ""
    }
    getCoords(startCoord, dir, shipLen) {
        let coordSet = [startCoord];
        let i = 0;
        switch (dir) {
            case 'r': {
                let xPosition = parseInt(startCoord.split('')[0]);
                while (i < shipLen - 1) {
                    xPosition += 1;
                    xPosition.toString();
                    let newCoord = xPosition + startCoord.split('')[1];
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
            }
        }
        console.log(coordSet);
        return coordSet;
    }
    setIsValid(coordSet) {
        for (let i = 0; i < coordSet.length; i++) {
            if (coordSet[i].length > 2) {
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
                    return false
                }
            }
        }
        return true;
    }

    receiveAttack(coord) {
        let outcome = this.isHit(coord);
        let hit = outcome[0];
        let ship = outcome[1];
        if (hit) {
            this.markBoard(coord, 'x');
            ship.logHit();
            if (ship.sunk) {
                this.shipsSunk += 1;
            }
        } else if (!hit) {
            this.markBoard(coord, 'o');
        }
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

    sendAttack(coord, board) {
        board.receiveAttack(coord);
    }
}
class Computer extends Human {
    constructor() {
        super(Human);
        this.type = 'computer';
        this.attacksMade = [];
    }

    randomizeShips() {
        let availShips = [1, 1, 2, 2, 3, 4, 5];
        let dirs = ['h', 'v'];
        // availShips.splice(6);   // ! remove after testing
        // availShips.splice(4, 1);    // ! remove after testing
        
        while (availShips.length > 0) {
            let shipLen = availShips[0];
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
                valid = this.board.placeShip(coord, dir, shipLen);
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
                this.sendAttack(coord, board)
            }
        }
    }
}

// FACTORIES
function makeShip(length, name, coords) {
    return new Ship(length, name, coords);
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
