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


function Track(_ref) {
  var source = _ref.source,
      target = _ref.target,
      getTrackProps = _ref.getTrackProps;
  // your own track component
  return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    style: {
      position: 'absolute',
      height: 10,
      zIndex: 1,
      marginTop: 35,
      backgroundColor: '#546C91',
      borderRadius: 5,
      cursor: 'pointer',
      left: "".concat(source.percent, "%"),
      width: "".concat(target.percent - source.percent, "%")
    }
  }, getTrackProps(), {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }));
}

function Handle(_ref2) {
  var _ref2$handle = _ref2.handle,
      id = _ref2$handle.id,
      value = _ref2$handle.value,
      percent = _ref2$handle.percent,
      getHandleProps = _ref2.getHandleProps;
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
      lineNumber: 27
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
      lineNumber: 45
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
      lineNumber: 69
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
      lineNumber: 70
    },
    __self: this
  }, __jsx("div", {
    style: railStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }), __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_2__["Handles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, function (_ref3) {
    var handles = _ref3.handles,
        getHandleProps = _ref3.getHandleProps;
    return __jsx("div", {
      className: "slider-handles",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    }, handles.map(function (handle) {
      return __jsx(Handle, {
        key: handle.id,
        handle: handle,
        getHandleProps: getHandleProps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      });
    }));
  }), __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_2__["Tracks"], {
    right: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, function (_ref4) {
    var tracks = _ref4.tracks,
        getTrackProps = _ref4.getTrackProps;
    return __jsx("div", {
      className: "slider-tracks",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, tracks.map(function (_ref5) {
      var id = _ref5.id,
          source = _ref5.source,
          target = _ref5.target;
      return __jsx(Track, {
        key: id,
        source: source,
        target: target,
        getTrackProps: getTrackProps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      });
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (S);

/***/ })

})
//# sourceMappingURL=slider.js.426f1777245a4987b907.hot-update.js.map