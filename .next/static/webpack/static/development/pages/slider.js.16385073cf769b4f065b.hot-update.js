webpackHotUpdate("static/development/pages/slider.js",{

/***/ "./pages/slider.js":
/*!*************************!*\
  !*** ./pages/slider.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_compound_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-compound-slider */ "./node_modules/react-compound-slider/es/index.js");
var _jsxFileName = "/var/www/html/implementation/pages/slider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

var sliderStyle = {
  // Give the slider some width
  position: 'relative',
  width: '100%',
  height: 80,
  border: '1px solid steelblue'
};
var railStyle = {
  position: 'absolute',
  width: '100%',
  height: 10,
  marginTop: 35,
  borderRadius: 5,
  backgroundColor: '#8B9CB6'
};

var S = function S() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_1__["Slider"], {
    rootStyle: sliderStyle,
    domain: [0, 100],
    values: [10],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    style: railStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (S);

/***/ })

})
//# sourceMappingURL=slider.js.16385073cf769b4f065b.hot-update.js.map