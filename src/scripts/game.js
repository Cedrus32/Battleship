import events from '../events.js';
import makePlayer from './classes.js';

const game = (() => {
    let human;
    let computer;

    // driver methods
    function init() {
        human = makePlayer('human');
        computer = makePlayer('computer');
    }

    // placement methods
    function queryCoordData(startCoord, direction, length) {
        let coordSet = human.board.getCoords(startCoord, direction, length);
        let isValid = human.board.setIsValid(coordSet);
        events.publish('receiveCoordData', coordSet, isValid); // subscribed by ui.js
    }
    function placeShip(startCoord, direction, length, name) {
        human.board.placeShip(startCoord, direction, length, name);
    }
    function queryShipData(targetID) {
        let ship = human.board.getShip(targetID);
        events.publish('receiveShipData', ship.name, ship.dir, ship.length, ship.coords); // subscribed by ui.js
    }
    function deleteShipObject(targetName) {
        human.board.removeShip(targetName);
    }
    function resetBoardData() {
        human.board.resetBoard();
        computer.board.resetBoard();
        computer.resetStrategy();
        computer.resetAttacks();
    }
    function replaceToOriginal() {
        let ship = human.board.replacing;
        human.board.replaceShipToOriginal();
        events.publish('receiveShipData', ship.name, ship.dir, ship.length, ship.coords); // subscribed by ui.js
    }

    // play methods
    function generateComputerShips() {
        computer.randomizeShips();
    }
    function takeTurn(targetCoord) {
        humanTurn(targetCoord);
        setTimeout(computerTurn, 500);
    }
    function humanTurn(targetCoord) {
        human.sendAttack('computer', targetCoord, computer.board);
        if (computer.board.isLoser()) {
            events.publish('winner', 'computer'); // subscribed by ui.js
            resetBoardData();
            return;
        }
    }
    function computerTurn() {
        computer.makeAttack(human.board);
        if (human.board.isLoser()) {
            events.publish('winner', 'human'); // subscribed by ui.js
            resetBoardData();
        }
    }
    function updateComputerStrategy(sunk, hit, coord) {
        console.log('updateComputerStrategy()');
        computer.receiveAttackResult(sunk, hit, coord);
    }
    function addBufferToComputerAttacks(buffer) {
        for (let i = 0; i < buffer.length; i++) {
            computer.addToAttacks(buffer[i]);
        }
        console.log(computer.attacksMade);
    }

    // event subscriptions
    events.subscribe('queryCoordData', queryCoordData); // published by ui.js (playerBoards[0].onMouseOver, body.onKeyDown)
    events.subscribe('placeShip', placeShip); // published by ui.js (body.onClick)
    events.subscribe('queryShipData', queryShipData); // published by ui.js (body.onClick)
    events.subscribe('deleteShipObject', deleteShipObject); // published by ui.js (body.onClick)
    events.subscribe('resetBoardData', resetBoardData); // published by ui.js (body.onClick)
    events.subscribe('replaceToOriginal', replaceToOriginal); // published by ui.js (body.onClick)
    events.subscribe('generateComputerShips', generateComputerShips); // published by ui.js (body.onClick)
    events.subscribe('takeTurn', takeTurn); // published by ui.js (body.onClick)
    events.subscribe('receiveAttackResult', updateComputerStrategy); // published by classes.js (receiveAttack)
    events.subscribe('addBufferToComputerAttacks', addBufferToComputerAttacks); // published by classes.js (receiveAttack)

    return {
        init, // used by index.js
    }

})();

export default game;
