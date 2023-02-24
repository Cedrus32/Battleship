import events from '../events.js';
import makePlayer from './classes.js';

const game = (() => {
    let human;
    let computer;

    function init() {
        human = makePlayer('human');
        computer = makePlayer('computer');  
    }

    function getCoordsFromHuman(startCoord, direction, length) {
        let coordSet = human.board.getCoords(startCoord, direction, length);
        let isValid = human.board.setIsValid(coordSet);
        events.publish('receiveIDArray', coordSet, isValid); // subscribed by ui.js
    }
    function placeShip(startCoord, direction, length) {
        human.board.placeShip(startCoord, direction, length);
    }

    // event subscriptions
    events.subscribe('queryIDArray', getCoordsFromHuman); // published by ui.js (playerBoards[0].onMouseOver)
    events.subscribe('placeShip', placeShip); // published by ui.js (body.onClick)

    return {
        init, // used by index.js
    }

})();

export default game;
