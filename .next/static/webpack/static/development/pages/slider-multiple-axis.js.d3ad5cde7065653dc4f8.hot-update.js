webpackHotUpdate("static/development/pages/slider-multiple-axis.js",{

/***/ "./pages/slider-multiple-axis.js":
/*!***************************************!*\
  !*** ./pages/slider-multiple-axis.js ***!
  \***************************************/
/*! exports provided: Handle, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handle", function() { return Handle; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_compound_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-compound-slider */ "./node_modules/react-compound-slider/es/index.js");

var _jsxFileName = "/var/www/html/implementation/pages/slider-multiple-axis.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Tick(_ref) {
  var tick = _ref.tick,
      count = _ref.count;
  // your own tick component
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx("div", {
    style: {
      position: 'absolute',
      marginTop: 52,
      marginLeft: -0.5,
      width: 1,
      height: 8,
      backgroundColor: 'silver',
      left: "".concat(tick.percent, "%")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("div", {
    style: {
      position: 'absolute',
      marginTop: 60,
      fontSize: 10,
      textAlign: 'center',
      marginLeft: "".concat(-(100 / count) / 2, "%"),
      width: "".concat(100 / count, "%"),
      left: "".concat(tick.percent, "%")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, tick.value));
}

function Track(_ref2) {
  var source = _ref2.source,
      target = _ref2.target,
      getTrackProps = _ref2.getTrackProps;
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
      lineNumber: 36
    },
    __self: this
  }));
}

function Handle(_ref3) {
  var _ref3$handle = _ref3.handle,
      id = _ref3$handle.id,
      value = _ref3$handle.value,
      percent = _ref3$handle.percent,
      getHandleProps = _ref3.getHandleProps;
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
      lineNumber: 58
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
      lineNumber: 76
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
      lineNumber: 100
    },
    __self: this
  }, __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_2__["Slider"], {
    rootStyle: sliderStyle,
    domain: [0, 1200000],
    step: 10000,
    mode: 2,
    values: [400000, 600000],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 101
    },
    __self: this
  }, __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_2__["Rail"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: this
  }, function (_ref4) {
    var getRailProps = _ref4.getRailProps;
    return __jsx("div", Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      style: railStyle
    }, getRailProps(), {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }));
  }), __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_2__["Handles"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, function (_ref5) {
    var handles = _ref5.handles,
        getHandleProps = _ref5.getHandleProps;
    return __jsx("div", {
      className: "slider-handles",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, handles.map(function (handle) {
      return __jsx(Handle, {
        key: handle.id,
        handle: handle,
        getHandleProps: getHandleProps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      });
    }));
  }), __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_2__["Tracks"], {
    left: false,
    right: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }, function (_ref6) {
    var tracks = _ref6.tracks,
        getTrackProps = _ref6.getTrackProps;
    return __jsx("div", {
      className: "slider-tracks",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    }, tracks.map(function (_ref7) {
      var id = _ref7.id,
          source = _ref7.source,
          target = _ref7.target;
      return __jsx(Track, {
        key: id,
        source: source,
        target: target,
        getTrackProps: getTrackProps,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      });
    }));
  }), __jsx(react_compound_slider__WEBPACK_IMPORTED_MODULE_2__["Ticks"], {
    values: [0, 100000, 200000, 300000, 1200000],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, function (_ref8) {
    var ticks = _ref8.ticks;
    return __jsx("div", {
      className: "slider-ticks",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 142
      },
      __self: this
    }, ticks.map(function (tick) {
      return __jsx(Tick, {
        key: tick.id,
        tick: tick,
        count: ticks.length,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      });
    }));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (S);

/***/ })

})
//# sourceMappingURL=slider-multiple-axis.js.d3ad5cde7065653dc4f8.hot-update.js.map