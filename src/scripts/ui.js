import events from '../events.js';
import create from './create.js';

const ui = (() => {
    let playerBoards = [document.getElementById('human').lastElementChild, document.getElementById('computer').lastElementChild];
    let shipTallies = [document.getElementById('human').firstElementChild, document.getElementById('computer').firstElementChild];
    let footer = [document.getElementById('ship-menu'), document.getElementById('controls')];

    // driver method
    function init() {
        let i = 0;
        while (i < playerBoards.length) {
            generateGrid(playerBoards[i]);
            generateShipTallies(shipTallies[i], i);
            i++;
        }
        generateShipMenu();
    }

    // helper methods
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
    function generateShipTallies(tallyContainer, index) {
        let playerType;
        if (index === 0) {
            playerType = 'h';
        } else  {
            playerType = 'c';
        }
        makeShipIcons(playerType, tallyContainer);
    }
    function generateShipMenu() {
        makeShipIcons('', footer[0]);
    }
    function makeShipIcons(playerType, container) {
        let ships = [[5, '.ship', 'acc'],
                     [4, '.ship', 'bs'],
                     [3, '.ship', 'crus'],
                     [2, '.ship', 'dest1'],
                     [2, '.ship', 'dest2'],
                     [1, '.ship', 'sub1'],
                     [1, '.ship', 'sub2']
                    ];
        for (let i = 0; i < ships.length; i++) {
            let cellContainer;
            if (playerType === '') {
                cellContainer = create.div('', ships[i][1], `#${ships[i][2]}`);
            } else {
                cellContainer = create.div('', ships[i][1], `#${playerType}-${ships[i][2]}`);
            }
            for (let j = 0; j < ships[i][0]; j++) {
                let cell = create.span('');
                cellContainer.append(cell);
            }
            container.append(cellContainer);
        }
    }

    return {
        init, // used by index.js
    }

})();

export default ui;
