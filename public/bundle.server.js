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
/******/ 	return __webpack_require__(__webpack_require__.s = 28);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(3);

var _ChooseLanguage = __webpack_require__(27);

var _ChooseLanguage2 = _interopRequireDefault(_ChooseLanguage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
  ChooseLanguage: _ChooseLanguage2.default
});

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/reducers/index.js');
}();

;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

var _AppContainer = __webpack_require__(12);

var _AppContainer2 = _interopRequireDefault(_AppContainer);

var _HomePage = __webpack_require__(18);

var _HomePage2 = _interopRequireDefault(_HomePage);

var _SongPage = __webpack_require__(13);

var _SongPage2 = _interopRequireDefault(_SongPage);

var _ColorNumber = __webpack_require__(17);

var _ColorNumber2 = _interopRequireDefault(_ColorNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createElement(
  _reactRouter.Route,
  { path: '/', component: _AppContainer2.default },
  _react2.default.createElement(_reactRouter.IndexRoute, { component: _HomePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/home', component: _HomePage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/song', component: _SongPage2.default }),
  _react2.default.createElement(_reactRouter.Route, { path: '/colornumber', component: _ColorNumber2.default })
);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/routes/index.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var path = __webpack_require__(39);
var webpack = __webpack_require__(4);
var ExtractTextPlugin = __webpack_require__(38);

module.exports = {
  entry: ['react-hot-loader/patch', //HRM
  'webpack-hot-middleware/client', //HMR
  './index.js'],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.client.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
      exclude: /(node_modules|bower_components)/
    }, {
      test: /\.(scss|sass)$/,
      use: [{
        loader: "style-loader" // creates style nodes from JS strings
      }, {
        loader: "css-loader?minimize" // translates CSS into CommonJS
      }, {
        loader: "sass-loader?includePaths[]=./node_modules" // compiles Sass to CSS
      }]
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      use: ['url-loader?limit=10000', 'img-loader']
    }]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [new webpack.optimize.OccurrenceOrderPlugin(), //HMR
  new webpack.HotModuleReplacementPlugin(), //HMR
  new webpack.NoEmitOnErrorsPlugin()]
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }
}();

;
/* WEBPACK VAR INJECTION */}.call(exports, ""))

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _Navbar = __webpack_require__(22);

var _Navbar2 = _interopRequireDefault(_Navbar);

var _Sidebar = __webpack_require__(21);

var _Sidebar2 = _interopRequireDefault(_Sidebar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContainer = function AppContainer(_ref) {
  var children = _ref.children,
      navbar = _ref.navbar,
      homeSidebar = _ref.homeSidebar;

  return _react2.default.createElement(
    'div',
    { className: 'o-container' },
    _react2.default.createElement(_Navbar2.default, { itemsNavbar: navbar }),
    _react2.default.createElement(_Sidebar2.default, { itemsSidebar: homeSidebar }),
    children
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return state.ChooseLanguage.language;
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(AppContainer);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AppContainer, 'AppContainer', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/AppContainer.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/AppContainer.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/AppContainer.jsx');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _HeaderSong = __webpack_require__(16);

var _HeaderSong2 = _interopRequireDefault(_HeaderSong);

var _DisplayLanguageSong = __webpack_require__(15);

var _DisplayLanguageSong2 = _interopRequireDefault(_DisplayLanguageSong);

var _ChooseFlag = __webpack_require__(14);

var _ChooseFlag2 = _interopRequireDefault(_ChooseFlag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SongPage = function SongPage() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_HeaderSong2.default, null),
        _react2.default.createElement(_DisplayLanguageSong2.default, null),
        _react2.default.createElement(_ChooseFlag2.default, null)
    );
};

var _default = SongPage;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(SongPage, 'SongPage', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/Song-page/SongPage.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/Song-page/SongPage.jsx');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChooseFlag = function ChooseFlag() {
    return _react2.default.createElement(
        'div',
        { id: 'wrapper-flag' },
        _react2.default.createElement(
            'ul',
            { className: 'circle-container' },
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'https://chineinfos.files.wordpress.com/2012/06/drapeau-chine.jpg' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'http://www.granadaeditions.com/wp-content/uploads/2013/10/Drapeau-allemand-rond.jpg' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'https://www.faremoana.ch/images/logos/drapeau-espagnol-detoure-copie.png' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'https://previews.123rf.com/images/dvarg/dvarg1406/dvarg140601104/29186368-Flag-of-Mexico-as-round-glossy-icon-Button-with-Mexican-flag-Stock-Vector.jpg' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'https://cdn.countryflags.com/thumbs/south-africa/flag-3d-round-250.png' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'https://ariangelo.files.wordpress.com/2010/08/italy.jpg' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'https://miniworldlyon.com/wp-content/uploads/2016/08/drapeau-anglais-rond.png' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'https://cdn.countryflags.com/thumbs/france/flag-3d-round-250.png' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'https://miniworldlyon.com/wp-content/uploads/2016/08/drapeau-anglais-rond.png' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'http://lorempixel.com/100/100/people' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'https://cdn.countryflags.com/thumbs/brazil/flag-3d-round-250.png' })
            ),
            _react2.default.createElement(
                'li',
                null,
                _react2.default.createElement('img', { src: 'http://lorempixel.com/100/100/people' })
            )
        ),
        _react2.default.createElement('img', {
            src: 'https://thumbs.dreamstime.com/z/beaucoup-d-enfants-de-diff%C3%A9rentes-appartenances-ethniques-tenant-leurs-mains-autour-du-monde-30279156.jpg',
            width: '550',
            height: '550',
            className: 'children-earth' })
    );
};

var _default = ChooseFlag;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(ChooseFlag, 'ChooseFlag', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/Song-page/choose-flag/ChooseFlag.jsx');

    __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/Song-page/choose-flag/ChooseFlag.jsx');
}();

;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayLanguageSong = function DisplayLanguageSong() {
    return _react2.default.createElement(
        "div",
        { id: "wrapper-language" },
        _react2.default.createElement("div", { className: "wrapper-image" }),
        _react2.default.createElement("div", { className: "wrapper-display-language" })
    );
};

var _default = DisplayLanguageSong;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(DisplayLanguageSong, "DisplayLanguageSong", "/Users/mavrickduchamp/Documents/pipilet_github/components/containers/Song-page/display-language/DisplayLanguageSong.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipilet_github/components/containers/Song-page/display-language/DisplayLanguageSong.jsx");
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderSong = function HeaderSong() {
    return _react2.default.createElement(
        "div",
        { id: "wrapper-header" },
        _react2.default.createElement("div", { className: "wrapper-image" }),
        _react2.default.createElement("div", { className: "wrapper-title" })
    );
};

var _default = HeaderSong;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(HeaderSong, "HeaderSong", "/Users/mavrickduchamp/Documents/pipilet_github/components/containers/Song-page/header/HeaderSong.jsx");

    __REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipilet_github/components/containers/Song-page/header/HeaderSong.jsx");
}();

;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _classnames = __webpack_require__(37);

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorNumber = function (_Component) {
  _inherits(ColorNumber, _Component);

  function ColorNumber() {
    _classCallCheck(this, ColorNumber);

    var _this = _possibleConstructorReturn(this, (ColorNumber.__proto__ || Object.getPrototypeOf(ColorNumber)).call(this));

    _this.shiftColorEnter = _this.shiftColorEnter.bind(_this);
    _this.state = {
      active: false
    };
    return _this;
  }

  _createClass(ColorNumber, [{
    key: 'shiftColorEnter',
    value: function shiftColorEnter() {
      var active = !this.state.active;
      this.setState({
        active: active
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'wrapper-colornumber' },
        _react2.default.createElement(
          'div',
          { className: (0, _classnames2.default)("wrapper-color", this.state.active ? "shift" : "not-shift") },
          _react2.default.createElement(
            'div',
            { className: 'header-color' },
            _react2.default.createElement(
              'p',
              null,
              'APRENDE LOS COLORES EN 12 LENGUAS DIFERENTES'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { onMouseEnter: this.shiftColorEnter, onMouseLeave: this.shiftColorEnter, className: 'wrapper-number' },
          _react2.default.createElement(
            'div',
            { className: 'header-number' },
            _react2.default.createElement(
              'p',
              null,
              'APRENDE LOS NUMEROS DEL 1 AL 100 EN DIFERENTES LENGUAS'
            )
          )
        )
      );
    }
  }]);

  return ColorNumber;
}(_react.Component);

var _default = ColorNumber;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ColorNumber, 'ColorNumber', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/color-number/ColorNumber.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/color-number/ColorNumber.jsx');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _HeaderTitle = __webpack_require__(20);

var _HeaderTitle2 = _interopRequireDefault(_HeaderTitle);

var _DisplayImage = __webpack_require__(19);

var _DisplayImage2 = _interopRequireDefault(_DisplayImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomePage = function HomePage(_ref) {
  var homeSidebar = _ref.homeSidebar,
      homeContent = _ref.homeContent;


  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_HeaderTitle2.default, { homeContent: homeContent }),
    _react2.default.createElement(_DisplayImage2.default, { image: homeContent.content.family, width: '600' }),
    _react2.default.createElement(_DisplayImage2.default, { image: homeContent.content.logo, width: '650' })
  );
};

var mapStateToProps = function mapStateToProps(state) {
  return state.ChooseLanguage.language;
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(HomePage);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HomePage, 'HomePage', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/home-page/HomePage.jsx');

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/home-page/HomePage.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/home-page/HomePage.jsx');
}();

;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayImage = function DisplayImage(_ref) {
  var image = _ref.image,
      width = _ref.width;


  var style = {};

  return _react2.default.createElement(
    "div",
    { id: "wrapper-image" },
    _react2.default.createElement("img", { src: image, width: width })
  );
};

var _default = DisplayImage;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DisplayImage, "DisplayImage", "/Users/mavrickduchamp/Documents/pipilet_github/components/containers/home-page/display-image/DisplayImage.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipilet_github/components/containers/home-page/display-image/DisplayImage.jsx");
}();

;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderTitle = function HeaderTitle(_ref) {
  var homeContent = _ref.homeContent;

  return _react2.default.createElement(
    "div",
    { id: "wrapper-headertitle" },
    _react2.default.createElement(
      "div",
      { className: "wrapper-tree-bird" },
      _react2.default.createElement("img", { src: homeContent.header.owls, alt: "", width: "400" })
    ),
    _react2.default.createElement(
      "div",
      { className: "wrapper-title" },
      _react2.default.createElement("img", { src: homeContent.header.pipilet, alt: "", width: "800" })
    )
  );
};

var _default = HeaderTitle;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HeaderTitle, "HeaderTitle", "/Users/mavrickduchamp/Documents/pipilet_github/components/containers/home-page/header-title/HeaderTitle.jsx");

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipilet_github/components/containers/home-page/header-title/HeaderTitle.jsx");
}();

;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
  var itemsSidebar = _ref.itemsSidebar;

  return _react2.default.createElement(
    'div',
    { id: 'wrapper-sidebar' },
    _react2.default.createElement(
      'div',
      null,
      itemsSidebar.map(function (item, index) {
        var image = item.image;
        return _react2.default.createElement(
          _reactRouter.Link,
          { key: index, to: item.url },
          _react2.default.createElement(
            'div',
            { className: 'wrapper-item' },
            _react2.default.createElement(
              'p',
              null,
              item.title
            ),
            _react2.default.createElement('img', { src: image, width: '250', height: '250' })
          )
        );
      })
    )
  );
};

var _default = Sidebar;
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Sidebar, 'Sidebar', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/home-page/sidebar/Sidebar.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/home-page/sidebar/Sidebar.jsx');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _reactRouter = __webpack_require__(2);

var _language = __webpack_require__(23);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
  var itemsNavbar = _ref.itemsNavbar,
      dispatch = _ref.dispatch;


  var changeLanguage = function changeLanguage(country) {
    dispatch({
      type: _language.CHANGE_LANGUAGE,
      country: country
    });
  };

  return _react2.default.createElement(
    'div',
    { id: 'wrapper-navbar' },
    _react2.default.createElement(
      'div',
      { className: 'language' },
      _react2.default.createElement(
        'ul',
        null,
        _react2.default.createElement(
          'li',
          { onClick: function onClick() {
              return changeLanguage("fr");
            } },
          _react2.default.createElement('img', {
            src: 'https://cdn.countryflags.com/thumbs/france/flag-3d-round-250.png', height: '20', width: '20' })
        ),
        _react2.default.createElement(
          'li',
          { onClick: function onClick() {
              return changeLanguage("eng");
            } },
          _react2.default.createElement('img', {
            src: 'https://miniworldlyon.com/wp-content/uploads/2016/08/drapeau-anglais-rond.png', height: '20', width: '20' })
        ),
        _react2.default.createElement(
          'li',
          { onClick: function onClick() {
              return changeLanguage("esp");
            } },
          _react2.default.createElement('img', {
            src: 'https://www.faremoana.ch/images/logos/drapeau-espagnol-detoure-copie.png', height: '20', width: '20' })
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'navbar' },
      _react2.default.createElement(
        'ul',
        null,
        itemsNavbar.map(function (item, key) {
          return _react2.default.createElement(
            'li',
            { key: key },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: '' + item.url },
              item.title
            )
          );
        })
      )
    )
  );
};

var _default = (0, _reactRedux.connect)()(Navbar);

exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Navbar, 'Navbar', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/navbar/Navbar.jsx');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/components/containers/navbar/Navbar.jsx');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_LANGUAGE = exports.CHANGE_LANGUAGE = "CHANGE_LANGUAGE";
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CHANGE_LANGUAGE, "CHANGE_LANGUAGE", "/Users/mavrickduchamp/Documents/pipilet_github/constants/language.js");
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HOME = exports.HOME = "home";
var PRESENTATION = exports.PRESENTATION = "presentation";
var CONTACT = exports.CONTACT = "contact";
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HOME, "HOME", "/Users/mavrickduchamp/Documents/pipilet_github/constants/navbar.js");

  __REACT_HOT_LOADER__.register(PRESENTATION, "PRESENTATION", "/Users/mavrickduchamp/Documents/pipilet_github/constants/navbar.js");

  __REACT_HOT_LOADER__.register(CONTACT, "CONTACT", "/Users/mavrickduchamp/Documents/pipilet_github/constants/navbar.js");
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SONG = exports.SONG = "song";
var COLORNUMBER = exports.COLORNUMBER = "colornumber";
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SONG, "SONG", "/Users/mavrickduchamp/Documents/pipilet_github/constants/sidebar.js");

  __REACT_HOT_LOADER__.register(COLORNUMBER, "COLORNUMBER", "/Users/mavrickduchamp/Documents/pipilet_github/constants/sidebar.js");
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _navbar = __webpack_require__(24);

var _sidebar = __webpack_require__(25);

var _pipiletSong = __webpack_require__(36);

var _pipiletSong2 = _interopRequireDefault(_pipiletSong);

var _pipiletNumberColor = __webpack_require__(35);

var _pipiletNumberColor2 = _interopRequireDefault(_pipiletNumberColor);

var _pipiletCooker = __webpack_require__(32);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _pipiletDescription = __webpack_require__(33);

var _pipiletDescription2 = _interopRequireDefault(_pipiletDescription);

var _pipiletHorizontal = __webpack_require__(34);

var _pipiletHorizontal2 = _interopRequireDefault(_pipiletHorizontal);

var _familyOwls = __webpack_require__(29);

var _familyOwls2 = _interopRequireDefault(_familyOwls);

var _family = __webpack_require__(30);

var _family2 = _interopRequireDefault(_family);

var _logoPipilet = __webpack_require__(31);

var _logoPipilet2 = _interopRequireDefault(_logoPipilet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [{
  "lan": "esp",
  "navbar": [{ "title": "Acogida", "url": _navbar.HOME }, { "title": "Presentación", "url": _navbar.PRESENTATION }, { "title": "Contacto", "url": _navbar.CONTACT }],
  "homeSidebar": [{
    "title": "¿ TE GUSTARÍA APRENDER 12 IDIOMAS CANTANDO ?",
    "image": _pipiletSong2.default,
    "alt": "pipilet-song",
    "url": _sidebar.SONG
  }, {
    "title": "¿ TE GUSTARÍA APRENDER LOS COLORES Y LOS NÚMEROS EN 12 IDIOMAS",
    "image": _pipiletNumberColor2.default,
    "alt": "pipilet-color-number",
    "url": _sidebar.COLORNUMBER
  }, {
    "title": "¿ TE GUSTARÍA APRENDER EN FAMILIA LA RESPOSTERÍA DE LOS CINCO CONTINENTES DEL MUNDO ?",
    "image": _pipiletCooker2.default,
    "alt": "pipilet-cooker",
    "url": ""
  }, {
    "title": "QUIERO SER TU AMIGO. ¿ SABES QUIÊN SOY ?",
    "image": _pipiletDescription2.default,
    "alt": "pipilet-presentation",
    "url": ""
  }],
  "homeContent": {
    "header": {
      "pipilet": _pipiletHorizontal2.default,
      "owls": _familyOwls2.default
    },
    "content": {
      "family": _family2.default,
      "logo": _logoPipilet2.default
    }
  }
}, {
  "lan": "eng",
  "navbar": [{ "title": "Home", "url": _navbar.HOME }, { "title": "Presentation", "url": _navbar.PRESENTATION }, { "title": "Contact", "url": _navbar.CONTACT }],
  "homeSidebar": [{
    "title": "Would you like to learn 12 languages?",
    "image": "https://thumbs.dreamstime.com/x/mascotte-d-escargot-47879792.jpg",
    "url": _sidebar.SONG
  }, {
    "title": "Would you like to learn colors and number in 12 languages ?",
    "image": "https://thumbs.dreamstime.com/z/escargot-mignon-de-dessin-anim%C3%A9-52412086.jpg"
  }, {
    "title": "Would you like to learn in family TE GUSTARÍA APRENDER EN FAMILIA LA RESPOSTERÍA DE LOS CINCO CONTINENTES DEL MUNDO ?",
    "image": "https://thumbs.dreamstime.com/z/cute-cartoon-snail-24559822.jpg"
  }, {
    "title": "QUIERO SER TU AMIGO. ¿ SABES QUIÊN SOY ?",
    "image": "https://img.over-blog-kiwi.com/1/84/93/77/20170313/ob_46bb02_ob-f9a8cd-90401be4.png"
  }]
}, {
  "lan": "fr",
  "navbar": [{ "title": "Accueil", "url": _navbar.HOME }, { "title": "Présentation", "url": _navbar.PRESENTATION }, { "title": "Contact", "url": _navbar.CONTACT }],
  "homeSidebar": [{
    "title": "Vous souhaitez apprendre 12 langues ?",
    "image": "https://thumbs.dreamstime.com/x/mascotte-d-escargot-47879792.jpg",
    "url": _sidebar.SONG
  }, {
    "title": "¿ TE GUSTARÍA APRENDER LOS COLORES Y LOS NÚMEROS EN 12 IDIOMAS",
    "image": "https://thumbs.dreamstime.com/z/escargot-mignon-de-dessin-anim%C3%A9-52412086.jpg"
  }, {
    "title": "¿ TE GUSTARÍA APRENDER EN FAMILIA LA RESPOSTERÍA DE LOS CINCO CONTINENTES DEL MUNDO ?",
    "image": "https://thumbs.dreamstime.com/z/cute-cartoon-snail-24559822.jpg"
  }, {
    "title": "QUIERO SER TU AMIGO. ¿ SABES QUIÊN SOY ?",
    "image": "https://img.over-blog-kiwi.com/1/84/93/77/20170313/ob_46bb02_ob-f9a8cd-90401be4.png"
  }]
}];
exports.default = _default;
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipilet_github/language.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ChooseLanguage;

var _language = __webpack_require__(26);

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = {
  "language": _language2.default[0]
};

function ChooseLanguage() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "CHANGE_LANGUAGE":
      {
        var language = {};

        _language2.default.forEach(function (item) {
          if (item.lan === action.country) language = item;
        });
        return {
          language: language
        };
      }
    default:
      {
        return state;
      }
  }
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(ChooseLanguage, "ChooseLanguage", "/Users/mavrickduchamp/Documents/pipilet_github/reducers/ChooseLanguage.js");

  __REACT_HOT_LOADER__.register(initialState, "initialState", "/Users/mavrickduchamp/Documents/pipilet_github/reducers/ChooseLanguage.js");
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _express = __webpack_require__(8);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(4);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevClient = __webpack_require__(7);

var _webpackDevClient2 = _interopRequireDefault(_webpackDevClient);

var _server = __webpack_require__(9);

var _redux = __webpack_require__(3);

var _reactRouter = __webpack_require__(2);

var _index = __webpack_require__(6);

var _index2 = _interopRequireDefault(_index);

var _reducers = __webpack_require__(5);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRedux = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compiler = (0, _webpack2.default)(_webpackDevClient2.default);
var app = (0, _express2.default)();

var store = (0, _redux.createStore)(_reducers2.default);
var style = '';

console.log('process.env.NODE_ENV ------> ', process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
  app.use(__webpack_require__(10)(compiler, {
    noInfo: true
  }));

  app.use(__webpack_require__(11)(compiler));
} else {
  style = '<link rel="stylesheet" type="text/css" href="styles.min.css">';
}

console.log('style ------> ', style);

app.use(_express2.default.static('public'));

app.get('*', function (req, res) {
  (0, _reactRouter.match)({ routes: _index2.default, location: req.url }, function (err, redirect, props) {
    if (err) {
      res.status(500).send(err.message);
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search);
    } else if (props) {
      var appHtml = (0, _server.renderToString)(_react2.default.createElement(
        _reactRedux.Provider,
        { store: store },
        _react2.default.createElement(_reactRouter.RouterContext, props)
      ));
      res.send(renderPage(appHtml));
    } else {
      res.status(404).send('Not Found');
    }
  });
});
function renderPage(appHtml) {
  return '\n    <!doctype html public="storage">\n    <html>\n      <head>\n        <meta charset=utf-8/>\n        <title>My First React Router App</title>\n        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300" rel="stylesheet">\n        ' + style + '\n      </head>\n      <body>\n        <div id=app>' + appHtml + '</div>\n        <script src="bundle.client.js"></script>\n      </body>\n    </html\n   ';
};

var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log('Production Express server running at localhost:' + PORT);
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderPage, 'renderPage', '/Users/mavrickduchamp/Documents/pipilet_github/server.js');

  __REACT_HOT_LOADER__.register(PORT, 'PORT', '/Users/mavrickduchamp/Documents/pipilet_github/server.js');

  __REACT_HOT_LOADER__.register(compiler, 'compiler', '/Users/mavrickduchamp/Documents/pipilet_github/server.js');

  __REACT_HOT_LOADER__.register(app, 'app', '/Users/mavrickduchamp/Documents/pipilet_github/server.js');

  __REACT_HOT_LOADER__.register(store, 'store', '/Users/mavrickduchamp/Documents/pipilet_github/server.js');

  __REACT_HOT_LOADER__.register(style, 'style', '/Users/mavrickduchamp/Documents/pipilet_github/server.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "da5a416d3281d45575cc6399942dd870.jpg";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "ebfb0bdfbf22b5c0653838d2e4e90f41.jpg";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f8921d4944594c74d38481a0812f45c8.jpg";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "32b424409b4e57c3c12e462c45085d3d.jpg";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "812a346811f0acedf9500ba7bcfa84d5.jpg";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "62a5162139aa0a2fcbacf269e8835dd8.jpg";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "c83d15c0c372cfa8a09fb260154e1fed.jpg";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "74ff2b48cdc35acd622dd4fc7572619f.jpg";

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("extract-text-webpack-plugin");

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })
/******/ ]);