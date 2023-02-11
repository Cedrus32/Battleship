import { default as makeShip, makeGameboard } from '../src/scripts/classes.js';

let ship;
test('create ship with length', () => {
    ship = makeShip(5);
    expect(ship.length).toEqual(5);
})
test('create ship with coords', () => {
    ship = makeShip(5, ['00', '01', '02', '03', '04']);
    expect(ship.coords).toEqual(['00', '01', '02', '03', '04']);
})
test('change hit count', () => {
    ship.logHit();
    expect(ship.hits).toEqual(1);
})
test('change sunk bool', () => {
    let i = 0;
    while (i < 4) {
        ship.logHit()
        i++;
    }
    expect(ship.sunk).toBeTruthy();
})


let gameboard = makeGameboard();
// HORIZONTAL PLACEMENT
test('creates horizontal coordinate set', () => {
    expect(gameboard.getCoords('00', 'h', 5)).toEqual(['00', '10', '20', '30', '40']);
})
test('gameboard returns true for valid horizontal coordSet', () => {
    expect(gameboard.setIsValid(['00', '10', '20', '30', '40'])).toBeTruthy();
})
test('places ship at valid horizontal coords', () => {
    gameboard.placeShip('00', 'h', 5);
    expect(gameboard.ships[0] !== undefined).toBeTruthy();
})
// VERTICAL PLACEMENT
test('creates vertical coordinate set', () => {
    expect(gameboard.getCoords('02', 'v', 5)).toEqual(['02', '03', '04', '05', '06']);
})
test('gameboard returns true for valid vertical coordSet', () => {
    expect(gameboard.setIsValid(['02', '03', '04', '05', '06'])).toBeTruthy();
})
test('places ship at valid vertical coords', () => {
    gameboard.placeShip('02', 'v', 5);
    expect(gameboard.ships[1] !== undefined).toBeTruthy();
})
test('gameboard returns false for invalid coordSet', () => {
    expect(gameboard.setIsValid(['00', '01', '02', '03', '04'])).toBeFalsy();
})
// HITS
test('gameboard returns true if hit', () => {
    expect(gameboard.isHit('00')[0]).toBeTruthy();
})
test('gameboard marks hit', () => {
    gameboard.markBoard('00', 'x');
    expect(gameboard.grid[0][0]).toEqual('x');
})
// MISSES
test('gameboard returns false if miss', () => {
    expect(gameboard.isHit('33')[0]).toBeFalsy();
})
test('gameboard marks miss', () => {
    gameboard.markBoard('33', 'o');
    expect(gameboard.grid[3][3]).toEqual('o');
})

// TRACK SUNK SHIPS
test('gameboard tracks sunk ships', () => {
    let hitList = ['02', '03', '04', '05', '06'];
    for (let i = 0; i < hitList.length; i++) {
        gameboard.receiveAttack(hitList[i]);
    }
    console.log(gameboard.ships[1]);
    expect(gameboard.shipsSunk).toEqual(1);
})

// TRACK WIN/LOSE
test('returns false when all ships are not sunk', () => {
    expect(gameboard.isLoser()).toBeFalsy();
})
test('returns true when all ships are sunk', () => {
    let hitList = ['00', '10', '20', '30', '40'];
    for (let i = 0; i < hitList.length; i++) {
        gameboard.receiveAttack(hitList[i]);
    }
    console.log(gameboard.ships[0]);
    expect(gameboard.isLoser()).toBeTruthy();
})

//// board "places" ships by calling makeShip function and pushing it to ships[] array
//// board checks received attacks agains ships[]...
//// ... then logs hits & misses in array spread representing play grid
//// ... and updates ship hits if needed...
//// ...... and checks if the ship is sunk
//// board checks how many ships are sunk (win)