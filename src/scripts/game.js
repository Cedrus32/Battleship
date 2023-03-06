import events from '../events.js';
import makePlayer from './classes.js';

const game = (() => {
    let human;
    let computer;

    function init() {
        human = makePlayer('human');
        computer = makePlayer('computer');  
    }

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
        events.publish('receiveShipData', ship.name, ship.length, ship.coords); // subscribed by ui.js
    }
    function deleteShipObject(targetName) {
        human.board.removeShip(targetName);
    }
    function clearShipData() {
        human.board.clearShips();
    }
    function replaceToOriginal() {
        let ship = human.board.replacing;
        human.board.replaceShipToOriginal();
        events.publish('receiveShipData', ship.name, ship.length, ship.coords); // subscribed by ui.js
    }

    function generateComputerShips() {
        computer.randomizeShips();
    }

    // event subscriptions
    events.subscribe('queryCoordData', queryCoordData); // published by ui.js (playerBoards[0].onMouseOver, body.onKeyDown)
    events.subscribe('placeShip', placeShip); // published by ui.js (body.onClick)
    events.subscribe('queryShipData', queryShipData); // published by ui.js (body.onClick)
    events.subscribe('deleteShipObject', deleteShipObject); // published by ui.js (body.onClick)
    events.subscribe('clearShipData', clearShipData); // published by ui.js (body.onClick)
    events.subscribe('replaceToOriginal', replaceToOriginal); // published by ui.js (body.onClick)
    events.subscribe('generateComputerShips', generateComputerShips); // published by ui.js (body.onClick)

    return {
        init, // used by index.js
    }

})();

export default game;
