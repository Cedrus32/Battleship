import events from '../events.js';
import create from './create.js';
import iconsArray from './icons.js';

const ui = (() => {
    let playerBoards = [document.getElementById('human').lastElementChild, document.getElementById('computer').lastElementChild];
    let shipContainers = [document.getElementById('human').firstElementChild, document.getElementById('computer').firstElementChild];
    let body = document.querySelector('body');

    // ! adjust container value, and include class/id to create both menu & tally containers depending on state

    // event listeners
    body.addEventListener('click', (e) => {
        if (e.target.id === 'play') {
            play();
        }
        if (e.target.id === 'restart') {
            console.log('restart switch');
        }
    })

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
            console.log(i);
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
        let ships = [[5, 'acc'],
                     [4, 'bs'],
                     [3, 'crus'],
                     [2, 'dest1'],
                     [2, 'dest2'],
                     [1, 'sub1'],
                     [1, 'sub2']
                    ];
        for (let i = 0; i < ships.length; i++) {
            let cellContainer;
            if (playerType === '') {
                cellContainer = create.div('', '.ship', `#${ships[i][0]}-${ships[i][1]}`);
            } else {
                cellContainer = create.div('', '.ship', `#${playerType}-${ships[i][1]}`);
            }
            for (let j = 0; j < ships[i][0]; j++) {
                let cell = create.div('', false);
                cellContainer.append(cell);
            }
            container.append(cellContainer);
        }
    }
    function clearShipContainer(container) {
        console.log(container);
        while (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }
    }

    return {
        init, // used by index.js
    }

})();

export default ui;
