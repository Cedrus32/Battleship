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
    function removeShipData(targetName) {
        human.board.removeShip(targetName);
    }
    function clearShipData() {
        human.board.clearShips();
    }

    // event subscriptions
    events.subscribe('queryCoordData', queryCoordData); // published by ui.js (playerBoards[0].onMouseOver, body.onKeyDown)
    events.subscribe('placeShip', placeShip); // published by ui.js (body.onClick)
    events.subscribe('queryShipData', queryShipData); // published by ui.js (body.onClick)
    events.subscribe('removeShipData', removeShipData); // published by ui.js (body.onClick)
    events.subscribe('clearShipData', clearShipData); // published by ui.ja (body.onClick)

    return {
        init, // used by index.js
    }

})();

export default game;
