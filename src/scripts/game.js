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

    return {
        init, // used by index.js
    }

})();

export default game;
