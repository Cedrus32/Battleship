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
class Gameboard { // * (look at grid)
    constructor() { // ! where is grid being used?
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
        this.clearBoard();
        this.ships = [];
        this.replacing = undefined;
        this.shipsSunk = 0;
    }
    clearBoard() {
        for (let row in this.grid) {
            for (let cell in this.grid[row]) {
                this.grid[row][cell] = [];
            }
        }
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
            // this.markBoard(coord, 'x');
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
        } else if (!hit) {
            // this.markBoard(coord, 'o');
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
    markBoard(coord, mark) {
        let x = parseInt(coord[0]);
        let y = parseInt(coord[1]);
        this.grid[y][x] = mark;
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
                    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('placeShip', state.targetCell.id.split('-')[1], state.direction, state.selectedShip.id.split('-')[0], state.selectedShip.id.split('-')[1]); // subscribed by game.js
                    placeShipUI();
                } else if (!state.placing && e.target.classList.contains('placed')) {
                    state.placing = true;
                    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryShipData', state.targetCell.id.split('-')[1]); // subscribed by game.js
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
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('takeTurn', e.target.id.split('-')[1]); // subscribed by game.js
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
    function placeShipUI() {
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
    function replaceShipUI(name, dir, length, coords) {
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
            if (hit) {
                state.targetCell.classList.add('hit');
            } else if (!hit) {
                state.targetCell.classList.add('miss');
            }
        } else if (player === 'human') {
            let target = document.getElementById(`h-${coord}`);
            if (hit) {
                target.classList.add('hit');
            } else if (!hit && !target.classList.contains('miss')) {
                target.classList.add('miss');
            }
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
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('receiveShipData', replaceShipUI); // published by game.js (queryShipData, replaceToOriginal)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0M7QUFDZTtBQUNQO0FBQ0o7O0FBRWpDLDZEQUFTO0FBQ1QsMkRBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz9mMGQ4Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jbGFzc2VzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2ljb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR0xPQkFMIFZBUklBQkxFUyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1mb250LXNpemU6IDEwcHQ7XFxuICAgIC0tbWFpbi1zcGFjaW5nOiAydnc7XFxuICAgIC0tcGxheWVyLWFyZWE6IGNhbGMoY2FsYygxMDB2dyAtIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDQpKSAvIDIpO1xcbiAgICAtLXBsYXllci1mcjogY2FsYyh2YXIoLS1wbGF5ZXItYXJlYSkgLyAxNik7IC8qIDE1IGZvciAxMCs1IGNlbGxzICsrIDEgdG8gLzEzIGZvciBjZWxsIGdhcHMgKi9cXG4gICAgLS1jZWxsLWdhcDogY2FsYyh2YXIoLS1wbGF5ZXItZnIpIC8gMTMpO1xcblxcbiAgICAtLXNpZGViYXItc3BhY2luZzogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgIC0tc2lkZWJhci1hcmVhOiBjYWxjKHZhcigtLXNpZGViYXItc3BhY2luZykgKyBjYWxjKHZhcigtLXBsYXllci1mcikgKiA1KSArIGNhbGModmFyKC0tY2VsbC1nYXApICogNCkpO1xcbiAgICAtLXNoaXAtY2VsbDogdmFyKC0tcGxheWVyLWZyKTtcXG5cXG4gICAgLS1ib2FyZC1hcmVhOiBjYWxjKGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDEwKSArIGNhbGModmFyKC0tY2VsbC1nYXApICogOSkpO1xcbiAgICAtLWJvYXJkLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tbWFpbi1oZWlnaHQ6IGNhbGMoNS41dncgKyAxdncgKyB2YXIoLS1ib2FyZC1hcmVhKSArIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDIpICsgY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMikpO1xcbn1cXG5cXG4vKiBESVNQTEFZIEZMRVggKi9cXG5cXG5ib2R5LFxcbm1haW4sXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5zaGlwLFxcbi5ib2FyZCxcXG4ucm93LFxcbiNhbGVydCxcXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5LFxcbi5tZW51LFxcbi50YWxseSxcXG4uYm9hcmQsXFxuI2FsZXJ0IHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbi8qIERJU1BMQVkgR1JJRCAqL1xcblxcbiNodW1hbixcXG4jY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuI2h1bWFuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaWRlYmFyLWFyZWEpIHZhcigtLWJvYXJkLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcuICAgICAgIHRpdGxlJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2lkZWJhciBib2FyZCc7XFxufVxcblxcbiNjb21wdXRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tYm9hcmQtYXJlYSkgdmFyKC0tc2lkZWJhci1hcmVhKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgLidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2JvYXJkIHNpZGViYXInO1xcbn1cXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICB9XFxuXFxuICAgIC50YWxseSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIH1cXG5cXG4vKiBQT1NJVElPTklORyAqL1xcblxcbmJvZHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb21wdXRlciAudGl0bGUge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tZW51LFxcbiAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNoaXAsXFxuICAgICAgICAgICAgLmJvYXJkLFxcbiAgICAgICAgICAgIC5yb3cge1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLWNlbGwtZ2FwKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgIH1cXG5cXG4gICAgI2FsZXJ0LFxcbiAgICAuc2NyZWVuIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAjYWxlcnQge1xcbiAgICAgICAgdG9wOiBjYWxjKHZhcigtLW1haW4taGVpZ2h0KSAvIDIpO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgIC5zY3JlZW4ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC50YWxseSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGwge1xcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYm9hcmQtY2VsbCk7XFxuICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXBsYXllci1mcikgKiAyKTtcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiNyZXN0YXJ0LWdhbWUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciBpbWcge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgICAgIGJ1dHRvbjphY3RpdmUgaW1nIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIC5zY3JlZW4ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbi8qIENPTE9SUyAsIEZPTlRTICYgU0hBUElORyAqL1xcblxcbmJvZHksXFxuI2FsZXJ0LFxcbi5zY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjNmViO1xcbn1cXG5cXG4jYWxlcnQsXFxuLnRpdGxlIHtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zY3JlZW4ge1xcbiAgICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICBsaW5lLWhlaWdodDogNS41dnc7XFxufVxcblxcbiNhbGVydCBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjV2dztcXG59XFxuXFxuLnNoaXAgZGl2LFxcbi5jZWxsLFxcbiNhbGVydCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLmNlbGwsXFxuLmNlbGwuYXR0YWNrOm5vdCguY2VsbC5oaXQpLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwubWlzcyksXFxuI2FsZXJ0IHtcXG4gICAgYm9yZGVyOiBibHVlIDFweCBzb2xpZDtcXG59XFxuXFxuLmNlbGwuYXR0YWNrOm5vdCguY2VsbC5oaXQpLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwubWlzcykge1xcbiAgICBvcGFjaXR5OiAyNSU7XFxufVxcblxcbi5tZW51IC5zaGlwIGRpdixcXG4uY2VsbC5wbGFjZWQsXFxuLnNoaXAuc2VsZWN0ZWQgZGl2LFxcbi5zaGlwLnBsYWNlZCBkaXYsXFxuLmhvdmVyLmlzLXZhbGlkLFxcbi50YWxseSAuc2hpcCBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2hpcC5zZWxlY3RlZCBkaXYsXFxuLnNoaXAucGxhY2VkIGRpdixcXG4uaG92ZXIuaXMtdmFsaWQsXFxuLnRhbGx5IC5zaGlwIGRpdiB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDEzMSk7XFxuICAgIG9wYWNpdHk6IDE1JTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDEzMSk7XFxufVxcblxcbi5ob3Zlci5pcy1pbnZhbGlkLFxcbi5zdW5rIGRpdixcXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ob3Zlci5pcy12YWxpZCxcXG4uc3VuayBkaXYge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5oaXQge1xcbiAgICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixvRUFBb0U7SUFDcEUsMENBQTBDLEVBQUUsZ0RBQWdEO0lBQzVGLHVDQUF1Qzs7SUFFdkMsZ0RBQWdEO0lBQ2hELHFHQUFxRztJQUNyRyw2QkFBNkI7O0lBRTdCLDJFQUEyRTtJQUMzRSw4QkFBOEI7O0lBRTlCLGlIQUFpSDtBQUNySDs7QUFFQSxpQkFBaUI7O0FBRWpCOzs7Ozs7Ozs7SUFTSSxhQUFhO0FBQ2pCOztBQUVBOzs7OztJQUtJLGlCQUFpQjtBQUNyQjs7QUFFQSxpQkFBaUI7O0FBRWpCOztJQUVJLGFBQWE7SUFDYix1QkFBdUI7QUFDM0I7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsd0JBQXdCO0lBQ3hCO3dDQUNvQztBQUN4Qzs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCx3QkFBd0I7SUFDeEI7d0NBQ29DO0FBQ3hDOztJQUVJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKLGdCQUFnQjs7QUFFaEI7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztJQUVJO1FBQ0ksd0JBQXdCO0lBQzVCOztRQUVJO1lBQ0ksNkNBQTZDO1FBQ2pEOztRQUVBO1lBQ0ksZUFBZTtRQUNuQjs7UUFFQTs7WUFFSSwyQkFBMkI7UUFDL0I7O1lBRUk7OztnQkFHSSxvQkFBb0I7WUFDeEI7O0lBRVI7UUFDSSx1QkFBdUI7UUFDdkIsa0NBQWtDO0lBQ3RDOztJQUVBOztRQUVJLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlDQUFpQztRQUNqQyxTQUFTO1FBQ1QsZ0NBQWdDO1FBQ2hDLHVCQUF1QjtRQUN2QixtQkFBbUI7UUFDbkIsNEJBQTRCO1FBQzVCLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLE1BQU07UUFDTixPQUFPO0lBQ1g7O0FBRUosV0FBVzs7QUFFWDtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztJQUVJO1FBQ0ksNEJBQTRCO0lBQ2hDOztRQUVJOztZQUVJLHFDQUFxQztRQUN6Qzs7UUFFQTtZQUNJLG9DQUFvQztRQUN4Qzs7WUFFSTtnQkFDSSxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0Qjs7Z0JBRUk7OztvQkFHSSx3QkFBd0I7b0JBQ3hCLHVCQUF1QjtnQkFDM0I7O1FBRVI7WUFDSSx5QkFBeUI7WUFDekIsd0JBQXdCO1FBQzVCOztJQUVKO1FBQ0ksV0FBVztJQUNmOztRQUVJO1lBQ0ksa0NBQWtDO1lBQ2xDLFdBQVc7UUFDZjs7UUFFQTtZQUNJLHFCQUFxQjtRQUN6Qjs7WUFFSTtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7WUFDZjs7WUFFQTtnQkFDSSxzQkFBc0I7WUFDMUI7O1lBRUE7Z0JBQ0ksc0JBQXNCO1lBQzFCOztJQUVSO1FBQ0ksYUFBYTtRQUNiLFlBQVk7SUFDaEI7O0FBRUosNkJBQTZCOztBQUU3Qjs7O0lBR0kseUJBQXlCO0FBQzdCOztBQUVBOztJQUVJLFdBQVc7SUFDWCxzSEFBc0g7QUFDMUg7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxrQkFBa0I7QUFDdEI7O0FBRUE7OztJQUdJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7OztJQUlJLHNCQUFzQjtBQUMxQjs7QUFFQTs7SUFFSSxZQUFZO0FBQ2hCOztBQUVBOzs7Ozs7SUFNSSxzQkFBc0I7QUFDMUI7O0FBRUE7Ozs7SUFJSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksaUNBQWlDO0lBQ2pDLFlBQVk7SUFDWiw2QkFBNkI7QUFDakM7O0FBRUE7OztJQUdJLGdDQUFnQztJQUNoQyxZQUFZO0lBQ1osaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMIFZBUklBQkxFUyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1mb250LXNpemU6IDEwcHQ7XFxuICAgIC0tbWFpbi1zcGFjaW5nOiAydnc7XFxuICAgIC0tcGxheWVyLWFyZWE6IGNhbGMoY2FsYygxMDB2dyAtIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDQpKSAvIDIpO1xcbiAgICAtLXBsYXllci1mcjogY2FsYyh2YXIoLS1wbGF5ZXItYXJlYSkgLyAxNik7IC8qIDE1IGZvciAxMCs1IGNlbGxzICsrIDEgdG8gLzEzIGZvciBjZWxsIGdhcHMgKi9cXG4gICAgLS1jZWxsLWdhcDogY2FsYyh2YXIoLS1wbGF5ZXItZnIpIC8gMTMpO1xcblxcbiAgICAtLXNpZGViYXItc3BhY2luZzogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgIC0tc2lkZWJhci1hcmVhOiBjYWxjKHZhcigtLXNpZGViYXItc3BhY2luZykgKyBjYWxjKHZhcigtLXBsYXllci1mcikgKiA1KSArIGNhbGModmFyKC0tY2VsbC1nYXApICogNCkpO1xcbiAgICAtLXNoaXAtY2VsbDogdmFyKC0tcGxheWVyLWZyKTtcXG5cXG4gICAgLS1ib2FyZC1hcmVhOiBjYWxjKGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDEwKSArIGNhbGModmFyKC0tY2VsbC1nYXApICogOSkpO1xcbiAgICAtLWJvYXJkLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tbWFpbi1oZWlnaHQ6IGNhbGMoNS41dncgKyAxdncgKyB2YXIoLS1ib2FyZC1hcmVhKSArIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDIpICsgY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMikpO1xcbn1cXG5cXG4vKiBESVNQTEFZIEZMRVggKi9cXG5cXG5ib2R5LFxcbm1haW4sXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5zaGlwLFxcbi5ib2FyZCxcXG4ucm93LFxcbiNhbGVydCxcXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5LFxcbi5tZW51LFxcbi50YWxseSxcXG4uYm9hcmQsXFxuI2FsZXJ0IHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbi8qIERJU1BMQVkgR1JJRCAqL1xcblxcbiNodW1hbixcXG4jY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuI2h1bWFuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaWRlYmFyLWFyZWEpIHZhcigtLWJvYXJkLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICcuICAgICAgIHRpdGxlJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgICAnc2lkZWJhciBib2FyZCc7XFxufVxcblxcbiNjb21wdXRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tYm9hcmQtYXJlYSkgdmFyKC0tc2lkZWJhci1hcmVhKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAndGl0bGUgLidcXG4gICAgICAgICAgICAgICAgICAgICAgICAgJ2JvYXJkIHNpZGViYXInO1xcbn1cXG5cXG4gICAgLnRpdGxlIHtcXG4gICAgICAgIGdyaWQtYXJlYTogdGl0bGU7XFxuICAgIH1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICB9XFxuXFxuICAgIC50YWxseSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIH1cXG5cXG4vKiBQT1NJVElPTklORyAqL1xcblxcbmJvZHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgICAgICAudGl0bGUge1xcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb21wdXRlciAudGl0bGUge1xcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGVuZDtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5tZW51LFxcbiAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNoaXAsXFxuICAgICAgICAgICAgLmJvYXJkLFxcbiAgICAgICAgICAgIC5yb3cge1xcbiAgICAgICAgICAgICAgICBnYXA6IHZhcigtLWNlbGwtZ2FwKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgIH1cXG5cXG4gICAgI2FsZXJ0LFxcbiAgICAuc2NyZWVuIHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgfVxcblxcbiAgICAjYWxlcnQge1xcbiAgICAgICAgdG9wOiBjYWxjKHZhcigtLW1haW4taGVpZ2h0KSAvIDIpO1xcbiAgICAgICAgbGVmdDogNTAlO1xcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgIC5zY3JlZW4ge1xcbiAgICAgICAgdG9wOiAwO1xcbiAgICAgICAgbGVmdDogMDtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC50YWxseSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGwge1xcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYm9hcmQtY2VsbCk7XFxuICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXBsYXllci1mcikgKiAyKTtcXG4gICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGJ1dHRvbiNyZXN0YXJ0LWdhbWUge1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpbWcge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgICAgIGJ1dHRvbjpob3ZlciBpbWcge1xcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIFxcbiAgICAgICAgICAgIGJ1dHRvbjphY3RpdmUgaW1nIHtcXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjk1KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgIC5zY3JlZW4ge1xcbiAgICAgICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgfVxcblxcbi8qIENPTE9SUyAsIEZPTlRTICYgU0hBUElORyAqL1xcblxcbmJvZHksXFxuI2FsZXJ0LFxcbi5zY3JlZW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjFjNmViO1xcbn1cXG5cXG4jYWxlcnQsXFxuLnRpdGxlIHtcXG4gICAgY29sb3I6IGJsdWU7XFxuICAgIGZvbnQtZmFtaWx5OiAnTHVjaWRhIFNhbnMnLCAnTHVjaWRhIFNhbnMgUmVndWxhcicsICdMdWNpZGEgR3JhbmRlJywgJ0x1Y2lkYSBTYW5zIFVuaWNvZGUnLCBHZW5ldmEsIFZlcmRhbmEsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5zY3JlZW4ge1xcbiAgICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbi50aXRsZSB7XFxuICAgIGZvbnQtc2l6ZTogNXZ3O1xcbiAgICBsaW5lLWhlaWdodDogNS41dnc7XFxufVxcblxcbiNhbGVydCBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAydnc7XFxuICAgIGxpbmUtaGVpZ2h0OiAyLjV2dztcXG59XFxuXFxuLnNoaXAgZGl2LFxcbi5jZWxsLFxcbiNhbGVydCB7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwJTtcXG59XFxuXFxuLmNlbGwsXFxuLmNlbGwuYXR0YWNrOm5vdCguY2VsbC5oaXQpLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwubWlzcyksXFxuI2FsZXJ0IHtcXG4gICAgYm9yZGVyOiBibHVlIDFweCBzb2xpZDtcXG59XFxuXFxuLmNlbGwuYXR0YWNrOm5vdCguY2VsbC5oaXQpLFxcbi5jZWxsLmF0dGFjazpub3QoLmNlbGwubWlzcykge1xcbiAgICBvcGFjaXR5OiAyNSU7XFxufVxcblxcbi5tZW51IC5zaGlwIGRpdixcXG4uY2VsbC5wbGFjZWQsXFxuLnNoaXAuc2VsZWN0ZWQgZGl2LFxcbi5zaGlwLnBsYWNlZCBkaXYsXFxuLmhvdmVyLmlzLXZhbGlkLFxcbi50YWxseSAuc2hpcCBkaXYge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbn1cXG5cXG4uc2hpcC5zZWxlY3RlZCBkaXYsXFxuLnNoaXAucGxhY2VkIGRpdixcXG4uaG92ZXIuaXMtdmFsaWQsXFxuLnRhbGx5IC5zaGlwIGRpdiB7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG59XFxuXFxuLm1pc3Mge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDEzMSk7XFxuICAgIG9wYWNpdHk6IDE1JTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDEzMSk7XFxufVxcblxcbi5ob3Zlci5pcy1pbnZhbGlkLFxcbi5zdW5rIGRpdixcXG4uaGl0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XFxuICAgIG9wYWNpdHk6IDUwJTtcXG4gICAgYm9yZGVyLWNvbG9yOiByZWQ7XFxufVxcblxcbi5ob3Zlci5pcy12YWxpZCxcXG4uc3VuayBkaXYge1xcbiAgICBvcGFjaXR5OiA1MCU7XFxufVxcblxcbi5oaXQge1xcbiAgICBvcGFjaXR5OiA3NSU7XFxufVxcblxcbmJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXI6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4OyBtYXJnaW46IDBweDtcXG5cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG4vKiBTRUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogY29ycmVjdCBmb250IHNpemUsIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzICovXFxuLyogd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGNvbnRleHRzICovXFxuLyogaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYGhlYWRlcmAgZWxlbWVudHMgYWNyb3NzIGJyb3N3ZXJzICovXFxuXFxuaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi8qIFRFWFQtTEVWRUwgU0VNQU5USUNTID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgZ3JheSBiZyBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIDEuIHJlbW92ZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gKi9cXG4vKiAyLiBhZGQgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIFNhZmFyaSAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBTYWZhcmkgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG5cXG4vKiBFTUJFRERFRCBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbi8qIEZPUk1TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBjaGFuZ2UgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gcmVtb3ZlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBzaG93IG92ZXJmbG93IGluIElFLCBFZGdlICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qIHJlbW92ZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBJRSAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogY29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBib3JkZXIsIHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiByZXN0b3JlIGZvY3VzIHN0eWxlcyB1bnNldCBieSBwcmV2aW91cyBydWxlIF5eICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcblxcbi8qIE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQzs7QUFFckM7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVksRUFBRSxXQUFXOztJQUV6QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsYUFBYTs7SUFFYix3QkFBd0I7QUFDNUI7OztBQUdBLHVDQUF1Qzs7QUFFdkMsK0NBQStDO0FBQy9DLDRDQUE0QztBQUM1QyxtQ0FBbUM7O0FBRW5DO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSw4REFBOEQ7O0FBRTlEO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQSx5REFBeUQ7O0FBRXpEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsbURBQW1EOztBQUVuRCw0Q0FBNEM7O0FBRTVDO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLDBDQUEwQztBQUMxQyxzRUFBc0U7O0FBRXRFO0lBQ0ksbUJBQW1CLEVBQUUsTUFBTTtJQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDN0M7O0FBRUEsb0RBQW9EOztBQUVwRDs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUEsMENBQTBDOztBQUUxQztJQUNJLGNBQWM7QUFDbEI7OztBQUdBLCtDQUErQzs7QUFFL0Msa0RBQWtEOztBQUVsRDtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0Esb0NBQW9DOztBQUVwQywwQ0FBMEM7QUFDMUMsMkNBQTJDOztBQUUzQzs7O0lBR0ksb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtJQUN2QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ3JCOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBLDhEQUE4RDs7QUFFOUQ7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBLGtFQUFrRTs7QUFFbEU7Ozs7SUFJSSwwQkFBMEI7QUFDOUI7O0FBRUEsNENBQTRDOztBQUU1Qzs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUEsbURBQW1EOztBQUVuRDs7OztJQUlJLDhCQUE4QjtBQUNsQzs7O0FBR0EsbUNBQW1DOztBQUVuQyxpQ0FBaUM7O0FBRWpDO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplLCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyAqL1xcbi8qIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYCBjb250ZXh0cyAqL1xcbi8qIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaSAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jYW5jZWwuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NhbmNlbC5zdmdcIixcblx0XCIuL2NvbmZpcm0uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NvbmZpcm0uc3ZnXCIsXG5cdFwiLi9wbGF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9wbGF5LnN2Z1wiLFxuXHRcIi4vcGxheV9ncmF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9wbGF5X2dyYXkuc3ZnXCIsXG5cdFwiLi9yZXN0YXJ0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9yZXN0YXJ0LnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyBcXFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvXCI7IiwiLy8gJiBwdWJzdWIgZXZlbnRzIG1hbmFnZXJcblxuY29uc3QgZXZlbnRzID0gKCgpID0+IHtcbiAgICBsZXQgX2V2ZW50cyA9IHt9O1xuXG4gICAgLy8gc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX2V2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH07XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFNVQlNDUklCSU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgIH1cblxuICAgIC8vIHVuc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudE5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpO1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKChfZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMSksIDEpO1xuICAgIH1cblxuICAgIC8vIHB1Ymxpc2ggZXZlbnQgd2l0aCBkYXRhXG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIC4uLmRhdGEpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmRhdGEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBVQkxJU0hJTkcgdG8gJHtldmVudE5hbWV9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgZnVuY3Rpb24gdmlld0V2ZW50cygpIHtcbiAgICAgICAgY29uc29sZS5sb2coX2V2ZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICB1bnN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgdmlld0V2ZW50cyxcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5cbi8vIENMQVNTRVNcbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCA9IG51bGwsIGRpciA9IG51bGwsIG5hbWUgPSBudWxsLCBjb29yZHMgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLmRpciA9IGRpcjtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIH1cblxuICAgIC8vIHNldHRlcnNcbiAgICBsb2dIaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICBjb25zb2xlLmxvZygnc2hpcCBoaXRzOicsIHRoaXMuaGl0cyk7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ3NoaXAgc3VuazonLCB0aGlzLnN1bmspXG4gICAgfVxuICAgIGlzUGxhY2VkKCkge1xuICAgICAgICB0aGlzLnBsYWNlZCA9IHRydWU7XG4gICAgfVxufVxuY2xhc3MgR2FtZWJvYXJkIHsgLy8gKiAobG9vayBhdCBncmlkKVxuICAgIGNvbnN0cnVjdG9yKCkgeyAvLyAhIHdoZXJlIGlzIGdyaWQgYmVpbmcgdXNlZD9cbiAgICAgICAgdGhpcy5ncmlkID0gW1tbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1dO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMucmVwbGFjaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnNoaXBzU3VuayA9IDA7XG4gICAgfVxuXG4gICAgLy8gZ2V0dGVyc1xuICAgIGdldFNoaXAodGFyZ2V0Q29vcmQpIHtcbiAgICAgICAgZm9yIChsZXQgc2hpcCBpbiB0aGlzLnNoaXBzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjb29yZCBpbiB0aGlzLnNoaXBzW3NoaXBdLmNvb3Jkcykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzW3NoaXBdLmNvb3Jkc1tjb29yZF0gPT09IHRhcmdldENvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBzW3NoaXBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRDb29yZHMoc3RhcnRDb29yZCwgZGlyLCBzaGlwTGVuKSB7XG4gICAgICAgIHNoaXBMZW4gPSBwYXJzZUludChzaGlwTGVuKTtcbiAgICAgICAgY29uc29sZS5sb2coc3RhcnRDb29yZCwgZGlyLCBzaGlwTGVuKTtcbiAgICAgICAgbGV0IGNvb3JkU2V0ID0gW3N0YXJ0Q29vcmRdO1xuICAgICAgICBsZXQgeFBvc2l0aW9uID0gcGFyc2VJbnQoc3RhcnRDb29yZFswXSk7XG4gICAgICAgIGxldCB5UG9zaXRpb24gPSBwYXJzZUludChzdGFydENvb3JkWzFdKTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHNoaXBMZW4gLSAxKSB7XG4gICAgICAgICAgICBzd2l0Y2goZGlyKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAndSc6XG4gICAgICAgICAgICAgICAgICAgIHlQb3NpdGlvbiAtPSAxO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdkJzpcbiAgICAgICAgICAgICAgICAgICAgeVBvc2l0aW9uICs9IDE7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2wnOlxuICAgICAgICAgICAgICAgICAgICB4UG9zaXRpb24gLT0gMTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgICAgICAgICAgIHhQb3NpdGlvbiArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld0Nvb3JkID0gYCR7eFBvc2l0aW9ufSR7eVBvc2l0aW9ufWA7XG4gICAgICAgICAgICBzd2l0Y2godHJ1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgKGRpciA9PT0gJ3UnIHx8IGRpciA9PT0gJ2wnKTpcbiAgICAgICAgICAgICAgICAgICAgY29vcmRTZXQudW5zaGlmdChuZXdDb29yZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgKGRpciA9PT0gJ2QnIHx8IGRpciA9PT0gJ3InKTpcbiAgICAgICAgICAgICAgICAgICAgY29vcmRTZXQucHVzaChuZXdDb29yZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkU2V0O1xuICAgIH1cbiAgICBnZXRCdWZmZXIoc2hpcE9iamVjdCkge1xuICAgICAgICBsZXQgYnVmZmVyU2V0ID0gW107XG4gICAgICAgIGJ1ZmZlclNldC5wdXNoKC4uLmdldEVuZHMoc2hpcE9iamVjdC5jb29yZHNbMF0sIHNoaXBPYmplY3QuY29vcmRzW3NoaXBPYmplY3QubGVuZ3RoIC0gMV0sIHNoaXBPYmplY3QuZGlyKSk7XG4gICAgICAgIGJ1ZmZlclNldC5wdXNoKC4uLmdldFNpZGVzKHNoaXBPYmplY3QuY29vcmRzLCBzaGlwT2JqZWN0LmRpciwgc2hpcE9iamVjdC5sZW5ndGgpKTtcblxuICAgICAgICBidWZmZXJTZXQgPSBidWZmZXJTZXQuZmlsdGVyKGNvb3JkID0+IGNvb3JkLmxlbmd0aCA8IDMpO1xuICAgICAgICByZXR1cm4gYnVmZmVyU2V0O1xuXG4gICAgICAgIGZ1bmN0aW9uIGdldEVuZHMoc3RhcnRDb29yZCwgZW5kQ29vcmQsIGRpcmVjdGlvbikge1xuICAgICAgICAgICAgbGV0IGJ1ZmZlckNvb3JkcyA9IFtdO1xuICAgICAgICAgICAgbGV0IHggPSBwYXJzZUludChzdGFydENvb3JkWzBdKTtcbiAgICAgICAgICAgIGxldCB5ID0gcGFyc2VJbnQoc3RhcnRDb29yZFsxXSk7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnZCcgfHwgZGlyZWN0aW9uID09PSAndScpIHtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4fSR7eSAtIDF9YCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCAtIDF9JHt5IC0gMX1gKTtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4ICsgMX0ke3kgLSAxfWApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaXJlY3Rpb24gPT09ICdsJyB8fCBkaXJlY3Rpb24gPT09ICdyJykge1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggLSAxfSR7eX1gKTtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4IC0gMX0ke3kgLSAxfWApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggLSAxfSR7eSArIDF9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4ID0gcGFyc2VJbnQoZW5kQ29vcmRbMF0pO1xuICAgICAgICAgICAgeSA9IHBhcnNlSW50KGVuZENvb3JkWzFdKTtcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdkJyB8fCBkaXJlY3Rpb24gPT09ICd1Jykge1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3h9JHt5ICsgMX1gKTtcbiAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4IC0gMX0ke3kgKyAxfWApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggKyAxfSR7eSArIDF9YCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRpcmVjdGlvbiA9PT0gJ2wnIHx8IGRpcmVjdGlvbiA9PT0gJ3InKSB7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCArIDF9JHt5fWApO1xuICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggKyAxfSR7eSAtIDF9YCk7XG4gICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCArIDF9JHt5ICsgMX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBidWZmZXJDb29yZHM7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gZ2V0U2lkZXMoY29vcmRzLCBkaXJlY3Rpb24sIGxlbmd0aCkge1xuICAgICAgICAgICAgbGV0IGJ1ZmZlckNvb3JkcyA9IFtdO1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBsZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGNvb3Jkc1tpXVswXSlcbiAgICAgICAgICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGNvb3Jkc1tpXVsxXSk7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2QnIHx8IGRpcmVjdGlvbiA9PT0gJ3UnKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ1ZmZlckNvb3Jkcy5wdXNoKGAke3ggLSAxfSR7eX1gKTtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eCArIDF9JHt5fWApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnbCcgfHwgZGlyZWN0aW9uID09PSAncicpIHtcbiAgICAgICAgICAgICAgICAgICAgYnVmZmVyQ29vcmRzLnB1c2goYCR7eH0ke3kgLSAxfWApO1xuICAgICAgICAgICAgICAgICAgICBidWZmZXJDb29yZHMucHVzaChgJHt4fSR7eSArIDF9YCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBidWZmZXJDb29yZHM7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyByZXNldHRlcnNcbiAgICByZW1vdmVTaGlwKHNoaXBOYW1lKSB7XG4gICAgICAgIGZvciAobGV0IHNoaXAgaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNbc2hpcF0ubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwcy5sZW5ndGggPT09IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBsYWNpbmcgPSB0aGlzLnNoaXBzW3NoaXBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnNwbGljZShzaGlwLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXNldEJvYXJkKCkge1xuICAgICAgICB0aGlzLmNsZWFyQm9hcmQoKTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLnJlcGxhY2luZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsgPSAwO1xuICAgIH1cbiAgICBjbGVhckJvYXJkKCkge1xuICAgICAgICBmb3IgKGxldCByb3cgaW4gdGhpcy5ncmlkKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjZWxsIGluIHRoaXMuZ3JpZFtyb3ddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ncmlkW3Jvd11bY2VsbF0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGJvb2xzXG4gICAgc2V0SXNWYWxpZChjb29yZFNldCkge1xuICAgICAgICBmb3IgKGxldCBjb29yZCBpbiBjb29yZFNldCkge1xuICAgICAgICAgICAgaWYgKGNvb3JkU2V0W2Nvb3JkXS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7Y29vcmRTZXRbY29vcmRdfSBvdXRzaWRlIGJvdW5kc2ApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB4ID0gcGFyc2VJbnQoY29vcmRTZXRbY29vcmRdWzBdKTtcbiAgICAgICAgICAgIGxldCB5ID0gcGFyc2VJbnQoY29vcmRTZXRbY29vcmRdWzFdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gaW4gdGhpcy5zaGlwcykge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwID0gdGhpcy5zaGlwc1tpdGVtXTtcbiAgICAgICAgICAgICAgICBsZXQgeE1pbiA9IHBhcnNlSW50KHNoaXAuY29vcmRzWzBdWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgbGV0IHhNYXggPSBwYXJzZUludChzaGlwLmNvb3Jkc1tzaGlwLmNvb3Jkcy5sZW5ndGggLSAxXVswXSkgKyAxO1xuICAgICAgICAgICAgICAgIGxldCB5TWluID0gcGFyc2VJbnQoc2hpcC5jb29yZHNbMF1bMV0pIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeU1heCA9IHBhcnNlSW50KHNoaXAuY29vcmRzW3NoaXAuY29vcmRzLmxlbmd0aCAtIDFdWzFdKSArIDE7XG4gICAgICAgICAgICAgICAgaWYgKHggPj0geE1pbiAmJiB4IDw9IHhNYXggJiYgeSA+PSB5TWluICYmIHkgPD0geU1heCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHtjb29yZFNldFtjb29yZF19IHRvbyBjbG9zZSB0byBwbGFjZWQgc2hpcGApO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpc0hpdChhdHRhY2tDb29yZCkge1xuICAgICAgICBmb3IgKGxldCBzaGlwIGluIHRoaXMuc2hpcHMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNvb3JkIGluIHRoaXMuc2hpcHNbc2hpcF0uY29vcmRzKSB7XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFja0Nvb3JkID09PSB0aGlzLnNoaXBzW3NoaXBdLmNvb3Jkc1tjb29yZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0cnVlLCB0aGlzLnNoaXBzW3NoaXBdXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgaXNMb3NlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcHNTdW5rID09PSB0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwbGFjZW1lbnRcbiAgICBwbGFjZVNoaXAoc3RhcnRDb29yZCwgZGlyLCBzaGlwTGVuLCBzaGlwTmFtZSkge1xuICAgICAgICBzaGlwTGVuID0gcGFyc2VJbnQoc2hpcExlbik7XG4gICAgICAgIGxldCBjb29yZFNldCA9IHRoaXMuZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpciwgc2hpcExlbik7IC8vIHVzZWQgYnkgY29tcHV0ZXIgQUkgdG8gZ2VuZXJhdGUgc2hpcCBwbGFjZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuc2V0SXNWYWxpZChjb29yZFNldCkpIHsgICAgLy8gdXNlZCBieSBjb21wdXRlciBBSSB0byB2YXJpZnkgcGxhY2VtZW50IHZhbGlkaXR5XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobWFrZVNoaXAoc2hpcExlbiwgZGlyLCBzaGlwTmFtZSwgY29vcmRTZXQpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICAvLyB1c2VkIGJ5IGNvbXB1dGVyIEFJIHRvIGNvbnRyb2wgcGxhY2VtZW50IGxvb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8gXCJcIlxuICAgIH1cbiAgICByZXBsYWNlU2hpcFRvT3JpZ2luYWwoKSB7XG4gICAgICAgIHRoaXMuc2hpcHMucHVzaCh0aGlzLnJlcGxhY2luZyk7XG4gICAgICAgIHRoaXMucmVwbGFjaW5nID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIC8vIGF0dGFja3NcbiAgICByZWNlaXZlQXR0YWNrKHBsYXllciwgY29vcmQpIHtcbiAgICAgICAgbGV0IG91dGNvbWUgPSB0aGlzLmlzSGl0KGNvb3JkKTtcbiAgICAgICAgbGV0IGhpdCA9IG91dGNvbWVbMF07XG4gICAgICAgIGxldCBzaGlwID0gb3V0Y29tZVsxXTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgLy8gdGhpcy5tYXJrQm9hcmQoY29vcmQsICd4Jyk7XG4gICAgICAgICAgICBzaGlwLmxvZ0hpdCgpO1xuICAgICAgICAgICAgaWYgKHNoaXAuc3Vuaykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNTdW5rICs9IDE7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Rpc3BsYXlTdW5rJywgcGxheWVyLCBzaGlwLm5hbWUpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9IHRoaXMuZ2V0QnVmZmVyKHNoaXApO1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2FkZEJ1ZmZlclRvQ29tcHV0ZXJBdHRhY2tzJywgYnVmZmVyKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdkaXNwbGF5QnVmZmVyJywgcGxheWVyLCBidWZmZXIpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhpdCkge1xuICAgICAgICAgICAgLy8gdGhpcy5tYXJrQm9hcmQoY29vcmQsICdvJyk7XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2Rpc3BsYXlBdHRhY2snLCBwbGF5ZXIsIGNvb3JkLCBoaXQpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIGxldCBzdW5rO1xuICAgICAgICAgICAgaWYgKHNoaXAgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHN1bmsgPSBzaGlwLnN1bms7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncmVjZWl2ZUF0dGFja1Jlc3VsdCcsIHN1bmssIGhpdCwgY29vcmQpOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgfVxuICAgIH1cbiAgICBtYXJrQm9hcmQoY29vcmQsIG1hcmspIHtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChjb29yZFswXSk7XG4gICAgICAgIGxldCB5ID0gcGFyc2VJbnQoY29vcmRbMV0pO1xuICAgICAgICB0aGlzLmdyaWRbeV1beF0gPSBtYXJrO1xuICAgIH1cbn1cbmNsYXNzIEh1bWFuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ2h1bWFuJztcbiAgICAgICAgdGhpcy5ib2FyZCA9IG1ha2VHYW1lYm9hcmQoKTtcbiAgICB9XG5cbiAgICAvLyBhdHRhY2tcbiAgICBzZW5kQXR0YWNrKHBsYXllciwgY29vcmQsIGJvYXJkKSB7XG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2socGxheWVyLCBjb29yZCk7XG4gICAgfVxufVxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBIdW1hbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEh1bWFuKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NvbXB1dGVyJztcbiAgICAgICAgdGhpcy5hdHRhY2tzTWFkZSA9IFtdO1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0ge21vZGU6ICdzZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgfVxuXG4gICAgLy8gcGxhY2VtZW50XG4gICAgcmFuZG9taXplU2hpcHMoKSB7XG4gICAgICAgIGxldCBhdmFpbFNoaXBzID0gW1s1LCAnYWNjJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFs0LCAnYnMnXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzMsICdjcnVzJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFsyLCAnZGVzdDInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MSddLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbMSwgJ3N1YjInXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgWzEsICdzdWIxJ10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgbGV0IGRpcnMgPSBbJ3UnLCAnZCcsICdsJywgJ3InXTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChhdmFpbFNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzaGlwTGVuID0gYXZhaWxTaGlwc1swXVswXTtcbiAgICAgICAgICAgIGxldCBzaGlwTmFtZSA9IGF2YWlsU2hpcHNbMF1bMV07XG4gICAgICAgICAgICBhdmFpbFNoaXBzLnNoaWZ0KCk7XG5cbiAgICAgICAgICAgIGxldCBkaXIgPSBkaXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcnMubGVuZ3RoKV07XG5cbiAgICAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZCA9ICcnO1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgICAgICAgICBjb29yZCArPSBgJHtpbmRleH1gO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0aGlzLmJvYXJkLnBsYWNlU2hpcChjb29yZCwgZGlyLCBzaGlwTGVuLCBzaGlwTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBldmVudHMucHVibGlzaCgnbWFrZVBsYXlMaXZlJywgJycpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgfVxuXG4gICAgLy8gYXR0YWNrIGRyaXZlcnNcbiAgICBtYWtlQXR0YWNrKGJvYXJkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3RyYXRlZ3kubW9kZSk7XG4gICAgICAgIGlmICh0aGlzLnN0cmF0ZWd5Lm1vZGUgPT09ICdzZWFyY2gnKSB7XG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZUF0dGFjayhib2FyZCk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5zdHJhdGVneS5tb2RlID09PSAnaHVudCcgfHwgdGhpcy5zdHJhdGVneS5tb2RlID09PSAndGFyZ2V0Jykge1xuICAgICAgICAgICAgdGhpcy50YXJnZXRBdHRhY2soYm9hcmQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJhbmRvbWl6ZUF0dGFjayhib2FyZCkge1xuICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKCF2YWxpZCkge1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gJyc7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCk7XG4gICAgICAgICAgICAgICAgY29vcmQgKz0gYCR7aW5kZXh9YDtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYXR0YWNrc01hZGUuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrc01hZGUucHVzaChjb29yZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQXR0YWNrKCdodW1hbicsIGNvb3JkLCBib2FyZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFyZ2V0QXR0YWNrKGJvYXJkKSB7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAoIXZhbGlkKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0Q29vcmQ7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJhdGVneS5kaXJlY3Rpb24gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRhcmdldENvb3JkID0gdGhpcy5zdHJhdGVneS50YXJnZXRzLnNoaWZ0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc3RyYXRlZ3kudGFyZ2V0c1swXS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Q29vcmQgPSB0aGlzLnN0cmF0ZWd5LnRhcmdldHNbMF0uc2hpZnQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0Q29vcmQgPSB0aGlzLnN0cmF0ZWd5LnRhcmdldHNbMV0uc2hpZnQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXR0YWNrc01hZGUsIHRhcmdldENvb3JkLmxlbmd0aCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuYXR0YWNrc01hZGUuaW5jbHVkZXModGFyZ2V0Q29vcmQpICYmIHRhcmdldENvb3JkLmxlbmd0aCA8IDMpIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tzTWFkZS5wdXNoKHRhcmdldENvb3JkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRBdHRhY2soJ2h1bWFuJywgdGFyZ2V0Q29vcmQsIGJvYXJkKTtcbiAgICAgICAgICAgIH0gIFxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXR0YWNrc01hZGUpO1xuICAgIH1cbiAgICBcbiAgICAvLyBhdHRhY2sgaGVscGVyc1xuICAgIHJlY2VpdmVBdHRhY2tSZXN1bHQoc3VuaywgaGl0LCBjb29yZCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygncmVjZWl2ZUF0dGFja1Jlc3VsdHMoKScpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdW5rLCBoaXQsIGNvb3JkKTtcbiAgICAgICAgaWYgKHN1bmspIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXR0YWNrc01hZGUpO1xuICAgICAgICAgICAgdGhpcy5yZXNldFN0cmF0ZWd5KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoaGl0ICYmIHRoaXMuc3RyYXRlZ3kubW9kZSA9PT0gJ3NlYXJjaCcpIHsgLy8gZmlyc3QgaGl0LCBubyBkaXJlY3Rpb24gZm91bmRcbiAgICAgICAgICAgICAgICB0aGlzLmh1bnRTdHJhdGVneShjb29yZCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhpdCAmJiB0aGlzLnN0cmF0ZWd5Lm1vZGUgPT09ICdodW50JykgeyAvLyBzZWNvbmQgaGl0LCBjaGFuZ2UgbW9kZSB0byB0YXJnZXRcbiAgICAgICAgICAgICAgICB0aGlzLnRhcmdldFN0cmF0ZWd5KGNvb3JkKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWhpdCAmJiB0aGlzLnN0cmF0ZWd5Lm1vZGUgPT09ICd0YXJnZXQnKSB7IC8vIGVkZ2UgcmVhY2hlZCwgY2xlYXIgcHJldmlvdXMgY2VsbHNcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnZWRnZSByZWFjaGVkLCBjbGVhciBwcmV2aW91cyBjZWxscycpO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyYXRlZ3kudGFyZ2V0c1swXSA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3RyYXRlZ3kpO1xuICAgIH1cbiAgICBodW50U3RyYXRlZ3koY29vcmQpIHsgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdmaXJzdCBoaXQsIG5vIGRpcmVjdGlvbiBmb3VuZCcpO1xuICAgICAgICB0aGlzLnN0cmF0ZWd5Lm1vZGUgPSAnaHVudCc7XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kuc3RhcnRDb29yZCA9IGNvb3JkO1xuICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KCcnKVswXSk7XG4gICAgICAgIGxldCB5ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoJycpWzFdKTtcbiAgICAgICAgbGV0IGNvb3JkQ2hhbmdlcyA9IFtbeCwgeSAtIDFdLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbeCArIDEsIHldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt4LCB5ICsgMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3ggLSAxLCB5XSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBjb29yZCBpbiBjb29yZENoYW5nZXMpIHtcbiAgICAgICAgICAgIGlmICgoY29vcmRDaGFuZ2VzW2Nvb3JkXVswXSA+PSAwICYmIGNvb3JkQ2hhbmdlc1tjb29yZF1bMF0gPD0gOSkgJiYgKGNvb3JkQ2hhbmdlc1tjb29yZF1bMV0gPj0gMCAmJiBjb29yZENoYW5nZXNbY29vcmRdWzFdIDw9IDkpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdHJhdGVneS50YXJnZXRzLnB1c2goYCR7Y29vcmRDaGFuZ2VzW2Nvb3JkXVswXX0ke2Nvb3JkQ2hhbmdlc1tjb29yZF1bMV19YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGFyZ2V0U3RyYXRlZ3koY29vcmQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3NlY29uZCBoaXQsIGNoYW5nZSBtb2RlIHRvIHRhcmdldCcpO1xuICAgICAgICB0aGlzLnN0cmF0ZWd5Lm1vZGUgPSAndGFyZ2V0JztcbiAgICAgICAgdGhpcy5zdHJhdGVneS50YXJnZXRzID0gW107XG4gICAgICAgIHRoaXMudXBkYXRlRGlyZWN0aW9uKHRoaXMuc3RyYXRlZ3kuc3RhcnRDb29yZCwgY29vcmQpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRhcmdldENlbGxzKHRoaXMuc3RyYXRlZ3kuZGlyZWN0aW9uKTtcbiAgICB9XG4gICAgdXBkYXRlRGlyZWN0aW9uKGZpcnN0Q29vcmQsIHNlY29uZENvb3JkKSB7XG4gICAgICAgIGxldCB4YSA9IHBhcnNlSW50KGZpcnN0Q29vcmRbMF0pO1xuICAgICAgICBsZXQgeGIgPSBwYXJzZUludChzZWNvbmRDb29yZFswXSk7XG4gICAgICAgIGxldCB5YSA9IHBhcnNlSW50KGZpcnN0Q29vcmRbMV0pO1xuICAgICAgICBsZXQgeWIgPSBwYXJzZUludChzZWNvbmRDb29yZFsxXSk7XG4gICAgICAgIGlmICh4YSAtIHhiID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0cmF0ZWd5LmRpcmVjdGlvbiA9ICd2JztcbiAgICAgICAgfSBlbHNlIGlmICh5YSAtIHliID09PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnN0cmF0ZWd5LmRpcmVjdGlvbiA9ICdoJztcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVUYXJnZXRDZWxscyhkaXJlY3Rpb24pIHtcbiAgICAgICAgbGV0IHByZXZpb3VzID0gW107XG4gICAgICAgIGxldCBuZXh0ID0gW107XG4gICAgICAgIGlmIChkaXJlY3Rpb24gPT09ICdoJykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJzZUludCh0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmRbMF0pOyBpKyspIHtcbiAgICAgICAgICAgICAgICBwcmV2aW91cy51bnNoaWZ0KGAke2l9JHt0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmRbMV19YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcGFyc2VJbnQodGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzBdKSArIDE7IGkgPD0gOTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbmV4dC5wdXNoKGAke2l9JHt0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmRbMV19YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyZWN0aW9uID09PSAndicpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGFyc2VJbnQodGhpcy5zdHJhdGVneS5zdGFydENvb3JkWzFdKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgcHJldmlvdXMudW5zaGlmdChgJHt0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmRbMF19JHtpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IHBhcnNlSW50KHRoaXMuc3RyYXRlZ3kuc3RhcnRDb29yZFsxXSkgKyAxOyBpIDw9IDk7IGkrKykge1xuICAgICAgICAgICAgICAgIG5leHQucHVzaChgJHt0aGlzLnN0cmF0ZWd5LnN0YXJ0Q29vcmRbMF19JHtpfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3RyYXRlZ3kudGFyZ2V0cy5wdXNoKHByZXZpb3VzLCBuZXh0KTtcbiAgICB9XG4gICAgYWRkVG9BdHRhY2tzKGNvb3JkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvb3JkKTtcbiAgICAgICAgdGhpcy5hdHRhY2tzTWFkZS5wdXNoKGNvb3JkKTtcbiAgICB9XG5cbiAgICAvLyByZXNldHRlcnNcbiAgICByZXNldFN0cmF0ZWd5KCkge1xuICAgICAgICB0aGlzLnN0cmF0ZWd5ID0ge21vZGU6ICdzZWFyY2gnLFxuICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0Q29vcmQ6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3Rpb246IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgfVxuICAgIHJlc2V0QXR0YWNrcygpIHtcbiAgICAgICAgdGhpcy5hdHRhY2tzTWFkZSA9IFtdO1xuICAgIH1cbn1cblxuLy8gRkFDVE9SSUVTXG5mdW5jdGlvbiBtYWtlU2hpcChsZW5ndGgsIGRpciwgbmFtZSwgY29vcmRzKSB7XG4gICAgcmV0dXJuIG5ldyBTaGlwKGxlbmd0aCwgZGlyLCBuYW1lLCBjb29yZHMpO1xufVxuZnVuY3Rpb24gbWFrZUdhbWVib2FyZCgpIHtcbiAgICByZXR1cm4gbmV3IEdhbWVib2FyZCgpO1xufVxuZnVuY3Rpb24gbWFrZVBsYXllcih0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdodW1hbicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdW1hbigpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2NvbXB1dGVyJykge1xuICAgICAgICByZXR1cm4gbmV3IENvbXB1dGVyKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBtYWtlUGxheWVyO1xuIiwiY29uc3QgY3JlYXRlID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF9hdHRyaWJ1dGVzID0gW107XG4gICAgbGV0IGVsZW1lbnQ7XG5cbiAgICAvLyBiYXNpYyBoZWxwZXIgZmFjdG9yaWVzXG4gICAgY29uc3QgZGl2ID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3Qgc3BhbiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBidXR0b24gPSBmdW5jdGlvbihjb250ZW50LCBzdGF0ZSwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudHlwZSA9ICdidXR0b24nO1xuICAgICAgICBlbGVtZW50LnJvbGUgPSAnYnV0dG9uJztcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIGVsZW1lbnQudmFsdWUgPSBzdGF0ZTtcbiAgICAgICAgZWxlbWVudC5hcmlhUHJlc3NlZCA9ICdmYWxzZSc7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBpbWcgPSBmdW5jdGlvbih1cmwsIGFsdCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsZW1lbnQuc3JjID0gYC4uLyR7dXJsfWA7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gdXJsO1xuICAgICAgICBlbGVtZW50LmFsdCA9IGFsdDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gaGVscGVyc1xuICAgIGZ1bmN0aW9uIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXR0cmlidXRlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2ldWzBdID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pZCA9IGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpdixcbiAgICAgICAgc3BhbixcbiAgICAgICAgYnV0dG9uLFxuICAgICAgICBpbWcsXG4gICAgfVxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlOyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzLmpzJztcbmltcG9ydCBtYWtlUGxheWVyIGZyb20gJy4vY2xhc3Nlcy5qcyc7XG5cbmNvbnN0IGdhbWUgPSAoKCkgPT4ge1xuICAgIGxldCBodW1hbjtcbiAgICBsZXQgY29tcHV0ZXI7XG5cbiAgICAvLyBkcml2ZXIgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGh1bWFuID0gbWFrZVBsYXllcignaHVtYW4nKTtcbiAgICAgICAgY29tcHV0ZXIgPSBtYWtlUGxheWVyKCdjb21wdXRlcicpO1xuICAgIH1cblxuICAgIC8vIHBsYWNlbWVudCBtZXRob2RzXG4gICAgZnVuY3Rpb24gcXVlcnlDb29yZERhdGEoc3RhcnRDb29yZCwgZGlyZWN0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IGNvb3JkU2V0ID0gaHVtYW4uYm9hcmQuZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoKTtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSBodW1hbi5ib2FyZC5zZXRJc1ZhbGlkKGNvb3JkU2V0KTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmVDb29yZERhdGEnLCBjb29yZFNldCwgaXNWYWxpZCk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoLCBuYW1lKSB7XG4gICAgICAgIGh1bWFuLmJvYXJkLnBsYWNlU2hpcChzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCwgbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHF1ZXJ5U2hpcERhdGEodGFyZ2V0SUQpIHtcbiAgICAgICAgbGV0IHNoaXAgPSBodW1hbi5ib2FyZC5nZXRTaGlwKHRhcmdldElEKTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmVTaGlwRGF0YScsIHNoaXAubmFtZSwgc2hpcC5kaXIsIHNoaXAubGVuZ3RoLCBzaGlwLmNvb3Jkcyk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gZGVsZXRlU2hpcE9iamVjdCh0YXJnZXROYW1lKSB7XG4gICAgICAgIGh1bWFuLmJvYXJkLnJlbW92ZVNoaXAodGFyZ2V0TmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc2V0Qm9hcmREYXRhKCkge1xuICAgICAgICBodW1hbi5ib2FyZC5yZXNldEJvYXJkKCk7XG4gICAgICAgIGNvbXB1dGVyLmJvYXJkLnJlc2V0Qm9hcmQoKTtcbiAgICAgICAgY29tcHV0ZXIucmVzZXRTdHJhdGVneSgpO1xuICAgICAgICBjb21wdXRlci5yZXNldEF0dGFja3MoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZVRvT3JpZ2luYWwoKSB7XG4gICAgICAgIGxldCBzaGlwID0gaHVtYW4uYm9hcmQucmVwbGFjaW5nO1xuICAgICAgICBodW1hbi5ib2FyZC5yZXBsYWNlU2hpcFRvT3JpZ2luYWwoKTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmVTaGlwRGF0YScsIHNoaXAubmFtZSwgc2hpcC5kaXIsIHNoaXAubGVuZ3RoLCBzaGlwLmNvb3Jkcyk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICB9XG5cbiAgICAvLyBwbGF5IG1ldGhvZHNcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUNvbXB1dGVyU2hpcHMoKSB7XG4gICAgICAgIGNvbXB1dGVyLnJhbmRvbWl6ZVNoaXBzKCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHRha2VUdXJuKHRhcmdldENvb3JkKSB7XG4gICAgICAgIGh1bWFuLnNlbmRBdHRhY2soJ2NvbXB1dGVyJywgdGFyZ2V0Q29vcmQsIGNvbXB1dGVyLmJvYXJkKTtcbiAgICAgICAgaWYgKGNvbXB1dGVyLmJvYXJkLmlzTG9zZXIoKSkge1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3dpbm5lcicsICdjb21wdXRlcicpOyAvLyBzdWJzY3JpYmVkIGJ5IHVpLmpzXG4gICAgICAgICAgICByZXNldEJvYXJkRGF0YSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbXB1dGVyLm1ha2VBdHRhY2soaHVtYW4uYm9hcmQpO1xuICAgICAgICBpZiAoaHVtYW4uYm9hcmQuaXNMb3NlcigpKSB7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgnd2lubmVyJywgJ2h1bWFuJyk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICAgICAgICAgIHJlc2V0Qm9hcmREYXRhKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gdXBkYXRlQ29tcHV0ZXJTdHJhdGVneShzdW5rLCBoaXQsIGNvb3JkKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1cGRhdGVDb21wdXRlclN0cmF0ZWd5KCknKTtcbiAgICAgICAgY29tcHV0ZXIucmVjZWl2ZUF0dGFja1Jlc3VsdChzdW5rLCBoaXQsIGNvb3JkKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkQnVmZmVyVG9Db21wdXRlckF0dGFja3MoYnVmZmVyKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYnVmZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb21wdXRlci5hZGRUb0F0dGFja3MoYnVmZmVyW2ldKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhjb21wdXRlci5hdHRhY2tzTWFkZSk7XG4gICAgfVxuXG4gICAgLy8gZXZlbnQgc3Vic2NyaXB0aW9uc1xuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3F1ZXJ5Q29vcmREYXRhJywgcXVlcnlDb29yZERhdGEpOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKHBsYXllckJvYXJkc1swXS5vbk1vdXNlT3ZlciwgYm9keS5vbktleURvd24pXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncGxhY2VTaGlwJywgcGxhY2VTaGlwKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChib2R5Lm9uQ2xpY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncXVlcnlTaGlwRGF0YScsIHF1ZXJ5U2hpcERhdGEpOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdkZWxldGVTaGlwT2JqZWN0JywgZGVsZXRlU2hpcE9iamVjdCk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3Jlc2V0Qm9hcmREYXRhJywgcmVzZXRCb2FyZERhdGEpOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZXBsYWNlVG9PcmlnaW5hbCcsIHJlcGxhY2VUb09yaWdpbmFsKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChib2R5Lm9uQ2xpY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZ2VuZXJhdGVDb21wdXRlclNoaXBzJywgZ2VuZXJhdGVDb21wdXRlclNoaXBzKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChib2R5Lm9uQ2xpY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgndGFrZVR1cm4nLCB0YWtlVHVybik7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlY2VpdmVBdHRhY2tSZXN1bHQnLCB1cGRhdGVDb21wdXRlclN0cmF0ZWd5KTsgLy8gcHVibGlzaGVkIGJ5IGNsYXNzZXMuanMgKHJlY2VpdmVBdHRhY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnYWRkQnVmZmVyVG9Db21wdXRlckF0dGFja3MnLCBhZGRCdWZmZXJUb0NvbXB1dGVyQXR0YWNrcyk7IC8vIHB1Ymxpc2hlZCBieSBjbGFzc2VzLmpzIChyZWNlaXZlQXR0YWNrKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgLy8gdXNlZCBieSBpbmRleC5qc1xuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiIsIi8vIGNhY2hlIGltYWdlc1xubGV0IGltZ1F1ZXJ5ID0gcmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMnLCBmYWxzZSwgL1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkL2kpO1xubGV0IGljb25zQXJyYXkgPSBpbXBvcnRJY29ucyhpbWdRdWVyeSk7XG4vLyBjb25zb2xlLmxvZygnKioqKiogSUNPTlMgQVJSQVkgKioqKionKTtcbi8vIGNvbnNvbGUubG9nKGljb25zQXJyYXkpO1xuXG4vLyBtZXRob2RzXG5mdW5jdGlvbiBpbXBvcnRJY29ucyhyKSB7XG4gICAgbGV0IHF1ZXJ5S2V5cyA9IHIua2V5cygpO1xuICAgIGxldCBpY29ucyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdLZXkgPSBxdWVyeUtleXNbaV0uc3BsaXQoJy5zdmcnKVswXS5zcGxpdCgnLi8nKVsxXTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gYC4vYXNzZXRzLyR7cXVlcnlLZXlzW2ldLnNwbGl0KCcuLycpWzFdfWA7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYG5ld0tleSAtLT4gJHtuZXdLZXl9YCk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYG5ld1ZhbHVlIC0tPiAke25ld1ZhbHVlfWApXG4gICAgICAgIFxuICAgICAgICBpY29uc1tuZXdLZXldID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGljb25zO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpY29uc0FycmF5OyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzLmpzJztcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi9jcmVhdGUuanMnO1xuXG5jb25zdCB1aSA9ICgoKSA9PiB7XG4gICAgbGV0IHBsYXllckJvYXJkcyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4nKS5sYXN0RWxlbWVudENoaWxkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXInKS5sYXN0RWxlbWVudENoaWxkXTtcbiAgICBsZXQgc2hpcENvbnRhaW5lcnMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuJykuY2hpbGRyZW5bMV0sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlcicpLmNoaWxkcmVuWzFdXTtcbiAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWdhbWUnKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgcGxhY2luZzogZmFsc2UsXG4gICAgICAgIHBsYXlpbmc6IGZhbHNlLFxuICAgICAgICB0YXJnZXRDZWxsOiB1bmRlZmluZWQsXG4gICAgICAgIHNlbGVjdGVkU2hpcDogdW5kZWZpbmVkLFxuICAgICAgICBjb29yZERhdGE6IHVuZGVmaW5lZCxcbiAgICAgICAgZGlyZWN0aW9uOiAncidcbiAgICB9XG5cbiAgICAvLyBldmVudCBsaXN0ZW5lcnNcbiAgICBib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLnBsYXlpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdwbGF5LWdhbWUnIHx8IGUudGFyZ2V0LmlkID09PSAncGxheScpIHtcbiAgICAgICAgICAgICAgICBwbGF5KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlkID09PSAncmVzdGFydC1nYW1lJyB8fCBlLnRhcmdldC5pZCA9PT0gJ3Jlc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgcmVzdGFydCgpO1xuICAgICAgICAgICAgICAgIHJlbW92ZUFsZXJ0Qm94KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUnKSAmJiAhZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSB7XG4gICAgICAgICAgICAgICAgc2V0TWVudVNlbGVjdChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUucGxhY2luZyAmJiBzdGF0ZS5jb29yZERhdGFbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3BsYWNlU2hpcCcsIHN0YXRlLnRhcmdldENlbGwuaWQuc3BsaXQoJy0nKVsxXSwgc3RhdGUuZGlyZWN0aW9uLCBzdGF0ZS5zZWxlY3RlZFNoaXAuaWQuc3BsaXQoJy0nKVswXSwgc3RhdGUuc2VsZWN0ZWRTaGlwLmlkLnNwbGl0KCctJylbMV0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgICAgICAgICAgICAgcGxhY2VTaGlwVUkoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzdGF0ZS5wbGFjaW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUucGxhY2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdxdWVyeVNoaXBEYXRhJywgc3RhdGUudGFyZ2V0Q2VsbC5pZC5zcGxpdCgnLScpWzFdKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdkZWxldGVTaGlwT2JqZWN0Jywgc3RhdGUuc2VsZWN0ZWRTaGlwLmlkLnNwbGl0KCctJylbMV0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoc3RhdGUucGxheWluZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAncmVzdGFydC1nYW1lJyB8fCBlLnRhcmdldC5pZCA9PT0gJ3Jlc3RhcnQnKSB7XG4gICAgICAgICAgICAgICAgZ2VuZXJhdGVBbGVydEJveCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ2NvbmZpcm0tcmVzdGFydCcgfHwgZS50YXJnZXQuaWQgPT09ICdjb25maXJtJykge1xuICAgICAgICAgICAgICAgIHJlc3RhcnQoKTtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGVydEJveCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ2NhbmNlbC1yZXN0YXJ0JyB8fCBlLnRhcmdldC5pZCA9PT0gJ2NhbmNlbCcpIHtcbiAgICAgICAgICAgICAgICByZW1vdmVBbGVydEJveCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudCAhPT0gbnVsbCAmJiBlLnRhcmdldC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5pZCA9PT0gJ2NvbXB1dGVyJyAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJiAhZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzJykpIHtcbiAgICAgICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhdHRhY2snKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS50YXJnZXRDZWxsID0gZS50YXJnZXQ7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3Rha2VUdXJuJywgZS50YXJnZXQuaWQuc3BsaXQoJy0nKVsxXSk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgKGUpID0+IHtcbiAgICAgICAgbGV0IHZhbGlkS2V5cyA9IFsnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnXTtcbiAgICAgICAgaWYgKHN0YXRlLnBsYXlpbmcgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpZiAodmFsaWRLZXlzLmluY2x1ZGVzKGUua2V5KSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dVcCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAndSdcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0Rvd24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uID0gJ2QnXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdsJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdyJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3F1ZXJ5Q29vcmREYXRhJywgc3RhdGUudGFyZ2V0Q2VsbC5pZC5zcGxpdCgnLScpWzFdLCBzdGF0ZS5kaXJlY3Rpb24sIHN0YXRlLnNlbGVjdGVkU2hpcC5pZC5zcGxpdCgnLScpWzBdKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGUua2V5ID09PSAnRXNjYXBlJykge1xuICAgICAgICAgICAgICAgIHNldE1lbnVTZWxlY3Qoc3RhdGUuc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgICAgICByZW1vdmVDZWxsSG92ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pXG4gICAgcGxheWVyQm9hcmRzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIHN0YXRlLnRhcmdldENlbGwgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHN0YXRlLnBsYWNpbmcgJiYgIXN0YXRlLnBsYXlpbmcgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdxdWVyeUNvb3JkRGF0YScsIHN0YXRlLnRhcmdldENlbGwuaWQuc3BsaXQoJy0nKVsxXSwgc3RhdGUuZGlyZWN0aW9uLCBzdGF0ZS5zZWxlY3RlZFNoaXAuaWQuc3BsaXQoJy0nKVswXSk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcGxheWVyQm9hcmRzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgKGUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLnBsYWNpbmcgJiYgIXN0YXRlLnBsYXlpbmcgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgIHJlbW92ZUNlbGxIb3ZlcigpO1xuICAgICAgICB9ICAgXG4gICAgfSlcbiAgICBwbGF5ZXJCb2FyZHNbMV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgKGUpID0+IHtcbiAgICAgICAgaWYgKHN0YXRlLnBsYXlpbmcgJiYgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYXR0YWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KVxuICAgIHBsYXllckJvYXJkc1sxXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW91dCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChzdGF0ZS5wbGF5aW5nICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpICYmIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYXR0YWNrJykpIHtcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2F0dGFjaycpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGRyaXZlciBtZXRob2RzXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgLy8gZ2VuZXJhdGUgYm9hcmRzXG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBwbGF5ZXJCb2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBnZW5lcmF0ZUdyaWQocGxheWVyQm9hcmRzW2ldLCBpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICAvLyBzZXQgc3RhdGVcbiAgICAgICAgc2V0U2VjdGlvblR5cGUoc2hpcENvbnRhaW5lcnNbMF0sICdtZW51Jyk7XG4gICAgICAgIC8vIGdlbmVyYXRlIHNoaXAgbWVudVxuICAgICAgICBnZW5lcmF0ZVNoaXBNZW51KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgIC8vIHJlcGxhY2Ugc2VsZWN0ZWQgc2hpcCB0byBvcmlnaW5hbCBjb29yZHNcbiAgICAgICAgaWYgKHN0YXRlLnBsYWNpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZXBsYWNlVG9PcmlnaW5hbCcsICcnKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICBwbGFjZVNoaXBVSSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGdlbmVyYXRlIHNoaXAgdGFsbGllc1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgc2hpcENvbnRhaW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjbGVhclNoaXBDb250YWluZXIoc2hpcENvbnRhaW5lcnNbaV0pO1xuICAgICAgICAgICAgc2V0U2VjdGlvblR5cGUoc2hpcENvbnRhaW5lcnNbaV0sICd0YWxseScpO1xuICAgICAgICAgICAgZ2VuZXJhdGVTaGlwVGFsbGllcyhzaGlwQ29udGFpbmVyc1tpXSwgaSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgLy8gYXNrIGNvbXB1dGVyIGJvYXJkIHRvIGdlbmVyYXRlIHBsYWNlbWVudHNcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ2dlbmVyYXRlQ29tcHV0ZXJTaGlwcycsICcnKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgIC8vIHNldCBzdGF0ZSB0byBwbGF5XG4gICAgICAgIHN0YXRlLnBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUucGxheWluZyA9IHRydWU7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIC8vIHJlc2V0IGJvYXJkc1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBsYXllckJvYXJkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBwbGF5ZXJCb2FyZHNbaV0uY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IHBsYXllckJvYXJkc1tpXS5jaGlsZHJlbltqXS5jaGlsZHJlbi5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyQm9hcmRzW2ldLmNoaWxkcmVuW2pdLmNoaWxkcmVuW2tdLmNsYXNzTGlzdC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbGF5ZXJCb2FyZHNbaV0uY2hpbGRyZW5bal0uY2hpbGRyZW5ba10uY2xhc3NMaXN0ID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgICAgIC8vIHJlc2V0IG1lbnVzXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcENvbnRhaW5lcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNsZWFyU2hpcENvbnRhaW5lcihzaGlwQ29udGFpbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgbWFrZVNoaXBJY29ucygnJywgc2hpcENvbnRhaW5lcnNbMF0pO1xuICAgICAgICBzaGlwQ29udGFpbmVyc1swXS5jbGFzc0xpc3QgPSAnbWVudSc7XG4gICAgICAgIHNoaXBDb250YWluZXJzWzFdLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICAvLyByZXNldCBwbGF5IGJ1dHRvblxuICAgICAgICBwbGF5QnV0dG9uLmNoaWxkcmVuWzBdLnNyYyA9ICcuL2ljb25zL3BsYXlfZ3JheS5zdmcnO1xuICAgICAgICBwbGF5QnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgcGxheUJ1dHRvbi5hcmlhRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyBjbGVhciBwbGF5ZXIgb2JqZWN0c1xuICAgICAgICBldmVudHMucHVibGlzaCgncmVzZXRCb2FyZERhdGEnLCAnJyk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICAvLyBjbGVhciBzdGF0ZVxuICAgICAgICBzdGF0ZS5wbGFjaW5nID0gZmFsc2U7XG4gICAgICAgIHN0YXRlLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuICAgICAgICBzdGF0ZS5jb29yZERhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdyJztcbiAgICB9XG5cbiAgICAvLyBtdWx0aS11c2UgaGVscGVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBtYWtlU2hpcEljb25zKHBsYXllclR5cGUsIGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgc2hpcHMgPSBbWzUsICdhY2MnXSxcbiAgICAgICAgICAgICAgICAgICAgIFs0LCAnYnMnXSxcbiAgICAgICAgICAgICAgICAgICAgIFszLCAnY3J1cyddLFxuICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MSddLFxuICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MiddLFxuICAgICAgICAgICAgICAgICAgICAgWzEsICdzdWIxJ10sXG4gICAgICAgICAgICAgICAgICAgICBbMSwgJ3N1YjInXVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbENvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJUeXBlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnLnNoaXAnLCBgIyR7c2hpcHNbaV1bMF19LSR7c2hpcHNbaV1bMV19YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnLnNoaXAnLCBgIyR7cGxheWVyVHlwZX0tJHtzaGlwc1tpXVsxXX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV1bMF07IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gY3JlYXRlLmRpdignJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChjZWxsQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGluaXQgaGVscGVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUdyaWQoYm9hcmQsIGJvYXJkTnVtYmVyKSB7XG4gICAgICAgIGxldCBwbGF5ZXI7XG4gICAgICAgIGlmIChib2FyZE51bWJlciA9PT0gMCkge1xuICAgICAgICAgICAgcGxheWVyID0gJ2gnO1xuICAgICAgICB9IGVsc2UgaWYgKGJvYXJkTnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICBwbGF5ZXIgPSAnYyc7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gY3JlYXRlLmRpdignJywgJy5yb3cnKVxuICAgICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGogPCAxMCkge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gY3JlYXRlLmRpdignJywgJy5jZWxsJywgYCMke3BsYXllcn0tJHtqfSR7aX1gKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFNlY3Rpb25UeXBlKHNlY3Rpb24sIHNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChzZWxlY3Rvcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU2hpcE1lbnUoKSB7XG4gICAgICAgIG1ha2VTaGlwSWNvbnMoJycsIHNoaXBDb250YWluZXJzWzBdKTtcbiAgICB9XG5cbiAgICAvLyBwbGFjZW1lbnQgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIHNldE1lbnVTZWxlY3QodGFyZ2V0U2hpcCkge1xuICAgICAgICBpZiAoc3RhdGUuc2VsZWN0ZWRTaGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHN0YXRlLnBsYWNpbmcgPSB0cnVlO1xuICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdGFyZ2V0U2hpcDtcbiAgICAgICAgICAgIGFkZFNlbGVjdEluTWVudShzdGF0ZS5zZWxlY3RlZFNoaXApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldFNoaXAgPT09IHN0YXRlLnNlbGVjdGVkU2hpcCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lbnVTZWxlY3Qoc3RhdGUuc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5wbGFjaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRTaGlwICE9PSBzdGF0ZS5zZWxlY3RlZFNoaXApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZW51U2VsZWN0KHN0YXRlLnNlbGVjdGVkU2hpcCk7XG4gICAgICAgICAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdGFyZ2V0U2hpcDtcbiAgICAgICAgICAgICAgICBhZGRTZWxlY3RJbk1lbnUoc3RhdGUuc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZGlyZWN0aW9uICE9PSAncicpIHtcbiAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdyJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRTZWxlY3RJbk1lbnUoc2hpcCkge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZU1lbnVTZWxlY3Qoc2hpcCkge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldEJvYXJkSG92ZXIoY29vcmRTZXQsIGlzVmFsaWQpIHtcbiAgICAgICAgICAgIHJlbW92ZUNlbGxIb3ZlcigpO1xuICAgICAgICAgICAgc3RhdGUuY29vcmREYXRhID0gW2Nvb3JkU2V0LCBpc1ZhbGlkXTtcbiAgICAgICAgICAgIGFkZENlbGxIb3ZlcihzdGF0ZS5jb29yZERhdGFbMV0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRDZWxsSG92ZXIoaXNWYWxpZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvb3JkRGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHN0YXRlLmNvb3JkRGF0YVswXVtpXS5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGgtJHtzdGF0ZS5jb29yZERhdGFbMF1baV19YCk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaXMtdmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVDZWxsSG92ZXIoKSB7XG4gICAgICAgIGlmIChzdGF0ZS5jb29yZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb29yZERhdGFbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuY29vcmREYXRhWzBdW2ldLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGgtJHtzdGF0ZS5jb29yZERhdGFbMF1baV19YCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygncGxhY2VkJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gJ2NlbGwgcGxhY2VkJztcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gJ2NlbGwnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYWNlU2hpcFVJKCkge1xuICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAuY2xhc3NMaXN0ID0gJ3NoaXAgcGxhY2VkJztcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb29yZERhdGFbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGgtJHtzdGF0ZS5jb29yZERhdGFbMF1baV19YCk7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdCA9ICdjZWxsJztcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgncGxhY2VkJyk7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUucGxhY2luZyA9IGZhbHNlO1xuICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXRlLmNvb3JkRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVwbGFjZVNoaXBVSShuYW1lLCBkaXIsIGxlbmd0aCwgY29vcmRzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBoLSR7Y29vcmRzW2ldfWApO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnY2VsbCBob3ZlciBpcy12YWxpZCc7XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7bGVuZ3RofS0ke25hbWV9YCk7XG4gICAgICAgIHN0YXRlLmNvb3JkRGF0YSA9IFtjb29yZHMsIHRydWVdO1xuICAgICAgICBzdGF0ZS5kaXIgPSBkaXI7XG4gICAgfVxuXG4gICAgLy8gcGxheSBoZWxwZXIgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIG1ha2VQbGF5TGl2ZSgpIHtcbiAgICAgICAgcGxheUJ1dHRvbi5jaGlsZHJlblswXS5zcmMgPSAnLi9pY29ucy9wbGF5LnN2Zyc7XG4gICAgICAgIHBsYXlCdXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgcGxheUJ1dHRvbi5hcmlhRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTaGlwVGFsbGllcyh0YWxseUNvbnRhaW5lciwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHBsYXllclR5cGU7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcGxheWVyVHlwZSA9ICdoJztcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICBwbGF5ZXJUeXBlID0gJ2MnO1xuICAgICAgICB9XG4gICAgICAgIG1ha2VTaGlwSWNvbnMocGxheWVyVHlwZSwgdGFsbHlDb250YWluZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhclNoaXBDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBkaXNwbGF5SGl0KHBsYXllciwgY29vcmQsIGhpdCkge1xuICAgICAgICBpZiAocGxheWVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICBzdGF0ZS50YXJnZXRDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGMtJHtjb29yZH1gKTtcbiAgICAgICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZS50YXJnZXRDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghaGl0KSB7XG4gICAgICAgICAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGxheWVyID09PSAnaHVtYW4nKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGgtJHtjb29yZH1gKTtcbiAgICAgICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKCFoaXQgJiYgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3MnKSkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdtaXNzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheVN1bmsocGxheWVyLCBuYW1lKSB7XG4gICAgICAgIGlmIChwbGF5ZXIgPT09ICdodW1hbicpIHtcbiAgICAgICAgICAgIHBsYXllciA9ICdoJztcbiAgICAgICAgfSBlbHNlIGlmIChwbGF5ZXIgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgICAgIHBsYXllciA9ICdjJztcbiAgICAgICAgfVxuICAgICAgICBsZXQgc2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke3BsYXllcn0tJHtuYW1lfWApO1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZGlzcGxheUJ1ZmZlcihwbGF5ZXIsIGJ1ZmZlckNvb3Jkcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJ1ZmZlckNvb3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgZGlzcGxheUhpdChwbGF5ZXIsIGJ1ZmZlckNvb3Jkc1tpXSwgZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlQWxlcnRCb3goKSB7XG4gICAgICAgIGxldCBvcHRpb25zID0gWydjYW5jZWwnLCAnY29uZmlybSddO1xuICAgICAgICBsZXQgYWxlcnRDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnI2FsZXJ0Jyk7XG4gICAgICAgIGxldCB0ZXh0ID0gY3JlYXRlLnNwYW4oJ1Jlc3RhcnQgZ2FtZT8nKTtcbiAgICAgICAgYWxlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dCk7XG4gICAgICAgIGxldCBidXR0b25Db250YWluZXIgPSBjcmVhdGUuZGl2KCcnKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvcHRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gY3JlYXRlLmJ1dHRvbignJywgYCR7b3B0aW9uc1tpXX1gLCBgIyR7b3B0aW9uc1tpXX0tcmVzdGFydGApO1xuICAgICAgICAgICAgbGV0IGltYWdlID0gY3JlYXRlLmltZyhgLi9pY29ucy8ke29wdGlvbnNbaV19LnN2Z2AsIGAke29wdGlvbnNbaV19YCwgYCMke29wdGlvbnNbaV19YCk7XG4gICAgICAgICAgICBidXR0b24uYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgICAgICAgICAgYnV0dG9uQ29udGFpbmVyLmFwcGVuZChidXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKGJ1dHRvbkNvbnRhaW5lcik7XG4gICAgICAgIGxldCBzY3JlZW4gPSBjcmVhdGUuZGl2KCcnLCAnLnNjcmVlbicpO1xuICAgICAgICBib2R5LmFwcGVuZChzY3JlZW4sIGFsZXJ0Q29udGFpbmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxlcnRCb3goKSB7XG4gICAgICAgIGxldCBzY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NyZWVuJyk7XG4gICAgICAgIGxldCBhbGVydEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhbGVydCcpO1xuICAgICAgICBpZiAoYWxlcnRCb3ggIT09IG51bGwgJiYgc2NyZWVuICE9PSBudWxsKSB7XG4gICAgICAgICAgICBzY3JlZW4ucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChzY3JlZW4pO1xuICAgICAgICAgICAgYWxlcnRCb3gucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChhbGVydEJveCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBlbmQgZ2FtZVxuICAgIGZ1bmN0aW9uIGVuZEdhbWUod2lubmVyKSB7XG4gICAgICAgIHN0YXRlLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgZ2VuZXJhdGVHYW1lUmVzdWx0KHdpbm5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlR2FtZVJlc3VsdCh3aW5uZXIpIHtcbiAgICAgICAgbGV0IGFsZXJ0Q29udGFpbmVyID0gY3JlYXRlLmRpdignJywgJyNhbGVydCcpO1xuICAgICAgICBsZXQgdGV4dDtcbiAgICAgICAgaWYgKHdpbm5lciA9PT0gJ2h1bWFuJykge1xuICAgICAgICAgICAgdGV4dCA9ICdZb3Ugd2luISA9RCc7XG4gICAgICAgIH0gZWxzZSBpZiAod2lubmVyID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgICAgICB0ZXh0ID0gXCJDb21wdXRlciB3aW5zLiA9JyhcIjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdGV4dFNwYW4gPSBjcmVhdGUuc3Bhbih0ZXh0KTtcbiAgICAgICAgYWxlcnRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dFNwYW4pO1xuICAgICAgICBsZXQgcmVzdGFydEJ1dHRvbiA9IGNyZWF0ZS5idXR0b24oJycsIGByZXN0YXJ0YCwgYCNyZXN0YXJ0LWdhbWVgKTtcbiAgICAgICAgbGV0IHJlc3RhcnRJbWFnZSA9IGNyZWF0ZS5pbWcoYC4vaWNvbnMvcmVzdGFydC5zdmdgLCBgcmVzdGFydGAsIGAjcmVzdGFydGApO1xuICAgICAgICByZXN0YXJ0QnV0dG9uLmFwcGVuZENoaWxkKHJlc3RhcnRJbWFnZSk7XG4gICAgICAgIGFsZXJ0Q29udGFpbmVyLmFwcGVuZENoaWxkKHJlc3RhcnRCdXR0b24pO1xuICAgICAgICBsZXQgc2NyZWVuID0gY3JlYXRlLmRpdignJywgJy5zY3JlZW4nKVxuICAgICAgICBib2R5LmFwcGVuZChzY3JlZW4sIGFsZXJ0Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVjZWl2ZUNvb3JkRGF0YScsIHNldEJvYXJkSG92ZXIpOyAvLyBwdWJsaXNoZWQgYnkgZ2FtZS5qcyAocXVlcnlDb29yZERhdGEpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVjZWl2ZVNoaXBEYXRhJywgcmVwbGFjZVNoaXBVSSk7IC8vIHB1Ymxpc2hlZCBieSBnYW1lLmpzIChxdWVyeVNoaXBEYXRhLCByZXBsYWNlVG9PcmlnaW5hbClcbiAgICBldmVudHMuc3Vic2NyaWJlKCdtYWtlUGxheUxpdmUnLCBtYWtlUGxheUxpdmUpOyAvLyBwdWJsaXNoZWQgYnkgY2xhc3Nlcy5qcyAoY29tcHV0ZXIucmFuZG9taXplU2hpcHMpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZGlzcGxheUF0dGFjaycsIGRpc3BsYXlIaXQpOyAvLyBwdWJsaXNoZWQgYnkgY2xhc3Nlcy5qcyAoZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2spXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnZGlzcGxheVN1bmsnLCBkaXNwbGF5U3Vuayk7IC8vIHB1Ymxpc2hlZCBieSBjbGFzc2VzLmpzIChnYW1lYm9hcmQucmVjZWl2ZUF0dGFjaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCd3aW5uZXInLCBlbmRHYW1lKTsgLy8gcHVibGlzaGVkIGJ5IGdhbWUuanMgKHRha2VUdXJuKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ2Rpc3BsYXlCdWZmZXInLCBkaXNwbGF5QnVmZmVyKTsgLy8gcHVibGlzaGVkIGJ5IGNsYXNzZXMuanMgKGdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgLy8gdXNlZCBieSBpbmRleC5qc1xuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdWk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJztcbmltcG9ydCBpY29uc0FycmF5IGZyb20gJy4vc2NyaXB0cy9pY29ucy5qcyc7XG5pbXBvcnQgZ2FtZSBmcm9tICcuL3NjcmlwdHMvZ2FtZS5qcyc7XG5pbXBvcnQgdWkgZnJvbSAnLi9zY3JpcHRzL3VpLmpzJztcblxuZ2FtZS5pbml0KCk7XG51aS5pbml0KCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=