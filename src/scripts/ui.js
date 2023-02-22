import events from '../events.js';
import create from './create.js';
import iconsArray from './icons.js';

const ui = (() => {
    let playerBoards = [document.getElementById('human').lastElementChild, document.getElementById('computer').lastElementChild];
    let shipContainers = [document.getElementById('human').firstElementChild, document.getElementById('computer').firstElementChild];
    let footer = document.querySelector('footer');

    // ! adjust container value, and include class/id to create both menu & tally containers depending on state

    // event listeners

    // driver methods
    function init() {
        let i = 0;
        while (i < playerBoards.length) {
            generateGrid(playerBoards[i]);
            i++;
        }
        setSectionType(shipContainers[0], 'menu');
        generateShipMenu();
    }
    function play() {
        let i = 0;
        while (i < shipContainers.length) {
            clearShipContainer(shipContainers[i]);
            setSectionType(shipContainers[i], 'tally');
            generateShipTallies(shipContainers[i], i);
            i++;
        }
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
    function setSectionType(section, selector) {
        if (section.classList.length > 0) {
            section.classList = '';
        }
        section.classList.add(selector);
    }
    function generateShipMenu() {
        makeShipIcons('', shipContainers[0]);
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
