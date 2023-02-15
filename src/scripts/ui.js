import events from '../events.js';
import create from './create.js';

const ui = (() => {
    let playerBoards = [document.getElementById('human').lastElementChild, document.getElementById('computer').lastElementChild];
    let shipTallies = [document.getElementById('human').firstElementChild, document.getElementById('computer').firstElementChild];
    let footer = document.querySelector('footer');

    function init() {
        let i = 0;
        while (i < playerBoards.length) {
            generateGrid(playerBoards[i]);
            let playerType;
            if (i === 0) {
                playerType = 'h';
            } else {
                playerType = 'c';
            }
            generateShipTallies(shipTallies[i], playerType);
            i++;
        }
    }
    function generateGrid(board) {
        let i = 0;
        while (i < 10) {
            let row = create.div('', '.row')
            let j = 0;
            while (j < 10) {
                let cell = create.div('', '.cell', `#${j}${i}`);
                row.append(cell);
                j++;
            }
            board.append(row);
            i++;
        }
    }
    function generateShipTallies(tallyContainer, player) {
        let ships = [[5, '.ship', 'acc'],
                     [4, '.ship', 'bs'],
                     [3, '.ship', 'crus'],
                     [2, '.ship', 'dest1'],
                     [2, '.ship', 'dest2'],
                     [1, '.ship', 'sub1'],
                     [1, '.ship', 'sub2']
                    ];
        for (let i = 0; i < ships.length; i++) {
            let cellContainer = create.div('', ships[i][1], `#${player}-${ships[i][2]}`);
            for (let j = 0; j < ships[i][0]; j++) {
                let cell = create.span('');
                cellContainer.append(cell);
            }
            tallyContainer.append(cellContainer);
        }
    }

    return {
        init, // used by index.js
    }

})();

export default ui;
