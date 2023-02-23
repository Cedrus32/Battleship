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
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL VARIABLES */\n\n:root {\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 15);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(var(--player-fr) * 10);\n    --board-cell: var(--player-fr);\n}\n\n.hide {\n    z-index: -1;\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-areas: 'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-areas: 'board sidebar';\n}\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .menu {\n            gap: var(--sidebar-spacing);\n        }\n\n        .tally {\n            gap: calc(var(--sidebar-spacing) / 2);\n        }\n\n    #alert {\n        position: absolute;\n        align-items: center;\n        gap: var(--main-spacing);\n    }\n\n    footer {\n        justify-content: center;\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n                .tally .ship div {\n                    height: calc(var(--ship-cell) / 2);\n                    width: calc(var(--ship-cell) / 2);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    #alert {\n        min-width: max-content;\n        width: 25vw;\n        padding: var(--main-spacing);\n    }\n\n    footer {\n        width: 100%;\n    }\n\n/* COLORS */\n\nmain {\n    background-color: white;\n}\n\n    #human,\n    #computer {\n        background-color: rgba(255, 0, 0, 0.3);  /* ! testing */\n    }\n\n        .ship,\n        .cell.placed {\n            background-color: blue;\n        }\n\n        .selected,\n        .hover.is-valid {\n            background-color: rgba(0, 0, 255, 0.5);\n        }\n\n        .hover.is-invalid {\n            background-color: rgba(255, 0, 0, 0.5);\n        }\n\n        .ship.placed {\n            background-color: rgba(128, 128, 128, 0.5);\n        }\n\n        .cell {\n            border: green 1px solid; /* ! testing */\n        }\n\n#alert {\n    background-color: rgba(128, 0, 128, 0.3);\n}\n\nfooter {\n    background-color: rgba(255, 166, 0.3);   /* ! testing */\n}\n", "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB;IACI,mBAAmB;IACnB,oEAAoE;IACpE,0CAA0C;;IAE1C,gDAAgD;IAChD,yEAAyE;IACzE,6BAA6B;;IAE7B,yCAAyC;IACzC,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA,iBAAiB;;AAEjB;;;;;;;;;IASI,aAAa;AACjB;;AAEA;;;;;IAKI,iBAAiB;AACrB;;AAEA,iBAAiB;;AAEjB;;IAEI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,oCAAoC;AACxC;;AAEA;IACI,4DAA4D;IAC5D,oCAAoC;AACxC;;IAEI;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,gBAAgB;IACpB;;AAEJ,gBAAgB;;AAEhB;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;IAEI;QACI,wBAAwB;IAC5B;;QAEI;YACI,2BAA2B;QAC/B;;QAEA;YACI,qCAAqC;QACzC;;IAEJ;QACI,kBAAkB;QAClB,mBAAmB;QACnB,wBAAwB;IAC5B;;IAEA;QACI,uBAAuB;IAC3B;;AAEJ,WAAW;;AAEX;IACI,YAAY;IACZ,YAAY;AAChB;;IAEI;QACI,4BAA4B;IAChC;;QAEI;;YAEI,qCAAqC;QACzC;;QAEA;YACI,oCAAoC;QACxC;;YAEI;gBACI,YAAY;gBACZ,kBAAkB;YACtB;;gBAEI;;oBAEI,wBAAwB;oBACxB,uBAAuB;gBAC3B;;gBAEA;oBACI,kCAAkC;oBAClC,iCAAiC;gBACrC;;QAER;YACI,yBAAyB;YACzB,wBAAwB;QAC5B;;IAEJ;QACI,sBAAsB;QACtB,WAAW;QACX,4BAA4B;IAChC;;IAEA;QACI,WAAW;IACf;;AAEJ,WAAW;;AAEX;IACI,uBAAuB;AAC3B;;IAEI;;QAEI,sCAAsC,GAAG,cAAc;IAC3D;;QAEI;;YAEI,sBAAsB;QAC1B;;QAEA;;YAEI,sCAAsC;QAC1C;;QAEA;YACI,sCAAsC;QAC1C;;QAEA;YACI,0CAA0C;QAC9C;;QAEA;YACI,uBAAuB,EAAE,cAAc;QAC3C;;AAER;IACI,wCAAwC;AAC5C;;AAEA;IACI,qCAAqC,IAAI,cAAc;AAC3D","sourcesContent":["/* GLOBAL VARIABLES */\n\n:root {\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 15);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(var(--player-fr) * 10);\n    --board-cell: var(--player-fr);\n}\n\n.hide {\n    z-index: -1;\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-areas: 'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-areas: 'board sidebar';\n}\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .menu {\n            gap: var(--sidebar-spacing);\n        }\n\n        .tally {\n            gap: calc(var(--sidebar-spacing) / 2);\n        }\n\n    #alert {\n        position: absolute;\n        align-items: center;\n        gap: var(--main-spacing);\n    }\n\n    footer {\n        justify-content: center;\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n                .tally .ship div {\n                    height: calc(var(--ship-cell) / 2);\n                    width: calc(var(--ship-cell) / 2);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    #alert {\n        min-width: max-content;\n        width: 25vw;\n        padding: var(--main-spacing);\n    }\n\n    footer {\n        width: 100%;\n    }\n\n/* COLORS */\n\nmain {\n    background-color: white;\n}\n\n    #human,\n    #computer {\n        background-color: rgba(255, 0, 0, 0.3);  /* ! testing */\n    }\n\n        .ship,\n        .cell.placed {\n            background-color: blue;\n        }\n\n        .selected,\n        .hover.is-valid {\n            background-color: rgba(0, 0, 255, 0.5);\n        }\n\n        .hover.is-invalid {\n            background-color: rgba(255, 0, 0, 0.5);\n        }\n\n        .ship.placed {\n            background-color: rgba(128, 128, 128, 0.5);\n        }\n\n        .cell {\n            border: green 1px solid; /* ! testing */\n        }\n\n#alert {\n    background-color: rgba(128, 0, 128, 0.3);\n}\n\nfooter {\n    background-color: rgba(255, 166, 0.3);   /* ! testing */\n}\n"],"sourceRoot":""}]);
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
// CLASSES
class Ship {
    constructor(length = null, coords = null) {
        this.length = length;
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

    placeShip(startCoord, dir, shipLen) {
        let coordSet = this.getCoords(startCoord, dir, shipLen);
        if (this.setIsValid(coordSet)) {
            this.ships.push(makeShip(shipLen, coordSet));
            return true;    // used by computer AI to mark valid placements
        }
        return false;   // ""
    }
    getCoords(startCoord, dir, shipLen) {
        let coordSet = [startCoord];
        let i = 0;
        if (dir === 'h') {
            let xPosition = parseInt(startCoord.split('')[0]);
            while (i < shipLen - 1) {
                xPosition += 1;
                xPosition.toString();
                let newCoord = xPosition + startCoord.split('')[1];
                coordSet.push(newCoord);
                i++;
            }
        } else if (dir === 'v') {
            let yPosition = parseInt(startCoord.split('')[1]);
            while (i < shipLen - 1) {
                yPosition += 1;
                yPosition.toString();
                let newCoord = startCoord.split('')[0] + yPosition;
                coordSet.push(newCoord);
                i++;
            }
        }
        return coordSet;
    }
    setIsValid(coordSet) {
        for (let i = 0; i < coordSet.length; i++) {
            if (coordSet[i].length > 2) {
                // console.log('coord out of bounds');
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
                    console.log('coord already taken');
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
        let dirs = ['h', 'v'];
        // availShips.splice(6);   // ! remove after testing
        // availShips.splice(4, 1);    // ! remove after testing
        
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
function makeShip(length, coords) {
    return new Ship(length, coords);
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
        console.log(human);
        console.log(computer);    
    }

    function getCoordsFromHuman(startCoord, direction, length) {
        // console.log('pass to getCoordsFromHuman:', startCoord, direction, length);
        let coordSet = human.board.getCoords(startCoord, direction, length);
        let isValid = human.board.setIsValid(coordSet);
        // console.log('getCoordsFromHuman:', coordSet, isValid);
        _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('receiveIDArray', coordSet, isValid); // subscribed by ui.js
    }

    // event subscriptions
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('queryIDArray', getCoordsFromHuman); // published by ui.js (playerBoards[0].onMouseOver)

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
console.log('***** ICONS ARRAY *****');
console.log(iconsArray);

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
/* harmony import */ var _icons_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons.js */ "./src/scripts/icons.js");




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
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryIDArray', e.target.id, direction, selectedShip.id.slice(0, 1)); // subscribed by game.js
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
    _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].subscribe('receiveIDArray', setBoardHover); // published by game.js (getCoordsFromHuman)

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
/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/game.js */ "./src/scripts/game.js");
/* harmony import */ var _scripts_ui_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/ui.js */ "./src/scripts/ui.js");





_scripts_game_js__WEBPACK_IMPORTED_MODULE_2__["default"].init();
_scripts_ui_js__WEBPACK_IMPORTED_MODULE_3__["default"].init();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLElBQUk7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3QkFBd0IseUJBQXlCO0FBQ2pEO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUthO0FBQ0k7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQix1REFBVTtB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OztVQ2hObEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDZkE7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNEI7QUFDQTtBQUNTO0FBQ0o7O0FBRWpDLDZEQUFTO0FBQ1QsMkRBQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcz9mMGQ4Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL3Jlc2V0LmNzcz80Y2ZiIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9hc3NldHMvIHN5bmMgbm9ucmVjdXJzaXZlIFxcLihwbmclN0NzdmclN0NqcGclN0NqcGVnJTdDZ2lmKSQvIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZXZlbnRzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jbGFzc2VzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2dhbWUuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zY3JpcHRzL2ljb25zLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy91aS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogR0xPQkFMIFZBUklBQkxFUyAqL1xcblxcbjpyb290IHtcXG4gICAgLS1tYWluLXNwYWNpbmc6IDJ2dztcXG4gICAgLS1wbGF5ZXItYXJlYTogY2FsYyhjYWxjKDEwMHZ3IC0gY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpICogNCkpIC8gMik7XFxuICAgIC0tcGxheWVyLWZyOiBjYWxjKHZhcigtLXBsYXllci1hcmVhKSAvIDE1KTtcXG5cXG4gICAgLS1zaWRlYmFyLXNwYWNpbmc6IGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAvIDIpO1xcbiAgICAtLXNpZGViYXItYXJlYTogY2FsYyh2YXIoLS1zaWRlYmFyLXNwYWNpbmcpICsgY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogNSkpO1xcbiAgICAtLXNoaXAtY2VsbDogdmFyKC0tcGxheWVyLWZyKTtcXG5cXG4gICAgLS1ib2FyZC1hcmVhOiBjYWxjKHZhcigtLXBsYXllci1mcikgKiAxMCk7XFxuICAgIC0tYm9hcmQtY2VsbDogdmFyKC0tcGxheWVyLWZyKTtcXG59XFxuXFxuLmhpZGUge1xcbiAgICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLyogRElTUExBWSBGTEVYICovXFxuXFxuYm9keSxcXG5tYWluLFxcbi5tZW51LFxcbi50YWxseSxcXG4uc2hpcCxcXG4uYm9hcmQsXFxuLnJvdyxcXG4jYWxlcnQsXFxuZm9vdGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuYm9keSxcXG4ubWVudSxcXG4udGFsbHksXFxuLmJvYXJkLFxcbiNhbGVydCB7XFxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xcbn1cXG5cXG4vKiBESVNQTEFZIEdSSUQgKi9cXG5cXG4jaHVtYW4sXFxuI2NvbXB1dGVyIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxufVxcblxcbiNodW1hbiB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tc2lkZWJhci1hcmVhKSB2YXIoLS1ib2FyZC1hcmVhKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3NpZGViYXIgYm9hcmQnO1xcbn1cXG5cXG4jY29tcHV0ZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLWJvYXJkLWFyZWEpIHZhcigtLXNpZGViYXItYXJlYSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdib2FyZCBzaWRlYmFyJztcXG59XFxuXFxuICAgIC5tZW51IHtcXG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgfVxcblxcbiAgICAudGFsbHkge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICB9XFxuXFxuICAgIC5ib2FyZCB7XFxuICAgICAgICBncmlkLWFyZWE6IGJvYXJkO1xcbiAgICB9XFxuXFxuLyogUE9TSVRJT05JTkcgKi9cXG5cXG5ib2R5IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUge1xcbiAgICAgICAgICAgIGdhcDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC50YWxseSB7XFxuICAgICAgICAgICAgZ2FwOiBjYWxjKHZhcigtLXNpZGViYXItc3BhY2luZykgLyAyKTtcXG4gICAgICAgIH1cXG5cXG4gICAgI2FsZXJ0IHtcXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgICBnYXA6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB9XFxuXFxuLyogU0laSU5HICovXFxuXFxuYm9keSB7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgd2lkdGg6IDEwMHZ3O1xcbn1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgICAgICAubWVudSxcXG4gICAgICAgICNodW1hbiAudGFsbHkge1xcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAjY29tcHV0ZXIgLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNoaXAge1xcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgICAgICAgICAgICAgIHdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC5tZW51IC5zaGlwIGRpdixcXG4gICAgICAgICAgICAgICAgLmNlbGwgLnNoaXAgZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1zaGlwLWNlbGwpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIC50YWxseSAuc2hpcCBkaXYge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLXNoaXAtY2VsbCkgLyAyKTtcXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLXNoaXAtY2VsbCkgLyAyKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGwge1xcbiAgICAgICAgICAgIGhlaWdodDogdmFyKC0tYm9hcmQtY2VsbCk7XFxuICAgICAgICAgICAgd2lkdGg6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgfVxcblxcbiAgICAjYWxlcnQge1xcbiAgICAgICAgbWluLXdpZHRoOiBtYXgtY29udGVudDtcXG4gICAgICAgIHdpZHRoOiAyNXZ3O1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgIH1cXG5cXG4vKiBDT0xPUlMgKi9cXG5cXG5tYWluIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcblxcbiAgICAjaHVtYW4sXFxuICAgICNjb21wdXRlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zKTsgIC8qICEgdGVzdGluZyAqL1xcbiAgICB9XFxuXFxuICAgICAgICAuc2hpcCxcXG4gICAgICAgIC5jZWxsLnBsYWNlZCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zZWxlY3RlZCxcXG4gICAgICAgIC5ob3Zlci5pcy12YWxpZCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAyNTUsIDAuNSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaG92ZXIuaXMtaW52YWxpZCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuc2hpcC5wbGFjZWQge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5jZWxsIHtcXG4gICAgICAgICAgICBib3JkZXI6IGdyZWVuIDFweCBzb2xpZDsgLyogISB0ZXN0aW5nICovXFxuICAgICAgICB9XFxuXFxuI2FsZXJ0IHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDAsIDEyOCwgMC4zKTtcXG59XFxuXFxuZm9vdGVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDE2NiwgMC4zKTsgICAvKiAhIHRlc3RpbmcgKi9cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFCQUFxQjs7QUFFckI7SUFDSSxtQkFBbUI7SUFDbkIsb0VBQW9FO0lBQ3BFLDBDQUEwQzs7SUFFMUMsZ0RBQWdEO0lBQ2hELHlFQUF5RTtJQUN6RSw2QkFBNkI7O0lBRTdCLHlDQUF5QztJQUN6Qyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUEsaUJBQWlCOztBQUVqQjs7Ozs7Ozs7O0lBU0ksYUFBYTtBQUNqQjs7QUFFQTs7Ozs7SUFLSSxpQkFBaUI7QUFDckI7O0FBRUEsaUJBQWlCOztBQUVqQjs7SUFFSSxhQUFhO0lBQ2IsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksNERBQTREO0lBQzVELG9DQUFvQztBQUN4Qzs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxvQ0FBb0M7QUFDeEM7O0lBRUk7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxnQkFBZ0I7SUFDcEI7O0FBRUosZ0JBQWdCOztBQUVoQjtJQUNJLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0lBRUk7UUFDSSx3QkFBd0I7SUFDNUI7O1FBRUk7WUFDSSwyQkFBMkI7UUFDL0I7O1FBRUE7WUFDSSxxQ0FBcUM7UUFDekM7O0lBRUo7UUFDSSxrQkFBa0I7UUFDbEIsbUJBQW1CO1FBQ25CLHdCQUF3QjtJQUM1Qjs7SUFFQTtRQUNJLHVCQUF1QjtJQUMzQjs7QUFFSixXQUFXOztBQUVYO0lBQ0ksWUFBWTtJQUNaLFlBQVk7QUFDaEI7O0lBRUk7UUFDSSw0QkFBNEI7SUFDaEM7O1FBRUk7O1lBRUkscUNBQXFDO1FBQ3pDOztRQUVBO1lBQ0ksb0NBQW9DO1FBQ3hDOztZQUVJO2dCQUNJLFlBQVk7Z0JBQ1osa0JBQWtCO1lBQ3RCOztnQkFFSTs7b0JBRUksd0JBQXdCO29CQUN4Qix1QkFBdUI7Z0JBQzNCOztnQkFFQTtvQkFDSSxrQ0FBa0M7b0JBQ2xDLGlDQUFpQztnQkFDckM7O1FBRVI7WUFDSSx5QkFBeUI7WUFDekIsd0JBQXdCO1FBQzVCOztJQUVKO1FBQ0ksc0JBQXNCO1FBQ3RCLFdBQVc7UUFDWCw0QkFBNEI7SUFDaEM7O0lBRUE7UUFDSSxXQUFXO0lBQ2Y7O0FBRUosV0FBVzs7QUFFWDtJQUNJLHVCQUF1QjtBQUMzQjs7SUFFSTs7UUFFSSxzQ0FBc0MsR0FBRyxjQUFjO0lBQzNEOztRQUVJOztZQUVJLHNCQUFzQjtRQUMxQjs7UUFFQTs7WUFFSSxzQ0FBc0M7UUFDMUM7O1FBRUE7WUFDSSxzQ0FBc0M7UUFDMUM7O1FBRUE7WUFDSSwwQ0FBMEM7UUFDOUM7O1FBRUE7WUFDSSx1QkFBdUIsRUFBRSxjQUFjO1FBQzNDOztBQUVSO0lBQ0ksd0NBQXdDO0FBQzVDOztBQUVBO0lBQ0kscUNBQXFDLElBQUksY0FBYztBQUMzRFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgVkFSSUFCTEVTICovXFxuXFxuOnJvb3Qge1xcbiAgICAtLW1haW4tc3BhY2luZzogMnZ3O1xcbiAgICAtLXBsYXllci1hcmVhOiBjYWxjKGNhbGMoMTAwdncgLSBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgKiA0KSkgLyAyKTtcXG4gICAgLS1wbGF5ZXItZnI6IGNhbGModmFyKC0tcGxheWVyLWFyZWEpIC8gMTUpO1xcblxcbiAgICAtLXNpZGViYXItc3BhY2luZzogY2FsYyh2YXIoLS1tYWluLXNwYWNpbmcpIC8gMik7XFxuICAgIC0tc2lkZWJhci1hcmVhOiBjYWxjKHZhcigtLXNpZGViYXItc3BhY2luZykgKyBjYWxjKHZhcigtLXBsYXllci1mcikgKiA1KSk7XFxuICAgIC0tc2hpcC1jZWxsOiB2YXIoLS1wbGF5ZXItZnIpO1xcblxcbiAgICAtLWJvYXJkLWFyZWE6IGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDEwKTtcXG4gICAgLS1ib2FyZC1jZWxsOiB2YXIoLS1wbGF5ZXItZnIpO1xcbn1cXG5cXG4uaGlkZSB7XFxuICAgIHotaW5kZXg6IC0xO1xcbn1cXG5cXG4vKiBESVNQTEFZIEZMRVggKi9cXG5cXG5ib2R5LFxcbm1haW4sXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5zaGlwLFxcbi5ib2FyZCxcXG4ucm93LFxcbiNhbGVydCxcXG5mb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG5ib2R5LFxcbi5tZW51LFxcbi50YWxseSxcXG4uYm9hcmQsXFxuI2FsZXJ0IHtcXG4gICAgZmxleC1mbG93OiBjb2x1bW47XFxufVxcblxcbi8qIERJU1BMQVkgR1JJRCAqL1xcblxcbiNodW1hbixcXG4jY29tcHV0ZXIge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcXG59XFxuXFxuI2h1bWFuIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1zaWRlYmFyLWFyZWEpIHZhcigtLWJvYXJkLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnc2lkZWJhciBib2FyZCc7XFxufVxcblxcbiNjb21wdXRlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogdmFyKC0tYm9hcmQtYXJlYSkgdmFyKC0tc2lkZWJhci1hcmVhKTtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ2JvYXJkIHNpZGViYXInO1xcbn1cXG5cXG4gICAgLm1lbnUge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBzaWRlYmFyO1xcbiAgICB9XFxuXFxuICAgIC50YWxseSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLmJvYXJkIHtcXG4gICAgICAgIGdyaWQtYXJlYTogYm9hcmQ7XFxuICAgIH1cXG5cXG4vKiBQT1NJVElPTklORyAqL1xcblxcbmJvZHkge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgICAgICAubWVudSB7XFxuICAgICAgICAgICAgZ2FwOiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnRhbGx5IHtcXG4gICAgICAgICAgICBnYXA6IGNhbGModmFyKC0tc2lkZWJhci1zcGFjaW5nKSAvIDIpO1xcbiAgICAgICAgfVxcblxcbiAgICAjYWxlcnQge1xcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAgIGdhcDogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICBmb290ZXIge1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4vKiBTSVpJTkcgKi9cXG5cXG5ib2R5IHtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICB3aWR0aDogMTAwdnc7XFxufVxcblxcbiAgICBtYWluIHtcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5tZW51LFxcbiAgICAgICAgI2h1bWFuIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNjb21wdXRlciAudGFsbHkge1xcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogdmFyKC0tc2lkZWJhci1zcGFjaW5nKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICAgICAuc2hpcCB7XFxuICAgICAgICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgICAgICAgICAgd2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLm1lbnUgLnNoaXAgZGl2LFxcbiAgICAgICAgICAgICAgICAuY2VsbCAuc2hpcCBkaXYge1xcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1zaGlwLWNlbGwpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgLnRhbGx5IC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0tc2hpcC1jZWxsKSAvIDIpO1xcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGModmFyKC0tc2hpcC1jZWxsKSAvIDIpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAuY2VsbCB7XFxuICAgICAgICAgICAgaGVpZ2h0OiB2YXIoLS1ib2FyZC1jZWxsKTtcXG4gICAgICAgICAgICB3aWR0aDogdmFyKC0tYm9hcmQtY2VsbCk7XFxuICAgICAgICB9XFxuXFxuICAgICNhbGVydCB7XFxuICAgICAgICBtaW4td2lkdGg6IG1heC1jb250ZW50O1xcbiAgICAgICAgd2lkdGg6IDI1dnc7XFxuICAgICAgICBwYWRkaW5nOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgfVxcblxcbi8qIENPTE9SUyAqL1xcblxcbm1haW4ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuICAgICNodW1hbixcXG4gICAgI2NvbXB1dGVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjMpOyAgLyogISB0ZXN0aW5nICovXFxuICAgIH1cXG5cXG4gICAgICAgIC5zaGlwLFxcbiAgICAgICAgLmNlbGwucGxhY2VkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLnNlbGVjdGVkLFxcbiAgICAgICAgLmhvdmVyLmlzLXZhbGlkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDI1NSwgMC41KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5ob3Zlci5pcy1pbnZhbGlkIHtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC41KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5zaGlwLnBsYWNlZCB7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgLmNlbGwge1xcbiAgICAgICAgICAgIGJvcmRlcjogZ3JlZW4gMXB4IHNvbGlkOyAvKiAhIHRlc3RpbmcgKi9cXG4gICAgICAgIH1cXG5cXG4jYWxlcnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyOCwgMCwgMTI4LCAwLjMpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTY2LCAwLjMpOyAgIC8qICEgdGVzdGluZyAqL1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplLCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyAqL1xcbi8qIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYCBjb250ZXh0cyAqL1xcbi8qIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaSAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQ0FBcUM7O0FBRXJDOzs7SUFHSSxzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSxZQUFZLEVBQUUsV0FBVzs7SUFFekIsaUJBQWlCO0lBQ2pCLDhCQUE4QjtJQUM5QiwwQkFBMEI7SUFDMUIsZUFBZTtJQUNmLGFBQWE7O0lBRWIsd0JBQXdCO0FBQzVCOzs7QUFHQSx1Q0FBdUM7O0FBRXZDLCtDQUErQztBQUMvQyw0Q0FBNEM7QUFDNUMsbUNBQW1DOztBQUVuQztJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7QUFDcEI7O0FBRUEsOERBQThEOztBQUU5RDtJQUNJLGFBQWE7SUFDYixxQkFBcUI7QUFDekI7O0FBRUEseURBQXlEOztBQUV6RDtJQUNJLGFBQWE7SUFDYixtQkFBbUI7QUFDdkI7OztBQUdBLG1EQUFtRDs7QUFFbkQsNENBQTRDOztBQUU1QztJQUNJLDZCQUE2QjtBQUNqQzs7QUFFQSwwQ0FBMEM7QUFDMUMsc0VBQXNFOztBQUV0RTtJQUNJLG1CQUFtQixFQUFFLE1BQU07SUFDM0IsMEJBQTBCLEVBQUUsTUFBTTtJQUNsQyxpQ0FBaUMsRUFBRSxNQUFNO0FBQzdDOztBQUVBLG9EQUFvRDs7QUFFcEQ7O0lBRUksbUJBQW1CO0FBQ3ZCOztBQUVBLDBDQUEwQzs7QUFFMUM7SUFDSSxjQUFjO0FBQ2xCOzs7QUFHQSwrQ0FBK0M7O0FBRS9DLGtEQUFrRDs7QUFFbEQ7SUFDSSxrQkFBa0I7QUFDdEI7OztBQUdBLG9DQUFvQzs7QUFFcEMsMENBQTBDO0FBQzFDLDJDQUEyQzs7QUFFM0M7OztJQUdJLG9CQUFvQixFQUFFLE1BQU07SUFDNUIsZUFBZSxFQUFFLE1BQU07SUFDdkIsaUJBQWlCLEVBQUUsTUFBTTtJQUN6QixTQUFTLEVBQUUsTUFBTTtBQUNyQjs7QUFFQSw4QkFBOEI7O0FBRTlCOztJQUVJLGlCQUFpQjtBQUNyQjs7QUFFQSw4REFBOEQ7O0FBRTlEOztJQUVJLG9CQUFvQjtBQUN4Qjs7QUFFQSxrRUFBa0U7O0FBRWxFOzs7O0lBSUksMEJBQTBCO0FBQzlCOztBQUVBLDRDQUE0Qzs7QUFFNUM7Ozs7SUFJSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkOztBQUVBLG1EQUFtRDs7QUFFbkQ7Ozs7SUFJSSw4QkFBOEI7QUFDbEM7OztBQUdBLG1DQUFtQzs7QUFFbkMsaUNBQWlDOztBQUVqQztJQUNJLGFBQWE7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogR0xPQkFMID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbioge1xcbiAgICBwYWRkaW5nOiAwcHg7IG1hcmdpbjogMHB4O1xcblxcbiAgICBsaW5lLWhlaWdodDogMS4xNTtcXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcblxcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcblxcbi8qIFNFQ1RJT05TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBjb3JyZWN0IGZvbnQgc2l6ZSwgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgKi9cXG4vKiB3aXRoaW4gYHNlY3Rpb25gIGFuZCBgYXJ0aWNsZWAgY29udGV4dHMgKi9cXG4vKiBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkgKi9cXG5cXG5oMSB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgaGVhZGVyYCBlbGVtZW50cyBhY3Jvc3MgYnJvc3dlcnMgKi9cXG5cXG5oMiwgaDMsIGg0LCBoNSwgaDYge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBwYCBlbGVtZW50cyBhY3Jvc3MgYnJvd3NlcnMgKi9cXG5cXG5wIHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuXFxuLyogVEVYVC1MRVZFTCBTRU1BTlRJQ1MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBncmF5IGJnIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmEge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLyogMS4gcmVtb3ZlIGJvdHRvbSBib3JkZXIgaW4gQ2hyb21lIDU3LSAqL1xcbi8qIDIuIGFkZCBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgU2FmYXJpICovXFxuXFxuYWJiclt0aXRsZV0ge1xcbiAgICBib3JkZXItYm90dG9tOiBub25lOyAvKiAxICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIFNhZmFyaSAqL1xcblxcbmIsXFxuc3Ryb25nIHtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2VycyAqL1xcblxcbnNtYWxsIHtcXG4gICAgZm9udC1zaXplOiA4MCU7XFxufVxcblxcblxcbi8qIEVNQkVEREVEIENPTlRFTlQgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIHJlbW92ZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMCAqL1xcblxcbmltZyB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG59XFxuXFxuXFxuLyogRk9STVMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIDEuIGNoYW5nZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMgKi9cXG4vKiAyLiByZW1vdmUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCxcXG5zZWxlY3Qge1xcbiAgICBmb250LWZhbWlseTogaW5oZXJpdDsgLyogMSAqL1xcbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7IC8qIDEgKi9cXG4gICAgbWFyZ2luOiAwOyAvKiAyICovXFxufVxcblxcbi8qIHNob3cgb3ZlcmZsb3cgaW4gSUUsIEVkZ2UgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQge1xcbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyogcmVtb3ZlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIElFICovXFxuXFxuYnV0dG9uLFxcbnNlbGVjdCB7XFxuICAgIHRleHQtdHJhbnNmb3JtOiBub25lO1xcbn1cXG5cXG4vKiBjb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUywgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXSxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXSxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcXG59XFxuXFxuLyogcmVtb3ZlIGlubmVyIGJvcmRlciwgcGFkZGluZyBpbiBGaXJlZm94ICovXFxuXFxuYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbi8qIHJlc3RvcmUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHByZXZpb3VzIHJ1bGUgXl4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuICAgIG91dGxpbmU6IDFweCBkb3R0ZWQgQnV0dG9uVGV4dDtcXG59XFxuXFxuXFxuLyogTUlTQyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogYWRkIGNvcnJlY3QgZGlzcGxheSBpbiBJRSAxMCAqL1xcblxcbltoaWRkZW5dIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2xvYmFsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9yZXNldC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vY2FuY2VsLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jYW5jZWwuc3ZnXCIsXG5cdFwiLi9jb25maXJtLnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9jb25maXJtLnN2Z1wiLFxuXHRcIi4vcGxheS5zdmdcIjogXCIuL3NyYy9hc3NldHMvcGxheS5zdmdcIixcblx0XCIuL3Jlc3RhcnQuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL3Jlc3RhcnQuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2Fzc2V0cyBzeW5jIFxcXFwuKHBuZyU3Q3N2ZyU3Q2pwZyU3Q2pwZWclN0NnaWYpJC9cIjsiLCIvLyAmIHB1YnN1YiBldmVudHMgbWFuYWdlclxuXG5jb25zdCBldmVudHMgPSAoKCkgPT4ge1xuICAgIGxldCBfZXZlbnRzID0ge307XG5cbiAgICAvLyBzdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudE5hbWUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKSB7XG4gICAgICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0gPSBbXTtcbiAgICAgICAgfTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnB1c2goY2FsbGJhY2spO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhgU1VCU0NSSUJJTkcgdG8gJHtldmVudE5hbWV9YCk7XG4gICAgfVxuXG4gICAgLy8gdW5zdWJzY3JpYmUgZXZlbnQgdG8gbGlzdFxuICAgIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGV2ZW50TmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhldmVudE5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzW2V2ZW50TmFtZV0ubGVuZ3RoIC0gMSk7XG4gICAgICAgIF9ldmVudHNbZXZlbnROYW1lXS5zcGxpY2UoKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKSwgMSk7XG4gICAgfVxuXG4gICAgLy8gcHVibGlzaCBldmVudCB3aXRoIGRhdGFcbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50TmFtZSwgLi4uZGF0YSkge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoX2V2ZW50c1tldmVudE5hbWVdKSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLmZvckVhY2goY2FsbGJhY2sgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2soLi4uZGF0YSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUFVCTElTSElORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gZGVidWdcbiAgICBmdW5jdGlvbiB2aWV3RXZlbnRzKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhfZXZlbnRzKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzdWJzY3JpYmUsXG4gICAgICAgIHVuc3Vic2NyaWJlLFxuICAgICAgICBwdWJsaXNoLFxuICAgICAgICB2aWV3RXZlbnRzLFxuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgZXZlbnRzOyIsIi8vIENMQVNTRVNcbmNsYXNzIFNoaXAge1xuICAgIGNvbnN0cnVjdG9yKGxlbmd0aCA9IG51bGwsIGNvb3JkcyA9IG51bGwpIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgICAgIHRoaXMuaGl0cyA9IDA7XG4gICAgICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgICAgICB0aGlzLmNvb3JkcyA9IGNvb3JkcztcbiAgICB9XG5cbiAgICBpc1BsYWNlZCgpIHtcbiAgICAgICAgdGhpcy5wbGFjZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsb2dIaXQoKSB7XG4gICAgICAgIHRoaXMuaGl0cyArPSAxO1xuICAgICAgICB0aGlzLmlzU3VuaygpO1xuICAgIH1cbiAgICBpc1N1bmsoKSB7XG4gICAgICAgIGlmICh0aGlzLmhpdHMgPT09IHRoaXMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnN1bmsgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ncmlkID0gW1tbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV1dO1xuICAgICAgICB0aGlzLnNoaXBzID0gW107XG4gICAgICAgIHRoaXMuc2hpcHNTdW5rID0gMDtcbiAgICB9XG5cbiAgICBwbGFjZVNoaXAoc3RhcnRDb29yZCwgZGlyLCBzaGlwTGVuKSB7XG4gICAgICAgIGxldCBjb29yZFNldCA9IHRoaXMuZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpciwgc2hpcExlbik7XG4gICAgICAgIGlmICh0aGlzLnNldElzVmFsaWQoY29vcmRTZXQpKSB7XG4gICAgICAgICAgICB0aGlzLnNoaXBzLnB1c2gobWFrZVNoaXAoc2hpcExlbiwgY29vcmRTZXQpKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlOyAgICAvLyB1c2VkIGJ5IGNvbXB1dGVyIEFJIHRvIG1hcmsgdmFsaWQgcGxhY2VtZW50c1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTsgICAvLyBcIlwiXG4gICAgfVxuICAgIGdldENvb3JkcyhzdGFydENvb3JkLCBkaXIsIHNoaXBMZW4pIHtcbiAgICAgICAgbGV0IGNvb3JkU2V0ID0gW3N0YXJ0Q29vcmRdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGlmIChkaXIgPT09ICdoJykge1xuICAgICAgICAgICAgbGV0IHhQb3NpdGlvbiA9IHBhcnNlSW50KHN0YXJ0Q29vcmQuc3BsaXQoJycpWzBdKTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgc2hpcExlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICB4UG9zaXRpb24gKz0gMTtcbiAgICAgICAgICAgICAgICB4UG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29vcmQgPSB4UG9zaXRpb24gKyBzdGFydENvb3JkLnNwbGl0KCcnKVsxXTtcbiAgICAgICAgICAgICAgICBjb29yZFNldC5wdXNoKG5ld0Nvb3JkKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoZGlyID09PSAndicpIHtcbiAgICAgICAgICAgIGxldCB5UG9zaXRpb24gPSBwYXJzZUludChzdGFydENvb3JkLnNwbGl0KCcnKVsxXSk7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IHNoaXBMZW4gLSAxKSB7XG4gICAgICAgICAgICAgICAgeVBvc2l0aW9uICs9IDE7XG4gICAgICAgICAgICAgICAgeVBvc2l0aW9uLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgbGV0IG5ld0Nvb3JkID0gc3RhcnRDb29yZC5zcGxpdCgnJylbMF0gKyB5UG9zaXRpb247XG4gICAgICAgICAgICAgICAgY29vcmRTZXQucHVzaChuZXdDb29yZCk7XG4gICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb29yZFNldDtcbiAgICB9XG4gICAgc2V0SXNWYWxpZChjb29yZFNldCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkU2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY29vcmRTZXRbaV0ubGVuZ3RoID4gMikge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdjb29yZCBvdXQgb2YgYm91bmRzJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5ld1ggPSBwYXJzZUludChjb29yZFNldFtpXS5zcGxpdCgnJylbMF0pO1xuICAgICAgICAgICAgbGV0IG5ld1kgPSBwYXJzZUludChjb29yZFNldFtpXS5zcGxpdCgnJylbMV0pO1xuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLnNoaXBzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXAgPSB0aGlzLnNoaXBzW2pdO1xuICAgICAgICAgICAgICAgIGxldCB4TWluID0gcGFyc2VJbnQoc2hpcC5jb29yZHNbMF0uc3BsaXQoJycpWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgbGV0IHhNYXggPSBwYXJzZUludChzaGlwLmNvb3Jkc1tzaGlwLmNvb3Jkcy5sZW5ndGggLSAxXS5zcGxpdCgnJylbMF0pICsgMVxuICAgICAgICAgICAgICAgIGxldCB5TWluID0gcGFyc2VJbnQoc2hpcC5jb29yZHNbMF0uc3BsaXQoJycpWzFdKSAtIDE7XG4gICAgICAgICAgICAgICAgbGV0IHlNYXggPSBwYXJzZUludChzaGlwLmNvb3Jkc1tzaGlwLmNvb3Jkcy5sZW5ndGggLSAxXS5zcGxpdCgnJylbMV0pICsgMVxuICAgICAgICAgICAgICAgIGlmIChuZXdYID49IHhNaW4gJiYgbmV3WCA8PSB4TWF4ICYmIG5ld1kgPj0geU1pbiAmJiBuZXdZIDw9IHlNYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Nvb3JkIGFscmVhZHkgdGFrZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJlY2VpdmVBdHRhY2soY29vcmQpIHtcbiAgICAgICAgbGV0IG91dGNvbWUgPSB0aGlzLmlzSGl0KGNvb3JkKTtcbiAgICAgICAgbGV0IGhpdCA9IG91dGNvbWVbMF07XG4gICAgICAgIGxldCBzaGlwID0gb3V0Y29tZVsxXTtcbiAgICAgICAgaWYgKGhpdCkge1xuICAgICAgICAgICAgdGhpcy5tYXJrQm9hcmQoY29vcmQsICd4Jyk7XG4gICAgICAgICAgICBzaGlwLmxvZ0hpdCgpO1xuICAgICAgICAgICAgaWYgKHNoaXAuc3Vuaykge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHNTdW5rICs9IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWhpdCkge1xuICAgICAgICAgICAgdGhpcy5tYXJrQm9hcmQoY29vcmQsICdvJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaXNIaXQoYXR0YWNrQ29vcmQpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc2hpcCA9IHRoaXMuc2hpcHNbaV07XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXAuY29vcmRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNoaXBDb29yZCA9IHNoaXAuY29vcmRzW2pdO1xuICAgICAgICAgICAgICAgIGlmIChhdHRhY2tDb29yZCA9PT0gc2hpcENvb3JkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdHJ1ZSwgc2hpcF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBbZmFsc2UsIHVuZGVmaW5lZF07XG4gICAgfVxuICAgIG1hcmtCb2FyZChjb29yZCwgbWFyaykge1xuICAgICAgICBsZXQgeCA9IHBhcnNlSW50KGNvb3JkLnNwbGl0KCcnKVswXSk7XG4gICAgICAgIGxldCB5ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoJycpWzFdKTtcbiAgICAgICAgdGhpcy5ncmlkW3ldW3hdID0gbWFyaztcbiAgICB9XG5cbiAgICBpc0xvc2VyKCkge1xuICAgICAgICBpZiAodGhpcy5zaGlwc1N1bmsgPT09IHRoaXMuc2hpcHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmNsYXNzIEh1bWFuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50eXBlID0gJ2h1bWFuJztcbiAgICAgICAgdGhpcy5ib2FyZCA9IG1ha2VHYW1lYm9hcmQoKTtcbiAgICB9XG5cbiAgICBzZW5kQXR0YWNrKGNvb3JkLCBib2FyZCkge1xuICAgICAgICBib2FyZC5yZWNlaXZlQXR0YWNrKGNvb3JkKTtcbiAgICB9XG59XG5jbGFzcyBDb21wdXRlciBleHRlbmRzIEh1bWFuIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoSHVtYW4pO1xuICAgICAgICB0aGlzLnR5cGUgPSAnY29tcHV0ZXInO1xuICAgICAgICB0aGlzLmF0dGFja3NNYWRlID0gW107XG4gICAgfVxuXG4gICAgcmFuZG9taXplU2hpcHMoKSB7XG4gICAgICAgIGxldCBhdmFpbFNoaXBzID0gWzEsIDEsIDIsIDIsIDMsIDQsIDVdO1xuICAgICAgICBsZXQgZGlycyA9IFsnaCcsICd2J107XG4gICAgICAgIC8vIGF2YWlsU2hpcHMuc3BsaWNlKDYpOyAgIC8vICEgcmVtb3ZlIGFmdGVyIHRlc3RpbmdcbiAgICAgICAgLy8gYXZhaWxTaGlwcy5zcGxpY2UoNCwgMSk7ICAgIC8vICEgcmVtb3ZlIGFmdGVyIHRlc3RpbmdcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChhdmFpbFNoaXBzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBzaGlwTGVuID0gYXZhaWxTaGlwc1swXTtcbiAgICAgICAgICAgIGF2YWlsU2hpcHMuc3BsaWNlKDAsIDEpO1xuXG4gICAgICAgICAgICBsZXQgZGlyID0gZGlyc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBkaXJzLmxlbmd0aCldO1xuXG4gICAgICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHdoaWxlICh2YWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBsZXQgY29vcmQgPSAnJztcbiAgICAgICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICAgICAgd2hpbGUgKGkgPCAyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgICAgICBjb29yZCArPSBpbmRleDtcbiAgICAgICAgICAgICAgICAgICAgaSsrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRoaXMuYm9hcmQucGxhY2VTaGlwKGNvb3JkLCBkaXIsIHNoaXBMZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJhbmRvbWl6ZUF0dGFjayhib2FyZCkge1xuICAgICAgICBsZXQgdmFsaWQgPSBmYWxzZTtcbiAgICAgICAgd2hpbGUgKHZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgbGV0IGNvb3JkID0gJyc7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMCkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBjb29yZCArPSBpbmRleDtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuYXR0YWNrc01hZGUuaW5jbHVkZXMoY29vcmQpKSB7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNrc01hZGUucHVzaChjb29yZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kQXR0YWNrKGNvb3JkLCBib2FyZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLy8gRkFDVE9SSUVTXG5mdW5jdGlvbiBtYWtlU2hpcChsZW5ndGgsIGNvb3Jkcykge1xuICAgIHJldHVybiBuZXcgU2hpcChsZW5ndGgsIGNvb3Jkcyk7XG59XG5mdW5jdGlvbiBtYWtlR2FtZWJvYXJkKCkge1xuICAgIHJldHVybiBuZXcgR2FtZWJvYXJkKCk7XG59XG5mdW5jdGlvbiBtYWtlUGxheWVyKHR5cGUpIHtcbiAgICBpZiAodHlwZSA9PT0gJ2h1bWFuJykge1xuICAgICAgICByZXR1cm4gbmV3IEh1bWFuKCk7XG4gICAgfSBlbHNlIGlmICh0eXBlID09PSAnY29tcHV0ZXInKSB7XG4gICAgICAgIHJldHVybiBuZXcgQ29tcHV0ZXIoKTtcbiAgICB9XG59XG5cbi8vIGV4cG9ydCB7IG1ha2VTaGlwIGFzIGRlZmF1bHQsIG1ha2VHYW1lYm9hcmQsIG1ha2VQbGF5ZXIgfTsgICAvLyB0ZXN0aW5nIGV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgbWFrZVBsYXllcjtcbiIsImNvbnN0IGNyZWF0ZSA9ICgoKSA9PiB7XG4gICAgLy8gZGF0YVxuICAgIGxldCBfYXR0cmlidXRlcyA9IFtdO1xuICAgIGxldCBlbGVtZW50O1xuXG4gICAgLy8gYmFzaWMgaGVscGVyIGZhY3Rvcmllc1xuICAgIGNvbnN0IGRpdiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHNwYW4gPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgcCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBoMiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaDQgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHVsID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBsaSA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaW5wdXQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBwbGFjZWhvbGRlciwgaWQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudHlwZSA9IHR5cGU7XG4gICAgICAgIGVsZW1lbnQuaWQgPSBTdHJpbmcoaWQpO1xuICAgICAgICBlbGVtZW50Lm5hbWUgPSBTdHJpbmcobmFtZSk7XG4gICAgICAgIGVsZW1lbnQucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdyYWRpbycpIHtcbiAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBTdHJpbmcoaWQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBzZWxlY3QgPSBmdW5jdGlvbihuYW1lLCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0Jyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC5uYW1lID0gbmFtZTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IG9wdGlvbiA9IGZ1bmN0aW9uKHZhbHVlLCBjb250ZW50KSB7XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGxhYmVsID0gZnVuY3Rpb24oY29udGVudCwgZm9yUmVmZXJlbmNlLCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LmZvciA9IFN0cmluZyhmb3JSZWZlcmVuY2UpO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGxlZ2VuZCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsZWdlbmQnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfTtcbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBpbWcgPSBmdW5jdGlvbih1cmwsIGFsdCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsZW1lbnQuc3JjID0gYC4uLyR7dXJsfWA7XG4gICAgICAgIGVsZW1lbnQuc3JjID0gdXJsO1xuICAgICAgICBlbGVtZW50LmFsdCA9IGFsdDtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGJ1dHRvbiA9IGZ1bmN0aW9uKGNvbnRlbnQsIHN0YXRlLCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGVsZW1lbnQucm9sZSA9ICdidXR0b24nO1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgZWxlbWVudC52YWx1ZSA9IHN0YXRlO1xuICAgICAgICBlbGVtZW50LmFyaWFQcmVzc2VkID0gJ2ZhbHNlJztcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuXG4gICAgLy8gaGVscGVyc1xuICAgIGZ1bmN0aW9uIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAoYXR0cmlidXRlcy5sZW5ndGgpOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW2ldWzBdID09PSAnLicpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYXR0cmlidXRlc1tpXVswXSA9PT0gJyMnKSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5pZCA9IGF0dHJpYnV0ZXNbaV0uc3Vic3RyaW5nKDEsIGF0dHJpYnV0ZXNbaV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGRpdixcbiAgICAgICAgc3BhbixcbiAgICB9XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGU7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IG1ha2VQbGF5ZXIgZnJvbSAnLi9jbGFzc2VzLmpzJztcblxuY29uc3QgZ2FtZSA9ICgoKSA9PiB7XG4gICAgbGV0IGh1bWFuO1xuICAgIGxldCBjb21wdXRlcjtcblxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGh1bWFuID0gbWFrZVBsYXllcignaHVtYW4nKTtcbiAgICAgICAgY29tcHV0ZXIgPSBtYWtlUGxheWVyKCdjb21wdXRlcicpO1xuICAgICAgICBjb25zb2xlLmxvZyhodW1hbik7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbXB1dGVyKTsgICAgXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q29vcmRzRnJvbUh1bWFuKHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXNzIHRvIGdldENvb3Jkc0Zyb21IdW1hbjonLCBzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCk7XG4gICAgICAgIGxldCBjb29yZFNldCA9IGh1bWFuLmJvYXJkLmdldENvb3JkcyhzdGFydENvb3JkLCBkaXJlY3Rpb24sIGxlbmd0aCk7XG4gICAgICAgIGxldCBpc1ZhbGlkID0gaHVtYW4uYm9hcmQuc2V0SXNWYWxpZChjb29yZFNldCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdnZXRDb29yZHNGcm9tSHVtYW46JywgY29vcmRTZXQsIGlzVmFsaWQpO1xuICAgICAgICBldmVudHMucHVibGlzaCgncmVjZWl2ZUlEQXJyYXknLCBjb29yZFNldCwgaXNWYWxpZCk7IC8vIHN1YnNjcmliZWQgYnkgdWkuanNcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncXVlcnlJREFycmF5JywgZ2V0Q29vcmRzRnJvbUh1bWFuKTsgLy8gcHVibGlzaGVkIGJ5IHVpLmpzIChwbGF5ZXJCb2FyZHNbMF0ub25Nb3VzZU92ZXIpXG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpbml0LCAvLyB1c2VkIGJ5IGluZGV4LmpzXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBnYW1lO1xuIiwiLy8gY2FjaGUgaW1hZ2VzXG5sZXQgaW1nUXVlcnkgPSByZXF1aXJlLmNvbnRleHQoJy4uL2Fzc2V0cycsIGZhbHNlLCAvXFwuKHBuZ3xzdmd8anBnfGpwZWd8Z2lmKSQvaSk7XG5sZXQgaWNvbnNBcnJheSA9IGltcG9ydEljb25zKGltZ1F1ZXJ5KTtcbmNvbnNvbGUubG9nKCcqKioqKiBJQ09OUyBBUlJBWSAqKioqKicpO1xuY29uc29sZS5sb2coaWNvbnNBcnJheSk7XG5cbi8vIG1ldGhvZHNcbmZ1bmN0aW9uIGltcG9ydEljb25zKHIpIHtcbiAgICBsZXQgcXVlcnlLZXlzID0gci5rZXlzKCk7XG4gICAgbGV0IGljb25zID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyeUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld0tleSA9IHF1ZXJ5S2V5c1tpXS5zcGxpdCgnLnN2ZycpWzBdLnNwbGl0KCcuLycpWzFdO1xuICAgICAgICBsZXQgbmV3VmFsdWUgPSBgLi9hc3NldHMvJHtxdWVyeUtleXNbaV0uc3BsaXQoJy4vJylbMV19YDtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhgbmV3S2V5IC0tPiAke25ld0tleX1gKTtcbiAgICAgICAgLy8vLyBjb25zb2xlLmxvZyhgbmV3VmFsdWUgLS0+ICR7bmV3VmFsdWV9YClcbiAgICAgICAgXG4gICAgICAgIGljb25zW25ld0tleV0gPSBuZXdWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gaWNvbnM7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGljb25zQXJyYXk7IiwiaW1wb3J0IGV2ZW50cyBmcm9tICcuLi9ldmVudHMuanMnO1xuaW1wb3J0IGNyZWF0ZSBmcm9tICcuL2NyZWF0ZS5qcyc7XG5pbXBvcnQgaWNvbnNBcnJheSBmcm9tICcuL2ljb25zLmpzJztcblxuY29uc3QgdWkgPSAoKCkgPT4ge1xuICAgIGxldCBwbGF5ZXJCb2FyZHMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuJykubGFzdEVsZW1lbnRDaGlsZCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbXB1dGVyJykubGFzdEVsZW1lbnRDaGlsZF07XG4gICAgbGV0IHNoaXBDb250YWluZXJzID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdodW1hbicpLmZpcnN0RWxlbWVudENoaWxkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXInKS5maXJzdEVsZW1lbnRDaGlsZF07XG4gICAgbGV0IGJvZHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5cbiAgICBsZXQgYWN0aW9uOyAvLyAhIG1vdmUgdG8gYm9hcmQgb2JqZWN0P1xuICAgIGxldCBzZWxlY3RlZFNoaXA7IC8vICEgbW92ZSB0byBib2FyZCBvYmplY3Q/XG4gICAgbGV0IGNvb3JkRGF0YTsgLy8gISBtb3ZlIHRvIGJvYXJkIG9iamVjdD9cbiAgICBsZXQgZGlyZWN0aW9uID0gJ2gnOyAgICAvLyAhIG1vdmUgdG8gYm9hcmQgb2JqZWN0P1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3BsYXknKSB7XG4gICAgICAgICAgICBwbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAncmVzdGFydCcpIHtcbiAgICAgICAgICAgIC8vIHJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSAmJiAhZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsYWNlZCcpICYmIHNoaXBDb250YWluZXJzWzBdLmNsYXNzTGlzdC5jb250YWlucygnbWVudScpKSB7XG4gICAgICAgICAgICBzZXRNZW51U2VsZWN0KGUudGFyZ2V0LnBhcmVudEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSAmJiBhY3Rpb24gPT09ICdwbGFjaW5nJyAmJiBjb29yZERhdGFbMV0gPT09IHRydWUpIHtcbiAgICAgICAgICAgIHNldFBsYWNlZFN0eWxlcygpO1xuICAgICAgICAgICAgLy8gcHVibGlzaCBldmVudCAtLSBtYWtlU2hpcFxuICAgICAgICB9XG4gICAgfSk7XG4gICAgcGxheWVyQm9hcmRzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicsIChlKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdwbGFjaW5nJykge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3B1Ymxpc2ggcXVlcnlJREFycmF5OicsIGUudGFyZ2V0LmlkLCBkaXJlY3Rpb24sIHNlbGVjdGVkU2hpcC5pZC5zbGljZSgwLCAxKSk7XG4gICAgICAgICAgICBldmVudHMucHVibGlzaCgncXVlcnlJREFycmF5JywgZS50YXJnZXQuaWQsIGRpcmVjdGlvbiwgc2VsZWN0ZWRTaGlwLmlkLnNsaWNlKDAsIDEpKTsgLy8gc3Vic2NyaWJlZCBieSBnYW1lLmpzXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICBwbGF5ZXJCb2FyZHNbMF0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ3BsYWNpbmcnICYmIGNvb3JkRGF0YSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZW1vdmVDZWxsSG92ZXIoKTtcbiAgICAgICAgfVxuICAgIH0pXG5cbiAgICAvLyBkcml2ZXIgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGluaXQoKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBwbGF5ZXJCb2FyZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBnZW5lcmF0ZUdyaWQocGxheWVyQm9hcmRzW2ldKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgICAgICBzZXRTZWN0aW9uVHlwZShzaGlwQ29udGFpbmVyc1swXSwgJ21lbnUnKTtcbiAgICAgICAgZ2VuZXJhdGVTaGlwTWVudSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgc2hpcENvbnRhaW5lcnMubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpKTtcbiAgICAgICAgICAgIGNsZWFyU2hpcENvbnRhaW5lcihzaGlwQ29udGFpbmVyc1tpXSk7XG4gICAgICAgICAgICBzZXRTZWN0aW9uVHlwZShzaGlwQ29udGFpbmVyc1tpXSwgJ3RhbGx5Jyk7XG4gICAgICAgICAgICBnZW5lcmF0ZVNoaXBUYWxsaWVzKHNoaXBDb250YWluZXJzW2ldLCBpKTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGdlbmVyYXRpdmUgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlR3JpZChib2FyZCkge1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIHdoaWxlIChpIDwgMTApIHtcbiAgICAgICAgICAgIGxldCByb3cgPSBjcmVhdGUuZGl2KCcnLCAnLnJvdycpXG4gICAgICAgICAgICBsZXQgaiA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IDEwKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBjcmVhdGUuZGl2KCcnLCAnLmNlbGwnLCBgIyR7an0ke2l9YCk7XG4gICAgICAgICAgICAgICAgcm93LmFwcGVuZChjZWxsKTtcbiAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBib2FyZC5hcHBlbmQocm93KTtcbiAgICAgICAgICAgIGkrKztcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRTZWN0aW9uVHlwZShzZWN0aW9uLCBzZWxlY3Rvcikge1xuICAgICAgICBpZiAoc2VjdGlvbi5jbGFzc0xpc3QubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgc2VjdGlvbi5jbGFzc0xpc3QgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdC5hZGQoc2VsZWN0b3IpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVNoaXBNZW51KCkge1xuICAgICAgICBtYWtlU2hpcEljb25zKCcnLCBzaGlwQ29udGFpbmVyc1swXSk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU2hpcFRhbGxpZXModGFsbHlDb250YWluZXIsIGluZGV4KSB7XG4gICAgICAgIGxldCBwbGF5ZXJUeXBlO1xuICAgICAgICBpZiAoaW5kZXggPT09IDApIHtcbiAgICAgICAgICAgIHBsYXllclR5cGUgPSAnaCc7XG4gICAgICAgIH0gZWxzZSAge1xuICAgICAgICAgICAgcGxheWVyVHlwZSA9ICdjJztcbiAgICAgICAgfVxuICAgICAgICBtYWtlU2hpcEljb25zKHBsYXllclR5cGUsIHRhbGx5Q29udGFpbmVyKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gbWFrZVNoaXBJY29ucyhwbGF5ZXJUeXBlLCBjb250YWluZXIpIHtcbiAgICAgICAgbGV0IHNoaXBzID0gW1s1LCAnYWNjJ10sXG4gICAgICAgICAgICAgICAgICAgICBbNCwgJ2JzJ10sXG4gICAgICAgICAgICAgICAgICAgICBbMywgJ2NydXMnXSxcbiAgICAgICAgICAgICAgICAgICAgIFsyLCAnZGVzdDEnXSxcbiAgICAgICAgICAgICAgICAgICAgIFsyLCAnZGVzdDInXSxcbiAgICAgICAgICAgICAgICAgICAgIFsxLCAnc3ViMSddLFxuICAgICAgICAgICAgICAgICAgICAgWzEsICdzdWIyJ11cbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaGlwcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGNlbGxDb250YWluZXI7XG4gICAgICAgICAgICBpZiAocGxheWVyVHlwZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICBjZWxsQ29udGFpbmVyID0gY3JlYXRlLmRpdignJywgJy5zaGlwJywgYCMke3NoaXBzW2ldWzBdfS0ke3NoaXBzW2ldWzFdfWApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjZWxsQ29udGFpbmVyID0gY3JlYXRlLmRpdignJywgJy5zaGlwJywgYCMke3BsYXllclR5cGV9LSR7c2hpcHNbaV1bMV19YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHNoaXBzW2ldWzBdOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGNyZWF0ZS5kaXYoJycsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjZWxsQ29udGFpbmVyLmFwcGVuZChjZWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmQoY2VsbENvbnRhaW5lcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gY2xlYXJTaGlwQ29udGFpbmVyKGNvbnRhaW5lcikge1xuICAgICAgICBjb25zb2xlLmxvZyhjb250YWluZXIpO1xuICAgICAgICB3aGlsZSAoY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQpIHtcbiAgICAgICAgICAgIGNvbnRhaW5lci5yZW1vdmVDaGlsZChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwbGFjZW1lbnQgbWV0aG9kc1xuICAgIGZ1bmN0aW9uIHNldE1lbnVTZWxlY3QodGFyZ2V0U2hpcCkge1xuICAgICAgICBpZiAoc2VsZWN0ZWRTaGlwID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGFjdGlvbiA9ICdwbGFjaW5nJztcbiAgICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IHRhcmdldFNoaXA7XG4gICAgICAgICAgICBhZGRNZW51U2VsZWN0KHNlbGVjdGVkU2hpcCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAodGFyZ2V0U2hpcCA9PT0gc2VsZWN0ZWRTaGlwKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVudVNlbGVjdChzZWxlY3RlZFNoaXApO1xuICAgICAgICAgICAgICAgIGFjdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldFNoaXAgIT09IHNlbGVjdGVkU2hpcCkge1xuICAgICAgICAgICAgICAgIHJlbW92ZU1lbnVTZWxlY3Qoc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZFNoaXAgPSB0YXJnZXRTaGlwO1xuICAgICAgICAgICAgICAgIGFkZE1lbnVTZWxlY3Qoc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBhZGRNZW51U2VsZWN0KHNoaXApIHtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiByZW1vdmVNZW51U2VsZWN0KHNoaXApIHtcbiAgICAgICAgc2hpcC5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBzZXRCb2FyZEhvdmVyKGNvb3JkU2V0LCBpc1ZhbGlkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdwYXNzIHRvIHNldEJvYXJkSG92ZXI6JywgY29vcmRTZXQsIGlzVmFsaWQpO1xuICAgICAgICBpZiAoY29vcmREYXRhID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvb3JkRGF0YSA9IFtjb29yZFNldCwgaXNWYWxpZF07XG4gICAgICAgICAgICBhZGRDZWxsSG92ZXIoY29vcmREYXRhWzFdKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUNlbGxIb3ZlcigpO1xuICAgICAgICAgICAgY29vcmREYXRhID0gW2Nvb3JkU2V0LCBpc1ZhbGlkXTtcbiAgICAgICAgICAgIGFkZENlbGxIb3Zlcihjb29yZERhdGFbMV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZENlbGxIb3Zlcihpc1ZhbGlkKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGlzVmFsaWQpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvb3JkRGF0YVswXS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvb3JkRGF0YVswXVtpXS5sZW5ndGggPD0gMikge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29vcmREYXRhWzBdW2ldKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hvdmVyJyk7XG4gICAgICAgICAgICAgICAgaWYgKGlzVmFsaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpcy12YWxpZCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNWYWxpZCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdpcy1pbnZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZUNlbGxIb3ZlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb29yZERhdGFbMF0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb29yZERhdGFbMF1baV0ubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkRGF0YVswXVtpXSk7XG4gICAgICAgICAgICAgICAgaWYgKGNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbGFjZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdCA9ICdjZWxsIHBsYWNlZCc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QgPSAnY2VsbCc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFBsYWNlZFN0eWxlcygpIHtcbiAgICAgICAgc2VsZWN0ZWRTaGlwLmNsYXNzTGlzdCA9ICdzaGlwIHBsYWNlZCc7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmREYXRhWzBdLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvb3JkRGF0YVswXVtpXSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhjZWxsKTtcbiAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0ID0gJ2NlbGwnO1xuICAgICAgICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdwbGFjZWQnKTtcbiAgICAgICAgfVxuICAgICAgICBzZWxlY3RlZFNoaXAgPSB1bmRlZmluZWQ7XG4gICAgICAgIGNvb3JkRGF0YSA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICAvLyBldmVudCBzdWJzY3JpcHRpb25zXG4gICAgZXZlbnRzLnN1YnNjcmliZSgncmVjZWl2ZUlEQXJyYXknLCBzZXRCb2FyZEhvdmVyKTsgLy8gcHVibGlzaGVkIGJ5IGdhbWUuanMgKGdldENvb3Jkc0Zyb21IdW1hbilcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsIC8vIHVzZWQgYnkgaW5kZXguanNcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHVpO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZXMvcmVzZXQuY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2xvYmFsLmNzcydcbmltcG9ydCBnYW1lIGZyb20gJy4vc2NyaXB0cy9nYW1lLmpzJztcbmltcG9ydCB1aSBmcm9tICcuL3NjcmlwdHMvdWkuanMnO1xuXG5nYW1lLmluaXQoKTtcbnVpLmluaXQoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==