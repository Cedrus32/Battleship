import { default as makeShip, makeGameboard } from '../src/scripts/classes.js';

let ship;
test.skip('create empty object', () => {
    ship = makeShip();
    expect(ship.placed).toBeFalsy();
    expect(ship.length).toBeNull();
    expect(ship.hits).toEqual(0);
    expect(ship.sunk).toBeFalsy();
})
test.skip('create ship with length', () => {
    ship = makeShip(5);
    expect(ship.length).toEqual(5);
})
test.skip('change placed bool', () => {
    ship.isPlaced();
    expect(ship.placed).toBeTruthy();
})
test.skip('change hit count', () => {
    ship.logHit();
    expect(ship.hits).toEqual(1);
})
test.skip('change sunk book', () => {
    let i = 0;
    while (i < 4) {
        ship.logHit()
        i++;
    }
    ship.isSunk();
    expect(ship.sunk).toBeTruthy();
})

let gameboard;
test('create empty gameboard', () => {
    gameboard = makeGameboard();
    expect(gameboard).toEqual({});
})
test('', () => {
    expect().toEqual();
})