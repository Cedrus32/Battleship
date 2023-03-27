/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/global.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/global.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL VARIABLES */\n\n:root {\n    --font-size: 10pt;\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 16); /* 15 for 10+5 cells ++ 1 to /13 for cell gaps */\n    --cell-gap: calc(var(--player-fr) / 13);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5) + calc(var(--cell-gap) * 4));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(calc(var(--player-fr) * 10) + calc(var(--cell-gap) * 9));\n    --board-cell: var(--player-fr);\n\n    --main-height: calc(5.5vw + 1vw + var(--board-area) + calc(var(--main-spacing) * 2) + calc(var(--player-fr) * 2));\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-rows: auto;\n    grid-template-areas: '.       title'\n                         'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-rows: auto;\n    grid-template-areas: 'title .'\n                         'board sidebar';\n}\n\n    .title {\n        grid-area: title;\n    }\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .title {\n            padding-bottom: calc(var(--main-spacing) / 2);\n        }\n\n        #computer .title {\n            text-align: end;\n        }\n\n        .menu,\n        .tally {\n            gap: var(--sidebar-spacing);\n        }\n\n            .ship,\n            .board,\n            .row {\n                gap: var(--cell-gap);\n            }\n\n    footer {\n        justify-content: center;\n        gap: calc(var(--main-spacing) / 2);\n    }\n\n    #alert,\n    .screen {\n        position: absolute;\n    }\n\n    #alert {\n        top: calc(var(--main-height) / 2);\n        left: 50%;\n        transform: translate(-50%, -50%);\n        justify-content: center;\n        align-items: center;\n        padding: var(--main-spacing);\n        gap: var(--main-spacing);\n    }\n\n    .screen {\n        top: 0;\n        left: 0;\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .tally .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    footer {\n        width: 100%;\n    }\n\n        button {\n            height: calc(var(--player-fr) * 2);\n            width: auto;\n        }\n\n        button#restart-game {\n            transform: scaleX(-1);\n        }\n\n            img {\n                height: 100%;\n                width: auto;\n            }\n        \n            button:hover img {\n                transform: scale(1.05);\n            }\n        \n            button:active img {\n                transform: scale(0.95);\n            }\n\n    .screen {\n        height: 100vh;\n        width: 100vw;\n    }\n\n/* COLORS , FONTS & SHAPING */\n\nbody,\n#alert,\n.screen {\n    background-color: #b1c6eb;\n}\n\n#alert,\n.title {\n    color: blue;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.screen {\n    opacity: 75%;\n}\n\n.title {\n    font-size: 5vw;\n    line-height: 5.5vw;\n}\n\n#alert span {\n    font-size: 2vw;\n    line-height: 2.5vw;\n}\n\n.ship div,\n.cell,\n#alert {\n    border-radius: 10%;\n}\n\n.cell,\n.cell.attack:not(.cell.hit),\n.cell.attack:not(.cell.miss),\n#alert {\n    border: blue 1px solid;\n}\n\n.cell.attack:not(.cell.hit),\n.cell.attack:not(.cell.miss) {\n    opacity: 25%;\n}\n\n.menu .ship div,\n.cell.placed,\n.ship.selected div,\n.ship.placed div,\n.hover.is-valid,\n.tally .ship div {\n    background-color: blue;\n}\n\n.ship.selected div,\n.ship.placed div,\n.hover.is-valid,\n.tally .ship div {\n    opacity: 50%;\n}\n\n.miss {\n    background-color: rgba(0, 0, 131);\n    opacity: 15%;\n    border-color: rgba(0, 0, 131);\n}\n\n.hover.is-invalid,\n.sunk div,\n.hit {\n    background-color: red !important;\n    opacity: 50%;\n    border-color: red;\n}\n\n.hover.is-valid,\n.sunk div {\n    opacity: 50%;\n}\n\n.hit {\n    opacity: 75%;\n}\n\nbutton {\n    background-color: transparent;\n    border: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB;IACI,iBAAiB;IACjB,mBAAmB;IACnB,oEAAoE;IACpE,0CAA0C,EAAE,gDAAgD;IAC5F,uCAAuC;;IAEvC,gDAAgD;IAChD,qGAAqG;IACrG,6BAA6B;;IAE7B,2EAA2E;IAC3E,8BAA8B;;IAE9B,iHAAiH;AACrH;;AAEA,iBAAiB;;AAEjB;;;;;;;;;IASI,aAAa;AACjB;;AAEA;;;;;IAKI,iBAAiB;AACrB;;AAEA,iBAAiB;;AAEjB;;IAEI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,wBAAwB;IACxB;wCACoC;AACxC;;AAEA;IACI,4DAA4D;IAC5D,wBAAwB;IACxB;wCACoC;AACxC;;IAEI;QACI,gBAAgB;IACpB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,gBAAgB;IACpB;;AAEJ,gBAAgB;;AAEhB;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;IAEI;QACI,wBAAwB;IAC5B;;QAEI;YACI,6CAA6C;QACjD;;QAEA;YACI,eAAe;QACnB;;QAEA;;YAEI,2BAA2B;QAC/B;;YAEI;;;gBAGI,oBAAoB;YACxB;;IAER;QACI,uBAAuB;QACvB,kCAAkC;IACtC;;IAEA;;QAEI,kBAAkB;IACtB;;IAEA;QACI,iCAAiC;QACjC,SAAS;QACT,gCAAgC;QAChC,uBAAuB;QACvB,mBAAmB;QACnB,4BAA4B;QAC5B,wBAAwB;IAC5B;;IAEA;QACI,MAAM;QACN,OAAO;IACX;;AAEJ,WAAW;;AAEX;IACI,YAAY;IACZ,YAAY;AAChB;;IAEI;QACI,4BAA4B;IAChC;;QAEI;;YAEI,qCAAqC;QACzC;;QAEA;YACI,oCAAoC;QACxC;;YAEI;gBACI,YAAY;gBACZ,kBAAkB;YACtB;;gBAEI;;;oBAGI,wBAAwB;oBACxB,uBAAuB;gBAC3B;;QAER;YACI,yBAAyB;YACzB,wBAAwB;QAC5B;;IAEJ;QACI,WAAW;IACf;;QAEI;YACI,kCAAkC;YAClC,WAAW;QACf;;QAEA;YACI,qBAAqB;QACzB;;YAEI;gBACI,YAAY;gBACZ,WAAW;YACf;;YAEA;gBACI,sBAAsB;YAC1B;;YAEA;gBACI,sBAAsB;YAC1B;;IAER;QACI,aAAa;QACb,YAAY;IAChB;;AAEJ,6BAA6B;;AAE7B;;;IAGI,yBAAyB;AAC7B;;AAEA;;IAEI,WAAW;IACX,sHAAsH;AAC1H;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;;;;IAII,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;;;IAMI,sBAAsB;AAC1B;;AAEA;;;;IAII,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,6BAA6B;AACjC;;AAEA;;;IAGI,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB","sourcesContent":["/* GLOBAL VARIABLES */\n\n:root {\n    --font-size: 10pt;\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 16); /* 15 for 10+5 cells ++ 1 to /13 for cell gaps */\n    --cell-gap: calc(var(--player-fr) / 13);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5) + calc(var(--cell-gap) * 4));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(calc(var(--player-fr) * 10) + calc(var(--cell-gap) * 9));\n    --board-cell: var(--player-fr);\n\n    --main-height: calc(5.5vw + 1vw + var(--board-area) + calc(var(--main-spacing) * 2) + calc(var(--player-fr) * 2));\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-rows: auto;\n    grid-template-areas: '.       title'\n                         'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-rows: auto;\n    grid-template-areas: 'title .'\n                         'board sidebar';\n}\n\n    .title {\n        grid-area: title;\n    }\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .title {\n            padding-bottom: calc(var(--main-spacing) / 2);\n        }\n\n        #computer .title {\n            text-align: end;\n        }\n\n        .menu,\n        .tally {\n            gap: var(--sidebar-spacing);\n        }\n\n            .ship,\n            .board,\n            .row {\n                gap: var(--cell-gap);\n            }\n\n    footer {\n        justify-content: center;\n        gap: calc(var(--main-spacing) / 2);\n    }\n\n    #alert,\n    .screen {\n        position: absolute;\n    }\n\n    #alert {\n        top: calc(var(--main-height) / 2);\n        left: 50%;\n        transform: translate(-50%, -50%);\n        justify-content: center;\n        align-items: center;\n        padding: var(--main-spacing);\n        gap: var(--main-spacing);\n    }\n\n    .screen {\n        top: 0;\n        left: 0;\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .tally .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    footer {\n        width: 100%;\n    }\n\n        button {\n            height: calc(var(--player-fr) * 2);\n            width: auto;\n        }\n\n        button#restart-game {\n            transform: scaleX(-1);\n        }\n\n            img {\n                height: 100%;\n                width: auto;\n            }\n        \n            button:hover img {\n                transform: scale(1.05);\n            }\n        \n            button:active img {\n                transform: scale(0.95);\n            }\n\n    .screen {\n        height: 100vh;\n        width: 100vw;\n    }\n\n/* COLORS , FONTS & SHAPING */\n\nbody,\n#alert,\n.screen {\n    background-color: #b1c6eb;\n}\n\n#alert,\n.title {\n    color: blue;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n.screen {\n    opacity: 75%;\n}\n\n.title {\n    font-size: 5vw;\n    line-height: 5.5vw;\n}\n\n#alert span {\n    font-size: 2vw;\n    line-height: 2.5vw;\n}\n\n.ship div,\n.cell,\n#alert {\n    border-radius: 10%;\n}\n\n.cell,\n.cell.attack:not(.cell.hit),\n.cell.attack:not(.cell.miss),\n#alert {\n    border: blue 1px solid;\n}\n\n.cell.attack:not(.cell.hit),\n.cell.attack:not(.cell.miss) {\n    opacity: 25%;\n}\n\n.menu .ship div,\n.cell.placed,\n.ship.selected div,\n.ship.placed div,\n.hover.is-valid,\n.tally .ship div {\n    background-color: blue;\n}\n\n.ship.selected div,\n.ship.placed div,\n.hover.is-valid,\n.tally .ship div {\n    opacity: 50%;\n}\n\n.miss {\n    background-color: rgba(0, 0, 131);\n    opacity: 15%;\n    border-color: rgba(0, 0, 131);\n}\n\n.hover.is-invalid,\n.sunk div,\n.hit {\n    background-color: red !important;\n    opacity: 50%;\n    border-color: red;\n}\n\n.hover.is-valid,\n.sunk div {\n    opacity: 50%;\n}\n\n.hit {\n    opacity: 75%;\n}\n\nbutton {\n    background-color: transparent;\n    border: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL ========================= */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0px; margin: 0px;\n\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    font-size: 100%;\n    font: inherit;\n\n    vertical-align: baseline;\n}\n\n\n/* SECTIONS ========================= */\n\n/* correct font size, margin on `h1` elements */\n/* within `section` and `article` contexts */\n/* in Chrome, Firefox, and Safari */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* standardize margins for `header` elements across broswers */\n\nh2, h3, h4, h5, h6 {\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n}\n\n/* standardize margins for `p` elements across browsers */\n\np {\n    margin-top: 0;\n    margin-bottom: 1rem;\n}\n\n\n/* TEXT-LEVEL SEMANTICS ========================= */\n\n/* remove gray bg on active links in IE 10 */\n\na {\n    background-color: transparent;\n}\n\n/* 1. remove bottom border in Chrome 57- */\n/* 2. add correct text decoration in Chrome, Edge, IE, Opera, Safari */\n\nabbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n}\n\n/* add correct font weight in Chrome, Edge, Safari */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* add correct font size in all browsers */\n\nsmall {\n    font-size: 80%;\n}\n\n\n/* EMBEDDED CONTENT ========================= */\n\n/* remove border on images inside links in IE 10 */\n\nimg {\n    border-style: none;\n}\n\n\n/* FORMS ========================= */\n\n/* 1. change font styles in all browsers */\n/* 2. remove margin in Firefox and Safari */\n\nbutton,\ninput,\nselect {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/* show overflow in IE, Edge */\n\nbutton,\ninput {\n    overflow: visible;\n}\n\n/* remove inheritance of text transform in Edge, Firefox, IE */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/* correct the inability to style clickable types in iOS, Safari */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/* remove inner border, padding in Firefox */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/* restore focus styles unset by previous rule ^^ */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n\n/* MISC ========================= */\n\n/* add correct display in IE 10 */\n\n[hidden] {\n    display: none;\n}", "",{"version":3,"sources":["webpack://./src/styles/reset.css"],"names":[],"mappings":"AAAA,qCAAqC;;AAErC;;;IAGI,sBAAsB;AAC1B;;AAEA;IACI,YAAY,EAAE,WAAW;;IAEzB,iBAAiB;IACjB,8BAA8B;IAC9B,0BAA0B;IAC1B,eAAe;IACf,aAAa;;IAEb,wBAAwB;AAC5B;;;AAGA,uCAAuC;;AAEvC,+CAA+C;AAC/C,4CAA4C;AAC5C,mCAAmC;;AAEnC;IACI,cAAc;IACd,gBAAgB;AACpB;;AAEA,8DAA8D;;AAE9D;IACI,aAAa;IACb,qBAAqB;AACzB;;AAEA,yDAAyD;;AAEzD;IACI,aAAa;IACb,mBAAmB;AACvB;;;AAGA,mDAAmD;;AAEnD,4CAA4C;;AAE5C;IACI,6BAA6B;AACjC;;AAEA,0CAA0C;AAC1C,sEAAsE;;AAEtE;IACI,mBAAmB,EAAE,MAAM;IAC3B,0BAA0B,EAAE,MAAM;IAClC,iCAAiC,EAAE,MAAM;AAC7C;;AAEA,oDAAoD;;AAEpD;;IAEI,mBAAmB;AACvB;;AAEA,0CAA0C;;AAE1C;IACI,cAAc;AAClB;;;AAGA,+CAA+C;;AAE/C,kDAAkD;;AAElD;IACI,kBAAkB;AACtB;;;AAGA,oCAAoC;;AAEpC,0CAA0C;AAC1C,2CAA2C;;AAE3C;;;IAGI,oBAAoB,EAAE,MAAM;IAC5B,eAAe,EAAE,MAAM;IACvB,iBAAiB,EAAE,MAAM;IACzB,SAAS,EAAE,MAAM;AACrB;;AAEA,8BAA8B;;AAE9B;;IAEI,iBAAiB;AACrB;;AAEA,8DAA8D;;AAE9D;;IAEI,oBAAoB;AACxB;;AAEA,kEAAkE;;AAElE;;;;IAII,0BAA0B;AAC9B;;AAEA,4CAA4C;;AAE5C;;;;IAII,kBAAkB;IAClB,UAAU;AACd;;AAEA,mDAAmD;;AAEnD;;;;IAII,8BAA8B;AAClC;;;AAGA,mCAAmC;;AAEnC,iCAAiC;;AAEjC;IACI,aAAa;AACjB","sourcesContent":["/* GLOBAL ========================= */\n\n*,\n*::before,\n*::after {\n    box-sizing: border-box;\n}\n\n* {\n    padding: 0px; margin: 0px;\n\n    line-height: 1.15;\n    -webkit-text-size-adjust: 100%;\n    -ms-text-size-adjust: 100%;\n    font-size: 100%;\n    font: inherit;\n\n    vertical-align: baseline;\n}\n\n\n/* SECTIONS ========================= */\n\n/* correct font size, margin on `h1` elements */\n/* within `section` and `article` contexts */\n/* in Chrome, Firefox, and Safari */\n\nh1 {\n    font-size: 2em;\n    margin: 0.67em 0;\n}\n\n/* standardize margins for `header` elements across broswers */\n\nh2, h3, h4, h5, h6 {\n    margin-top: 0;\n    margin-bottom: 0.5rem;\n}\n\n/* standardize margins for `p` elements across browsers */\n\np {\n    margin-top: 0;\n    margin-bottom: 1rem;\n}\n\n\n/* TEXT-LEVEL SEMANTICS ========================= */\n\n/* remove gray bg on active links in IE 10 */\n\na {\n    background-color: transparent;\n}\n\n/* 1. remove bottom border in Chrome 57- */\n/* 2. add correct text decoration in Chrome, Edge, IE, Opera, Safari */\n\nabbr[title] {\n    border-bottom: none; /* 1 */\n    text-decoration: underline; /* 2 */\n    text-decoration: underline dotted; /* 2 */\n}\n\n/* add correct font weight in Chrome, Edge, Safari */\n\nb,\nstrong {\n    font-weight: bolder;\n}\n\n/* add correct font size in all browsers */\n\nsmall {\n    font-size: 80%;\n}\n\n\n/* EMBEDDED CONTENT ========================= */\n\n/* remove border on images inside links in IE 10 */\n\nimg {\n    border-style: none;\n}\n\n\n/* FORMS ========================= */\n\n/* 1. change font styles in all browsers */\n/* 2. remove margin in Firefox and Safari */\n\nbutton,\ninput,\nselect {\n    font-family: inherit; /* 1 */\n    font-size: 100%; /* 1 */\n    line-height: 1.15; /* 1 */\n    margin: 0; /* 2 */\n}\n\n/* show overflow in IE, Edge */\n\nbutton,\ninput {\n    overflow: visible;\n}\n\n/* remove inheritance of text transform in Edge, Firefox, IE */\n\nbutton,\nselect {\n    text-transform: none;\n}\n\n/* correct the inability to style clickable types in iOS, Safari */\n\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"] {\n    -webkit-appearance: button;\n}\n\n/* remove inner border, padding in Firefox */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n    border-style: none;\n    padding: 0;\n}\n\n/* restore focus styles unset by previous rule ^^ */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n    outline: 1px dotted ButtonText;\n}\n\n\n/* MISC ========================= */\n\n/* add correct display in IE 10 */\n\n[hidden] {\n    display: none;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/global.css":
/*!*******************************!*\
  !*** ./src/styles/global.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./global.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/global.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_global_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/reset.css":
/*!******************************!*\
  !*** ./src/styles/reset.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets sync \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/":
/*!**************************************************************************!*\
  !*** ./src/assets/ sync nonrecursive \.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/ ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./cancel.svg": "./src/assets/cancel.svg",
	"./confirm.svg": "./src/assets/confirm.svg",
	"./play.svg": "./src/assets/play.svg",
	"./play_gray.svg": "./src/assets/play_gray.svg",
	"./restart.svg": "./src/assets/restart.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets sync \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/";

/***/ }),

/***/ "./src/events.js":
/*!***********************!*\
  !*** ./src/events.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// & pubsub events manager

const events = (() => {
    let _events = {};

    // subscribe event to list
    function subscribe(eventName, callback) {
        if (!Array.isArray(_events[eventName])) {
            _events[eventName] = [];
        };
        _events[eventName].push(callback);
        // console.log(`SUBSCRIBING to ${eventName}`);
    }

    // unsubscribe event to list
    function unsubscribe(eventName) {
        console.log(eventName);
        console.log(_events[eventName].length - 1);
        _events[eventName].splice((_events[eventName].length - 1), 1);
    }

    // publish event with data
    function publish(eventName, ...data) {
        if (!Array.isArray(_events[eventName])){
            return;
        }
        _events[eventName].forEach(callback => {
            callback(...data);
            // console.log(`PUBLISHING to ${eventName}`);
        });
    }

    // debug
    function viewEvents() {
        console.log(_events);
    }

    return {
        subscribe,
        unsubscribe,
        publish,
        viewEvents,
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (events);

/***/ }),

/***/ "./src/scripts/classes.js":
/*!********************************!*\
  !*** ./src/scripts/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events.js */ "./src/events.js");


// CLASSES
class Ship {
    constructor(length = null, dir = null, name = null, coords = null) {
        this.length = length;
        this.dir = dir;
        this.name = name;
        this.hits = 0;
        this.sunk = false;
        this.coords = coords;
    }

    // setters
    logHit() {
        this.hits += 1;
        console.log('ship hits:', this.hits);
        this.isSunk();
    }
    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
        }
        console.log('ship sunk:', this.sunk)
    }
    isPlaced() {
        this.placed = true;
    }
}
class Gameboard {
    constructor() {
        this.ships = [];
        this.replacing = undefined;
        this.shipsSunk = 0;
    }

    // getters
    getShip(targetCoord) {
        for (let ship in this.ships) {
            for (let coord in this.ships[ship].coords) {
                if (this.ships[ship].coords[coord] === targetCoord) {
                    return this.ships[ship];
                }
            }
        }
    }
    getCoords(startCoord, dir, shipLen) {
        shipLen = parseInt(shipLen);
        console.log(startCoord, dir, shipLen);
        let coordSet = [startCoord];
        let xPosition = parseInt(startCoord[0]);
        let yPosition = parseInt(startCoord[1]);
        let i = 0;
        while (i < shipLen - 1) {
            switch(dir) {
                case 'u':
                    yPosition -= 1;
                    break;
                case 'd':
                    yPosition += 1;
                    break;
                case 'l':
                    xPosition -= 1;
                    break;
                case 'r':
                    xPosition += 1;
            }
            let newCoord = `${xPosition}${yPosition}`;
            switch(true) {
                case (dir === 'u' || dir === 'l'):
                    coordSet.unshift(newCoord);
                    break;
                case (dir === 'd' || dir === 'r'):
                    coordSet.push(newCoord);
            }
            i++;
        }
        return coordSet;
    }
    getBuffer(shipObject) {
        let bufferSet = [];
        bufferSet.push(...getEnds(shipObject.coords[0], shipObject.coords[shipObject.length - 1], shipObject.dir));
        bufferSet.push(...getSides(shipObject.coords, shipObject.dir, shipObject.length));

        bufferSet = bufferSet.filter(coord => coord.length < 3);
        return bufferSet;

        function getEnds(startCoord, endCoord, direction) {
            let bufferCoords = [];
            let x = parseInt(startCoord[0]);
            let y = parseInt(startCoord[1]);
            if (direction === 'd' || direction === 'u') {
                bufferCoords.push(`${x}${y - 1}`);
                bufferCoords.push(`${x - 1}${y - 1}`);
                bufferCoords.push(`${x + 1}${y - 1}`);
            } else if (direction === 'l' || direction === 'r') {
                bufferCoords.push(`${x - 1}${y}`);
                bufferCoords.push(`${x - 1}${y - 1}`);
                bufferCoords.push(`${x - 1}${y + 1}`);
            }
            x = parseInt(endCoord[0]);
            y = parseInt(endCoord[1]);
            if (direction === 'd' || direction === 'u') {
                bufferCoords.push(`${x}${y + 1}`);
                bufferCoords.push(`${x - 1}${y + 1}`);
                bufferCoords.push(`${x + 1}${y + 1}`);
            } else if (direction === 'l' || direction === 'r') {
                bufferCoords.push(`${x + 1}${y}`);
                bufferCoords.push(`${x + 1}${y - 1}`);
                bufferCoords.push(`${x + 1}${y + 1}`);
            }
            return bufferCoords;
        }
        function getSides(coords, direction, length) {
            let bufferCoords = [];
            let i = 0;
            while (i < length) {
                let x = parseInt(coords[i][0])
                let y = parseInt(coords[i][1]);
                if (direction === 'd' || direction === 'u') {
                    bufferCoords.push(`${x - 1}${y}`);
                    bufferCoords.push(`${x + 1}${y}`);
                }
                if (direction === 'l' || direction === 'r') {
                    bufferCoords.push(`${x}${y - 1}`);
                    bufferCoords.push(`${x}${y + 1}`);
                }
                i++;
            }
            return bufferCoords;
        }
    }

    // resetters
    removeShip(shipName) {
        for (let ship in this.ships) {
            if (this.ships[ship].name === shipName) {
                if (this.ships.length === 7) {
                    this.replacing = this.ships[ship];
                }
                this.ships.splice(ship, 1);
            }
        }
    }
    resetBoard() {
        this.ships = [];
        this.replacing = undefined;
        this.shipsSunk = 0;
    }

    // bools
    setIsValid(coordSet) {
        for (let coord in coordSet) {
            if (coordSet[coord].length > 2) {
                console.log(`${coordSet[coord]} outside bounds`);
                return false;
            }
            let x = parseInt(coordSet[coord][0]);
            let y = parseInt(coordSet[coord][1]);
            for (let item in this.ships) {
                let ship = this.ships[item];
                let xMin = parseInt(ship.coords[0][0]) - 1;
                let xMax = parseInt(ship.coords[ship.coords.length - 1][0]) + 1;
                let yMin = parseInt(ship.coords[0][1]) - 1;
                let yMax = parseInt(ship.coords[ship.coords.length - 1][1]) + 1;
                if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
                    console.log(`${coordSet[coord]} too close to placed ship`);
                    return false;
                }
            }
        }
        return true;
    }
    isHit(attackCoord) {
        for (let ship in this.ships) {
            for (let coord in this.ships[ship].coords) {
                if (attackCoord === this.ships[ship].coords[coord]) {
                    return [true, this.ships[ship]];
                }
            }
        }
        return [false, undefined];
    }
    isLoser() {
        if (this.shipsSunk === this.ships.length) {
            return true;
        }
    }

    // placement
    placeShip(startCoord, dir, shipLen, shipName) {
        shipLen = parseInt(shipLen);
        let coordSet = this.getCoords(startCoord, dir, shipLen); // used by computer AI to generate ship placement
        if (this.setIsValid(coordSet)) {    // used by computer AI to varify placement validity
            this.ships.push(makeShip(shipLen, dir, shipName, coordSet));
            return true;    // used by computer AI to control placement loop
        }
        return false;   // ""
    }
    replaceShipToOriginal() {
        this.ships.push(this.replacing);
        this.replacing = undefined;
    }

    // attacks
    receiveAttack(player, coord) {
        let outcome = this.isHit(coord);
        let hit = outcome[0];
        let ship = outcome[1];
        if (hit) {
            ship.logHit();
            if (ship.sunk) {
                this.shipsSunk += 1;
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('displaySunk', player, ship.name); // subscribed by ui.js
                let buffer = this.getBuffer(ship);
                if (player === 'human') {
                    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('addBufferToComputerAttacks', buffer); // subscribed by game.js
                }
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('displayBuffer', player, buffer); // subscribed by ui.js
            }
        }
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('displayAttack', player, coord, hit); // subscribed by ui.js
        if (player === 'human') {
            let sunk;
            if (ship !== undefined) {
                sunk = ship.sunk;
            }
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('receiveAttackResult', sunk, hit, coord); // subscribed by game.js
        }
    }
}
class Human {
    constructor() {
        this.type = 'human';
        this.board = makeGameboard();
    }

    // attack
    sendAttack(player, coord, board) {
        board.receiveAttack(player, coord);
    }
}
class Computer extends Human {
    constructor() {
        super(Human);
        this.type = 'computer';
        this.attacksMade = [];
        this.strategy = {mode: 'search',
                         startCoord: undefined,
                         direction: undefined,
                         targets: [],
                        };
    }

    // placement
    randomizeShips() {
        let availShips = [[5, 'acc'],
                          [4, 'bs'],
                          [3, 'crus'],
                          [2, 'dest2'],
                          [2, 'dest1'],
                          [1, 'sub2'],
                          [1, 'sub1'],
                         ];
        let dirs = ['u', 'd', 'l', 'r'];
        
        while (availShips.length > 0) {
            let shipLen = availShips[0][0];
            let shipName = availShips[0][1];
            availShips.shift();

            let dir = dirs[Math.floor(Math.random() * dirs.length)];

            let valid = false;
            while (!valid) {
                let coord = '';
                let i = 0;
                while (i < 2) {
                    let index = Math.floor(Math.random() * 10);
                    coord += `${index}`;
                    i++;
                }

                valid = this.board.placeShip(coord, dir, shipLen, shipName);
            }
        }

        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('makePlayLive', ''); // subscribed by ui.js
    }

    // attack drivers
    makeAttack(board) {
        console.log(this.strategy.mode);
        if (this.strategy.mode === 'search') {
            this.randomizeAttack(board);
        } else if (this.strategy.mode === 'hunt' || this.strategy.mode === 'target') {
            this.targetAttack(board);
        }
    }
    randomizeAttack(board) {
        let valid = false;
        while (!valid) {
            let coord = '';
            let i = 0;
            while (i < 2) {
                let index = Math.floor(Math.random() * 10);
                coord += `${index}`;
                i++;
            }
            if (!this.attacksMade.includes(coord)) {
                valid = true;
                this.attacksMade.push(coord);
                this.sendAttack('human', coord, board);
            }
        }
    }
    targetAttack(board) {
        let valid = false;
        while (!valid) {
            let targetCoord;
            if (this.strategy.direction === undefined) {
                targetCoord = this.strategy.targets.shift();
            } else if (this.strategy.targets[0].length > 0) {
                targetCoord = this.strategy.targets[0].shift();
            } else {
                targetCoord = this.strategy.targets[1].shift();
            }
            console.log(this.attacksMade, targetCoord.length);
            if (!this.attacksMade.includes(targetCoord) && targetCoord.length < 3) {
                valid = true;
                this.attacksMade.push(targetCoord);
                this.sendAttack('human', targetCoord, board);
            }  
        }
        console.log(this.attacksMade);
    }
    
    // attack helpers
    receiveAttackResult(sunk, hit, coord) {
        // console.log('receiveAttackResults()');
        // console.log(sunk, hit, coord);
        if (sunk) {
            // console.log(this.attacksMade);
            this.resetStrategy();
        } else {
            if (hit && this.strategy.mode === 'search') { // first hit, no direction found
                this.huntStrategy(coord);
            } else if (hit && this.strategy.mode === 'hunt') { // second hit, change mode to target
                this.targetStrategy(coord);
            } else if (!hit && this.strategy.mode === 'target') { // edge reached, clear previous cells
                // console.log('edge reached, clear previous cells');
                this.strategy.targets[0] = [];
            }
        }
        // console.log(this.strategy);
    }
    huntStrategy(coord) { 
        // console.log('first hit, no direction found');
        this.strategy.mode = 'hunt';
        this.strategy.startCoord = coord;
        let x = parseInt(coord.split('')[0]);
        let y = parseInt(coord.split('')[1]);
        let coordChanges = [[x, y - 1], 
                            [x + 1, y],
                            [x, y + 1],
                            [x - 1, y],
                            ];
        for (let coord in coordChanges) {
            if ((coordChanges[coord][0] >= 0 && coordChanges[coord][0] <= 9) && (coordChanges[coord][1] >= 0 && coordChanges[coord][1] <= 9)) {
                this.strategy.targets.push(`${coordChanges[coord][0]}${coordChanges[coord][1]}`);
            }
        }
    }
    targetStrategy(coord) {
        // console.log('second hit, change mode to target');
        this.strategy.mode = 'target';
        this.strategy.targets = [];
        this.updateDirection(this.strategy.startCoord, coord);
        this.updateTargetCells(this.strategy.direction);
    }
    updateDirection(firstCoord, secondCoord) {
        let xa = parseInt(firstCoord[0]);
        let xb = parseInt(secondCoord[0]);
        let ya = parseInt(firstCoord[1]);
        let yb = parseInt(secondCoord[1]);
        if (xa - xb === 0) {
            this.strategy.direction = 'v';
        } else if (ya - yb === 0) {
            this.strategy.direction = 'h';
        }
    }
    updateTargetCells(direction) {
        let previous = [];
        let next = [];
        if (direction === 'h') {
            for (let i = 0; i < parseInt(this.strategy.startCoord[0]); i++) {
                previous.unshift(`${i}${this.strategy.startCoord[1]}`);
            }
            for (let i = parseInt(this.strategy.startCoord[0]) + 1; i <= 9; i++) {
                next.push(`${i}${this.strategy.startCoord[1]}`);
            }
        } else if (direction === 'v') {
            for (let i = 0; i < parseInt(this.strategy.startCoord[1]); i++) {
                previous.unshift(`${this.strategy.startCoord[0]}${i}`);
            }
            for (let i = parseInt(this.strategy.startCoord[1]) + 1; i <= 9; i++) {
                next.push(`${this.strategy.startCoord[0]}${i}`);
            }
        }
        this.strategy.targets.push(previous, next);
    }
    addToAttacks(coord) {
        console.log(coord);
        this.attacksMade.push(coord);
    }

    // resetters
    resetStrategy() {
        this.strategy = {mode: 'search',
                         startCoord: undefined,
                         direction: undefined,
                         targets: [],
                        };
    }
    resetAttacks() {
        this.attacksMade = [];
    }
}

// FACTORIES
function makeShip(length, dir, name, coords) {
    return new Ship(length, dir, name, coords);
}
function makeGameboard() {
    return new Gameboard();
}
function makePlayer(type) {
    if (type === 'human') {
        return new Human();
    } else if (type === 'computer') {
        return new Computer();
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (makePlayer);


/***/ }),

/***/ "./src/scripts/create.js":
/*!*******************************!*\
  !*** ./src/scripts/create.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const create = (() => {
    // data
    let _attributes = [];
    let element;

    // basic helper factories
    const div = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('div');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const span = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('span');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const button = function(content, state, ...args) {
        _attributes = [...args];
        element = document.createElement('button');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.type = 'button';
        element.role = 'button';
        element.textContent = content;
        element.value = state;
        element.ariaPressed = 'false';
        _attributes = [];
        return element;
    }
    const img = function(url, alt, ...args) {
        _attributes = [...args];
        element = document.createElement('img');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        // element.src = `../${url}`;
        element.src = url;
        element.alt = alt;
        return element;
    }

    // helpers
    function _setAttributes(element, attributes) {
        for (let i = 0; i < (attributes.length); i++) {
            if (attributes[i][0] === '.') {
                element.classList.add(attributes[i].substring(1, attributes[i].length));
            } else if (attributes[i][0] === '#') {
                element.id = attributes[i].substring(1, attributes[i].length);
            }
        }
    }

    return {
        div,
        span,
        button,
        img,
    }
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (create);

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events.js */ "./src/events.js");
/* harmony import */ var _classes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes.js */ "./src/scripts/classes.js");



const game = (() => {
    let human;
    let computer;

    // driver methods
    function init() {
        human = (0,_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"])('human');
        computer = (0,_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"])('computer');
    }

    // placement methods
    function queryCoordData(startCoord, direction, length) {
        let coordSet = human.board.getCoords(startCoord, direction, length);
        let isValid = human.board.setIsValid(coordSet);
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('receiveCoordData', coordSet, isValid); // subscribed by ui.js
    }
    function placeShip(startCoord, direction, length, name) {
        human.board.placeShip(startCoord, direction, length, name);
    }
    function queryShipData(targetID) {
        let ship = human.board.getShip(targetID);
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('receiveShipData', ship.name, ship.dir, ship.length, ship.coords); // subscribed by ui.js
    }
    function deleteShipObject(targetName) {
        human.board.removeShip(targetName);
    }
    function resetBoardData() {
        human.board.resetBoard();
        computer.board.resetBoard();
        computer.resetStrategy();
        computer.resetAttacks();
    }
    function replaceToOriginal() {
        let ship = human.board.replacing;
        human.board.replaceShipToOriginal();
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('receiveShipData', ship.name, ship.dir, ship.length, ship.coords); // subscribed by ui.js
    }

    // play methods
    function generateComputerShips() {
        computer.randomizeShips();
    }
    function takeTurn(targetCoord) {
        human.sendAttack('computer', targetCoord, computer.board);
        if (computer.board.isLoser()) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('winner', 'computer'); // subscribed by ui.js
            resetBoardData();
            return;
        }
        computer.makeAttack(human.board);
        if (human.board.isLoser()) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('winner', 'human'); // subscribed by ui.js
            resetBoardData();
        }
    }
    function updateComputerStrategy(sunk, hit, coord) {
        console.log('updateComputerStrategy()');
        computer.receiveAttackResult(sunk, hit, coord);
    }
    function addBufferToComputerAttacks(buffer) {
        for (let i = 0; i < buffer.length; i++) {
            computer.addToAttacks(buffer[i]);
        }
        console.log(computer.attacksMade);
    }

    // event subscriptions
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('queryCoordData', queryCoordData); // published by ui.js (playerBoards[0].onMouseOver, body.onKeyDown)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('placeShip', placeShip); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('queryShipData', queryShipData); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('deleteShipObject', deleteShipObject); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('resetBoardData', resetBoardData); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('replaceToOriginal', replaceToOriginal); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('generateComputerShips', generateComputerShips); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('takeTurn', takeTurn); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('receiveAttackResult', updateComputerStrategy); // published by classes.js (receiveAttack)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('addBufferToComputerAttacks', addBufferToComputerAttacks); // published by classes.js (receiveAttack)

    return {
        init, // used by index.js
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (game);


/***/ }),

/***/ "./src/scripts/icons.js":
/*!******************************!*\
  !*** ./src/scripts/icons.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// cache images
let imgQuery = __webpack_require__("./src/assets sync \\.(png%7Csvg%7Cjpg%7Cjpeg%7Cgif)$/");
let iconsArray = importIcons(imgQuery);
// console.log('***** ICONS ARRAY *****');
// console.log(iconsArray);

// methods
function importIcons(r) {
    let queryKeys = r.keys();
    let icons = [];
    for (let i = 0; i < queryKeys.length; i++) {
        let newKey = queryKeys[i].split('.svg')[0].split('./')[1];
        let newValue = `./assets/${queryKeys[i].split('./')[1]}`;
        //// console.log(`newKey --> ${newKey}`);
        //// console.log(`newValue --> ${newValue}`)
        
        icons[newKey] = newValue;
    }

    return icons;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (iconsArray);

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../events.js */ "./src/events.js");
/* harmony import */ var _create_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create.js */ "./src/scripts/create.js");



const ui = (() => {
    let playerBoards = [document.getElementById('human').lastElementChild, document.getElementById('computer').lastElementChild];
    let shipContainers = [document.getElementById('human').children[1], document.getElementById('computer').children[1]];
    let playButton = document.getElementById('play-game');
    let body = document.querySelector('body');

    let state = {
        placing: false,
        playing: false,
        targetCell: undefined,
        selectedShip: undefined,
        coordData: undefined, // todo chane structure to coordSet, isValid key-value pairs
        direction: 'r'
    }

    // event listeners
    body.addEventListener('click', (e) => {
        if (!state.playing) {
            if (e.target.id === 'play-game' || e.target.id === 'play') {
                play();
            } else if (e.target.id === 'restart-game' || e.target.id === 'restart') {
                restart();
                removeAlertBox();
            } else if (e.target.parentElement.parentElement.classList.contains('menu') && !e.target.parentElement.classList.contains('placed')) {
                setMenuSelect(e.target.parentElement);
            } else if (e.target.classList.contains('cell')) {
                if (state.placing && state.coordData[1]) {
                    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('placeShip', state.targetCell.id.split('-')[1], state.direction, state.selectedShip.id.split('-')[0], state.selectedShip.id.split('-')[1]); // subscribed by game.js
                    addShipPlaced();
                } else if (!state.placing && e.target.classList.contains('placed')) {
                    state.placing = true;
                    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryShipData', state.targetCell.id.split('-')[1]); // subscribed by game.js
                    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('deleteShipObject', state.selectedShip.id.split('-')[1]); // subscribed by game.js
                }
            }
        } else if (state.playing) {
            if (e.target.id === 'restart-game' || e.target.id === 'restart') {
                generateAlertBox();
            } else if (e.target.id === 'confirm-restart' || e.target.id === 'confirm') {
                restart();
                removeAlertBox();
            } else if (e.target.id === 'cancel-restart' || e.target.id === 'cancel') {
                removeAlertBox();
            } else if (e.target.parentElement.parentElement.parentElement !== null && e.target.parentElement.parentElement.parentElement.id === 'computer' && e.target.classList.contains('cell') && !e.target.classList.contains('hit') && !e.target.classList.contains('miss')) {
                e.target.classList.remove('attack');
                state.targetCell = e.target;
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('takeTurn', e.target.id.split('-')[1]); // subscribed by game.js
            }
        }
    });
    body.addEventListener('keydown', (e) => {
        let validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if (!state.playing) {
            if (validKeys.includes(e.key)) {
                switch (e.key) {
                    case 'ArrowUp':
                        state.direction = 'u'
                        break;
                    case 'ArrowDown':
                        state.direction = 'd'
                        break;
                    case 'ArrowLeft':
                        state.direction = 'l';
                        break;
                    case 'ArrowRight':
                        state.direction = 'r';
                }
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryCoordData', state.targetCell.id.split('-')[1], state.direction, state.selectedShip.id.split('-')[0]); // subscribed by game.js
            } else if (e.key === 'Escape') {
                setMenuSelect(state.selectedShip);
                removeCellHover();
            }
        }
    })
    playerBoards[0].addEventListener('mouseover', (e) => {
        state.targetCell = e.target;
        if (state.placing && !state.playing && e.target.classList.contains('cell')) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryCoordData', state.targetCell.id.split('-')[1], state.direction, state.selectedShip.id.split('-')[0]); // subscribed by game.js
        }
    });
    playerBoards[0].addEventListener('mouseout', (e) => {
        if (state.placing && !state.playing && e.target.classList.contains('cell')) {
            removeCellHover();
        }   
    })
    playerBoards[1].addEventListener('mouseover', (e) => {
        if (state.playing && e.target.classList.contains('cell')) {
            if (e.target.classList.length === 1) {
                e.target.classList.add('attack');
            }
        }
    })
    playerBoards[1].addEventListener('mouseout', (e) => {
        if (state.playing && e.target.classList.contains('cell') && e.target.classList.contains('attack')) {
            e.target.classList.remove('attack');
        }
    })

    // driver methods
    function init() {
        // generate boards
        let i = 0;
        while (i < playerBoards.length) {
            generateGrid(playerBoards[i], i);
            i++;
        }
        // set state
        setSectionType(shipContainers[0], 'menu');
        // generate ship menu
        generateShipMenu();
    }
    function play() {
        // replace selected ship to original coords
        if (state.placing) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('replaceToOriginal', ''); // subscribed by game.js
            addShipPlaced();
        }
        // generate ship tallies
        let i = 0;
        while (i < shipContainers.length) {
            clearShipContainer(shipContainers[i]);
            setSectionType(shipContainers[i], 'tally');
            generateShipTallies(shipContainers[i], i);
            i++;
        }
        // ask computer board to generate placements
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('generateComputerShips', ''); // subscribed by game.js
        // set state to play
        state.placing = false;
        state.playing = true;
    }
    function restart() {
        // reset boards
        for (let i = 0; i < playerBoards.length; i++) {
            for (let j = 0; j < playerBoards[i].children.length; j++) {
                for (let k = 0; k < playerBoards[i].children[j].children.length; k++) {
                    if (playerBoards[i].children[j].children[k].classList.length > 1) {
                        playerBoards[i].children[j].children[k].classList = 'cell';
                    }
                }
            }   
        }
        // reset menus
        for (let i = 0; i < shipContainers.length; i++) {
            clearShipContainer(shipContainers[i]);
        }
        makeShipIcons('', shipContainers[0]);
        shipContainers[0].classList = 'menu';
        shipContainers[1].classList = '';
        // reset play button
        playButton.children[0].src = './icons/play_gray.svg';
        playButton.disabled = true;
        playButton.ariaDisabled = true;
        // clear player objects
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('resetBoardData', ''); // subscribed by game.js
        // clear state
        state.placing = false;
        state.playing = false;
        state.targetCell = undefined;
        state.selectedShip = undefined;
        state.coordData = undefined;
        state.direction = 'r';
    }

    // multi-use helper methods
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
                cellContainer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.ship', `#${ships[i][0]}-${ships[i][1]}`);
            } else {
                cellContainer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.ship', `#${playerType}-${ships[i][1]}`);
            }
            for (let j = 0; j < ships[i][0]; j++) {
                let cell = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', false);
                cellContainer.append(cell);
            }
            container.append(cellContainer);
        }
    }

    // init helper methods
    function generateGrid(board, boardNumber) {
        let player;
        if (boardNumber === 0) {
            player = 'h';
        } else if (boardNumber === 1) {
            player = 'c';
        }
        let i = 0;
        while (i < 10) {
            let row = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.row')
            let j = 0;
            while (j < 10) {
                let cell = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.cell', `#${player}-${j}${i}`);
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

    // placement methods
    function setMenuSelect(targetShip) {
        if (state.selectedShip === undefined) {
            state.placing = true;
            state.selectedShip = targetShip;
            targetShip.classList.add('selected');
        } else if (targetShip === state.selectedShip) {
            targetShip.classList.remove('selected');
            state.placing = false;
            state.selectedShip = undefined;
        } else if (targetShip !== state.selectedShip) {
            targetShip.classList.remove('selected');
            state.selectedShip = targetShip;
            targetShip.classList.add('selected');
        }
        // reset direction after placement
        if (state.direction !== 'r') {
            state.direction = 'r';
        }
    }
    function setBoardHover(coordSet, isValid) {
            removeCellHover();
            state.coordData = [coordSet, isValid];
            addCellHover(state.coordData[1]);
    }
    function addCellHover(isValid) {
        for (let i = 0; i < state.coordData[0].length; i++) {
            if (state.coordData[0][i].length <= 2) {
                let cell = document.getElementById(`h-${state.coordData[0][i]}`);
                cell.classList.add('hover');
                if (isValid) {
                    cell.classList.add('is-valid');
                } else if (!isValid) {
                    cell.classList.add('is-invalid');
                }
            }
        }
    }
    function removeCellHover() {
        if (state.coordData !== undefined) {
            for (let i = 0; i < state.coordData[0].length; i++) {
                if (state.coordData[0][i].length <= 2) {
                    let cell = document.getElementById(`h-${state.coordData[0][i]}`);
                    if (cell.classList.contains('placed')) {
                        cell.classList = 'cell placed';
                    } else {
                        cell.classList = 'cell';
                    }
                }
            }
        }
    }
    function addShipPlaced() {
        state.selectedShip.classList = 'ship placed';
        for (let i = 0; i < state.coordData[0].length; i++) {
            let cell = document.getElementById(`h-${state.coordData[0][i]}`);
            cell.classList = 'cell';
            cell.classList.add('placed');
        }
        state.placing = false;
        state.selectedShip = undefined;
        state.coordData = undefined;
    }
    function removeShipPlaced(name, dir, length, coords) {
        for (let i = 0; i < coords.length; i++) {
            let cell = document.getElementById(`h-${coords[i]}`);
            cell.classList = 'cell hover is-valid';
        }
        state.selectedShip = document.getElementById(`${length}-${name}`);
        state.coordData = [coords, true];
        state.dir = dir;
    }

    // play helper methods
    function makePlayLive() {
        playButton.children[0].src = './icons/play.svg';
        playButton.disabled = false;
        playButton.ariaDisabled = false;
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
    function clearShipContainer(container) {
        while (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }
    }
    function displayHit(player, coord, hit) {
        if (player === 'computer') {
            state.targetCell = document.getElementById(`c-${coord}`);
        } else if (player === 'human') {
            state.targetCell = document.getElementById(`h-${coord}`);
        }
        if (hit) {
            state.targetCell.classList.add('hit');
        } else if (!hit) {
            state.targetCell.classList.add('miss');
        }
    }
    function displaySunk(player, name) {
        if (player === 'human') {
            player = 'h';
        } else if (player === 'computer') {
            player = 'c';
        }
        let ship = document.getElementById(`${player}-${name}`);
        ship.classList.add('sunk');
    }
    function displayBuffer(player, bufferCoords) {
        for (let i = 0; i < bufferCoords.length; i++) {
            displayHit(player, bufferCoords[i], false);
        }
    }
    function generateAlertBox() {
        let options = ['cancel', 'confirm'];
        let alertContainer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '#alert');
        let text = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].span('Restart game?');
        alertContainer.appendChild(text);
        let buttonContainer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('');
        for (let i =0 ; i < options.length; i++) {
            let button = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].button('', `${options[i]}`, `#${options[i]}-restart`);
            let image = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].img(`./icons/${options[i]}.svg`, `${options[i]}`, `#${options[i]}`);
            button.appendChild(image);
            buttonContainer.append(button);
        }
        alertContainer.appendChild(buttonContainer);
        let screen = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.screen');
        body.append(screen, alertContainer);
    }
    function removeAlertBox() {
        let screen = document.querySelector('.screen');
        let alertBox = document.getElementById('alert');
        if (alertBox !== null && screen !== null) {
            screen.parentElement.removeChild(screen);
            alertBox.parentElement.removeChild(alertBox);
        }
    }

    // end game
    function endGame(winner) {
        state.playing = false;
        generateGameResult(winner);
    }
    function generateGameResult(winner) {
        let alertContainer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '#alert');
        let text;
        if (winner === 'human') {
            text = 'You win! =D';
        } else if (winner === 'computer') {
            text = "Computer wins. ='(";
        }
        let textSpan = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].span(text);
        alertContainer.appendChild(textSpan);
        let restartButton = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].button('', `restart`, `#restart-game`);
        let restartImage = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].img(`./icons/restart.svg`, `restart`, `#restart`);
        restartButton.appendChild(restartImage);
        alertContainer.appendChild(restartButton);
        let screen = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.screen')
        body.append(screen, alertContainer);
    }

    // event subscriptions
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('receiveCoordData', setBoardHover); // published by game.js (queryCoordData)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('receiveShipData', removeShipPlaced); // published by game.js (queryShipData, replaceToOriginal)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('makePlayLive', makePlayLive); // published by classes.js (computer.randomizeShips)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('displayAttack', displayHit); // published by classes.js (gameboard.receiveAttack)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('displaySunk', displaySunk); // published by classes.js (gameboard.receiveAttack)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('winner', endGame); // published by game.js (takeTurn)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('displayBuffer', displayBuffer); // published by classes.js (gameboard.receiveAttack)

    return {
        init, // used by index.js
    }

})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ui);


/***/ }),

/***/ "./src/assets/cancel.svg":
/*!*******************************!*\
  !*** ./src/assets/cancel.svg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icons/cancel.svg";

/***/ }),

/***/ "./src/assets/confirm.svg":
/*!********************************!*\
  !*** ./src/assets/confirm.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icons/confirm.svg";

/***/ }),

/***/ "./src/assets/play.svg":
/*!*****************************!*\
  !*** ./src/assets/play.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icons/play.svg";

/***/ }),

/***/ "./src/assets/play_gray.svg":
/*!**********************************!*\
  !*** ./src/assets/play_gray.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icons/play_gray.svg";

/***/ }),

/***/ "./src/assets/restart.svg":
/*!********************************!*\
  !*** ./src/assets/restart.svg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "icons/restart.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_reset_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/reset.css */ "./src/styles/reset.css");
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/global.css */ "./src/styles/global.css");
/* harmony import */ var _scripts_icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/icons.js */ "./src/scripts/icons.js");
/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/game.js */ "./src/scripts/game.js");
/* harmony import */ var _scripts_ui_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/ui.js */ "./src/scripts/ui.js");






_scripts_game_js__WEBPACK_IMPORTED_MODULE_3__["default"].init();
_scripts_ui_js__WEBPACK_IMPORTED_MODULE_4__["default"].init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVUsRUFBRSxVQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRSxFQUFFLE1BQU07QUFDL0MscUNBQXFDLE1BQU0sRUFBRSxNQUFNO0FBQ25ELHFDQUFxQyxNQUFNLEVBQUUsTUFBTTtBQUNuRCxjQUFjO0FBQ2QscUNBQXFDLE1BQU0sRUFBRSxFQUFFO0FBQy9DLHFDQUFxQyxNQUFNLEVBQUUsTUFBTTtBQUNuRCxxQ0FBcUMsTUFBTSxFQUFFLE1BQU07QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRSxFQUFFLE1BQU07QUFDL0MscUNBQXFDLE1BQU0sRUFBRSxNQUFNO0FBQ25ELHFDQUFxQyxNQUFNLEVBQUUsTUFBTTtBQUNuRCxjQUFjO0FBQ2QscUNBQXFDLE1BQU0sRUFBRSxFQUFFO0FBQy9DLHFDQUFxQyxNQUFNLEVBQUUsTUFBTTtBQUNuRCxxQ0FBcUMsTUFBTSxFQUFFLE1BQU07QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTSxFQUFFLEVBQUU7QUFDbkQseUNBQXlDLE1BQU0sRUFBRSxFQUFFO0FBQ25EO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRSxFQUFFLE1BQU07QUFDbkQseUNBQXlDLEVBQUUsRUFBRSxNQUFNO0FBQ25EO0FBQ0E7QUFD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cUIsc0RBQVU7QUFDL0I7QUFDQTs7QUFFQTtBQUNBLElBQUksNERBQWdCLHFDQUFxQztBQUN6RCxJQUFJLDREQUFnQix1Q0FBdUM7QUFDM0QsSUFBSSw0REFBZ0IsZ0NBQWdDO0FBQ3BELElBQUksNERBQWdCLCtCQUErQjtBQUNuRCxJQUFJLDREQUFnQiw4QkFBOEI7QUFDbEQsSUFBSSw0REFBZ0IscUJBQXFCO0FBQ3pDLElBQUksNERBQWdCLGtDQUFrQzs7QUFFdEQ7QUFDQTtBQUNBOztBQUVBLENBQUM7O0FBRUQsaUVBQWUsRUFBRSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3JabEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0M7QUFDZTtBQUNQO0FBQ0o7O0FBRWpDLDZEQUFTO0FBQ1QsMkRBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz9mMGQ4Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jbGFzc2VzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2ljb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR0xPQkFMIFZBUklBQkxFUyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1mb250LXNpemU6IDEwcHQ7XFxuICAgIC0tbWFpbi1zcGFjaW5nOiAydnc7XFxuICAgIC0tcGxheWVyLWFyZWE6IGNhbGMoY2FsYygxMDB2dyAtIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDQpKSAvIDIpO1xcbiAgICAtLXBsYXllci1mcjogY2FsYyh2YXIoLS1wbGF5ZXItYXJlYSkgLyAxNik7IC8qIDE1IGZvciAxMCs1IGNlbGxzICsrIDEgdG8gLzEzIGZvciBjZWxsIGdhcHMgKi9cXG4gICAgLS1jZWxsLWdhcDogY2FsYyh2YXIoLS1wbGF5ZXItZnIpIC8gMTMpO1xcblxcbiAgICAtLXNpZGViYXItc3BhY2luZzogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgIC0tc2lkZWJhci1hcmVhOiBjYWxjKHZhcigtLXNpZGViYXItc3BhY2luZykgKyBjYWxjKHZhcigtLXBsYXllci1mcikgKiA1KSArIGNhbGModmFyKC0tY2VsbC1nYXApICogNCkpO1xcbiAgICAtLXNoaXAtY2VsbDogdmFyKC0tcGxheWVyLWZyKTtcXG5cXG4gICAgLS1ib2FyZC1hcmVhOiBjYWxjKGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDEwKSArIGNhbGModmFyKC0tY2VsbC1nYXApICogOSkpO1xcbiAgICAtLWJvYXJkLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tbWFpbi1oZWlnaHQ6IGNhbGMoNS41dncgKyAxdncgKyB2YXIoLS1ib2FyZC1hcmVhKSArIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDIpICsgY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMikpO1xcbn1cXG5cXG4vKiBESVNQTEFZIEZMRVggKi9cXG5cXG5ib2R5LFxcbm1haW4sXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5zaGlwLFxcbi5ib2FyZCxcXG4ucm93LFxcbiNhbGVydCxcXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5LFxcbi5tZW51LFxcbi50YWxseSxcXG4uYm9hcmQsXFxuI2FsZXJ0IHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbi8qIERJU1BMQVkgR1JJRCAqL1xcblxcbiNodW1hbixcXG4jY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuI2h1bWFuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaWRlYmFyLWFyZWEpIHZhcigtLWJvYXJkLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcuICAgICAgIHRpdGxlJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2lkZWJhciBib2FyZCc7XFxufVxcblxcbiNjb21wdXRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tYm9hcmQtYXJlYSkgdmFyKC0tc2lkZWJhci1hcmVhKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgLidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2JvYXJkIHNpZGViYXInO1xcbn1cXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICB9XFxuXFxuICAgIC50YWxseSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIH1cXG5cXG4vKiBQT1NJVElPTklORyAqL1xcblxcbmJvZHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb21wdXRlciAudGl0bGUge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tZW51LFxcbiAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNoaXAsXFxuICAgICAgICAgICAgLmJvYXJkLFxcbiAgICAgICAgICAgIC5yb3cge1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLWNlbGwtZ2FwKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgIH1cXG5cXG4gICAgI2FsZXJ0LFxcbiAgICAuc2NyZWVuIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAjYWxlcnQge1xcbiAgICAgICAgdG9wOiBjYWxjKHZhcigtLW1haW4taGVpZ2h0KSAvIDIpO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgIC5zY3JlZW4ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC50YWxseSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGwge1xcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYm9hcmQtY2VsbCk7XFxuICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXBsYXllci1mcikgKiAyKTtcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiNyZXN0YXJ0LWdhbWUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciBpbWcge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgICAgIGJ1dHRvbjphY3RpdmUgaW1nIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIC5zY3JlZW4ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbi8qIENPTE9SUyAsIEZPTlRTICYgU0hBUElORyAqL1xcblxcbmJvZHksXFxuI2FsZXJ0LFxcbi5zY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjNmViO1xcbn1cXG5cXG4jYWxlcnQsXFxuLnRpdGxlIHtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zY3JlZW4ge1xcbiAgICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICBsaW5lLWhlaWdodDogNS41dnc7XFxufVxcblxcbiNhbGVydCBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjV2dztcXG59XFxuXFxuLnNoaXAgZGl2LFxcbi5jZWxsLFxcbiNhbGVydCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLmNlbGwsXFxuLmNlbGwuYXR0YWNrOm5vdCguY2VsbC5oaXQpLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwubWlzcyksXFxuI2FsZXJ0IHtcXG4gICAgYm9yZGVyOiBibHVlIDFweCBzb2xpZDtcXG59XFxuXFxuLmNlbGwuYXR0YWNrOm5vdCguY2VsbC5oaXQpLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwubWlzcykge1xcbiAgICBvcGFjaXR5OiAyNSU7XFxufVxcblxcbi5tZW51IC5zaGlwIGRpdixcXG4uY2VsbC5wbGFjZWQsXFxuLnNoaXAuc2VsZWN0ZWQgZGl2LFxcbi5zaGlwLnBsYWNlZCBkaXYsXFxuLmhvdmVyLmlzLXZhbGlkLFxcbi50YWxseSAuc2hpcCBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2hpcC5zZWxlY3RlZCBkaXYsXFxuLnNoaXAucGxhY2VkIGRpdixcXG4uaG92ZXIuaXMtdmFsaWQsXFxuLnRhbGx5IC5zaGlwIGRpdiB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDEzMSk7XFxuICAgIG9wYWNpdHk6IDE1JTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDEzMSk7XFxufVxcblxcbi5ob3Zlci5pcy1pbnZhbGlkLFxcbi5zdW5rIGRpdixcXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ob3Zlci5pcy12YWxpZCxcXG4uc3VuayBkaXYge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5oaXQge1xcbiAgICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvRUFBb0U7SUFDcEUsMENBQTBDLEVBQUUsZ0RBQWdEO0lBQzVGLHVDQUF1Qzs7SUFFdkMsZ0RBQWdEO0lBQ2hELHFHQUFxRztJQUNyRyw2QkFBNkI7O0lBRTdCLDJFQUEyRTtJQUMzRSw4QkFBOEI7O0lBRTlCLGlIQUFpSDtBQUNySDs7QUFFQSxpQkFBaUI7O0FBRWpCOzs7Ozs7Ozs7SUFTSSxhQUFhO0FBQ2pCOztBQUVBOzs7OztJQUtJLGlCQUFpQjtBQUNyQjs7QUFFQSxpQkFBaUI7O0FBRWpCOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsd0JBQXdCO0lBQ3hCO3dDQUNvQztBQUN4Qzs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCx3QkFBd0I7SUFDeEI7d0NBQ29DO0FBQ3hDOztJQUVJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKLGdCQUFnQjs7QUFFaEI7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztJQUVJO1FBQ0ksd0JBQXdCO0lBQzVCOztRQUVJO1lBQ0ksNkNBQTZDO1FBQ2pEOztRQUVBO1lBQ0ksZUFBZTtRQUNuQjs7UUFFQTs7WUFFSSwyQkFBMkI7UUFDL0I7O1lBRUk7OztnQkFHSSxvQkFBb0I7WUFDeEI7O0lBRVI7UUFDSSx1QkFBdUI7UUFDdkIsa0NBQWtDO0lBQ3RDOztJQUVBOztRQUVJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzVCLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLE1BQU07UUFDTixPQUFPO0lBQ1g7O0FBRUosV0FBVzs7QUFFWDtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztJQUVJO1FBQ0ksNEJBQTRCO0lBQ2hDOztRQUVJOztZQUVJLHFDQUFxQztRQUN6Qzs7UUFFQTtZQUNJLG9DQUFvQztRQUN4Qzs7WUFFSTtnQkFDSSxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0Qjs7Z0JBRUk7OztvQkFHSSx3QkFBd0I7b0JBQ3hCLHVCQUF1QjtnQkFDM0I7O1FBRVI7WUFDSSx5QkFBeUI7WUFDekIsd0JBQXdCO1FBQzVCOztJQUVKO1FBQ0ksV0FBVztJQUNmOztRQUVJO1lBQ0ksa0NBQWtDO1lBQ2xDLFdBQVc7UUFDZjs7UUFFQTtZQUNJLHFCQUFxQjtRQUN6Qjs7WUFFSTtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxzQkFBc0I7WUFDMUI7O1lBRUE7Z0JBQ0ksc0JBQXNCO1lBQzFCOztJQUVSO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7O0FBRUosNkJBQTZCOztBQUU3Qjs7O0lBR0kseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxzSEFBc0g7QUFDMUg7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7OztJQUlJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7SUFNSSxzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7SUFJSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7OztJQUdJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMIFZBUklBQkxFUyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1mb250LXNpemU6IDEwcHQ7XFxuICAgIC0tbWFpbi1zcGFjaW5nOiAydnc7XFxuICAgIC0tcGxheWVyLWFyZWE6IGNhbGMoY2FsYygxMDB2dyAtIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDQpKSAvIDIpO1xcbiAgICAtLXBsYXllci1mcjogY2FsYyh2YXIoLS1wbGF5ZXItYXJlYSkgLyAxNik7IC8qIDE1IGZvciAxMCs1IGNlbGxzICsrIDEgdG8gLzEzIGZvciBjZWxsIGdhcHMgKi9cXG4gICAgLS1jZWxsLWdhcDogY2FsYyh2YXIoLS1wbGF5ZXItZnIpIC8gMTMpO1xcblxcbiAgICAtLXNpZGViYXItc3BhY2luZzogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgIC0tc2lkZWJhci1hcmVhOiBjYWxjKHZhcigtLXNpZGViYXItc3BhY2luZykgKyBjYWxjKHZhcigtLXBsYXllci1mcikgKiA1KSArIGNhbGModmFyKC0tY2VsbC1nYXApICogNCkpO1xcbiAgICAtLXNoaXAtY2VsbDogdmFyKC0tcGxheWVyLWZyKTtcXG5cXG4gICAgLS1ib2FyZC1hcmVhOiBjYWxjKGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDEwKSArIGNhbGModmFyKC0tY2VsbC1nYXApICogOSkpO1xcbiAgICAtLWJvYXJkLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tbWFpbi1oZWlnaHQ6IGNhbGMoNS41dncgKyAxdncgKyB2YXIoLS1ib2FyZC1hcmVhKSArIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDIpICsgY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMikpO1xcbn1cXG5cXG4vKiBESVNQTEFZIEZMRVggKi9cXG5cXG5ib2R5LFxcbm1haW4sXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5zaGlwLFxcbi5ib2FyZCxcXG4ucm93LFxcbiNhbGVydCxcXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5LFxcbi5tZW51LFxcbi50YWxseSxcXG4uYm9hcmQsXFxuI2FsZXJ0IHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbi8qIERJU1BMQVkgR1JJRCAqL1xcblxcbiNodW1hbixcXG4jY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuI2h1bWFuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaWRlYmFyLWFyZWEpIHZhcigtLWJvYXJkLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcuICAgICAgIHRpdGxlJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2lkZWJhciBib2FyZCc7XFxufVxcblxcbiNjb21wdXRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tYm9hcmQtYXJlYSkgdmFyKC0tc2lkZWJhci1hcmVhKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgLidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2JvYXJkIHNpZGViYXInO1xcbn1cXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICB9XFxuXFxuICAgIC50YWxseSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIH1cXG5cXG4vKiBQT1NJVElPTklORyAqL1xcblxcbmJvZHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb21wdXRlciAudGl0bGUge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tZW51LFxcbiAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNoaXAsXFxuICAgICAgICAgICAgLmJvYXJkLFxcbiAgICAgICAgICAgIC5yb3cge1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLWNlbGwtZ2FwKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgIH1cXG5cXG4gICAgI2FsZXJ0LFxcbiAgICAuc2NyZWVuIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAjYWxlcnQge1xcbiAgICAgICAgdG9wOiBjYWxjKHZhcigtLW1haW4taGVpZ2h0KSAvIDIpO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgIC5zY3JlZW4ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC50YWxseSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGwge1xcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYm9hcmQtY2VsbCk7XFxuICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXBsYXllci1mcikgKiAyKTtcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiNyZXN0YXJ0LWdhbWUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciBpbWcge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgICAgIGJ1dHRvbjphY3RpdmUgaW1nIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIC5zY3JlZW4ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbi8qIENPTE9SUyAsIEZPTlRTICYgU0hBUElORyAqL1xcblxcbmJvZHksXFxuI2FsZXJ0LFxcbi5zY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjNmViO1xcbn1cXG5cXG4jYWxlcnQsXFxuLnRpdGxlIHtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zY3JlZW4ge1xcbiAgICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICBsaW5lLWhlaWdodDogNS41dnc7XFxufVxcblxcbiNhbGVydCBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjV2dztcXG59XFxuXFxuLnNoaXAgZGl2LFxcbi5jZWxsLFxcbiNhbGVydCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLmNlbGwsXFxuLmNlbGwuYXR0YWNrOm5vdCguY2VsbC5oaXQpLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwubWlzcyksXFxuI2FsZXJ0IHtcXG4gICAgYm9yZGVyOiBibHVlIDFweCBzb2xpZDtcXG59XFxuXFxuLmNlbGwuYXR0YWNrOm5vdCguY2VsbC5oaXQpLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwubWlzcykge1xcbiAgICBvcGFjaXR5OiAyNSU7XFxufVxcblxcbi5tZW51IC5zaGlwIGRpdixcXG4uY2VsbC5wbGFjZWQsXFxuLnNoaXAuc2VsZWN0ZWQgZGl2LFxcbi5zaGlwLnBsYWNlZCBkaXYsXFxuLmhvdmVyLmlzLXZhbGlkLFxcbi50YWxseSAuc2hpcCBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2hpcC5zZWxlY3RlZCBkaXYsXFxuLnNoaXAucGxhY2VkIGRpdixcXG4uaG92ZXIuaXMtdmFsaWQsXFxuLnRhbGx5IC5zaGlwIGRpdiB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDEzMSk7XFxuICAgIG9wYWNpdHk6IDE1JTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDEzMSk7XFxufVxcblxcbi5ob3Zlci5pcy1pbnZhbGlkLFxcbi5zdW5rIGRpdixcXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ob3Zlci5pcy12YWxpZCxcXG4uc3VuayBkaXYge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5oaXQge1xcbiAgICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4OyBtYXJnaW46IDBweDtcXG5cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG4vKiBTRUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogY29ycmVjdCBmb250IHNpemUsIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzICovXFxuLyogd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGNvbnRleHRzICovXFxuLyogaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYGhlYWRlcmAgZWxlbWVudHMgYWNyb3NzIGJyb3N3ZXJzICovXFxuXFxuaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi8qIFRFWFQtTEVWRUwgU0VNQU5USUNTID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgZ3JheSBiZyBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIDEuIHJlbW92ZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gKi9cXG4vKiAyLiBhZGQgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIFNhZmFyaSAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBTYWZhcmkgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG5cXG4vKiBFTUJFRERFRCBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbi8qIEZPUk1TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBjaGFuZ2UgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gcmVtb3ZlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBzaG93IG92ZXJmbG93IGluIElFLCBFZGdlICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qIHJlbW92ZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBJRSAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogY29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBib3JkZXIsIHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiByZXN0b3JlIGZvY3VzIHN0eWxlcyB1bnNldCBieSBwcmV2aW91cyBydWxlIF5eICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcblxcbi8qIE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQzs7QUFFckM7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVksRUFBRSxXQUFXOztJQUV6QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsYUFBYTs7SUFFYix3QkFBd0I7QUFDNUI7OztBQUdBLHVDQUF1Qzs7QUFFdkMsK0NBQStDO0FBQy9DLDRDQUE0QztBQUM1QyxtQ0FBbUM7O0FBRW5DO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSw4REFBOEQ7O0FBRTlEO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQSx5REFBeUQ7O0FBRXpEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsbURBQW1EOztBQUVuRCw0Q0FBNEM7O0FBRTVDO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLDBDQUEwQztBQUMxQyxzRUFBc0U7O0FBRXRFO0lBQ0ksbUJBQW1CLEVBQUUsTUFBTTtJQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDN0M7O0FBRUEsb0RBQW9EOztBQUVwRDs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUEsMENBQTBDOztBQUUxQztJQUNJLGNBQWM7QUFDbEI7OztBQUdBLCtDQUErQzs7QUFFL0Msa0RBQWtEOztBQUVsRDtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0Esb0NBQW9DOztBQUVwQywwQ0FBMEM7QUFDMUMsMkNBQTJDOztBQUUzQzs7O0lBR0ksb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtJQUN2QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ3JCOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBLDhEQUE4RDs7QUFFOUQ7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBLGtFQUFrRTs7QUFFbEU7Ozs7SUFJSSwwQkFBMEI7QUFDOUI7O0FBRUEsNENBQTRDOztBQUU1Qzs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUEsbURBQW1EOztBQUVuRDs7OztJQUlJLDhCQUE4QjtBQUNsQzs7O0FBR0EsbUNBQW1DOztBQUVuQyxpQ0FBaUM7O0FBRWpDO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplLCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyAqL1xcbi8qIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYCBjb250ZXh0cyAqL1xcbi8qIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaSAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jYW5jZWwuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NhbmNlbC5zdmdcIixcblx0XCIuL2NvbmZpcm0uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NvbmZpcm0uc3ZnXCIsXG5cdFwiLi9wbGF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9wbGF5LnN2Z1wiLFxuXHRcIi4vcGxheV9ncmF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9wbGF5X2dyYXkuc3ZnXCIsXG5cdFwiLi9yZXN0YXJ0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9yZXN0YXJ0LnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyBcXFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvXCI7IiwiLy8gJiBwdWJzdWIgZXZlbnRzIG1hbmFnZXJcblxuY29uc3QgZXZlbnRzID0gKCgpID0+IHtcbiAgICBsZXQgX2V2ZW50cyA9IHt9O1xuXG4gICAgLy8gc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX2V2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH07XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFNVQlNDUklCSU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgIH1cblxuICAgIC8vIHVuc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudE5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpO1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKChfZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMSksIDEpO1xuICAgIH1cblxuICAgIC8vIHB1Ymxpc2ggZXZlbnQgd2l0aCBkYXRhXG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIC4uLmRhdGEpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmRhdGEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBVQkxJU0hJTkcgdG8gJHtldmVudE5hbWV9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgZnVuY3Rpb24gdmlld0V2ZW50cygpIHtcbiAgICAgICAgY29uc29sZS5sb2coX2V2ZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICB1bnN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgdmlld0V2ZW50cyxcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5cbi8vIENMQVNTRVNcbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCA9IG51bGwsIGRpciA9IG51bGwsIG5hbWUgPSBudWxsLCBjb29yZHMgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIH1cblxuICAgIC8vIHNldHRlcnNcbiAgICBsb2dIaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnc2hpcCBoaXRzOicsIHRoaXMuaGl0cyk7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3NoaXAgc3VuazonLCB0aGlzLnN1bmspXG4gICAgfVxuICAgIGlzUGxhY2VkKCkge1xuICAgICAgICB0aGlzLnBsYWNlZCA9IHRydWU7XG4gICAgfVxufVxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLnJlcGxhY2luZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsgPSAwO1xuICAgIH1cblxuICAgIC8vIGdldHRlcnNcbiAgICBnZXRTaGlwKHRhcmdldENvb3JkKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgZm9yIChsZXQgY29vcmQgaW4gdGhpcy5zaGlwc1tzaGlwXS5jb29yZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc1tzaGlwXS5jb29yZHNbY29vcmRdID09PSB0YXJnZXRDb29yZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zaGlwc1tzaGlwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpciwgc2hpcExlbikge1xuICAgICAgICBzaGlwTGVuID0gcGFyc2VJbnQoc2hpcExlbik7XG4gICAgICAgIGNvbnNvbGUubG9nKHN0YXJ0Q29vcmQsIGRpciwgc2hpcExlbik7XG4gICAgICAgIGxldCBjb29yZFNldCA9IFtzdGFydENvb3JkXTtcbiAgICAgICAgbGV0IHhQb3NpdGlvbiA9IHBhcnNlSW50KHN0YXJ0Q29vcmRbMF0pO1xuICAgICAgICBsZXQgeVBvc2l0aW9uID0gcGFyc2VJbnQoc3RhcnRDb29yZFsxXSk7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBzaGlwTGVuIC0gMSkge1xuICAgICAgICAgICAgc3dpdGNoKGRpcikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3UnOlxuICAgICAgICAgICAgICAgICAgICB5UG9zaXRpb24gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnZCc6XG4gICAgICAgICAgICAgICAgICAgIHlQb3NpdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdsJzpcbiAgICAgICAgICAgICAgICAgICAgeFBvc2l0aW9uIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3InOlxuICAgICAgICAgICAgICAgICAgICB4UG9zaXRpb24gKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdDb29yZCA9IGAke3hQb3NpdGlvbn0ke3lQb3NpdGlvbn1gO1xuICAgICAgICAgICAgc3dpdGNoKHRydWUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIChkaXIgPT09ICd1JyB8fCBkaXIgPT09ICdsJyk6XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkU2V0LnVuc2hpZnQobmV3Q29vcmQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIChkaXIgPT09ICdkJyB8fCBkaXIgPT09ICdyJyk6XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkU2V0LnB1c2gobmV3Q29vcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZFNldDtcbiAgICB9XG4gICAgZ2V0QnVmZmVyKHNoaXBPYmplY3QpIHtcbiAgICAgICAgbGV0IGJ1ZmZlclNldCA9IFtdO1xuICAgICAgICBidWZmZXJTZXQucHVzaCguLi5nZXRFbmRzKHNoaXBPYmplY3QuY29vcmRzWzBdLCBzaGlwT2JqZWN0LmNvb3Jkc1tzaGlwT2JqZWN0Lmxlbmd0aCAtIDFdLCBzaGlwT2JqZWN0LmRpcikpO1xuICAgICAgICBidWZmZXJTZXQucHVzaCguLi5nZXRTaWRlcyhzaGlwT2JqZWN0LmNvb3Jkcywgc2hpcE9iamVjdC5kaXIsIHNoaXBPYmplY3QubGVuZ3RoKSk7XG5cbiAgICAgICAgYnVmZmVyU2V0ID0gYnVmZmVyU2V0LmZpbHRlcihjb29yZCA9PiBjb29yZC5sZW5ndGggPCAzKTtcbiAgICAgICAgcmV0dXJuIGJ1ZmZlclNldDtcblxuICAgICAgICBmdW5jdGlvbiBnZXRFbmRzKHN0YXJ0Q29vcmQsIGVuZENvb3JkLCBkaXJlY3Rpb24pIHtcbiAgICAgICAgICAgIGxldCBidWZmZXJDb29yZHMgPSBbXTtcbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQoc3RhcnRDb29yZFswXSk7XG4gICAgICAgICAgICBsZXQgeSA9IHBhcnNlSW50KHN0YXJ0Q29vcmRbMV0pO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2QnIHx8IGRpcmVjdGlvbiA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eH0ke3kgLSAxfWApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggLSAxfSR7eSAtIDF9YCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCArIDF9JHt5IC0gMX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbCcgfHwgZGlyZWN0aW9uID09PSAncicpIHtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4IC0gMX0ke3l9YCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCAtIDF9JHt5IC0gMX1gKTtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4IC0gMX0ke3kgKyAxfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeCA9IHBhcnNlSW50KGVuZENvb3JkWzBdKTtcbiAgICAgICAgICAgIHkgPSBwYXJzZUludChlbmRDb29yZFsxXSk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZCcgfHwgZGlyZWN0aW9uID09PSAndScpIHtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4fSR7eSArIDF9YCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCAtIDF9JHt5ICsgMX1gKTtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4ICsgMX0ke3kgKyAxfWApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsJyB8fCBkaXJlY3Rpb24gPT09ICdyJykge1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggKyAxfSR7eX1gKTtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4ICsgMX0ke3kgLSAxfWApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggKyAxfSR7eSArIDF9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyQ29vcmRzO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGdldFNpZGVzKGNvb3JkcywgZGlyZWN0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgICAgIGxldCBidWZmZXJDb29yZHMgPSBbXTtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgbGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbGV0IHggPSBwYXJzZUludChjb29yZHNbaV1bMF0pXG4gICAgICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChjb29yZHNbaV1bMV0pO1xuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkJyB8fCBkaXJlY3Rpb24gPT09ICd1Jykge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4IC0gMX0ke3l9YCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggKyAxfSR7eX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2wnIHx8IGRpcmVjdGlvbiA9PT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3h9JHt5IC0gMX1gKTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eH0ke3kgKyAxfWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYnVmZmVyQ29vcmRzO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcmVzZXR0ZXJzXG4gICAgcmVtb3ZlU2hpcChzaGlwTmFtZSkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzW3NoaXBdLm5hbWUgPT09IHNoaXBOYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHMubGVuZ3RoID09PSA3KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjaW5nID0gdGhpcy5zaGlwc1tzaGlwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcy5zcGxpY2Uoc2hpcCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVzZXRCb2FyZCgpIHtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLnJlcGxhY2luZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsgPSAwO1xuICAgIH1cblxuICAgIC8vIGJvb2xzXG4gICAgc2V0SXNWYWxpZChjb29yZFNldCkge1xuICAgICAgICBmb3IgKGxldCBjb29yZCBpbiBjb29yZFNldCkge1xuICAgICAgICAgICAgaWYgKGNvb3JkU2V0W2Nvb3JkXS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7Y29vcmRTZXRbY29vcmRdfSBvdXRzaWRlIGJvdW5kc2ApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQoY29vcmRTZXRbY29vcmRdWzBdKTtcbiAgICAgICAgICAgIGxldCB5ID0gcGFyc2VJbnQoY29vcmRTZXRbY29vcmRdWzFdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwID0gdGhpcy5zaGlwc1tpdGVtXTtcbiAgICAgICAgICAgICAgICBsZXQgeE1pbiA9IHBhcnNlSW50KHNoaXAuY29vcmRzWzBdWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgbGV0IHhNYXggPSBwYXJzZUludChzaGlwLmNvb3Jkc1tzaGlwLmNvb3Jkcy5sZW5ndGggLSAxXVswXSkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCB5TWluID0gcGFyc2VJbnQoc2hpcC5jb29yZHNbMF1bMV0pIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeU1heCA9IHBhcnNlSW50KHNoaXAuY29vcmRzW3NoaXAuY29vcmRzLmxlbmd0aCAtIDFdWzFdKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHggPj0geE1pbiAmJiB4IDw9IHhNYXggJiYgeSA+PSB5TWluICYmIHkgPD0geU1heCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtjb29yZFNldFtjb29yZF19IHRvbyBjbG9zZSB0byBwbGFjZWQgc2hpcGApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc0hpdChhdHRhY2tDb29yZCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvb3JkIGluIHRoaXMuc2hpcHNbc2hpcF0uY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFja0Nvb3JkID09PSB0aGlzLnNoaXBzW3NoaXBdLmNvb3Jkc1tjb29yZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0cnVlLCB0aGlzLnNoaXBzW3NoaXBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgaXNMb3NlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcHNTdW5rID09PSB0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwbGFjZW1lbnRcbiAgICBwbGFjZVNoaXAoc3RhcnRDb29yZCwgZGlyLCBzaGlwTGVuLCBzaGlwTmFtZSkge1xuICAgICAgICBzaGlwTGVuID0gcGFyc2VJbnQoc2hpcExlbik7XG4gICAgICAgIGxldCBjb29yZFNldCA9IHRoaXMuZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpciwgc2hpcExlbik7IC8vIHVzZWQgYnkgY29tcHV0ZXIgQUkgdG8gZ2VuZXJhdGUgc2hpcCBwbGFjZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuc2V0SXNWYWxpZChjb29yZFNldCkpIHsgICAgLy8gdXNlZCBieSBjb21wdXRlciBBSSB0byB2YXJpZnkgcGxhY2VtZW50IHZhbGlkaXR5XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobWFrZVNoaXAoc2hpcExlbiwgZGlyLCBzaGlwTmFtZSwgY29vcmRTZXQpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICAvLyB1c2VkIGJ5IGNvbXB1dGVyIEFJIHRvIGNvbnRyb2wgcGxhY2VtZW50IGxvb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8gXCJcIlxuICAgIH1cbiAgICByZXBsYWNlU2hpcFRvT3JpZ2luYWwoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLnJlcGxhY2luZyk7XG4gICAgICAgIHRoaXMucmVwbGFjaW5nID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIGF0dGFja3NcbiAgICByZWNlaXZlQXR0YWNrKHBsYXllciwgY29vcmQpIHtcbiAgICAgICAgbGV0IG91dGNvbWUgPSB0aGlzLmlzSGl0KGNvb3JkKTtcbiAgICAgICAgbGV0IGhpdCA9IG91dGNvbWVbMF07XG4gICAgICAgIGxldCBzaGlwID0gb3V0Y29tZVsxXTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgc2hpcC5sb2dIaXQoKTtcbiAgICAgICAgICAgIGlmIChzaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzU3VuayArPSAxO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdkaXNwbGF5U3VuaycsIHBsYXllciwgc2hpcC5uYW1lKTsgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgICAgICAgICAgICAgIGxldCBidWZmZXIgPSB0aGlzLmdldEJ1ZmZlcihzaGlwKTtcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdhZGRCdWZmZXJUb0NvbXB1dGVyQXR0YWNrcycsIGJ1ZmZlcik7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnZGlzcGxheUJ1ZmZlcicsIHBsYXllciwgYnVmZmVyKTsgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdkaXNwbGF5QXR0YWNrJywgcGxheWVyLCBjb29yZCwgaGl0KTsgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgICAgICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICBsZXQgc3VuaztcbiAgICAgICAgICAgIGlmIChzaGlwICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBzdW5rID0gc2hpcC5zdW5rO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmVBdHRhY2tSZXN1bHQnLCBzdW5rLCBoaXQsIGNvb3JkKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBIdW1hbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdodW1hbic7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBtYWtlR2FtZWJvYXJkKCk7XG4gICAgfVxuXG4gICAgLy8gYXR0YWNrXG4gICAgc2VuZEF0dGFjayhwbGF5ZXIsIGNvb3JkLCBib2FyZCkge1xuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKHBsYXllciwgY29vcmQpO1xuICAgIH1cbn1cbmNsYXNzIENvbXB1dGVyIGV4dGVuZHMgSHVtYW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihIdW1hbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb21wdXRlcic7XG4gICAgICAgIHRoaXMuYXR0YWNrc01hZGUgPSBbXTtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHttb2RlOiAnc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgIH1cblxuICAgIC8vIHBsYWNlbWVudFxuICAgIHJhbmRvbWl6ZVNoaXBzKCkge1xuICAgICAgICBsZXQgYXZhaWxTaGlwcyA9IFtbNSwgJ2FjYyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbNCwgJ2JzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFszLCAnY3J1cyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbMiwgJ2Rlc3QyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsyLCAnZGVzdDEnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsICdzdWIyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsxLCAnc3ViMSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgIGxldCBkaXJzID0gWyd1JywgJ2QnLCAnbCcsICdyJ107XG4gICAgICAgIFxuICAgICAgICB3aGlsZSAoYXZhaWxTaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgc2hpcExlbiA9IGF2YWlsU2hpcHNbMF1bMF07XG4gICAgICAgICAgICBsZXQgc2hpcE5hbWUgPSBhdmFpbFNoaXBzWzBdWzFdO1xuICAgICAgICAgICAgYXZhaWxTaGlwcy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBsZXQgZGlyID0gZGlyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJzLmxlbmd0aCldO1xuXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmQgPSAnJztcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmQgKz0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5ib2FyZC5wbGFjZVNoaXAoY29vcmQsIGRpciwgc2hpcExlbiwgc2hpcE5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ21ha2VQbGF5TGl2ZScsICcnKTsgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgIH1cblxuICAgIC8vIGF0dGFjayBkcml2ZXJzXG4gICAgbWFrZUF0dGFjayhib2FyZCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0cmF0ZWd5Lm1vZGUpO1xuICAgICAgICBpZiAodGhpcy5zdHJhdGVneS5tb2RlID09PSAnc2VhcmNoJykge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVBdHRhY2soYm9hcmQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RyYXRlZ3kubW9kZSA9PT0gJ2h1bnQnIHx8IHRoaXMuc3RyYXRlZ3kubW9kZSA9PT0gJ3RhcmdldCcpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0QXR0YWNrKGJvYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByYW5kb21pemVBdHRhY2soYm9hcmQpIHtcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgICAgICAgIGxldCBjb29yZCA9ICcnO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGNvb3JkICs9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmF0dGFja3NNYWRlLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja3NNYWRlLnB1c2goY29vcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEF0dGFjaygnaHVtYW4nLCBjb29yZCwgYm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRhcmdldEF0dGFjayhib2FyZCkge1xuICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldENvb3JkO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyYXRlZ3kuZGlyZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRDb29yZCA9IHRoaXMuc3RyYXRlZ3kudGFyZ2V0cy5zaGlmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cmF0ZWd5LnRhcmdldHNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRhcmdldENvb3JkID0gdGhpcy5zdHJhdGVneS50YXJnZXRzWzBdLnNoaWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldENvb3JkID0gdGhpcy5zdHJhdGVneS50YXJnZXRzWzFdLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0dGFja3NNYWRlLCB0YXJnZXRDb29yZC5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmF0dGFja3NNYWRlLmluY2x1ZGVzKHRhcmdldENvb3JkKSAmJiB0YXJnZXRDb29yZC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrc01hZGUucHVzaCh0YXJnZXRDb29yZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQXR0YWNrKCdodW1hbicsIHRhcmdldENvb3JkLCBib2FyZCk7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0dGFja3NNYWRlKTtcbiAgICB9XG4gICAgXG4gICAgLy8gYXR0YWNrIGhlbHBlcnNcbiAgICByZWNlaXZlQXR0YWNrUmVzdWx0KHN1bmssIGhpdCwgY29vcmQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlY2VpdmVBdHRhY2tSZXN1bHRzKCknKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VuaywgaGl0LCBjb29yZCk7XG4gICAgICAgIGlmIChzdW5rKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF0dGFja3NNYWRlKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTdHJhdGVneSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhpdCAmJiB0aGlzLnN0cmF0ZWd5Lm1vZGUgPT09ICdzZWFyY2gnKSB7IC8vIGZpcnN0IGhpdCwgbm8gZGlyZWN0aW9uIGZvdW5kXG4gICAgICAgICAgICAgICAgdGhpcy5odW50U3RyYXRlZ3koY29vcmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoaXQgJiYgdGhpcy5zdHJhdGVneS5tb2RlID09PSAnaHVudCcpIHsgLy8gc2Vjb25kIGhpdCwgY2hhbmdlIG1vZGUgdG8gdGFyZ2V0XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTdHJhdGVneShjb29yZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFoaXQgJiYgdGhpcy5zdHJhdGVneS5tb2RlID09PSAndGFyZ2V0JykgeyAvLyBlZGdlIHJlYWNoZWQsIGNsZWFyIHByZXZpb3VzIGNlbGxzXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VkZ2UgcmVhY2hlZCwgY2xlYXIgcHJldmlvdXMgY2VsbHMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmF0ZWd5LnRhcmdldHNbMF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0cmF0ZWd5KTtcbiAgICB9XG4gICAgaHVudFN0cmF0ZWd5KGNvb3JkKSB7IFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlyc3QgaGl0LCBubyBkaXJlY3Rpb24gZm91bmQnKTtcbiAgICAgICAgdGhpcy5zdHJhdGVneS5tb2RlID0gJ2h1bnQnO1xuICAgICAgICB0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmQgPSBjb29yZDtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChjb29yZC5zcGxpdCgnJylbMF0pO1xuICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KCcnKVsxXSk7XG4gICAgICAgIGxldCBjb29yZENoYW5nZXMgPSBbW3gsIHkgLSAxXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ggKyAxLCB5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeCwgeSArIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4IC0gMSwgeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgY29vcmQgaW4gY29vcmRDaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoKGNvb3JkQ2hhbmdlc1tjb29yZF1bMF0gPj0gMCAmJiBjb29yZENoYW5nZXNbY29vcmRdWzBdIDw9IDkpICYmIChjb29yZENoYW5nZXNbY29vcmRdWzFdID49IDAgJiYgY29vcmRDaGFuZ2VzW2Nvb3JkXVsxXSA8PSA5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kudGFyZ2V0cy5wdXNoKGAke2Nvb3JkQ2hhbmdlc1tjb29yZF1bMF19JHtjb29yZENoYW5nZXNbY29vcmRdWzFdfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRhcmdldFN0cmF0ZWd5KGNvb3JkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWNvbmQgaGl0LCBjaGFuZ2UgbW9kZSB0byB0YXJnZXQnKTtcbiAgICAgICAgdGhpcy5zdHJhdGVneS5tb2RlID0gJ3RhcmdldCc7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kudGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnVwZGF0ZURpcmVjdGlvbih0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmQsIGNvb3JkKTtcbiAgICAgICAgdGhpcy51cGRhdGVUYXJnZXRDZWxscyh0aGlzLnN0cmF0ZWd5LmRpcmVjdGlvbik7XG4gICAgfVxuICAgIHVwZGF0ZURpcmVjdGlvbihmaXJzdENvb3JkLCBzZWNvbmRDb29yZCkge1xuICAgICAgICBsZXQgeGEgPSBwYXJzZUludChmaXJzdENvb3JkWzBdKTtcbiAgICAgICAgbGV0IHhiID0gcGFyc2VJbnQoc2Vjb25kQ29vcmRbMF0pO1xuICAgICAgICBsZXQgeWEgPSBwYXJzZUludChmaXJzdENvb3JkWzFdKTtcbiAgICAgICAgbGV0IHliID0gcGFyc2VJbnQoc2Vjb25kQ29vcmRbMV0pO1xuICAgICAgICBpZiAoeGEgLSB4YiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdHJhdGVneS5kaXJlY3Rpb24gPSAndic7XG4gICAgICAgIH0gZWxzZSBpZiAoeWEgLSB5YiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdHJhdGVneS5kaXJlY3Rpb24gPSAnaCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlVGFyZ2V0Q2VsbHMoZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBwcmV2aW91cyA9IFtdO1xuICAgICAgICBsZXQgbmV4dCA9IFtdO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VJbnQodGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzBdKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXMudW5zaGlmdChgJHtpfSR7dGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzFdfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBhcnNlSW50KHRoaXMuc3RyYXRlZ3kuc3RhcnRDb29yZFswXSkgKyAxOyBpIDw9IDk7IGkrKykge1xuICAgICAgICAgICAgICAgIG5leHQucHVzaChgJHtpfSR7dGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzFdfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlSW50KHRoaXMuc3RyYXRlZ3kuc3RhcnRDb29yZFsxXSk7IGkrKykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzLnVuc2hpZnQoYCR7dGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzBdfSR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJzZUludCh0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmRbMV0pICsgMTsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXh0LnB1c2goYCR7dGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzBdfSR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cmF0ZWd5LnRhcmdldHMucHVzaChwcmV2aW91cywgbmV4dCk7XG4gICAgfVxuICAgIGFkZFRvQXR0YWNrcyhjb29yZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjb29yZCk7XG4gICAgICAgIHRoaXMuYXR0YWNrc01hZGUucHVzaChjb29yZCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXR0ZXJzXG4gICAgcmVzZXRTdHJhdGVneSgpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHttb2RlOiAnc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgIH1cbiAgICByZXNldEF0dGFja3MoKSB7XG4gICAgICAgIHRoaXMuYXR0YWNrc01hZGUgPSBbXTtcbiAgICB9XG59XG5cbi8vIEZBQ1RPUklFU1xuZnVuY3Rpb24gbWFrZVNoaXAobGVuZ3RoLCBkaXIsIG5hbWUsIGNvb3Jkcykge1xuICAgIHJldHVybiBuZXcgU2hpcChsZW5ndGgsIGRpciwgbmFtZSwgY29vcmRzKTtcbn1cbmZ1bmN0aW9uIG1ha2VHYW1lYm9hcmQoKSB7XG4gICAgcmV0dXJuIG5ldyBHYW1lYm9hcmQoKTtcbn1cbmZ1bmN0aW9uIG1ha2VQbGF5ZXIodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHVtYW4oKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21wdXRlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVBsYXllcjtcbiIsImNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgLy8gZGF0YVxuICAgIGxldCBfYXR0cmlidXRlcyA9IFtdO1xuICAgIGxldCBlbGVtZW50O1xuXG4gICAgLy8gYmFzaWMgaGVscGVyIGZhY3Rvcmllc1xuICAgIGNvbnN0IGRpdiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHNwYW4gPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uID0gZnVuY3Rpb24oY29udGVudCwgc3RhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgZWxlbWVudC5yb2xlID0gJ2J1dHRvbic7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gc3RhdGU7XG4gICAgICAgIGVsZW1lbnQuYXJpYVByZXNzZWQgPSAnZmFsc2UnO1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaW1nID0gZnVuY3Rpb24odXJsLCBhbHQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbGVtZW50LnNyYyA9IGAuLi8ke3VybH1gO1xuICAgICAgICBlbGVtZW50LnNyYyA9IHVybDtcbiAgICAgICAgZWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGF0dHJpYnV0ZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbaV1bMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBhdHRyaWJ1dGVzW2ldLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzW2ldLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXYsXG4gICAgICAgIHNwYW4sXG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgaW1nLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5pbXBvcnQgbWFrZVBsYXllciBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgICBsZXQgaHVtYW47XG4gICAgbGV0IGNvbXB1dGVyO1xuXG4gICAgLy8gZHJpdmVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBodW1hbiA9IG1ha2VQbGF5ZXIoJ2h1bWFuJyk7XG4gICAgICAgIGNvbXB1dGVyID0gbWFrZVBsYXllcignY29tcHV0ZXInKTtcbiAgICB9XG5cbiAgICAvLyBwbGFjZW1lbnQgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIHF1ZXJ5Q29vcmREYXRhKHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBjb29yZFNldCA9IGh1bWFuLmJvYXJkLmdldENvb3JkcyhzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCk7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gaHVtYW4uYm9hcmQuc2V0SXNWYWxpZChjb29yZFNldCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlQ29vcmREYXRhJywgY29vcmRTZXQsIGlzVmFsaWQpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCwgbmFtZSkge1xuICAgICAgICBodW1hbi5ib2FyZC5wbGFjZVNoaXAoc3RhcnRDb29yZCwgZGlyZWN0aW9uLCBsZW5ndGgsIG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBxdWVyeVNoaXBEYXRhKHRhcmdldElEKSB7XG4gICAgICAgIGxldCBzaGlwID0gaHVtYW4uYm9hcmQuZ2V0U2hpcCh0YXJnZXRJRCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlU2hpcERhdGEnLCBzaGlwLm5hbWUsIHNoaXAuZGlyLCBzaGlwLmxlbmd0aCwgc2hpcC5jb29yZHMpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNoaXBPYmplY3QodGFyZ2V0TmFtZSkge1xuICAgICAgICBodW1hbi5ib2FyZC5yZW1vdmVTaGlwKHRhcmdldE5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldEJvYXJkRGF0YSgpIHtcbiAgICAgICAgaHVtYW4uYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICBjb21wdXRlci5ib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGNvbXB1dGVyLnJlc2V0U3RyYXRlZ3koKTtcbiAgICAgICAgY29tcHV0ZXIucmVzZXRBdHRhY2tzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VUb09yaWdpbmFsKCkge1xuICAgICAgICBsZXQgc2hpcCA9IGh1bWFuLmJvYXJkLnJlcGxhY2luZztcbiAgICAgICAgaHVtYW4uYm9hcmQucmVwbGFjZVNoaXBUb09yaWdpbmFsKCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlU2hpcERhdGEnLCBzaGlwLm5hbWUsIHNoaXAuZGlyLCBzaGlwLmxlbmd0aCwgc2hpcC5jb29yZHMpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgfVxuXG4gICAgLy8gcGxheSBtZXRob2RzXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb21wdXRlclNoaXBzKCkge1xuICAgICAgICBjb21wdXRlci5yYW5kb21pemVTaGlwcygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0YWtlVHVybih0YXJnZXRDb29yZCkge1xuICAgICAgICBodW1hbi5zZW5kQXR0YWNrKCdjb21wdXRlcicsIHRhcmdldENvb3JkLCBjb21wdXRlci5ib2FyZCk7XG4gICAgICAgIGlmIChjb21wdXRlci5ib2FyZC5pc0xvc2VyKCkpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCd3aW5uZXInLCAnY29tcHV0ZXInKTsgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgICAgICAgICAgcmVzZXRCb2FyZERhdGEoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb21wdXRlci5tYWtlQXR0YWNrKGh1bWFuLmJvYXJkKTtcbiAgICAgICAgaWYgKGh1bWFuLmJvYXJkLmlzTG9zZXIoKSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3dpbm5lcicsICdodW1hbicpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgICAgICByZXNldEJvYXJkRGF0YSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbXB1dGVyU3RyYXRlZ3koc3VuaywgaGl0LCBjb29yZCkge1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlQ29tcHV0ZXJTdHJhdGVneSgpJyk7XG4gICAgICAgIGNvbXB1dGVyLnJlY2VpdmVBdHRhY2tSZXN1bHQoc3VuaywgaGl0LCBjb29yZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEJ1ZmZlclRvQ29tcHV0ZXJBdHRhY2tzKGJ1ZmZlcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcHV0ZXIuYWRkVG9BdHRhY2tzKGJ1ZmZlcltpXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXIuYXR0YWNrc01hZGUpO1xuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcbiAgICBldmVudHMuc3Vic2NyaWJlKCdxdWVyeUNvb3JkRGF0YScsIHF1ZXJ5Q29vcmREYXRhKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChwbGF5ZXJCb2FyZHNbMF0ub25Nb3VzZU92ZXIsIGJvZHkub25LZXlEb3duKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3BsYWNlU2hpcCcsIHBsYWNlU2hpcCk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3F1ZXJ5U2hpcERhdGEnLCBxdWVyeVNoaXBEYXRhKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChib2R5Lm9uQ2xpY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlU2hpcE9iamVjdCcsIGRlbGV0ZVNoaXBPYmplY3QpOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZXNldEJvYXJkRGF0YScsIHJlc2V0Qm9hcmREYXRhKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChib2R5Lm9uQ2xpY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVwbGFjZVRvT3JpZ2luYWwnLCByZXBsYWNlVG9PcmlnaW5hbCk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2dlbmVyYXRlQ29tcHV0ZXJTaGlwcycsIGdlbmVyYXRlQ29tcHV0ZXJTaGlwcyk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Rha2VUdXJuJywgdGFrZVR1cm4pOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZWNlaXZlQXR0YWNrUmVzdWx0JywgdXBkYXRlQ29tcHV0ZXJTdHJhdGVneSk7IC8vIHB1Ymxpc2hlZCBieSBjbGFzc2VzLmpzIChyZWNlaXZlQXR0YWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2FkZEJ1ZmZlclRvQ29tcHV0ZXJBdHRhY2tzJywgYWRkQnVmZmVyVG9Db21wdXRlckF0dGFja3MpOyAvLyBwdWJsaXNoZWQgYnkgY2xhc3Nlcy5qcyAocmVjZWl2ZUF0dGFjaylcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsIC8vIHVzZWQgYnkgaW5kZXguanNcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7XG4iLCIvLyBjYWNoZSBpbWFnZXNcbmxldCBpbWdRdWVyeSA9IHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzJywgZmFsc2UsIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9pKTtcbmxldCBpY29uc0FycmF5ID0gaW1wb3J0SWNvbnMoaW1nUXVlcnkpO1xuLy8gY29uc29sZS5sb2coJyoqKioqIElDT05TIEFSUkFZICoqKioqJyk7XG4vLyBjb25zb2xlLmxvZyhpY29uc0FycmF5KTtcblxuLy8gbWV0aG9kc1xuZnVuY3Rpb24gaW1wb3J0SWNvbnMocikge1xuICAgIGxldCBxdWVyeUtleXMgPSByLmtleXMoKTtcbiAgICBsZXQgaWNvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3S2V5ID0gcXVlcnlLZXlzW2ldLnNwbGl0KCcuc3ZnJylbMF0uc3BsaXQoJy4vJylbMV07XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGAuL2Fzc2V0cy8ke3F1ZXJ5S2V5c1tpXS5zcGxpdCgnLi8nKVsxXX1gO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGBuZXdLZXkgLS0+ICR7bmV3S2V5fWApO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGBuZXdWYWx1ZSAtLT4gJHtuZXdWYWx1ZX1gKVxuICAgICAgICBcbiAgICAgICAgaWNvbnNbbmV3S2V5XSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBpY29ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaWNvbnNBcnJheTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5pbXBvcnQgY3JlYXRlIGZyb20gJy4vY3JlYXRlLmpzJztcblxuY29uc3QgdWkgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJCb2FyZHMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuJykubGFzdEVsZW1lbnRDaGlsZCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyJykubGFzdEVsZW1lbnRDaGlsZF07XG4gICAgbGV0IHNoaXBDb250YWluZXJzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbicpLmNoaWxkcmVuWzFdLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXInKS5jaGlsZHJlblsxXV07XG4gICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1nYW1lJyk7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIHBsYWNpbmc6IGZhbHNlLFxuICAgICAgICBwbGF5aW5nOiBmYWxzZSxcbiAgICAgICAgdGFyZ2V0Q2VsbDogdW5kZWZpbmVkLFxuICAgICAgICBzZWxlY3RlZFNoaXA6IHVuZGVmaW5lZCxcbiAgICAgICAgY29vcmREYXRhOiB1bmRlZmluZWQsIC8vIHRvZG8gY2hhbmUgc3RydWN0dXJlIHRvIGNvb3JkU2V0LCBpc1ZhbGlkIGtleS12YWx1ZSBwYWlyc1xuICAgICAgICBkaXJlY3Rpb246ICdyJ1xuICAgIH1cblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoIXN0YXRlLnBsYXlpbmcpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3BsYXktZ2FtZScgfHwgZS50YXJnZXQuaWQgPT09ICdwbGF5Jykge1xuICAgICAgICAgICAgICAgIHBsYXkoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdyZXN0YXJ0LWdhbWUnIHx8IGUudGFyZ2V0LmlkID09PSAncmVzdGFydCcpIHtcbiAgICAgICAgICAgICAgICByZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudScpICYmICFlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkJykpIHtcbiAgICAgICAgICAgICAgICBzZXRNZW51U2VsZWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nICYmIHN0YXRlLmNvb3JkRGF0YVsxXSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgncGxhY2VTaGlwJywgc3RhdGUudGFyZ2V0Q2VsbC5pZC5zcGxpdCgnLScpWzFdLCBzdGF0ZS5kaXJlY3Rpb24sIHN0YXRlLnNlbGVjdGVkU2hpcC5pZC5zcGxpdCgnLScpWzBdLCBzdGF0ZS5zZWxlY3RlZFNoaXAuaWQuc3BsaXQoJy0nKVsxXSk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgICAgICAgICBhZGRTaGlwUGxhY2VkKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc3RhdGUucGxhY2luZyAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnBsYWNpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgncXVlcnlTaGlwRGF0YScsIHN0YXRlLnRhcmdldENlbGwuaWQuc3BsaXQoJy0nKVsxXSk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnZGVsZXRlU2hpcE9iamVjdCcsIHN0YXRlLnNlbGVjdGVkU2hpcC5pZC5zcGxpdCgnLScpWzFdKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnBsYXlpbmcpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3Jlc3RhcnQtZ2FtZScgfHwgZS50YXJnZXQuaWQgPT09ICdyZXN0YXJ0Jykge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdjb25maXJtLXJlc3RhcnQnIHx8IGUudGFyZ2V0LmlkID09PSAnY29uZmlybScpIHtcbiAgICAgICAgICAgICAgICByZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdjYW5jZWwtcmVzdGFydCcgfHwgZS50YXJnZXQuaWQgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgIT09IG51bGwgJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQgPT09ICdjb21wdXRlcicgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCd0YWtlVHVybicsIGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZEtleXMgPSBbJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0J107XG4gICAgICAgIGlmICghc3RhdGUucGxheWluZykge1xuICAgICAgICAgICAgaWYgKHZhbGlkS2V5cy5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uID0gJ3UnXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAnbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAncic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdxdWVyeUNvb3JkRGF0YScsIHN0YXRlLnRhcmdldENlbGwuaWQuc3BsaXQoJy0nKVsxXSwgc3RhdGUuZGlyZWN0aW9uLCBzdGF0ZS5zZWxlY3RlZFNoaXAuaWQuc3BsaXQoJy0nKVswXSk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBzZXRNZW51U2VsZWN0KHN0YXRlLnNlbGVjdGVkU2hpcCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2VsbEhvdmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHBsYXllckJvYXJkc1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgICBzdGF0ZS50YXJnZXRDZWxsID0gZS50YXJnZXQ7XG4gICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nICYmICFzdGF0ZS5wbGF5aW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncXVlcnlDb29yZERhdGEnLCBzdGF0ZS50YXJnZXRDZWxsLmlkLnNwbGl0KCctJylbMV0sIHN0YXRlLmRpcmVjdGlvbiwgc3RhdGUuc2VsZWN0ZWRTaGlwLmlkLnNwbGl0KCctJylbMF0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHBsYXllckJvYXJkc1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nICYmICFzdGF0ZS5wbGF5aW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICByZW1vdmVDZWxsSG92ZXIoKTtcbiAgICAgICAgfSAgIFxuICAgIH0pXG4gICAgcGxheWVyQm9hcmRzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5wbGF5aW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICBwbGF5ZXJCb2FyZHNbMV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUucGxheWluZyAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2F0dGFjaycpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkcml2ZXIgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGJvYXJkc1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgcGxheWVyQm9hcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZ2VuZXJhdGVHcmlkKHBsYXllckJvYXJkc1tpXSwgaSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IHN0YXRlXG4gICAgICAgIHNldFNlY3Rpb25UeXBlKHNoaXBDb250YWluZXJzWzBdLCAnbWVudScpO1xuICAgICAgICAvLyBnZW5lcmF0ZSBzaGlwIG1lbnVcbiAgICAgICAgZ2VuZXJhdGVTaGlwTWVudSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAvLyByZXBsYWNlIHNlbGVjdGVkIHNoaXAgdG8gb3JpZ2luYWwgY29vcmRzXG4gICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nKSB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncmVwbGFjZVRvT3JpZ2luYWwnLCAnJyk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgYWRkU2hpcFBsYWNlZCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdlbmVyYXRlIHNoaXAgdGFsbGllc1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgc2hpcENvbnRhaW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjbGVhclNoaXBDb250YWluZXIoc2hpcENvbnRhaW5lcnNbaV0pO1xuICAgICAgICAgICAgc2V0U2VjdGlvblR5cGUoc2hpcENvbnRhaW5lcnNbaV0sICd0YWxseScpO1xuICAgICAgICAgICAgZ2VuZXJhdGVTaGlwVGFsbGllcyhzaGlwQ29udGFpbmVyc1tpXSwgaSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXNrIGNvbXB1dGVyIGJvYXJkIHRvIGdlbmVyYXRlIHBsYWNlbWVudHNcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2dlbmVyYXRlQ29tcHV0ZXJTaGlwcycsICcnKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgIC8vIHNldCBzdGF0ZSB0byBwbGF5XG4gICAgICAgIHN0YXRlLnBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxheWluZyA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIC8vIHJlc2V0IGJvYXJkc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJCb2FyZHNbaV0uY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHBsYXllckJvYXJkc1tpXS5jaGlsZHJlbltqXS5jaGlsZHJlbi5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyQm9hcmRzW2ldLmNoaWxkcmVuW2pdLmNoaWxkcmVuW2tdLmNsYXNzTGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZHNbaV0uY2hpbGRyZW5bal0uY2hpbGRyZW5ba10uY2xhc3NMaXN0ID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIHJlc2V0IG1lbnVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNsZWFyU2hpcENvbnRhaW5lcihzaGlwQ29udGFpbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgbWFrZVNoaXBJY29ucygnJywgc2hpcENvbnRhaW5lcnNbMF0pO1xuICAgICAgICBzaGlwQ29udGFpbmVyc1swXS5jbGFzc0xpc3QgPSAnbWVudSc7XG4gICAgICAgIHNoaXBDb250YWluZXJzWzFdLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICAvLyByZXNldCBwbGF5IGJ1dHRvblxuICAgICAgICBwbGF5QnV0dG9uLmNoaWxkcmVuWzBdLnNyYyA9ICcuL2ljb25zL3BsYXlfZ3JheS5zdmcnO1xuICAgICAgICBwbGF5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheUJ1dHRvbi5hcmlhRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBjbGVhciBwbGF5ZXIgb2JqZWN0c1xuICAgICAgICBldmVudHMucHVibGlzaCgncmVzZXRCb2FyZERhdGEnLCAnJyk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAvLyBjbGVhciBzdGF0ZVxuICAgICAgICBzdGF0ZS5wbGFjaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuICAgICAgICBzdGF0ZS5jb29yZERhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdyJztcbiAgICB9XG5cbiAgICAvLyBtdWx0aS11c2UgaGVscGVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBtYWtlU2hpcEljb25zKHBsYXllclR5cGUsIGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgc2hpcHMgPSBbWzUsICdhY2MnXSxcbiAgICAgICAgICAgICAgICAgICAgIFs0LCAnYnMnXSxcbiAgICAgICAgICAgICAgICAgICAgIFszLCAnY3J1cyddLFxuICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MSddLFxuICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MiddLFxuICAgICAgICAgICAgICAgICAgICAgWzEsICdzdWIxJ10sXG4gICAgICAgICAgICAgICAgICAgICBbMSwgJ3N1YjInXVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbENvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJUeXBlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnLnNoaXAnLCBgIyR7c2hpcHNbaV1bMF19LSR7c2hpcHNbaV1bMV19YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnLnNoaXAnLCBgIyR7cGxheWVyVHlwZX0tJHtzaGlwc1tpXVsxXX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV1bMF07IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gY3JlYXRlLmRpdignJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChjZWxsQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluaXQgaGVscGVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUdyaWQoYm9hcmQsIGJvYXJkTnVtYmVyKSB7XG4gICAgICAgIGxldCBwbGF5ZXI7XG4gICAgICAgIGlmIChib2FyZE51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgcGxheWVyID0gJ2gnO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkTnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICBwbGF5ZXIgPSAnYyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gY3JlYXRlLmRpdignJywgJy5yb3cnKVxuICAgICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGogPCAxMCkge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gY3JlYXRlLmRpdignJywgJy5jZWxsJywgYCMke3BsYXllcn0tJHtqfSR7aX1gKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFNlY3Rpb25UeXBlKHNlY3Rpb24sIHNlbGVjdG9yKSB7IFxuICAgICAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoc2VsZWN0b3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNoaXBNZW51KCkge1xuICAgICAgICBtYWtlU2hpcEljb25zKCcnLCBzaGlwQ29udGFpbmVyc1swXSk7XG4gICAgfVxuXG4gICAgLy8gcGxhY2VtZW50IG1ldGhvZHNcbiAgICBmdW5jdGlvbiBzZXRNZW51U2VsZWN0KHRhcmdldFNoaXApIHtcbiAgICAgICAgaWYgKHN0YXRlLnNlbGVjdGVkU2hpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGF0ZS5wbGFjaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkU2hpcCA9IHRhcmdldFNoaXA7XG4gICAgICAgICAgICB0YXJnZXRTaGlwLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2hpcCA9PT0gc3RhdGUuc2VsZWN0ZWRTaGlwKSB7XG4gICAgICAgICAgICB0YXJnZXRTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBzdGF0ZS5wbGFjaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2hpcCAhPT0gc3RhdGUuc2VsZWN0ZWRTaGlwKSB7XG4gICAgICAgICAgICB0YXJnZXRTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSB0YXJnZXRTaGlwO1xuICAgICAgICAgICAgdGFyZ2V0U2hpcC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlc2V0IGRpcmVjdGlvbiBhZnRlciBwbGFjZW1lbnRcbiAgICAgICAgaWYgKHN0YXRlLmRpcmVjdGlvbiAhPT0gJ3InKSB7XG4gICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAncic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0Qm9hcmRIb3Zlcihjb29yZFNldCwgaXNWYWxpZCkge1xuICAgICAgICAgICAgcmVtb3ZlQ2VsbEhvdmVyKCk7XG4gICAgICAgICAgICBzdGF0ZS5jb29yZERhdGEgPSBbY29vcmRTZXQsIGlzVmFsaWRdO1xuICAgICAgICAgICAgYWRkQ2VsbEhvdmVyKHN0YXRlLmNvb3JkRGF0YVsxXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZENlbGxIb3Zlcihpc1ZhbGlkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29vcmREYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUuY29vcmREYXRhWzBdW2ldLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaC0ke3N0YXRlLmNvb3JkRGF0YVswXVtpXX1gKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpcy12YWxpZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUNlbGxIb3ZlcigpIHtcbiAgICAgICAgaWYgKHN0YXRlLmNvb3JkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvb3JkRGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jb29yZERhdGFbMF1baV0ubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaC0ke3N0YXRlLmNvb3JkRGF0YVswXVtpXX1gKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnY2VsbCBwbGFjZWQnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkU2hpcFBsYWNlZCgpIHtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwLmNsYXNzTGlzdCA9ICdzaGlwIHBsYWNlZCc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29vcmREYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBoLSR7c3RhdGUuY29vcmREYXRhWzBdW2ldfWApO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnY2VsbCc7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuICAgICAgICBzdGF0ZS5jb29yZERhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZVNoaXBQbGFjZWQobmFtZSwgZGlyLCBsZW5ndGgsIGNvb3Jkcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaC0ke2Nvb3Jkc1tpXX1gKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gJ2NlbGwgaG92ZXIgaXMtdmFsaWQnO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2xlbmd0aH0tJHtuYW1lfWApO1xuICAgICAgICBzdGF0ZS5jb29yZERhdGEgPSBbY29vcmRzLCB0cnVlXTtcbiAgICAgICAgc3RhdGUuZGlyID0gZGlyO1xuICAgIH1cblxuICAgIC8vIHBsYXkgaGVscGVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBtYWtlUGxheUxpdmUoKSB7XG4gICAgICAgIHBsYXlCdXR0b24uY2hpbGRyZW5bMF0uc3JjID0gJy4vaWNvbnMvcGxheS5zdmcnO1xuICAgICAgICBwbGF5QnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHBsYXlCdXR0b24uYXJpYURpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU2hpcFRhbGxpZXModGFsbHlDb250YWluZXIsIGluZGV4KSB7XG4gICAgICAgIGxldCBwbGF5ZXJUeXBlO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHBsYXllclR5cGUgPSAnaCc7XG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgcGxheWVyVHlwZSA9ICdjJztcbiAgICAgICAgfVxuICAgICAgICBtYWtlU2hpcEljb25zKHBsYXllclR5cGUsIHRhbGx5Q29udGFpbmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJTaGlwQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUhpdChwbGF5ZXIsIGNvb3JkLCBoaXQpIHtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjLSR7Y29vcmR9YCk7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICBzdGF0ZS50YXJnZXRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGgtJHtjb29yZH1gKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICBzdGF0ZS50YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICB9IGVsc2UgaWYgKCFoaXQpIHtcbiAgICAgICAgICAgIHN0YXRlLnRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnbWlzcycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlTdW5rKHBsYXllciwgbmFtZSkge1xuICAgICAgICBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICBwbGF5ZXIgPSAnaCc7XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICBwbGF5ZXIgPSAnYyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtwbGF5ZXJ9LSR7bmFtZX1gKTtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlCdWZmZXIocGxheWVyLCBidWZmZXJDb29yZHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBidWZmZXJDb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGRpc3BsYXlIaXQocGxheWVyLCBidWZmZXJDb29yZHNbaV0sIGZhbHNlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUFsZXJ0Qm94KCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFsnY2FuY2VsJywgJ2NvbmZpcm0nXTtcbiAgICAgICAgbGV0IGFsZXJ0Q29udGFpbmVyID0gY3JlYXRlLmRpdignJywgJyNhbGVydCcpO1xuICAgICAgICBsZXQgdGV4dCA9IGNyZWF0ZS5zcGFuKCdSZXN0YXJ0IGdhbWU/Jyk7XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlLmRpdignJyk7XG4gICAgICAgIGZvciAobGV0IGkgPTAgOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGNyZWF0ZS5idXR0b24oJycsIGAke29wdGlvbnNbaV19YCwgYCMke29wdGlvbnNbaV19LXJlc3RhcnRgKTtcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IGNyZWF0ZS5pbWcoYC4vaWNvbnMvJHtvcHRpb25zW2ldfS5zdmdgLCBgJHtvcHRpb25zW2ldfWAsIGAjJHtvcHRpb25zW2ldfWApO1xuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBhbGVydENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgICAgICBsZXQgc2NyZWVuID0gY3JlYXRlLmRpdignJywgJy5zY3JlZW4nKTtcbiAgICAgICAgYm9keS5hcHBlbmQoc2NyZWVuLCBhbGVydENvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsZXJ0Qm94KCkge1xuICAgICAgICBsZXQgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcmVlbicpO1xuICAgICAgICBsZXQgYWxlcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQnKTtcbiAgICAgICAgaWYgKGFsZXJ0Qm94ICE9PSBudWxsICYmIHNjcmVlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2NyZWVuLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2NyZWVuKTtcbiAgICAgICAgICAgIGFsZXJ0Qm94LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYWxlcnRCb3gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZW5kIGdhbWVcbiAgICBmdW5jdGlvbiBlbmRHYW1lKHdpbm5lcikge1xuICAgICAgICBzdGF0ZS5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIGdlbmVyYXRlR2FtZVJlc3VsdCh3aW5uZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUdhbWVSZXN1bHQod2lubmVyKSB7XG4gICAgICAgIGxldCBhbGVydENvbnRhaW5lciA9IGNyZWF0ZS5kaXYoJycsICcjYWxlcnQnKTtcbiAgICAgICAgbGV0IHRleHQ7XG4gICAgICAgIGlmICh3aW5uZXIgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIHRleHQgPSAnWW91IHdpbiEgPUQnO1xuICAgICAgICB9IGVsc2UgaWYgKHdpbm5lciA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgdGV4dCA9IFwiQ29tcHV0ZXIgd2lucy4gPScoXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRleHRTcGFuID0gY3JlYXRlLnNwYW4odGV4dCk7XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRTcGFuKTtcbiAgICAgICAgbGV0IHJlc3RhcnRCdXR0b24gPSBjcmVhdGUuYnV0dG9uKCcnLCBgcmVzdGFydGAsIGAjcmVzdGFydC1nYW1lYCk7XG4gICAgICAgIGxldCByZXN0YXJ0SW1hZ2UgPSBjcmVhdGUuaW1nKGAuL2ljb25zL3Jlc3RhcnQuc3ZnYCwgYHJlc3RhcnRgLCBgI3Jlc3RhcnRgKTtcbiAgICAgICAgcmVzdGFydEJ1dHRvbi5hcHBlbmRDaGlsZChyZXN0YXJ0SW1hZ2UpO1xuICAgICAgICBhbGVydENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXJ0QnV0dG9uKTtcbiAgICAgICAgbGV0IHNjcmVlbiA9IGNyZWF0ZS5kaXYoJycsICcuc2NyZWVuJylcbiAgICAgICAgYm9keS5hcHBlbmQoc2NyZWVuLCBhbGVydENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlY2VpdmVDb29yZERhdGEnLCBzZXRCb2FyZEhvdmVyKTsgLy8gcHVibGlzaGVkIGJ5IGdhbWUuanMgKHF1ZXJ5Q29vcmREYXRhKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlY2VpdmVTaGlwRGF0YScsIHJlbW92ZVNoaXBQbGFjZWQpOyAvLyBwdWJsaXNoZWQgYnkgZ2FtZS5qcyAocXVlcnlTaGlwRGF0YSwgcmVwbGFjZVRvT3JpZ2luYWwpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnbWFrZVBsYXlMaXZlJywgbWFrZVBsYXlMaXZlKTsgLy8gcHVibGlzaGVkIGJ5IGNsYXNzZXMuanMgKGNvbXB1dGVyLnJhbmRvbWl6ZVNoaXBzKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2Rpc3BsYXlBdHRhY2snLCBkaXNwbGF5SGl0KTsgLy8gcHVibGlzaGVkIGJ5IGNsYXNzZXMuanMgKGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2Rpc3BsYXlTdW5rJywgZGlzcGxheVN1bmspOyAvLyBwdWJsaXNoZWQgYnkgY2xhc3Nlcy5qcyAoZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnd2lubmVyJywgZW5kR2FtZSk7IC8vIHB1Ymxpc2hlZCBieSBnYW1lLmpzICh0YWtlVHVybilcbiAgICBldmVudHMuc3Vic2NyaWJlKCdkaXNwbGF5QnVmZmVyJywgZGlzcGxheUJ1ZmZlcik7IC8vIHB1Ymxpc2hlZCBieSBjbGFzc2VzLmpzIChnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaylcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsIC8vIHVzZWQgYnkgaW5kZXguanNcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLmNzcyc7XG5pbXBvcnQgaWNvbnNBcnJheSBmcm9tICcuL3NjcmlwdHMvaWNvbnMuanMnO1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUuanMnO1xuaW1wb3J0IHVpIGZyb20gJy4vc2NyaXB0cy91aS5qcyc7XG5cbmdhbWUuaW5pdCgpO1xudWkuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9