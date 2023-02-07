class Ship {
    constructor(length = null) {
        this.placed = false;
        this.length = length;
        this.hits = 0;
        this.sunk = false;
    }

    isPlaced() {
        this.placed = true;
    }
    logHit() {
        this.hits += 1;
    }
    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }
}

class Gameboard {
    constructor() {

    }
}

function makeShip(length) {
    let ship = new Ship(length);
    return ship;
}

function makeGameboard() {
    let gameboard = new Gameboard();
    return gameboard;
}

export { makeShip as default, makeGameboard };