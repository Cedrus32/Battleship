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
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL VARIABLES */\n\n:root {\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 15);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(var(--player-fr) * 10);\n    --board-cell: var(--player-fr);\n}\n\n.hide {\n    z-index: -1;\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-areas: 'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-areas: 'board sidebar';\n}\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .menu {\n            gap: var(--sidebar-spacing);\n        }\n\n        .tally {\n            gap: calc(var(--sidebar-spacing) / 2);\n        }\n\n    #alert {\n        position: absolute;\n        align-items: center;\n        gap: var(--main-spacing);\n    }\n\n    footer {\n        justify-content: center;\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n                .tally .ship div {\n                    height: calc(var(--ship-cell) / 2);\n                    width: calc(var(--ship-cell) / 2);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    #alert {\n        min-width: max-content;\n        width: 25vw;\n        padding: var(--main-spacing);\n    }\n\n    footer {\n        width: 100%;\n    }\n\n        button {\n            height: calc(var(--player-fr) * 2);\n            width: auto;\n        }\n\n            img {\n                height: 100%;\n                width: auto;\n            }\n\n/* COLORS */\n\nmain {\n    background-color: white;\n}\n\n    #human,\n    #computer {\n        background-color: rgba(255, 0, 0, 0.3);  /* ! testing */\n    }\n\n        .ship,\n        .cell.placed {\n            background-color: blue;\n        }\n\n        .selected,\n        .hover.is-valid {\n            background-color: rgba(0, 0, 255, 0.5);\n        }\n\n        .hover.is-invalid {\n            background-color: rgba(255, 0, 0, 0.5);\n        }\n\n        .ship.placed {\n            background-color: rgba(128, 128, 128, 0.5);\n        }\n\n        .cell {\n            border: green 1px solid; /* ! testing */\n        }\n\n#alert {\n    background-color: rgba(128, 0, 128, 0.3);\n}\n\nfooter {\n    background-color: rgba(255, 166, 0.3);   /* ! testing */\n}\n", "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB;IACI,mBAAmB;IACnB,oEAAoE;IACpE,0CAA0C;;IAE1C,gDAAgD;IAChD,yEAAyE;IACzE,6BAA6B;;IAE7B,yCAAyC;IACzC,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA,iBAAiB;;AAEjB;;;;;;;;;IASI,aAAa;AACjB;;AAEA;;;;;IAKI,iBAAiB;AACrB;;AAEA,iBAAiB;;AAEjB;;IAEI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,oCAAoC;AACxC;;AAEA;IACI,4DAA4D;IAC5D,oCAAoC;AACxC;;IAEI;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,gBAAgB;IACpB;;AAEJ,gBAAgB;;AAEhB;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;IAEI;QACI,wBAAwB;IAC5B;;QAEI;YACI,2BAA2B;QAC/B;;QAEA;YACI,qCAAqC;QACzC;;IAEJ;QACI,kBAAkB;QAClB,mBAAmB;QACnB,wBAAwB;IAC5B;;IAEA;QACI,uBAAuB;IAC3B;;AAEJ,WAAW;;AAEX;IACI,YAAY;IACZ,YAAY;AAChB;;IAEI;QACI,4BAA4B;IAChC;;QAEI;;YAEI,qCAAqC;QACzC;;QAEA;YACI,oCAAoC;QACxC;;YAEI;gBACI,YAAY;gBACZ,kBAAkB;YACtB;;gBAEI;;oBAEI,wBAAwB;oBACxB,uBAAuB;gBAC3B;;gBAEA;oBACI,kCAAkC;oBAClC,iCAAiC;gBACrC;;QAER;YACI,yBAAyB;YACzB,wBAAwB;QAC5B;;IAEJ;QACI,sBAAsB;QACtB,WAAW;QACX,4BAA4B;IAChC;;IAEA;QACI,WAAW;IACf;;QAEI;YACI,kCAAkC;YAClC,WAAW;QACf;;YAEI;gBACI,YAAY;gBACZ,WAAW;YACf;;AAEZ,WAAW;;AAEX;IACI,uBAAuB;AAC3B;;IAEI;;QAEI,sCAAsC,GAAG,cAAc;IAC3D;;QAEI;;YAEI,sBAAsB;QAC1B;;QAEA;;YAEI,sCAAsC;QAC1C;;QAEA;YACI,sCAAsC;QAC1C;;QAEA;YACI,0CAA0C;QAC9C;;QAEA;YACI,uBAAuB,EAAE,cAAc;QAC3C;;AAER;IACI,wCAAwC;AAC5C;;AAEA;IACI,qCAAqC,IAAI,cAAc;AAC3D","sourcesContent":["/* GLOBAL VARIABLES */\n\n:root {\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 15);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(var(--player-fr) * 10);\n    --board-cell: var(--player-fr);\n}\n\n.hide {\n    z-index: -1;\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-areas: 'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-areas: 'board sidebar';\n}\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .menu {\n            gap: var(--sidebar-spacing);\n        }\n\n        .tally {\n            gap: calc(var(--sidebar-spacing) / 2);\n        }\n\n    #alert {\n        position: absolute;\n        align-items: center;\n        gap: var(--main-spacing);\n    }\n\n    footer {\n        justify-content: center;\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n                .tally .ship div {\n                    height: calc(var(--ship-cell) / 2);\n                    width: calc(var(--ship-cell) / 2);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    #alert {\n        min-width: max-content;\n        width: 25vw;\n        padding: var(--main-spacing);\n    }\n\n    footer {\n        width: 100%;\n    }\n\n        button {\n            height: calc(var(--player-fr) * 2);\n            width: auto;\n        }\n\n            img {\n                height: 100%;\n                width: auto;\n            }\n\n/* COLORS */\n\nmain {\n    background-color: white;\n}\n\n    #human,\n    #computer {\n        background-color: rgba(255, 0, 0, 0.3);  /* ! testing */\n    }\n\n        .ship,\n        .cell.placed {\n            background-color: blue;\n        }\n\n        .selected,\n        .hover.is-valid {\n            background-color: rgba(0, 0, 255, 0.5);\n        }\n\n        .hover.is-invalid {\n            background-color: rgba(255, 0, 0, 0.5);\n        }\n\n        .ship.placed {\n            background-color: rgba(128, 128, 128, 0.5);\n        }\n\n        .cell {\n            border: green 1px solid; /* ! testing */\n        }\n\n#alert {\n    background-color: rgba(128, 0, 128, 0.3);\n}\n\nfooter {\n    background-color: rgba(255, 166, 0.3);   /* ! testing */\n}\n"],"sourceRoot":""}]);
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
    constructor(length = null, name = null, coords = null) {
        this.length = length;
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
                this.ships.splice(i, 1);
            }
        }
    }
    clearShips() {
        while (this.ships.length > 0) {
            this.ships.pop();
        }
    }
    placeShip(startCoord, dir, shipLen, shipName) {
        let coordSet = this.getCoords(startCoord, dir, shipLen); // used by computer AI to generate ship placement
        if (this.setIsValid(coordSet)) {    // used by computer AI to varifyplacement validity
            this.ships.push(makeShip(shipLen, shipName, coordSet));
            if (this.ships.length === 7) {
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('makePlayLive', ''); // subscribed by ui.js, game.js
            }
            return true;    // used by computer AI to control placement loop
        }
        return false;   // ""
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

    receiveAttack(coord) {
        let outcome = this.isHit(coord);
        let hit = outcome[0];
        let ship = outcome[1];
        if (hit) {
            this.markBoard(coord, 'x');
            ship.logHit();
            if (ship.sunk) {
                this.shipsSunk += 1;
            }
        } else if (!hit) {
            this.markBoard(coord, 'o');
        }
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

    sendAttack(coord, board) {
        board.receiveAttack(coord);
    }
}
class Computer extends Human {
    constructor() {
        super(Human);
        this.type = 'computer';
        this.attacksMade = [];
    }

    randomizeShips() {
        let availShips = [1, 1, 2, 2, 3, 4, 5];
        let dirs = ['u', 'd', 'l', 'r'];
        
        while (availShips.length > 0) {
            let shipLen = availShips[0];
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
                valid = this.board.placeShip(coord, dir, shipLen);
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
                this.sendAttack(coord, board)
            }
        }
    }
}

// FACTORIES
function makeShip(length, name, coords) {
    return new Ship(length, name, coords);
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
    const p = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('p');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const h2 = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('h2');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const h4 = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('h4');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const ul = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('ul');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const li = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('li');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const input = function(type, name, placeholder, id, ...args) {
        _attributes = [...args];
        element = document.createElement('input');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.type = type;
        element.id = String(id);
        element.name = String(name);
        element.placeholder = placeholder;
        if (type === 'radio') {
            element.value = String(id);
        }
        return element;
    }
    const select = function(name, ...args) {
        _attributes = [...args];
        element = document.createElement('select');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.name = name;
        return element;
    }
    const option = function(value, content) {
        element = document.createElement('option');
        element.value = value;
        element.textContent = content;
        return element;
    }
    const label = function(content, forReference, ...args) {
        _attributes = [...args];
        element = document.createElement('label');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        }
        element.for = String(forReference);
        element.textContent = content;
        _attributes = [];
        return element;
    }
    const legend = function(content, ...args) {
        _attributes = [...args];
        element = document.createElement('legend');
        if (_attributes.length > 0) {
            _setAttributes(element, _attributes);
        };
        element.textContent = content;
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

    function init() {
        human = (0,_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"])('human');
        computer = (0,_classes_js__WEBPACK_IMPORTED_MODULE_1__["default"])('computer');  
    }

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
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('receiveShipData', ship.name, ship.length, ship.coords); // subscribed by ui.js
    }
    function removeShipData(targetName) {
        human.board.removeShip(targetName);
    }
    function clearShipData() {
        human.board.clearShips();
    }

    // event subscriptions
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('queryCoordData', queryCoordData); // published by ui.js (playerBoards[0].onMouseOver, body.onKeyDown)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('placeShip', placeShip); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('queryShipData', queryShipData); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('removeShipData', removeShipData); // published by ui.js (body.onClick)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('clearShipData', clearShipData); // published by ui.ja (body.onClick)

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
    let shipContainers = [document.getElementById('human').firstElementChild, document.getElementById('computer').firstElementChild];
    let playButton = document.getElementById('play-game');
    let body = document.querySelector('body');

    let state = {
        placing: false,
        targetCell: undefined,
        selectedShip: undefined,
        coordData: undefined,
        direction: 'r'
    }

    // event listeners
    body.addEventListener('click', (e) => {
        if (e.target.id === 'play-game' || e.target.id === 'play') {
            // play();
        } else if (e.target.id === 'restart-game' || e.target.id === 'restart') {
            restart();
        } else if (e.target.parentElement.parentElement.classList.contains('menu') && !e.target.parentElement.classList.contains('placed')) {
            setMenuSelect(e.target.parentElement);
        } else if (e.target.classList.contains('cell')) {
            if (state.placing && state.coordData[1]) {
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('placeShip', state.targetCell.id, state.direction, state.selectedShip.id.split('-')[0], state.selectedShip.id.split('-')[1]); // subscribed by game.js
                placeShipUI();
            } else if (!state.placing && e.target.classList.contains('placed')) {
                state.placing = true;
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryShipData', state.targetCell.id); // subscribed by game.js
                _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('removeShipData', state.selectedShip.id.split('-')[1]); // subscribed by game.js
            }
        }
    });
    body.addEventListener('keydown', (e) => {
        console.log(e.key);
        let validKeys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
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
    })
    playerBoards[0].addEventListener('mouseover', (e) => {
        state.targetCell = e.target;
        if (state.placing) {
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryCoordData', state.targetCell.id, state.direction, state.selectedShip.id.split('-')[0]); // subscribed by game.js
        }
    });
    playerBoards[0].addEventListener('mouseleave', () => {
        if (state.placing) {
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
            clearShipContainer(shipContainers[i]);
            setSectionType(shipContainers[i], 'tally');
            generateShipTallies(shipContainers[i], i);
            i++;
        }
    }
    function restart() {
        // reset board
        for (let i = 0; i < playerBoards[0].children.length; i++) {
            for (let j = 0; j < playerBoards[0].children[i].children.length; j++) {
                if (playerBoards[0].children[i].children[j].classList.length > 1) {
                    playerBoards[0].children[i].children[j].classList = 'cell';
                }
            }
        }
        // reset menu
        for (let i = 0; i < shipContainers[0].children.length; i++) {
            if (shipContainers[0].children[i].classList.contains('placed')) {
                shipContainers[0].children[i].classList.remove('placed');
            }
        }
        // reset play button
        playButton.children[0].src = './icons/play_gray.svg';
        playButton.disabled = true;
        playButton.ariaDisabled = true;
        // clear human player of ships
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('clearShipData', ''); // subscribed by game.js
        // clear state
        state.placing = false;
        state.targetCell = undefined;
        state.selectedShip = undefined;
        state.coordData = undefined;
        state.direction = 'r';
    }

    // generative methods
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
    function clearShipContainer(container) {
        while (container.lastElementChild) {
            container.removeChild(container.lastElementChild);
        }
    }

    // placement methods
    function setMenuSelect(targetShip) {
        if (state.selectedShip === undefined) {
            state.placing = true;
            state.selectedShip = targetShip;
            addMenuSelect(state.selectedShip);
        } else {
            if (targetShip === state.selectedShip) {
                removeMenuSelect(state.selectedShip);
                state.placing = false;
                state.selectedShip = undefined;
            } else if (targetShip !== state.selectedShip) {
                removeMenuSelect(state.selectedShip);
                state.selectedShip = targetShip;
                addMenuSelect(state.selectedShip);
            }   
        }
        if (state.direction !== 'r') {
            state.direction = 'r';
        }
    }
    function addMenuSelect(ship) {
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
    function replaceShipUI(name, length, coords) {
        for (let i = 0; i < coords.length; i++) {
            let cell = document.getElementById(coords[i]);
            cell.classList = 'cell hover is-valid';
        }
        state.selectedShip = document.getElementById(`${length}-${name}`);
        state.coordData = [coords, true];
    }
    function makePlayLive() {
        playButton.children[0].src = './icons/play.svg';
        playButton.disabled = false;
        playButton.ariaDisabled = false;
    }

    // event subscriptions
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('receiveCoordData', setBoardHover); // published by game.js (queryCoordData)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('receiveShipData', replaceShipUI); // published by game.js (queryShipData)
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('makePlayLive', makePlayLive); // published by classes.js (gameboard.placeShip)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQSxZQUFZLG9EQUFvRDtBQUNoRSxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqUTFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0Esd0RBQXdELE9BQU8sR0FBRyxLQUFLO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsSUFBSSw0REFBZ0IscUNBQXFDO0FBQ3pELElBQUksNERBQWdCLG9DQUFvQztBQUN4RCxJQUFJLDREQUFnQixnQ0FBZ0M7O0FBRXBEO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVELGlFQUFlLEVBQUUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNwUmxCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUNDO0FBQ2U7QUFDUDtBQUNKOztBQUVqQyw2REFBUztBQUNULDJEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3M/ZjBkOCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkLyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY3JlYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9pY29ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCBWQVJJQUJMRVMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1zcGFjaW5nOiAydnc7XFxuICAgIC0tcGxheWVyLWFyZWE6IGNhbGMoY2FsYygxMDB2dyAtIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDQpKSAvIDIpO1xcbiAgICAtLXBsYXllci1mcjogY2FsYyh2YXIoLS1wbGF5ZXItYXJlYSkgLyAxNSk7XFxuXFxuICAgIC0tc2lkZWJhci1zcGFjaW5nOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgLS1zaWRlYmFyLWFyZWE6IGNhbGModmFyKC0tc2lkZWJhci1zcGFjaW5nKSArIGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDUpKTtcXG4gICAgLS1zaGlwLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tYm9hcmQtYXJlYTogY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMTApO1xcbiAgICAtLWJvYXJkLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi8qIERJU1BMQVkgRkxFWCAqL1xcblxcbmJvZHksXFxubWFpbixcXG4ubWVudSxcXG4udGFsbHksXFxuLnNoaXAsXFxuLmJvYXJkLFxcbi5yb3csXFxuI2FsZXJ0LFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHksXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5ib2FyZCxcXG4jYWxlcnQge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLyogRElTUExBWSBHUklEICovXFxuXFxuI2h1bWFuLFxcbiNjb21wdXRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4jaHVtYW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGViYXItYXJlYSkgdmFyKC0tYm9hcmQtYXJlYSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlYmFyIGJvYXJkJztcXG59XFxuXFxuI2NvbXB1dGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1ib2FyZC1hcmVhKSB2YXIoLS1zaWRlYmFyLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYm9hcmQgc2lkZWJhcic7XFxufVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLnRhbGx5IHtcXG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgfVxcblxcbi8qIFBPU0lUSU9OSU5HICovXFxuXFxuYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBnYXA6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5tZW51IHtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFsbHkge1xcbiAgICAgICAgICAgIGdhcDogY2FsYyh2YXIoLS1zaWRlYmFyLXNwYWNpbmcpIC8gMik7XFxuICAgICAgICB9XFxuXFxuICAgICNhbGVydCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAudGFsbHkgLnNoaXAgZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1zaGlwLWNlbGwpIC8gMik7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1zaGlwLWNlbGwpIC8gMik7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5jZWxsIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1jZWxsKTtcXG4gICAgICAgIH1cXG5cXG4gICAgI2FsZXJ0IHtcXG4gICAgICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMjV2dztcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMik7XFxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgICAgICB9XFxuXFxuLyogQ09MT1JTICovXFxuXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4gICAgI2h1bWFuLFxcbiAgICAjY29tcHV0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMyk7ICAvKiAhIHRlc3RpbmcgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLnNoaXAsXFxuICAgICAgICAuY2VsbC5wbGFjZWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VsZWN0ZWQsXFxuICAgICAgICAuaG92ZXIuaXMtdmFsaWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmhvdmVyLmlzLWludmFsaWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNoaXAucGxhY2VkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2VsbCB7XFxuICAgICAgICAgICAgYm9yZGVyOiBncmVlbiAxcHggc29saWQ7IC8qICEgdGVzdGluZyAqL1xcbiAgICAgICAgfVxcblxcbiNhbGVydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAxMjgsIDAuMyk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAuMyk7ICAgLyogISB0ZXN0aW5nICovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksbUJBQW1CO0lBQ25CLG9FQUFvRTtJQUNwRSwwQ0FBMEM7O0lBRTFDLGdEQUFnRDtJQUNoRCx5RUFBeUU7SUFDekUsNkJBQTZCOztJQUU3Qix5Q0FBeUM7SUFDekMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLGlCQUFpQjs7QUFFakI7Ozs7Ozs7OztJQVNJLGFBQWE7QUFDakI7O0FBRUE7Ozs7O0lBS0ksaUJBQWlCO0FBQ3JCOztBQUVBLGlCQUFpQjs7QUFFakI7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsb0NBQW9DO0FBQ3hDOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKLGdCQUFnQjs7QUFFaEI7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztJQUVJO1FBQ0ksd0JBQXdCO0lBQzVCOztRQUVJO1lBQ0ksMkJBQTJCO1FBQy9COztRQUVBO1lBQ0kscUNBQXFDO1FBQ3pDOztJQUVKO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0FBRUosV0FBVzs7QUFFWDtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztJQUVJO1FBQ0ksNEJBQTRCO0lBQ2hDOztRQUVJOztZQUVJLHFDQUFxQztRQUN6Qzs7UUFFQTtZQUNJLG9DQUFvQztRQUN4Qzs7WUFFSTtnQkFDSSxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0Qjs7Z0JBRUk7O29CQUVJLHdCQUF3QjtvQkFDeEIsdUJBQXVCO2dCQUMzQjs7Z0JBRUE7b0JBQ0ksa0NBQWtDO29CQUNsQyxpQ0FBaUM7Z0JBQ3JDOztRQUVSO1lBQ0kseUJBQXlCO1lBQ3pCLHdCQUF3QjtRQUM1Qjs7SUFFSjtRQUNJLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksV0FBVztJQUNmOztRQUVJO1lBQ0ksa0NBQWtDO1lBQ2xDLFdBQVc7UUFDZjs7WUFFSTtnQkFDSSxZQUFZO2dCQUNaLFdBQVc7WUFDZjs7QUFFWixXQUFXOztBQUVYO0lBQ0ksdUJBQXVCO0FBQzNCOztJQUVJOztRQUVJLHNDQUFzQyxHQUFHLGNBQWM7SUFDM0Q7O1FBRUk7O1lBRUksc0JBQXNCO1FBQzFCOztRQUVBOztZQUVJLHNDQUFzQztRQUMxQzs7UUFFQTtZQUNJLHNDQUFzQztRQUMxQzs7UUFFQTtZQUNJLDBDQUEwQztRQUM5Qzs7UUFFQTtZQUNJLHVCQUF1QixFQUFFLGNBQWM7UUFDM0M7O0FBRVI7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxxQ0FBcUMsSUFBSSxjQUFjO0FBQzNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdMT0JBTCBWQVJJQUJMRVMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1zcGFjaW5nOiAydnc7XFxuICAgIC0tcGxheWVyLWFyZWE6IGNhbGMoY2FsYygxMDB2dyAtIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDQpKSAvIDIpO1xcbiAgICAtLXBsYXllci1mcjogY2FsYyh2YXIoLS1wbGF5ZXItYXJlYSkgLyAxNSk7XFxuXFxuICAgIC0tc2lkZWJhci1zcGFjaW5nOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgLS1zaWRlYmFyLWFyZWE6IGNhbGModmFyKC0tc2lkZWJhci1zcGFjaW5nKSArIGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDUpKTtcXG4gICAgLS1zaGlwLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tYm9hcmQtYXJlYTogY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMTApO1xcbiAgICAtLWJvYXJkLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi8qIERJU1BMQVkgRkxFWCAqL1xcblxcbmJvZHksXFxubWFpbixcXG4ubWVudSxcXG4udGFsbHksXFxuLnNoaXAsXFxuLmJvYXJkLFxcbi5yb3csXFxuI2FsZXJ0LFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHksXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5ib2FyZCxcXG4jYWxlcnQge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLyogRElTUExBWSBHUklEICovXFxuXFxuI2h1bWFuLFxcbiNjb21wdXRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4jaHVtYW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGViYXItYXJlYSkgdmFyKC0tYm9hcmQtYXJlYSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlYmFyIGJvYXJkJztcXG59XFxuXFxuI2NvbXB1dGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1ib2FyZC1hcmVhKSB2YXIoLS1zaWRlYmFyLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYm9hcmQgc2lkZWJhcic7XFxufVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLnRhbGx5IHtcXG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgfVxcblxcbi8qIFBPU0lUSU9OSU5HICovXFxuXFxuYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBnYXA6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5tZW51IHtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFsbHkge1xcbiAgICAgICAgICAgIGdhcDogY2FsYyh2YXIoLS1zaWRlYmFyLXNwYWNpbmcpIC8gMik7XFxuICAgICAgICB9XFxuXFxuICAgICNhbGVydCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAudGFsbHkgLnNoaXAgZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1zaGlwLWNlbGwpIC8gMik7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1zaGlwLWNlbGwpIC8gMik7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5jZWxsIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1jZWxsKTtcXG4gICAgICAgIH1cXG5cXG4gICAgI2FsZXJ0IHtcXG4gICAgICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMjV2dztcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuICAgICAgICBidXR0b24ge1xcbiAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMik7XFxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaW1nIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogYXV0bztcXG4gICAgICAgICAgICB9XFxuXFxuLyogQ09MT1JTICovXFxuXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4gICAgI2h1bWFuLFxcbiAgICAjY29tcHV0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMyk7ICAvKiAhIHRlc3RpbmcgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLnNoaXAsXFxuICAgICAgICAuY2VsbC5wbGFjZWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2VsZWN0ZWQsXFxuICAgICAgICAuaG92ZXIuaXMtdmFsaWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmhvdmVyLmlzLWludmFsaWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNoaXAucGxhY2VkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuY2VsbCB7XFxuICAgICAgICAgICAgYm9yZGVyOiBncmVlbiAxcHggc29saWQ7IC8qICEgdGVzdGluZyAqL1xcbiAgICAgICAgfVxcblxcbiNhbGVydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAxMjgsIDAuMyk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAuMyk7ICAgLyogISB0ZXN0aW5nICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4OyBtYXJnaW46IDBweDtcXG5cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG4vKiBTRUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogY29ycmVjdCBmb250IHNpemUsIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzICovXFxuLyogd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGNvbnRleHRzICovXFxuLyogaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYGhlYWRlcmAgZWxlbWVudHMgYWNyb3NzIGJyb3N3ZXJzICovXFxuXFxuaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi8qIFRFWFQtTEVWRUwgU0VNQU5USUNTID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgZ3JheSBiZyBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIDEuIHJlbW92ZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gKi9cXG4vKiAyLiBhZGQgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIFNhZmFyaSAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBTYWZhcmkgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG5cXG4vKiBFTUJFRERFRCBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbi8qIEZPUk1TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBjaGFuZ2UgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gcmVtb3ZlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBzaG93IG92ZXJmbG93IGluIElFLCBFZGdlICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qIHJlbW92ZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBJRSAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogY29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBib3JkZXIsIHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiByZXN0b3JlIGZvY3VzIHN0eWxlcyB1bnNldCBieSBwcmV2aW91cyBydWxlIF5eICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcblxcbi8qIE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQzs7QUFFckM7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVksRUFBRSxXQUFXOztJQUV6QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsYUFBYTs7SUFFYix3QkFBd0I7QUFDNUI7OztBQUdBLHVDQUF1Qzs7QUFFdkMsK0NBQStDO0FBQy9DLDRDQUE0QztBQUM1QyxtQ0FBbUM7O0FBRW5DO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSw4REFBOEQ7O0FBRTlEO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQSx5REFBeUQ7O0FBRXpEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsbURBQW1EOztBQUVuRCw0Q0FBNEM7O0FBRTVDO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLDBDQUEwQztBQUMxQyxzRUFBc0U7O0FBRXRFO0lBQ0ksbUJBQW1CLEVBQUUsTUFBTTtJQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDN0M7O0FBRUEsb0RBQW9EOztBQUVwRDs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUEsMENBQTBDOztBQUUxQztJQUNJLGNBQWM7QUFDbEI7OztBQUdBLCtDQUErQzs7QUFFL0Msa0RBQWtEOztBQUVsRDtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0Esb0NBQW9DOztBQUVwQywwQ0FBMEM7QUFDMUMsMkNBQTJDOztBQUUzQzs7O0lBR0ksb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtJQUN2QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ3JCOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBLDhEQUE4RDs7QUFFOUQ7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBLGtFQUFrRTs7QUFFbEU7Ozs7SUFJSSwwQkFBMEI7QUFDOUI7O0FBRUEsNENBQTRDOztBQUU1Qzs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUEsbURBQW1EOztBQUVuRDs7OztJQUlJLDhCQUE4QjtBQUNsQzs7O0FBR0EsbUNBQW1DOztBQUVuQyxpQ0FBaUM7O0FBRWpDO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplLCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyAqL1xcbi8qIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYCBjb250ZXh0cyAqL1xcbi8qIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaSAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jYW5jZWwuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NhbmNlbC5zdmdcIixcblx0XCIuL2NvbmZpcm0uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NvbmZpcm0uc3ZnXCIsXG5cdFwiLi9wbGF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9wbGF5LnN2Z1wiLFxuXHRcIi4vcGxheV9ncmF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9wbGF5X2dyYXkuc3ZnXCIsXG5cdFwiLi9yZXN0YXJ0LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9yZXN0YXJ0LnN2Z1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL3NyYy9hc3NldHMgc3luYyBcXFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvXCI7IiwiLy8gJiBwdWJzdWIgZXZlbnRzIG1hbmFnZXJcblxuY29uc3QgZXZlbnRzID0gKCgpID0+IHtcbiAgICBsZXQgX2V2ZW50cyA9IHt9O1xuXG4gICAgLy8gc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiBzdWJzY3JpYmUoZXZlbnROYW1lLCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX2V2ZW50c1tldmVudE5hbWVdKSkge1xuICAgICAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdID0gW107XG4gICAgICAgIH07XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYFNVQlNDUklCSU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgIH1cblxuICAgIC8vIHVuc3Vic2NyaWJlIGV2ZW50IHRvIGxpc3RcbiAgICBmdW5jdGlvbiB1bnN1YnNjcmliZShldmVudE5hbWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXZlbnROYW1lKTtcbiAgICAgICAgY29uc29sZS5sb2coX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpO1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uc3BsaWNlKChfZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMSksIDEpO1xuICAgIH1cblxuICAgIC8vIHB1Ymxpc2ggZXZlbnQgd2l0aCBkYXRhXG4gICAgZnVuY3Rpb24gcHVibGlzaChldmVudE5hbWUsIC4uLmRhdGEpIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpe1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5mb3JFYWNoKGNhbGxiYWNrID0+IHtcbiAgICAgICAgICAgIGNhbGxiYWNrKC4uLmRhdGEpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYFBVQkxJU0hJTkcgdG8gJHtldmVudE5hbWV9YCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIGRlYnVnXG4gICAgZnVuY3Rpb24gdmlld0V2ZW50cygpIHtcbiAgICAgICAgY29uc29sZS5sb2coX2V2ZW50cyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICB1bnN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaCxcbiAgICAgICAgdmlld0V2ZW50cyxcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGV2ZW50czsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5cbi8vIENMQVNTRVNcbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCA9IG51bGwsIG5hbWUgPSBudWxsLCBjb29yZHMgPSBudWxsKSB7XG4gICAgICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLmhpdHMgPSAwO1xuICAgICAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5jb29yZHMgPSBjb29yZHM7XG4gICAgfVxuXG4gICAgaXNQbGFjZWQoKSB7XG4gICAgICAgIHRoaXMucGxhY2VkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9nSGl0KCkge1xuICAgICAgICB0aGlzLmhpdHMgKz0gMTtcbiAgICAgICAgdGhpcy5pc1N1bmsoKTtcbiAgICB9XG4gICAgaXNTdW5rKCkge1xuICAgICAgICBpZiAodGhpcy5oaXRzID09PSB0aGlzLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZ3JpZCA9IFtbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dXTtcbiAgICAgICAgdGhpcy5zaGlwcyA9IFtdO1xuICAgICAgICB0aGlzLnNoaXBzU3VuayA9IDA7XG4gICAgfVxuXG4gICAgZ2V0U2hpcCh0YXJnZXRDb29yZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaGlwc1tpXS5jb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaGlwc1tpXS5jb29yZHNbal0gPT09IHRhcmdldENvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNoaXBzW2ldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVTaGlwKHNoaXBOYW1lKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHNbaV0ubmFtZSA9PT0gc2hpcE5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjbGVhclNoaXBzKCkge1xuICAgICAgICB3aGlsZSAodGhpcy5zaGlwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnBvcCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHBsYWNlU2hpcChzdGFydENvb3JkLCBkaXIsIHNoaXBMZW4sIHNoaXBOYW1lKSB7XG4gICAgICAgIGxldCBjb29yZFNldCA9IHRoaXMuZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpciwgc2hpcExlbik7IC8vIHVzZWQgYnkgY29tcHV0ZXIgQUkgdG8gZ2VuZXJhdGUgc2hpcCBwbGFjZW1lbnRcbiAgICAgICAgaWYgKHRoaXMuc2V0SXNWYWxpZChjb29yZFNldCkpIHsgICAgLy8gdXNlZCBieSBjb21wdXRlciBBSSB0byB2YXJpZnlwbGFjZW1lbnQgdmFsaWRpdHlcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChtYWtlU2hpcChzaGlwTGVuLCBzaGlwTmFtZSwgY29vcmRTZXQpKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBzLmxlbmd0aCA9PT0gNykge1xuICAgICAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdtYWtlUGxheUxpdmUnLCAnJyk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanMsIGdhbWUuanNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICAvLyB1c2VkIGJ5IGNvbXB1dGVyIEFJIHRvIGNvbnRyb2wgcGxhY2VtZW50IGxvb3BcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8gXCJcIlxuICAgIH1cbiAgICBnZXRDb29yZHMoc3RhcnRDb29yZCwgZGlyLCBzaGlwTGVuKSB7XG4gICAgICAgIGxldCBjb29yZFNldCA9IFtzdGFydENvb3JkXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBzd2l0Y2ggKGRpcikge1xuICAgICAgICAgICAgY2FzZSAndSc6IHtcbiAgICAgICAgICAgICAgICBsZXQgeVBvc2l0aW9uID0gcGFyc2VJbnQoc3RhcnRDb29yZC5zcGxpdCgnJylbMV0pO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgc2hpcExlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgeVBvc2l0aW9uIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHlQb3NpdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q29vcmQgPSBzdGFydENvb3JkLnNwbGl0KCcnKVswXSArIHlQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRTZXQuc3BsaWNlKDAsIDAsIG5ld0Nvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2QnOiB7XG4gICAgICAgICAgICAgICAgbGV0IHlQb3NpdGlvbiA9IHBhcnNlSW50KHN0YXJ0Q29vcmQuc3BsaXQoJycpWzFdKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNoaXBMZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHlQb3NpdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICB5UG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Nvb3JkID0gc3RhcnRDb29yZC5zcGxpdCgnJylbMF0gKyB5UG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkU2V0LnB1c2gobmV3Q29vcmQpO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnbCc6IHtcbiAgICAgICAgICAgICAgICBsZXQgeFBvc2l0aW9uID0gcGFyc2VJbnQoc3RhcnRDb29yZC5zcGxpdCgnJylbMF0pO1xuICAgICAgICAgICAgICAgIHdoaWxlIChpIDwgc2hpcExlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgeFBvc2l0aW9uIC09IDE7XG4gICAgICAgICAgICAgICAgICAgIHhQb3NpdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3Q29vcmQgPSB4UG9zaXRpb24gKyBzdGFydENvb3JkLnNwbGl0KCcnKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgY29vcmRTZXQuc3BsaWNlKDAsIDAsIG5ld0Nvb3JkKTtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ3InOiB7XG4gICAgICAgICAgICAgICAgbGV0IHhQb3NpdGlvbiA9IHBhcnNlSW50KHN0YXJ0Q29vcmQuc3BsaXQoJycpWzBdKTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IHNoaXBMZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHhQb3NpdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgICAgICB4UG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0Nvb3JkID0geFBvc2l0aW9uICsgc3RhcnRDb29yZC5zcGxpdCgnJylbMV07XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkU2V0LnB1c2gobmV3Q29vcmQpO1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZFNldDtcbiAgICB9XG4gICAgc2V0SXNWYWxpZChjb29yZFNldCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkU2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29vcmRTZXRbaV0ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBuZXdYID0gcGFyc2VJbnQoY29vcmRTZXRbaV0uc3BsaXQoJycpWzBdKTtcbiAgICAgICAgICAgIGxldCBuZXdZID0gcGFyc2VJbnQoY29vcmRTZXRbaV0uc3BsaXQoJycpWzFdKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwID0gdGhpcy5zaGlwc1tqXTtcbiAgICAgICAgICAgICAgICBsZXQgeE1pbiA9IHBhcnNlSW50KHNoaXAuY29vcmRzWzBdLnNwbGl0KCcnKVswXSkgLSAxO1xuICAgICAgICAgICAgICAgIGxldCB4TWF4ID0gcGFyc2VJbnQoc2hpcC5jb29yZHNbc2hpcC5jb29yZHMubGVuZ3RoIC0gMV0uc3BsaXQoJycpWzBdKSArIDFcbiAgICAgICAgICAgICAgICBsZXQgeU1pbiA9IHBhcnNlSW50KHNoaXAuY29vcmRzWzBdLnNwbGl0KCcnKVsxXSkgLSAxO1xuICAgICAgICAgICAgICAgIGxldCB5TWF4ID0gcGFyc2VJbnQoc2hpcC5jb29yZHNbc2hpcC5jb29yZHMubGVuZ3RoIC0gMV0uc3BsaXQoJycpWzFdKSArIDFcbiAgICAgICAgICAgICAgICBpZiAobmV3WCA+PSB4TWluICYmIG5ld1ggPD0geE1heCAmJiBuZXdZID49IHlNaW4gJiYgbmV3WSA8PSB5TWF4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZWNlaXZlQXR0YWNrKGNvb3JkKSB7XG4gICAgICAgIGxldCBvdXRjb21lID0gdGhpcy5pc0hpdChjb29yZCk7XG4gICAgICAgIGxldCBoaXQgPSBvdXRjb21lWzBdO1xuICAgICAgICBsZXQgc2hpcCA9IG91dGNvbWVbMV07XG4gICAgICAgIGlmIChoaXQpIHtcbiAgICAgICAgICAgIHRoaXMubWFya0JvYXJkKGNvb3JkLCAneCcpO1xuICAgICAgICAgICAgc2hpcC5sb2dIaXQoKTtcbiAgICAgICAgICAgIGlmIChzaGlwLnN1bmspIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBzU3VuayArPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKCFoaXQpIHtcbiAgICAgICAgICAgIHRoaXMubWFya0JvYXJkKGNvb3JkLCAnbycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlzSGl0KGF0dGFja0Nvb3JkKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNoaXAgPSB0aGlzLnNoaXBzW2ldO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwLmNvb3Jkcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBzaGlwQ29vcmQgPSBzaGlwLmNvb3Jkc1tqXTtcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNrQ29vcmQgPT09IHNoaXBDb29yZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW3RydWUsIHNoaXBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW2ZhbHNlLCB1bmRlZmluZWRdO1xuICAgIH1cbiAgICBtYXJrQm9hcmQoY29vcmQsIG1hcmspIHtcbiAgICAgICAgbGV0IHggPSBwYXJzZUludChjb29yZC5zcGxpdCgnJylbMF0pO1xuICAgICAgICBsZXQgeSA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KCcnKVsxXSk7XG4gICAgICAgIHRoaXMuZ3JpZFt5XVt4XSA9IG1hcms7XG4gICAgfVxuXG4gICAgaXNMb3NlcigpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hpcHNTdW5rID09PSB0aGlzLnNoaXBzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBIdW1hbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudHlwZSA9ICdodW1hbic7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBtYWtlR2FtZWJvYXJkKCk7XG4gICAgfVxuXG4gICAgc2VuZEF0dGFjayhjb29yZCwgYm9hcmQpIHtcbiAgICAgICAgYm9hcmQucmVjZWl2ZUF0dGFjayhjb29yZCk7XG4gICAgfVxufVxuY2xhc3MgQ29tcHV0ZXIgZXh0ZW5kcyBIdW1hbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKEh1bWFuKTtcbiAgICAgICAgdGhpcy50eXBlID0gJ2NvbXB1dGVyJztcbiAgICAgICAgdGhpcy5hdHRhY2tzTWFkZSA9IFtdO1xuICAgIH1cblxuICAgIHJhbmRvbWl6ZVNoaXBzKCkge1xuICAgICAgICBsZXQgYXZhaWxTaGlwcyA9IFsxLCAxLCAyLCAyLCAzLCA0LCA1XTtcbiAgICAgICAgbGV0IGRpcnMgPSBbJ3UnLCAnZCcsICdsJywgJ3InXTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChhdmFpbFNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzaGlwTGVuID0gYXZhaWxTaGlwc1swXTtcbiAgICAgICAgICAgIGF2YWlsU2hpcHMuc3BsaWNlKDAsIDEpO1xuXG4gICAgICAgICAgICBsZXQgZGlyID0gZGlyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJzLmxlbmd0aCldO1xuXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICh2YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmQgPSAnJztcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjb29yZCArPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuYm9hcmQucGxhY2VTaGlwKGNvb3JkLCBkaXIsIHNoaXBMZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJhbmRvbWl6ZUF0dGFjayhib2FyZCkge1xuICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKHZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gJyc7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb29yZCArPSBpbmRleDtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYXR0YWNrc01hZGUuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrc01hZGUucHVzaChjb29yZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQXR0YWNrKGNvb3JkLCBib2FyZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gRkFDVE9SSUVTXG5mdW5jdGlvbiBtYWtlU2hpcChsZW5ndGgsIG5hbWUsIGNvb3Jkcykge1xuICAgIHJldHVybiBuZXcgU2hpcChsZW5ndGgsIG5hbWUsIGNvb3Jkcyk7XG59XG5mdW5jdGlvbiBtYWtlR2FtZWJvYXJkKCkge1xuICAgIHJldHVybiBuZXcgR2FtZWJvYXJkKCk7XG59XG5mdW5jdGlvbiBtYWtlUGxheWVyKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2h1bWFuJykge1xuICAgICAgICByZXR1cm4gbmV3IEh1bWFuKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29tcHV0ZXIoKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydCB7IG1ha2VTaGlwIGFzIGRlZmF1bHQsIG1ha2VHYW1lYm9hcmQsIG1ha2VQbGF5ZXIgfTsgICAvLyB0ZXN0aW5nIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgbWFrZVBsYXllcjtcbiIsImNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgLy8gZGF0YVxuICAgIGxldCBfYXR0cmlidXRlcyA9IFtdO1xuICAgIGxldCBlbGVtZW50O1xuXG4gICAgLy8gYmFzaWMgaGVscGVyIGZhY3Rvcmllc1xuICAgIGNvbnN0IGRpdiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHNwYW4gPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgcCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBoMiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaDQgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVsID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBsaSA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaW5wdXQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBwbGFjZWhvbGRlciwgaWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBTdHJpbmcoaWQpO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBTdHJpbmcoaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3QgPSBmdW5jdGlvbihuYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGxhYmVsID0gZnVuY3Rpb24oY29udGVudCwgZm9yUmVmZXJlbmNlLCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmZvciA9IFN0cmluZyhmb3JSZWZlcmVuY2UpO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGxlZ2VuZCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBpbWcgPSBmdW5jdGlvbih1cmwsIGFsdCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsZW1lbnQuc3JjID0gYC4uLyR7dXJsfWA7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gdXJsO1xuICAgICAgICBlbGVtZW50LmFsdCA9IGFsdDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGJ1dHRvbiA9IGZ1bmN0aW9uKGNvbnRlbnQsIHN0YXRlLCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGVsZW1lbnQucm9sZSA9ICdidXR0b24nO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IHN0YXRlO1xuICAgICAgICBlbGVtZW50LmFyaWFQcmVzc2VkID0gJ2ZhbHNlJztcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gaGVscGVyc1xuICAgIGZ1bmN0aW9uIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXR0cmlidXRlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2ldWzBdID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pZCA9IGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpdixcbiAgICAgICAgc3BhbixcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGU7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IG1ha2VQbGF5ZXIgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuY29uc3QgZ2FtZSA9ICgoKSA9PiB7XG4gICAgbGV0IGh1bWFuO1xuICAgIGxldCBjb21wdXRlcjtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGh1bWFuID0gbWFrZVBsYXllcignaHVtYW4nKTtcbiAgICAgICAgY29tcHV0ZXIgPSBtYWtlUGxheWVyKCdjb21wdXRlcicpOyAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcXVlcnlDb29yZERhdGEoc3RhcnRDb29yZCwgZGlyZWN0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgbGV0IGNvb3JkU2V0ID0gaHVtYW4uYm9hcmQuZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoKTtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSBodW1hbi5ib2FyZC5zZXRJc1ZhbGlkKGNvb3JkU2V0KTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmVDb29yZERhdGEnLCBjb29yZFNldCwgaXNWYWxpZCk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwKHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoLCBuYW1lKSB7XG4gICAgICAgIGh1bWFuLmJvYXJkLnBsYWNlU2hpcChzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCwgbmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHF1ZXJ5U2hpcERhdGEodGFyZ2V0SUQpIHtcbiAgICAgICAgbGV0IHNoaXAgPSBodW1hbi5ib2FyZC5nZXRTaGlwKHRhcmdldElEKTtcbiAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlY2VpdmVTaGlwRGF0YScsIHNoaXAubmFtZSwgc2hpcC5sZW5ndGgsIHNoaXAuY29vcmRzKTsgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVTaGlwRGF0YSh0YXJnZXROYW1lKSB7XG4gICAgICAgIGh1bWFuLmJvYXJkLnJlbW92ZVNoaXAodGFyZ2V0TmFtZSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyU2hpcERhdGEoKSB7XG4gICAgICAgIGh1bWFuLmJvYXJkLmNsZWFyU2hpcHMoKTtcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncXVlcnlDb29yZERhdGEnLCBxdWVyeUNvb3JkRGF0YSk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAocGxheWVyQm9hcmRzWzBdLm9uTW91c2VPdmVyLCBib2R5Lm9uS2V5RG93bilcbiAgICBldmVudHMuc3Vic2NyaWJlKCdwbGFjZVNoaXAnLCBwbGFjZVNoaXApOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdxdWVyeVNoaXBEYXRhJywgcXVlcnlTaGlwRGF0YSk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qcyAoYm9keS5vbkNsaWNrKVxuICAgIGV2ZW50cy5zdWJzY3JpYmUoJ3JlbW92ZVNoaXBEYXRhJywgcmVtb3ZlU2hpcERhdGEpOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKGJvZHkub25DbGljaylcbiAgICBldmVudHMuc3Vic2NyaWJlKCdjbGVhclNoaXBEYXRhJywgY2xlYXJTaGlwRGF0YSk7IC8vIHB1Ymxpc2hlZCBieSB1aS5qYSAoYm9keS5vbkNsaWNrKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgLy8gdXNlZCBieSBpbmRleC5qc1xuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZ2FtZTtcbiIsIi8vIGNhY2hlIGltYWdlc1xubGV0IGltZ1F1ZXJ5ID0gcmVxdWlyZS5jb250ZXh0KCcuLi9hc3NldHMnLCBmYWxzZSwgL1xcLihwbmd8c3ZnfGpwZ3xqcGVnfGdpZikkL2kpO1xubGV0IGljb25zQXJyYXkgPSBpbXBvcnRJY29ucyhpbWdRdWVyeSk7XG4vLyBjb25zb2xlLmxvZygnKioqKiogSUNPTlMgQVJSQVkgKioqKionKTtcbi8vIGNvbnNvbGUubG9nKGljb25zQXJyYXkpO1xuXG4vLyBtZXRob2RzXG5mdW5jdGlvbiBpbXBvcnRJY29ucyhyKSB7XG4gICAgbGV0IHF1ZXJ5S2V5cyA9IHIua2V5cygpO1xuICAgIGxldCBpY29ucyA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcnlLZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGxldCBuZXdLZXkgPSBxdWVyeUtleXNbaV0uc3BsaXQoJy5zdmcnKVswXS5zcGxpdCgnLi8nKVsxXTtcbiAgICAgICAgbGV0IG5ld1ZhbHVlID0gYC4vYXNzZXRzLyR7cXVlcnlLZXlzW2ldLnNwbGl0KCcuLycpWzFdfWA7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYG5ld0tleSAtLT4gJHtuZXdLZXl9YCk7XG4gICAgICAgIC8vLy8gY29uc29sZS5sb2coYG5ld1ZhbHVlIC0tPiAke25ld1ZhbHVlfWApXG4gICAgICAgIFxuICAgICAgICBpY29uc1tuZXdLZXldID0gbmV3VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGljb25zO1xufVxuXG5leHBvcnQgZGVmYXVsdCBpY29uc0FycmF5OyIsImltcG9ydCBldmVudHMgZnJvbSAnLi4vZXZlbnRzLmpzJztcbmltcG9ydCBjcmVhdGUgZnJvbSAnLi9jcmVhdGUuanMnO1xuXG5jb25zdCB1aSA9ICgoKSA9PiB7XG4gICAgbGV0IHBsYXllckJvYXJkcyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4nKS5sYXN0RWxlbWVudENoaWxkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXInKS5sYXN0RWxlbWVudENoaWxkXTtcbiAgICBsZXQgc2hpcENvbnRhaW5lcnMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuJykuZmlyc3RFbGVtZW50Q2hpbGQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlcicpLmZpcnN0RWxlbWVudENoaWxkXTtcbiAgICBsZXQgcGxheUJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5LWdhbWUnKTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGxldCBzdGF0ZSA9IHtcbiAgICAgICAgcGxhY2luZzogZmFsc2UsXG4gICAgICAgIHRhcmdldENlbGw6IHVuZGVmaW5lZCxcbiAgICAgICAgc2VsZWN0ZWRTaGlwOiB1bmRlZmluZWQsXG4gICAgICAgIGNvb3JkRGF0YTogdW5kZWZpbmVkLFxuICAgICAgICBkaXJlY3Rpb246ICdyJ1xuICAgIH1cblxuICAgIC8vIGV2ZW50IGxpc3RlbmVyc1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQuaWQgPT09ICdwbGF5LWdhbWUnIHx8IGUudGFyZ2V0LmlkID09PSAncGxheScpIHtcbiAgICAgICAgICAgIC8vIHBsYXkoKTtcbiAgICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pZCA9PT0gJ3Jlc3RhcnQtZ2FtZScgfHwgZS50YXJnZXQuaWQgPT09ICdyZXN0YXJ0Jykge1xuICAgICAgICAgICAgcmVzdGFydCgpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUnKSAmJiAhZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSB7XG4gICAgICAgICAgICBzZXRNZW51U2VsZWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICBpZiAoc3RhdGUucGxhY2luZyAmJiBzdGF0ZS5jb29yZERhdGFbMV0pIHtcbiAgICAgICAgICAgICAgICBldmVudHMucHVibGlzaCgncGxhY2VTaGlwJywgc3RhdGUudGFyZ2V0Q2VsbC5pZCwgc3RhdGUuZGlyZWN0aW9uLCBzdGF0ZS5zZWxlY3RlZFNoaXAuaWQuc3BsaXQoJy0nKVswXSwgc3RhdGUuc2VsZWN0ZWRTaGlwLmlkLnNwbGl0KCctJylbMV0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgICAgICAgICBwbGFjZVNoaXBVSSgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghc3RhdGUucGxhY2luZyAmJiBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpKSB7XG4gICAgICAgICAgICAgICAgc3RhdGUucGxhY2luZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3F1ZXJ5U2hpcERhdGEnLCBzdGF0ZS50YXJnZXRDZWxsLmlkKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3JlbW92ZVNoaXBEYXRhJywgc3RhdGUuc2VsZWN0ZWRTaGlwLmlkLnNwbGl0KCctJylbMV0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIGJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUua2V5KTtcbiAgICAgICAgbGV0IHZhbGlkS2V5cyA9IFsnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnXTtcbiAgICAgICAgaWYgKHZhbGlkS2V5cy5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZS5rZXkpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd1VwJzpcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuZGlyZWN0aW9uID0gJ3UnXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93RG93bic6XG4gICAgICAgICAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdkJ1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdBcnJvd0xlZnQnOlxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAnbCc7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOlxuICAgICAgICAgICAgICAgICAgICBzdGF0ZS5kaXJlY3Rpb24gPSAncic7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncXVlcnlDb29yZERhdGEnLCBzdGF0ZS50YXJnZXRDZWxsLmlkLCBzdGF0ZS5kaXJlY3Rpb24sIHN0YXRlLnNlbGVjdGVkU2hpcC5pZC5zcGxpdCgnLScpWzBdKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdFc2NhcGUnKSB7XG4gICAgICAgICAgICBzZXRNZW51U2VsZWN0KHN0YXRlLnNlbGVjdGVkU2hpcCk7XG4gICAgICAgICAgICByZW1vdmVDZWxsSG92ZXIoKTtcbiAgICAgICAgfVxuICAgIH0pXG4gICAgcGxheWVyQm9hcmRzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIHN0YXRlLnRhcmdldENlbGwgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHN0YXRlLnBsYWNpbmcpIHtcbiAgICAgICAgICAgIGV2ZW50cy5wdWJsaXNoKCdxdWVyeUNvb3JkRGF0YScsIHN0YXRlLnRhcmdldENlbGwuaWQsIHN0YXRlLmRpcmVjdGlvbiwgc3RhdGUuc2VsZWN0ZWRTaGlwLmlkLnNwbGl0KCctJylbMF0pOyAvLyBzdWJzY3JpYmVkIGJ5IGdhbWUuanNcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHBsYXllckJvYXJkc1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICBpZiAoc3RhdGUucGxhY2luZykge1xuICAgICAgICAgICAgcmVtb3ZlQ2VsbEhvdmVyKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gZHJpdmVyIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBpbml0KCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgcGxheWVyQm9hcmRzLmxlbmd0aCkge1xuICAgICAgICAgICAgZ2VuZXJhdGVHcmlkKHBsYXllckJvYXJkc1tpXSk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICAgICAgc2V0U2VjdGlvblR5cGUoc2hpcENvbnRhaW5lcnNbMF0sICdtZW51Jyk7XG4gICAgICAgIGdlbmVyYXRlU2hpcE1lbnUoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHNoaXBDb250YWluZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2xlYXJTaGlwQ29udGFpbmVyKHNoaXBDb250YWluZXJzW2ldKTtcbiAgICAgICAgICAgIHNldFNlY3Rpb25UeXBlKHNoaXBDb250YWluZXJzW2ldLCAndGFsbHknKTtcbiAgICAgICAgICAgIGdlbmVyYXRlU2hpcFRhbGxpZXMoc2hpcENvbnRhaW5lcnNbaV0sIGkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlc3RhcnQoKSB7XG4gICAgICAgIC8vIHJlc2V0IGJvYXJkXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyQm9hcmRzWzBdLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHBsYXllckJvYXJkc1swXS5jaGlsZHJlbltpXS5jaGlsZHJlbi5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJCb2FyZHNbMF0uY2hpbGRyZW5baV0uY2hpbGRyZW5bal0uY2xhc3NMaXN0Lmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyQm9hcmRzWzBdLmNoaWxkcmVuW2ldLmNoaWxkcmVuW2pdLmNsYXNzTGlzdCA9ICdjZWxsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmVzZXQgbWVudVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBDb250YWluZXJzWzBdLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoc2hpcENvbnRhaW5lcnNbMF0uY2hpbGRyZW5baV0uY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSkge1xuICAgICAgICAgICAgICAgIHNoaXBDb250YWluZXJzWzBdLmNoaWxkcmVuW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ3BsYWNlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIHJlc2V0IHBsYXkgYnV0dG9uXG4gICAgICAgIHBsYXlCdXR0b24uY2hpbGRyZW5bMF0uc3JjID0gJy4vaWNvbnMvcGxheV9ncmF5LnN2Zyc7XG4gICAgICAgIHBsYXlCdXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICBwbGF5QnV0dG9uLmFyaWFEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIC8vIGNsZWFyIGh1bWFuIHBsYXllciBvZiBzaGlwc1xuICAgICAgICBldmVudHMucHVibGlzaCgnY2xlYXJTaGlwRGF0YScsICcnKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgIC8vIGNsZWFyIHN0YXRlXG4gICAgICAgIHN0YXRlLnBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUudGFyZ2V0Q2VsbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuICAgICAgICBzdGF0ZS5jb29yZERhdGEgPSB1bmRlZmluZWQ7XG4gICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdyJztcbiAgICB9XG5cbiAgICAvLyBnZW5lcmF0aXZlIG1ldGhvZHNcbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUdyaWQoYm9hcmQpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IDEwKSB7XG4gICAgICAgICAgICBsZXQgcm93ID0gY3JlYXRlLmRpdignJywgJy5yb3cnKVxuICAgICAgICAgICAgbGV0IGogPSAwO1xuICAgICAgICAgICAgd2hpbGUgKGogPCAxMCkge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gY3JlYXRlLmRpdignJywgJy5jZWxsJywgYCMke2p9JHtpfWApO1xuICAgICAgICAgICAgICAgIHJvdy5hcHBlbmQoY2VsbCk7XG4gICAgICAgICAgICAgICAgaisrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYm9hcmQuYXBwZW5kKHJvdyk7XG4gICAgICAgICAgICBpKys7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gc2V0U2VjdGlvblR5cGUoc2VjdGlvbiwgc2VsZWN0b3IpIHtcbiAgICAgICAgaWYgKHNlY3Rpb24uY2xhc3NMaXN0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0ID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QuYWRkKHNlbGVjdG9yKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTaGlwTWVudSgpIHtcbiAgICAgICAgbWFrZVNoaXBJY29ucygnJywgc2hpcENvbnRhaW5lcnNbMF0pO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNoaXBUYWxsaWVzKHRhbGx5Q29udGFpbmVyLCBpbmRleCkge1xuICAgICAgICBsZXQgcGxheWVyVHlwZTtcbiAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XG4gICAgICAgICAgICBwbGF5ZXJUeXBlID0gJ2gnO1xuICAgICAgICB9IGVsc2UgIHtcbiAgICAgICAgICAgIHBsYXllclR5cGUgPSAnYyc7XG4gICAgICAgIH1cbiAgICAgICAgbWFrZVNoaXBJY29ucyhwbGF5ZXJUeXBlLCB0YWxseUNvbnRhaW5lcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIG1ha2VTaGlwSWNvbnMocGxheWVyVHlwZSwgY29udGFpbmVyKSB7XG4gICAgICAgIGxldCBzaGlwcyA9IFtbNSwgJ2FjYyddLFxuICAgICAgICAgICAgICAgICAgICAgWzQsICdicyddLFxuICAgICAgICAgICAgICAgICAgICAgWzMsICdjcnVzJ10sXG4gICAgICAgICAgICAgICAgICAgICBbMiwgJ2Rlc3QxJ10sXG4gICAgICAgICAgICAgICAgICAgICBbMiwgJ2Rlc3QyJ10sXG4gICAgICAgICAgICAgICAgICAgICBbMSwgJ3N1YjEnXSxcbiAgICAgICAgICAgICAgICAgICAgIFsxLCAnc3ViMiddXG4gICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsQ29udGFpbmVyO1xuICAgICAgICAgICAgaWYgKHBsYXllclR5cGUgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgY2VsbENvbnRhaW5lciA9IGNyZWF0ZS5kaXYoJycsICcuc2hpcCcsIGAjJHtzaGlwc1tpXVswXX0tJHtzaGlwc1tpXVsxXX1gKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2VsbENvbnRhaW5lciA9IGNyZWF0ZS5kaXYoJycsICcuc2hpcCcsIGAjJHtwbGF5ZXJUeXBlfS0ke3NoaXBzW2ldWzFdfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBzaGlwc1tpXVswXTsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBjcmVhdGUuZGl2KCcnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY2VsbENvbnRhaW5lci5hcHBlbmQoY2VsbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kKGNlbGxDb250YWluZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGNsZWFyU2hpcENvbnRhaW5lcihjb250YWluZXIpIHtcbiAgICAgICAgd2hpbGUgKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKSB7XG4gICAgICAgICAgICBjb250YWluZXIucmVtb3ZlQ2hpbGQoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gcGxhY2VtZW50IG1ldGhvZHNcbiAgICBmdW5jdGlvbiBzZXRNZW51U2VsZWN0KHRhcmdldFNoaXApIHtcbiAgICAgICAgaWYgKHN0YXRlLnNlbGVjdGVkU2hpcCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBzdGF0ZS5wbGFjaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHN0YXRlLnNlbGVjdGVkU2hpcCA9IHRhcmdldFNoaXA7XG4gICAgICAgICAgICBhZGRNZW51U2VsZWN0KHN0YXRlLnNlbGVjdGVkU2hpcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0U2hpcCA9PT0gc3RhdGUuc2VsZWN0ZWRTaGlwKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVudVNlbGVjdChzdGF0ZS5zZWxlY3RlZFNoaXApO1xuICAgICAgICAgICAgICAgIHN0YXRlLnBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNoaXAgIT09IHN0YXRlLnNlbGVjdGVkU2hpcCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lbnVTZWxlY3Qoc3RhdGUuc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5zZWxlY3RlZFNoaXAgPSB0YXJnZXRTaGlwO1xuICAgICAgICAgICAgICAgIGFkZE1lbnVTZWxlY3Qoc3RhdGUuc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RhdGUuZGlyZWN0aW9uICE9PSAncicpIHtcbiAgICAgICAgICAgIHN0YXRlLmRpcmVjdGlvbiA9ICdyJztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRNZW51U2VsZWN0KHNoaXApIHtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVNZW51U2VsZWN0KHNoaXApIHtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRCb2FyZEhvdmVyKGNvb3JkU2V0LCBpc1ZhbGlkKSB7XG4gICAgICAgICAgICByZW1vdmVDZWxsSG92ZXIoKTtcbiAgICAgICAgICAgIHN0YXRlLmNvb3JkRGF0YSA9IFtjb29yZFNldCwgaXNWYWxpZF07XG4gICAgICAgICAgICBhZGRDZWxsSG92ZXIoc3RhdGUuY29vcmREYXRhWzFdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkQ2VsbEhvdmVyKGlzVmFsaWQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb29yZERhdGFbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChzdGF0ZS5jb29yZERhdGFbMF1baV0ubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0YXRlLmNvb3JkRGF0YVswXVtpXSk7XG4gICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdob3ZlcicpO1xuICAgICAgICAgICAgICAgIGlmIChpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaXMtdmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaXMtaW52YWxpZCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVDZWxsSG92ZXIoKSB7XG4gICAgICAgIGlmIChzdGF0ZS5jb29yZERhdGEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZS5jb29yZERhdGFbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUuY29vcmREYXRhWzBdW2ldLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3RhdGUuY29vcmREYXRhWzBdW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnY2VsbCBwbGFjZWQnO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcGxhY2VTaGlwVUkoKSB7XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkU2hpcC5jbGFzc0xpc3QgPSAnc2hpcCBwbGFjZWQnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YXRlLmNvb3JkRGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdGF0ZS5jb29yZERhdGFbMF1baV0pO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnY2VsbCc7XG4gICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ3BsYWNlZCcpO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnBsYWNpbmcgPSBmYWxzZTtcbiAgICAgICAgc3RhdGUuc2VsZWN0ZWRTaGlwID0gdW5kZWZpbmVkO1xuICAgICAgICBzdGF0ZS5jb29yZERhdGEgPSB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlcGxhY2VTaGlwVUkobmFtZSwgbGVuZ3RoLCBjb29yZHMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmRzW2ldKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gJ2NlbGwgaG92ZXIgaXMtdmFsaWQnO1xuICAgICAgICB9XG4gICAgICAgIHN0YXRlLnNlbGVjdGVkU2hpcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2xlbmd0aH0tJHtuYW1lfWApO1xuICAgICAgICBzdGF0ZS5jb29yZERhdGEgPSBbY29vcmRzLCB0cnVlXTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFrZVBsYXlMaXZlKCkge1xuICAgICAgICBwbGF5QnV0dG9uLmNoaWxkcmVuWzBdLnNyYyA9ICcuL2ljb25zL3BsYXkuc3ZnJztcbiAgICAgICAgcGxheUJ1dHRvbi5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICBwbGF5QnV0dG9uLmFyaWFEaXNhYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZWNlaXZlQ29vcmREYXRhJywgc2V0Qm9hcmRIb3Zlcik7IC8vIHB1Ymxpc2hlZCBieSBnYW1lLmpzIChxdWVyeUNvb3JkRGF0YSlcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZWNlaXZlU2hpcERhdGEnLCByZXBsYWNlU2hpcFVJKTsgLy8gcHVibGlzaGVkIGJ5IGdhbWUuanMgKHF1ZXJ5U2hpcERhdGEpXG4gICAgZXZlbnRzLnN1YnNjcmliZSgnbWFrZVBsYXlMaXZlJywgbWFrZVBsYXlMaXZlKTsgLy8gcHVibGlzaGVkIGJ5IGNsYXNzZXMuanMgKGdhbWVib2FyZC5wbGFjZVNoaXApXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0LCAvLyB1c2VkIGJ5IGluZGV4LmpzXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCB1aTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzL3Jlc2V0LmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dsb2JhbC5jc3MnO1xuaW1wb3J0IGljb25zQXJyYXkgZnJvbSAnLi9zY3JpcHRzL2ljb25zLmpzJztcbmltcG9ydCBnYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lLmpzJztcbmltcG9ydCB1aSBmcm9tICcuL3NjcmlwdHMvdWkuanMnO1xuXG5nYW1lLmluaXQoKTtcbnVpLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==