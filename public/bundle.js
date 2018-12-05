/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var body_data = [{
  name: "Sun",
  type: "Star",
  distance: 0,
  radius: 695700,
  mass: 1989000
}, {
  name: "Mercury",
  type: "Planet",
  distance: 57.9,
  radius: 2440,
  mass: 0.333
}, {
  name: "Venus",
  type: "Planet",
  distance: 108.2,
  radius: 6052,
  mass: 4.87
}, {
  name: "Earth",
  type: "Planet",
  distance: 149.6,
  radius: 6378,
  mass: 5.97
}, {
  name: "Mars",
  type: "Planet",
  distance: 227.9,
  radius: 3397,
  mass: 0.642
}, {
  name: "Jupiter",
  type: "Planet",
  distance: 778.3,
  radius: 71492,
  mass: 1898
}, {
  name: "Saturn",
  type: "Planet",
  distance: 1427,
  radius: 60268,
  mass: 568
}, {
  name: "Uranus",
  type: "Planet",
  distance: 2871,
  radius: 25559,
  mass: 86.8
}, {
  name: "Neptune",
  type: "Planet",
  distance: 4497.1,
  radius: 24766,
  mass: 102
}];

exports.default = body_data;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Distances = __webpack_require__(4);

var _Distances2 = _interopRequireDefault(_Distances);

var _Masses = __webpack_require__(5);

var _Masses2 = _interopRequireDefault(_Masses);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = { scale: 1 };
    return _this;
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { style: { width: '80%', marginLeft: 'auto', marginRight: 'auto' } },
        _react2.default.createElement(
          "h1",
          { style: { marginBottom: '20px' } },
          "Scale the solar system!"
        ),
        _react2.default.createElement(
          "div",
          { style: { marginBottom: '20px' } },
          _react2.default.createElement(
            "p",
            null,
            "In order to understand the size of the solar system, one has to scale the astronomical units to familiar ones."
          )
        ),
        _react2.default.createElement(_Distances2.default, null),
        _react2.default.createElement(_Masses2.default, null)
      );
    }
  }]);

  return App;
}(_react2.default.Component);

exports.default = App;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _body_data = __webpack_require__(1);

var _body_data2 = _interopRequireDefault(_body_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Distances = function (_React$Component) {
  _inherits(Distances, _React$Component);

  function Distances(props) {
    _classCallCheck(this, Distances);

    var _this = _possibleConstructorReturn(this, (Distances.__proto__ || Object.getPrototypeOf(Distances)).call(this, props));

    _this.state = { scale: 1 };
    _this.calculateScale = _this.calculateScale.bind(_this);
    return _this;
  }

  _createClass(Distances, [{
    key: "calculateScale",
    value: function calculateScale() {
      var chosenPlanet = document.getElementById("chosen-planet").value;
      var targetSize = document.getElementById("target-size").value;
      var nTs = Number(targetSize);
      var isNumber = typeof nTs === "number";
      if (!isNumber) {
        alert('Input must be a number, not: ' + (typeof nTs === "undefined" ? "undefined" : _typeof(nTs)));
      } else {
        var body = _body_data2.default.filter(function (e) {
          return e.name == chosenPlanet;
        })[0];
        var newScale = nTs / body.distance;
        this.setState({
          scale: newScale
        });
      }
    }
  }, {
    key: "applyScaling",
    value: function applyScaling(size) {
      return (this.state.scale * size).toFixed(2);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          "h4",
          { style: { marginBottom: '20px' } },
          "Distances"
        ),
        _react2.default.createElement(
          "div",
          { style: { marginBottom: '20px' } },
          "Scale the distance from the sun to",
          _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              "select",
              { className: "target-setter", defaultValue: "Earth", id: "chosen-planet", onChange: this.calculateScale },
              _body_data2.default.filter(function (b) {
                return b.type == "Planet";
              }).map(function (r) {
                return _react2.default.createElement(
                  "option",
                  { value: r.name, key: r.name },
                  r.name
                );
              })
            )
          ),
          "to ",
          _react2.default.createElement("input", { className: "target-setter", id: "target-size", type: "text", defaultValue: "149.6", onChange: this.calculateScale }),
          " meters."
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "div",
            null,
            _react2.default.createElement(
              "table",
              null,
              _react2.default.createElement(
                "tbody",
                null,
                _react2.default.createElement(
                  "tr",
                  null,
                  _react2.default.createElement(
                    "th",
                    null,
                    "Planet"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Distance to Sun (10^6 km)"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Radius (km)"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Scaled Distance (m)"
                  ),
                  _react2.default.createElement(
                    "th",
                    null,
                    "Scaled Radius (mm)"
                  )
                ),
                _body_data2.default.map(function (r) {
                  return _react2.default.createElement(
                    "tr",
                    { key: r.name },
                    _react2.default.createElement(
                      "td",
                      null,
                      r.name
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      r.distance
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      r.radius
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _this2.applyScaling(r.distance)
                    ),
                    _react2.default.createElement(
                      "td",
                      null,
                      _this2.applyScaling(r.radius / 1000)
                    )
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Distances;
}(_react2.default.Component);

exports.default = Distances;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _planet_indices = __webpack_require__(7);

var _planet_indices2 = _interopRequireDefault(_planet_indices);

var _body_data = __webpack_require__(1);

var _body_data2 = _interopRequireDefault(_body_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Masses = function (_React$Component) {
  _inherits(Masses, _React$Component);

  function Masses(props) {
    _classCallCheck(this, Masses);

    var _this = _possibleConstructorReturn(this, (Masses.__proto__ || Object.getPrototypeOf(Masses)).call(this, props));

    _this.state = { scale: 1 };
    _this.calculateScale = _this.calculateScale.bind(_this);
    return _this;
  }

  _createClass(Masses, [{
    key: "calculateScale",
    value: function calculateScale() {
      var chosenPlanet = document.getElementById("mass-chosen-planet").value;
      var targetMass = document.getElementById("target-mass").value;
      var nTs = Number(targetMass);
      var isNumber = typeof nTs === "number";
      if (!isNumber) {
        alert('Input must be a number, not: ' + (typeof nTs === "undefined" ? "undefined" : _typeof(nTs)));
      } else {
        var body = _body_data2.default.filter(function (b) {
          return b.name == chosenPlanet;
        })[0];
        var newScale = nTs / body.mass;
        this.setState({
          scale: newScale
        });
      }
    }
  }, {
    key: "applyScaling",
    value: function applyScaling(size) {
      return (this.state.scale * size).toFixed(2);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        "div",
        { style: { marginTop: '20px' } },
        _react2.default.createElement(
          "h4",
          { style: { marginBottom: '20px' } },
          "Masses"
        ),
        _react2.default.createElement(
          "div",
          { style: { marginBottom: '20px' } },
          "Scale the mass of",
          _react2.default.createElement(
            "span",
            null,
            _react2.default.createElement(
              "select",
              { className: "target-setter", defaultValue: "Earth", id: "mass-chosen-planet", onChange: this.calculateScale },
              _body_data2.default.map(function (r) {
                return _react2.default.createElement(
                  "option",
                  { value: r.name, key: r.name },
                  r.name
                );
              })
            )
          ),
          "to ",
          _react2.default.createElement("input", { className: "target-setter", id: "target-mass", type: "text", defaultValue: "5.97", onChange: this.calculateScale }),
          " kilograms."
        ),
        _react2.default.createElement(
          "div",
          null,
          _react2.default.createElement(
            "table",
            null,
            _react2.default.createElement(
              "tbody",
              null,
              _react2.default.createElement(
                "tr",
                null,
                _react2.default.createElement(
                  "th",
                  null,
                  "Planet"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Mass (10^24 kg)"
                ),
                _react2.default.createElement(
                  "th",
                  null,
                  "Scaled (kg)"
                )
              ),
              _body_data2.default.map(function (r) {
                return _react2.default.createElement(
                  "tr",
                  { key: r.name },
                  _react2.default.createElement(
                    "td",
                    null,
                    r.name
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    r.mass
                  ),
                  _react2.default.createElement(
                    "td",
                    null,
                    _this2.applyScaling(r.mass)
                  )
                );
              })
            )
          )
        )
      );
    }
  }]);

  return Masses;
}(_react2.default.Component);

exports.default = Masses;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reactDom = __webpack_require__(3);

var _App = __webpack_require__(2);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById('app');
(0, _reactDom.render)(React.createElement(_App2.default, null), app);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var indices = {
  "Mercury": 1,
  "Venus": 2,
  "Earth": 3,
  "Mars": 4,
  "Jupiter": 5,
  "Saturn": 6,
  "Uranus": 7,
  "Neptune": 8
};

exports.default = indices;

/***/ })
/******/ ]);