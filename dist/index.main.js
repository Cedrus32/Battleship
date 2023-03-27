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
            if (this.ships.length === 7) {
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('makePlayLive', ''); // subscribed by ui.js
            }
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
        humanTurn(targetCoord);
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('toggleComputerBoard', ''); // subscribed by ui.js
        setTimeout(computerTurn, 500);
    }
    function humanTurn(targetCoord) {
        human.sendAttack('computer', targetCoord, computer.board);
        if (computer.board.isLoser()) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('winner', 'computer'); // subscribed by ui.js
            resetBoardData();
            return;
        }
    }
    function computerTurn() {
        computer.makeAttack(human.board);
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('toggleComputerBoard', ''); // subscribed by ui.js
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
        coordData: {coordSet: undefined,
                    isValid: false,
                   },
        direction: 'r',
        computerBoardEnabled: false,
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
                if (state.placing && state.coordData.isValid) {
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
            } else if (state.computerBoardEnabled === true && e.target.parentElement.parentElement.parentElement !== null && e.target.parentElement.parentElement.parentElement.id === 'computer' && e.target.classList.contains('cell') && !e.target.classList.contains('hit') && !e.target.classList.contains('miss')) {
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
        state.computerBoardEnabled = true;
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
        state.coordData = {coordSet: undefined,
                           isValid: false,
                          };
        state.direction = 'r';
        state.computerBoardEnabled = false;
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
    function setBoardHover(coords, validity) {
            removeCellHover();
            state.coordData.coordSet = coords;
            state.coordData.isValid = validity;
            addCellHover(state.coordData.isValid);
    }
    function addCellHover(isValid) {
        for (let i = 0; i < state.coordData.coordSet.length; i++) {
            if (state.coordData.coordSet[i].length <= 2) {
                let cell = document.getElementById(`h-${state.coordData.coordSet[i]}`);
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
        if (state.coordData.coordSet !== undefined) {
            for (let i = 0; i < state.coordData.coordSet.length; i++) {
                if (state.coordData.coordSet[i].length <= 2) {
                    let cell = document.getElementById(`h-${state.coordData.coordSet[i]}`);
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
        for (let i = 0; i < state.coordData.coordSet.length; i++) {
            let cell = document.getElementById(`h-${state.coordData.coordSet[i]}`);
            cell.classList = 'cell';
            cell.classList.add('placed');
        }
        state.placing = false;
        state.selectedShip = undefined;
        state.coordData = {coordSet: undefined,
                           isValid: false,
                          };
    }
    function removeShipPlaced(name, dir, length, coords) {
        for (let i = 0; i < coords.length; i++) {
            let cell = document.getElementById(`h-${coords[i]}`);
            cell.classList = 'cell hover is-valid';
        }
        state.selectedShip = document.getElementById(`${length}-${name}`);
        state.coordData.coordSet = coords;
        state.coordData.isValid = true;
        state.dir = dir;
    }

    // play helper methods
    function makePlayLive() {
        playButton.children[0].src = './icons/play.svg';
        playButton.disabled = false;
        playButton.ariaDisabled = false;
    }
    function toggleComputerBoard() {
        console.log(state.computerBoardEnabled);
        if (state.computerBoardEnabled === true) {
            state.computerBoardEnabled = false;
        } else if (state.computerBoardEnabled === false) {
            state.computerBoardEnabled = true;
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
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('makePlayLive', makePlayLive); // published by classes.js (gameboard.placeShip)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('displayAttack', displayHit); // published by classes.js (gameboard.receiveAttack)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('displaySunk', displaySunk); // published by classes.js (gameboard.receiveAttack)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('winner', endGame); // published by game.js (takeTurn)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('displayBuffer', displayBuffer); // published by classes.js (gameboard.receiveAttack)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('toggleComputerBoard', toggleComputerBoard); // published by game.js (computerTurn)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFVBQVUsRUFBRSxVQUFVO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRSxFQUFFLE1BQU07QUFDL0MscUNBQXFDLE1BQU0sRUFBRSxNQUFNO0FBQ25ELHFDQUFxQyxNQUFNLEVBQUUsTUFBTTtBQUNuRCxjQUFjO0FBQ2QscUNBQXFDLE1BQU0sRUFBRSxFQUFFO0FBQy9DLHFDQUFxQyxNQUFNLEVBQUUsTUFBTTtBQUNuRCxxQ0FBcUMsTUFBTSxFQUFFLE1BQU07QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsRUFBRSxFQUFFLE1BQU07QUFDL0MscUNBQXFDLE1BQU0sRUFBRSxNQUFNO0FBQ25ELHFDQUFxQyxNQUFNLEVBQUUsTUFBTTtBQUNuRCxjQUFjO0FBQ2QscUNBQXFDLE1BQU0sRUFBRSxFQUFFO0FBQy9DLHFDQUFxQyxNQUFNLEVBQUUsTUFBTTtBQUNuRCxxQ0FBcUMsTUFBTSxFQUFFLE1BQU07QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsTUFBTSxFQUFFLEVBQUU7QUFDbkQseUNBQXlDLE1BQU0sRUFBRSxFQUFFO0FBQ25EO0FBQ0E7QUFDQSx5Q0FBeUMsRUFBRSxFQUFFLE1BQU07QUFDbkQseUNBQXlDLEVBQUUsRUFBRSxNQUFNO0FBQ25EO0FBQ0E7QUFD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QUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNDO0FBQ2U7QUFDUDtBQUNKOztBQUVqQyw2REFBUztBQUNULDJEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3M/ZjBkOCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkLyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY3JlYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9pY29ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCBWQVJJQUJMRVMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9udC1zaXplOiAxMHB0O1xcbiAgICAtLW1haW4tc3BhY2luZzogMnZ3O1xcbiAgICAtLXBsYXllci1hcmVhOiBjYWxjKGNhbGMoMTAwdncgLSBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgKiA0KSkgLyAyKTtcXG4gICAgLS1wbGF5ZXItZnI6IGNhbGModmFyKC0tcGxheWVyLWFyZWEpIC8gMTYpOyAvKiAxNSBmb3IgMTArNSBjZWxscyArKyAxIHRvIC8xMyBmb3IgY2VsbCBnYXBzICovXFxuICAgIC0tY2VsbC1nYXA6IGNhbGModmFyKC0tcGxheWVyLWZyKSAvIDEzKTtcXG5cXG4gICAgLS1zaWRlYmFyLXNwYWNpbmc6IGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAvIDIpO1xcbiAgICAtLXNpZGViYXItYXJlYTogY2FsYyh2YXIoLS1zaWRlYmFyLXNwYWNpbmcpICsgY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogNSkgKyBjYWxjKHZhcigtLWNlbGwtZ2FwKSAqIDQpKTtcXG4gICAgLS1zaGlwLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tYm9hcmQtYXJlYTogY2FsYyhjYWxjKHZhcigtLXBsYXllci1mcikgKiAxMCkgKyBjYWxjKHZhcigtLWNlbGwtZ2FwKSAqIDkpKTtcXG4gICAgLS1ib2FyZC1jZWxsOiB2YXIoLS1wbGF5ZXItZnIpO1xcblxcbiAgICAtLW1haW4taGVpZ2h0OiBjYWxjKDUuNXZ3ICsgMXZ3ICsgdmFyKC0tYm9hcmQtYXJlYSkgKyBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgKiAyKSArIGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDIpKTtcXG59XFxuXFxuLyogRElTUExBWSBGTEVYICovXFxuXFxuYm9keSxcXG5tYWluLFxcbi5tZW51LFxcbi50YWxseSxcXG4uc2hpcCxcXG4uYm9hcmQsXFxuLnJvdyxcXG4jYWxlcnQsXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keSxcXG4ubWVudSxcXG4udGFsbHksXFxuLmJvYXJkLFxcbiNhbGVydCB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5cXG4vKiBESVNQTEFZIEdSSUQgKi9cXG5cXG4jaHVtYW4sXFxuI2NvbXB1dGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbiNodW1hbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZWJhci1hcmVhKSB2YXIoLS1ib2FyZC1hcmVhKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnLiAgICAgICB0aXRsZSdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpZGViYXIgYm9hcmQnO1xcbn1cXG5cXG4jY29tcHV0ZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLWJvYXJkLWFyZWEpIHZhcigtLXNpZGViYXItYXJlYSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RpdGxlIC4nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICdib2FyZCBzaWRlYmFyJztcXG59XFxuXFxuICAgIC50aXRsZSB7XFxuICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgfVxcblxcbiAgICAudGFsbHkge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZCB7XFxuICAgICAgICBncmlkLWFyZWE6IGJvYXJkO1xcbiAgICB9XFxuXFxuLyogUE9TSVRJT05JTkcgKi9cXG5cXG5ib2R5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjY29tcHV0ZXIgLnRpdGxlIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubWVudSxcXG4gICAgICAgIC50YWxseSB7XFxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwLFxcbiAgICAgICAgICAgIC5ib2FyZCxcXG4gICAgICAgICAgICAucm93IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1jZWxsLWdhcCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAvIDIpO1xcbiAgICB9XFxuXFxuICAgICNhbGVydCxcXG4gICAgLnNjcmVlbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG5cXG4gICAgI2FsZXJ0IHtcXG4gICAgICAgIHRvcDogY2FsYyh2YXIoLS1tYWluLWhlaWdodCkgLyAyKTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAuc2NyZWVuIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG4vKiBTSVpJTkcgKi9cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5tZW51LFxcbiAgICAgICAgI2h1bWFuIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb21wdXRlciAudGFsbHkge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuc2hpcCB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLm1lbnUgLnNoaXAgZGl2LFxcbiAgICAgICAgICAgICAgICAudGFsbHkgLnNoaXAgZGl2LFxcbiAgICAgICAgICAgICAgICAuY2VsbCAuc2hpcCBkaXYge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1zaGlwLWNlbGwpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5jZWxsIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1jZWxsKTtcXG4gICAgICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMik7XFxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24jcmVzdGFydC1nYW1lIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICBidXR0b246aG92ZXIgaW1nIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICBidXR0b246YWN0aXZlIGltZyB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAuc2NyZWVuIHtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4vKiBDT0xPUlMgLCBGT05UUyAmIFNIQVBJTkcgKi9cXG5cXG5ib2R5LFxcbiNhbGVydCxcXG4uc2NyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzZlYjtcXG59XFxuXFxuI2FsZXJ0LFxcbi50aXRsZSB7XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2NyZWVuIHtcXG4gICAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDV2dztcXG4gICAgbGluZS1oZWlnaHQ6IDUuNXZ3O1xcbn1cXG5cXG4jYWxlcnQgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBsaW5lLWhlaWdodDogMi41dnc7XFxufVxcblxcbi5zaGlwIGRpdixcXG4uY2VsbCxcXG4jYWxlcnQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbi5jZWxsLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwuaGl0KSxcXG4uY2VsbC5hdHRhY2s6bm90KC5jZWxsLm1pc3MpLFxcbiNhbGVydCB7XFxuICAgIGJvcmRlcjogYmx1ZSAxcHggc29saWQ7XFxufVxcblxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwuaGl0KSxcXG4uY2VsbC5hdHRhY2s6bm90KC5jZWxsLm1pc3MpIHtcXG4gICAgb3BhY2l0eTogMjUlO1xcbn1cXG5cXG4ubWVudSAuc2hpcCBkaXYsXFxuLmNlbGwucGxhY2VkLFxcbi5zaGlwLnNlbGVjdGVkIGRpdixcXG4uc2hpcC5wbGFjZWQgZGl2LFxcbi5ob3Zlci5pcy12YWxpZCxcXG4udGFsbHkgLnNoaXAgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNoaXAuc2VsZWN0ZWQgZGl2LFxcbi5zaGlwLnBsYWNlZCBkaXYsXFxuLmhvdmVyLmlzLXZhbGlkLFxcbi50YWxseSAuc2hpcCBkaXYge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAxMzEpO1xcbiAgICBvcGFjaXR5OiAxNSU7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAxMzEpO1xcbn1cXG5cXG4uaG92ZXIuaXMtaW52YWxpZCxcXG4uc3VuayBkaXYsXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaG92ZXIuaXMtdmFsaWQsXFxuLnN1bmsgZGl2IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCOztBQUVyQjtJQUNJLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLDBDQUEwQyxFQUFFLGdEQUFnRDtJQUM1Rix1Q0FBdUM7O0lBRXZDLGdEQUFnRDtJQUNoRCxxR0FBcUc7SUFDckcsNkJBQTZCOztJQUU3QiwyRUFBMkU7SUFDM0UsOEJBQThCOztJQUU5QixpSEFBaUg7QUFDckg7O0FBRUEsaUJBQWlCOztBQUVqQjs7Ozs7Ozs7O0lBU0ksYUFBYTtBQUNqQjs7QUFFQTs7Ozs7SUFLSSxpQkFBaUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUVqQjs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELHdCQUF3QjtJQUN4Qjt3Q0FDb0M7QUFDeEM7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsd0JBQXdCO0lBQ3hCO3dDQUNvQztBQUN4Qzs7SUFFSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGdCQUFnQjtJQUNwQjs7QUFFSixnQkFBZ0I7O0FBRWhCO0lBQ0ksdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7SUFFSTtRQUNJLHdCQUF3QjtJQUM1Qjs7UUFFSTtZQUNJLDZDQUE2QztRQUNqRDs7UUFFQTtZQUNJLGVBQWU7UUFDbkI7O1FBRUE7O1lBRUksMkJBQTJCO1FBQy9COztZQUVJOzs7Z0JBR0ksb0JBQW9CO1lBQ3hCOztJQUVSO1FBQ0ksdUJBQXVCO1FBQ3ZCLGtDQUFrQztJQUN0Qzs7SUFFQTs7UUFFSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxpQ0FBaUM7UUFDakMsU0FBUztRQUNULGdDQUFnQztRQUNoQyx1QkFBdUI7UUFDdkIsbUJBQW1CO1FBQ25CLDRCQUE0QjtRQUM1Qix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSxNQUFNO1FBQ04sT0FBTztJQUNYOztBQUVKLFdBQVc7O0FBRVg7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7SUFFSTtRQUNJLDRCQUE0QjtJQUNoQzs7UUFFSTs7WUFFSSxxQ0FBcUM7UUFDekM7O1FBRUE7WUFDSSxvQ0FBb0M7UUFDeEM7O1lBRUk7Z0JBQ0ksWUFBWTtnQkFDWixrQkFBa0I7WUFDdEI7O2dCQUVJOzs7b0JBR0ksd0JBQXdCO29CQUN4Qix1QkFBdUI7Z0JBQzNCOztRQUVSO1lBQ0kseUJBQXlCO1lBQ3pCLHdCQUF3QjtRQUM1Qjs7SUFFSjtRQUNJLFdBQVc7SUFDZjs7UUFFSTtZQUNJLGtDQUFrQztZQUNsQyxXQUFXO1FBQ2Y7O1FBRUE7WUFDSSxxQkFBcUI7UUFDekI7O1lBRUk7Z0JBQ0ksWUFBWTtnQkFDWixXQUFXO1lBQ2Y7O1lBRUE7Z0JBQ0ksc0JBQXNCO1lBQzFCOztZQUVBO2dCQUNJLHNCQUFzQjtZQUMxQjs7SUFFUjtRQUNJLGFBQWE7UUFDYixZQUFZO0lBQ2hCOztBQUVKLDZCQUE2Qjs7QUFFN0I7OztJQUdJLHlCQUF5QjtBQUM3Qjs7QUFFQTs7SUFFSSxXQUFXO0lBQ1gsc0hBQXNIO0FBQzFIOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBOzs7SUFHSSxrQkFBa0I7QUFDdEI7O0FBRUE7Ozs7SUFJSSxzQkFBc0I7QUFDMUI7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7QUFFQTs7Ozs7O0lBTUksc0JBQXNCO0FBQzFCOztBQUVBOzs7O0lBSUksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGlDQUFpQztJQUNqQyxZQUFZO0lBQ1osNkJBQTZCO0FBQ2pDOztBQUVBOzs7SUFHSSxnQ0FBZ0M7SUFDaEMsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixZQUFZO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdMT0JBTCBWQVJJQUJMRVMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tZm9udC1zaXplOiAxMHB0O1xcbiAgICAtLW1haW4tc3BhY2luZzogMnZ3O1xcbiAgICAtLXBsYXllci1hcmVhOiBjYWxjKGNhbGMoMTAwdncgLSBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgKiA0KSkgLyAyKTtcXG4gICAgLS1wbGF5ZXItZnI6IGNhbGModmFyKC0tcGxheWVyLWFyZWEpIC8gMTYpOyAvKiAxNSBmb3IgMTArNSBjZWxscyArKyAxIHRvIC8xMyBmb3IgY2VsbCBnYXBzICovXFxuICAgIC0tY2VsbC1nYXA6IGNhbGModmFyKC0tcGxheWVyLWZyKSAvIDEzKTtcXG5cXG4gICAgLS1zaWRlYmFyLXNwYWNpbmc6IGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAvIDIpO1xcbiAgICAtLXNpZGViYXItYXJlYTogY2FsYyh2YXIoLS1zaWRlYmFyLXNwYWNpbmcpICsgY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogNSkgKyBjYWxjKHZhcigtLWNlbGwtZ2FwKSAqIDQpKTtcXG4gICAgLS1zaGlwLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tYm9hcmQtYXJlYTogY2FsYyhjYWxjKHZhcigtLXBsYXllci1mcikgKiAxMCkgKyBjYWxjKHZhcigtLWNlbGwtZ2FwKSAqIDkpKTtcXG4gICAgLS1ib2FyZC1jZWxsOiB2YXIoLS1wbGF5ZXItZnIpO1xcblxcbiAgICAtLW1haW4taGVpZ2h0OiBjYWxjKDUuNXZ3ICsgMXZ3ICsgdmFyKC0tYm9hcmQtYXJlYSkgKyBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgKiAyKSArIGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDIpKTtcXG59XFxuXFxuLyogRElTUExBWSBGTEVYICovXFxuXFxuYm9keSxcXG5tYWluLFxcbi5tZW51LFxcbi50YWxseSxcXG4uc2hpcCxcXG4uYm9hcmQsXFxuLnJvdyxcXG4jYWxlcnQsXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keSxcXG4ubWVudSxcXG4udGFsbHksXFxuLmJvYXJkLFxcbiNhbGVydCB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5cXG4vKiBESVNQTEFZIEdSSUQgKi9cXG5cXG4jaHVtYW4sXFxuI2NvbXB1dGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbiNodW1hbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZWJhci1hcmVhKSB2YXIoLS1ib2FyZC1hcmVhKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnLiAgICAgICB0aXRsZSdcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ3NpZGViYXIgYm9hcmQnO1xcbn1cXG5cXG4jY29tcHV0ZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLWJvYXJkLWFyZWEpIHZhcigtLXNpZGViYXItYXJlYSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogYXV0bztcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3RpdGxlIC4nXFxuICAgICAgICAgICAgICAgICAgICAgICAgICdib2FyZCBzaWRlYmFyJztcXG59XFxuXFxuICAgIC50aXRsZSB7XFxuICAgICAgICBncmlkLWFyZWE6IHRpdGxlO1xcbiAgICB9XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgfVxcblxcbiAgICAudGFsbHkge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZCB7XFxuICAgICAgICBncmlkLWFyZWE6IGJvYXJkO1xcbiAgICB9XFxuXFxuLyogUE9TSVRJT05JTkcgKi9cXG5cXG5ib2R5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLnRpdGxlIHtcXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjY29tcHV0ZXIgLnRpdGxlIHtcXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBlbmQ7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAubWVudSxcXG4gICAgICAgIC50YWxseSB7XFxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwLFxcbiAgICAgICAgICAgIC5ib2FyZCxcXG4gICAgICAgICAgICAucm93IHtcXG4gICAgICAgICAgICAgICAgZ2FwOiB2YXIoLS1jZWxsLWdhcCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBnYXA6IGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAvIDIpO1xcbiAgICB9XFxuXFxuICAgICNhbGVydCxcXG4gICAgLnNjcmVlbiB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIH1cXG5cXG4gICAgI2FsZXJ0IHtcXG4gICAgICAgIHRvcDogY2FsYyh2YXIoLS1tYWluLWhlaWdodCkgLyAyKTtcXG4gICAgICAgIGxlZnQ6IDUwJTtcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAuc2NyZWVuIHtcXG4gICAgICAgIHRvcDogMDtcXG4gICAgICAgIGxlZnQ6IDA7XFxuICAgIH1cXG5cXG4vKiBTSVpJTkcgKi9cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5tZW51LFxcbiAgICAgICAgI2h1bWFuIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb21wdXRlciAudGFsbHkge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuc2hpcCB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLm1lbnUgLnNoaXAgZGl2LFxcbiAgICAgICAgICAgICAgICAudGFsbHkgLnNoaXAgZGl2LFxcbiAgICAgICAgICAgICAgICAuY2VsbCAuc2hpcCBkaXYge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1zaGlwLWNlbGwpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5jZWxsIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1jZWxsKTtcXG4gICAgICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMik7XFxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICBidXR0b24jcmVzdGFydC1nYW1lIHtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICBidXR0b246aG92ZXIgaW1nIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICBcXG4gICAgICAgICAgICBidXR0b246YWN0aXZlIGltZyB7XFxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC45NSk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAuc2NyZWVuIHtcXG4gICAgICAgIGhlaWdodDogMTAwdmg7XFxuICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgIH1cXG5cXG4vKiBDT0xPUlMgLCBGT05UUyAmIFNIQVBJTkcgKi9cXG5cXG5ib2R5LFxcbiNhbGVydCxcXG4uc2NyZWVuIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2IxYzZlYjtcXG59XFxuXFxuI2FsZXJ0LFxcbi50aXRsZSB7XFxuICAgIGNvbG9yOiBibHVlO1xcbiAgICBmb250LWZhbWlseTogJ0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uc2NyZWVuIHtcXG4gICAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG4udGl0bGUge1xcbiAgICBmb250LXNpemU6IDV2dztcXG4gICAgbGluZS1oZWlnaHQ6IDUuNXZ3O1xcbn1cXG5cXG4jYWxlcnQgc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMnZ3O1xcbiAgICBsaW5lLWhlaWdodDogMi41dnc7XFxufVxcblxcbi5zaGlwIGRpdixcXG4uY2VsbCxcXG4jYWxlcnQge1xcbiAgICBib3JkZXItcmFkaXVzOiAxMCU7XFxufVxcblxcbi5jZWxsLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwuaGl0KSxcXG4uY2VsbC5hdHRhY2s6bm90KC5jZWxsLm1pc3MpLFxcbiNhbGVydCB7XFxuICAgIGJvcmRlcjogYmx1ZSAxcHggc29saWQ7XFxufVxcblxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwuaGl0KSxcXG4uY2VsbC5hdHRhY2s6bm90KC5jZWxsLm1pc3MpIHtcXG4gICAgb3BhY2l0eTogMjUlO1xcbn1cXG5cXG4ubWVudSAuc2hpcCBkaXYsXFxuLmNlbGwucGxhY2VkLFxcbi5zaGlwLnNlbGVjdGVkIGRpdixcXG4uc2hpcC5wbGFjZWQgZGl2LFxcbi5ob3Zlci5pcy12YWxpZCxcXG4udGFsbHkgLnNoaXAgZGl2IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG59XFxuXFxuLnNoaXAuc2VsZWN0ZWQgZGl2LFxcbi5zaGlwLnBsYWNlZCBkaXYsXFxuLmhvdmVyLmlzLXZhbGlkLFxcbi50YWxseSAuc2hpcCBkaXYge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5taXNzIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAxMzEpO1xcbiAgICBvcGFjaXR5OiAxNSU7XFxuICAgIGJvcmRlci1jb2xvcjogcmdiYSgwLCAwLCAxMzEpO1xcbn1cXG5cXG4uaG92ZXIuaXMtaW52YWxpZCxcXG4uc3VuayBkaXYsXFxuLmhpdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZCAhaW1wb3J0YW50O1xcbiAgICBvcGFjaXR5OiA1MCU7XFxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xcbn1cXG5cXG4uaG92ZXIuaXMtdmFsaWQsXFxuLnN1bmsgZGl2IHtcXG4gICAgb3BhY2l0eTogNTAlO1xcbn1cXG5cXG4uaGl0IHtcXG4gICAgb3BhY2l0eTogNzUlO1xcbn1cXG5cXG5idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgYm9yZGVyOiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplLCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyAqL1xcbi8qIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYCBjb250ZXh0cyAqL1xcbi8qIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaSAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQ0FBcUM7O0FBRXJDOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZLEVBQUUsV0FBVzs7SUFFekIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGFBQWE7O0lBRWIsd0JBQXdCO0FBQzVCOzs7QUFHQSx1Q0FBdUM7O0FBRXZDLCtDQUErQztBQUMvQyw0Q0FBNEM7QUFDNUMsbUNBQW1DOztBQUVuQztJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUEsOERBQThEOztBQUU5RDtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUEseURBQXlEOztBQUV6RDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBLG1EQUFtRDs7QUFFbkQsNENBQTRDOztBQUU1QztJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQSwwQ0FBMEM7QUFDMUMsc0VBQXNFOztBQUV0RTtJQUNJLG1CQUFtQixFQUFFLE1BQU07SUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzdDOztBQUVBLG9EQUFvRDs7QUFFcEQ7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBLDBDQUEwQzs7QUFFMUM7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQSwrQ0FBK0M7O0FBRS9DLGtEQUFrRDs7QUFFbEQ7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLG9DQUFvQzs7QUFFcEMsMENBQTBDO0FBQzFDLDJDQUEyQzs7QUFFM0M7OztJQUdJLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNyQjs7QUFFQSw4QkFBOEI7O0FBRTlCOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQSw4REFBOEQ7O0FBRTlEOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQSxrRUFBa0U7O0FBRWxFOzs7O0lBSUksMEJBQTBCO0FBQzlCOztBQUVBLDRDQUE0Qzs7QUFFNUM7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBLG1EQUFtRDs7QUFFbkQ7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7OztBQUdBLG1DQUFtQzs7QUFFbkMsaUNBQWlDOztBQUVqQztJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4O1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbi8qIFNFQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBjb3JyZWN0IGZvbnQgc2l6ZSwgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgKi9cXG4vKiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWAgY29udGV4dHMgKi9cXG4vKiBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBwYCBlbGVtZW50cyBhY3Jvc3MgYnJvd3NlcnMgKi9cXG5cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuXFxuLyogVEVYVC1MRVZFTCBTRU1BTlRJQ1MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBncmF5IGJnIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogMS4gcmVtb3ZlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSAqL1xcbi8qIDIuIGFkZCBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgU2FmYXJpICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIFNhZmFyaSAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcblxcbi8qIEVNQkVEREVEIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuXFxuLyogTUlTQyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2FuY2VsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jYW5jZWwuc3ZnXCIsXG5cdFwiLi9jb25maXJtLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jb25maXJtLnN2Z1wiLFxuXHRcIi4vcGxheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvcGxheS5zdmdcIixcblx0XCIuL3BsYXlfZ3JheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvcGxheV9ncmF5LnN2Z1wiLFxuXHRcIi4vcmVzdGFydC5zdmdcIjogXCIuL3NyYy9hc3NldHMvcmVzdGFydC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgXFxcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkL1wiOyIsIi8vICYgcHVic3ViIGV2ZW50cyBtYW5hZ2VyXG5cbmNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IF9ldmVudHMgPSB7fTtcblxuICAgIC8vIHN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTVUJTQ1JJQklORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICB9XG5cbiAgICAvLyB1bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnNwbGljZSgoX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaXNoIGV2ZW50IHdpdGggZGF0YVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5kYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQVUJMSVNISU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGZ1bmN0aW9uIHZpZXdFdmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgdW5zdWJzY3JpYmUsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHZpZXdFdmVudHMsXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuXG4vLyBDTEFTU0VTXG5jbGFzcyBTaGlwIHtcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGggPSBudWxsLCBkaXIgPSBudWxsLCBuYW1lID0gbnVsbCwgY29vcmRzID0gbnVsbCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5kaXIgPSBkaXI7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICB9XG5cbiAgICAvLyBzZXR0ZXJzXG4gICAgbG9nSGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgY29uc29sZS5sb2coJ3NoaXAgaGl0czonLCB0aGlzLmhpdHMpO1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKCdzaGlwIHN1bms6JywgdGhpcy5zdW5rKVxuICAgIH1cbiAgICBpc1BsYWNlZCgpIHtcbiAgICAgICAgdGhpcy5wbGFjZWQgPSB0cnVlO1xuICAgIH1cbn1cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXBsYWNpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc2hpcHNTdW5rID0gMDtcbiAgICB9XG5cbiAgICAvLyBnZXR0ZXJzXG4gICAgZ2V0U2hpcCh0YXJnZXRDb29yZCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvb3JkIGluIHRoaXMuc2hpcHNbc2hpcF0uY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNbc2hpcF0uY29vcmRzW2Nvb3JkXSA9PT0gdGFyZ2V0Q29vcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2hpcHNbc2hpcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGdldENvb3JkcyhzdGFydENvb3JkLCBkaXIsIHNoaXBMZW4pIHtcbiAgICAgICAgc2hpcExlbiA9IHBhcnNlSW50KHNoaXBMZW4pO1xuICAgICAgICBjb25zb2xlLmxvZyhzdGFydENvb3JkLCBkaXIsIHNoaXBMZW4pO1xuICAgICAgICBsZXQgY29vcmRTZXQgPSBbc3RhcnRDb29yZF07XG4gICAgICAgIGxldCB4UG9zaXRpb24gPSBwYXJzZUludChzdGFydENvb3JkWzBdKTtcbiAgICAgICAgbGV0IHlQb3NpdGlvbiA9IHBhcnNlSW50KHN0YXJ0Q29vcmRbMV0pO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgc2hpcExlbiAtIDEpIHtcbiAgICAgICAgICAgIHN3aXRjaChkaXIpIHtcbiAgICAgICAgICAgICAgICBjYXNlICd1JzpcbiAgICAgICAgICAgICAgICAgICAgeVBvc2l0aW9uIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2QnOlxuICAgICAgICAgICAgICAgICAgICB5UG9zaXRpb24gKz0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAgICAgIHhQb3NpdGlvbiAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdyJzpcbiAgICAgICAgICAgICAgICAgICAgeFBvc2l0aW9uICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3Q29vcmQgPSBgJHt4UG9zaXRpb259JHt5UG9zaXRpb259YDtcbiAgICAgICAgICAgIHN3aXRjaCh0cnVlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAoZGlyID09PSAndScgfHwgZGlyID09PSAnbCcpOlxuICAgICAgICAgICAgICAgICAgICBjb29yZFNldC51bnNoaWZ0KG5ld0Nvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAoZGlyID09PSAnZCcgfHwgZGlyID09PSAncicpOlxuICAgICAgICAgICAgICAgICAgICBjb29yZFNldC5wdXNoKG5ld0Nvb3JkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29vcmRTZXQ7XG4gICAgfVxuICAgIGdldEJ1ZmZlcihzaGlwT2JqZWN0KSB7XG4gICAgICAgIGxldCBidWZmZXJTZXQgPSBbXTtcbiAgICAgICAgYnVmZmVyU2V0LnB1c2goLi4uZ2V0RW5kcyhzaGlwT2JqZWN0LmNvb3Jkc1swXSwgc2hpcE9iamVjdC5jb29yZHNbc2hpcE9iamVjdC5sZW5ndGggLSAxXSwgc2hpcE9iamVjdC5kaXIpKTtcbiAgICAgICAgYnVmZmVyU2V0LnB1c2goLi4uZ2V0U2lkZXMoc2hpcE9iamVjdC5jb29yZHMsIHNoaXBPYmplY3QuZGlyLCBzaGlwT2JqZWN0Lmxlbmd0aCkpO1xuXG4gICAgICAgIGJ1ZmZlclNldCA9IGJ1ZmZlclNldC5maWx0ZXIoY29vcmQgPT4gY29vcmQubGVuZ3RoIDwgMyk7XG4gICAgICAgIHJldHVybiBidWZmZXJTZXQ7XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RW5kcyhzdGFydENvb3JkLCBlbmRDb29yZCwgZGlyZWN0aW9uKSB7XG4gICAgICAgICAgICBsZXQgYnVmZmVyQ29vcmRzID0gW107XG4gICAgICAgICAgICBsZXQgeCA9IHBhcnNlSW50KHN0YXJ0Q29vcmRbMF0pO1xuICAgICAgICAgICAgbGV0IHkgPSBwYXJzZUludChzdGFydENvb3JkWzFdKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkJyB8fCBkaXJlY3Rpb24gPT09ICd1Jykge1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3h9JHt5IC0gMX1gKTtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4IC0gMX0ke3kgLSAxfWApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggKyAxfSR7eSAtIDF9YCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2wnIHx8IGRpcmVjdGlvbiA9PT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCAtIDF9JHt5fWApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggLSAxfSR7eSAtIDF9YCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCAtIDF9JHt5ICsgMX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHggPSBwYXJzZUludChlbmRDb29yZFswXSk7XG4gICAgICAgICAgICB5ID0gcGFyc2VJbnQoZW5kQ29vcmRbMV0pO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2QnIHx8IGRpcmVjdGlvbiA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eH0ke3kgKyAxfWApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggLSAxfSR7eSArIDF9YCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCArIDF9JHt5ICsgMX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbCcgfHwgZGlyZWN0aW9uID09PSAncicpIHtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4ICsgMX0ke3l9YCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCArIDF9JHt5IC0gMX1gKTtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4ICsgMX0ke3kgKyAxfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlckNvb3JkcztcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBnZXRTaWRlcyhjb29yZHMsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgICAgICBsZXQgYnVmZmVyQ29vcmRzID0gW107XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IGxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQoY29vcmRzW2ldWzBdKVxuICAgICAgICAgICAgICAgIGxldCB5ID0gcGFyc2VJbnQoY29vcmRzW2ldWzFdKTtcbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZCcgfHwgZGlyZWN0aW9uID09PSAndScpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCAtIDF9JHt5fWApO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4ICsgMX0ke3l9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdsJyB8fCBkaXJlY3Rpb24gPT09ICdyJykge1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4fSR7eSAtIDF9YCk7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3h9JHt5ICsgMX1gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGJ1ZmZlckNvb3JkcztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHJlc2V0dGVyc1xuICAgIHJlbW92ZVNoaXAoc2hpcE5hbWUpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwc1tzaGlwXS5uYW1lID09PSBzaGlwTmFtZSkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzLmxlbmd0aCA9PT0gNykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2luZyA9IHRoaXMuc2hpcHNbc2hpcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHMuc3BsaWNlKHNoaXAsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlc2V0Qm9hcmQoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5yZXBsYWNpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoaXMuc2hpcHNTdW5rID0gMDtcbiAgICB9XG5cbiAgICAvLyBib29sc1xuICAgIHNldElzVmFsaWQoY29vcmRTZXQpIHtcbiAgICAgICAgZm9yIChsZXQgY29vcmQgaW4gY29vcmRTZXQpIHtcbiAgICAgICAgICAgIGlmIChjb29yZFNldFtjb29yZF0ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke2Nvb3JkU2V0W2Nvb3JkXX0gb3V0c2lkZSBib3VuZHNgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGNvb3JkU2V0W2Nvb3JkXVswXSk7XG4gICAgICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGNvb3JkU2V0W2Nvb3JkXVsxXSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpdGVtIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IHRoaXMuc2hpcHNbaXRlbV07XG4gICAgICAgICAgICAgICAgbGV0IHhNaW4gPSBwYXJzZUludChzaGlwLmNvb3Jkc1swXVswXSkgLSAxO1xuICAgICAgICAgICAgICAgIGxldCB4TWF4ID0gcGFyc2VJbnQoc2hpcC5jb29yZHNbc2hpcC5jb29yZHMubGVuZ3RoIC0gMV1bMF0pICsgMTtcbiAgICAgICAgICAgICAgICBsZXQgeU1pbiA9IHBhcnNlSW50KHNoaXAuY29vcmRzWzBdWzFdKSAtIDE7XG4gICAgICAgICAgICAgICAgbGV0IHlNYXggPSBwYXJzZUludChzaGlwLmNvb3Jkc1tzaGlwLmNvb3Jkcy5sZW5ndGggLSAxXVsxXSkgKyAxO1xuICAgICAgICAgICAgICAgIGlmICh4ID49IHhNaW4gJiYgeCA8PSB4TWF4ICYmIHkgPj0geU1pbiAmJiB5IDw9IHlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7Y29vcmRTZXRbY29vcmRdfSB0b28gY2xvc2UgdG8gcGxhY2VkIHNoaXBgKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaXNIaXQoYXR0YWNrQ29vcmQpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb29yZCBpbiB0aGlzLnNoaXBzW3NoaXBdLmNvb3Jkcykge1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tDb29yZCA9PT0gdGhpcy5zaGlwc1tzaGlwXS5jb29yZHNbY29vcmRdKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdHJ1ZSwgdGhpcy5zaGlwc1tzaGlwXV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XG4gICAgfVxuICAgIGlzTG9zZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBzU3VuayA9PT0gdGhpcy5zaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcGxhY2VtZW50XG4gICAgcGxhY2VTaGlwKHN0YXJ0Q29vcmQsIGRpciwgc2hpcExlbiwgc2hpcE5hbWUpIHtcbiAgICAgICAgc2hpcExlbiA9IHBhcnNlSW50KHNoaXBMZW4pO1xuICAgICAgICBsZXQgY29vcmRTZXQgPSB0aGlzLmdldENvb3JkcyhzdGFydENvb3JkLCBkaXIsIHNoaXBMZW4pOyAvLyB1c2VkIGJ5IGNvbXB1dGVyIEFJIHRvIGdlbmVyYXRlIHNoaXAgcGxhY2VtZW50XG4gICAgICAgIGlmICh0aGlzLnNldElzVmFsaWQoY29vcmRTZXQpKSB7ICAgIC8vIHVzZWQgYnkgY29tcHV0ZXIgQUkgdG8gdmFyaWZ5IHBsYWNlbWVudCB2YWxpZGl0eVxuICAgICAgICAgICAgdGhpcy5zaGlwcy5wdXNoKG1ha2VTaGlwKHNoaXBMZW4sIGRpciwgc2hpcE5hbWUsIGNvb3JkU2V0KSk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnbWFrZVBsYXlMaXZlJywgJycpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTsgICAgLy8gdXNlZCBieSBjb21wdXRlciBBSSB0byBjb250cm9sIHBsYWNlbWVudCBsb29wXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIFwiXCJcbiAgICB9XG4gICAgcmVwbGFjZVNoaXBUb09yaWdpbmFsKCkge1xuICAgICAgICB0aGlzLnNoaXBzLnB1c2godGhpcy5yZXBsYWNpbmcpO1xuICAgICAgICB0aGlzLnJlcGxhY2luZyA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBhdHRhY2tzXG4gICAgcmVjZWl2ZUF0dGFjayhwbGF5ZXIsIGNvb3JkKSB7XG4gICAgICAgIGxldCBvdXRjb21lID0gdGhpcy5pc0hpdChjb29yZCk7XG4gICAgICAgIGxldCBoaXQgPSBvdXRjb21lWzBdO1xuICAgICAgICBsZXQgc2hpcCA9IG91dGNvbWVbMV07XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHNoaXAubG9nSGl0KCk7XG4gICAgICAgICAgICBpZiAoc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1N1bmsgKz0gMTtcbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnZGlzcGxheVN1bmsnLCBwbGF5ZXIsIHNoaXAubmFtZSk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICAgICAgICAgICAgICBsZXQgYnVmZmVyID0gdGhpcy5nZXRCdWZmZXIoc2hpcCk7XG4gICAgICAgICAgICAgICAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnYWRkQnVmZmVyVG9Db21wdXRlckF0dGFja3MnLCBidWZmZXIpOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Rpc3BsYXlCdWZmZXInLCBwbGF5ZXIsIGJ1ZmZlcik7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBldmVudHMucHVibGlzaCgnZGlzcGxheUF0dGFjaycsIHBsYXllciwgY29vcmQsIGhpdCk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICAgICAgaWYgKHBsYXllciA9PT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgbGV0IHN1bms7XG4gICAgICAgICAgICBpZiAoc2hpcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3VuayA9IHNoaXAuc3VuaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlQXR0YWNrUmVzdWx0Jywgc3VuaywgaGl0LCBjb29yZCk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgSHVtYW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSAnaHVtYW4nO1xuICAgICAgICB0aGlzLmJvYXJkID0gbWFrZUdhbWVib2FyZCgpO1xuICAgIH1cblxuICAgIC8vIGF0dGFja1xuICAgIHNlbmRBdHRhY2socGxheWVyLCBjb29yZCwgYm9hcmQpIHtcbiAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhwbGF5ZXIsIGNvb3JkKTtcbiAgICB9XG59XG5jbGFzcyBDb21wdXRlciBleHRlbmRzIEh1bWFuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoSHVtYW4pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY29tcHV0ZXInO1xuICAgICAgICB0aGlzLmF0dGFja3NNYWRlID0gW107XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kgPSB7bW9kZTogJ3NlYXJjaCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnRDb29yZDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICB9XG5cbiAgICAvLyBwbGFjZW1lbnRcbiAgICByYW5kb21pemVTaGlwcygpIHtcbiAgICAgICAgbGV0IGF2YWlsU2hpcHMgPSBbWzUsICdhY2MnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzQsICdicyddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbMywgJ2NydXMnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbMiwgJ2Rlc3QxJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsxLCAnc3ViMiddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwgJ3N1YjEnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICBsZXQgZGlycyA9IFsndScsICdkJywgJ2wnLCAnciddO1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKGF2YWlsU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNoaXBMZW4gPSBhdmFpbFNoaXBzWzBdWzBdO1xuICAgICAgICAgICAgbGV0IHNoaXBOYW1lID0gYXZhaWxTaGlwc1swXVsxXTtcbiAgICAgICAgICAgIGF2YWlsU2hpcHMuc2hpZnQoKTtcblxuICAgICAgICAgICAgbGV0IGRpciA9IGRpcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZGlycy5sZW5ndGgpXTtcblxuICAgICAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB3aGlsZSAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNvb3JkID0gJyc7XG4gICAgICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgMikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkICs9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuYm9hcmQucGxhY2VTaGlwKGNvb3JkLCBkaXIsIHNoaXBMZW4sIHNoaXBOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGF0dGFjayBkcml2ZXJzXG4gICAgbWFrZUF0dGFjayhib2FyZCkge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnN0cmF0ZWd5Lm1vZGUpO1xuICAgICAgICBpZiAodGhpcy5zdHJhdGVneS5tb2RlID09PSAnc2VhcmNoJykge1xuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVBdHRhY2soYm9hcmQpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RyYXRlZ3kubW9kZSA9PT0gJ2h1bnQnIHx8IHRoaXMuc3RyYXRlZ3kubW9kZSA9PT0gJ3RhcmdldCcpIHtcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0QXR0YWNrKGJvYXJkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByYW5kb21pemVBdHRhY2soYm9hcmQpIHtcbiAgICAgICAgbGV0IHZhbGlkID0gZmFsc2U7XG4gICAgICAgIHdoaWxlICghdmFsaWQpIHtcbiAgICAgICAgICAgIGxldCBjb29yZCA9ICcnO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgIGNvb3JkICs9IGAke2luZGV4fWA7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmF0dGFja3NNYWRlLmluY2x1ZGVzKGNvb3JkKSkge1xuICAgICAgICAgICAgICAgIHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmF0dGFja3NNYWRlLnB1c2goY29vcmQpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEF0dGFjaygnaHVtYW4nLCBjb29yZCwgYm9hcmQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRhcmdldEF0dGFjayhib2FyZCkge1xuICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICAgICAgbGV0IHRhcmdldENvb3JkO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyYXRlZ3kuZGlyZWN0aW9uID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRDb29yZCA9IHRoaXMuc3RyYXRlZ3kudGFyZ2V0cy5zaGlmdCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnN0cmF0ZWd5LnRhcmdldHNbMF0ubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHRhcmdldENvb3JkID0gdGhpcy5zdHJhdGVneS50YXJnZXRzWzBdLnNoaWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRhcmdldENvb3JkID0gdGhpcy5zdHJhdGVneS50YXJnZXRzWzFdLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0dGFja3NNYWRlLCB0YXJnZXRDb29yZC5sZW5ndGgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmF0dGFja3NNYWRlLmluY2x1ZGVzKHRhcmdldENvb3JkKSAmJiB0YXJnZXRDb29yZC5sZW5ndGggPCAzKSB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrc01hZGUucHVzaCh0YXJnZXRDb29yZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQXR0YWNrKCdodW1hbicsIHRhcmdldENvb3JkLCBib2FyZCk7XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0dGFja3NNYWRlKTtcbiAgICB9XG4gICAgXG4gICAgLy8gYXR0YWNrIGhlbHBlcnNcbiAgICByZWNlaXZlQXR0YWNrUmVzdWx0KHN1bmssIGhpdCwgY29vcmQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlY2VpdmVBdHRhY2tSZXN1bHRzKCknKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coc3VuaywgaGl0LCBjb29yZCk7XG4gICAgICAgIGlmIChzdW5rKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmF0dGFja3NNYWRlKTtcbiAgICAgICAgICAgIHRoaXMucmVzZXRTdHJhdGVneSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGhpdCAmJiB0aGlzLnN0cmF0ZWd5Lm1vZGUgPT09ICdzZWFyY2gnKSB7IC8vIGZpcnN0IGhpdCwgbm8gZGlyZWN0aW9uIGZvdW5kXG4gICAgICAgICAgICAgICAgdGhpcy5odW50U3RyYXRlZ3koY29vcmQpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChoaXQgJiYgdGhpcy5zdHJhdGVneS5tb2RlID09PSAnaHVudCcpIHsgLy8gc2Vjb25kIGhpdCwgY2hhbmdlIG1vZGUgdG8gdGFyZ2V0XG4gICAgICAgICAgICAgICAgdGhpcy50YXJnZXRTdHJhdGVneShjb29yZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFoaXQgJiYgdGhpcy5zdHJhdGVneS5tb2RlID09PSAndGFyZ2V0JykgeyAvLyBlZGdlIHJlYWNoZWQsIGNsZWFyIHByZXZpb3VzIGNlbGxzXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2VkZ2UgcmVhY2hlZCwgY2xlYXIgcHJldmlvdXMgY2VsbHMnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0cmF0ZWd5LnRhcmdldHNbMF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnN0cmF0ZWd5KTtcbiAgICB9XG4gICAgaHVudFN0cmF0ZWd5KGNvb3JkKSB7IFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZmlyc3QgaGl0LCBubyBkaXJlY3Rpb24gZm91bmQnKTtcbiAgICAgICAgdGhpcy5zdHJhdGVneS5tb2RlID0gJ2h1bnQnO1xuICAgICAgICB0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmQgPSBjb29yZDtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChjb29yZC5zcGxpdCgnJylbMF0pO1xuICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KCcnKVsxXSk7XG4gICAgICAgIGxldCBjb29yZENoYW5nZXMgPSBbW3gsIHkgLSAxXSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ggKyAxLCB5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeCwgeSArIDFdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4IC0gMSwgeV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgY29vcmQgaW4gY29vcmRDaGFuZ2VzKSB7XG4gICAgICAgICAgICBpZiAoKGNvb3JkQ2hhbmdlc1tjb29yZF1bMF0gPj0gMCAmJiBjb29yZENoYW5nZXNbY29vcmRdWzBdIDw9IDkpICYmIChjb29yZENoYW5nZXNbY29vcmRdWzFdID49IDAgJiYgY29vcmRDaGFuZ2VzW2Nvb3JkXVsxXSA8PSA5KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kudGFyZ2V0cy5wdXNoKGAke2Nvb3JkQ2hhbmdlc1tjb29yZF1bMF19JHtjb29yZENoYW5nZXNbY29vcmRdWzFdfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHRhcmdldFN0cmF0ZWd5KGNvb3JkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzZWNvbmQgaGl0LCBjaGFuZ2UgbW9kZSB0byB0YXJnZXQnKTtcbiAgICAgICAgdGhpcy5zdHJhdGVneS5tb2RlID0gJ3RhcmdldCc7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kudGFyZ2V0cyA9IFtdO1xuICAgICAgICB0aGlzLnVwZGF0ZURpcmVjdGlvbih0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmQsIGNvb3JkKTtcbiAgICAgICAgdGhpcy51cGRhdGVUYXJnZXRDZWxscyh0aGlzLnN0cmF0ZWd5LmRpcmVjdGlvbik7XG4gICAgfVxuICAgIHVwZGF0ZURpcmVjdGlvbihmaXJzdENvb3JkLCBzZWNvbmRDb29yZCkge1xuICAgICAgICBsZXQgeGEgPSBwYXJzZUludChmaXJzdENvb3JkWzBdKTtcbiAgICAgICAgbGV0IHhiID0gcGFyc2VJbnQoc2Vjb25kQ29vcmRbMF0pO1xuICAgICAgICBsZXQgeWEgPSBwYXJzZUludChmaXJzdENvb3JkWzFdKTtcbiAgICAgICAgbGV0IHliID0gcGFyc2VJbnQoc2Vjb25kQ29vcmRbMV0pO1xuICAgICAgICBpZiAoeGEgLSB4YiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdHJhdGVneS5kaXJlY3Rpb24gPSAndic7XG4gICAgICAgIH0gZWxzZSBpZiAoeWEgLSB5YiA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5zdHJhdGVneS5kaXJlY3Rpb24gPSAnaCc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdXBkYXRlVGFyZ2V0Q2VsbHMoZGlyZWN0aW9uKSB7XG4gICAgICAgIGxldCBwcmV2aW91cyA9IFtdO1xuICAgICAgICBsZXQgbmV4dCA9IFtdO1xuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnaCcpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VJbnQodGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzBdKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXMudW5zaGlmdChgJHtpfSR7dGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzFdfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBhcnNlSW50KHRoaXMuc3RyYXRlZ3kuc3RhcnRDb29yZFswXSkgKyAxOyBpIDw9IDk7IGkrKykge1xuICAgICAgICAgICAgICAgIG5leHQucHVzaChgJHtpfSR7dGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzFdfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ3YnKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnNlSW50KHRoaXMuc3RyYXRlZ3kuc3RhcnRDb29yZFsxXSk7IGkrKykge1xuICAgICAgICAgICAgICAgIHByZXZpb3VzLnVuc2hpZnQoYCR7dGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzBdfSR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSBwYXJzZUludCh0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmRbMV0pICsgMTsgaSA8PSA5OyBpKyspIHtcbiAgICAgICAgICAgICAgICBuZXh0LnB1c2goYCR7dGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzBdfSR7aX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnN0cmF0ZWd5LnRhcmdldHMucHVzaChwcmV2aW91cywgbmV4dCk7XG4gICAgfVxuICAgIGFkZFRvQXR0YWNrcyhjb29yZCkge1xuICAgICAgICBjb25zb2xlLmxvZyhjb29yZCk7XG4gICAgICAgIHRoaXMuYXR0YWNrc01hZGUucHVzaChjb29yZCk7XG4gICAgfVxuXG4gICAgLy8gcmVzZXR0ZXJzXG4gICAgcmVzZXRTdHJhdGVneSgpIHtcbiAgICAgICAgdGhpcy5zdHJhdGVneSA9IHttb2RlOiAnc2VhcmNoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydENvb3JkOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgIH1cbiAgICByZXNldEF0dGFja3MoKSB7XG4gICAgICAgIHRoaXMuYXR0YWNrc01hZGUgPSBbXTtcbiAgICB9XG59XG5cbi8vIEZBQ1RPUklFU1xuZnVuY3Rpb24gbWFrZVNoaXAobGVuZ3RoLCBkaXIsIG5hbWUsIGNvb3Jkcykge1xuICAgIHJldHVybiBuZXcgU2hpcChsZW5ndGgsIGRpciwgbmFtZSwgY29vcmRzKTtcbn1cbmZ1bmN0aW9uIG1ha2VHYW1lYm9hcmQoKSB7XG4gICAgcmV0dXJuIG5ldyBHYW1lYm9hcmQoKTtcbn1cbmZ1bmN0aW9uIG1ha2VQbGF5ZXIodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHVtYW4oKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21wdXRlcigpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFrZVBsYXllcjtcbiIsImNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgLy8gZGF0YVxuICAgIGxldCBfYXR0cmlidXRlcyA9IFtdO1xuICAgIGxldCBlbGVtZW50O1xuXG4gICAgLy8gYmFzaWMgaGVscGVyIGZhY3Rvcmllc1xuICAgIGNvbnN0IGRpdiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHNwYW4gPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uID0gZnVuY3Rpb24oY29udGVudCwgc3RhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgZWxlbWVudC5yb2xlID0gJ2J1dHRvbic7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gc3RhdGU7XG4gICAgICAgIGVsZW1lbnQuYXJpYVByZXNzZWQgPSAnZmFsc2UnO1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaW1nID0gZnVuY3Rpb24odXJsLCBhbHQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBlbGVtZW50LnNyYyA9IGAuLi8ke3VybH1gO1xuICAgICAgICBlbGVtZW50LnNyYyA9IHVybDtcbiAgICAgICAgZWxlbWVudC5hbHQgPSBhbHQ7XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cblxuICAgIC8vIGhlbHBlcnNcbiAgICBmdW5jdGlvbiBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBhdHRyaWJ1dGVzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgKGF0dHJpYnV0ZXMubGVuZ3RoKTsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJy4nKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHJpYnV0ZXNbaV1bMF0gPT09ICcjJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuaWQgPSBhdHRyaWJ1dGVzW2ldLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzW2ldLmxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBkaXYsXG4gICAgICAgIHNwYW4sXG4gICAgICAgIGJ1dHRvbixcbiAgICAgICAgaW1nLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5pbXBvcnQgbWFrZVBsYXllciBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgICBsZXQgaHVtYW47XG4gICAgbGV0IGNvbXB1dGVyO1xuXG4gICAgLy8gZHJpdmVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBodW1hbiA9IG1ha2VQbGF5ZXIoJ2h1bWFuJyk7XG4gICAgICAgIGNvbXB1dGVyID0gbWFrZVBsYXllcignY29tcHV0ZXInKTtcbiAgICB9XG5cbiAgICAvLyBwbGFjZW1lbnQgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIHF1ZXJ5Q29vcmREYXRhKHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIGxldCBjb29yZFNldCA9IGh1bWFuLmJvYXJkLmdldENvb3JkcyhzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCk7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gaHVtYW4uYm9hcmQuc2V0SXNWYWxpZChjb29yZFNldCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlQ29vcmREYXRhJywgY29vcmRTZXQsIGlzVmFsaWQpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcChzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCwgbmFtZSkge1xuICAgICAgICBodW1hbi5ib2FyZC5wbGFjZVNoaXAoc3RhcnRDb29yZCwgZGlyZWN0aW9uLCBsZW5ndGgsIG5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBxdWVyeVNoaXBEYXRhKHRhcmdldElEKSB7XG4gICAgICAgIGxldCBzaGlwID0gaHVtYW4uYm9hcmQuZ2V0U2hpcCh0YXJnZXRJRCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlU2hpcERhdGEnLCBzaGlwLm5hbWUsIHNoaXAuZGlyLCBzaGlwLmxlbmd0aCwgc2hpcC5jb29yZHMpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgfVxuICAgIGZ1bmN0aW9uIGRlbGV0ZVNoaXBPYmplY3QodGFyZ2V0TmFtZSkge1xuICAgICAgICBodW1hbi5ib2FyZC5yZW1vdmVTaGlwKHRhcmdldE5hbWUpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZXNldEJvYXJkRGF0YSgpIHtcbiAgICAgICAgaHVtYW4uYm9hcmQucmVzZXRCb2FyZCgpO1xuICAgICAgICBjb21wdXRlci5ib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGNvbXB1dGVyLnJlc2V0U3RyYXRlZ3koKTtcbiAgICAgICAgY29tcHV0ZXIucmVzZXRBdHRhY2tzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VUb09yaWdpbmFsKCkge1xuICAgICAgICBsZXQgc2hpcCA9IGh1bWFuLmJvYXJkLnJlcGxhY2luZztcbiAgICAgICAgaHVtYW4uYm9hcmQucmVwbGFjZVNoaXBUb09yaWdpbmFsKCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlU2hpcERhdGEnLCBzaGlwLm5hbWUsIHNoaXAuZGlyLCBzaGlwLmxlbmd0aCwgc2hpcC5jb29yZHMpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgfVxuXG4gICAgLy8gcGxheSBtZXRob2RzXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVDb21wdXRlclNoaXBzKCkge1xuICAgICAgICBjb21wdXRlci5yYW5kb21pemVTaGlwcygpO1xuICAgIH1cbiAgICBmdW5jdGlvbiB0YWtlVHVybih0YXJnZXRDb29yZCkge1xuICAgICAgICBodW1hblR1cm4odGFyZ2V0Q29vcmQpO1xuICAgICAgICBldmVudHMucHVibGlzaCgndG9nZ2xlQ29tcHV0ZXJCb2FyZCcsICcnKTsgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgICAgICBzZXRUaW1lb3V0KGNvbXB1dGVyVHVybiwgNTAwKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaHVtYW5UdXJuKHRhcmdldENvb3JkKSB7XG4gICAgICAgIGh1bWFuLnNlbmRBdHRhY2soJ2NvbXB1dGVyJywgdGFyZ2V0Q29vcmQsIGNvbXB1dGVyLmJvYXJkKTtcbiAgICAgICAgaWYgKGNvbXB1dGVyLmJvYXJkLmlzTG9zZXIoKSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3dpbm5lcicsICdjb21wdXRlcicpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgICAgICByZXNldEJvYXJkRGF0YSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNvbXB1dGVyVHVybigpIHtcbiAgICAgICAgY29tcHV0ZXIubWFrZUF0dGFjayhodW1hbi5ib2FyZCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCd0b2dnbGVDb21wdXRlckJvYXJkJywgJycpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgIGlmIChodW1hbi5ib2FyZC5pc0xvc2VyKCkpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCd3aW5uZXInLCAnaHVtYW4nKTsgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgICAgICAgICAgcmVzZXRCb2FyZERhdGEoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNvbXB1dGVyU3RyYXRlZ3koc3VuaywgaGl0LCBjb29yZCkge1xuICAgICAgICBjb25zb2xlLmxvZygndXBkYXRlQ29tcHV0ZXJTdHJhdGVneSgpJyk7XG4gICAgICAgIGNvbXB1dGVyLnJlY2VpdmVBdHRhY2tSZXN1bHQoc3VuaywgaGl0LCBjb29yZCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZEJ1ZmZlclRvQ29tcHV0ZXJBdHRhY2tzKGJ1ZmZlcikge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29tcHV0ZXIuYWRkVG9BdHRhY2tzKGJ1ZmZlcltpXSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXIuYXR0YWNrc01hZGUpO1xuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcbiAgICBldmVudHMuc3Vic2NyaWJlKCdxdWVyeUNvb3JkRGF0YScsIHF1ZXJ5Q29vcmREYXRhKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChwbGF5ZXJCb2FyZHNbMF0ub25Nb3VzZU92ZXIsIGJvZHkub25LZXlEb3duKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3BsYWNlU2hpcCcsIHBsYWNlU2hpcCk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3F1ZXJ5U2hpcERhdGEnLCBxdWVyeVNoaXBEYXRhKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChib2R5Lm9uQ2xpY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZGVsZXRlU2hpcE9iamVjdCcsIGRlbGV0ZVNoaXBPYmplY3QpOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZXNldEJvYXJkRGF0YScsIHJlc2V0Qm9hcmREYXRhKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChib2R5Lm9uQ2xpY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVwbGFjZVRvT3JpZ2luYWwnLCByZXBsYWNlVG9PcmlnaW5hbCk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2dlbmVyYXRlQ29tcHV0ZXJTaGlwcycsIGdlbmVyYXRlQ29tcHV0ZXJTaGlwcyk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Rha2VUdXJuJywgdGFrZVR1cm4pOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZWNlaXZlQXR0YWNrUmVzdWx0JywgdXBkYXRlQ29tcHV0ZXJTdHJhdGVneSk7IC8vIHB1Ymxpc2hlZCBieSBjbGFzc2VzLmpzIChyZWNlaXZlQXR0YWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2FkZEJ1ZmZlclRvQ29tcHV0ZXJBdHRhY2tzJywgYWRkQnVmZmVyVG9Db21wdXRlckF0dGFja3MpOyAvLyBwdWJsaXNoZWQgYnkgY2xhc3Nlcy5qcyAocmVjZWl2ZUF0dGFjaylcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsIC8vIHVzZWQgYnkgaW5kZXguanNcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7XG4iLCIvLyBjYWNoZSBpbWFnZXNcbmxldCBpbWdRdWVyeSA9IHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzJywgZmFsc2UsIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9pKTtcbmxldCBpY29uc0FycmF5ID0gaW1wb3J0SWNvbnMoaW1nUXVlcnkpO1xuLy8gY29uc29sZS5sb2coJyoqKioqIElDT05TIEFSUkFZICoqKioqJyk7XG4vLyBjb25zb2xlLmxvZyhpY29uc0FycmF5KTtcblxuLy8gbWV0aG9kc1xuZnVuY3Rpb24gaW1wb3J0SWNvbnMocikge1xuICAgIGxldCBxdWVyeUtleXMgPSByLmtleXMoKTtcbiAgICBsZXQgaWNvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3S2V5ID0gcXVlcnlLZXlzW2ldLnNwbGl0KCcuc3ZnJylbMF0uc3BsaXQoJy4vJylbMV07XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGAuL2Fzc2V0cy8ke3F1ZXJ5S2V5c1tpXS5zcGxpdCgnLi8nKVsxXX1gO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGBuZXdLZXkgLS0+ICR7bmV3S2V5fWApO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGBuZXdWYWx1ZSAtLT4gJHtuZXdWYWx1ZX1gKVxuICAgICAgICBcbiAgICAgICAgaWNvbnNbbmV3S2V5XSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBpY29ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaWNvbnNBcnJheTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5pbXBvcnQgY3JlYXRlIGZyb20gJy4vY3JlYXRlLmpzJztcblxuY29uc3QgdWkgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJCb2FyZHMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuJykubGFzdEVsZW1lbnRDaGlsZCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyJykubGFzdEVsZW1lbnRDaGlsZF07XG4gICAgbGV0IHNoaXBDb250YWluZXJzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbicpLmNoaWxkcmVuWzFdLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXInKS5jaGlsZHJlblsxXV07XG4gICAgbGV0IHBsYXlCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGxheS1nYW1lJyk7XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBsZXQgc3RhdGUgPSB7XG4gICAgICAgIHBsYWNpbmc6IGZhbHNlLFxuICAgICAgICBwbGF5aW5nOiBmYWxzZSxcbiAgICAgICAgdGFyZ2V0Q2VsbDogdW5kZWZpbmVkLFxuICAgICAgICBzZWxlY3RlZFNoaXA6IHVuZGVmaW5lZCxcbiAgICAgICAgY29vcmREYXRhOiB7Y29vcmRTZXQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgZGlyZWN0aW9uOiAncicsXG4gICAgICAgIGNvbXB1dGVyQm9hcmRFbmFibGVkOiBmYWxzZSxcbiAgICB9XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnNcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKCFzdGF0ZS5wbGF5aW5nKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdwbGF5LWdhbWUnIHx8IGUudGFyZ2V0LmlkID09PSAncGxheScpIHtcbiAgICAgICAgICAgICAgICBwbGF5KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSAncmVzdGFydC1nYW1lJyB8fCBlLnRhcmdldC5pZCA9PT0gJ3Jlc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgcmVzdGFydCgpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsZXJ0Qm94KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUnKSAmJiAhZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSB7XG4gICAgICAgICAgICAgICAgc2V0TWVudVNlbGVjdChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucGxhY2luZyAmJiBzdGF0ZS5jb29yZERhdGEuaXNWYWxpZCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgncGxhY2VTaGlwJywgc3RhdGUudGFyZ2V0Q2VsbC5pZC5zcGxpdCgnLScpWzFdLCBzdGF0ZS5kaXJlY3Rpb24sIHN0YXRlLnNlbGVjdGVkU2hpcC5pZC5zcGxpdCgnLScpWzBdLCBzdGF0ZS5zZWxlY3RlZFNoaXAuaWQuc3BsaXQoJy0nKVsxXSk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgICAgICAgICBhZGRTaGlwUGxhY2VkKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc3RhdGUucGxhY2luZyAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLnBsYWNpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgncXVlcnlTaGlwRGF0YScsIHN0YXRlLnRhcmdldENlbGwuaWQuc3BsaXQoJy0nKVsxXSk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgnZGVsZXRlU2hpcE9iamVjdCcsIHN0YXRlLnNlbGVjdGVkU2hpcC5pZC5zcGxpdCgnLScpWzFdKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnBsYXlpbmcpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3Jlc3RhcnQtZ2FtZScgfHwgZS50YXJnZXQuaWQgPT09ICdyZXN0YXJ0Jykge1xuICAgICAgICAgICAgICAgIGdlbmVyYXRlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdjb25maXJtLXJlc3RhcnQnIHx8IGUudGFyZ2V0LmlkID09PSAnY29uZmlybScpIHtcbiAgICAgICAgICAgICAgICByZXN0YXJ0KCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09ICdjYW5jZWwtcmVzdGFydCcgfHwgZS50YXJnZXQuaWQgPT09ICdjYW5jZWwnKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQWxlcnRCb3goKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuY29tcHV0ZXJCb2FyZEVuYWJsZWQgPT09IHRydWUgJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgIT09IG51bGwgJiYgZS50YXJnZXQucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQuaWQgPT09ICdjb21wdXRlcicgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiYgIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnbWlzcycpKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnYXR0YWNrJyk7XG4gICAgICAgICAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbCA9IGUudGFyZ2V0O1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCd0YWtlVHVybicsIGUudGFyZ2V0LmlkLnNwbGl0KCctJylbMV0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGxldCB2YWxpZEtleXMgPSBbJ0Fycm93VXAnLCAnQXJyb3dEb3duJywgJ0Fycm93TGVmdCcsICdBcnJvd1JpZ2h0J107XG4gICAgICAgIGlmICghc3RhdGUucGxheWluZykge1xuICAgICAgICAgICAgaWYgKHZhbGlkS2V5cy5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93VXAnOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uID0gJ3UnXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdkJ1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAnbCc7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAncic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdxdWVyeUNvb3JkRGF0YScsIHN0YXRlLnRhcmdldENlbGwuaWQuc3BsaXQoJy0nKVsxXSwgc3RhdGUuZGlyZWN0aW9uLCBzdGF0ZS5zZWxlY3RlZFNoaXAuaWQuc3BsaXQoJy0nKVswXSk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0VzY2FwZScpIHtcbiAgICAgICAgICAgICAgICBzZXRNZW51U2VsZWN0KHN0YXRlLnNlbGVjdGVkU2hpcCk7XG4gICAgICAgICAgICAgICAgcmVtb3ZlQ2VsbEhvdmVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHBsYXllckJvYXJkc1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgICBzdGF0ZS50YXJnZXRDZWxsID0gZS50YXJnZXQ7XG4gICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nICYmICFzdGF0ZS5wbGF5aW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncXVlcnlDb29yZERhdGEnLCBzdGF0ZS50YXJnZXRDZWxsLmlkLnNwbGl0KCctJylbMV0sIHN0YXRlLmRpcmVjdGlvbiwgc3RhdGUuc2VsZWN0ZWRTaGlwLmlkLnNwbGl0KCctJylbMF0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHBsYXllckJvYXJkc1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nICYmICFzdGF0ZS5wbGF5aW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICByZW1vdmVDZWxsSG92ZXIoKTtcbiAgICAgICAgfSAgIFxuICAgIH0pXG4gICAgcGxheWVyQm9hcmRzWzFdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5wbGF5aW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2F0dGFjaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSlcbiAgICBwbGF5ZXJCb2FyZHNbMV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUucGxheWluZyAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2F0dGFjaycpKSB7XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkcml2ZXIgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIC8vIGdlbmVyYXRlIGJvYXJkc1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgcGxheWVyQm9hcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZ2VuZXJhdGVHcmlkKHBsYXllckJvYXJkc1tpXSwgaSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gc2V0IHN0YXRlXG4gICAgICAgIHNldFNlY3Rpb25UeXBlKHNoaXBDb250YWluZXJzWzBdLCAnbWVudScpO1xuICAgICAgICAvLyBnZW5lcmF0ZSBzaGlwIG1lbnVcbiAgICAgICAgZ2VuZXJhdGVTaGlwTWVudSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICAvLyByZXBsYWNlIHNlbGVjdGVkIHNoaXAgdG8gb3JpZ2luYWwgY29vcmRzXG4gICAgICAgIGlmIChzdGF0ZS5wbGFjaW5nKSB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncmVwbGFjZVRvT3JpZ2luYWwnLCAnJyk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgYWRkU2hpcFBsYWNlZCgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdlbmVyYXRlIHNoaXAgdGFsbGllc1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgc2hpcENvbnRhaW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjbGVhclNoaXBDb250YWluZXIoc2hpcENvbnRhaW5lcnNbaV0pO1xuICAgICAgICAgICAgc2V0U2VjdGlvblR5cGUoc2hpcENvbnRhaW5lcnNbaV0sICd0YWxseScpO1xuICAgICAgICAgICAgZ2VuZXJhdGVTaGlwVGFsbGllcyhzaGlwQ29udGFpbmVyc1tpXSwgaSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXNrIGNvbXB1dGVyIGJvYXJkIHRvIGdlbmVyYXRlIHBsYWNlbWVudHNcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2dlbmVyYXRlQ29tcHV0ZXJTaGlwcycsICcnKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgIC8vIHNldCBzdGF0ZSB0byBwbGF5XG4gICAgICAgIHN0YXRlLmNvbXB1dGVyQm9hcmRFbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgc3RhdGUucGxhY2luZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5wbGF5aW5nID0gdHJ1ZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVzdGFydCgpIHtcbiAgICAgICAgLy8gcmVzZXQgYm9hcmRzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllckJvYXJkc1tpXS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwgcGxheWVyQm9hcmRzW2ldLmNoaWxkcmVuW2pdLmNoaWxkcmVuLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZHNbaV0uY2hpbGRyZW5bal0uY2hpbGRyZW5ba10uY2xhc3NMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllckJvYXJkc1tpXS5jaGlsZHJlbltqXS5jaGlsZHJlbltrXS5jbGFzc0xpc3QgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXQgbWVudXNcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwQ29udGFpbmVycy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY2xlYXJTaGlwQ29udGFpbmVyKHNoaXBDb250YWluZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBtYWtlU2hpcEljb25zKCcnLCBzaGlwQ29udGFpbmVyc1swXSk7XG4gICAgICAgIHNoaXBDb250YWluZXJzWzBdLmNsYXNzTGlzdCA9ICdtZW51JztcbiAgICAgICAgc2hpcENvbnRhaW5lcnNbMV0uY2xhc3NMaXN0ID0gJyc7XG4gICAgICAgIC8vIHJlc2V0IHBsYXkgYnV0dG9uXG4gICAgICAgIHBsYXlCdXR0b24uY2hpbGRyZW5bMF0uc3JjID0gJy4vaWNvbnMvcGxheV9ncmF5LnN2Zyc7XG4gICAgICAgIHBsYXlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwbGF5QnV0dG9uLmFyaWFEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIGNsZWFyIHBsYXllciBvYmplY3RzXG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZXNldEJvYXJkRGF0YScsICcnKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgIC8vIGNsZWFyIHN0YXRlXG4gICAgICAgIHN0YXRlLnBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxheWluZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS50YXJnZXRDZWxsID0gdW5kZWZpbmVkO1xuICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXRlLmNvb3JkRGF0YSA9IHtjb29yZFNldDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdyJztcbiAgICAgICAgc3RhdGUuY29tcHV0ZXJCb2FyZEVuYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBtdWx0aS11c2UgaGVscGVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBtYWtlU2hpcEljb25zKHBsYXllclR5cGUsIGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgc2hpcHMgPSBbWzUsICdhY2MnXSxcbiAgICAgICAgICAgICAgICAgICAgIFs0LCAnYnMnXSxcbiAgICAgICAgICAgICAgICAgICAgIFszLCAnY3J1cyddLFxuICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MSddLFxuICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MiddLFxuICAgICAgICAgICAgICAgICAgICAgWzEsICdzdWIxJ10sXG4gICAgICAgICAgICAgICAgICAgICBbMSwgJ3N1YjInXVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbENvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJUeXBlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnLnNoaXAnLCBgIyR7c2hpcHNbaV1bMF19LSR7c2hpcHNbaV1bMV19YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnLnNoaXAnLCBgIyR7cGxheWVyVHlwZX0tJHtzaGlwc1tpXVsxXX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV1bMF07IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gY3JlYXRlLmRpdignJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChjZWxsQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluaXQgaGVscGVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUdyaWQoYm9hcmQsIGJvYXJkTnVtYmVyKSB7XG4gICAgICAgIGxldCBwbGF5ZXI7XG4gICAgICAgIGlmIChib2FyZE51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgcGxheWVyID0gJ2gnO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkTnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICBwbGF5ZXIgPSAnYyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gY3JlYXRlLmRpdignJywgJy5yb3cnKVxuICAgICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGogPCAxMCkge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gY3JlYXRlLmRpdignJywgJy5jZWxsJywgYCMke3BsYXllcn0tJHtqfSR7aX1gKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFNlY3Rpb25UeXBlKHNlY3Rpb24sIHNlbGVjdG9yKSB7IFxuICAgICAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoc2VsZWN0b3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNoaXBNZW51KCkge1xuICAgICAgICBtYWtlU2hpcEljb25zKCcnLCBzaGlwQ29udGFpbmVyc1swXSk7XG4gICAgfVxuXG4gICAgLy8gcGxhY2VtZW50IG1ldGhvZHNcbiAgICBmdW5jdGlvbiBzZXRNZW51U2VsZWN0KHRhcmdldFNoaXApIHtcbiAgICAgICAgaWYgKHN0YXRlLnNlbGVjdGVkU2hpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGF0ZS5wbGFjaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkU2hpcCA9IHRhcmdldFNoaXA7XG4gICAgICAgICAgICB0YXJnZXRTaGlwLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2hpcCA9PT0gc3RhdGUuc2VsZWN0ZWRTaGlwKSB7XG4gICAgICAgICAgICB0YXJnZXRTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBzdGF0ZS5wbGFjaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2hpcCAhPT0gc3RhdGUuc2VsZWN0ZWRTaGlwKSB7XG4gICAgICAgICAgICB0YXJnZXRTaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSB0YXJnZXRTaGlwO1xuICAgICAgICAgICAgdGFyZ2V0U2hpcC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJlc2V0IGRpcmVjdGlvbiBhZnRlciBwbGFjZW1lbnRcbiAgICAgICAgaWYgKHN0YXRlLmRpcmVjdGlvbiAhPT0gJ3InKSB7XG4gICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAncic7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0Qm9hcmRIb3Zlcihjb29yZHMsIHZhbGlkaXR5KSB7XG4gICAgICAgICAgICByZW1vdmVDZWxsSG92ZXIoKTtcbiAgICAgICAgICAgIHN0YXRlLmNvb3JkRGF0YS5jb29yZFNldCA9IGNvb3JkcztcbiAgICAgICAgICAgIHN0YXRlLmNvb3JkRGF0YS5pc1ZhbGlkID0gdmFsaWRpdHk7XG4gICAgICAgICAgICBhZGRDZWxsSG92ZXIoc3RhdGUuY29vcmREYXRhLmlzVmFsaWQpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRDZWxsSG92ZXIoaXNWYWxpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvb3JkRGF0YS5jb29yZFNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmNvb3JkRGF0YS5jb29yZFNldFtpXS5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGgtJHtzdGF0ZS5jb29yZERhdGEuY29vcmRTZXRbaV19YCk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaXMtdmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVDZWxsSG92ZXIoKSB7XG4gICAgICAgIGlmIChzdGF0ZS5jb29yZERhdGEuY29vcmRTZXQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb29yZERhdGEuY29vcmRTZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuY29vcmREYXRhLmNvb3JkU2V0W2ldLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGgtJHtzdGF0ZS5jb29yZERhdGEuY29vcmRTZXRbaV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gJ2NlbGwgcGxhY2VkJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZFNoaXBQbGFjZWQoKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkU2hpcC5jbGFzc0xpc3QgPSAnc2hpcCBwbGFjZWQnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvb3JkRGF0YS5jb29yZFNldC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaC0ke3N0YXRlLmNvb3JkRGF0YS5jb29yZFNldFtpXX1gKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gJ2NlbGwnO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5wbGFjaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkU2hpcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3RhdGUuY29vcmREYXRhID0ge2Nvb3JkU2V0OiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlU2hpcFBsYWNlZChuYW1lLCBkaXIsIGxlbmd0aCwgY29vcmRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBoLSR7Y29vcmRzW2ldfWApO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnY2VsbCBob3ZlciBpcy12YWxpZCc7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bGVuZ3RofS0ke25hbWV9YCk7XG4gICAgICAgIHN0YXRlLmNvb3JkRGF0YS5jb29yZFNldCA9IGNvb3JkcztcbiAgICAgICAgc3RhdGUuY29vcmREYXRhLmlzVmFsaWQgPSB0cnVlO1xuICAgICAgICBzdGF0ZS5kaXIgPSBkaXI7XG4gICAgfVxuXG4gICAgLy8gcGxheSBoZWxwZXIgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIG1ha2VQbGF5TGl2ZSgpIHtcbiAgICAgICAgcGxheUJ1dHRvbi5jaGlsZHJlblswXS5zcmMgPSAnLi9pY29ucy9wbGF5LnN2Zyc7XG4gICAgICAgIHBsYXlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheUJ1dHRvbi5hcmlhRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gdG9nZ2xlQ29tcHV0ZXJCb2FyZCgpIHtcbiAgICAgICAgY29uc29sZS5sb2coc3RhdGUuY29tcHV0ZXJCb2FyZEVuYWJsZWQpO1xuICAgICAgICBpZiAoc3RhdGUuY29tcHV0ZXJCb2FyZEVuYWJsZWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHN0YXRlLmNvbXB1dGVyQm9hcmRFbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUuY29tcHV0ZXJCb2FyZEVuYWJsZWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBzdGF0ZS5jb21wdXRlckJvYXJkRW5hYmxlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTaGlwVGFsbGllcyh0YWxseUNvbnRhaW5lciwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHBsYXllclR5cGU7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcGxheWVyVHlwZSA9ICdoJztcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICBwbGF5ZXJUeXBlID0gJ2MnO1xuICAgICAgICB9XG4gICAgICAgIG1ha2VTaGlwSWNvbnMocGxheWVyVHlwZSwgdGFsbHlDb250YWluZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhclNoaXBDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5SGl0KHBsYXllciwgY29vcmQsIGhpdCkge1xuICAgICAgICBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICBzdGF0ZS50YXJnZXRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtjb29yZH1gKTtcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIHN0YXRlLnRhcmdldENlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgaC0ke2Nvb3JkfWApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHN0YXRlLnRhcmdldENlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWhpdCkge1xuICAgICAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheVN1bmsocGxheWVyLCBuYW1lKSB7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIHBsYXllciA9ICdoJztcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgIHBsYXllciA9ICdjJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsYXllcn0tJHtuYW1lfWApO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUJ1ZmZlcihwbGF5ZXIsIGJ1ZmZlckNvb3Jkcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlckNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGlzcGxheUhpdChwbGF5ZXIsIGJ1ZmZlckNvb3Jkc1tpXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQWxlcnRCb3goKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gWydjYW5jZWwnLCAnY29uZmlybSddO1xuICAgICAgICBsZXQgYWxlcnRDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnI2FsZXJ0Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gY3JlYXRlLnNwYW4oJ1Jlc3RhcnQgZ2FtZT8nKTtcbiAgICAgICAgYWxlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBjcmVhdGUuZGl2KCcnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9MCA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gY3JlYXRlLmJ1dHRvbignJywgYCR7b3B0aW9uc1tpXX1gLCBgIyR7b3B0aW9uc1tpXX0tcmVzdGFydGApO1xuICAgICAgICAgICAgbGV0IGltYWdlID0gY3JlYXRlLmltZyhgLi9pY29ucy8ke29wdGlvbnNbaV19LnN2Z2AsIGAke29wdGlvbnNbaV19YCwgYCMke29wdGlvbnNbaV19YCk7XG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChidXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIGxldCBzY3JlZW4gPSBjcmVhdGUuZGl2KCcnLCAnLnNjcmVlbicpO1xuICAgICAgICBib2R5LmFwcGVuZChzY3JlZW4sIGFsZXJ0Q29udGFpbmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxlcnRCb3goKSB7XG4gICAgICAgIGxldCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJyk7XG4gICAgICAgIGxldCBhbGVydEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydCcpO1xuICAgICAgICBpZiAoYWxlcnRCb3ggIT09IG51bGwgJiYgc2NyZWVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzY3JlZW4ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzY3JlZW4pO1xuICAgICAgICAgICAgYWxlcnRCb3gucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChhbGVydEJveCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlbmQgZ2FtZVxuICAgIGZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gICAgICAgIHN0YXRlLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgZ2VuZXJhdGVHYW1lUmVzdWx0KHdpbm5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlR2FtZVJlc3VsdCh3aW5uZXIpIHtcbiAgICAgICAgbGV0IGFsZXJ0Q29udGFpbmVyID0gY3JlYXRlLmRpdignJywgJyNhbGVydCcpO1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHdpbm5lciA9PT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgdGV4dCA9ICdZb3Ugd2luISA9RCc7XG4gICAgICAgIH0gZWxzZSBpZiAod2lubmVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJDb21wdXRlciB3aW5zLiA9JyhcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dFNwYW4gPSBjcmVhdGUuc3Bhbih0ZXh0KTtcbiAgICAgICAgYWxlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xuICAgICAgICBsZXQgcmVzdGFydEJ1dHRvbiA9IGNyZWF0ZS5idXR0b24oJycsIGByZXN0YXJ0YCwgYCNyZXN0YXJ0LWdhbWVgKTtcbiAgICAgICAgbGV0IHJlc3RhcnRJbWFnZSA9IGNyZWF0ZS5pbWcoYC4vaWNvbnMvcmVzdGFydC5zdmdgLCBgcmVzdGFydGAsIGAjcmVzdGFydGApO1xuICAgICAgICByZXN0YXJ0QnV0dG9uLmFwcGVuZENoaWxkKHJlc3RhcnRJbWFnZSk7XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhcnRCdXR0b24pO1xuICAgICAgICBsZXQgc2NyZWVuID0gY3JlYXRlLmRpdignJywgJy5zY3JlZW4nKVxuICAgICAgICBib2R5LmFwcGVuZChzY3JlZW4sIGFsZXJ0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVjZWl2ZUNvb3JkRGF0YScsIHNldEJvYXJkSG92ZXIpOyAvLyBwdWJsaXNoZWQgYnkgZ2FtZS5qcyAocXVlcnlDb29yZERhdGEpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVjZWl2ZVNoaXBEYXRhJywgcmVtb3ZlU2hpcFBsYWNlZCk7IC8vIHB1Ymxpc2hlZCBieSBnYW1lLmpzIChxdWVyeVNoaXBEYXRhLCByZXBsYWNlVG9PcmlnaW5hbClcbiAgICBldmVudHMuc3Vic2NyaWJlKCdtYWtlUGxheUxpdmUnLCBtYWtlUGxheUxpdmUpOyAvLyBwdWJsaXNoZWQgYnkgY2xhc3Nlcy5qcyAoZ2FtZWJvYXJkLnBsYWNlU2hpcClcbiAgICBldmVudHMuc3Vic2NyaWJlKCdkaXNwbGF5QXR0YWNrJywgZGlzcGxheUhpdCk7IC8vIHB1Ymxpc2hlZCBieSBjbGFzc2VzLmpzIChnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdkaXNwbGF5U3VuaycsIGRpc3BsYXlTdW5rKTsgLy8gcHVibGlzaGVkIGJ5IGNsYXNzZXMuanMgKGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3dpbm5lcicsIGVuZEdhbWUpOyAvLyBwdWJsaXNoZWQgYnkgZ2FtZS5qcyAodGFrZVR1cm4pXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZGlzcGxheUJ1ZmZlcicsIGRpc3BsYXlCdWZmZXIpOyAvLyBwdWJsaXNoZWQgYnkgY2xhc3Nlcy5qcyAoZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndG9nZ2xlQ29tcHV0ZXJCb2FyZCcsIHRvZ2dsZUNvbXB1dGVyQm9hcmQpOyAvLyBwdWJsaXNoZWQgYnkgZ2FtZS5qcyAoY29tcHV0ZXJUdXJuKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgLy8gdXNlZCBieSBpbmRleC5qc1xuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdWk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCBpY29uc0FycmF5IGZyb20gJy4vc2NyaXB0cy9pY29ucy5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZS5qcyc7XG5pbXBvcnQgdWkgZnJvbSAnLi9zY3JpcHRzL3VpLmpzJztcblxuZ2FtZS5pbml0KCk7XG51aS5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=