import events from '../events.js';
import create from './create.js';
import iconsArray from './icons.js';

const ui = (() => {
    let playerBoards = [document.getElementById('human').lastElementChild, document.getElementById('computer').lastElementChild];
    let shipContainers = [document.getElementById('human').firstElementChild, document.getElementById('computer').firstElementChild];
    let body = document.querySelector('body');

    let action; // ! move to board object?
    let selectedShip; // ! move to board object?
    let coordData; // ! move to board object?
    let direction = 'h';    // ! move to board object?

    // event listeners
    body.addEventListener('click', (e) => {
        if (e.target.id === 'play') {
            play();
        }
        if (e.target.id === 'restart') {
            // restart();
        }
        if (e.target.parentElement.classList.contains('ship') && !e.target.parentElement.classList.contains('placed') && shipContainers[0].classList.contains('menu')) {
            setMenuSelect(e.target.parentElement);
        }
        if (e.target.classList.contains('cell') && action === 'placing' && coordData[1] === true) {
            setPlacedStyles();
            // publish event -- makeShip
        }
    });
    playerBoards[0].addEventListener('mouseover', (e) => {
        if (action === 'placing') {
            // console.log('publish queryIDArray:', e.target.id, direction, selectedShip.id.slice(0, 1));
            events.publish('queryIDArray', e.target.id, direction, selectedShip.id.slice(0, 1)); // subscribed by game.js
        }
    });
    playerBoards[0].addEventListener('mouseleave', () => {
        if (action === 'placing' && coordData !== undefined) {
            removeCellHover();
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

    // generative methods
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

    // placement methods
    function setMenuSelect(targetShip) {
        if (selectedShip === undefined) {
            action = 'placing';
            selectedShip = targetShip;
            addMenuSelect(selectedShip);
        } else {
            if (targetShip === selectedShip) {
                removeMenuSelect(selectedShip);
                action = undefined;
                selectedShip = undefined;
            } else if (targetShip !== selectedShip) {
                removeMenuSelect(selectedShip);
                selectedShip = targetShip;
                addMenuSelect(selectedShip);
            }   
        }
    }
    function addMenuSelect(ship) {
        ship.classList.add('selected');
    }
    function removeMenuSelect(ship) {
        ship.classList.remove('selected');
    }
    function setBoardHover(coordSet, isValid) {
        // console.log('pass to setBoardHover:', coordSet, isValid);
        if (coordData === undefined) {
            coordData = [coordSet, isValid];
            addCellHover(coordData[1]);
        } else {
            removeCellHover();
            coordData = [coordSet, isValid];
            addCellHover(coordData[1]);
        }
    }
    function addCellHover(isValid) {
        // console.log(isValid);
        for (let i = 0; i < coordData[0].length; i++) {
            if (coordData[0][i].length <= 2) {
                let cell = document.getElementById(coordData[0][i]);
                cell.classList.add('hover');
                if (isValid === true) {
                    cell.classList.add('is-valid');
                } else if (isValid === false) {
                    cell.classList.add('is-invalid');
                }
            }
        }
    }
    function removeCellHover() {
        for (let i = 0; i < coordData[0].length; i++) {
            if (coordData[0][i].length <= 2) {
                let cell = document.getElementById(coordData[0][i]);
                if (cell.classList.contains('placed')) {
                    cell.classList = 'cell placed';
                } else {
                    cell.classList = 'cell';
                }
            }
        }
    }
    function setPlacedStyles() {
        selectedShip.classList = 'ship placed';
        for (let i = 0; i < coordData[0].length; i++) {
            let cell = document.getElementById(coordData[0][i]);
            console.log(cell);
            cell.classList = 'cell';
            cell.classList.add('placed');
        }
        selectedShip = undefined;
        coordData = undefined;
    }

    // event subscriptions
    events.subscribe('receiveIDArray', setBoardHover); // published by game.js (getCoordsFromHuman)

    return {
        init, // used by index.js
    }

})();

export default ui;
