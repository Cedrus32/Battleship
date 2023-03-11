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
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL VARIABLES */\n\n:root {\n    --font-size: 10pt;\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 16); /* 15 for 10+5 cells ++ 1 to /13 for cell gaps */\n    --cell-gap: calc(var(--player-fr) / 13);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5) + calc(var(--cell-gap) * 4));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(calc(var(--player-fr) * 10) + calc(var(--cell-gap) * 9));\n    --board-cell: var(--player-fr);\n\n    --main-height: calc(5.5vw + 1vw + var(--board-area) + calc(var(--main-spacing) * 2) + calc(var(--player-fr) * 2));\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-rows: auto;\n    grid-template-areas: '.       title'\n                         'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-rows: auto;\n    grid-template-areas: 'title .'\n                         'board sidebar';\n}\n\n    .title {\n        grid-area: title;\n    }\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .title {\n            padding-bottom: calc(var(--main-spacing) / 2);\n        }\n\n        #computer .title {\n            text-align: end;\n        }\n\n        .menu,\n        .tally {\n            gap: var(--sidebar-spacing);\n        }\n\n            .ship,\n            .board,\n            .row {\n                gap: var(--cell-gap);\n            }\n\n    footer {\n        justify-content: center;\n        gap: calc(var(--main-spacing) / 2);\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .tally .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    footer {\n        width: 100%;\n    }\n\n        button {\n            height: calc(var(--player-fr) * 2);\n            width: auto;\n        }\n\n            img {\n                height: 100%;\n                width: auto;\n            }\n\n/* COLORS , FONTS & SHAPING */\n\nbody,\n#alert {\n    background-color: #b1c6eb;\n}\n\n#alert,\n.title {\n    color: blue;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n#alert span,\n#alert div {\n    z-index: 1;\n}\n\n#alert {\n    position: absolute;\n    top: calc(var(--main-height) / 2);\n    left: 50%;\n    transform: translate(-50%, -50%);\n    justify-content: center;\n    align-items: center;\n    padding: var(--main-spacing);\n    gap: var(--main-spacing);\n}\n\n.screen {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    background-color: #b1c6eb;\n    opacity: 75%;\n}\n\n.title {\n    font-size: 5vw;\n    line-height: 5.5vw;\n}\n\n#alert span {\n    font-size: 2vw;\n    line-height: 2.5vw;\n}\n\n.ship div,\n.cell,\n#alert {\n    border-radius: 10%;\n}\n\n.cell,\n.cell.attack:not(.cell.hit),\n.cell.attack:not(.cell.miss),\n#alert {\n    border: blue 1px solid;\n}\n\n.cell.attack:not(.cell.hit),\n.cell.attack:not(.cell.miss) {\n    opacity: 25%;\n}\n\n.menu .ship div,\n.cell.placed,\n.ship.selected div,\n.ship.placed div,\n.hover.is-valid,\n.tally .ship div {\n    background-color: blue;\n}\n\n.ship.selected div,\n.ship.placed div,\n.hover.is-valid,\n.tally .ship div {\n    opacity: 50%;\n}\n\n.miss {\n    background-color: rgba(0, 0, 131);\n    opacity: 15%;\n    border-color: rgba(0, 0, 131);\n}\n\n.hover.is-invalid,\n.sunk div,\n.hit {\n    background-color: red !important;\n    opacity: 50%;\n    border-color: red;\n}\n\n.hover.is-valid,\n.sunk div {\n    opacity: 50%;\n}\n\n.hit {\n    opacity: 75%;\n}\n\nbutton {\n    background-color: transparent;\n    border: none;\n}\n\n    button#restart-game {\n        transform: scaleX(-1);\n    }\n\n    button:hover img {\n        transform: scale(1.05);\n    }\n\n    button:active img {\n        transform: scale(0.95);\n    }\n", "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB;IACI,iBAAiB;IACjB,mBAAmB;IACnB,oEAAoE;IACpE,0CAA0C,EAAE,gDAAgD;IAC5F,uCAAuC;;IAEvC,gDAAgD;IAChD,qGAAqG;IACrG,6BAA6B;;IAE7B,2EAA2E;IAC3E,8BAA8B;;IAE9B,iHAAiH;AACrH;;AAEA,iBAAiB;;AAEjB;;;;;;;;;IASI,aAAa;AACjB;;AAEA;;;;;IAKI,iBAAiB;AACrB;;AAEA,iBAAiB;;AAEjB;;IAEI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,wBAAwB;IACxB;wCACoC;AACxC;;AAEA;IACI,4DAA4D;IAC5D,wBAAwB;IACxB;wCACoC;AACxC;;IAEI;QACI,gBAAgB;IACpB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,gBAAgB;IACpB;;AAEJ,gBAAgB;;AAEhB;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;IAEI;QACI,wBAAwB;IAC5B;;QAEI;YACI,6CAA6C;QACjD;;QAEA;YACI,eAAe;QACnB;;QAEA;;YAEI,2BAA2B;QAC/B;;YAEI;;;gBAGI,oBAAoB;YACxB;;IAER;QACI,uBAAuB;QACvB,kCAAkC;IACtC;;AAEJ,WAAW;;AAEX;IACI,YAAY;IACZ,YAAY;AAChB;;IAEI;QACI,4BAA4B;IAChC;;QAEI;;YAEI,qCAAqC;QACzC;;QAEA;YACI,oCAAoC;QACxC;;YAEI;gBACI,YAAY;gBACZ,kBAAkB;YACtB;;gBAEI;;;oBAGI,wBAAwB;oBACxB,uBAAuB;gBAC3B;;QAER;YACI,yBAAyB;YACzB,wBAAwB;QAC5B;;IAEJ;QACI,WAAW;IACf;;QAEI;YACI,kCAAkC;YAClC,WAAW;QACf;;YAEI;gBACI,YAAY;gBACZ,WAAW;YACf;;AAEZ,6BAA6B;;AAE7B;;IAEI,yBAAyB;AAC7B;;AAEA;;IAEI,WAAW;IACX,sHAAsH;AAC1H;;AAEA;;IAEI,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,mBAAmB;IACnB,4BAA4B;IAC5B,wBAAwB;AAC5B;;AAEA;IACI,kBAAkB;IAClB,MAAM;IACN,OAAO;IACP,aAAa;IACb,YAAY;IACZ,yBAAyB;IACzB,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,kBAAkB;AACtB;;AAEA;;;IAGI,kBAAkB;AACtB;;AAEA;;;;IAII,sBAAsB;AAC1B;;AAEA;;IAEI,YAAY;AAChB;;AAEA;;;;;;IAMI,sBAAsB;AAC1B;;AAEA;;;;IAII,YAAY;AAChB;;AAEA;IACI,iCAAiC;IACjC,YAAY;IACZ,6BAA6B;AACjC;;AAEA;;;IAGI,gCAAgC;IAChC,YAAY;IACZ,iBAAiB;AACrB;;AAEA;;IAEI,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,6BAA6B;IAC7B,YAAY;AAChB;;IAEI;QACI,qBAAqB;IACzB;;IAEA;QACI,sBAAsB;IAC1B;;IAEA;QACI,sBAAsB;IAC1B","sourcesContent":["/* GLOBAL VARIABLES */\n\n:root {\n    --font-size: 10pt;\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 16); /* 15 for 10+5 cells ++ 1 to /13 for cell gaps */\n    --cell-gap: calc(var(--player-fr) / 13);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5) + calc(var(--cell-gap) * 4));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(calc(var(--player-fr) * 10) + calc(var(--cell-gap) * 9));\n    --board-cell: var(--player-fr);\n\n    --main-height: calc(5.5vw + 1vw + var(--board-area) + calc(var(--main-spacing) * 2) + calc(var(--player-fr) * 2));\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-rows: auto;\n    grid-template-areas: '.       title'\n                         'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-rows: auto;\n    grid-template-areas: 'title .'\n                         'board sidebar';\n}\n\n    .title {\n        grid-area: title;\n    }\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .title {\n            padding-bottom: calc(var(--main-spacing) / 2);\n        }\n\n        #computer .title {\n            text-align: end;\n        }\n\n        .menu,\n        .tally {\n            gap: var(--sidebar-spacing);\n        }\n\n            .ship,\n            .board,\n            .row {\n                gap: var(--cell-gap);\n            }\n\n    footer {\n        justify-content: center;\n        gap: calc(var(--main-spacing) / 2);\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .tally .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    footer {\n        width: 100%;\n    }\n\n        button {\n            height: calc(var(--player-fr) * 2);\n            width: auto;\n        }\n\n            img {\n                height: 100%;\n                width: auto;\n            }\n\n/* COLORS , FONTS & SHAPING */\n\nbody,\n#alert {\n    background-color: #b1c6eb;\n}\n\n#alert,\n.title {\n    color: blue;\n    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\n}\n\n#alert span,\n#alert div {\n    z-index: 1;\n}\n\n#alert {\n    position: absolute;\n    top: calc(var(--main-height) / 2);\n    left: 50%;\n    transform: translate(-50%, -50%);\n    justify-content: center;\n    align-items: center;\n    padding: var(--main-spacing);\n    gap: var(--main-spacing);\n}\n\n.screen {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 100vh;\n    width: 100vw;\n    background-color: #b1c6eb;\n    opacity: 75%;\n}\n\n.title {\n    font-size: 5vw;\n    line-height: 5.5vw;\n}\n\n#alert span {\n    font-size: 2vw;\n    line-height: 2.5vw;\n}\n\n.ship div,\n.cell,\n#alert {\n    border-radius: 10%;\n}\n\n.cell,\n.cell.attack:not(.cell.hit),\n.cell.attack:not(.cell.miss),\n#alert {\n    border: blue 1px solid;\n}\n\n.cell.attack:not(.cell.hit),\n.cell.attack:not(.cell.miss) {\n    opacity: 25%;\n}\n\n.menu .ship div,\n.cell.placed,\n.ship.selected div,\n.ship.placed div,\n.hover.is-valid,\n.tally .ship div {\n    background-color: blue;\n}\n\n.ship.selected div,\n.ship.placed div,\n.hover.is-valid,\n.tally .ship div {\n    opacity: 50%;\n}\n\n.miss {\n    background-color: rgba(0, 0, 131);\n    opacity: 15%;\n    border-color: rgba(0, 0, 131);\n}\n\n.hover.is-invalid,\n.sunk div,\n.hit {\n    background-color: red !important;\n    opacity: 50%;\n    border-color: red;\n}\n\n.hover.is-valid,\n.sunk div {\n    opacity: 50%;\n}\n\n.hit {\n    opacity: 75%;\n}\n\nbutton {\n    background-color: transparent;\n    border: none;\n}\n\n    button#restart-game {\n        transform: scaleX(-1);\n    }\n\n    button:hover img {\n        transform: scale(1.05);\n    }\n\n    button:active img {\n        transform: scale(0.95);\n    }\n"],"sourceRoot":""}]);
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

    isPlaced() {
        this.placed = true;
    }
    logHit() {
        this.hits += 1;
        this.isSunk();
    }
    isSunk() {
        if (this.hits === this.length) {
            this.sunk = true;
        }
    }
}
class Gameboard {
    constructor() {
        this.grid = [[[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []],
                     [[], [], [], [], [], [], [], [], [], []]];
        this.ships = [];
        this.replacing = undefined;
        this.shipsSunk = 0;
    }

    getShip(targetCoord) {
        for (let i = 0; i < this.ships.length; i++) {
            for (let j = 0; j < this.ships[i].coords.length; j++) {
                if (this.ships[i].coords[j] === targetCoord) {
                    return this.ships[i];
                }
            }
        }
    }
    removeShip(shipName) {
        for (let i = 0; i < this.ships.length; i++) {
            if (this.ships[i].name === shipName) {
                if (this.ships.length === 7) {
                    this.replacing = this.ships[i];
                }
                this.ships.splice(i, 1);
            }
        }
    }

    resetBoard() {
        this.clearShips();
        this.clearBoard();
        this.replacing = undefined;
        this.shipsSunk = 0;
    }
    clearShips() {
        while (this.ships.length > 0) {
            this.ships.pop();
        }
    }
    clearBoard() {
        for (let i = 0; i < this.grid.length; i++) {
            for (let j = 0; j < this.grid[i].length; j++) {
                this.grid[i][j] = [];
            }
        }
    }

    placeShip(startCoord, dir, shipLen, shipName) {
        shipLen = parseInt(shipLen);
        let coordSet = this.getCoords(startCoord, dir, shipLen); // used by computer AI to generate ship placement
        if (this.setIsValid(coordSet)) {    // used by computer AI to varifyplacement validity
            this.ships.push(makeShip(shipLen, dir, shipName, coordSet));
            if (this.ships.length === 7) {
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('makePlayLive', ''); // subscribed by ui.js, game.js
            }
            return true;    // used by computer AI to control placement loop
        }
        return false;   // ""
    }
    replaceShipToOriginal() {
        this.ships.push(this.replacing);
        this.replacing = undefined;
    }
    getCoords(startCoord, dir, shipLen) {
        let coordSet = [startCoord];
        let i = 0;
        switch (dir) {
            case 'u': {
                let yPosition = parseInt(startCoord.split('')[1]);
                while (i < shipLen - 1) {
                    yPosition -= 1;
                    yPosition.toString();
                    let newCoord = startCoord.split('')[0] + yPosition;
                    coordSet.splice(0, 0, newCoord);
                    i++;
                }
                break;
            }
            case 'd': {
                let yPosition = parseInt(startCoord.split('')[1]);
                while (i < shipLen - 1) {
                    yPosition += 1;
                    yPosition.toString();
                    let newCoord = startCoord.split('')[0] + yPosition;
                    coordSet.push(newCoord);
                    i++;
                }
                break;
            }
            case 'l': {
                let xPosition = parseInt(startCoord.split('')[0]);
                while (i < shipLen - 1) {
                    xPosition -= 1;
                    xPosition.toString();
                    let newCoord = xPosition + startCoord.split('')[1];
                    coordSet.splice(0, 0, newCoord);
                    i++;
                }
                break;
            }
            case 'r': {
                let xPosition = parseInt(startCoord.split('')[0]);
                while (i < shipLen - 1) {
                    xPosition += 1;
                    xPosition.toString();
                    let newCoord = xPosition + startCoord.split('')[1];
                    coordSet.push(newCoord);
                    i++;
                }
            }
        }
        return coordSet;
    }
    setIsValid(coordSet) {
        for (let i = 0; i < coordSet.length; i++) {
            if (coordSet[i].length > 2) {
                return false;
            }
            let newX = parseInt(coordSet[i].split('')[0]);
            let newY = parseInt(coordSet[i].split('')[1]);
            for (let j = 0; j < this.ships.length; j++) {
                let ship = this.ships[j];
                let xMin = parseInt(ship.coords[0].split('')[0]) - 1;
                let xMax = parseInt(ship.coords[ship.coords.length - 1].split('')[0]) + 1
                let yMin = parseInt(ship.coords[0].split('')[1]) - 1;
                let yMax = parseInt(ship.coords[ship.coords.length - 1].split('')[1]) + 1
                if (newX >= xMin && newX <= xMax && newY >= yMin && newY <= yMax) {
                    return false
                }
            }
        }
        return true;
    }

    receiveAttack(player, coord) {
        let outcome = this.isHit(coord);
        let hit = outcome[0];
        let ship = outcome[1];
        if (hit) {
            this.markBoard(coord, 'x');
            ship.logHit();
            if (ship.sunk) {
                this.shipsSunk += 1;
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('displaySunk', player, ship.length, ship.name); // subscribed by ui.js
            }
        } else if (!hit) {
            this.markBoard(coord, 'o');
        }
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('displayHit', player, coord, hit); // subscribed by ui.js
    }
    isHit(attackCoord) {
        for (let i = 0; i < this.ships.length; i++) {
            let ship = this.ships[i];
            for (let j = 0; j < ship.coords.length; j++) {
                let shipCoord = ship.coords[j];
                if (attackCoord === shipCoord) {
                    return [true, ship];
                }
            }
        }
        return [false, undefined];
    }
    markBoard(coord, mark) {
        let x = parseInt(coord.split('')[0]);
        let y = parseInt(coord.split('')[1]);
        this.grid[y][x] = mark;
    }

    isLoser() {
        if (this.shipsSunk === this.ships.length) {
            return true;
        }
    }
}
class Human {
    constructor() {
        this.type = 'human';
        this.board = makeGameboard();
    }

    sendAttack(player, coord, board) {
        board.receiveAttack(player, coord);
    }
}
class Computer extends Human {
    constructor() {
        super(Human);
        this.type = 'computer';
        this.attacksMade = [];
    }

    randomizeShips() {
        let availShips = [[1, 'sub1'],
                          [1, 'sub2'],
                          [2, 'dest1'],
                          [2, 'dest2'],
                          [3, 'crus'],
                          [4, 'bs'],
                          [5, 'acc'],
                        ];
        let dirs = ['u', 'd', 'l', 'r'];
        
        while (availShips.length > 0) {
            let shipLen = availShips[0][0];
            let shipName = availShips[0][1];
            availShips.splice(0, 1);

            let dir = dirs[Math.floor(Math.random() * dirs.length)];

            let valid = false;
            while (valid === false) {
                let coord = '';
                let i = 0;
                while (i < 2) {
                    let index = Math.floor(Math.random() * 10).toString();
                    coord += index;
                    i++;
                }
                valid = this.board.placeShip(coord, dir, shipLen, shipName);
            }
        }
    }
    randomizeAttack(board) {
        let valid = false;
        while (valid === false) {
            let coord = '';
            let i = 0;
            while (i < 2) {
                let index = Math.floor(Math.random() * 10).toString();
                coord += index;
                i++;
            }
            if (!this.attacksMade.includes(coord)) {
                valid = true;
                this.attacksMade.push(coord);
                this.sendAttack('human', coord, board)
            }
        }
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

// export { makeShip as default, makeGameboard, makePlayer };   // testing export
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
    }
    function replaceToOriginal() {
        let ship = human.board.replacing;
        human.board.replaceShipToOriginal();
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('receiveShipData', ship.name, ship.length, ship.coords); // subscribed by ui.js
    }

    // play methods
    function generateComputerShips() {
        computer.randomizeShips();
    }
    function takeTurn(targetCoord) {
        human.sendAttack('computer', targetCoord, computer.board);
        if (human.board.isLoser()) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('winner', 'computer'); // subscribed by ui.js
        }
        computer.randomizeAttack(human.board);
        if (computer.board.isLoser()) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('winner', 'human'); // subscribed by ui.js
        }
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
        coordData: undefined,
        direction: 'r'
    }

    // event listeners
    body.addEventListener('click', (e) => {
        if (state.playing === false) {
            if (e.target.id === 'play-game' || e.target.id === 'play') {
                play();
            } else if (e.target.id === 'restart-game' || e.target.id === 'restart') {
                restart();
                removeAlertBox();
            } else if (e.target.parentElement.parentElement.classList.contains('menu') && !e.target.parentElement.classList.contains('placed')) {
                setMenuSelect(e.target.parentElement);
            } else if (e.target.classList.contains('cell')) {
                if (state.placing && state.coordData[1]) {
                    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('placeShip', state.targetCell.id, state.direction, state.selectedShip.id.split('-')[0], state.selectedShip.id.split('-')[1]); // subscribed by game.js
                    placeShipUI();
                } else if (!state.placing && e.target.classList.contains('placed')) {
                    state.placing = true;
                    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryShipData', state.targetCell.id); // subscribed by game.js
                    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('deleteShipObject', state.selectedShip.id.split('-')[1]); // subscribed by game.js
                }
            }
        } else if (state.playing === true) {
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
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('takeTurn', e.target.id); // subscribed by game.js
            }
        }
    });
    body.addEventListener('keydown', (e) => {
        let validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
        if (state.playing === false) {
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
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryCoordData', state.targetCell.id, state.direction, state.selectedShip.id.split('-')[0]); // subscribed by game.js
            } else if (e.key === 'Escape') {
                setMenuSelect(state.selectedShip);
                removeCellHover();
            }
        }
    })
    playerBoards[0].addEventListener('mouseover', (e) => {
        state.targetCell = e.target;
        if (state.placing && !state.playing && e.target.classList.contains('cell')) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryCoordData', state.targetCell.id, state.direction, state.selectedShip.id.split('-')[0]); // subscribed by game.js
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
            generateGrid(playerBoards[i]);
            i++;
        }
        // set state
        setSectionType(shipContainers[0], 'menu');
        // generate ship menu
        generateShipMenu();
    }
    function play() {
        // replace selected ship to original coords
        if (state.placing === true) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('replaceToOriginal', ''); // subscribed by game.js
            placeShipUI();
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
    function generateGrid(board) {
        let i = 0;
        while (i < 10) {
            let row = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.row')
            let j = 0;
            while (j < 10) {
                let cell = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '.cell', `#${j}${i}`);
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
            addSelectInMenu(state.selectedShip);
        } else {
            if (targetShip === state.selectedShip) {
                removeMenuSelect(state.selectedShip);
                state.placing = false;
                state.selectedShip = undefined;
            } else if (targetShip !== state.selectedShip) {
                removeMenuSelect(state.selectedShip);
                state.selectedShip = targetShip;
                addSelectInMenu(state.selectedShip);
            }   
        }
        if (state.direction !== 'r') {
            state.direction = 'r';
        }
    }
    function addSelectInMenu(ship) {
        ship.classList.add('selected');
    }
    function removeMenuSelect(ship) {
        ship.classList.remove('selected');
    }
    function setBoardHover(coordSet, isValid) {
            removeCellHover();
            state.coordData = [coordSet, isValid];
            addCellHover(state.coordData[1]);
    }
    function addCellHover(isValid) {
        for (let i = 0; i < state.coordData[0].length; i++) {
            if (state.coordData[0][i].length <= 2) {
                let cell = document.getElementById(state.coordData[0][i]);
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
                    let cell = document.getElementById(state.coordData[0][i]);
                    if (cell.classList.contains('placed')) {
                        cell.classList = 'cell placed';
                    } else {
                        cell.classList = 'cell';
                    }
                }
            }
        }
    }
    function placeShipUI() {
        state.selectedShip.classList = 'ship placed';
        for (let i = 0; i < state.coordData[0].length; i++) {
            let cell = document.getElementById(state.coordData[0][i]);
            cell.classList = 'cell';
            cell.classList.add('placed');
        }
        state.placing = false;
        state.selectedShip = undefined;
        state.coordData = undefined;
    }
    function replaceShipUI(name, dir, length, coords) {
        for (let i = 0; i < coords.length; i++) {
            let cell = document.getElementById(coords[i]);
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
            if (hit) {
                state.targetCell.classList.add('hit');
            } else if (!hit) {
                state.targetCell.classList.add('miss');
            }
        } else if (player === 'human') {
            let target = document.getElementById(coord);
            if (hit) {
                target.classList.add('hit');
            } else if (!hit) {
                target.classList.add('miss');
            }
        }
    }
    function displaySunk(player, length, name) {
        if (player === 'human') {
            player = 'h';
        } else if (player === 'computer') {
            player = 'c';
        }
        let ship = document.getElementById(`${player}-${name}`);
        ship.classList.add('sunk');
    }
    function generateAlertBox() {
        let options = ['cancel', 'confirm'];
        let alertContainer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '#alert');
        let text = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].span('Restart game?');
        alertContainer.appendChild(text);
        let buttonContainer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('');
        for (let i = 0; i < options.length; i++) {
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
        console.log('enter removeAlertBox()');
        let screen = document.querySelector('.screen');
        let alertBox = document.getElementById('alert');
        if (alertBox !== null && screen !== null) {
            screen.parentElement.removeChild(screen);
            alertBox.parentElement.removeChild(alertBox);
        }
    }

    // end game
    function endGame(player) {
        state.playing = false;
        generateGameResult(player);
    }
    function generateGameResult(player) {
        let alertContainer = _create_js__WEBPACK_IMPORTED_MODULE_1__["default"].div('', '#alert');
        let text;
        if (player === 'human') {
            text = 'You win! =D';
        } else {
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
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('receiveShipData', replaceShipUI); // published by game.js (queryShipData, replaceToOriginal)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('makePlayLive', makePlayLive); // published by classes.js (gameboard.placeShip)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('displayHit', displayHit); // published by classes.js (gameboard.receiveAttack)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('displaySunk', displaySunk); // published by classes.js (gameboard.receiveAttack)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('winner', endGame); // published by game.js (takeTurn)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDQztBQUNlO0FBQ1A7QUFDSjs7QUFFakMsNkRBQVM7QUFDVCwyREFBTyIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzP2YwZDgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzPzRjZmIiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2Fzc2V0cy8gc3luYyBub25yZWN1cnNpdmUgXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC8iLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2NsYXNzZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2NyZWF0ZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvZ2FtZS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvaWNvbnMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL3VpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHTE9CQUwgVkFSSUFCTEVTICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZTogMTBwdDtcXG4gICAgLS1tYWluLXNwYWNpbmc6IDJ2dztcXG4gICAgLS1wbGF5ZXItYXJlYTogY2FsYyhjYWxjKDEwMHZ3IC0gY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpICogNCkpIC8gMik7XFxuICAgIC0tcGxheWVyLWZyOiBjYWxjKHZhcigtLXBsYXllci1hcmVhKSAvIDE2KTsgLyogMTUgZm9yIDEwKzUgY2VsbHMgKysgMSB0byAvMTMgZm9yIGNlbGwgZ2FwcyAqL1xcbiAgICAtLWNlbGwtZ2FwOiBjYWxjKHZhcigtLXBsYXllci1mcikgLyAxMyk7XFxuXFxuICAgIC0tc2lkZWJhci1zcGFjaW5nOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgLS1zaWRlYmFyLWFyZWE6IGNhbGModmFyKC0tc2lkZWJhci1zcGFjaW5nKSArIGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDUpICsgY2FsYyh2YXIoLS1jZWxsLWdhcCkgKiA0KSk7XFxuICAgIC0tc2hpcC1jZWxsOiB2YXIoLS1wbGF5ZXItZnIpO1xcblxcbiAgICAtLWJvYXJkLWFyZWE6IGNhbGMoY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMTApICsgY2FsYyh2YXIoLS1jZWxsLWdhcCkgKiA5KSk7XFxuICAgIC0tYm9hcmQtY2VsbDogdmFyKC0tcGxheWVyLWZyKTtcXG5cXG4gICAgLS1tYWluLWhlaWdodDogY2FsYyg1LjV2dyArIDF2dyArIHZhcigtLWJvYXJkLWFyZWEpICsgY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpICogMikgKyBjYWxjKHZhcigtLXBsYXllci1mcikgKiAyKSk7XFxufVxcblxcbi8qIERJU1BMQVkgRkxFWCAqL1xcblxcbmJvZHksXFxubWFpbixcXG4ubWVudSxcXG4udGFsbHksXFxuLnNoaXAsXFxuLmJvYXJkLFxcbi5yb3csXFxuI2FsZXJ0LFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHksXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5ib2FyZCxcXG4jYWxlcnQge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLyogRElTUExBWSBHUklEICovXFxuXFxuI2h1bWFuLFxcbiNjb21wdXRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4jaHVtYW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGViYXItYXJlYSkgdmFyKC0tYm9hcmQtYXJlYSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJy4gICAgICAgdGl0bGUnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICdzaWRlYmFyIGJvYXJkJztcXG59XFxuXFxuI2NvbXB1dGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1ib2FyZC1hcmVhKSB2YXIoLS1zaWRlYmFyLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSAuJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYm9hcmQgc2lkZWJhcic7XFxufVxcblxcbiAgICAudGl0bGUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgfVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLnRhbGx5IHtcXG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgfVxcblxcbi8qIFBPU0lUSU9OSU5HICovXFxuXFxuYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBnYXA6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgICAgIC50aXRsZSB7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAvIDIpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50aXRsZSB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAudGFsbHkge1xcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuc2hpcCxcXG4gICAgICAgICAgICAuYm9hcmQsXFxuICAgICAgICAgICAgLnJvdyB7XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tY2VsbC1nYXApO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC50YWxseSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGwge1xcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYm9hcmQtY2VsbCk7XFxuICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXBsYXllci1mcikgKiAyKTtcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgIH1cXG5cXG4vKiBDT0xPUlMgLCBGT05UUyAmIFNIQVBJTkcgKi9cXG5cXG5ib2R5LFxcbiNhbGVydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWM2ZWI7XFxufVxcblxcbiNhbGVydCxcXG4udGl0bGUge1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2FsZXJ0IHNwYW4sXFxuI2FsZXJ0IGRpdiB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNhbGVydCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKHZhcigtLW1haW4taGVpZ2h0KSAvIDIpO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbn1cXG5cXG4uc2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzZlYjtcXG4gICAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDV2dztcXG4gICAgbGluZS1oZWlnaHQ6IDUuNXZ3O1xcbn1cXG5cXG4jYWxlcnQgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBsaW5lLWhlaWdodDogMi41dnc7XFxufVxcblxcbi5zaGlwIGRpdixcXG4uY2VsbCxcXG4jYWxlcnQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbi5jZWxsLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwuaGl0KSxcXG4uY2VsbC5hdHRhY2s6bm90KC5jZWxsLm1pc3MpLFxcbiNhbGVydCB7XFxuICAgIGJvcmRlcjogYmx1ZSAxcHggc29saWQ7XFxufVxcblxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwuaGl0KSxcXG4uY2VsbC5hdHRhY2s6bm90KC5jZWxsLm1pc3MpIHtcXG4gICAgb3BhY2l0eTogMjUlO1xcbn1cXG5cXG4ubWVudSAuc2hpcCBkaXYsXFxuLmNlbGwucGxhY2VkLFxcbi5zaGlwLnNlbGVjdGVkIGRpdixcXG4uc2hpcC5wbGFjZWQgZGl2LFxcbi5ob3Zlci5pcy12YWxpZCxcXG4udGFsbHkgLnNoaXAgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNoaXAuc2VsZWN0ZWQgZGl2LFxcbi5zaGlwLnBsYWNlZCBkaXYsXFxuLmhvdmVyLmlzLXZhbGlkLFxcbi50YWxseSAuc2hpcCBkaXYge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAxMzEpO1xcbiAgICBvcGFjaXR5OiAxNSU7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAxMzEpO1xcbn1cXG5cXG4uaG92ZXIuaXMtaW52YWxpZCxcXG4uc3VuayBkaXYsXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaG92ZXIuaXMtdmFsaWQsXFxuLnN1bmsgZGl2IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4gICAgYnV0dG9uI3Jlc3RhcnQtZ2FtZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uOmhvdmVyIGltZyB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjphY3RpdmUgaW1nIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIH1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCOztBQUVyQjtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLDBDQUEwQyxFQUFFLGdEQUFnRDtJQUM1Rix1Q0FBdUM7O0lBRXZDLGdEQUFnRDtJQUNoRCxxR0FBcUc7SUFDckcsNkJBQTZCOztJQUU3QiwyRUFBMkU7SUFDM0UsOEJBQThCOztJQUU5QixpSEFBaUg7QUFDckg7O0FBRUEsaUJBQWlCOztBQUVqQjs7Ozs7Ozs7O0lBU0ksYUFBYTtBQUNqQjs7QUFFQTs7Ozs7SUFLSSxpQkFBaUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUVqQjs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELHdCQUF3QjtJQUN4Qjt3Q0FDb0M7QUFDeEM7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsd0JBQXdCO0lBQ3hCO3dDQUNvQztBQUN4Qzs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSixnQkFBZ0I7O0FBRWhCO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7SUFFSTtRQUNJLHdCQUF3QjtJQUM1Qjs7UUFFSTtZQUNJLDZDQUE2QztRQUNqRDs7UUFFQTtZQUNJLGVBQWU7UUFDbkI7O1FBRUE7O1lBRUksMkJBQTJCO1FBQy9COztZQUVJOzs7Z0JBR0ksb0JBQW9CO1lBQ3hCOztJQUVSO1FBQ0ksdUJBQXVCO1FBQ3ZCLGtDQUFrQztJQUN0Qzs7QUFFSixXQUFXOztBQUVYO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0lBRUk7UUFDSSw0QkFBNEI7SUFDaEM7O1FBRUk7O1lBRUkscUNBQXFDO1FBQ3pDOztRQUVBO1lBQ0ksb0NBQW9DO1FBQ3hDOztZQUVJO2dCQUNJLFlBQVk7Z0JBQ1osa0JBQWtCO1lBQ3RCOztnQkFFSTs7O29CQUdJLHdCQUF3QjtvQkFDeEIsdUJBQXVCO2dCQUMzQjs7UUFFUjtZQUNJLHlCQUF5QjtZQUN6Qix3QkFBd0I7UUFDNUI7O0lBRUo7UUFDSSxXQUFXO0lBQ2Y7O1FBRUk7WUFDSSxrQ0FBa0M7WUFDbEMsV0FBVztRQUNmOztZQUVJO2dCQUNJLFlBQVk7Z0JBQ1osV0FBVztZQUNmOztBQUVaLDZCQUE2Qjs7QUFFN0I7O0lBRUkseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxzSEFBc0g7QUFDMUg7O0FBRUE7O0lBRUksVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlDQUFpQztJQUNqQyxTQUFTO0lBQ1QsZ0NBQWdDO0lBQ2hDLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsNEJBQTRCO0lBQzVCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLGFBQWE7SUFDYixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTs7O0lBR0ksa0JBQWtCO0FBQ3RCOztBQUVBOzs7O0lBSUksc0JBQXNCO0FBQzFCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7Ozs7OztJQU1JLHNCQUFzQjtBQUMxQjs7QUFFQTs7OztJQUlJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxpQ0FBaUM7SUFDakMsWUFBWTtJQUNaLDZCQUE2QjtBQUNqQzs7QUFFQTs7O0lBR0ksZ0NBQWdDO0lBQ2hDLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtBQUNoQjs7SUFFSTtRQUNJLHFCQUFxQjtJQUN6Qjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQjs7SUFFQTtRQUNJLHNCQUFzQjtJQUMxQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgVkFSSUFCTEVTICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLWZvbnQtc2l6ZTogMTBwdDtcXG4gICAgLS1tYWluLXNwYWNpbmc6IDJ2dztcXG4gICAgLS1wbGF5ZXItYXJlYTogY2FsYyhjYWxjKDEwMHZ3IC0gY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpICogNCkpIC8gMik7XFxuICAgIC0tcGxheWVyLWZyOiBjYWxjKHZhcigtLXBsYXllci1hcmVhKSAvIDE2KTsgLyogMTUgZm9yIDEwKzUgY2VsbHMgKysgMSB0byAvMTMgZm9yIGNlbGwgZ2FwcyAqL1xcbiAgICAtLWNlbGwtZ2FwOiBjYWxjKHZhcigtLXBsYXllci1mcikgLyAxMyk7XFxuXFxuICAgIC0tc2lkZWJhci1zcGFjaW5nOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgLS1zaWRlYmFyLWFyZWE6IGNhbGModmFyKC0tc2lkZWJhci1zcGFjaW5nKSArIGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDUpICsgY2FsYyh2YXIoLS1jZWxsLWdhcCkgKiA0KSk7XFxuICAgIC0tc2hpcC1jZWxsOiB2YXIoLS1wbGF5ZXItZnIpO1xcblxcbiAgICAtLWJvYXJkLWFyZWE6IGNhbGMoY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMTApICsgY2FsYyh2YXIoLS1jZWxsLWdhcCkgKiA5KSk7XFxuICAgIC0tYm9hcmQtY2VsbDogdmFyKC0tcGxheWVyLWZyKTtcXG5cXG4gICAgLS1tYWluLWhlaWdodDogY2FsYyg1LjV2dyArIDF2dyArIHZhcigtLWJvYXJkLWFyZWEpICsgY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpICogMikgKyBjYWxjKHZhcigtLXBsYXllci1mcikgKiAyKSk7XFxufVxcblxcbi8qIERJU1BMQVkgRkxFWCAqL1xcblxcbmJvZHksXFxubWFpbixcXG4ubWVudSxcXG4udGFsbHksXFxuLnNoaXAsXFxuLmJvYXJkLFxcbi5yb3csXFxuI2FsZXJ0LFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHksXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5ib2FyZCxcXG4jYWxlcnQge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLyogRElTUExBWSBHUklEICovXFxuXFxuI2h1bWFuLFxcbiNjb21wdXRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4jaHVtYW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGViYXItYXJlYSkgdmFyKC0tYm9hcmQtYXJlYSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJy4gICAgICAgdGl0bGUnXFxuICAgICAgICAgICAgICAgICAgICAgICAgICdzaWRlYmFyIGJvYXJkJztcXG59XFxuXFxuI2NvbXB1dGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1ib2FyZC1hcmVhKSB2YXIoLS1zaWRlYmFyLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICd0aXRsZSAuJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAnYm9hcmQgc2lkZWJhcic7XFxufVxcblxcbiAgICAudGl0bGUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiB0aXRsZTtcXG4gICAgfVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLnRhbGx5IHtcXG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgfVxcblxcbi8qIFBPU0lUSU9OSU5HICovXFxuXFxuYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBnYXA6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgICAgIC50aXRsZSB7XFxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAvIDIpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50aXRsZSB7XFxuICAgICAgICAgICAgdGV4dC1hbGlnbjogZW5kO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAudGFsbHkge1xcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuc2hpcCxcXG4gICAgICAgICAgICAuYm9hcmQsXFxuICAgICAgICAgICAgLnJvdyB7XFxuICAgICAgICAgICAgICAgIGdhcDogdmFyKC0tY2VsbC1nYXApO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgICAgZ2FwOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC50YWxseSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGwge1xcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYm9hcmQtY2VsbCk7XFxuICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXBsYXllci1mcikgKiAyKTtcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgIH1cXG5cXG4vKiBDT0xPUlMgLCBGT05UUyAmIFNIQVBJTkcgKi9cXG5cXG5ib2R5LFxcbiNhbGVydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiMWM2ZWI7XFxufVxcblxcbiNhbGVydCxcXG4udGl0bGUge1xcbiAgICBjb2xvcjogYmx1ZTtcXG4gICAgZm9udC1mYW1pbHk6ICdMdWNpZGEgU2FucycsICdMdWNpZGEgU2FucyBSZWd1bGFyJywgJ0x1Y2lkYSBHcmFuZGUnLCAnTHVjaWRhIFNhbnMgVW5pY29kZScsIEdlbmV2YSwgVmVyZGFuYSwgc2Fucy1zZXJpZjtcXG59XFxuXFxuI2FsZXJ0IHNwYW4sXFxuI2FsZXJ0IGRpdiB7XFxuICAgIHotaW5kZXg6IDE7XFxufVxcblxcbiNhbGVydCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiBjYWxjKHZhcigtLW1haW4taGVpZ2h0KSAvIDIpO1xcbiAgICBsZWZ0OiA1MCU7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbn1cXG5cXG4uc2NyZWVuIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIHdpZHRoOiAxMDB2dztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzZlYjtcXG4gICAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDV2dztcXG4gICAgbGluZS1oZWlnaHQ6IDUuNXZ3O1xcbn1cXG5cXG4jYWxlcnQgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBsaW5lLWhlaWdodDogMi41dnc7XFxufVxcblxcbi5zaGlwIGRpdixcXG4uY2VsbCxcXG4jYWxlcnQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbi5jZWxsLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwuaGl0KSxcXG4uY2VsbC5hdHRhY2s6bm90KC5jZWxsLm1pc3MpLFxcbiNhbGVydCB7XFxuICAgIGJvcmRlcjogYmx1ZSAxcHggc29saWQ7XFxufVxcblxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwuaGl0KSxcXG4uY2VsbC5hdHRhY2s6bm90KC5jZWxsLm1pc3MpIHtcXG4gICAgb3BhY2l0eTogMjUlO1xcbn1cXG5cXG4ubWVudSAuc2hpcCBkaXYsXFxuLmNlbGwucGxhY2VkLFxcbi5zaGlwLnNlbGVjdGVkIGRpdixcXG4uc2hpcC5wbGFjZWQgZGl2LFxcbi5ob3Zlci5pcy12YWxpZCxcXG4udGFsbHkgLnNoaXAgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNoaXAuc2VsZWN0ZWQgZGl2LFxcbi5zaGlwLnBsYWNlZCBkaXYsXFxuLmhvdmVyLmlzLXZhbGlkLFxcbi50YWxseSAuc2hpcCBkaXYge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAxMzEpO1xcbiAgICBvcGFjaXR5OiAxNSU7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAxMzEpO1xcbn1cXG5cXG4uaG92ZXIuaXMtaW52YWxpZCxcXG4uc3VuayBkaXYsXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaG92ZXIuaXMtdmFsaWQsXFxuLnN1bmsgZGl2IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cXG4gICAgYnV0dG9uI3Jlc3RhcnQtZ2FtZSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uOmhvdmVyIGltZyB7XFxuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbjphY3RpdmUgaW1nIHtcXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgIH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplLCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyAqL1xcbi8qIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYCBjb250ZXh0cyAqL1xcbi8qIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaSAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQ0FBcUM7O0FBRXJDOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZLEVBQUUsV0FBVzs7SUFFekIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGFBQWE7O0lBRWIsd0JBQXdCO0FBQzVCOzs7QUFHQSx1Q0FBdUM7O0FBRXZDLCtDQUErQztBQUMvQyw0Q0FBNEM7QUFDNUMsbUNBQW1DOztBQUVuQztJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUEsOERBQThEOztBQUU5RDtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUEseURBQXlEOztBQUV6RDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBLG1EQUFtRDs7QUFFbkQsNENBQTRDOztBQUU1QztJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQSwwQ0FBMEM7QUFDMUMsc0VBQXNFOztBQUV0RTtJQUNJLG1CQUFtQixFQUFFLE1BQU07SUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzdDOztBQUVBLG9EQUFvRDs7QUFFcEQ7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBLDBDQUEwQzs7QUFFMUM7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQSwrQ0FBK0M7O0FBRS9DLGtEQUFrRDs7QUFFbEQ7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLG9DQUFvQzs7QUFFcEMsMENBQTBDO0FBQzFDLDJDQUEyQzs7QUFFM0M7OztJQUdJLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNyQjs7QUFFQSw4QkFBOEI7O0FBRTlCOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQSw4REFBOEQ7O0FBRTlEOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQSxrRUFBa0U7O0FBRWxFOzs7O0lBSUksMEJBQTBCO0FBQzlCOztBQUVBLDRDQUE0Qzs7QUFFNUM7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBLG1EQUFtRDs7QUFFbkQ7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7OztBQUdBLG1DQUFtQzs7QUFFbkMsaUNBQWlDOztBQUVqQztJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4O1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbi8qIFNFQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBjb3JyZWN0IGZvbnQgc2l6ZSwgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgKi9cXG4vKiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWAgY29udGV4dHMgKi9cXG4vKiBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBwYCBlbGVtZW50cyBhY3Jvc3MgYnJvd3NlcnMgKi9cXG5cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuXFxuLyogVEVYVC1MRVZFTCBTRU1BTlRJQ1MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBncmF5IGJnIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogMS4gcmVtb3ZlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSAqL1xcbi8qIDIuIGFkZCBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgU2FmYXJpICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIFNhZmFyaSAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcblxcbi8qIEVNQkVEREVEIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuXFxuLyogTUlTQyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2FuY2VsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jYW5jZWwuc3ZnXCIsXG5cdFwiLi9jb25maXJtLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jb25maXJtLnN2Z1wiLFxuXHRcIi4vcGxheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvcGxheS5zdmdcIixcblx0XCIuL3BsYXlfZ3JheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvcGxheV9ncmF5LnN2Z1wiLFxuXHRcIi4vcmVzdGFydC5zdmdcIjogXCIuL3NyYy9hc3NldHMvcmVzdGFydC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgXFxcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkL1wiOyIsIi8vICYgcHVic3ViIGV2ZW50cyBtYW5hZ2VyXG5cbmNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IF9ldmVudHMgPSB7fTtcblxuICAgIC8vIHN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTVUJTQ1JJQklORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICB9XG5cbiAgICAvLyB1bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnNwbGljZSgoX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaXNoIGV2ZW50IHdpdGggZGF0YVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5kYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQVUJMSVNISU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGZ1bmN0aW9uIHZpZXdFdmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgdW5zdWJzY3JpYmUsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHZpZXdFdmVudHMsXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuXG4vLyBDTEFTU0VTXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGggPSBudWxsLCBkaXIgPSBudWxsLCBuYW1lID0gbnVsbCwgY29vcmRzID0gbnVsbCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICB9XG5cbiAgICBpc1BsYWNlZCgpIHtcbiAgICAgICAgdGhpcy5wbGFjZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsb2dIaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gW1tbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1dO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMucmVwbGFjaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNoaXBzU3VuayA9IDA7XG4gICAgfVxuXG4gICAgZ2V0U2hpcCh0YXJnZXRDb29yZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaGlwc1tpXS5jb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc1tpXS5jb29yZHNbal0gPT09IHRhcmdldENvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVTaGlwKHNoaXBOYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNbaV0ubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNpbmcgPSB0aGlzLnNoaXBzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlc2V0Qm9hcmQoKSB7XG4gICAgICAgIHRoaXMuY2xlYXJTaGlwcygpO1xuICAgICAgICB0aGlzLmNsZWFyQm9hcmQoKTtcbiAgICAgICAgdGhpcy5yZXBsYWNpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc2hpcHNTdW5rID0gMDtcbiAgICB9XG4gICAgY2xlYXJTaGlwcygpIHtcbiAgICAgICAgd2hpbGUgKHRoaXMuc2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zaGlwcy5wb3AoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhckJvYXJkKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZ3JpZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLmdyaWRbaV0ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdyaWRbaV1bal0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHBsYWNlU2hpcChzdGFydENvb3JkLCBkaXIsIHNoaXBMZW4sIHNoaXBOYW1lKSB7XG4gICAgICAgIHNoaXBMZW4gPSBwYXJzZUludChzaGlwTGVuKTtcbiAgICAgICAgbGV0IGNvb3JkU2V0ID0gdGhpcy5nZXRDb29yZHMoc3RhcnRDb29yZCwgZGlyLCBzaGlwTGVuKTsgLy8gdXNlZCBieSBjb21wdXRlciBBSSB0byBnZW5lcmF0ZSBzaGlwIHBsYWNlbWVudFxuICAgICAgICBpZiAodGhpcy5zZXRJc1ZhbGlkKGNvb3JkU2V0KSkgeyAgICAvLyB1c2VkIGJ5IGNvbXB1dGVyIEFJIHRvIHZhcmlmeXBsYWNlbWVudCB2YWxpZGl0eVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG1ha2VTaGlwKHNoaXBMZW4sIGRpciwgc2hpcE5hbWUsIGNvb3JkU2V0KSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnbWFrZVBsYXlMaXZlJywgJycpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzLCBnYW1lLmpzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICAgLy8gdXNlZCBieSBjb21wdXRlciBBSSB0byBjb250cm9sIHBsYWNlbWVudCBsb29wXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIFwiXCJcbiAgICB9XG4gICAgcmVwbGFjZVNoaXBUb09yaWdpbmFsKCkge1xuICAgICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5yZXBsYWNpbmcpO1xuICAgICAgICB0aGlzLnJlcGxhY2luZyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpciwgc2hpcExlbikge1xuICAgICAgICBsZXQgY29vcmRTZXQgPSBbc3RhcnRDb29yZF07XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgc3dpdGNoIChkaXIpIHtcbiAgICAgICAgICAgIGNhc2UgJ3UnOiB7XG4gICAgICAgICAgICAgICAgbGV0IHlQb3NpdGlvbiA9IHBhcnNlSW50KHN0YXJ0Q29vcmQuc3BsaXQoJycpWzFdKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNoaXBMZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHlQb3NpdGlvbiAtPSAxO1xuICAgICAgICAgICAgICAgICAgICB5UG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Nvb3JkID0gc3RhcnRDb29yZC5zcGxpdCgnJylbMF0gKyB5UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkU2V0LnNwbGljZSgwLCAwLCBuZXdDb29yZCk7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdkJzoge1xuICAgICAgICAgICAgICAgIGxldCB5UG9zaXRpb24gPSBwYXJzZUludChzdGFydENvb3JkLnNwbGl0KCcnKVsxXSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBzaGlwTGVuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB5UG9zaXRpb24gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgeVBvc2l0aW9uLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdDb29yZCA9IHN0YXJ0Q29vcmQuc3BsaXQoJycpWzBdICsgeVBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICBjb29yZFNldC5wdXNoKG5ld0Nvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2wnOiB7XG4gICAgICAgICAgICAgICAgbGV0IHhQb3NpdGlvbiA9IHBhcnNlSW50KHN0YXJ0Q29vcmQuc3BsaXQoJycpWzBdKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNoaXBMZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHhQb3NpdGlvbiAtPSAxO1xuICAgICAgICAgICAgICAgICAgICB4UG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Nvb3JkID0geFBvc2l0aW9uICsgc3RhcnRDb29yZC5zcGxpdCgnJylbMV07XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkU2V0LnNwbGljZSgwLCAwLCBuZXdDb29yZCk7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYXNlICdyJzoge1xuICAgICAgICAgICAgICAgIGxldCB4UG9zaXRpb24gPSBwYXJzZUludChzdGFydENvb3JkLnNwbGl0KCcnKVswXSk7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCBzaGlwTGVuIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB4UG9zaXRpb24gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgeFBvc2l0aW9uLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdDb29yZCA9IHhQb3NpdGlvbiArIHN0YXJ0Q29vcmQuc3BsaXQoJycpWzFdO1xuICAgICAgICAgICAgICAgICAgICBjb29yZFNldC5wdXNoKG5ld0Nvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRTZXQ7XG4gICAgfVxuICAgIHNldElzVmFsaWQoY29vcmRTZXQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZFNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvb3JkU2V0W2ldLmxlbmd0aCA+IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3WCA9IHBhcnNlSW50KGNvb3JkU2V0W2ldLnNwbGl0KCcnKVswXSk7XG4gICAgICAgICAgICBsZXQgbmV3WSA9IHBhcnNlSW50KGNvb3JkU2V0W2ldLnNwbGl0KCcnKVsxXSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2hpcHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IHRoaXMuc2hpcHNbal07XG4gICAgICAgICAgICAgICAgbGV0IHhNaW4gPSBwYXJzZUludChzaGlwLmNvb3Jkc1swXS5zcGxpdCgnJylbMF0pIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeE1heCA9IHBhcnNlSW50KHNoaXAuY29vcmRzW3NoaXAuY29vcmRzLmxlbmd0aCAtIDFdLnNwbGl0KCcnKVswXSkgKyAxXG4gICAgICAgICAgICAgICAgbGV0IHlNaW4gPSBwYXJzZUludChzaGlwLmNvb3Jkc1swXS5zcGxpdCgnJylbMV0pIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeU1heCA9IHBhcnNlSW50KHNoaXAuY29vcmRzW3NoaXAuY29vcmRzLmxlbmd0aCAtIDFdLnNwbGl0KCcnKVsxXSkgKyAxXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0geE1pbiAmJiBuZXdYIDw9IHhNYXggJiYgbmV3WSA+PSB5TWluICYmIG5ld1kgPD0geU1heCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhwbGF5ZXIsIGNvb3JkKSB7XG4gICAgICAgIGxldCBvdXRjb21lID0gdGhpcy5pc0hpdChjb29yZCk7XG4gICAgICAgIGxldCBoaXQgPSBvdXRjb21lWzBdO1xuICAgICAgICBsZXQgc2hpcCA9IG91dGNvbWVbMV07XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHRoaXMubWFya0JvYXJkKGNvb3JkLCAneCcpO1xuICAgICAgICAgICAgc2hpcC5sb2dIaXQoKTtcbiAgICAgICAgICAgIGlmIChzaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzU3VuayArPSAxO1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdkaXNwbGF5U3VuaycsIHBsYXllciwgc2hpcC5sZW5ndGgsIHNoaXAubmFtZSk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGl0KSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtCb2FyZChjb29yZCwgJ28nKTtcbiAgICAgICAgfVxuICAgICAgICBldmVudHMucHVibGlzaCgnZGlzcGxheUhpdCcsIHBsYXllciwgY29vcmQsIGhpdCk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICB9XG4gICAgaXNIaXQoYXR0YWNrQ29vcmQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2hpcCA9IHRoaXMuc2hpcHNbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBDb29yZCA9IHNoaXAuY29vcmRzW2pdO1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tDb29yZCA9PT0gc2hpcENvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdHJ1ZSwgc2hpcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XG4gICAgfVxuICAgIG1hcmtCb2FyZChjb29yZCwgbWFyaykge1xuICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KCcnKVswXSk7XG4gICAgICAgIGxldCB5ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoJycpWzFdKTtcbiAgICAgICAgdGhpcy5ncmlkW3ldW3hdID0gbWFyaztcbiAgICB9XG5cbiAgICBpc0xvc2VyKCkge1xuICAgICAgICBpZiAodGhpcy5zaGlwc1N1bmsgPT09IHRoaXMuc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEh1bWFuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ2h1bWFuJztcbiAgICAgICAgdGhpcy5ib2FyZCA9IG1ha2VHYW1lYm9hcmQoKTtcbiAgICB9XG5cbiAgICBzZW5kQXR0YWNrKHBsYXllciwgY29vcmQsIGJvYXJkKSB7XG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2socGxheWVyLCBjb29yZCk7XG4gICAgfVxufVxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBIdW1hbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEh1bWFuKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NvbXB1dGVyJztcbiAgICAgICAgdGhpcy5hdHRhY2tzTWFkZSA9IFtdO1xuICAgIH1cblxuICAgIHJhbmRvbWl6ZVNoaXBzKCkge1xuICAgICAgICBsZXQgYXZhaWxTaGlwcyA9IFtbMSwgJ3N1YjEnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsICdzdWIyJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsyLCAnZGVzdDEnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbMywgJ2NydXMnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzQsICdicyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbNSwgJ2FjYyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgbGV0IGRpcnMgPSBbJ3UnLCAnZCcsICdsJywgJ3InXTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChhdmFpbFNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzaGlwTGVuID0gYXZhaWxTaGlwc1swXVswXTtcbiAgICAgICAgICAgIGxldCBzaGlwTmFtZSA9IGF2YWlsU2hpcHNbMF1bMV07XG4gICAgICAgICAgICBhdmFpbFNoaXBzLnNwbGljZSgwLCAxKTtcblxuICAgICAgICAgICAgbGV0IGRpciA9IGRpcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlycy5sZW5ndGgpXTtcblxuICAgICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAodmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkID0gJyc7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgMikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmQgKz0gaW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmJvYXJkLnBsYWNlU2hpcChjb29yZCwgZGlyLCBzaGlwTGVuLCBzaGlwTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmFuZG9taXplQXR0YWNrKGJvYXJkKSB7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgY29vcmQgPSAnJztcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgMikge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvb3JkICs9IGluZGV4O1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5hdHRhY2tzTWFkZS5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tzTWFkZS5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRBdHRhY2soJ2h1bWFuJywgY29vcmQsIGJvYXJkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBGQUNUT1JJRVNcbmZ1bmN0aW9uIG1ha2VTaGlwKGxlbmd0aCwgZGlyLCBuYW1lLCBjb29yZHMpIHtcbiAgICByZXR1cm4gbmV3IFNoaXAobGVuZ3RoLCBkaXIsIG5hbWUsIGNvb3Jkcyk7XG59XG5mdW5jdGlvbiBtYWtlR2FtZWJvYXJkKCkge1xuICAgIHJldHVybiBuZXcgR2FtZWJvYXJkKCk7XG59XG5mdW5jdGlvbiBtYWtlUGxheWVyKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2h1bWFuJykge1xuICAgICAgICByZXR1cm4gbmV3IEh1bWFuKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29tcHV0ZXIoKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydCB7IG1ha2VTaGlwIGFzIGRlZmF1bHQsIG1ha2VHYW1lYm9hcmQsIG1ha2VQbGF5ZXIgfTsgICAvLyB0ZXN0aW5nIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgbWFrZVBsYXllcjtcbiIsImNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgLy8gZGF0YVxuICAgIGxldCBfYXR0cmlidXRlcyA9IFtdO1xuICAgIGxldCBlbGVtZW50O1xuXG4gICAgLy8gYmFzaWMgaGVscGVyIGZhY3Rvcmllc1xuICAgIGNvbnN0IGRpdiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHNwYW4gPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uID0gZnVuY3Rpb24oY29udGVudCwgc3RhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgZWxlbWVudC5yb2xlID0gJ2J1dHRvbic7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gc3RhdGU7XG4gICAgICAgIGVsZW1lbnQuYXJpYVByZXNzZWQgPSAnZmFsc2UnO1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaW1nID0gZnVuY3Rpb24odXJsLCBhbHQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbGVtZW50LnNyYyA9IGAuLi8ke3VybH1gO1xuICAgICAgICBlbGVtZW50LnNyYyA9IHVybDtcbiAgICAgICAgZWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGF0dHJpYnV0ZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbaV1bMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBhdHRyaWJ1dGVzW2ldLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzW2ldLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXYsXG4gICAgICAgIHNwYW4sXG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgaW1nLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5pbXBvcnQgbWFrZVBsYXllciBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgICBsZXQgaHVtYW47XG4gICAgbGV0IGNvbXB1dGVyO1xuXG4gICAgLy8gZHJpdmVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBodW1hbiA9IG1ha2VQbGF5ZXIoJ2h1bWFuJyk7XG4gICAgICAgIGNvbXB1dGVyID0gbWFrZVBsYXllcignY29tcHV0ZXInKTtcbiAgICB9XG5cbiAgICAvLyBwbGFjZW1lbnQgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIHF1ZXJ5Q29vcmREYXRhKHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBjb29yZFNldCA9IGh1bWFuLmJvYXJkLmdldENvb3JkcyhzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCk7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gaHVtYW4uYm9hcmQuc2V0SXNWYWxpZChjb29yZFNldCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlQ29vcmREYXRhJywgY29vcmRTZXQsIGlzVmFsaWQpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCwgbmFtZSkge1xuICAgICAgICBodW1hbi5ib2FyZC5wbGFjZVNoaXAoc3RhcnRDb29yZCwgZGlyZWN0aW9uLCBsZW5ndGgsIG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBxdWVyeVNoaXBEYXRhKHRhcmdldElEKSB7XG4gICAgICAgIGxldCBzaGlwID0gaHVtYW4uYm9hcmQuZ2V0U2hpcCh0YXJnZXRJRCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlU2hpcERhdGEnLCBzaGlwLm5hbWUsIHNoaXAuZGlyLCBzaGlwLmxlbmd0aCwgc2hpcC5jb29yZHMpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNoaXBPYmplY3QodGFyZ2V0TmFtZSkge1xuICAgICAgICBodW1hbi5ib2FyZC5yZW1vdmVTaGlwKHRhcmdldE5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldEJvYXJkRGF0YSgpIHtcbiAgICAgICAgaHVtYW4uYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICBjb21wdXRlci5ib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VUb09yaWdpbmFsKCkge1xuICAgICAgICBsZXQgc2hpcCA9IGh1bWFuLmJvYXJkLnJlcGxhY2luZztcbiAgICAgICAgaHVtYW4uYm9hcmQucmVwbGFjZVNoaXBUb09yaWdpbmFsKCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlU2hpcERhdGEnLCBzaGlwLm5hbWUsIHNoaXAubGVuZ3RoLCBzaGlwLmNvb3Jkcyk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICB9XG5cbiAgICAvLyBwbGF5IG1ldGhvZHNcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKSB7XG4gICAgICAgIGNvbXB1dGVyLnJhbmRvbWl6ZVNoaXBzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKHRhcmdldENvb3JkKSB7XG4gICAgICAgIGh1bWFuLnNlbmRBdHRhY2soJ2NvbXB1dGVyJywgdGFyZ2V0Q29vcmQsIGNvbXB1dGVyLmJvYXJkKTtcbiAgICAgICAgaWYgKGh1bWFuLmJvYXJkLmlzTG9zZXIoKSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3dpbm5lcicsICdjb21wdXRlcicpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgIH1cbiAgICAgICAgY29tcHV0ZXIucmFuZG9taXplQXR0YWNrKGh1bWFuLmJvYXJkKTtcbiAgICAgICAgaWYgKGNvbXB1dGVyLmJvYXJkLmlzTG9zZXIoKSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3dpbm5lcicsICdodW1hbicpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncXVlcnlDb29yZERhdGEnLCBxdWVyeUNvb3JkRGF0YSk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAocGxheWVyQm9hcmRzWzBdLm9uTW91c2VPdmVyLCBib2R5Lm9uS2V5RG93bilcbiAgICBldmVudHMuc3Vic2NyaWJlKCdwbGFjZVNoaXAnLCBwbGFjZVNoaXApOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdxdWVyeVNoaXBEYXRhJywgcXVlcnlTaGlwRGF0YSk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2RlbGV0ZVNoaXBPYmplY3QnLCBkZWxldGVTaGlwT2JqZWN0KTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChib2R5Lm9uQ2xpY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVzZXRCb2FyZERhdGEnLCByZXNldEJvYXJkRGF0YSk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlcGxhY2VUb09yaWdpbmFsJywgcmVwbGFjZVRvT3JpZ2luYWwpOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdnZW5lcmF0ZUNvbXB1dGVyU2hpcHMnLCBnZW5lcmF0ZUNvbXB1dGVyU2hpcHMpOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCd0YWtlVHVybicsIHRha2VUdXJuKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChib2R5Lm9uQ2xpY2spXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0LCAvLyB1c2VkIGJ5IGluZGV4LmpzXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xuIiwiLy8gY2FjaGUgaW1hZ2VzXG5sZXQgaW1nUXVlcnkgPSByZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cycsIGZhbHNlLCAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaSk7XG5sZXQgaWNvbnNBcnJheSA9IGltcG9ydEljb25zKGltZ1F1ZXJ5KTtcbi8vIGNvbnNvbGUubG9nKCcqKioqKiBJQ09OUyBBUlJBWSAqKioqKicpO1xuLy8gY29uc29sZS5sb2coaWNvbnNBcnJheSk7XG5cbi8vIG1ldGhvZHNcbmZ1bmN0aW9uIGltcG9ydEljb25zKHIpIHtcbiAgICBsZXQgcXVlcnlLZXlzID0gci5rZXlzKCk7XG4gICAgbGV0IGljb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld0tleSA9IHF1ZXJ5S2V5c1tpXS5zcGxpdCgnLnN2ZycpWzBdLnNwbGl0KCcuLycpWzFdO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBgLi9hc3NldHMvJHtxdWVyeUtleXNbaV0uc3BsaXQoJy4vJylbMV19YDtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhgbmV3S2V5IC0tPiAke25ld0tleX1gKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhgbmV3VmFsdWUgLS0+ICR7bmV3VmFsdWV9YClcbiAgICAgICAgXG4gICAgICAgIGljb25zW25ld0tleV0gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGljb25zQXJyYXk7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL2NyZWF0ZS5qcyc7XG5cbmNvbnN0IHVpID0gKCgpID0+IHtcbiAgICBsZXQgcGxheWVyQm9hcmRzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbicpLmxhc3RFbGVtZW50Q2hpbGQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlcicpLmxhc3RFbGVtZW50Q2hpbGRdO1xuICAgIGxldCBzaGlwQ29udGFpbmVycyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4nKS5jaGlsZHJlblsxXSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyJykuY2hpbGRyZW5bMV1dO1xuICAgIGxldCBwbGF5QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BsYXktZ2FtZScpO1xuICAgIGxldCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG4gICAgbGV0IHN0YXRlID0ge1xuICAgICAgICBwbGFjaW5nOiBmYWxzZSxcbiAgICAgICAgcGxheWluZzogZmFsc2UsXG4gICAgICAgIHRhcmdldENlbGw6IHVuZGVmaW5lZCxcbiAgICAgICAgc2VsZWN0ZWRTaGlwOiB1bmRlZmluZWQsXG4gICAgICAgIGNvb3JkRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBkaXJlY3Rpb246ICdyJ1xuICAgIH1cblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUucGxheWluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3BsYXktZ2FtZScgfHwgZS50YXJnZXQuaWQgPT09ICdwbGF5Jykge1xuICAgICAgICAgICAgICAgIHBsYXkoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdyZXN0YXJ0LWdhbWUnIHx8IGUudGFyZ2V0LmlkID09PSAncmVzdGFydCcpIHtcbiAgICAgICAgICAgICAgICByZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudScpICYmICFlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkJykpIHtcbiAgICAgICAgICAgICAgICBzZXRNZW51U2VsZWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nICYmIHN0YXRlLmNvb3JkRGF0YVsxXSkge1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgncGxhY2VTaGlwJywgc3RhdGUudGFyZ2V0Q2VsbC5pZCwgc3RhdGUuZGlyZWN0aW9uLCBzdGF0ZS5zZWxlY3RlZFNoaXAuaWQuc3BsaXQoJy0nKVswXSwgc3RhdGUuc2VsZWN0ZWRTaGlwLmlkLnNwbGl0KCctJylbMV0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwVUkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzdGF0ZS5wbGFjaW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxhY2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdxdWVyeVNoaXBEYXRhJywgc3RhdGUudGFyZ2V0Q2VsbC5pZCk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnZGVsZXRlU2hpcE9iamVjdCcsIHN0YXRlLnNlbGVjdGVkU2hpcC5pZC5zcGxpdCgnLScpWzFdKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnBsYXlpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3Jlc3RhcnQtZ2FtZScgfHwgZS50YXJnZXQuaWQgPT09ICdyZXN0YXJ0Jykge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdjb25maXJtLXJlc3RhcnQnIHx8IGUudGFyZ2V0LmlkID09PSAnY29uZmlybScpIHtcbiAgICAgICAgICAgICAgICByZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdjYW5jZWwtcmVzdGFydCcgfHwgZS50YXJnZXQuaWQgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgIT09IG51bGwgJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQgPT09ICdjb21wdXRlcicgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCd0YWtlVHVybicsIGUudGFyZ2V0LmlkKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCAoZSkgPT4ge1xuICAgICAgICBsZXQgdmFsaWRLZXlzID0gWydBcnJvd1VwJywgJ0Fycm93RG93bicsICdBcnJvd0xlZnQnLCAnQXJyb3dSaWdodCddO1xuICAgICAgICBpZiAoc3RhdGUucGxheWluZyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGlmICh2YWxpZEtleXMuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICd1J1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAnZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uID0gJ2wnO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uID0gJ3InO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgncXVlcnlDb29yZERhdGEnLCBzdGF0ZS50YXJnZXRDZWxsLmlkLCBzdGF0ZS5kaXJlY3Rpb24sIHN0YXRlLnNlbGVjdGVkU2hpcC5pZC5zcGxpdCgnLScpWzBdKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIHNldE1lbnVTZWxlY3Qoc3RhdGUuc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgICAgICByZW1vdmVDZWxsSG92ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcGxheWVyQm9hcmRzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIHN0YXRlLnRhcmdldENlbGwgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHN0YXRlLnBsYWNpbmcgJiYgIXN0YXRlLnBsYXlpbmcgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdxdWVyeUNvb3JkRGF0YScsIHN0YXRlLnRhcmdldENlbGwuaWQsIHN0YXRlLmRpcmVjdGlvbiwgc3RhdGUuc2VsZWN0ZWRTaGlwLmlkLnNwbGl0KCctJylbMF0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHBsYXllckJvYXJkc1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nICYmICFzdGF0ZS5wbGF5aW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICByZW1vdmVDZWxsSG92ZXIoKTtcbiAgICAgICAgfSAgIFxuICAgIH0pXG4gICAgcGxheWVyQm9hcmRzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5wbGF5aW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICBwbGF5ZXJCb2FyZHNbMV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUucGxheWluZyAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2F0dGFjaycpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkcml2ZXIgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGJvYXJkc1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgcGxheWVyQm9hcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZ2VuZXJhdGVHcmlkKHBsYXllckJvYXJkc1tpXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IHN0YXRlXG4gICAgICAgIHNldFNlY3Rpb25UeXBlKHNoaXBDb250YWluZXJzWzBdLCAnbWVudScpO1xuICAgICAgICAvLyBnZW5lcmF0ZSBzaGlwIG1lbnVcbiAgICAgICAgZ2VuZXJhdGVTaGlwTWVudSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAvLyByZXBsYWNlIHNlbGVjdGVkIHNoaXAgdG8gb3JpZ2luYWwgY29vcmRzXG4gICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nID09PSB0cnVlKSB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncmVwbGFjZVRvT3JpZ2luYWwnLCAnJyk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgcGxhY2VTaGlwVUkoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBnZW5lcmF0ZSBzaGlwIHRhbGxpZXNcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHNoaXBDb250YWluZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2xlYXJTaGlwQ29udGFpbmVyKHNoaXBDb250YWluZXJzW2ldKTtcbiAgICAgICAgICAgIHNldFNlY3Rpb25UeXBlKHNoaXBDb250YWluZXJzW2ldLCAndGFsbHknKTtcbiAgICAgICAgICAgIGdlbmVyYXRlU2hpcFRhbGxpZXMoc2hpcENvbnRhaW5lcnNbaV0sIGkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIC8vIGFzayBjb21wdXRlciBib2FyZCB0byBnZW5lcmF0ZSBwbGFjZW1lbnRzXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdnZW5lcmF0ZUNvbXB1dGVyU2hpcHMnLCAnJyk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAvLyBzZXQgc3RhdGUgdG8gcGxheVxuICAgICAgICBzdGF0ZS5wbGFjaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYXlpbmcgPSB0cnVlO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXN0YXJ0KCkge1xuICAgICAgICAvLyByZXNldCBib2FyZHNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwbGF5ZXJCb2FyZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgcGxheWVyQm9hcmRzW2ldLmNoaWxkcmVuLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgayA9IDA7IGsgPCBwbGF5ZXJCb2FyZHNbaV0uY2hpbGRyZW5bal0uY2hpbGRyZW4ubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllckJvYXJkc1tpXS5jaGlsZHJlbltqXS5jaGlsZHJlbltrXS5jbGFzc0xpc3QubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmRzW2ldLmNoaWxkcmVuW2pdLmNoaWxkcmVuW2tdLmNsYXNzTGlzdCA9ICdjZWxsJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgICAgICAvLyByZXNldCBtZW51c1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb250YWluZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjbGVhclNoaXBDb250YWluZXIoc2hpcENvbnRhaW5lcnNbaV0pO1xuICAgICAgICB9XG4gICAgICAgIG1ha2VTaGlwSWNvbnMoJycsIHNoaXBDb250YWluZXJzWzBdKTtcbiAgICAgICAgc2hpcENvbnRhaW5lcnNbMF0uY2xhc3NMaXN0ID0gJ21lbnUnO1xuICAgICAgICBzaGlwQ29udGFpbmVyc1sxXS5jbGFzc0xpc3QgPSAnJztcbiAgICAgICAgLy8gcmVzZXQgcGxheSBidXR0b25cbiAgICAgICAgcGxheUJ1dHRvbi5jaGlsZHJlblswXS5zcmMgPSAnLi9pY29ucy9wbGF5X2dyYXkuc3ZnJztcbiAgICAgICAgcGxheUJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHBsYXlCdXR0b24uYXJpYURpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gY2xlYXIgcGxheWVyIG9iamVjdHNcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Jlc2V0Qm9hcmREYXRhJywgJycpOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgLy8gY2xlYXIgc3RhdGVcbiAgICAgICAgc3RhdGUucGxhY2luZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnRhcmdldENlbGwgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkU2hpcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3RhdGUuY29vcmREYXRhID0gdW5kZWZpbmVkO1xuICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAncic7XG4gICAgfVxuXG4gICAgLy8gbXVsdGktdXNlIGhlbHBlciBtZXRob2RzXG4gICAgZnVuY3Rpb24gbWFrZVNoaXBJY29ucyhwbGF5ZXJUeXBlLCBjb250YWluZXIpIHtcbiAgICAgICAgbGV0IHNoaXBzID0gW1s1LCAnYWNjJ10sXG4gICAgICAgICAgICAgICAgICAgICBbNCwgJ2JzJ10sXG4gICAgICAgICAgICAgICAgICAgICBbMywgJ2NydXMnXSxcbiAgICAgICAgICAgICAgICAgICAgIFsyLCAnZGVzdDEnXSxcbiAgICAgICAgICAgICAgICAgICAgIFsyLCAnZGVzdDInXSxcbiAgICAgICAgICAgICAgICAgICAgIFsxLCAnc3ViMSddLFxuICAgICAgICAgICAgICAgICAgICAgWzEsICdzdWIyJ11cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbGxDb250YWluZXI7XG4gICAgICAgICAgICBpZiAocGxheWVyVHlwZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBjZWxsQ29udGFpbmVyID0gY3JlYXRlLmRpdignJywgJy5zaGlwJywgYCMke3NoaXBzW2ldWzBdfS0ke3NoaXBzW2ldWzFdfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsQ29udGFpbmVyID0gY3JlYXRlLmRpdignJywgJy5zaGlwJywgYCMke3BsYXllclR5cGV9LSR7c2hpcHNbaV1bMV19YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldWzBdOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGNyZWF0ZS5kaXYoJycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjZWxsQ29udGFpbmVyLmFwcGVuZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoY2VsbENvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBpbml0IGhlbHBlciBtZXRob2RzXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKGJvYXJkKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCAxMCkge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNyZWF0ZS5kaXYoJycsICcucm93JylcbiAgICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgMTApIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGNyZWF0ZS5kaXYoJycsICcuY2VsbCcsIGAjJHtqfSR7aX1gKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFNlY3Rpb25UeXBlKHNlY3Rpb24sIHNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChzZWxlY3Rvcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU2hpcE1lbnUoKSB7XG4gICAgICAgIG1ha2VTaGlwSWNvbnMoJycsIHNoaXBDb250YWluZXJzWzBdKTtcbiAgICB9XG5cbiAgICAvLyBwbGFjZW1lbnQgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIHNldE1lbnVTZWxlY3QodGFyZ2V0U2hpcCkge1xuICAgICAgICBpZiAoc3RhdGUuc2VsZWN0ZWRTaGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YXRlLnBsYWNpbmcgPSB0cnVlO1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdGFyZ2V0U2hpcDtcbiAgICAgICAgICAgIGFkZFNlbGVjdEluTWVudShzdGF0ZS5zZWxlY3RlZFNoaXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldFNoaXAgPT09IHN0YXRlLnNlbGVjdGVkU2hpcCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lbnVTZWxlY3Qoc3RhdGUuc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wbGFjaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTaGlwICE9PSBzdGF0ZS5zZWxlY3RlZFNoaXApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZW51U2VsZWN0KHN0YXRlLnNlbGVjdGVkU2hpcCk7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdGFyZ2V0U2hpcDtcbiAgICAgICAgICAgICAgICBhZGRTZWxlY3RJbk1lbnUoc3RhdGUuc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZGlyZWN0aW9uICE9PSAncicpIHtcbiAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdyJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRTZWxlY3RJbk1lbnUoc2hpcCkge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZU1lbnVTZWxlY3Qoc2hpcCkge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldEJvYXJkSG92ZXIoY29vcmRTZXQsIGlzVmFsaWQpIHtcbiAgICAgICAgICAgIHJlbW92ZUNlbGxIb3ZlcigpO1xuICAgICAgICAgICAgc3RhdGUuY29vcmREYXRhID0gW2Nvb3JkU2V0LCBpc1ZhbGlkXTtcbiAgICAgICAgICAgIGFkZENlbGxIb3ZlcihzdGF0ZS5jb29yZERhdGFbMV0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRDZWxsSG92ZXIoaXNWYWxpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvb3JkRGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmNvb3JkRGF0YVswXVtpXS5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RhdGUuY29vcmREYXRhWzBdW2ldKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpcy12YWxpZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWlzVmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUNlbGxIb3ZlcigpIHtcbiAgICAgICAgaWYgKHN0YXRlLmNvb3JkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvb3JkRGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5jb29yZERhdGFbMF1baV0ubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdGF0ZS5jb29yZERhdGFbMF1baV0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdCA9ICdjZWxsIHBsYWNlZCc7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdCA9ICdjZWxsJztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBwbGFjZVNoaXBVSSgpIHtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwLmNsYXNzTGlzdCA9ICdzaGlwIHBsYWNlZCc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGUuY29vcmREYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0YXRlLmNvb3JkRGF0YVswXVtpXSk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdCA9ICdjZWxsJztcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUucGxhY2luZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXRlLmNvb3JkRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZVNoaXBVSShuYW1lLCBkaXIsIGxlbmd0aCwgY29vcmRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3Jkc1tpXSk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdCA9ICdjZWxsIGhvdmVyIGlzLXZhbGlkJztcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtsZW5ndGh9LSR7bmFtZX1gKTtcbiAgICAgICAgc3RhdGUuY29vcmREYXRhID0gW2Nvb3JkcywgdHJ1ZV07XG4gICAgICAgIHN0YXRlLmRpciA9IGRpcjtcbiAgICB9XG5cbiAgICAvLyBwbGF5IGhlbHBlciBtZXRob2RzXG4gICAgZnVuY3Rpb24gbWFrZVBsYXlMaXZlKCkge1xuICAgICAgICBwbGF5QnV0dG9uLmNoaWxkcmVuWzBdLnNyYyA9ICcuL2ljb25zL3BsYXkuc3ZnJztcbiAgICAgICAgcGxheUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBwbGF5QnV0dG9uLmFyaWFEaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNoaXBUYWxsaWVzKHRhbGx5Q29udGFpbmVyLCBpbmRleCkge1xuICAgICAgICBsZXQgcGxheWVyVHlwZTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBwbGF5ZXJUeXBlID0gJ2gnO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIHBsYXllclR5cGUgPSAnYyc7XG4gICAgICAgIH1cbiAgICAgICAgbWFrZVNoaXBJY29ucyhwbGF5ZXJUeXBlLCB0YWxseUNvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyU2hpcENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRpc3BsYXlIaXQocGxheWVyLCBjb29yZCwgaGl0KSB7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaGl0KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmQpO1xuICAgICAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWhpdCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheVN1bmsocGxheWVyLCBsZW5ndGgsIG5hbWUpIHtcbiAgICAgICAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgcGxheWVyID0gJ2gnO1xuICAgICAgICB9IGVsc2UgaWYgKHBsYXllciA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICAgICAgcGxheWVyID0gJ2MnO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7cGxheWVyfS0ke25hbWV9YCk7XG4gICAgICAgIHNoaXAuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUFsZXJ0Qm94KCkge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IFsnY2FuY2VsJywgJ2NvbmZpcm0nXTtcbiAgICAgICAgbGV0IGFsZXJ0Q29udGFpbmVyID0gY3JlYXRlLmRpdignJywgJyNhbGVydCcpO1xuICAgICAgICBsZXQgdGV4dCA9IGNyZWF0ZS5zcGFuKCdSZXN0YXJ0IGdhbWU/Jyk7XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHQpO1xuICAgICAgICBsZXQgYnV0dG9uQ29udGFpbmVyID0gY3JlYXRlLmRpdignJyk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3B0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJ1dHRvbiA9IGNyZWF0ZS5idXR0b24oJycsIGAke29wdGlvbnNbaV19YCwgYCMke29wdGlvbnNbaV19LXJlc3RhcnRgKTtcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IGNyZWF0ZS5pbWcoYC4vaWNvbnMvJHtvcHRpb25zW2ldfS5zdmdgLCBgJHtvcHRpb25zW2ldfWAsIGAjJHtvcHRpb25zW2ldfWApO1xuICAgICAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICAgICAgICAgIGJ1dHRvbkNvbnRhaW5lci5hcHBlbmQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICBhbGVydENvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b25Db250YWluZXIpO1xuICAgICAgICBsZXQgc2NyZWVuID0gY3JlYXRlLmRpdignJywgJy5zY3JlZW4nKTtcbiAgICAgICAgYm9keS5hcHBlbmQoc2NyZWVuLCBhbGVydENvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsZXJ0Qm94KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZW50ZXIgcmVtb3ZlQWxlcnRCb3goKScpO1xuICAgICAgICBsZXQgc2NyZWVuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNjcmVlbicpO1xuICAgICAgICBsZXQgYWxlcnRCb3ggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWxlcnQnKTtcbiAgICAgICAgaWYgKGFsZXJ0Qm94ICE9PSBudWxsICYmIHNjcmVlbiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgc2NyZWVuLnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoc2NyZWVuKTtcbiAgICAgICAgICAgIGFsZXJ0Qm94LnBhcmVudEVsZW1lbnQucmVtb3ZlQ2hpbGQoYWxlcnRCb3gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZW5kIGdhbWVcbiAgICBmdW5jdGlvbiBlbmRHYW1lKHBsYXllcikge1xuICAgICAgICBzdGF0ZS5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgIGdlbmVyYXRlR2FtZVJlc3VsdChwbGF5ZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUdhbWVSZXN1bHQocGxheWVyKSB7XG4gICAgICAgIGxldCBhbGVydENvbnRhaW5lciA9IGNyZWF0ZS5kaXYoJycsICcjYWxlcnQnKTtcbiAgICAgICAgbGV0IHRleHQ7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIHRleHQgPSAnWW91IHdpbiEgPUQnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGV4dCA9IFwiQ29tcHV0ZXIgd2lucy4gPScoXCI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHRleHRTcGFuID0gY3JlYXRlLnNwYW4odGV4dCk7XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRTcGFuKTtcbiAgICAgICAgbGV0IHJlc3RhcnRCdXR0b24gPSBjcmVhdGUuYnV0dG9uKCcnLCBgcmVzdGFydGAsIGAjcmVzdGFydC1nYW1lYCk7XG4gICAgICAgIGxldCByZXN0YXJ0SW1hZ2UgPSBjcmVhdGUuaW1nKGAuL2ljb25zL3Jlc3RhcnQuc3ZnYCwgYHJlc3RhcnRgLCBgI3Jlc3RhcnRgKTtcbiAgICAgICAgcmVzdGFydEJ1dHRvbi5hcHBlbmRDaGlsZChyZXN0YXJ0SW1hZ2UpO1xuICAgICAgICBhbGVydENvbnRhaW5lci5hcHBlbmRDaGlsZChyZXN0YXJ0QnV0dG9uKTtcbiAgICAgICAgbGV0IHNjcmVlbiA9IGNyZWF0ZS5kaXYoJycsICcuc2NyZWVuJylcbiAgICAgICAgYm9keS5hcHBlbmQoc2NyZWVuLCBhbGVydENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlY2VpdmVDb29yZERhdGEnLCBzZXRCb2FyZEhvdmVyKTsgLy8gcHVibGlzaGVkIGJ5IGdhbWUuanMgKHF1ZXJ5Q29vcmREYXRhKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlY2VpdmVTaGlwRGF0YScsIHJlcGxhY2VTaGlwVUkpOyAvLyBwdWJsaXNoZWQgYnkgZ2FtZS5qcyAocXVlcnlTaGlwRGF0YSwgcmVwbGFjZVRvT3JpZ2luYWwpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnbWFrZVBsYXlMaXZlJywgbWFrZVBsYXlMaXZlKTsgLy8gcHVibGlzaGVkIGJ5IGNsYXNzZXMuanMgKGdhbWVib2FyZC5wbGFjZVNoaXApXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZGlzcGxheUhpdCcsIGRpc3BsYXlIaXQpOyAvLyBwdWJsaXNoZWQgYnkgY2xhc3Nlcy5qcyAoZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZGlzcGxheVN1bmsnLCBkaXNwbGF5U3Vuayk7IC8vIHB1Ymxpc2hlZCBieSBjbGFzc2VzLmpzIChnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCd3aW5uZXInLCBlbmRHYW1lKTsgLy8gcHVibGlzaGVkIGJ5IGdhbWUuanMgKHRha2VUdXJuKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgLy8gdXNlZCBieSBpbmRleC5qc1xuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdWk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCBpY29uc0FycmF5IGZyb20gJy4vc2NyaXB0cy9pY29ucy5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZS5qcyc7XG5pbXBvcnQgdWkgZnJvbSAnLi9zY3JpcHRzL3VpLmpzJztcblxuZ2FtZS5pbml0KCk7XG51aS5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=