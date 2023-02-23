import events from '../events.js';
import makePlayer from './classes.js';

const game = (() => {
    let human;
    let computer;

    function init() {
        human = makePlayer('human');
        computer = makePlayer('computer');
        console.log(human);
        console.log(computer);    
    }

    function getCoordsFromHuman(startCoord, direction, length) {
        // console.log('pass to getCoordsFromHuman:', startCoord, direction, length);
        let coordSet = human.board.getCoords(startCoord, direction, length);
        let isValid = human.board.setIsValid(coordSet);
        // console.log('getCoordsFromHuman:', coordSet, isValid);
        events.publish('receiveIDArray', coordSet, isValid); // subscribed by ui.js
    }

    // event subscriptions
    events.subscribe('queryIDArray', getCoordsFromHuman); // published by ui.js (playerBoards[0].onMouseOver)

    return {
        init, // used by index.js
    }

})();

export default game;
