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
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBAL VARIABLES */\n\n:root {\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 15);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(var(--player-fr) * 10);\n    --board-cell: var(--player-fr);\n}\n\n.hide {\n    z-index: -1;\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-areas: 'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-areas: 'board sidebar';\n}\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .menu {\n            gap: var(--sidebar-spacing);\n        }\n\n        .tally {\n            gap: calc(var(--sidebar-spacing) / 2);\n        }\n\n    #alert {\n        position: absolute;\n        align-items: center;\n        gap: var(--main-spacing);\n    }\n\n    footer {\n        justify-content: center;\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n                .tally .ship div {\n                    height: calc(var(--ship-cell) / 2);\n                    width: calc(var(--ship-cell) / 2);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    #alert {\n        min-width: max-content;\n        width: 25vw;\n        padding: var(--main-spacing);\n    }\n\n    footer {\n        width: 100%;\n    }\n\n/* COLORS */\n\nmain {\n    background-color: white;\n}\n\n    #human,\n    #computer {\n        background-color: rgba(255, 0, 0, 0.3);  /* ! testing */\n    }\n\n        .ship {\n            background-color: blue;\n        }\n\n            .selected,\n            .hover.is-valid {\n                background-color: rgba(0, 0, 255, 0.5);\n            }\n\n            .placed {\n                background-color: none;\n                border: 1px solid grey;\n            }\n\n        .cell {\n            border: green 1px solid; /* ! testing */\n        }\n\n            .hover.is-invalid {\n                background-color: rgba(255, 0, 0, 0.5);\n            }\n\n#alert {\n    background-color: rgba(128, 0, 128, 0.3);\n}\n\nfooter {\n    background-color: rgba(255, 166, 0.3);   /* ! testing */\n}\n", "",{"version":3,"sources":["webpack://./src/styles/global.css"],"names":[],"mappings":"AAAA,qBAAqB;;AAErB;IACI,mBAAmB;IACnB,oEAAoE;IACpE,0CAA0C;;IAE1C,gDAAgD;IAChD,yEAAyE;IACzE,6BAA6B;;IAE7B,yCAAyC;IACzC,8BAA8B;AAClC;;AAEA;IACI,WAAW;AACf;;AAEA,iBAAiB;;AAEjB;;;;;;;;;IASI,aAAa;AACjB;;AAEA;;;;;IAKI,iBAAiB;AACrB;;AAEA,iBAAiB;;AAEjB;;IAEI,aAAa;IACb,uBAAuB;AAC3B;;AAEA;IACI,4DAA4D;IAC5D,oCAAoC;AACxC;;AAEA;IACI,4DAA4D;IAC5D,oCAAoC;AACxC;;IAEI;QACI,kBAAkB;IACtB;;IAEA;QACI,kBAAkB;IACtB;;IAEA;QACI,gBAAgB;IACpB;;AAEJ,gBAAgB;;AAEhB;IACI,uBAAuB;IACvB,mBAAmB;AACvB;;IAEI;QACI,wBAAwB;IAC5B;;QAEI;YACI,2BAA2B;QAC/B;;QAEA;YACI,qCAAqC;QACzC;;IAEJ;QACI,kBAAkB;QAClB,mBAAmB;QACnB,wBAAwB;IAC5B;;IAEA;QACI,uBAAuB;IAC3B;;AAEJ,WAAW;;AAEX;IACI,YAAY;IACZ,YAAY;AAChB;;IAEI;QACI,4BAA4B;IAChC;;QAEI;;YAEI,qCAAqC;QACzC;;QAEA;YACI,oCAAoC;QACxC;;YAEI;gBACI,YAAY;gBACZ,kBAAkB;YACtB;;gBAEI;;oBAEI,wBAAwB;oBACxB,uBAAuB;gBAC3B;;gBAEA;oBACI,kCAAkC;oBAClC,iCAAiC;gBACrC;;QAER;YACI,yBAAyB;YACzB,wBAAwB;QAC5B;;IAEJ;QACI,sBAAsB;QACtB,WAAW;QACX,4BAA4B;IAChC;;IAEA;QACI,WAAW;IACf;;AAEJ,WAAW;;AAEX;IACI,uBAAuB;AAC3B;;IAEI;;QAEI,sCAAsC,GAAG,cAAc;IAC3D;;QAEI;YACI,sBAAsB;QAC1B;;YAEI;;gBAEI,sCAAsC;YAC1C;;YAEA;gBACI,sBAAsB;gBACtB,sBAAsB;YAC1B;;QAEJ;YACI,uBAAuB,EAAE,cAAc;QAC3C;;YAEI;gBACI,sCAAsC;YAC1C;;AAEZ;IACI,wCAAwC;AAC5C;;AAEA;IACI,qCAAqC,IAAI,cAAc;AAC3D","sourcesContent":["/* GLOBAL VARIABLES */\n\n:root {\n    --main-spacing: 2vw;\n    --player-area: calc(calc(100vw - calc(var(--main-spacing) * 4)) / 2);\n    --player-fr: calc(var(--player-area) / 15);\n\n    --sidebar-spacing: calc(var(--main-spacing) / 2);\n    --sidebar-area: calc(var(--sidebar-spacing) + calc(var(--player-fr) * 5));\n    --ship-cell: var(--player-fr);\n\n    --board-area: calc(var(--player-fr) * 10);\n    --board-cell: var(--player-fr);\n}\n\n.hide {\n    z-index: -1;\n}\n\n/* DISPLAY FLEX */\n\nbody,\nmain,\n.menu,\n.tally,\n.ship,\n.board,\n.row,\n#alert,\nfooter {\n    display: flex;\n}\n\nbody,\n.menu,\n.tally,\n.board,\n#alert {\n    flex-flow: column;\n}\n\n/* DISPLAY GRID */\n\n#human,\n#computer {\n    display: grid;\n    grid-template-rows: 1fr;\n}\n\n#human {\n    grid-template-columns: var(--sidebar-area) var(--board-area);\n    grid-template-areas: 'sidebar board';\n}\n\n#computer {\n    grid-template-columns: var(--board-area) var(--sidebar-area);\n    grid-template-areas: 'board sidebar';\n}\n\n    .menu {\n        grid-area: sidebar;\n    }\n\n    .tally {\n        grid-area: sidebar;\n    }\n\n    .board {\n        grid-area: board;\n    }\n\n/* POSITIONING */\n\nbody {\n    justify-content: center;\n    align-items: center;\n}\n\n    main {\n        gap: var(--main-spacing);\n    }\n\n        .menu {\n            gap: var(--sidebar-spacing);\n        }\n\n        .tally {\n            gap: calc(var(--sidebar-spacing) / 2);\n        }\n\n    #alert {\n        position: absolute;\n        align-items: center;\n        gap: var(--main-spacing);\n    }\n\n    footer {\n        justify-content: center;\n    }\n\n/* SIZING */\n\nbody {\n    height: auto;\n    width: 100vw;\n}\n\n    main {\n        padding: var(--main-spacing);\n    }\n\n        .menu,\n        #human .tally {\n            padding-right: var(--sidebar-spacing);\n        }\n\n        #computer .tally {\n            padding-left: var(--sidebar-spacing);\n        }\n\n            .ship {\n                height: auto;\n                width: max-content;\n            }\n\n                .menu .ship div,\n                .cell .ship div {\n                    height: var(--ship-cell);\n                    width: var(--ship-cell);\n                }\n\n                .tally .ship div {\n                    height: calc(var(--ship-cell) / 2);\n                    width: calc(var(--ship-cell) / 2);\n                }\n\n        .cell {\n            height: var(--board-cell);\n            width: var(--board-cell);\n        }\n\n    #alert {\n        min-width: max-content;\n        width: 25vw;\n        padding: var(--main-spacing);\n    }\n\n    footer {\n        width: 100%;\n    }\n\n/* COLORS */\n\nmain {\n    background-color: white;\n}\n\n    #human,\n    #computer {\n        background-color: rgba(255, 0, 0, 0.3);  /* ! testing */\n    }\n\n        .ship {\n            background-color: blue;\n        }\n\n            .selected,\n            .hover.is-valid {\n                background-color: rgba(0, 0, 255, 0.5);\n            }\n\n            .placed {\n                background-color: none;\n                border: 1px solid grey;\n            }\n\n        .cell {\n            border: green 1px solid; /* ! testing */\n        }\n\n            .hover.is-invalid {\n                background-color: rgba(255, 0, 0, 0.5);\n            }\n\n#alert {\n    background-color: rgba(128, 0, 128, 0.3);\n}\n\nfooter {\n    background-color: rgba(255, 166, 0.3);   /* ! testing */\n}\n"],"sourceRoot":""}]);
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

    let action;
    let selectedShip;
    let boardCells;
    let direction = 'h';

    // event listeners
    body.addEventListener('click', (e) => {
        if (e.target.id === 'play') {
            play();
        }
        if (e.target.id === 'restart') {
            // restart();
        }
        if (e.target.parentElement.classList.contains('ship') && shipContainers[0].classList.contains('menu')) {
            setMenuSelect(e.target.parentElement);
        }
    });
    playerBoards[0].addEventListener('mouseover', (e) => {
        if (action === 'placing') {
            // console.log('publish queryIDArray:', e.target.id, direction, selectedShip.id.slice(0, 1));
            _events_js__WEBPACK_IMPORTED_MODULE_0__["default"].publish('queryIDArray', e.target.id, direction, selectedShip.id.slice(0, 1)); // subscribed by game.js
        }
    });
    playerBoards[0].addEventListener('mouseleave', () => {
        if (action === 'placing' && boardCells !== undefined) {
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
        if (boardCells === undefined) {
            boardCells = coordSet;
            addCellHover(isValid);
        } else {
            removeCellHover(coordSet);
            boardCells = coordSet;
            addCellHover(isValid);
        }
    }
    function addCellHover(isValid) {
        // console.log(isValid);
        for (let i = 0; i < boardCells.length; i++) {
            if (boardCells[i].length <= 2) {
                let cell = document.getElementById(boardCells[i]);
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
        for (let i = 0; i < boardCells.length; i++) {
            if (boardCells[i].length <= 2) {
                let cell = document.getElementById(boardCells[i]);
                cell.classList = 'cell';
            }
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXgubWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsMkVBQTJFLDBCQUEwQiwyRUFBMkUsaURBQWlELHlEQUF5RCxnRkFBZ0Ysb0NBQW9DLGtEQUFrRCxxQ0FBcUMsR0FBRyxXQUFXLGtCQUFrQixHQUFHLGtHQUFrRyxvQkFBb0IsR0FBRyw2Q0FBNkMsd0JBQXdCLEdBQUcsOENBQThDLG9CQUFvQiw4QkFBOEIsR0FBRyxZQUFZLG1FQUFtRSwyQ0FBMkMsR0FBRyxlQUFlLG1FQUFtRSwyQ0FBMkMsR0FBRyxlQUFlLDZCQUE2QixPQUFPLGdCQUFnQiw2QkFBNkIsT0FBTyxnQkFBZ0IsMkJBQTJCLE9BQU8sK0JBQStCLDhCQUE4QiwwQkFBMEIsR0FBRyxjQUFjLG1DQUFtQyxPQUFPLG1CQUFtQiwwQ0FBMEMsV0FBVyxvQkFBb0Isb0RBQW9ELFdBQVcsZ0JBQWdCLDZCQUE2Qiw4QkFBOEIsbUNBQW1DLE9BQU8sZ0JBQWdCLGtDQUFrQyxPQUFPLDBCQUEwQixtQkFBbUIsbUJBQW1CLEdBQUcsY0FBYyx1Q0FBdUMsT0FBTywyQ0FBMkMsb0RBQW9ELFdBQVcsOEJBQThCLG1EQUFtRCxXQUFXLHVCQUF1QiwrQkFBK0IscUNBQXFDLGVBQWUsdUVBQXVFLCtDQUErQyw4Q0FBOEMsbUJBQW1CLHNDQUFzQyx5REFBeUQsd0RBQXdELG1CQUFtQixtQkFBbUIsd0NBQXdDLHVDQUF1QyxXQUFXLGdCQUFnQixpQ0FBaUMsc0JBQXNCLHVDQUF1QyxPQUFPLGdCQUFnQixzQkFBc0IsT0FBTywwQkFBMEIsOEJBQThCLEdBQUcsZ0NBQWdDLG1EQUFtRCxzQkFBc0IsbUJBQW1CLHFDQUFxQyxXQUFXLHlEQUF5RCx5REFBeUQsZUFBZSx5QkFBeUIseUNBQXlDLHlDQUF5QyxlQUFlLG1CQUFtQix1Q0FBdUMsMEJBQTBCLG1DQUFtQyx5REFBeUQsZUFBZSxZQUFZLCtDQUErQyxHQUFHLFlBQVksK0NBQStDLGtCQUFrQixTQUFTLGdHQUFnRyxNQUFNLFlBQVksYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLGFBQWEsY0FBYyxVQUFVLE9BQU8sU0FBUyxZQUFZLE9BQU8sYUFBYSxPQUFPLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLFlBQVksT0FBTyxLQUFLLFdBQVcsYUFBYSxPQUFPLE9BQU8sYUFBYSxjQUFjLFFBQVEsTUFBTSxhQUFhLGNBQWMsUUFBUSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxXQUFXLEtBQUssWUFBWSxPQUFPLE1BQU0sc0JBQXNCLE9BQU8sS0FBSyxZQUFZLE9BQU8sTUFBTSxhQUFhLE9BQU8sS0FBSyxhQUFhLGNBQWMsT0FBTyxLQUFLLHNCQUFzQixPQUFPLEtBQUssYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssc0JBQXNCLDJEQUEyRCwwQkFBMEIsMkVBQTJFLGlEQUFpRCx5REFBeUQsZ0ZBQWdGLG9DQUFvQyxrREFBa0QscUNBQXFDLEdBQUcsV0FBVyxrQkFBa0IsR0FBRyxrR0FBa0csb0JBQW9CLEdBQUcsNkNBQTZDLHdCQUF3QixHQUFHLDhDQUE4QyxvQkFBb0IsOEJBQThCLEdBQUcsWUFBWSxtRUFBbUUsMkNBQTJDLEdBQUcsZUFBZSxtRUFBbUUsMkNBQTJDLEdBQUcsZUFBZSw2QkFBNkIsT0FBTyxnQkFBZ0IsNkJBQTZCLE9BQU8sZ0JBQWdCLDJCQUEyQixPQUFPLCtCQUErQiw4QkFBOEIsMEJBQTBCLEdBQUcsY0FBYyxtQ0FBbUMsT0FBTyxtQkFBbUIsMENBQTBDLFdBQVcsb0JBQW9CLG9EQUFvRCxXQUFXLGdCQUFnQiw2QkFBNkIsOEJBQThCLG1DQUFtQyxPQUFPLGdCQUFnQixrQ0FBa0MsT0FBTywwQkFBMEIsbUJBQW1CLG1CQUFtQixHQUFHLGNBQWMsdUNBQXVDLE9BQU8sMkNBQTJDLG9EQUFvRCxXQUFXLDhCQUE4QixtREFBbUQsV0FBVyx1QkFBdUIsK0JBQStCLHFDQUFxQyxlQUFlLHVFQUF1RSwrQ0FBK0MsOENBQThDLG1CQUFtQixzQ0FBc0MseURBQXlELHdEQUF3RCxtQkFBbUIsbUJBQW1CLHdDQUF3Qyx1Q0FBdUMsV0FBVyxnQkFBZ0IsaUNBQWlDLHNCQUFzQix1Q0FBdUMsT0FBTyxnQkFBZ0Isc0JBQXNCLE9BQU8sMEJBQTBCLDhCQUE4QixHQUFHLGdDQUFnQyxtREFBbUQsc0JBQXNCLG1CQUFtQixxQ0FBcUMsV0FBVyx5REFBeUQseURBQXlELGVBQWUseUJBQXlCLHlDQUF5Qyx5Q0FBeUMsZUFBZSxtQkFBbUIsdUNBQXVDLDBCQUEwQixtQ0FBbUMseURBQXlELGVBQWUsWUFBWSwrQ0FBK0MsR0FBRyxZQUFZLCtDQUErQyxrQkFBa0IscUJBQXFCO0FBQzF2UTtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1B2QztBQUM2RztBQUNqQjtBQUM1Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GO0FBQ0EsOEdBQThHLDZCQUE2QixHQUFHLE9BQU8sb0JBQW9CLFlBQVksMEJBQTBCLHFDQUFxQyxpQ0FBaUMsc0JBQXNCLG9CQUFvQixpQ0FBaUMsR0FBRywrTEFBK0wscUJBQXFCLHVCQUF1QixHQUFHLDJGQUEyRixvQkFBb0IsNEJBQTRCLEdBQUcscUVBQXFFLG9CQUFvQiwwQkFBMEIsR0FBRyxrSEFBa0gsb0NBQW9DLEdBQUcseUlBQXlJLDJCQUEyQix5Q0FBeUMsZ0RBQWdELFVBQVUseUVBQXlFLDBCQUEwQixHQUFHLDBEQUEwRCxxQkFBcUIsR0FBRyxzSEFBc0gseUJBQXlCLEdBQUcscUtBQXFLLDRCQUE0Qiw4QkFBOEIsZ0NBQWdDLHdCQUF3QixVQUFVLHVEQUF1RCx3QkFBd0IsR0FBRyx3RkFBd0YsMkJBQTJCLEdBQUcsOElBQThJLGlDQUFpQyxHQUFHLGdNQUFnTSx5QkFBeUIsaUJBQWlCLEdBQUcsMkxBQTJMLHFDQUFxQyxHQUFHLDhGQUE4RixvQkFBb0IsR0FBRyxPQUFPLCtGQUErRixRQUFRLFlBQVksT0FBTyxLQUFLLHFCQUFxQixhQUFhLGFBQWEsYUFBYSxXQUFXLFdBQVcsWUFBWSxRQUFRLGFBQWEsYUFBYSxhQUFhLGNBQWMsTUFBTSxVQUFVLFlBQVksT0FBTyxhQUFhLE1BQU0sVUFBVSxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsWUFBWSxRQUFRLGFBQWEsY0FBYyxNQUFNLFlBQVksT0FBTyxZQUFZLGNBQWMsTUFBTSxzQkFBc0IsdUJBQXVCLHVCQUF1QixPQUFPLGFBQWEsT0FBTyxZQUFZLE9BQU8sYUFBYSxNQUFNLFVBQVUsUUFBUSxhQUFhLGNBQWMsTUFBTSxZQUFZLFFBQVEsYUFBYSxhQUFhLGNBQWMsUUFBUSxzQkFBc0IscUJBQXFCLHVCQUF1QixxQkFBcUIsT0FBTyxhQUFhLE9BQU8sWUFBWSxPQUFPLGFBQWEsT0FBTyxZQUFZLE9BQU8sYUFBYSxTQUFTLFlBQVksT0FBTyxhQUFhLFNBQVMsWUFBWSxXQUFXLE1BQU0sYUFBYSxTQUFTLFlBQVksUUFBUSxhQUFhLGNBQWMsTUFBTSxVQUFVLDhGQUE4Riw2QkFBNkIsR0FBRyxPQUFPLG9CQUFvQixZQUFZLDBCQUEwQixxQ0FBcUMsaUNBQWlDLHNCQUFzQixvQkFBb0IsaUNBQWlDLEdBQUcsK0xBQStMLHFCQUFxQix1QkFBdUIsR0FBRywyRkFBMkYsb0JBQW9CLDRCQUE0QixHQUFHLHFFQUFxRSxvQkFBb0IsMEJBQTBCLEdBQUcsa0hBQWtILG9DQUFvQyxHQUFHLHlJQUF5SSwyQkFBMkIseUNBQXlDLGdEQUFnRCxVQUFVLHlFQUF5RSwwQkFBMEIsR0FBRywwREFBMEQscUJBQXFCLEdBQUcsc0hBQXNILHlCQUF5QixHQUFHLHFLQUFxSyw0QkFBNEIsOEJBQThCLGdDQUFnQyx3QkFBd0IsVUFBVSx1REFBdUQsd0JBQXdCLEdBQUcsd0ZBQXdGLDJCQUEyQixHQUFHLDhJQUE4SSxpQ0FBaUMsR0FBRyxnTUFBZ00seUJBQXlCLGlCQUFpQixHQUFHLDJMQUEyTCxxQ0FBcUMsR0FBRyw4RkFBOEYsb0JBQW9CLEdBQUcsbUJBQW1CO0FBQ25wTjtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7Ozs7QUNQMUI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0EsZ0RBQWdEO0FBQ2hEO0FBQ0E7QUFDQSxxRkFBcUY7QUFDckY7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGlCQUFpQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIscUJBQXFCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNGQUFzRixxQkFBcUI7QUFDM0c7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLGlEQUFpRCxxQkFBcUI7QUFDdEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLHNEQUFzRCxxQkFBcUI7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNwRmE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEEsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBdUc7QUFDdkc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyx1RkFBTzs7OztBQUlpRDtBQUN6RSxPQUFPLGlFQUFlLHVGQUFPLElBQUksOEZBQWMsR0FBRyw4RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pCN0UsTUFBa0c7QUFDbEcsTUFBd0Y7QUFDeEYsTUFBK0Y7QUFDL0YsTUFBa0g7QUFDbEgsTUFBMkc7QUFDM0csTUFBMkc7QUFDM0csTUFBc0c7QUFDdEc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyxzRkFBTzs7OztBQUlnRDtBQUN4RSxPQUFPLGlFQUFlLHNGQUFPLElBQUksNkZBQWMsR0FBRyw2RkFBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7OztBQzFCaEU7O0FBRWI7O0FBRUE7QUFDQTs7QUFFQSxrQkFBa0Isd0JBQXdCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLGlCQUFpQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUN2R2E7O0FBRWI7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ3RDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNWYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRWpGO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7OztBQ1hhOztBQUViO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBLDBDQUEwQztBQUMxQzs7QUFFQTs7QUFFQTtBQUNBLGlGQUFpRjtBQUNqRjs7QUFFQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDckVhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDekJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUNBQXlDLFVBQVU7QUFDbkQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFVBQVU7QUFDdEQsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOztBQUVELGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7OztBQzlDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBLHdCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix1QkFBdUI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQztBQUNuQyx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLFlBQVksb0RBQW9EO0FBQ2hFLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2hOMUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQixJQUFJO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esd0JBQXdCLHlCQUF5QjtBQUNqRDtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpRUFBZSxNQUFNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzFLYTtBQUNJOztBQUV0QztBQUNBO0FBQ0E7O0FBRUE7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O1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2ZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ0E7QUFDUztBQUNKOztBQUVqQyw2REFBUztBQUNULDJEQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3MiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL2dsb2JhbC5jc3M/ZjBkOCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9yZXNldC5jc3M/NGNmYiIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvYXNzZXRzLyBzeW5jIG5vbnJlY3Vyc2l2ZSBcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkLyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2V2ZW50cy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvY3JlYXRlLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc2NyaXB0cy9pY29ucy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3NjcmlwdHMvdWkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCBWQVJJQUJMRVMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1zcGFjaW5nOiAydnc7XFxuICAgIC0tcGxheWVyLWFyZWE6IGNhbGMoY2FsYygxMDB2dyAtIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDQpKSAvIDIpO1xcbiAgICAtLXBsYXllci1mcjogY2FsYyh2YXIoLS1wbGF5ZXItYXJlYSkgLyAxNSk7XFxuXFxuICAgIC0tc2lkZWJhci1zcGFjaW5nOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgLS1zaWRlYmFyLWFyZWE6IGNhbGModmFyKC0tc2lkZWJhci1zcGFjaW5nKSArIGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDUpKTtcXG4gICAgLS1zaGlwLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tYm9hcmQtYXJlYTogY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMTApO1xcbiAgICAtLWJvYXJkLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi8qIERJU1BMQVkgRkxFWCAqL1xcblxcbmJvZHksXFxubWFpbixcXG4ubWVudSxcXG4udGFsbHksXFxuLnNoaXAsXFxuLmJvYXJkLFxcbi5yb3csXFxuI2FsZXJ0LFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHksXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5ib2FyZCxcXG4jYWxlcnQge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLyogRElTUExBWSBHUklEICovXFxuXFxuI2h1bWFuLFxcbiNjb21wdXRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4jaHVtYW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGViYXItYXJlYSkgdmFyKC0tYm9hcmQtYXJlYSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlYmFyIGJvYXJkJztcXG59XFxuXFxuI2NvbXB1dGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1ib2FyZC1hcmVhKSB2YXIoLS1zaWRlYmFyLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYm9hcmQgc2lkZWJhcic7XFxufVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLnRhbGx5IHtcXG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgfVxcblxcbi8qIFBPU0lUSU9OSU5HICovXFxuXFxuYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBnYXA6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5tZW51IHtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFsbHkge1xcbiAgICAgICAgICAgIGdhcDogY2FsYyh2YXIoLS1zaWRlYmFyLXNwYWNpbmcpIC8gMik7XFxuICAgICAgICB9XFxuXFxuICAgICNhbGVydCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAudGFsbHkgLnNoaXAgZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1zaGlwLWNlbGwpIC8gMik7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1zaGlwLWNlbGwpIC8gMik7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5jZWxsIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1jZWxsKTtcXG4gICAgICAgIH1cXG5cXG4gICAgI2FsZXJ0IHtcXG4gICAgICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMjV2dztcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuLyogQ09MT1JTICovXFxuXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4gICAgI2h1bWFuLFxcbiAgICAjY29tcHV0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMyk7ICAvKiAhIHRlc3RpbmcgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLnNoaXAge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNlbGVjdGVkLFxcbiAgICAgICAgICAgIC5ob3Zlci5pcy12YWxpZCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucGxhY2VkIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAuY2VsbCB7XFxuICAgICAgICAgICAgYm9yZGVyOiBncmVlbiAxcHggc29saWQ7IC8qICEgdGVzdGluZyAqL1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5ob3Zlci5pcy1pbnZhbGlkIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICAgICAgICAgICAgfVxcblxcbiNhbGVydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAxMjgsIDAuMyk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAuMyk7ICAgLyogISB0ZXN0aW5nICovXFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2xvYmFsLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7O0FBRXJCO0lBQ0ksbUJBQW1CO0lBQ25CLG9FQUFvRTtJQUNwRSwwQ0FBMEM7O0lBRTFDLGdEQUFnRDtJQUNoRCx5RUFBeUU7SUFDekUsNkJBQTZCOztJQUU3Qix5Q0FBeUM7SUFDekMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBLGlCQUFpQjs7QUFFakI7Ozs7Ozs7OztJQVNJLGFBQWE7QUFDakI7O0FBRUE7Ozs7O0lBS0ksaUJBQWlCO0FBQ3JCOztBQUVBLGlCQUFpQjs7QUFFakI7O0lBRUksYUFBYTtJQUNiLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLDREQUE0RDtJQUM1RCxvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSw0REFBNEQ7SUFDNUQsb0NBQW9DO0FBQ3hDOztJQUVJO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksZ0JBQWdCO0lBQ3BCOztBQUVKLGdCQUFnQjs7QUFFaEI7SUFDSSx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztJQUVJO1FBQ0ksd0JBQXdCO0lBQzVCOztRQUVJO1lBQ0ksMkJBQTJCO1FBQy9COztRQUVBO1lBQ0kscUNBQXFDO1FBQ3pDOztJQUVKO1FBQ0ksa0JBQWtCO1FBQ2xCLG1CQUFtQjtRQUNuQix3QkFBd0I7SUFDNUI7O0lBRUE7UUFDSSx1QkFBdUI7SUFDM0I7O0FBRUosV0FBVzs7QUFFWDtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztJQUVJO1FBQ0ksNEJBQTRCO0lBQ2hDOztRQUVJOztZQUVJLHFDQUFxQztRQUN6Qzs7UUFFQTtZQUNJLG9DQUFvQztRQUN4Qzs7WUFFSTtnQkFDSSxZQUFZO2dCQUNaLGtCQUFrQjtZQUN0Qjs7Z0JBRUk7O29CQUVJLHdCQUF3QjtvQkFDeEIsdUJBQXVCO2dCQUMzQjs7Z0JBRUE7b0JBQ0ksa0NBQWtDO29CQUNsQyxpQ0FBaUM7Z0JBQ3JDOztRQUVSO1lBQ0kseUJBQXlCO1lBQ3pCLHdCQUF3QjtRQUM1Qjs7SUFFSjtRQUNJLHNCQUFzQjtRQUN0QixXQUFXO1FBQ1gsNEJBQTRCO0lBQ2hDOztJQUVBO1FBQ0ksV0FBVztJQUNmOztBQUVKLFdBQVc7O0FBRVg7SUFDSSx1QkFBdUI7QUFDM0I7O0lBRUk7O1FBRUksc0NBQXNDLEdBQUcsY0FBYztJQUMzRDs7UUFFSTtZQUNJLHNCQUFzQjtRQUMxQjs7WUFFSTs7Z0JBRUksc0NBQXNDO1lBQzFDOztZQUVBO2dCQUNJLHNCQUFzQjtnQkFDdEIsc0JBQXNCO1lBQzFCOztRQUVKO1lBQ0ksdUJBQXVCLEVBQUUsY0FBYztRQUMzQzs7WUFFSTtnQkFDSSxzQ0FBc0M7WUFDMUM7O0FBRVo7SUFDSSx3Q0FBd0M7QUFDNUM7O0FBRUE7SUFDSSxxQ0FBcUMsSUFBSSxjQUFjO0FBQzNEXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEdMT0JBTCBWQVJJQUJMRVMgKi9cXG5cXG46cm9vdCB7XFxuICAgIC0tbWFpbi1zcGFjaW5nOiAydnc7XFxuICAgIC0tcGxheWVyLWFyZWE6IGNhbGMoY2FsYygxMDB2dyAtIGNhbGModmFyKC0tbWFpbi1zcGFjaW5nKSAqIDQpKSAvIDIpO1xcbiAgICAtLXBsYXllci1mcjogY2FsYyh2YXIoLS1wbGF5ZXItYXJlYSkgLyAxNSk7XFxuXFxuICAgIC0tc2lkZWJhci1zcGFjaW5nOiBjYWxjKHZhcigtLW1haW4tc3BhY2luZykgLyAyKTtcXG4gICAgLS1zaWRlYmFyLWFyZWE6IGNhbGModmFyKC0tc2lkZWJhci1zcGFjaW5nKSArIGNhbGModmFyKC0tcGxheWVyLWZyKSAqIDUpKTtcXG4gICAgLS1zaGlwLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxuXFxuICAgIC0tYm9hcmQtYXJlYTogY2FsYyh2YXIoLS1wbGF5ZXItZnIpICogMTApO1xcbiAgICAtLWJvYXJkLWNlbGw6IHZhcigtLXBsYXllci1mcik7XFxufVxcblxcbi5oaWRlIHtcXG4gICAgei1pbmRleDogLTE7XFxufVxcblxcbi8qIERJU1BMQVkgRkxFWCAqL1xcblxcbmJvZHksXFxubWFpbixcXG4ubWVudSxcXG4udGFsbHksXFxuLnNoaXAsXFxuLmJvYXJkLFxcbi5yb3csXFxuI2FsZXJ0LFxcbmZvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbmJvZHksXFxuLm1lbnUsXFxuLnRhbGx5LFxcbi5ib2FyZCxcXG4jYWxlcnQge1xcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcXG59XFxuXFxuLyogRElTUExBWSBHUklEICovXFxuXFxuI2h1bWFuLFxcbiNjb21wdXRlciB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xcbn1cXG5cXG4jaHVtYW4ge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHZhcigtLXNpZGViYXItYXJlYSkgdmFyKC0tYm9hcmQtYXJlYSk7XFxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdzaWRlYmFyIGJvYXJkJztcXG59XFxuXFxuI2NvbXB1dGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiB2YXIoLS1ib2FyZC1hcmVhKSB2YXIoLS1zaWRlYmFyLWFyZWEpO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAnYm9hcmQgc2lkZWJhcic7XFxufVxcblxcbiAgICAubWVudSB7XFxuICAgICAgICBncmlkLWFyZWE6IHNpZGViYXI7XFxuICAgIH1cXG5cXG4gICAgLnRhbGx5IHtcXG4gICAgICAgIGdyaWQtYXJlYTogc2lkZWJhcjtcXG4gICAgfVxcblxcbiAgICAuYm9hcmQge1xcbiAgICAgICAgZ3JpZC1hcmVhOiBib2FyZDtcXG4gICAgfVxcblxcbi8qIFBPU0lUSU9OSU5HICovXFxuXFxuYm9keSB7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4gICAgbWFpbiB7XFxuICAgICAgICBnYXA6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgICAgIC5tZW51IHtcXG4gICAgICAgICAgICBnYXA6IHZhcigtLXNpZGViYXItc3BhY2luZyk7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAudGFsbHkge1xcbiAgICAgICAgICAgIGdhcDogY2FsYyh2YXIoLS1zaWRlYmFyLXNwYWNpbmcpIC8gMik7XFxuICAgICAgICB9XFxuXFxuICAgICNhbGVydCB7XFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgICAgZ2FwOiB2YXIoLS1tYWluLXNwYWNpbmcpO1xcbiAgICB9XFxuXFxuICAgIGZvb3RlciB7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbi8qIFNJWklORyAqL1xcblxcbmJvZHkge1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHdpZHRoOiAxMDB2dztcXG59XFxuXFxuICAgIG1haW4ge1xcbiAgICAgICAgcGFkZGluZzogdmFyKC0tbWFpbi1zcGFjaW5nKTtcXG4gICAgfVxcblxcbiAgICAgICAgLm1lbnUsXFxuICAgICAgICAjaHVtYW4gLnRhbGx5IHtcXG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2NvbXB1dGVyIC50YWxseSB7XFxuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiB2YXIoLS1zaWRlYmFyLXNwYWNpbmcpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5zaGlwIHtcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xcbiAgICAgICAgICAgICAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAubWVudSAuc2hpcCBkaXYsXFxuICAgICAgICAgICAgICAgIC5jZWxsIC5zaGlwIGRpdiB7XFxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IHZhcigtLXNoaXAtY2VsbCk7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdmFyKC0tc2hpcC1jZWxsKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICAudGFsbHkgLnNoaXAgZGl2IHtcXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogY2FsYyh2YXIoLS1zaGlwLWNlbGwpIC8gMik7XFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyh2YXIoLS1zaGlwLWNlbGwpIC8gMik7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgIC5jZWxsIHtcXG4gICAgICAgICAgICBoZWlnaHQ6IHZhcigtLWJvYXJkLWNlbGwpO1xcbiAgICAgICAgICAgIHdpZHRoOiB2YXIoLS1ib2FyZC1jZWxsKTtcXG4gICAgICAgIH1cXG5cXG4gICAgI2FsZXJ0IHtcXG4gICAgICAgIG1pbi13aWR0aDogbWF4LWNvbnRlbnQ7XFxuICAgICAgICB3aWR0aDogMjV2dztcXG4gICAgICAgIHBhZGRpbmc6IHZhcigtLW1haW4tc3BhY2luZyk7XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyIHtcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICB9XFxuXFxuLyogQ09MT1JTICovXFxuXFxubWFpbiB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4gICAgI2h1bWFuLFxcbiAgICAjY29tcHV0ZXIge1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMyk7ICAvKiAhIHRlc3RpbmcgKi9cXG4gICAgfVxcblxcbiAgICAgICAgLnNoaXAge1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAgICAgLnNlbGVjdGVkLFxcbiAgICAgICAgICAgIC5ob3Zlci5pcy12YWxpZCB7XFxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMjU1LCAwLjUpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAucGxhY2VkIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbm9uZTtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgZ3JleTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAuY2VsbCB7XFxuICAgICAgICAgICAgYm9yZGVyOiBncmVlbiAxcHggc29saWQ7IC8qICEgdGVzdGluZyAqL1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgICAgIC5ob3Zlci5pcy1pbnZhbGlkIHtcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNSk7XFxuICAgICAgICAgICAgfVxcblxcbiNhbGVydCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI4LCAwLCAxMjgsIDAuMyk7XFxufVxcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAxNjYsIDAuMyk7ICAgLyogISB0ZXN0aW5nICovXFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIEdMT0JBTCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4qIHtcXG4gICAgcGFkZGluZzogMHB4OyBtYXJnaW46IDBweDtcXG5cXG4gICAgbGluZS1oZWlnaHQ6IDEuMTU7XFxuICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXG4gICAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIGZvbnQtc2l6ZTogMTAwJTtcXG4gICAgZm9udDogaW5oZXJpdDtcXG5cXG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcbn1cXG5cXG5cXG4vKiBTRUNUSU9OUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogY29ycmVjdCBmb250IHNpemUsIG1hcmdpbiBvbiBgaDFgIGVsZW1lbnRzICovXFxuLyogd2l0aGluIGBzZWN0aW9uYCBhbmQgYGFydGljbGVgIGNvbnRleHRzICovXFxuLyogaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpICovXFxuXFxuaDEge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgbWFyZ2luOiAwLjY3ZW0gMDtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYGhlYWRlcmAgZWxlbWVudHMgYWNyb3NzIGJyb3N3ZXJzICovXFxuXFxuaDIsIGgzLCBoNCwgaDUsIGg2IHtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbn1cXG5cXG4vKiBzdGFuZGFyZGl6ZSBtYXJnaW5zIGZvciBgcGAgZWxlbWVudHMgYWNyb3NzIGJyb3dzZXJzICovXFxuXFxucCB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XFxufVxcblxcblxcbi8qIFRFWFQtTEVWRUwgU0VNQU5USUNTID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgZ3JheSBiZyBvbiBhY3RpdmUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5hIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi8qIDEuIHJlbW92ZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny0gKi9cXG4vKiAyLiBhZGQgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIFNhZmFyaSAqL1xcblxcbmFiYnJbdGl0bGVdIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZSBkb3R0ZWQ7IC8qIDIgKi9cXG59XFxuXFxuLyogYWRkIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBTYWZhcmkgKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMgKi9cXG5cXG5zbWFsbCB7XFxuICAgIGZvbnQtc2l6ZTogODAlO1xcbn1cXG5cXG5cXG4vKiBFTUJFRERFRCBDT05URU5UID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiByZW1vdmUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAgKi9cXG5cXG5pbWcge1xcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcblxcbi8qIEZPUk1TID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiAxLiBjaGFuZ2UgZm9udCBzdHlsZXMgaW4gYWxsIGJyb3dzZXJzICovXFxuLyogMi4gcmVtb3ZlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuaW5wdXQsXFxuc2VsZWN0IHtcXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cXG4gICAgZm9udC1zaXplOiAxMDAlOyAvKiAxICovXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXFxuICAgIG1hcmdpbjogMDsgLyogMiAqL1xcbn1cXG5cXG4vKiBzaG93IG92ZXJmbG93IGluIElFLCBFZGdlICovXFxuXFxuYnV0dG9uLFxcbmlucHV0IHtcXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7XFxufVxcblxcbi8qIHJlbW92ZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBJRSAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3Qge1xcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXG59XFxuXFxuLyogY29ycmVjdCB0aGUgaW5hYmlsaXR5IHRvIHN0eWxlIGNsaWNrYWJsZSB0eXBlcyBpbiBpT1MsIFNhZmFyaSAqL1xcblxcbmJ1dHRvbixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl0sXFxuW3R5cGU9XFxcInJlc2V0XFxcIl0sXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdIHtcXG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XFxufVxcblxcbi8qIHJlbW92ZSBpbm5lciBib3JkZXIsIHBhZGRpbmcgaW4gRmlyZWZveCAqL1xcblxcbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOjotbW96LWZvY3VzLWlubmVyIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4vKiByZXN0b3JlIGZvY3VzIHN0eWxlcyB1bnNldCBieSBwcmV2aW91cyBydWxlIF5eICovXFxuXFxuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJidXR0b25cXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwicmVzZXRcXFwiXTotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwic3VibWl0XFxcIl06LW1vei1mb2N1c3Jpbmcge1xcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XFxufVxcblxcblxcbi8qIE1JU0MgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGFkZCBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAgKi9cXG5cXG5baGlkZGVuXSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvcmVzZXQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLHFDQUFxQzs7QUFFckM7OztJQUdJLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFlBQVksRUFBRSxXQUFXOztJQUV6QixpQkFBaUI7SUFDakIsOEJBQThCO0lBQzlCLDBCQUEwQjtJQUMxQixlQUFlO0lBQ2YsYUFBYTs7SUFFYix3QkFBd0I7QUFDNUI7OztBQUdBLHVDQUF1Qzs7QUFFdkMsK0NBQStDO0FBQy9DLDRDQUE0QztBQUM1QyxtQ0FBbUM7O0FBRW5DO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQSw4REFBOEQ7O0FBRTlEO0lBQ0ksYUFBYTtJQUNiLHFCQUFxQjtBQUN6Qjs7QUFFQSx5REFBeUQ7O0FBRXpEO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2Qjs7O0FBR0EsbURBQW1EOztBQUVuRCw0Q0FBNEM7O0FBRTVDO0lBQ0ksNkJBQTZCO0FBQ2pDOztBQUVBLDBDQUEwQztBQUMxQyxzRUFBc0U7O0FBRXRFO0lBQ0ksbUJBQW1CLEVBQUUsTUFBTTtJQUMzQiwwQkFBMEIsRUFBRSxNQUFNO0lBQ2xDLGlDQUFpQyxFQUFFLE1BQU07QUFDN0M7O0FBRUEsb0RBQW9EOztBQUVwRDs7SUFFSSxtQkFBbUI7QUFDdkI7O0FBRUEsMENBQTBDOztBQUUxQztJQUNJLGNBQWM7QUFDbEI7OztBQUdBLCtDQUErQzs7QUFFL0Msa0RBQWtEOztBQUVsRDtJQUNJLGtCQUFrQjtBQUN0Qjs7O0FBR0Esb0NBQW9DOztBQUVwQywwQ0FBMEM7QUFDMUMsMkNBQTJDOztBQUUzQzs7O0lBR0ksb0JBQW9CLEVBQUUsTUFBTTtJQUM1QixlQUFlLEVBQUUsTUFBTTtJQUN2QixpQkFBaUIsRUFBRSxNQUFNO0lBQ3pCLFNBQVMsRUFBRSxNQUFNO0FBQ3JCOztBQUVBLDhCQUE4Qjs7QUFFOUI7O0lBRUksaUJBQWlCO0FBQ3JCOztBQUVBLDhEQUE4RDs7QUFFOUQ7O0lBRUksb0JBQW9CO0FBQ3hCOztBQUVBLGtFQUFrRTs7QUFFbEU7Ozs7SUFJSSwwQkFBMEI7QUFDOUI7O0FBRUEsNENBQTRDOztBQUU1Qzs7OztJQUlJLGtCQUFrQjtJQUNsQixVQUFVO0FBQ2Q7O0FBRUEsbURBQW1EOztBQUVuRDs7OztJQUlJLDhCQUE4QjtBQUNsQzs7O0FBR0EsbUNBQW1DOztBQUVuQyxpQ0FBaUM7O0FBRWpDO0lBQ0ksYUFBYTtBQUNqQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBHTE9CQUwgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuKiB7XFxuICAgIHBhZGRpbmc6IDBweDsgbWFyZ2luOiAwcHg7XFxuXFxuICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xcbiAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxuICAgIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcbiAgICBmb250LXNpemU6IDEwMCU7XFxuICAgIGZvbnQ6IGluaGVyaXQ7XFxuXFxuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG59XFxuXFxuXFxuLyogU0VDVElPTlMgPT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qIGNvcnJlY3QgZm9udCBzaXplLCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyAqL1xcbi8qIHdpdGhpbiBgc2VjdGlvbmAgYW5kIGBhcnRpY2xlYCBjb250ZXh0cyAqL1xcbi8qIGluIENocm9tZSwgRmlyZWZveCwgYW5kIFNhZmFyaSAqL1xcblxcbmgxIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIG1hcmdpbjogMC42N2VtIDA7XFxufVxcblxcbi8qIHN0YW5kYXJkaXplIG1hcmdpbnMgZm9yIGBoZWFkZXJgIGVsZW1lbnRzIGFjcm9zcyBicm9zd2VycyAqL1xcblxcbmgyLCBoMywgaDQsIGg1LCBoNiB7XFxuICAgIG1hcmdpbi10b3A6IDA7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXG59XFxuXFxuLyogc3RhbmRhcmRpemUgbWFyZ2lucyBmb3IgYHBgIGVsZW1lbnRzIGFjcm9zcyBicm93c2VycyAqL1xcblxcbnAge1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xcbn1cXG5cXG5cXG4vKiBURVhULUxFVkVMIFNFTUFOVElDUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGdyYXkgYmcgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwICovXFxuXFxuYSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5cXG4vKiAxLiByZW1vdmUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctICovXFxuLyogMi4gYWRkIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBTYWZhcmkgKi9cXG5cXG5hYmJyW3RpdGxlXSB7XFxuICAgIGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7IC8qIDIgKi9cXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXFxufVxcblxcbi8qIGFkZCBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgU2FmYXJpICovXFxuXFxuYixcXG5zdHJvbmcge1xcbiAgICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG5cXG4vKiBhZGQgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzICovXFxuXFxuc21hbGwge1xcbiAgICBmb250LXNpemU6IDgwJTtcXG59XFxuXFxuXFxuLyogRU1CRURERUQgQ09OVEVOVCA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogcmVtb3ZlIGJvcmRlciBvbiBpbWFnZXMgaW5zaWRlIGxpbmtzIGluIElFIDEwICovXFxuXFxuaW1nIHtcXG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xcbn1cXG5cXG5cXG4vKiBGT1JNUyA9PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyogMS4gY2hhbmdlIGZvbnQgc3R5bGVzIGluIGFsbCBicm93c2VycyAqL1xcbi8qIDIuIHJlbW92ZSBtYXJnaW4gaW4gRmlyZWZveCBhbmQgU2FmYXJpICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCB7XFxuICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0OyAvKiAxICovXFxuICAgIGZvbnQtc2l6ZTogMTAwJTsgLyogMSAqL1xcbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xcbiAgICBtYXJnaW46IDA7IC8qIDIgKi9cXG59XFxuXFxuLyogc2hvdyBvdmVyZmxvdyBpbiBJRSwgRWRnZSAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7XFxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgSUUgKi9cXG5cXG5idXR0b24sXFxuc2VsZWN0IHtcXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qIGNvcnJlY3QgdGhlIGluYWJpbGl0eSB0byBzdHlsZSBjbGlja2FibGUgdHlwZXMgaW4gaU9TLCBTYWZhcmkgKi9cXG5cXG5idXR0b24sXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICAgIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xcbn1cXG5cXG4vKiByZW1vdmUgaW5uZXIgYm9yZGVyLCBwYWRkaW5nIGluIEZpcmVmb3ggKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuLyogcmVzdG9yZSBmb2N1cyBzdHlsZXMgdW5zZXQgYnkgcHJldmlvdXMgcnVsZSBeXiAqL1xcblxcbmJ1dHRvbjotbW96LWZvY3VzcmluZyxcXG5bdHlwZT1cXFwiYnV0dG9uXFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInJlc2V0XFxcIl06LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcInN1Ym1pdFxcXCJdOi1tb3otZm9jdXNyaW5nIHtcXG4gICAgb3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG5cXG4vKiBNSVNDID09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKiBhZGQgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwICovXFxuXFxuW2hpZGRlbl0ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nbG9iYWwuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsInZhciBtYXAgPSB7XG5cdFwiLi9jYW5jZWwuc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NhbmNlbC5zdmdcIixcblx0XCIuL2NvbmZpcm0uc3ZnXCI6IFwiLi9zcmMvYXNzZXRzL2NvbmZpcm0uc3ZnXCIsXG5cdFwiLi9wbGF5LnN2Z1wiOiBcIi4vc3JjL2Fzc2V0cy9wbGF5LnN2Z1wiLFxuXHRcIi4vcmVzdGFydC5zdmdcIjogXCIuL3NyYy9hc3NldHMvcmVzdGFydC5zdmdcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9zcmMvYXNzZXRzIHN5bmMgXFxcXC4ocG5nJTdDc3ZnJTdDanBnJTdDanBlZyU3Q2dpZikkL1wiOyIsIi8vICYgcHVic3ViIGV2ZW50cyBtYW5hZ2VyXG5cbmNvbnN0IGV2ZW50cyA9ICgoKSA9PiB7XG4gICAgbGV0IF9ldmVudHMgPSB7fTtcblxuICAgIC8vIHN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50TmFtZSwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KF9ldmVudHNbZXZlbnROYW1lXSkpIHtcbiAgICAgICAgICAgIF9ldmVudHNbZXZlbnROYW1lXSA9IFtdO1xuICAgICAgICB9O1xuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0ucHVzaChjYWxsYmFjayk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGBTVUJTQ1JJQklORyB0byAke2V2ZW50TmFtZX1gKTtcbiAgICB9XG5cbiAgICAvLyB1bnN1YnNjcmliZSBldmVudCB0byBsaXN0XG4gICAgZnVuY3Rpb24gdW5zdWJzY3JpYmUoZXZlbnROYW1lKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50TmFtZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHNbZXZlbnROYW1lXS5sZW5ndGggLSAxKTtcbiAgICAgICAgX2V2ZW50c1tldmVudE5hbWVdLnNwbGljZSgoX2V2ZW50c1tldmVudE5hbWVdLmxlbmd0aCAtIDEpLCAxKTtcbiAgICB9XG5cbiAgICAvLyBwdWJsaXNoIGV2ZW50IHdpdGggZGF0YVxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnROYW1lLCAuLi5kYXRhKSB7XG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShfZXZlbnRzW2V2ZW50TmFtZV0pKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfZXZlbnRzW2V2ZW50TmFtZV0uZm9yRWFjaChjYWxsYmFjayA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayguLi5kYXRhKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBQVUJMSVNISU5HIHRvICR7ZXZlbnROYW1lfWApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBkZWJ1Z1xuICAgIGZ1bmN0aW9uIHZpZXdFdmVudHMoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKF9ldmVudHMpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgdW5zdWJzY3JpYmUsXG4gICAgICAgIHB1Ymxpc2gsXG4gICAgICAgIHZpZXdFdmVudHMsXG4gICAgfVxuXG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBldmVudHM7IiwiLy8gQ0xBU1NFU1xuY2xhc3MgU2hpcCB7XG4gICAgY29uc3RydWN0b3IobGVuZ3RoID0gbnVsbCwgY29vcmRzID0gbnVsbCkge1xuICAgICAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICAgICAgdGhpcy5oaXRzID0gMDtcbiAgICAgICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgICAgIHRoaXMuY29vcmRzID0gY29vcmRzO1xuICAgIH1cblxuICAgIGlzUGxhY2VkKCkge1xuICAgICAgICB0aGlzLnBsYWNlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvZ0hpdCgpIHtcbiAgICAgICAgdGhpcy5oaXRzICs9IDE7XG4gICAgICAgIHRoaXMuaXNTdW5rKCk7XG4gICAgfVxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaGl0cyA9PT0gdGhpcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuc3VuayA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG59XG5jbGFzcyBHYW1lYm9hcmQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmdyaWQgPSBbW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXSxcbiAgICAgICAgICAgICAgICAgICAgIFtbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXV0sXG4gICAgICAgICAgICAgICAgICAgICBbW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW11dLFxuICAgICAgICAgICAgICAgICAgICAgW1tdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdLCBbXSwgW10sIFtdXV07XG4gICAgICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgICAgICAgdGhpcy5zaGlwc1N1bmsgPSAwO1xuICAgIH1cblxuICAgIHBsYWNlU2hpcChzdGFydENvb3JkLCBkaXIsIHNoaXBMZW4pIHtcbiAgICAgICAgbGV0IGNvb3JkU2V0ID0gdGhpcy5nZXRDb29yZHMoc3RhcnRDb29yZCwgZGlyLCBzaGlwTGVuKTtcbiAgICAgICAgaWYgKHRoaXMuc2V0SXNWYWxpZChjb29yZFNldCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2hpcHMucHVzaChtYWtlU2hpcChzaGlwTGVuLCBjb29yZFNldCkpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7ICAgIC8vIHVzZWQgYnkgY29tcHV0ZXIgQUkgdG8gbWFyayB2YWxpZCBwbGFjZW1lbnRzXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlOyAgIC8vIFwiXCJcbiAgICB9XG4gICAgZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpciwgc2hpcExlbikge1xuICAgICAgICBsZXQgY29vcmRTZXQgPSBbc3RhcnRDb29yZF07XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgaWYgKGRpciA9PT0gJ2gnKSB7XG4gICAgICAgICAgICBsZXQgeFBvc2l0aW9uID0gcGFyc2VJbnQoc3RhcnRDb29yZC5zcGxpdCgnJylbMF0pO1xuICAgICAgICAgICAgd2hpbGUgKGkgPCBzaGlwTGVuIC0gMSkge1xuICAgICAgICAgICAgICAgIHhQb3NpdGlvbiArPSAxO1xuICAgICAgICAgICAgICAgIHhQb3NpdGlvbi50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGxldCBuZXdDb29yZCA9IHhQb3NpdGlvbiArIHN0YXJ0Q29vcmQuc3BsaXQoJycpWzFdO1xuICAgICAgICAgICAgICAgIGNvb3JkU2V0LnB1c2gobmV3Q29vcmQpO1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChkaXIgPT09ICd2Jykge1xuICAgICAgICAgICAgbGV0IHlQb3NpdGlvbiA9IHBhcnNlSW50KHN0YXJ0Q29vcmQuc3BsaXQoJycpWzFdKTtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgc2hpcExlbiAtIDEpIHtcbiAgICAgICAgICAgICAgICB5UG9zaXRpb24gKz0gMTtcbiAgICAgICAgICAgICAgICB5UG9zaXRpb24udG9TdHJpbmcoKTtcbiAgICAgICAgICAgICAgICBsZXQgbmV3Q29vcmQgPSBzdGFydENvb3JkLnNwbGl0KCcnKVswXSArIHlQb3NpdGlvbjtcbiAgICAgICAgICAgICAgICBjb29yZFNldC5wdXNoKG5ld0Nvb3JkKTtcbiAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvb3JkU2V0O1xuICAgIH1cbiAgICBzZXRJc1ZhbGlkKGNvb3JkU2V0KSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29vcmRTZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb29yZFNldFtpXS5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2Nvb3JkIG91dCBvZiBib3VuZHMnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgbmV3WCA9IHBhcnNlSW50KGNvb3JkU2V0W2ldLnNwbGl0KCcnKVswXSk7XG4gICAgICAgICAgICBsZXQgbmV3WSA9IHBhcnNlSW50KGNvb3JkU2V0W2ldLnNwbGl0KCcnKVsxXSk7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuc2hpcHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcCA9IHRoaXMuc2hpcHNbal07XG4gICAgICAgICAgICAgICAgbGV0IHhNaW4gPSBwYXJzZUludChzaGlwLmNvb3Jkc1swXS5zcGxpdCgnJylbMF0pIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeE1heCA9IHBhcnNlSW50KHNoaXAuY29vcmRzW3NoaXAuY29vcmRzLmxlbmd0aCAtIDFdLnNwbGl0KCcnKVswXSkgKyAxXG4gICAgICAgICAgICAgICAgbGV0IHlNaW4gPSBwYXJzZUludChzaGlwLmNvb3Jkc1swXS5zcGxpdCgnJylbMV0pIC0gMTtcbiAgICAgICAgICAgICAgICBsZXQgeU1heCA9IHBhcnNlSW50KHNoaXAuY29vcmRzW3NoaXAuY29vcmRzLmxlbmd0aCAtIDFdLnNwbGl0KCcnKVsxXSkgKyAxXG4gICAgICAgICAgICAgICAgaWYgKG5ld1ggPj0geE1pbiAmJiBuZXdYIDw9IHhNYXggJiYgbmV3WSA+PSB5TWluICYmIG5ld1kgPD0geU1heCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY29vcmQgYWxyZWFkeSB0YWtlbicpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmVjZWl2ZUF0dGFjayhjb29yZCkge1xuICAgICAgICBsZXQgb3V0Y29tZSA9IHRoaXMuaXNIaXQoY29vcmQpO1xuICAgICAgICBsZXQgaGl0ID0gb3V0Y29tZVswXTtcbiAgICAgICAgbGV0IHNoaXAgPSBvdXRjb21lWzFdO1xuICAgICAgICBpZiAoaGl0KSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtCb2FyZChjb29yZCwgJ3gnKTtcbiAgICAgICAgICAgIHNoaXAubG9nSGl0KCk7XG4gICAgICAgICAgICBpZiAoc2hpcC5zdW5rKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwc1N1bmsgKz0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICghaGl0KSB7XG4gICAgICAgICAgICB0aGlzLm1hcmtCb2FyZChjb29yZCwgJ28nKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpc0hpdChhdHRhY2tDb29yZCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuc2hpcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzaGlwID0gdGhpcy5zaGlwc1tpXTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcC5jb29yZHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgc2hpcENvb3JkID0gc2hpcC5jb29yZHNbal07XG4gICAgICAgICAgICAgICAgaWYgKGF0dGFja0Nvb3JkID09PSBzaGlwQ29vcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFt0cnVlLCBzaGlwXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtmYWxzZSwgdW5kZWZpbmVkXTtcbiAgICB9XG4gICAgbWFya0JvYXJkKGNvb3JkLCBtYXJrKSB7XG4gICAgICAgIGxldCB4ID0gcGFyc2VJbnQoY29vcmQuc3BsaXQoJycpWzBdKTtcbiAgICAgICAgbGV0IHkgPSBwYXJzZUludChjb29yZC5zcGxpdCgnJylbMV0pO1xuICAgICAgICB0aGlzLmdyaWRbeV1beF0gPSBtYXJrO1xuICAgIH1cblxuICAgIGlzTG9zZXIoKSB7XG4gICAgICAgIGlmICh0aGlzLnNoaXBzU3VuayA9PT0gdGhpcy5zaGlwcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgfVxufVxuY2xhc3MgSHVtYW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnR5cGUgPSAnaHVtYW4nO1xuICAgICAgICB0aGlzLmJvYXJkID0gbWFrZUdhbWVib2FyZCgpO1xuICAgIH1cblxuICAgIHNlbmRBdHRhY2soY29vcmQsIGJvYXJkKSB7XG4gICAgICAgIGJvYXJkLnJlY2VpdmVBdHRhY2soY29vcmQpO1xuICAgIH1cbn1cbmNsYXNzIENvbXB1dGVyIGV4dGVuZHMgSHVtYW4ge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcihIdW1hbik7XG4gICAgICAgIHRoaXMudHlwZSA9ICdjb21wdXRlcic7XG4gICAgICAgIHRoaXMuYXR0YWNrc01hZGUgPSBbXTtcbiAgICB9XG5cbiAgICByYW5kb21pemVTaGlwcygpIHtcbiAgICAgICAgbGV0IGF2YWlsU2hpcHMgPSBbMSwgMSwgMiwgMiwgMywgNCwgNV07XG4gICAgICAgIGxldCBkaXJzID0gWydoJywgJ3YnXTtcbiAgICAgICAgLy8gYXZhaWxTaGlwcy5zcGxpY2UoNik7ICAgLy8gISByZW1vdmUgYWZ0ZXIgdGVzdGluZ1xuICAgICAgICAvLyBhdmFpbFNoaXBzLnNwbGljZSg0LCAxKTsgICAgLy8gISByZW1vdmUgYWZ0ZXIgdGVzdGluZ1xuICAgICAgICBcbiAgICAgICAgd2hpbGUgKGF2YWlsU2hpcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IHNoaXBMZW4gPSBhdmFpbFNoaXBzWzBdO1xuICAgICAgICAgICAgYXZhaWxTaGlwcy5zcGxpY2UoMCwgMSk7XG5cbiAgICAgICAgICAgIGxldCBkaXIgPSBkaXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGRpcnMubGVuZ3RoKV07XG5cbiAgICAgICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgd2hpbGUgKHZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGxldCBjb29yZCA9ICcnO1xuICAgICAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgICAgICB3aGlsZSAoaSA8IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvb3JkICs9IGluZGV4O1xuICAgICAgICAgICAgICAgICAgICBpKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbGlkID0gdGhpcy5ib2FyZC5wbGFjZVNoaXAoY29vcmQsIGRpciwgc2hpcExlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmFuZG9taXplQXR0YWNrKGJvYXJkKSB7XG4gICAgICAgIGxldCB2YWxpZCA9IGZhbHNlO1xuICAgICAgICB3aGlsZSAodmFsaWQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBsZXQgY29vcmQgPSAnJztcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChpIDwgMikge1xuICAgICAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIGNvb3JkICs9IGluZGV4O1xuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5hdHRhY2tzTWFkZS5pbmNsdWRlcyhjb29yZCkpIHtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5hdHRhY2tzTWFkZS5wdXNoKGNvb3JkKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRBdHRhY2soY29vcmQsIGJvYXJkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLyBGQUNUT1JJRVNcbmZ1bmN0aW9uIG1ha2VTaGlwKGxlbmd0aCwgY29vcmRzKSB7XG4gICAgcmV0dXJuIG5ldyBTaGlwKGxlbmd0aCwgY29vcmRzKTtcbn1cbmZ1bmN0aW9uIG1ha2VHYW1lYm9hcmQoKSB7XG4gICAgcmV0dXJuIG5ldyBHYW1lYm9hcmQoKTtcbn1cbmZ1bmN0aW9uIG1ha2VQbGF5ZXIodHlwZSkge1xuICAgIGlmICh0eXBlID09PSAnaHVtYW4nKSB7XG4gICAgICAgIHJldHVybiBuZXcgSHVtYW4oKTtcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdjb21wdXRlcicpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBDb21wdXRlcigpO1xuICAgIH1cbn1cblxuLy8gZXhwb3J0IHsgbWFrZVNoaXAgYXMgZGVmYXVsdCwgbWFrZUdhbWVib2FyZCwgbWFrZVBsYXllciB9OyAgIC8vIHRlc3RpbmcgZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBtYWtlUGxheWVyO1xuIiwiY29uc3QgY3JlYXRlID0gKCgpID0+IHtcbiAgICAvLyBkYXRhXG4gICAgbGV0IF9hdHRyaWJ1dGVzID0gW107XG4gICAgbGV0IGVsZW1lbnQ7XG5cbiAgICAvLyBiYXNpYyBoZWxwZXIgZmFjdG9yaWVzXG4gICAgY29uc3QgZGl2ID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3Qgc3BhbiA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBwID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGgyID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBoNCA9IGZ1bmN0aW9uKGNvbnRlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgdWwgPSBmdW5jdGlvbihjb250ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGxpID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnQ7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gW107XG4gICAgICAgIHJldHVybiBlbGVtZW50O1xuICAgIH1cbiAgICBjb25zdCBpbnB1dCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHBsYWNlaG9sZGVyLCBpZCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxlbWVudC50eXBlID0gdHlwZTtcbiAgICAgICAgZWxlbWVudC5pZCA9IFN0cmluZyhpZCk7XG4gICAgICAgIGVsZW1lbnQubmFtZSA9IFN0cmluZyhuYW1lKTtcbiAgICAgICAgZWxlbWVudC5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9IFN0cmluZyhpZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IHNlbGVjdCA9IGZ1bmN0aW9uKG5hbWUsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50Lm5hbWUgPSBuYW1lO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3Qgb3B0aW9uID0gZnVuY3Rpb24odmFsdWUsIGNvbnRlbnQpIHtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgbGFiZWwgPSBmdW5jdGlvbihjb250ZW50LCBmb3JSZWZlcmVuY2UsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQuZm9yID0gU3RyaW5nKGZvclJlZmVyZW5jZSk7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgbGVnZW5kID0gZnVuY3Rpb24oY29udGVudCwgLi4uYXJncykge1xuICAgICAgICBfYXR0cmlidXRlcyA9IFsuLi5hcmdzXTtcbiAgICAgICAgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xlZ2VuZCcpO1xuICAgICAgICBpZiAoX2F0dHJpYnV0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgX2F0dHJpYnV0ZXMpO1xuICAgICAgICB9O1xuICAgICAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudDtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbXTtcbiAgICAgICAgcmV0dXJuIGVsZW1lbnQ7XG4gICAgfVxuICAgIGNvbnN0IGltZyA9IGZ1bmN0aW9uKHVybCwgYWx0LCAuLi5hcmdzKSB7XG4gICAgICAgIF9hdHRyaWJ1dGVzID0gWy4uLmFyZ3NdO1xuICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGlmIChfYXR0cmlidXRlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBfc2V0QXR0cmlidXRlcyhlbGVtZW50LCBfYXR0cmlidXRlcyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZWxlbWVudC5zcmMgPSBgLi4vJHt1cmx9YDtcbiAgICAgICAgZWxlbWVudC5zcmMgPSB1cmw7XG4gICAgICAgIGVsZW1lbnQuYWx0ID0gYWx0O1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgYnV0dG9uID0gZnVuY3Rpb24oY29udGVudCwgc3RhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgX2F0dHJpYnV0ZXMgPSBbLi4uYXJnc107XG4gICAgICAgIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgaWYgKF9hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIF9zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgZWxlbWVudC5yb2xlID0gJ2J1dHRvbic7XG4gICAgICAgIGVsZW1lbnQudGV4dENvbnRlbnQgPSBjb250ZW50O1xuICAgICAgICBlbGVtZW50LnZhbHVlID0gc3RhdGU7XG4gICAgICAgIGVsZW1lbnQuYXJpYVByZXNzZWQgPSAnZmFsc2UnO1xuICAgICAgICBfYXR0cmlidXRlcyA9IFtdO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICB9XG5cbiAgICAvLyBoZWxwZXJzXG4gICAgZnVuY3Rpb24gX3NldEF0dHJpYnV0ZXMoZWxlbWVudCwgYXR0cmlidXRlcykge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IChhdHRyaWJ1dGVzLmxlbmd0aCk7IGkrKykge1xuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbaV1bMF0gPT09ICcuJykge1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChhdHRyaWJ1dGVzW2ldLnN1YnN0cmluZygxLCBhdHRyaWJ1dGVzW2ldLmxlbmd0aCkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyaWJ1dGVzW2ldWzBdID09PSAnIycpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlkID0gYXR0cmlidXRlc1tpXS5zdWJzdHJpbmcoMSwgYXR0cmlidXRlc1tpXS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGl2LFxuICAgICAgICBzcGFuLFxuICAgIH1cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNyZWF0ZTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5pbXBvcnQgbWFrZVBsYXllciBmcm9tICcuL2NsYXNzZXMuanMnO1xuXG5jb25zdCBnYW1lID0gKCgpID0+IHtcbiAgICBsZXQgaHVtYW47XG4gICAgbGV0IGNvbXB1dGVyO1xuXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgaHVtYW4gPSBtYWtlUGxheWVyKCdodW1hbicpO1xuICAgICAgICBjb21wdXRlciA9IG1ha2VQbGF5ZXIoJ2NvbXB1dGVyJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKGh1bWFuKTtcbiAgICAgICAgY29uc29sZS5sb2coY29tcHV0ZXIpOyAgICBcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRDb29yZHNGcm9tSHVtYW4oc3RhcnRDb29yZCwgZGlyZWN0aW9uLCBsZW5ndGgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Bhc3MgdG8gZ2V0Q29vcmRzRnJvbUh1bWFuOicsIHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoKTtcbiAgICAgICAgbGV0IGNvb3JkU2V0ID0gaHVtYW4uYm9hcmQuZ2V0Q29vcmRzKHN0YXJ0Q29vcmQsIGRpcmVjdGlvbiwgbGVuZ3RoKTtcbiAgICAgICAgbGV0IGlzVmFsaWQgPSBodW1hbi5ib2FyZC5zZXRJc1ZhbGlkKGNvb3JkU2V0KTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2dldENvb3Jkc0Zyb21IdW1hbjonLCBjb29yZFNldCwgaXNWYWxpZCk7XG4gICAgICAgIGV2ZW50cy5wdWJsaXNoKCdyZWNlaXZlSURBcnJheScsIGNvb3JkU2V0LCBpc1ZhbGlkKTsgLy8gc3Vic2NyaWJlZCBieSB1aS5qc1xuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcbiAgICBldmVudHMuc3Vic2NyaWJlKCdxdWVyeUlEQXJyYXknLCBnZXRDb29yZHNGcm9tSHVtYW4pOyAvLyBwdWJsaXNoZWQgYnkgdWkuanMgKHBsYXllckJvYXJkc1swXS5vbk1vdXNlT3ZlcilcblxuICAgIHJldHVybiB7XG4gICAgICAgIGluaXQsIC8vIHVzZWQgYnkgaW5kZXguanNcbiAgICB9XG5cbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGdhbWU7XG4iLCIvLyBjYWNoZSBpbWFnZXNcbmxldCBpbWdRdWVyeSA9IHJlcXVpcmUuY29udGV4dCgnLi4vYXNzZXRzJywgZmFsc2UsIC9cXC4ocG5nfHN2Z3xqcGd8anBlZ3xnaWYpJC9pKTtcbmxldCBpY29uc0FycmF5ID0gaW1wb3J0SWNvbnMoaW1nUXVlcnkpO1xuY29uc29sZS5sb2coJyoqKioqIElDT05TIEFSUkFZICoqKioqJyk7XG5jb25zb2xlLmxvZyhpY29uc0FycmF5KTtcblxuLy8gbWV0aG9kc1xuZnVuY3Rpb24gaW1wb3J0SWNvbnMocikge1xuICAgIGxldCBxdWVyeUtleXMgPSByLmtleXMoKTtcbiAgICBsZXQgaWNvbnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJ5S2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3S2V5ID0gcXVlcnlLZXlzW2ldLnNwbGl0KCcuc3ZnJylbMF0uc3BsaXQoJy4vJylbMV07XG4gICAgICAgIGxldCBuZXdWYWx1ZSA9IGAuL2Fzc2V0cy8ke3F1ZXJ5S2V5c1tpXS5zcGxpdCgnLi8nKVsxXX1gO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGBuZXdLZXkgLS0+ICR7bmV3S2V5fWApO1xuICAgICAgICAvLy8vIGNvbnNvbGUubG9nKGBuZXdWYWx1ZSAtLT4gJHtuZXdWYWx1ZX1gKVxuICAgICAgICBcbiAgICAgICAgaWNvbnNbbmV3S2V5XSA9IG5ld1ZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiBpY29ucztcbn1cblxuZXhwb3J0IGRlZmF1bHQgaWNvbnNBcnJheTsiLCJpbXBvcnQgZXZlbnRzIGZyb20gJy4uL2V2ZW50cy5qcyc7XG5pbXBvcnQgY3JlYXRlIGZyb20gJy4vY3JlYXRlLmpzJztcbmltcG9ydCBpY29uc0FycmF5IGZyb20gJy4vaWNvbnMuanMnO1xuXG5jb25zdCB1aSA9ICgoKSA9PiB7XG4gICAgbGV0IHBsYXllckJvYXJkcyA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaHVtYW4nKS5sYXN0RWxlbWVudENoaWxkLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcHV0ZXInKS5sYXN0RWxlbWVudENoaWxkXTtcbiAgICBsZXQgc2hpcENvbnRhaW5lcnMgPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2h1bWFuJykuZmlyc3RFbGVtZW50Q2hpbGQsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wdXRlcicpLmZpcnN0RWxlbWVudENoaWxkXTtcbiAgICBsZXQgYm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcblxuICAgIGxldCBhY3Rpb247XG4gICAgbGV0IHNlbGVjdGVkU2hpcDtcbiAgICBsZXQgYm9hcmRDZWxscztcbiAgICBsZXQgZGlyZWN0aW9uID0gJ2gnO1xuXG4gICAgLy8gZXZlbnQgbGlzdGVuZXJzXG4gICAgYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ3BsYXknKSB7XG4gICAgICAgICAgICBwbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAncmVzdGFydCcpIHtcbiAgICAgICAgICAgIC8vIHJlc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSAmJiBzaGlwQ29udGFpbmVyc1swXS5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUnKSkge1xuICAgICAgICAgICAgc2V0TWVudVNlbGVjdChlLnRhcmdldC5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHBsYXllckJvYXJkc1swXS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCAoZSkgPT4ge1xuICAgICAgICBpZiAoYWN0aW9uID09PSAncGxhY2luZycpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdwdWJsaXNoIHF1ZXJ5SURBcnJheTonLCBlLnRhcmdldC5pZCwgZGlyZWN0aW9uLCBzZWxlY3RlZFNoaXAuaWQuc2xpY2UoMCwgMSkpO1xuICAgICAgICAgICAgZXZlbnRzLnB1Ymxpc2goJ3F1ZXJ5SURBcnJheScsIGUudGFyZ2V0LmlkLCBkaXJlY3Rpb24sIHNlbGVjdGVkU2hpcC5pZC5zbGljZSgwLCAxKSk7IC8vIHN1YnNjcmliZWQgYnkgZ2FtZS5qc1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcGxheWVyQm9hcmRzWzBdLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgIGlmIChhY3Rpb24gPT09ICdwbGFjaW5nJyAmJiBib2FyZENlbGxzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJlbW92ZUNlbGxIb3ZlcigpO1xuICAgICAgICB9XG4gICAgfSlcblxuICAgIC8vIGRyaXZlciBtZXRob2RzXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICB3aGlsZSAoaSA8IHBsYXllckJvYXJkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGdlbmVyYXRlR3JpZChwbGF5ZXJCb2FyZHNbaV0pO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgICAgIHNldFNlY3Rpb25UeXBlKHNoaXBDb250YWluZXJzWzBdLCAnbWVudScpO1xuICAgICAgICBnZW5lcmF0ZVNoaXBNZW51KCk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHBsYXkoKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCBzaGlwQ29udGFpbmVycy5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGkpO1xuICAgICAgICAgICAgY2xlYXJTaGlwQ29udGFpbmVyKHNoaXBDb250YWluZXJzW2ldKTtcbiAgICAgICAgICAgIHNldFNlY3Rpb25UeXBlKHNoaXBDb250YWluZXJzW2ldLCAndGFsbHknKTtcbiAgICAgICAgICAgIGdlbmVyYXRlU2hpcFRhbGxpZXMoc2hpcENvbnRhaW5lcnNbaV0sIGkpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gZ2VuZXJhdGl2ZSBtZXRob2RzXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVHcmlkKGJvYXJkKSB7XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgd2hpbGUgKGkgPCAxMCkge1xuICAgICAgICAgICAgbGV0IHJvdyA9IGNyZWF0ZS5kaXYoJycsICcucm93JylcbiAgICAgICAgICAgIGxldCBqID0gMDtcbiAgICAgICAgICAgIHdoaWxlIChqIDwgMTApIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGNyZWF0ZS5kaXYoJycsICcuY2VsbCcsIGAjJHtqfSR7aX1gKTtcbiAgICAgICAgICAgICAgICByb3cuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJvYXJkLmFwcGVuZChyb3cpO1xuICAgICAgICAgICAgaSsrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldFNlY3Rpb25UeXBlKHNlY3Rpb24sIHNlbGVjdG9yKSB7XG4gICAgICAgIGlmIChzZWN0aW9uLmNsYXNzTGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBzZWN0aW9uLmNsYXNzTGlzdCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIHNlY3Rpb24uY2xhc3NMaXN0LmFkZChzZWxlY3Rvcik7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGdlbmVyYXRlU2hpcE1lbnUoKSB7XG4gICAgICAgIG1ha2VTaGlwSWNvbnMoJycsIHNoaXBDb250YWluZXJzWzBdKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVTaGlwVGFsbGllcyh0YWxseUNvbnRhaW5lciwgaW5kZXgpIHtcbiAgICAgICAgbGV0IHBsYXllclR5cGU7XG4gICAgICAgIGlmIChpbmRleCA9PT0gMCkge1xuICAgICAgICAgICAgcGxheWVyVHlwZSA9ICdoJztcbiAgICAgICAgfSBlbHNlICB7XG4gICAgICAgICAgICBwbGF5ZXJUeXBlID0gJ2MnO1xuICAgICAgICB9XG4gICAgICAgIG1ha2VTaGlwSWNvbnMocGxheWVyVHlwZSwgdGFsbHlDb250YWluZXIpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBtYWtlU2hpcEljb25zKHBsYXllclR5cGUsIGNvbnRhaW5lcikge1xuICAgICAgICBsZXQgc2hpcHMgPSBbWzUsICdhY2MnXSxcbiAgICAgICAgICAgICAgICAgICAgIFs0LCAnYnMnXSxcbiAgICAgICAgICAgICAgICAgICAgIFszLCAnY3J1cyddLFxuICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MSddLFxuICAgICAgICAgICAgICAgICAgICAgWzIsICdkZXN0MiddLFxuICAgICAgICAgICAgICAgICAgICAgWzEsICdzdWIxJ10sXG4gICAgICAgICAgICAgICAgICAgICBbMSwgJ3N1YjInXVxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNoaXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgY2VsbENvbnRhaW5lcjtcbiAgICAgICAgICAgIGlmIChwbGF5ZXJUeXBlID09PSAnJykge1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnLnNoaXAnLCBgIyR7c2hpcHNbaV1bMF19LSR7c2hpcHNbaV1bMV19YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIgPSBjcmVhdGUuZGl2KCcnLCAnLnNoaXAnLCBgIyR7cGxheWVyVHlwZX0tJHtzaGlwc1tpXVsxXX1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2hpcHNbaV1bMF07IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBjZWxsID0gY3JlYXRlLmRpdignJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGNlbGxDb250YWluZXIuYXBwZW5kKGNlbGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZChjZWxsQ29udGFpbmVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmdW5jdGlvbiBjbGVhclNoaXBDb250YWluZXIoY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGNvbnRhaW5lcik7XG4gICAgICAgIHdoaWxlIChjb250YWluZXIubGFzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKGNvbnRhaW5lci5sYXN0RWxlbWVudENoaWxkKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIHBsYWNlbWVudCBtZXRob2RzXG4gICAgZnVuY3Rpb24gc2V0TWVudVNlbGVjdCh0YXJnZXRTaGlwKSB7XG4gICAgICAgIGlmIChzZWxlY3RlZFNoaXAgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgYWN0aW9uID0gJ3BsYWNpbmcnO1xuICAgICAgICAgICAgc2VsZWN0ZWRTaGlwID0gdGFyZ2V0U2hpcDtcbiAgICAgICAgICAgIGFkZE1lbnVTZWxlY3Qoc2VsZWN0ZWRTaGlwKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXRTaGlwID09PSBzZWxlY3RlZFNoaXApIHtcbiAgICAgICAgICAgICAgICByZW1vdmVNZW51U2VsZWN0KHNlbGVjdGVkU2hpcCk7XG4gICAgICAgICAgICAgICAgYWN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0U2hpcCAhPT0gc2VsZWN0ZWRTaGlwKSB7XG4gICAgICAgICAgICAgICAgcmVtb3ZlTWVudVNlbGVjdChzZWxlY3RlZFNoaXApO1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkU2hpcCA9IHRhcmdldFNoaXA7XG4gICAgICAgICAgICAgICAgYWRkTWVudVNlbGVjdChzZWxlY3RlZFNoaXApO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICB9XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFkZE1lbnVTZWxlY3Qoc2hpcCkge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHJlbW92ZU1lbnVTZWxlY3Qoc2hpcCkge1xuICAgICAgICBzaGlwLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfVxuICAgIGZ1bmN0aW9uIHNldEJvYXJkSG92ZXIoY29vcmRTZXQsIGlzVmFsaWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Bhc3MgdG8gc2V0Qm9hcmRIb3ZlcjonLCBjb29yZFNldCwgaXNWYWxpZCk7XG4gICAgICAgIGlmIChib2FyZENlbGxzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGJvYXJkQ2VsbHMgPSBjb29yZFNldDtcbiAgICAgICAgICAgIGFkZENlbGxIb3Zlcihpc1ZhbGlkKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlbW92ZUNlbGxIb3Zlcihjb29yZFNldCk7XG4gICAgICAgICAgICBib2FyZENlbGxzID0gY29vcmRTZXQ7XG4gICAgICAgICAgICBhZGRDZWxsSG92ZXIoaXNWYWxpZCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkQ2VsbEhvdmVyKGlzVmFsaWQpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXNWYWxpZCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmRDZWxscy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGJvYXJkQ2VsbHNbaV0ubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJvYXJkQ2VsbHNbaV0pO1xuICAgICAgICAgICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaG92ZXInKTtcbiAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2lzLXZhbGlkJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpc1ZhbGlkID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2lzLWludmFsaWQnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQ2VsbEhvdmVyKCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkQ2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChib2FyZENlbGxzW2ldLmxlbmd0aCA8PSAyKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChib2FyZENlbGxzW2ldKTtcbiAgICAgICAgICAgICAgICBjZWxsLmNsYXNzTGlzdCA9ICdjZWxsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGV2ZW50IHN1YnNjcmlwdGlvbnNcbiAgICBldmVudHMuc3Vic2NyaWJlKCdyZWNlaXZlSURBcnJheScsIHNldEJvYXJkSG92ZXIpOyAvLyBwdWJsaXNoZWQgYnkgZ2FtZS5qcyAoZ2V0Q29vcmRzRnJvbUh1bWFuKVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaW5pdCwgLy8gdXNlZCBieSBpbmRleC5qc1xuICAgIH1cblxufSkoKTtcblxuZXhwb3J0IGRlZmF1bHQgdWk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0ICcuL3N0eWxlcy9yZXNldC5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nbG9iYWwuY3NzJ1xuaW1wb3J0IGdhbWUgZnJvbSAnLi9zY3JpcHRzL2dhbWUuanMnO1xuaW1wb3J0IHVpIGZyb20gJy4vc2NyaXB0cy91aS5qcyc7XG5cbmdhbWUuaW5pdCgpO1xudWkuaW5pdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9