webpackHotUpdate("static/development/pages/slider.js",{

/***/ "./pages/slider.js":
/*!*************************!*\
  !*** ./pages/slider.js ***!
  \*************************/
/*! exports provided: Handle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return Handle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_compound_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-compound-slider */ "./node_modules/react-compound-slider/es/index.js");

var _jsxFileName = "/var/www/html/implementation/pages/slider.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function Handle(_ref) {
  var _ref$handle = _ref.handle,
      id = _ref$handle.id,
      value = _ref$handle.value,
      percent = _ref$handle.percent,
      getHandleProps = _ref.getHandleProps;
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: {
      left: "".concat(percent, "%"),
      position: 'absolute',
      marginLeft: -15,
      marginTop: 25,
      zIndex: 2,
      width: 30,
      height: 30,
      border: 0,
      textAlign: 'center',
      cursor: 'pointer',
      borderRadius: '50%',
      backgroundColor: '#2C4870',
      color: '#333'
    }
  }, getHandleProps(id), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), __jsx("div", {
    style: {
      fontFamily: 'Roboto',
      fontSize: 11,
      marginTop: -35
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, value));
}
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
      lineNumber: 51
    },
    __self: this
  }, __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    rootStyle: sliderStyle,
    domain: [0, 100],
    step: 1,
    mode: 2,
    values: [30],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, __jsx("div", {
    style: railStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_2__["Handles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, function (_ref2) {
    var handles = _ref2.handles,
        getHandleProps = _ref2.getHandleProps;
    return __jsx("div", {
      className: "slider-handles",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, handles.map(function (handle) {
      return __jsx(Handle, {
        key: handle.id,
        handle: handle,
        getHandleProps: getHandleProps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      });
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (S);

/***/ })

})
//# sourceMappingURL=slider.js.e0b1006d952901f94cff.hot-update.js.map