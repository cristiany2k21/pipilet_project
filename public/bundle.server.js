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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 173);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pipilet-cooker.jpg";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pipilet_female.jpg";

/***/ }),
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pipilet_male.jpg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_winter-is-here.jpg";

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pipiletRainbow = __webpack_require__(51);

var _pipiletRainbow2 = _interopRequireDefault(_pipiletRainbow);

__webpack_require__(320);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-footer' },
		_react2.default.createElement('img', { src: _pipiletRainbow2.default, alt: '' })
	);
};

var _default = Footer;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Footer, 'Footer', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/footer/footer.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/footer/footer.jsx');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_elephant_big_draw_number.png";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_elephant_little_draw_number.png";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _createReactClass = __webpack_require__(54);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(11);

var _invariant = __webpack_require__(19);

var _invariant2 = _interopRequireDefault(_invariant);

var _PropTypes = __webpack_require__(584);

var _ContextUtils = __webpack_require__(582);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

// TODO: De-duplicate against hasAnyProperties in createTransitionManager.
function isEmptyObject(object) {
  for (var p in object) {
    if (Object.prototype.hasOwnProperty.call(object, p)) return false;
  }return true;
}

function resolveToLocation(to, router) {
  return typeof to === 'function' ? to(router.location) : to;
}

/**
 * A <Link> is used to create an <a> element that links to a route.
 * When that route is active, the link gets the value of its
 * activeClassName prop.
 *
 * For example, assuming you have the following route:
 *
 *   <Route path="/posts/:postID" component={Post} />
 *
 * You could use the following component to link to that route:
 *
 *   <Link to={`/posts/${post.id}`} />
 */
var Link = (0, _createReactClass2.default)({
  displayName: 'Link',

  mixins: [(0, _ContextUtils.ContextSubscriber)('router')],

  contextTypes: {
    router: _PropTypes.routerShape
  },

  propTypes: {
    to: (0, _propTypes.oneOfType)([_propTypes.string, _propTypes.object, _propTypes.func]),
    activeStyle: _propTypes.object,
    activeClassName: _propTypes.string,
    onlyActiveOnIndex: _propTypes.bool.isRequired,
    onClick: _propTypes.func,
    target: _propTypes.string
  },

  getDefaultProps: function getDefaultProps() {
    return {
      onlyActiveOnIndex: false,
      style: {}
    };
  },
  handleClick: function handleClick(event) {
    if (this.props.onClick) this.props.onClick(event);

    if (event.defaultPrevented) return;

    var router = this.context.router;

    !router ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Link>s rendered outside of a router context cannot navigate.') : (0, _invariant2.default)(false) : void 0;

    if (isModifiedEvent(event) || !isLeftClickEvent(event)) return;

    // If target prop is set (e.g. to "_blank"), let browser handle link.
    /* istanbul ignore if: untestable with Karma */
    if (this.props.target) return;

    event.preventDefault();

    router.push(resolveToLocation(this.props.to, router));
  },
  render: function render() {
    var _props = this.props,
        to = _props.to,
        activeClassName = _props.activeClassName,
        activeStyle = _props.activeStyle,
        onlyActiveOnIndex = _props.onlyActiveOnIndex,
        props = _objectWithoutProperties(_props, ['to', 'activeClassName', 'activeStyle', 'onlyActiveOnIndex']);

    // Ignore if rendered outside the context of router to simplify unit testing.


    var router = this.context.router;


    if (router) {
      // If user does not specify a `to` prop, return an empty anchor tag.
      if (!to) {
        return _react2.default.createElement('a', props);
      }

      var toLocation = resolveToLocation(to, router);
      props.href = router.createHref(toLocation);

      if (activeClassName || activeStyle != null && !isEmptyObject(activeStyle)) {
        if (router.isActive(toLocation, onlyActiveOnIndex)) {
          if (activeClassName) {
            if (props.className) {
              props.className += ' ' + activeClassName;
            } else {
              props.className = activeClassName;
            }
          }

          if (activeStyle) props.style = _extends({}, props.style, activeStyle);
        }
      }
    }

    return _react2.default.createElement('a', _extends({}, props, { onClick: this.handleClick }));
  }
});

exports.default = Link;
module.exports = exports['default'];

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createConnect = createConnect;

var _connectAdvanced = __webpack_require__(573);

var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

var _shallowEqual = __webpack_require__(581);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _mapDispatchToProps = __webpack_require__(574);

var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

var _mapStateToProps = __webpack_require__(575);

var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

var _mergeProps = __webpack_require__(576);

var _mergeProps2 = _interopRequireDefault(_mergeProps);

var _selectorFactory = __webpack_require__(577);

var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + typeof arg + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

exports.default = createConnect();

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_here-we-go-round-the-mulberry-bush.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pipilet-number-color.jpg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(321);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = function _default(_ref) {
	var title = _ref.title,
	    logo = _ref.logo;

	var colors = ['red', 'pink', 'dodgerblue', 'brown', 'yellowgreen'];

	var generateColorTitle = function generateColorTitle(title) {
		return _react2.default.createElement(
			'div',
			{ className: 'wrapper-title' },
			Array.prototype.map.call(title, function (letter, index) {
				var randomNumber = Math.floor(Math.random() * 5);
				return _react2.default.createElement(
					'span',
					{ key: index,
						className: '' + colors[randomNumber] },
					letter
				);
			})
		);
	};
	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-title-logo' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-logo' },
			_react2.default.createElement('img', { src: logo })
		),
		generateColorTitle(title),
		_react2.default.createElement(
			'div',
			{ className: 'undisplayed wrapper-logo' },
			_react2.default.createElement('img', { src: logo })
		)
	);
};

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/header-page/index.jsx');
}();

;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_icon-download.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pat-a-cake.jpg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pipilet-description.jpg";

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("invariant");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fallFallBallon = __webpack_require__(47);

var _fallFallBallon2 = _interopRequireDefault(_fallFallBallon);

var _sheetFallFallBallon = __webpack_require__(384);

var _sheetFallFallBallon2 = _interopRequireDefault(_sheetFallFallBallon);

var _brasil = __webpack_require__(36);

var _brasil2 = _interopRequireDefault(_brasil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'brasil',
	'title': 'Cai, cai balão',
	'sub-title': 'Canción infantil',
	'youtubeId': 'bpvbBzmQK9E',
	'sheet': _sheetFallFallBallon2.default,
	'image': _fallFallBallon2.default,
	'flag': _brasil2.default,
	'language': '(Portugués)',
	'couplet': [['Cai, cai balão', 'Cai, cai balão', 'Aqui na minha mão'], ['Não cai não', 'Não cai não', 'Não cai não'], ['Cai na rua do sabão.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/fall-fall-ballon.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _hereWeGoRoundTheMulberryBush = __webpack_require__(13);

var _hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush);

var _sheetHereWeGoRoundTheMulberryBush = __webpack_require__(385);

var _sheetHereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_sheetHereWeGoRoundTheMulberryBush);

var _english = __webpack_require__(38);

var _english2 = _interopRequireDefault(_english);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'Here We Go Round',
	'second-title': 'the Mulberry Bush',
	'youtubeId': 'LjlwUnVXQ4U',
	'image': _hereWeGoRoundTheMulberryBush2.default,
	'sheet': _sheetHereWeGoRoundTheMulberryBush2.default,
	'flag': _english2.default,
	'language': '(English)',
	'couplet': [['Here we go round the mulberry bush*,', 'The mulberry bush, the mulberry bush;', 'Here we go round the mulberry bush', 'On a cold and frosty morning.'], ['This is the way we wash our hands**,', 'We wash our hands, we wash our hands;', 'This is the way we wash our hands', 'On a cold and frosty morning.'], ['Other verses...', 'This is the way we do our hair, etc.', 'This is the way we mend our shoes, etc.', 'This is the way we scrub our clothes, etc.', 'This is the way we dust our room, etc.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/here-we-go-round-the-mulberry-bush.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _itsRainning = __webpack_require__(48);

var _itsRainning2 = _interopRequireDefault(_itsRainning);

var _sheetItsRainning = __webpack_require__(386);

var _sheetItsRainning2 = _interopRequireDefault(_sheetItsRainning);

var _serbia = __webpack_require__(44);

var _serbia2 = _interopRequireDefault(_serbia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'serbia',
	'title': 'Kiša pada',
	'youtubeId': 'vp7zMFrHkmA',
	'image': _itsRainning2.default,
	'sheet': _sheetItsRainning2.default,
	'flag': _serbia2.default,
	'language': '(Serbio)',
	'couplet': [['Kiša pada, trava raste, gora zeleni', 'Kiša pada, trava raste, gora zeleni.'], ['U toj gori raste drvo tanko visoko', 'U toj gori raste drvo tanko visoko.'], ['Pod njim sedi moja seja, a ja pored nje', 'Pod njim sedi moja seja, a ja pored nje.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/its-rainning.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _onMondayMorning = __webpack_require__(379);

var _onMondayMorning2 = _interopRequireDefault(_onMondayMorning);

var _sheetOnMondayMorning = __webpack_require__(387);

var _sheetOnMondayMorning2 = _interopRequireDefault(_sheetOnMondayMorning);

var _french = __webpack_require__(39);

var _french2 = _interopRequireDefault(_french);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'title': 'Lundi matin',
	'sub-title': 'Chanson enfantine',
	'youtubeId': '6-EQdZnoaKQ',
	'image': _onMondayMorning2.default,
	'sheet': _sheetOnMondayMorning2.default,
	'flag': _french2.default,
	'language': '(Française)',
	'couplet': [['Lundi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince*', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons mardi.'], ['Mardi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons mercredi.'], ['Mercredi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons jeudi.'], ['Jeudi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons vendredi.'], ['Vendredi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons samedi.'], ['Samedi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons dimanche.'], ['Dimanche matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisqu\'il n\'y est plus', 'Nous ne reviendrons plus.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/on-monday-morning.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _patACake = __webpack_require__(17);

var _patACake2 = _interopRequireDefault(_patACake);

var _russia = __webpack_require__(43);

var _russia2 = _interopRequireDefault(_russia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'russia',
	'title': 'Ладушки, ладушки',
	'youtubeId': 'MWQbs6fWzvE',
	'sub-title': 'Canción para jugar a las palmas',
	'image': _patACake2.default,
	'flag': _russia2.default,
	'language': '(Ruso)',
	'couplet': [['Ладушки, ладушки', 'Где были ?', 'У бабушки!', 'Что ели ?', 'Кашку!', 'Что пили ?', 'Бражку!', 'Кашка масленька', 'Бражка сладенька', 'Бабушка добренька!']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/pat-a-cake.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _siMaMaKa = __webpack_require__(380);

var _siMaMaKa2 = _interopRequireDefault(_siMaMaKa);

var _sheetSiMaMaKa = __webpack_require__(388);

var _sheetSiMaMaKa2 = _interopRequireDefault(_sheetSiMaMaKa);

var _ghana = __webpack_require__(151);

var _ghana2 = _interopRequireDefault(_ghana);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'ghana',
	'title': 'SI MA MA KA',
	'youtubeId': 'BkCUs7SF_qY',
	'image': _siMaMaKa2.default,
	'sheet': _sheetSiMaMaKa2.default,
	'flag': _ghana2.default,
	'language': '(Ghana)',
	'couplet': [['Si si Kumbalé, le.', 'Banma, banma le, le..'], ['Si si Kumbalé, le.', 'Banma, banma le, le..'], ['Banma, banma lengue, lengue.', 'Banma, banma lengue, lengue.', 'Banma, banma lengue, lengue. (4 times)'], ['Donde, donde Kumbalé,e , kumbalé, e, le. (4 times)']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/si-ma-ma-ka.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _springHasCome = __webpack_require__(49);

var _springHasCome2 = _interopRequireDefault(_springHasCome);

var _italy = __webpack_require__(42);

var _italy2 = _interopRequireDefault(_italy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'italy',
	'title': 'Si maritau Rosa',
	'sub-title': 'Chanzone Folk (Dialetto siciliano)',
	'youtubeId': 'L3-YxT_GKXE',
	'image': _springHasCome2.default,
	'flag': _italy2.default,
	'language': '(Italiano)',
	'couplet': [['Vinni la primavera', 'li mennuli su n\'ciuri', 'Lu focu di l\'ammuri', 'lu cori m\'addumò.', 'E ammezzu suli e ciuri,', 'avvolunu l\'aceddi', 'Tutti \'sti cosi beddi', 'mi fannu suspirà.'], ['(Ritornello)', 'Si maritau Rosa', 'Saridda e Pippinedda', 'e iù, ca sugnu bedda', 'mi vogghiu marità.', 'Si maritau Rosa', 'Saridda e Pippinedda', 'Pi ia cha sognu bedda', 'maritau non cin\'è.'], ['Tanti picciotti beddi', 'passunu di sta\' strata;', 'ma nuddu \'na vardata', 'alla mé casa dà.', 'Certu \'stu desideriu', 'distruggi la mé vita', 'mi vogghiu fari zita', 'mi vogghiu marità.'], ['(Ritornello)'], ['La dota l\'àiu fatta', 'la casa l\'àiu macari', 'schetta non vogghiu stari', 'rannuzza sugnu già', 'La culpa è di mé matri', 'mi teni arritirata', 'ma ora la iurnata', 'vaiu di ccà e di ddà.'], ['(Ritornello)']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/spring-has-come.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _theCourtyardOfMyHouse = __webpack_require__(381);

var _theCourtyardOfMyHouse2 = _interopRequireDefault(_theCourtyardOfMyHouse);

var _sheetTheCourtyardOfMyHouse = __webpack_require__(389);

var _sheetTheCourtyardOfMyHouse2 = _interopRequireDefault(_sheetTheCourtyardOfMyHouse);

var _spanish = __webpack_require__(45);

var _spanish2 = _interopRequireDefault(_spanish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'title': 'El patio de mi casa',
	'sub-title': 'Canción infantil',
	'youtubeId': '3E2uMwu5ulk',
	'image': _theCourtyardOfMyHouse2.default,
	'sheet': _sheetTheCourtyardOfMyHouse2.default,
	'flag': _spanish2.default,
	'language': '(Español)',
	'couplet': [['El patio de mi casa', 'Es particular :', 'Cuando llueve se moja', 'Como los demás.'], ['Agáchate', 'Y vuélvete a agachar', 'Que los agachaditos', 'Saben bien jugar.'], ['Hache, i, jota, ka', 'Ele, elle, eme, a,', 'Que si tú no me quieres', 'Otra niña me querrá.'], ['Chocolate amarillo', 'Corre, corre, que te pillo', 'Estirad, estirad', 'que el demoño ha de pasar']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/the-courtyard-of-my-house.js');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _theWasherman = __webpack_require__(382);

var _theWasherman2 = _interopRequireDefault(_theWasherman);

var _india = __webpack_require__(41);

var _india2 = _interopRequireDefault(_india);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'india',
	'title': 'धधबब आयय (Dhobi Aaya)',
	'youtubeId': 'J0tHbUkpSpQ',
	'image': _theWasherman2.default,
	'flag': _india2.default,
	'language': '(Hindi)',
	'couplet': [['धधबब आयय धधबब आयय,', 'ककतनन कपडन लययय ?', 'एक, दध, तबन,', 'एक, दध, तबन....'], ['धधबब आयय धधबब आयय,', 'ककतनन कपडन लययय ?', 'चयर, पयपच, छन,', 'चयर, पयपच, छन....'], ['धधबब आयय धधबब आयय,', 'ककतनन कपडन लययय ?', 'सयत, आठ, नन,', 'सयत, आठ, नन....'], ['धधबब आयय धधबब आयय,', 'ककतनन कपडन लययय ?', 'दस, दस, दस,', 'भयई , दस , दस , दस....']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/the-washerman.js');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _ticTicTic = __webpack_require__(383);

var _ticTicTic2 = _interopRequireDefault(_ticTicTic);

var _sheetTicTicTic = __webpack_require__(390);

var _sheetTicTicTic2 = _interopRequireDefault(_sheetTicTicTic);

var _lebanon = __webpack_require__(152);

var _lebanon2 = _interopRequireDefault(_lebanon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'arab',
	'title': 'تك تك تك يا ام سليمان',
	'youtubeId': 'VvmXQ4t_2MY',
	'image': _ticTicTic2.default,
	'sheet': _sheetTicTicTic2.default,
	'flag': _lebanon2.default,
	'language': '(Árabe)',
	'couplet': [['تك تك تك يا ام سليمان', 'تك تك تك جوزك وين كان؟', 'تك تك تك كان بلحقله', 'عم يقطف خوخ و رمان']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/tic-tic-tic.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _twoTigers = __webpack_require__(50);

var _twoTigers2 = _interopRequireDefault(_twoTigers);

var _sheetTwoTigers = __webpack_require__(391);

var _sheetTwoTigers2 = _interopRequireDefault(_sheetTwoTigers);

var _china = __webpack_require__(37);

var _china2 = _interopRequireDefault(_china);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'china',
	'title': '两只老虎',
	'youtubeId': '1Nu-hF8Zg-4',
	'image': _twoTigers2.default,
	'sheet': _sheetTwoTigers2.default,
	'flag': _china2.default,
	'language': '(Chino)',
	'couplet': [['两只老虎', '两只老虎', '跑得快', '跑得快', 'ㄧ只没有耳朵', 'ㄧ只没有尾巴', '真奇怪', '真奇怪']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/two-tigers.js');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _sheetWinterIsHere = __webpack_require__(392);

var _sheetWinterIsHere2 = _interopRequireDefault(_sheetWinterIsHere);

var _german = __webpack_require__(40);

var _german2 = _interopRequireDefault(_german);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'german',
	'title': 'A, a, a, der Winter, der ist da',
	'youtubeId': 'Faym70ZXXQE',
	'image': _winterIsHere2.default,
	'sheet': _sheetWinterIsHere2.default,
	'flag': _german2.default,
	'language': '(Deutsch)',
	'couplet': [['A, a, a, der Winter, der ist da!', 'Herbst und Sommer sind vergangen', 'Winter, der hat angefangen.', 'A, a, a, der Winter, der ist da!'], ['E, e, e, er bringt uns Eis und Schnee,', 'Malt uns gar zum Zeitvertreiben', 'Blumen an die Fensterscheiben.', 'E, e ,e, er bringt uns Eis und Schnee.'], ['I, i, i, vergiss die Armen nie!', 'Wenn du liegst in warmen Kissen,', 'Denk an die, die frieren müssen!', 'I, i, i, vergiss die Armen nie!'], ['O, o, o, wie sind wir Kinder froh!', 'Sehen jede Nacht im Traume', 'Uns schon unterm Weihnachtsbaume.', 'O, o, o, wie sind wir Kinder froh!'], ['U, u, u, jetzt weiß ich was ich tu!', 'Hol den Schlitten aus dem Keller', 'Und dann fahr ich immer schneller.', 'U, u, u, jetzt weiß ich was ich tu!']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/original/winter-is-here.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _navbar = __webpack_require__(179);

var _sidebar = __webpack_require__(180);

var _pipiletSong = __webpack_require__(52);

var _pipiletSong2 = _interopRequireDefault(_pipiletSong);

var _pipiletNumberColor = __webpack_require__(14);

var _pipiletNumberColor2 = _interopRequireDefault(_pipiletNumberColor);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _pipiletDescription = __webpack_require__(18);

var _pipiletDescription2 = _interopRequireDefault(_pipiletDescription);

var _french = __webpack_require__(39);

var _french2 = _interopRequireDefault(_french);

var _english = __webpack_require__(38);

var _english2 = _interopRequireDefault(_english);

var _india = __webpack_require__(41);

var _india2 = _interopRequireDefault(_india);

var _brasil = __webpack_require__(36);

var _brasil2 = _interopRequireDefault(_brasil);

var _italy = __webpack_require__(42);

var _italy2 = _interopRequireDefault(_italy);

var _spanish = __webpack_require__(45);

var _spanish2 = _interopRequireDefault(_spanish);

var _serbia = __webpack_require__(44);

var _serbia2 = _interopRequireDefault(_serbia);

var _german = __webpack_require__(40);

var _german2 = _interopRequireDefault(_german);

var _china = __webpack_require__(37);

var _china2 = _interopRequireDefault(_china);

var _southAfrica = __webpack_require__(153);

var _southAfrica2 = _interopRequireDefault(_southAfrica);

var _tanzania = __webpack_require__(154);

var _tanzania2 = _interopRequireDefault(_tanzania);

var _russia = __webpack_require__(43);

var _russia2 = _interopRequireDefault(_russia);

var _ghana = __webpack_require__(151);

var _ghana2 = _interopRequireDefault(_ghana);

var _lebanon = __webpack_require__(152);

var _lebanon2 = _interopRequireDefault(_lebanon);

var _tanzania3 = __webpack_require__(69);

var _tanzania4 = _interopRequireDefault(_tanzania3);

var _spanish3 = __webpack_require__(68);

var _spanish4 = _interopRequireDefault(_spanish3);

var _southAfrica3 = __webpack_require__(67);

var _southAfrica4 = _interopRequireDefault(_southAfrica3);

var _serbia3 = __webpack_require__(66);

var _serbia4 = _interopRequireDefault(_serbia3);

var _russia3 = __webpack_require__(65);

var _russia4 = _interopRequireDefault(_russia3);

var _italy3 = __webpack_require__(64);

var _italy4 = _interopRequireDefault(_italy3);

var _india3 = __webpack_require__(63);

var _india4 = _interopRequireDefault(_india3);

var _german3 = __webpack_require__(62);

var _german4 = _interopRequireDefault(_german3);

var _french3 = __webpack_require__(61);

var _french4 = _interopRequireDefault(_french3);

var _english3 = __webpack_require__(60);

var _english4 = _interopRequireDefault(_english3);

var _china3 = __webpack_require__(59);

var _china4 = _interopRequireDefault(_china3);

var _brasil3 = __webpack_require__(58);

var _brasil4 = _interopRequireDefault(_brasil3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	getNavbar: function getNavbar(navbar, sidebar) {
		return [{ title: navbar[0], subNavbar: [], url: _navbar.HOME }, { title: navbar[1], subNavbar: [], url: _navbar.PRESENTATION }, {
			title: navbar[2], subNavbar: [{ title: sidebar[0], url: _sidebar.SONG }, { title: sidebar[1], url: _sidebar.COLORNUMBER }, { title: sidebar[2], url: _sidebar.COOKER }, { title: sidebar[3], url: _sidebar.PRESENTATIONSIDEBAR }]
		}, { title: navbar[3], subNavbar: [], url: _navbar.CONTACT }, { title: navbar[4], subNavbar: [], url: _navbar.CONTACT }];
	},
	getSidebar: function getSidebar(sidebar) {
		return [{
			title: sidebar[0],
			image: _pipiletSong2.default,
			alt: 'pipilet-song',
			url: _sidebar.SONG
		}, {
			title: sidebar[1],
			image: _pipiletNumberColor2.default,
			alt: 'pipilet-color-number',
			url: _sidebar.COLORNUMBER
		}, {
			title: sidebar[2],
			image: _pipiletCooker2.default,
			alt: 'pipilet-cooker',
			url: _sidebar.COOKER
		}, {
			title: sidebar[3],
			image: _pipiletDescription2.default,
			alt: 'pipilet-presentation',
			url: _sidebar.PRESENTATIONSIDEBAR
		}];
	},
	getFlags: function getFlags() {
		return [{ name: 'french', value: _french2.default }, { name: 'english', value: _english2.default }, { name: 'india', value: _india2.default }, { name: 'brasil', value: _brasil2.default }, { name: 'italy', value: _italy2.default }, { name: 'spanish', value: _spanish2.default }, { name: 'serbia', value: _serbia2.default }, { name: 'german', value: _german2.default }, { name: 'china', value: _china2.default }, { name: 'southAfrica', value: _southAfrica2.default }, { name: 'tanzania', value: _tanzania2.default }, { name: 'russia', value: _russia2.default }];
	},
	getFlagsMusic: function getFlagsMusic() {
		return [{ name: 'french', value: _french2.default }, { name: 'english', value: _english2.default }, { name: 'india', value: _india2.default }, { name: 'brasil', value: _brasil2.default }, { name: 'italy', value: _italy2.default }, { name: 'spanish', value: _spanish2.default }, { name: 'serbia', value: _serbia2.default }, { name: 'german', value: _german2.default }, { name: 'china', value: _china2.default }, { name: 'lebanon', value: _lebanon2.default }, { name: 'ghana', value: _ghana2.default }, { name: 'russia', value: _russia2.default }];
	},
	tanzaniaColor: _tanzania4.default,
	spanishColor: _spanish4.default,
	southColor: _southAfrica4.default,
	serbiaColor: _serbia4.default,
	russiaColor: _russia4.default,
	italyColor: _italy4.default,
	indiaColor: _india4.default,
	germanColor: _german4.default,
	frenchColor: _french4.default,
	englishColor: _english4.default,
	chinaColor: _china4.default,
	brasilColor: _brasil4.default
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/information.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-text-image .wrapper-text{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:22px;line-height:1.5;padding:15px}#wrapper-text-image .red{color:red}#wrapper-text-image .green{color:green}#wrapper-text-image .orange{color:orange}#wrapper-text-image .blue{color:#1e90ff}#wrapper-text-image .purple{color:#9370db}#wrapper-text-image .brown{color:brown}#wrapper-text-image .center{text-align:center}#wrapper-text-image .wrapper-image{text-align:center;height:300px}#wrapper-text-image .wrapper-image img{max-width:100%;max-height:100%}", ""]);

// exports


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_brasil.png";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_china.png";

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_english.png";

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_french.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_german.png";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_india.png";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_italy.png";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_russia.png";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_serbia.png";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_spanish.png";

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_map.png";

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_fall-fall-ballon.jpg";

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_its-rainning.jpg";

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_spring-has-come.jpg";

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_two-tigers.jpg";

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pipilet-rainbow.jpg";

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pipilet-song.jpg";

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_universe.jpg";

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("create-react-class");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("webpack");

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(10);

var _Link2 = _interopRequireDefault(_Link);

var _headerPage = __webpack_require__(15);

var _headerPage2 = _interopRequireDefault(_headerPage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Section = function Section(_ref) {
	var path = _ref.path,
	    image = _ref.image,
	    title = _ref.title,
	    logo = _ref.logo,
	    extraClassName = _ref.extraClassName;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_headerPage2.default, { title: title, logo: logo }),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-section-color-number' },
			image.map(function (item, index) {
				return _react2.default.createElement(
					'div',
					{ key: index, className: 'wrapper-owls' },
					_react2.default.createElement(
						'div',
						{ className: 'owls-inner' },
						_react2.default.createElement('img', { src: item.image }),
						item.countryName.map(function (item, index) {
							return _react2.default.createElement(_Link2.default, { key: index, to: path + '/' + item,
								className: 'border ' + extraClassName + '_' + index + ' width_' + extraClassName });
						})
					)
				);
			})
		)
	);
};

var _default = Section;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Section, 'Section', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/section/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/section/index.jsx');
}();

;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_LANGUAGE = exports.CHANGE_LANGUAGE = 'CHANGE_LANGUAGE';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(CHANGE_LANGUAGE, 'CHANGE_LANGUAGE', '/Users/mavrickduchamp/Documents/pipiletMandala/src/constants/language.js');
}();

;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _brasil_draw = __webpack_require__(350);

var _brasil_draw2 = _interopRequireDefault(_brasil_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'brasil',
	colors: ['VERMELHO', 'AMARELO', 'BRANCO', 'AZUL', 'LARANJA', 'VERDE', 'PRETO', 'MARROM', 'ROXO', 'ROSA'],
	game: {
		subTitle: 'SOPA DE LETRAS',
		words: ['Amarelo ', 'Preto ', 'Rosa ', 'Verde ', 'Marrom ', 'Vermelho ', 'Laranja ', 'Branco '],
		grid: [['v', 'e', 'r', 'd', 'e', 'p', 'a'], ['e', 'v', 't', 'r', 'e', 'l', 'm'], ['r', 'e', 'p', 'r', 'e', 't', 'o'], ['m', 't', 't', 'o', 's', 'o', 'r'], ['e', 'z', 'x', 's', 'a', 'l', 'r'], ['l', 'a', 'r', 'a', 'n', 'j', 'a'], ['h', 'o', 'p', 'c', 'e', 'i', 'm'], ['o', 'c', 'n', 'a', 'r', 'b', 'h'], ['a', 'm', 'a', 'r', 'e', 'l', 'o']]
	},
	drawing: [_brasil_draw2.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/brasil/index.js');
}();

;

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _china_draw_ = __webpack_require__(352);

var _china_draw_2 = _interopRequireDefault(_china_draw_);

var _china_draw_3 = __webpack_require__(353);

var _china_draw_4 = _interopRequireDefault(_china_draw_3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'china',
	colors: ['红', '黄', '白', '蓝', '橙', '绿', '黑', '棕', '紫', '粉红'],
	write: ['Hong', 'Huang', 'Bai', 'Lan', 'Chen', 'Lü', 'Hei', 'Zong', 'Zi', 'Fen hong'],
	drawing: [_china_draw_2.default, _china_draw_4.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/china/index.js');
}();

;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _english_draw = __webpack_require__(354);

var _english_draw2 = _interopRequireDefault(_english_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'english',
	colors: ['RED', 'YELLOW', 'WHITE', 'BLUE', 'ORANGE', 'GREEN', 'BLACK', 'BROWN', 'PURPLE', 'PINK'],
	game: {
		subTitle: 'MIX',
		words: ['Yellow', 'Black', 'Pink', 'Green', 'Brown', 'Red', 'Orange', 'White'],
		grid: [['w', 'k', 'c', 'a', 'l', 'b', 'o'], ['h', 't', 'e', 'o', 'd', 'e', 'r'], ['i', 'm', 'e', 'i', 'k', 'z', 'a'], ['t', 'e', 'k', 'l', 'j', 'e', 'n'], ['e', 'r', 'n', 'e', 'e', 'r', 'g'], ['b', 'p', 'i', 'o', 'n', 'c', 'e'], ['r', 'e', 'p', 'a', 'm', 'd', 's'], ['o', 'n', 'w', 'o', 'r', 'b', 's'], ['y', 'e', 'l', 'l', 'o', 'w', 't']]
	},
	drawing: [_english_draw2.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/english/index.js');
}();

;

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _french_draw = __webpack_require__(355);

var _french_draw2 = _interopRequireDefault(_french_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'french',
	colors: ['ROUGE', 'JAUNE', 'BLANC', 'BLEU', 'ORANGE', 'VERT', 'NOIR', 'MARRON', 'VIOLET', 'ROSE'],
	game: {
		subTitle: 'MOTS MELANGÉS',
		words: ['Jaune', 'Noir', 'Rose', 'Vert', 'Marron', 'Rouge', 'Orange', 'Blanc'],
		grid: [['P', 'C', 'E', 'I', 'V', 'V', 'R'], ['J', 'A', 'U', 'N', 'E', 'O', 'O'], ['T', 'H', 'T', 'O', 'R', 'S', 'U'], ['M', 'G', 'P', 'I', 'T', 'H', 'G'], ['E', 'S', 'O', 'R', 'Y', 'R', 'E'], ['X', 'B', 'L', 'A', 'N', 'C', 'T'], ['Z', 'T', 'O', 'S', 'P', 'R', 'U'], ['A', 'M', 'A', 'R', 'R', 'O', 'N'], ['O', 'R', 'A', 'N', 'G', 'E', 'S']]
	},
	drawing: [_french_draw2.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/french/index.js');
}();

;

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _german_draw = __webpack_require__(356);

var _german_draw2 = _interopRequireDefault(_german_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'german',
	colors: ['ROT', 'GELB', 'WEIiß', 'BLAU', 'ORANGE', 'GRÜN', 'SCHWARZ', 'BRAUN', 'FUSCHIA', 'ROSA'],
	game: {
		subTitle: 'WORTSUCHE',
		words: ['Gelb', 'Schwar', 'Rosa', 'Grün', 'Braun', 'Rot', 'Orange', 'Weliß'],
		grid: [['s', 'a', 't', 'e', 'f', 't', 'm'], ['c', 'g', 'e', 'l', 'b', 'h', 't'], ['h', 'r', 'm', 's', 'r', 'o', 't'], ['w', 'ü', 'b', 'c', 'a', 'r', 'e'], ['a', 'n', 'l', 'm', 'u', 'a', 'n'], ['r', 'o', 's', 'a', 'n', 'n', 'a'], ['z', 'l', 'p', 'a', 't', 'g', 's'], ['m', 'a', 'r', 'i', 'a', 'e', 'g'], ['l', 'a', 'ß', 'i', 'l', 'e', 'w']]
	},
	drawing: [_german_draw2.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/german/index.js');
}();

;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _india_draw_ = __webpack_require__(358);

var _india_draw_2 = _interopRequireDefault(_india_draw_);

var _india_draw_3 = __webpack_require__(359);

var _india_draw_4 = _interopRequireDefault(_india_draw_3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'india',
	subTitle: 'Se escribe',
	colors: ['लखल', 'पपलख', 'सफवद', 'नपलख', 'नखरहगप', 'गपन', 'कखलख', 'भभरख', 'बगनपब', 'गगलखबप'],
	write: ['laal', 'peela', 'saphed', 'neela', 'naarangee', 'green', 'kaala', 'bhoora', 'bainganee', 'gulaabee'],
	drawing: [_india_draw_2.default, _india_draw_4.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/india/index.js');
}();

;

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _italy_draw = __webpack_require__(360);

var _italy_draw2 = _interopRequireDefault(_italy_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'italy',
	colors: ['ROSSO', 'GIALLO', 'BIANCO', 'AZZURRO', 'ARANCIONE', 'VERDE', 'NERO', 'MARRONE', 'VIOLA', 'ROSA'],
	game: {
		subTitle: 'ZUPPA DI PAROLE',
		words: ['Giallo', 'Nero', 'Rosa', 'Verde', 'Marrone', 'Rosso', 'Arancione', 'Bianco'],
		grid: [['p', 'a', 'c', 'n', 'a', 'i', 'b'], ['i', 'r', 'o', 's', 'a', 'n', 'l'], ['e', 'a', 'r', 'l', 't', 'g', 'r'], ['n', 'n', 'e', 'p', 'j', 'i', 't'], ['o', 'c', 'n', 'i', 's', 'a', 'e'], ['r', 'i', 't', 'u', 's', 'l', 'd'], ['r', 'o', 's', 's', 'o', 'l', 'r'], ['a', 'n', 'f', 'a', 'v', 'o', 'e'], ['m', 'e', 'm', 'o', 'x', 'w', 'v']]
	},
	drawing: [_italy_draw2.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/italy/index.js');
}();

;

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _russia_draw_ = __webpack_require__(365);

var _russia_draw_2 = _interopRequireDefault(_russia_draw_);

var _russia_draw_3 = __webpack_require__(366);

var _russia_draw_4 = _interopRequireDefault(_russia_draw_3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'russia',
	subTitle: 'Se escribe',
	colors: ['красный', 'желтый', 'белый', 'синий', 'оранжевый', 'зеленый', 'черный', 'коричневый', 'фиолетовый', 'мальваva]'],
	write: ['krasnyy', 'zheltyy', 'belyy', 'siniy', 'oranzhevyy', 'zelenyy', 'chernyy', 'korichnevyy', 'fioletovyy', 'mal'],
	drawing: [_russia_draw_2.default, _russia_draw_4.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/russia/index.js');
}();

;

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _serb_draw_ = __webpack_require__(367);

var _serb_draw_2 = _interopRequireDefault(_serb_draw_);

var _serb_draw_3 = __webpack_require__(368);

var _serb_draw_4 = _interopRequireDefault(_serb_draw_3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'serbia',
	subTitle: 'Se escribe',
	colors: ['Црвена', 'Жута', 'Бела', 'Плава', 'Наранђаста', 'Зелена', 'Црна', 'Браон', 'Љубичаста', 'Розе'],
	write: ['Tsrvena', 'Juta como la « je » francesa.', 'Bela', 'Plava', 'Narandjasta', 'Zelena', 'Crna', 'Braon', 'Ljubitchasta', 'Roze'],
	drawing: [_serb_draw_2.default, _serb_draw_4.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/serbia/index.js');
}();

;

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _arab_draw_ = __webpack_require__(346);

var _arab_draw_2 = _interopRequireDefault(_arab_draw_);

var _arab_draw_3 = __webpack_require__(347);

var _arab_draw_4 = _interopRequireDefault(_arab_draw_3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'arab',
	colors: ['أحمر', 'أصفر', 'أبىض', 'أزرق', 'البرتقالي', 'أخضر', 'أسود', 'البني', 'بنفسجي', 'وردي'],
	write: ['ahmar', 'asfar', 'ibyad', 'azrak', 'Al bourtoukali', 'Akhdar (k+h= Jotta Spanish)', 'Aswad', 'Bouni', 'Banafsaji', 'wardi'],
	drawing: [_arab_draw_2.default, _arab_draw_4.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/south-africa/index.js');
}();

;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _spanish_draw = __webpack_require__(369);

var _spanish_draw2 = _interopRequireDefault(_spanish_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	id: 'spanish',
	colors: ['ROJO', 'AMARILLO', 'BLANCO', 'AZUL', 'NARANJA', 'VERDE', 'NEGRO', 'MARRÓN', 'VIOLETA', 'ROSA'],
	game: {
		subTitle: 'SOPA DE LETRAS',
		words: ['Amarillo', 'Negro', 'Rosa', 'Verde', 'Marrón', 'Rojo', 'Naranja', 'Blanco'],
		grid: [['n', 'a', 'r', 'a', 'n', 'j', 'a'], ['b', 'n', 'o', 'r', 'r', 'a', 'm'], ['t', 'l', 's', 't', 'x', 'z', 'a'], ['v', 'a', 'a', 'y', 'ñ', 's', 'r'], ['e', 'k', 't', 'n', 'q', 'r', 'i'], ['r', 'm', 'o', 'e', 'c', 'h', 'l'], ['d', 'a', 'l', 'g', 'r', 'o', 'l'], ['e', 'v', 'e', 'r', 'd', 'e', 'o'], ['p', 'o', 'j', 'o', 'r', 's', 'a']]
	},
	drawing: [_spanish_draw2.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/spanish/index.js');
}();

;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tanzanie_draw = __webpack_require__(370);

var _tanzanie_draw2 = _interopRequireDefault(_tanzanie_draw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'tanzania',
	'colors': ['Buluu', 'Njano', 'Eupe', 'Bluu', 'Machungwa', 'Kiyani', 'Eusi', 'Hadharan/Hanja', 'Violet', 'Waridi'],
	'game': {
		'subTitle': 'SOPA DE LETRAS',
		'words': ['Njano', 'Eusi', 'Waridi', 'Kiyani', 'Hadharan', 'Buluu', 'Machungwa', 'Eupe'],
		'grid': [['I', 'N', 'A', 'Y', 'I', 'K', 'A'], ['T', 'G', 'M', 'E', 'T', 'H', 'W'], ['U', 'K', 'B', 'O', 'T', 'A', 'G'], ['X', 'M', 'U', 'E', 'W', 'D', 'N'], ['I', 'O', 'L', 'I', 'A', 'H', 'U'], ['S', 'E', 'U', 'A', 'R', 'A', 'H'], ['U', 'A', 'U', 'Z', 'I', 'R', 'C'], ['E', 'U', 'P', 'R', 'D', 'A', 'A'], ['O', 'N', 'A', 'J', 'I', 'N', 'M']]
	},
	'drawing': [_tanzanie_draw2.default]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/tanzania/index.js');
}();

;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _algerie = __webpack_require__(104);

var _algerie2 = _interopRequireDefault(_algerie);

var _algerie3 = __webpack_require__(105);

var _algerie4 = _interopRequireDefault(_algerie3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTES ALGERIENNES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Dattes farcies à la pâte d’amande',
		image: _algerie2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['40 Dattes dénoyautées', '150 g d’amande en poudre', '150 g de sucre glace', '1 grande cuillère de margarine à température ambiante', 'Quelques gouttes d’eau de fleur d’oranger', '1 blanc d’oeuf', '50 g de sucre semoule', 'colorant alimentaire (optionel)']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Dans un récipient, mélanger la poudre d’amande et le sucre glace', 'Ajouter la margarine, le blanc d’oeuf et les quelques gouttes d’eau de fleur d’oranger. Mélanger à la main jusqu’à obtention d’une pâte d’amande homogène (beaucoup de personnes ajoutent du colorant alimentaire afin d’obtenir des dattes de toutes les couleurs)', 'Prélever un peu de pête d’amande et lui donner une forme de petite quenelle.', 'Ouvrir la datte et y introduire la quenelle de pâte d’amande.', 'Quand toutes les dattes sont fourrées prendre un couteau pointu et tracer quelques stries sur la partie visible de la pâte d’amande.', 'Une fois ceci fait, saupoudrez de sucre semoule pour décorer.']
		}]
	}, {
		title: 'Gâteau de biscuits et chocolat',
		image: _algerie4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Un paquet de biscuits secs .', '100 g de chocolat noir.', '300 g de beurre.', '150 g de sucre.', '2 oeufs.', '50 g de cacao en poudre']
		}],
		sectionPreparation: [{
			title: 'Recette:',
			preparation: ['Prendre un moule de service en verre.', 'Dans un bol qui passe au micro ondes, faire fondre le beurre et le chocolat juqu’à obtenir un mélange lisse. Ajouter les oeufs, le sucre et le cacao en poudre. Bien mélanger.', 'Verser un peu de la préparation au chocolat au fond du moule et recouvrir d’une couche de biscuits. Recommencer jusqu’à utilisation de tous les biscuits et terminer avec du chocolat.', 'Placer au réfrigérateur jusqu’à complet refroidissement et servir.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/africa/algerie.js');
}();

;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _benin = __webpack_require__(106);

var _benin2 = _interopRequireDefault(_benin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTE DU BENIN',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'BANANNES DOUCES À LA SAUCE ORANGE',
		image: _benin2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['4 bananes pas très mures.', '1⁄2 tasse de jus d’orange fraichement pressé.', '1 cuillérée de jus de citron fraichement pressé.', '1⁄2 tasse de sucre roux.', 'Glace à la vanille.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Chauffer le jus d’orange, le jus de citron et le sucre roux dans une casserole pendant 15 minutes. Le jus doit réduire, le mettre ensuite dans un plat.', 'Peler les bananes en les coupant par la moitié et les cuisiner dans le plat avec le jus, jusqu’à ce qu’elles soient chaudes.', 'Servir immédiatement sur de la glace à la vanille.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/africa/benin.js');
}();

;

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES EGYPTIENNES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'GUZEYA',

		// image: image,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Verre de noix de coco râpée.', '1 verre de sucre..', '2 blancs d’œufs.', 'Essence de vanille', 'Beurre en quantité nécessaire.', 'Huile en quantité nécessaire.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Monter les blancs en neige.', 'Dans un récipient à part, mélanger la noix de coco, le sucre et la vanille.', 'Ajouter les blancs en tournant pour ne pas les casser.', 'Graisser le moule avec de l’huile ou du beurre, mettre la pâte sur toute la surface, et le mettre dans le four à une température moyenne.', 'Quand la surface commence à griller, enlever du four et mettre la Guzeya sur une assiette Servir froid']
		}]
	}, {
		title: 'RIZ AU LAIT ET FRUITS SECS',

		// image: image,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['2 verres de riz.', '1 verre de sucre', '1 verre de lait', '1 grande cuillérée d’huile', 'Fruits secs écrasés']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Ajouter au riz le lait, le sucre et l’huile dans une casserole à feu constant.', 'Rincer le riz 2 ou 3 fois', 'Baisser la température jusque cela forme une masse', 'Graisser le moule avec de l’huile, mettre les fruits secs dans le moule, mettre la pâte, et la répartir à la main sur toute la surface', 'Graisser la surface avec de l’huile, répartir des fruits secs et mettre dans le four jusqu’à ce qu’elle grille', 'Servir froid']
		}]
	}]
};

// import image from '../../../../images/cook/recipe/africa/';

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/africa/egypt.js');
}();

;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _kenya = __webpack_require__(107);

var _kenya2 = _interopRequireDefault(_kenya);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTE DU KENYA',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'MANGUE GLACÉE',
		image: _kenya2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['2 tasses de mangues.', '1 brique moyenne de crème fraîche.', 'Sucre.', 'Citron.', 'Lait condensé.', 'Sel.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Écraser les mangues en purée.', 'Mélanger au batteur la crème fraîche et une demi tasse de sucre, jusqu’à ce que le mélange soit bien épais.', 'Ajouter à la purée de mangue 2 cuillerées fine de jus de citron, 1⁄2 tasse de lait condensée et une demie-cuillérée de sel.', 'Mélanger la crème et la purée de mangue, et mettre au congélateur.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/africa/kenya.js');
}();

;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _malagasy = __webpack_require__(108);

var _malagasy2 = _interopRequireDefault(_malagasy);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTE DE MADAGASCAR',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'TORTA MAGALASY DE MADAGASCAR',
		image: _malagasy2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['2 tasses de lait.', '1 gousse de vanille.', '4 cuillérées de sucre.', '1 pincée de noix de muscade.', '1 pincée de clou de girofle.', '5 cuillérées de tapioca.', '2 cuillérées de crème patissière.', '4 bananes bien mures.', '30g de beurre.', '4 œufs']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mélanger dans une casserole, le lait, la vanille, le sucre , la noix de muscade et le clou de girofle, porter juste avant ébullition.', 'Retirer du feu, ajouter le tapioca au mélange et remettre le feu doux, laisser cuire 10 minutes et tourner de temps en temps.', 'Pendant que le tapioca cuit, préchauffer le four à 180°C.', 'Retirer le tapioca du feu, retirer la gousse de vanille et ajouter la crème pâtissière.', 'Faire une purée avec les bananes et les ajouter au tapioca.', 'Beurrer un moule.', 'Incorporer les œufs, un à un au mélange et mélanger avec une spatule.', 'Cuire pendant 20 minutes au four.', 'Servir chaud ou tiède dans une assiette à dessert']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/africa/malagasy.js');
}();

;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _maroc = __webpack_require__(109);

var _maroc2 = _interopRequireDefault(_maroc);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTE MAROCAINE',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Biscuit au citron',
		image: _maroc2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['200 g farine.', '150 g sucre.', '100 ml huile.', '4 oeufs.', 'zeste d’un citron.', '2 cuillères à soupe de jus de citron.']
		}, {
			title: 'Pour la décoration:',
			ingredient: ['Vermicelles au chocolat', '1 yaourt au citron bien crémeux']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Dans un grand saladier, mélanger les oeufs et le sucre jusqu’à complète homogénéité du mélange. Ensuite ajouter l’huile le zeste de citron et les 2 cuillères à soupe de jus de citron. Bien mélanger à nouveau.', 'Dans un autre saladier, mélanger la farine et la levure chimique, mélanger ensuite l’ensemble avec la préparation initiale aux oeufs.', 'Ceci réalisé, placer la préparation dans un moule fariné et enfourner à 180 degré d’abord avec la chaleur en bas et quand le bas est cuit chaleur en haut pour terminer la cuisson (au total environ une demi heure).', 'La cuisson terminée sortir du four et vérifier la cuisson en enfonçant un couteau pointu au centre. La cuisson est terminée si le couteau ressort sec et propre. Il faut alors laisser le gâteau refroidir.', 'Une fois à température, démouler et placer le gâteau sur un plat. Il n’y a plus qu’à déguster']
		}]
	}, {
		title: 'Gâteau au flan et chocolat',
		image: _maroc2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Un paquet et demi de biscuits au beurre (style petits Lu)', 'Un peu de lait (pour mouiller les biscuits)', '1 litre de lait (pour le flan)', '2 sachets de flan instantané', '4-5 cuillères à soupe de sucre pour le flan', '200 grammes de chocolate noir', '1 cuillère à soupe de beurre', '20 cl de crème liquide', 'Copeaux de noix de coco pour la décoration']
		}],
		sectionPreparation: [{
			title: 'Recette:',
			preparation: ['Dans un moule carré ou rectangulaire, commencer par faire la base du gâteau: mouiller les biscuits avec le lait et les placer au fond du moule sur 2 couches.', 'Préparer le flan comme indiqué sur les sachets de flan instantanés. Globalement placer un peu moins d’un litre de lait dans une casserole et faire chauffer à feu doux avec le sucre. Remuez de temps en temps. Dissoudre la poudre de flan avec le peu de lait réservé. Lorsque le lait commence à bouillir, verser la préparation au flan dissout. Bien remuer jusqu’à ce que l’ensemble recommence à bouillir.', 'Laisser refroidir un peu et verser le mélange sur la base du gâteau.', 'Préparation du glaçage au chocolat. Faire chauffer la crème liquide et lorsqu’elle commence à bouillir, couper le feu et incorporer le chocolat coupé en copeaux. Remuer. Une fois dissout, ajouter le beurre pour que le glaçage soit brillant.', 'Le flan ayant pris dans le moule, verser le glaçage au chocolat sur celui ci et laisser refroidir au réfrigérateur. Sortir 20mn avant de consommer.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/africa/maroc.js');
}();

;

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _tunisie = __webpack_require__(110);

var _tunisie2 = _interopRequireDefault(_tunisie);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTE DE TUNISIE',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'GHRIYBA',
		image: _tunisie2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['250g d’amandes moulues.', '50g de beurre en pommade.', '100g de sucre glace.', '1 œuf à température ambiante.', 'Amandes effilées, entières pour décorer.', 'Miel.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Préchauffer le four à 190°C.', 'Mélanger les amandes, le sucre, le beurre et l’œuf jusqu’à obtenir une pate homogène.', 'Laisser reposer 30 minutes dans le frigo.', 'Faire des boules de la grosseur d’une balle de golf et les disposer en ligne sur une plaque avec dupapier végétal, pour mettre au four.', 'Aplatir un peu et mettre la décoration désirée d’amandes.', 'Mettre au four pendant 20 minutes (en fonction du four).', 'Laisser refroidir sur la plaque.', 'Mettre du miel sur les gâteaux avec un pinceau.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/africa/tunisie.js');
}();

;

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _argentine = __webpack_require__(111);

var _argentine2 = _interopRequireDefault(_argentine);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES D’ARGENTINE',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Alfajores agentins',
		image: _argentine2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['9 jaunes d’oeuf.', '150 g beurre.', '150 g sucre glace.', 'Le zeste d’un citron.', '500 g maïzena.', '1⁄2 sachet de levure chimique.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mélanger doucement les 150 g de sucre glace dans les 150 g de beurre ramolli.', 'Dans le mélange ainsi constitué, incorporer un à un les 9 jaunes d’oeuf.', 'Ajouter l’extrait de vanille et le zeste de citron.', 'Tamiser les 500g de Maïzena avec la levure chimique et incorporer le tout avec la préparation au beurre.', 'Laisser reposer 1 heure dans le réfrigérateur.', 'Une fois la pâte reposée, l’étaler sur une hauteur d’environ 5mm et découper à l’emporte pièce les biscuits', 'Disposer tous ces biscuits sur une feuille de cuisson et une plaque de four. Cuire au four de 4 à 5 minutes à une température comprise entre 170o et 180o en surveillant qu’ils ne brûlent pas : la pâte ne doit pas dorer mais les biscuits doivent être cuits à l’intérieur.', 'Les sortir du four et laisser refroidir.', 'Une fois les biscuits froids, assembler deux biscuits entre une couche de confiture de lait dans lequel on peut ajouter un peu de noix de coco en copeaux.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/america/argentine.js');
}();

;

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _canada = __webpack_require__(114);

var _canada2 = _interopRequireDefault(_canada);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTE CANADIENNE',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Trempettes',
		image: _canada2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['125 g de farine.', 'une pincée de sel', '1 oeuf et un jaune d’oeuf', '300 ml de lait', '15 ml de beurre fondu', 'Miel liquide', 'beurre.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Dans un grand saladier, verser la farine et le sel et faire un puit au centre.', 'Ajouter dans le puit ainsi fait l\'oeuf entier et le jaune d’oeuf.', 'Mélanger en tournant doucement et ajouter la moitié du lait.', 'A l’aide d’un batteur ou d’un robot, malaxer en ajoutant le beurre fondu jusqu’à obtenir un pâte crémeuse.', 'Ajouter le reste de lait et laisser reposer au moins une heure avant de faire les crêpes.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/america/canada.js');
}();

;

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _chilie = __webpack_require__(115);

var _chilie2 = _interopRequireDefault(_chilie);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTE CHILIENNE',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Cupcakes Pour Noël',
		image: _chilie2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['2-1/4 tasse de farine (315g).', '2 oeufs', '1 tasse de lait (240ml).', '1 tasse de sucre (200g).', '1 cuillère à café de vanille.', '1/2 tasse d’huile (120ml).', '2 cuillères à café de levure.', '1/2 boite de fromage frais', '2 tasses de sucre .', '1 cuillère à café de vanille.', 'lait (optionel).']
		}],
		sectionPreparation: [{
			title: 'Préparation des Cupcakes:',
			preparation: ['Comenzamos a preparar la base de esta Receta de Cupcakes para Navidad, encendiendo el horno a fuego mediano y dejando pre-calentar.', 'Mientras el horno se calienta colocamos los huevos en un recipiente adecuado y le agregamos el azúcar, batiendo la mezcla hasta que alcance un punto espumoso y su color se aclare.', 'Añadimos entonces la vainilla y continuamos batiendo por un minuto mas para incorporar bien todo.', 'Agregando de a poco la harina, de forma circular en el recipiente y vamos mezclando suavemente con la ayuda de un batidor.', 'Cuando ya la harina este totalmente incorporada reservamos la mezcla.', 'Colocamos el papel en los moldes para cupcakes o muffins y añadimos a cada uno un poco de mantequilla para engrasar su superficie.', 'Vertemos la base de los cupcakes en cada molde y llevamos al horno pre-calentado.', 'Dejamos hornear por alrededor de veinticinco minutos o hasta que al introducir un palito en el centro de los cupcakes, este salga seco y sin restos.', 'En ese momento retiramos del horno y dejamos enfriar.']
		}, {
			title: 'Préparation de la couverture:',
			preparation: ['Dans un grand bol mettre la moitié de la boîte de fromage frais (type Philadelphia) et placer au four à micro ondes. Faire fondre pendant environ 30 secondes.', 'Sortir le bol du micro ondes et ajouter l’extrait de vanille et les 2 tasses de sucre.', 'Si on souhaite faire une couverture au chocolat, il faut mélanger 50 grammes de chocolat fondu avec quelques cuillères de cacao maigre en poudre. Bien mélanger le tout jusqu’à obtenir la texture souhaitée. Si le mélange sèche, ajouter un peu de lait, chauffer légèrement quelques secondes au micro ondes et mélanger.', 'Quand la couverture est prête, ajouter les colorants de la couleur souhaitée.', 'Recouvrir les Cupcakes de Noël de la couverture et décorer comme on le souhaite.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/america/chilie.js');
}();

;

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _guyane = __webpack_require__(116);

var _guyane2 = _interopRequireDefault(_guyane);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTES DE LA GUYANE FRANÇAISE',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'MANGO FOOL',
		image: _guyane2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['3-4 mangues bien mures, pelées et coupées', 'petits cubes.', '5 cuillères à soupe de sucre.', 'Le jus d’un citron et sa peau.', '1 tasse de crème.', '1 cuillère à café d’extrait de vanille.', '1⁄4 cuillère à café de noix de muscade.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Passer au blender les mangues avec le jus du citron et 2 ou 3 cuillères de sucre.', 'Laisser reposer.', 'Avec le batteur monter la crème en y incorporant une cuillère de sucre, du zeste de citron et la vanille.', 'Une fois la crème montée, verser dans des verres en alternant les couches de purée de mangue et de crème montée. Servir très frais.', 'Déguster!']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/america/guyane.js');
}();

;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _haiti = __webpack_require__(117);

var _haiti2 = _interopRequireDefault(_haiti);

var _haiti3 = __webpack_require__(118);

var _haiti4 = _interopRequireDefault(_haiti3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES DE HAITI',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'BANANES AU JUS D’ORANGE',
		image: _haiti2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['4 bananes', '4 oranges', '2 citrons', '125 g de sucre', 'un doigt de beurre']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Beurrer le plat qui va aller au four', 'Peler les bananes et les couper en rondelles.', 'Peler deux oranges et les couper en rondelles.', 'Presser les 2 oranges restantes ainsi que les 2 citrons. Réserver le jus.', 'Placer au fond du plat une couche de rondelles de bananes puis recouvrir d’une couche de rondelles d’oranges. Saupoudrer le sucre par dessus et verser le jus orange/citron.', 'Placer l’ensemble au four à température moyenne. Laisser cuire jusqu’à ce que le dessus brunisse légèrement.']
		}]
	}, {
		title: 'BANANES FRITES HAITIENNES',
		image: _haiti4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['3 bananes bien mures', '1 cuillère à soupe de farine', '1/2 cuillère à café de cannelle en poudre', '1/2 cuillère à café d’extrait de vanille', '1 cuillère à soupe de sucre', '1/8 cuillère à café de bicarbonate de soude', 'Sucre(optionel)']
		}],
		sectionPreparation: [{
			title: 'Receta para hacer el Mousse:',
			preparation: ['Mélanger la farine, le sucre, l’extrait de vanille et la cannelle dans un récipient. enduire les rondelles de bananes de cette préparation et frire dans de l’huile très chaude jusqu’à obtenir une couleur dorée.', 'Placer sur du papier absorbant et servir en ayant saupoudré de sucre.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/america/haiti.js');
}();

;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _mexicoNutella = __webpack_require__(119);

var _mexicoNutella2 = _interopRequireDefault(_mexicoNutella);

var _mexicoOreo = __webpack_require__(120);

var _mexicoOreo2 = _interopRequireDefault(_mexicoOreo);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES MEXICAINES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Gâteau de Nutella',
		image: _mexicoNutella2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['1 1⁄2 tasse de farine.', '2 Oeufs', '1 Cuillère à soupe de sucre', '1 1⁄2 tasse de Nutella', '1 Cuillère à soupe d’extrait de vanille', '1 Tasse de lait', 'Une pincée de bicarbonate de soude.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Dans un grand saladier placer les ingrédients secs en premier puis les ingrédients humides.', 'Mélanger le tout jusqu’à obtention d’un mélange épais.', 'Beurrer le moule et verser le mélange dans celui ci.', 'Placer le tout au four à 250° pendant environ 25 minutes. Vérifier la cuisson en piquant le centre avec un couteau pointu. Si celui ci ressort mouillé c’est que le gâteau n’est pas cuit, si le couteau ressort sec, il est cuit.', 'Ajouter quelques fruits pour la décoration et le tour est joué.']
		}]
	}, {
		title: 'Recette de Glace aux Oreo',
		image: _mexicoOreo2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['12 biscuit Oreo', '40 cl de crème fraiche liquide', '1 boite de lait concentré']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Briser les biscuits Oréo en petits et gros morceaux et réserver le tout dans un bol.', 'Monter la crème en Chantilly dans un grand saladier en aluminium préalablement refroidi au réfrigérateur afin que la crème monte bien.', 'Ajouter ensuite le lait concentré et les biscuits brisés. Mélanger doucement l’ensemble. Verser la préparation dans un grand plat de service ou dans les 6 verrines. Laisser refroidir environ 3 heures dans un congélateur ou 6 heures dans un réfrigérateur.', 'Une fois le tout bien refroidi, le dessert est prêt ! Nous te conseillons de le consommer rapidement car il va fondre rapidement hors du réfrigérateur!']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/america/mexique.js');
}();

;

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _brasil = __webpack_require__(113);

var _brasil2 = _interopRequireDefault(_brasil);

var _brasil3 = __webpack_require__(112);

var _brasil4 = _interopRequireDefault(_brasil3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTES BRESILIENNES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Quindim',
		image: _brasil2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['4 oeufs entiers.', '2 jaunes d’oeuf.', '4 cuillères à soupe de sucre.', '1 boite de lait concentré.', 'Noix de coco en copeaux.', '1 boite de lait de coco.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Battre les 2 jaunes d’oeuf avec les 4 oeufs entiers et les 4 cuillères de sucre.', 'Dans le fond du moule, faire du caramel.', 'Dans un bol, laisser hydrater la noix de coco en copeaux dans le lait de coco.', 'Intégrer le lait concentré à la préparation aux oeufs, .', 'Verser le tout dans le moule.', 'Faire cuire le tout au bain marie pendant environ 40 mn et c’est prêt!']
		}]
	}, {
		title: 'Mousse de Maracuyá et Fruits de la Passion',
		image: _brasil4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['2 o 3 maracuyá et de fruits de la passion.', '1 boite de lait concentré.', '1 tasse de jus de maracuyá (frais ou congelé).', '1 boite de crème.', '6 oeufs.', '2 feuilles de gélatine.', '1 cuillère à soupe de jus de citron.']
		}],
		sectionPreparation: [{
			title: 'Recette:',
			preparation: ['Faire tremper la gélatine dans de l’eau froide et la dissoudre ensuite dans un peu d’eau chaude', 'Dans un grand bol, mélanger le jus de maracuyá, le lait concentré, le jus de citron, la crème), y la gélatine dissoute. Battre jusqu’à complète dissolution.', 'Séparer les jaunes et les blancs et battre les blancs en neige très ferme.', 'Mélanger délicatement la préparation de maracuyá aux blancs en neige. Faire attention que la mousse ne tombe pas.', 'Verser le tout dans un grand plat ou dans des verres individuels et placer le tout au réfrigérateur jusqu’à prise complète.', 'Avant de servir, vous pouvez recouvrir la mousse d’un peu de pulpe de maracuyá et un peu de céréales pour le croustillant.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/america/quindim.js');
}();

;

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _china = __webpack_require__(125);

var _china2 = _interopRequireDefault(_china);

var _china3 = __webpack_require__(126);

var _china4 = _interopRequireDefault(_china3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES CHINOISES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Glace frite.',
		image: _china2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Mie de pain (2 tranches par glace)', 'Un peu de lait dans un bol', 'Pot de crème glacée, selon le goût souhaité (chocolat, vanille, crème...)', '1,5 verre de farine', '1 verre de lait', '1 œuf']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Couper les bords du pain de mie.', 'Faire des boules de glace. Mouiller les bords du pain de mie avec un peu de lait et mettre les boules de glace sur le pain.', 'Prendre le 2ème pain de mie et couvrir la glace pour former un losange.', 'Bien le manipuler à la main pour lui donner une forme rebondie et l’envelopper dans du papier d’aluminium. Le mettre au congélateur jusqu’à ce qu’il soit dur comme une pierre (1 jour entier).', 'Le lendemain, faire la pâte panée pour frire la glace. Mettre dans un bol l’œuf, la farine et le lait. Bien battre jusqu’à ce qu’il n’y ait plus de grumeaux.', 'Faire chauffer l’huile. Mettre la glace sortie du congélateur dans le bol et bien l’imbiber avant de la faire frire. Attention à l’huile brulante. Frire jusqu’à ce que ce soit bien doré.', 'Les sortir et les mettre sur un plateau avec un sopalin pour absorber l’huile Mettre ensuite la glace sur un plateau et mettre dessus ce que vous voulez (du miel, du chocolat ou du sirop par exemple).']
		}]
	}, {
		title: 'Flan aux céréales de chocolat',
		image: _china4.default,
		sectionIngredient: [{
			title: 'Ingrédients pour 4 personnes',
			ingredient: ['1 litre leche .', '200 gr sucre roux .', '1 sachet de flan instantané.', '150g de céréales type riz soufflé.', 'canelle en poudre']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Dans une casserole, faire bouillir le lait et le sucre. À ébullition, ajouter le sachet de flan instantané et remuer pour éviter les grumeaux.', 'Dans chaque moule à flan, déposer une poignée de céréales et verser le mélange de flan', 'Laisser refroidir dans le frigo. Au moment de servir, verser dessus le caramel.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/asia/china.js');
}();

;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _india = __webpack_require__(127);

var _india2 = _interopRequireDefault(_india);

var _india3 = __webpack_require__(128);

var _india4 = _interopRequireDefault(_india3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES INDI',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Lassi de fraises et bananes',
		image: _india2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['1 yaourt nature sans sucre', '3 ou 4 fraises', '1⁄2 banane', '1,5 du pot de yaourt d’eau', '1 cuillère à café de miel', '1 cuillère à café de sucre', '1 pincée de piment']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mettre tous les ingrédients dans le mixeur et battre pendant quelques minutes jusqu’à ce que ce soit bien mélangé et parfaitement mouliné. Rectifier la quantité de sucre et miel si nécessaire', 'Laisser refroidir au réfrigérateur jusqu’au moment de servir. Servir bien froid avec un peu de menthe.']
		}]
	}, {
		title: 'Panna cotta de thé chaï',
		image: _india4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['2 cuillères à café de thé chaï', '60cL de lait entier', '100g de lait concentré sucré', '1 feuille de gélatine.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Dans une grande casserole, verser le lait et le faire chauffer doucement. Ajouter le thé et laisser bouillir pendant 5 minutes. Puis, le retirer du feu, le couvrir et le laisser reposer 15 minutes', 'Mettre la gélatine dans l’eau froide, la laisser se ramollir, l’essorer avec les mains et la mettre dans le thé pour la faire fondre. Mélanger le tout et ajouter le lait concentré. Réserver au frigo pour la refroidir.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/asia/india.js');
}();

;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _jordania = __webpack_require__(129);

var _jordania2 = _interopRequireDefault(_jordania);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES DE JORDANIE',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Chamia',
		// image: image,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Une tasse et demi de farine de maïs (375 ml).', 'Une tasse de sucre (250ml).', 'Six œufs.', '50 grammes de beurre.', 'Une petite cuillère de bicarbonate de soude.', 'Une demi-tasse de lait (125 ml).', 'Quelques gouttes de saveur vanille.', 'Quelques amandes pour décorer..']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mélanger le beurre ramolli avec le sucre et dans un autre récipient mélanger les œufs avec la saveur vanille .', 'Verser la préparation à base de beurre dans les œufs mélangés.', 'Incorporer délicatement la farine de maïs jusqu’à complète intégration', 'Dans un moule beurré, et y verser la préparation. A l’aide de la pointe d’un couteau, dessiner des losanges et y placer en leur centre une amande. Placer le tout dans le four. Quand la surface du gâteau est dorée, la Chamia est prête.', 'Sortir le gâteau et le laisser refroidir avant de le servir.']
		}]
	}, {
		title: 'Booza',
		image: _jordania2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['2 verres de farine de blé.', '2 verres d’eau.', '2 verres de sucre.', 'Gingembre ou cannelle suivant les gouts. Peut  être accompagné avec bonheur par quelques  noisettes grillées.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mélanger la farine à l’eau et laisser reposer une nuit.', 'Le lendemain, filtrer le liquide et cuire l’ensemble avec deux verres d’eau jusqu’à ébullition.', 'Filtrer à nouveau et mélanger les deux verres de sucre dans la préparation.', 'Verser le tout dans un récipient en verre et placer le tout dans le réfrigérateur pendant 3 jours afin que la praparation fermente.', 'Lorsque des bulles apparaissent à la surface c’est que la fermentation a commencée. Sortir du  réfrigérateur et filtrer à nouveau. Servir le tout dans des verres.', 'Saupoudrer la poudre de gingembre ou de cannelle sur chaque verre et éventuellement la noisette  grillée. Servir.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/asia/jordanie.js');
}();

;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _liban = __webpack_require__(130);

var _liban2 = _interopRequireDefault(_liban);

var _liban3 = __webpack_require__(131);

var _liban4 = _interopRequireDefault(_liban3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTES LIBANAISES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Labneh',
		image: _liban2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['1⁄2 L de lait.', '1 cuillère à soupe de yaourt']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Chauffer le lait à 45 degrés.', 'Diluer le yaourt dans un peu de lait chaud. Le mélanger au lait que nous mettrons ensuite dans un pot de terre.', 'Couvrir le pot de terre et laisser reposer 5 ou 6h.', 'Quand le fromage blanc est de bonne consistance, le mettre au réfrigérateur.']
		}]
	}, {
		title: 'Gâteau libanais d’orange',
		image: _liban4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['4 œufs.', '450g d’oranges entières', '200g de sucre', '1 cuillère à café de fleur d’oranger', '8g de levure chimique', '200g d’amandes moulues', 'sucre glace pour décorer']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Laver les oranges et les cuire recouvertes d’eau pendant 15min à la cocotte minute. Essorer, laisser refroidir et réserver.', 'Mixer les oranges.', 'Battre le sucre et les œufs jusqu’à ce que le mélange soit blanchâtre. Ajouter la purée d’orange, la fleur d’oranger et la levure et mélanger.', 'Ajouter les amandes et mélanger à la spatule.', 'Beurrer un moule, verser la pâte et enfourner à 170 degrés pendant 60min. Laisser ensuite reposer 10min.', 'Une fois froid, démouler et saupoudrer de sucre glace']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/asia/liban.js');
}();

;

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _arabia = __webpack_require__(123);

var _arabia2 = _interopRequireDefault(_arabia);

var _arabia3 = __webpack_require__(124);

var _arabia4 = _interopRequireDefault(_arabia3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES D’ARABIE SAOUDITE',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Maskina.',
		image: _arabia2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['2 verres de farine.', '1 verre et demi de sucre en poudre.', '1 verre de crème.', 'Fruits secs émincés']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mélanger la farine, le sucre et la crème.', 'Huiler le moule et verser la préparation dans ce dernier. Huiler la surface du gâteau et saupoudrer de fruits secs.', 'Mettre au four à température modérée..', 'Servir frais.']
		}]
	}, {
		title: 'Mohalabeya de kamar el din',
		image: _arabia4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['1/2 kg de carottes.', '1/2 kg de jus d’orange.', '2 verres d’eau.', '2 cuillères à soupe de Maïzena.', 'Sucre']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Cuire les carottes. Une fois cuites, les peler et les mixer au blender avec le jus d’orange. Adoucir la préparation d’environ 3 cuillères à soupe de sucre et mettre à cuire.', 'Dissoudre la Maïzena dans un peu d’eau et l’ajouter à la préparation. Mélanger le jus obtenu jusqu’à obtenir la consistance souhaitée. Verser dans le récipient de service et répandre des fruits secs, de la noix de coco en poudre puis laisser refroidir. Placer au réfrigérateur et servir très frais.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/asia/maskina.js');
}();

;

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _singapour = __webpack_require__(132);

var _singapour2 = _interopRequireDefault(_singapour);

var _singapour3 = __webpack_require__(133);

var _singapour4 = _interopRequireDefault(_singapour3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTES DE SINGAPOUR',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Pêches à la vanille',
		image: _singapour2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Pêches mures.', 'Glace à la vanille', 'Noisettes grillées']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Peler les pêches et enlever le noyau. Passer la chair de la pêche au mixeur et réserver au réfrigérateur.', 'Choisir les noisettes coupées grossièrement. Dans une coupe, servir un peu de glace à lavanille, une bonne portion de purée de pêches, et enfin une poignée de noisettes. Servir immédiatement.']
		}]
	}, {
		title: 'Mochi Gáces',
		image: _singapour4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['1 verre de farine de riz', '3⁄4 de verre d’eau', '1⁄2 de verre de sucre', 'Glace de n’importe quelle saveur (selon vos gouts)', 'Farine de riz pour enfariner']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Préparer la glace : attendre que la glace soit un peu fondue pour pouvoir la façonner facilement.', 'Utiliser un moule à glaçons pour façonner la glace ; la congeler à nouveau.', 'Pour préparer la pâte : avec un batteur manuel, mélanger la farine, l’eau et le sucre dans un récipient.', 'Le couvrir avec un film plastique et le cuire au microondes à puissance maximum pendant 5 minutes.', 'Sortir le récipient avec beaucoup de précaution. Mélanger la pâte avec une cuillère en bois.', 'L’étaler sur une surface enfarinée avec beaucoup de farine de riz. Enrouler la pâte jusqu’à ce qu’elle atteigne 2-3 mm d’épaisseur.', 'Utiliser un petit verre de 5cm de diamètre pour donner la forme et couper la pâte.', 'Mettre la pâte au frigo pour qu’elle soit froide.', 'Mettre la glace au milieu de la pâte et la fermer. Garder à nouveau au congélateur.', 'Sortir les mochis du congélateur avant de servir et attendre quelques minutes avant de les manger. Savourez!']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/asia/singapour.js');
}();

;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES DU VIETNAM',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Chè chuối',
		// image: image,
		sectionIngredient: [{
			title: 'Ingrédients (pour deux personnes)',
			ingredient: ['1 c/s de graines de sésame.', '3 c/s de tapioca.', '350 ml d’eau.', '1 pincée de sel.', '125 ml de lait de coco.', '3 c/s de sucre.', '1 banane.', 'Beurre (un peu)']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Dans une poêle torréfier légèrement les graines de sésame.', 'Faire chauffer l’eau dans une casserole et ajouter le tapioca lorsque l’eau bout. Baisser alors le feu au minimum et laisser cuire 20 minutes en remuant de temps en temps.', 'Ajouter le lait de coco, le sucre et la pincée de sel. Remuer et laisser cuire 3 minutes supplémentaires.', 'Couper la banane en tranches. Réserver quelques tranches pour la décoration et incorporer le reste à la préparation. Laisser cuire à feu doux jusqu’à épaississement.', 'Verser dans les bols et laisser refroidir.', 'Dans la poêle, faire fondre le beurre et frire légèrement les tranches de banane restantes.', 'Disposer une tranche de banane dans chaque bol et saupoudrer des graines de sésame. Servir.']
		}]
	}]
};
// import image from '../../../../images/cook/recipe/asia/';

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/asia/vietnam.js');
}();

;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _english = __webpack_require__(134);

var _english2 = _interopRequireDefault(_english);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES ANGLAISES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Gâteaux de fée',
		image: _english2.default,
		sectionIngredient: [{
			title: 'Ingrédients (pour 6 cupcakes)',
			ingredient: ['115 g (½ tasse) de beurre sans sel', '115 g (½ tasse + 1 cuillère) de sucre semoule', '2 oeufs', '1 petite cuillère d’extrait de vanille', '115 g (7⁄8 tasse) de farine de blé avec levure', '1⁄4 petite cuillère de sell.', '1-2 cuillère à soupe (15-30 ml) de lait']
		}, {
			title: 'Pour le glaçage :',
			ingredient: ['115 g (1 tasse) de sucre glace', '1-2 cuillère à soupe (15-30 ml) d’eau', 'Colorants alimentaires de différentes couleurs', '30 g de chocolat au lait', '5 g (1 petite cuillère) de beurre sans sel', 'Différentes petites décorations en sucre coloré (petits coeurs, étoiles, fleurs, perles, vermicelles...)']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Préchauffer le four à 180°C et disposer la grille au niveau intermédiaire', 'Placer les caissettes à cupcakes dans le moule en silicone et réserver. Tamiser la farine avec le sel et réserver', 'Dans le bol du malaxeur, ou dans un grand saladier, mélanger le beurre et le sucre à vitesse moyenne pendant environ 4 à 5 minutes jusqu’à obtenir une texture spongieuse et plus blanchâtre que le beurre. Décoller ce qui reste autour du bol.', 'Ajouter les oeufs légèrement battus un à un et mélanger doucement. N’ajouter l’oeuf suivant qu’après complète incorporation du précédent.', 'Ajouter l’extrait de vanille et bien mélanger.', 'Incorporer la farine en deux fois. Mélanger doucement jusqu’à complète disparition des grumeaux. Incorporer pour finir le lait, une cuillère après l’autre, jusqu’à obtenir la consistance souhaitée (plus ou moins celui d’une glace fondue).', 'A l’aide d’une cuillère à glace, remplir les moules et les caissettes à environ les 2⁄3 de leur contenance.', 'Placer au four chaud durant 18-20 minutes ou jusqu’à ce que la pâte ait levé et soit dorée. Vérifier que les cupcakes sont cuits en les piquants avec un couteau pointu qui doit ressortir sec. Une fois cuits, les sortir du four et les laisser refroidir 5 minutes. Ensuite les démouler et laisser refroidir complètement sur une grille avant de passer à l’étape de glaçage.']
		}, {
			title: 'Le glaçage:',
			preparation: ['D’un côté, placer le sucre glace dans un bol et ajouter une cuillère d’eau et un peu de colorant. Mélanger énergiquement jusqu’à obtenir une pâte homogène.', 'Ajouter au besoin un peu d’eau ou de colorant pour obtenir la consistance ou la couleur désirée. D’un autre côté, faire fondre le chocolat avec un peu de lait et ajouter le beurre.', 'Étaler le glaçage de sucre ou de chocolat sur les cupcakes et décorer. Ajouter les autres décorations.', 'Laisser sécher jusqu’à complète solidification et déguster!', 'Se conserve 3 ou 4 jours à température ambiante dans un récipient fermé.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/europe/fairy_cakes.js');
}();

;

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _german = __webpack_require__(137);

var _german2 = _interopRequireDefault(_german);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES ALLEMANDES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Recette de biscuits de Pâques : Osterkekse.',
		image: _german2.default,
		sectionIngredient: [{
			title: 'Ingrédients pour la pâte',
			ingredient: ['500g de farine.', '250g de beurre.', '200g de sucre.', '2 œufs.', '1 paquet de sucre vanillé.', 'Une pointe de cannelle (la pointe d’un']
		}, {
			title: 'Ingrédients pour le glaçage',
			ingredient: ['1 blanc d’œuf.', '1 pincée de sel.', '200g de sucre glace.', 'Du colorant alimentaire.']
		}],
		sectionPreparation: [{
			title: 'Préparation de la pâte pour les biscuits:',
			preparation: [' Mettre la farine dans un bol.', ' Ajouter à la farine des morceaux de beurre, le sucre, les œufs, le sucre vanillé et la cannelle. Travailler le tout avec les mains jusqu’à obtenir une pate compacte.', ' Enrouler la pâte en forme de boule dans un film transparent et laisser reposer dans le frigo entre 30 et 60 minutes.', ' Préchauffer le four à 180°C.', ' Une fois la pâte froide, enlever le film et à l’aide d’un rouleau ; travailler la pâte jusqu’à obtenir une pâte de 5 millimètres d’épaisseur. Plus fine, les biscuits se casseraient.', ' Presser la pâte avec le moule de biscuit choisi et disposer les biscuits sur une plaque de four sur du papier sulfurisé.', ' Mettre la plaque dans la partie moyenne du four et enfourner les biscuits pendant 10 minutes, en contrôlant qu’ils ne soient pas trop cuits.', ' Une fois cuits, sortir la plaque du four et déposer les biscuits sur une surface plane. Nous recommandons de le faire en tirant le papier sulfurisé. Les laisser refroidir au-dessus du papier avant de procéder à la décoration avec le glaçage.']
		}, {
			title: 'Elaboration du glaçage',
			preparation: ['Monter les blancs en neige avec une pointe de sel. On peut utiliser 2 blancs d’œufs si on veut obtenir une plus grande quantité de glaçage.', 'Ajouter le sucre glace aux blancs d’œuf et monter jusqu’à obtenir une crème compacte. Si le glaçage est trop liquide, mettre plus de sucre glace.', 'La couleur du glaçage obtenu sera blanche. On peut colorer le glaçage avec les couleurs de notre choix, grâce aux colorants alimentaires. Déposer un peu de glaçage dans de petits bols et mélanger avec la couleur de son choix dans chaque bol.', 'Remplir du glaçage une seringue de pâtissier pour décorer les biscuits. Sinon, on peut prendre un sac de congélation et le remplir du glaçage, et couper une des pointes du sac. Ou sinon avec une cuillère/couteau manuellement, en fonction de la décoration choisie.', 'Décorer les biscuits selon ton goût et ton imagination.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/europe/galletaDePascua.js');
}();

;

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _spanish = __webpack_require__(144);

var _spanish2 = _interopRequireDefault(_spanish);

var _spanish3 = __webpack_require__(145);

var _spanish4 = _interopRequireDefault(_spanish3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES ESPAGNOLES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Salade de fruits tropicaux',
		image: _spanish2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['100g de fraises.', '3 oranges.', '2 bananes.', 'Raisin vert ou rouge.', '3 tranches d’ananas frais.', '200g de pulpe de melon.', '1 citron.', 'Feuilles de menthe.', 'Sucre.']
		}],
		sectionPreparation: [{
			title: 'Préparation de salade de fruits tropicaux glacée:',
			preparation: ['Bien laver tous les fruits. Peler 2 oranges et les couper en petits morceaux. Les disposer dans un bol.', 'Eplucher les bananes et les couper en rondelles. Les mélanger avec l’orange .', 'Enlever les feuilles aux fraises et les couper en deux. Les incorporer dans le bol avec les autres fruits.', 'Eplucher l’ananas et couper deux rondelles. Les mettre dans le bol.', 'Couper des morceaux de melon et les mettre dans le bol.', 'Ajouter les raisins dans le bol.', 'Sucrer selon ses gouts.', 'Enfin, mettre le jus de citron et le jus d’une orange.', 'Mélanger le tout et mettre la salade de fruits au frais avant de la servir.']
		}]
	}, {
		title: 'FLAN AUX ŒUFS',
		image: _spanish4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['1⁄2 litre de lait entier.', '4 gros œufs.', '2 jaunes d’œuf.', '1 gousse de vanille ou un morceau de cannelle en branche.', '150g de sucre (pour le flan).', '1 petite cuillère de jus de citron.', '150g de sucre (pour le caramel).', '4 cuillères à soupe d’eau.', '6 moules à flan.']
		}],
		sectionPreparation: [{
			title: 'Recette pour faire le flan aux œufs (pour 6 flans):',
			preparation: ['Pour préparer le caramel, mettre 150 g de sucre dans une casserole. Ajouter une petite cuillère de jus de citron et 4 grosses cuillères d’eau. Pose la casserole à feu moyen et laisse le sucre bouillir. Faire bien attention à ne pas toucher le caramel,  car ça brule beaucoup.', 'Quand le caramel a une belle couleur dorée, l’enlever du feu. Verser une cuillère de caramel dans chacun des 6 moules à flan. Et secouer les un peu pour que le caramel se répande bien.', 'Maintenant verser dans une casserole propre 1⁄2 litre de lait entier et faire chauffer à feu moyen.', 'Ouvrir une gousse de vanille par le milieu en largeur. Enlever les graines de la vanille et verser le tout dans le lait. Laisser cuire jusqu’il soit à point de bouillir et retirer la casserole du feu et laisser reposer 30 minutes.', 'Casser 4 gros œufs dans un saladier. Ajouter deux jaunes d’œuf et 150 g de sucre. Remuer légèrement afin que tout se mélange.', 'Une fois que le lait a reposé 30 minutes, retirer la gousse de vanille. Allumer le four et le mettre à 160°C, chaleur en haut et en bas.', 'Incorporer le lait au saladier avec les œufs et le sucre tout en remuant légèrement. Déverser le mélange dans les 6 moules.', 'Mettre les moules dans un plat pour four et remplir le plat d’eau jusqu’à atteindre la moitié de la hauteur des moules. Mettre au four et cuire au bain marie pendant 40 minutes à 160°c,', 'Quand les flans sont cuits, les sortir du four. Avec un gant de cuisine, retirer les moules de l’eau et attendre qu’ils refroidissent.', 'Recouvrir les flans de papier film et les mettre au frigo pendant au moins 4 heures.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/europe/macedonia.js');
}();

;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _russia = __webpack_require__(140);

var _russia2 = _interopRequireDefault(_russia);

var _russia3 = __webpack_require__(141);

var _russia4 = _interopRequireDefault(_russia3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES RUSSES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: '“Pommes remplies au four "Assorti".',
		image: _russia2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Confiture d’abricots- 2 cuillérées', 'Des pignons – une cuillérée', 'Gingembre en poudre- une pincée', 'Sirop de fraises – 2 cuillérées', 'Semoule – une cuillérée', 'Vanille- une pincée', 'Miel- une cuillérée', 'Noix- 3 unités', 'Eau – 3 cuillérées', 'Pommes vertes – 3 unités', 'Cannelle- une pincée']
		}],
		sectionPreparation: [{
			title: 'Préparation de la salade de fruits tropicaux glacée:',
			preparation: ['Laver les pommes et les évider avec un couteau spécial ou habituel. Il se formera alors un trou où l’on pourra verser de la confiture d’abricots.', 'Verser dans un moule de l’eau (optionnel). Mettre les pommes dans le moule. Dans la première pomme, mettre de la confiture d’abricot, puis ajouter des pignons et une pincée de gingembre, selon vos gouts.', 'Remplir la deuxième pomme avec le sirop de fraises, mélangé avec de la semoule et saupoudrer de vanille.', 'Dans la troisième pommes, mettre les noix, remplir avec du miel et saupoudrer de cannelle. Mettre au four préchauffé jusqu’à 200°C pendant 20-30 minutes. Servir chaudes ou froides.']
		}]
	}, {
		title: 'Gâteau aux carottes',
		image: _russia4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Œufs – 4 unités', 'Sucre – 2 tasses', 'Beurre', 'Huile de tournesol -1,5 tasse', 'Farine- 2 tasses', 'Carottes rapées : 3 tasses', 'Noix 120g', 'Cannelle moulue – 2 cuillérées', 'Soude – 2 cuillérées', 'Sel- une cuillérée']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mélanger les œufs, le sucre et le beurre. Mélanger à part les ingrédients secs, mélanger le tout et ajouter les carottes et les noix. Mettre la pâte dans un moule et enfourner à 160°C .', 'Le gâteau peut se couper en deux tartes. Mettre la crème mascarpone ou une crème fouettée 35%  MG au milieu.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/europe/manzanasAsadas.js');
}();

;

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _italy = __webpack_require__(138);

var _italy2 = _interopRequireDefault(_italy);

var _italy3 = __webpack_require__(139);

var _italy4 = _interopRequireDefault(_italy3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTES ITALIENNNES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Mousse au chocolat',
		image: _italy2.default,
		sectionIngredient: [{
			title: 'Ingrédients pour 4 personnes',
			ingredient: ['100g de cacao doux.', '40 g de sucre.', '400ml de crème fouettée pour dessert.', 'Un peu de vanille.']
		}],
		sectionPreparation: [{
			title: 'Préparation de la mousse au chocolat:',
			preparation: ['Verser le cacao dans une petite casserole, en le faisant chauffer avec un tout petit peu d’eau (10ml) pour qu’il se dissolve. Dans une autre casserole, répéter l’opération avec le sucre. Ensuite, ajouter le cacao dissout avec le sucre et laisser le tout refroidir.', 'Mélanger la crème fouettée et la vanille, déverser dans une coupe en verre et ajouter des morceaux de chocolat ou de fruits confits, selon les gouts. Mettre au frigo avant de servir.']
		}]
	}, {
		title: 'Saucisson au chocolat',
		image: _italy4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['100g de beurre (ou margarine).', '200g de chocolat noir 70%.', '2 jaunes d’œuf*', '8 biscuits (80g) au beurre.', '7 biscuits à la cuillère (40g).', 'Un mélange de 40g d’amandes pelées, noisettes et de pignons.', '1-2 cuillères de sucre en poudre pour recouvrir.']
		}],
		sectionPreparation: [{
			title: 'Recette pour faire le saucisson au chocolat:',
			preparation: ['Casser le chocolat et le mettre dans une grosse tasse ou récipient résistant à la chaleur. Ajouter le beurre coupé en morceaux et mettre le récipient dans un pot d’eau bouillante (la partie inférieure du récipient ne doit pas toucher l’eau). Faire cuire au bain marie à feu doux, en remuant de temps en temps avec une cuillère en bois.', 'Une fois que le mélange cuit et forme un ensemble crémeux et doux, retirer du bain marie et laisser refroidir. Ensuite, ajouter les jaunes d’œuf. Mélanger de manière uniforme et mettre de côté pendant que l’on prépare les biscuits.', 'Couper les biscuits en morceaux irréguliers (pour simuler le gras du saucisson) et incorporer au mélange de chocolat (en incluant des miettes) les fruits secs entiers. Remuer jusqu’à obtenir une pate qui puisse se malaxer facilement avec les mains.', 'Préparer un grand rectangle de papier aluminium et du papier film. Etendre le papier film d’une longueur de 35 cm et enrouler le mélange et doubler les extrémités pour lui donner une forme de saucisson. Doubler les extrémités du plastique en tournant.', 'Enrouler le saucisson en chocolat avec du papier aluminium et le mettre au frais plusieurs heures (minimum 3 heures) ou une nuit pour qu’il durcisse. Pour les plus impatients, le mettre au congélateur pendant une demi-heure.', 'Le lendemain, ou quand le saucisson est dur, le faire rouler sur le plan de travail pour lui donner forme et retirer le papier aluminium et le plastique.', 'Verser du sucre en poudre sur le plan de travail et faire rouler le saucisson dedans pour bien qu’il s’imprègne. Avec un pinceau, enlever l’excès de sucre avant de le couper en tranches pas très fines et servir de préférence sur une planche de bois pour faire illusion.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/europe/mouse.js');
}();

;

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _french = __webpack_require__(135);

var _french2 = _interopRequireDefault(_french);

var _french3 = __webpack_require__(136);

var _french4 = _interopRequireDefault(_french3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTES FRANÇAISES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Mousse au chocolat à l’avocat',
		image: _french2.default,
		sectionIngredient: [{
			title: 'Ingrédients pour 2 personnes',
			ingredient: ['110g de chocolat à pâtisseries, en morceaux', '4 cuillères de lait de coco épais', '1 avocat mûr', '1⁄2 cuillère d’extrait de vanille', '1 pincée de sel', '3 cuillères à soupe de miel', '1 petite cuillère de zeste d’orange', '1⁄2 cuillère de poivre rouge mouliné']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['fondre le chocolat au bain-marie avec le lait de coco. Mélanger.', 'Laisser refroidir et mélanger avec le reste des ingrédients jusqu’à obtenir un mélange homogène.']
		}]
	}, {
		title: 'Tarta Tatin',
		image: _french4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['200g de farine de blé', '125g de sucre fin', '1 pincée de sel', '1 jaune d’œuf', '25mL d’eau', '60g de beurre', '80g de sucre fin', '1 cuillère à soupe de sucre fin', '1kg de pommes pelées et coupées en tranches', '80g de beurre ramolli et coupé et morceaux']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['tamiser la farine et ajouter 125g de sucre et le sel. Former un puit au centre et remplir du beurre coupé en morceaux. Mélanger jusqu’à obtenir une consistance sablonneuse. Ajouter le jaune d’œuf et l’eau, et pétrir jusqu’à former une boule. Envelopper la pâte dans du film plastique et laisser reposer 1 à 2h au réfrigérateur.', 'Faire fondre le beurre un moule de 23cm de diamètre sur un feu moyen. Quand le beurre est fondu, ajouter 80g de sucre et bien mélanger', 'Placer les pommes le plus serrées possible dans le moule. Saupoudrer de la cuillère de sucre restant et les laisser caraméliser à feu moyen pendant 12min environ.', 'Quand les pommes sont caramélisées, retirer du feu. Laisser le moins possible d’espace entre les pommes.', 'Préchauffer le four à 200 degrés', 'Sortir la pâte du frigo, l’étaler sur une surface enfarinée. Créer un cercle d’environ 5mm d’épaisseur et d’un diamètre de 3cm de plus que le moule.', 'Placer la pâte sur les pommes en bordant les côtés à l’intérieur du moule.', 'Enfourner pendant 30min', 'Retirer du four et laisser refroidir 10min. Retourner la tarte Tatin sur un plat. Déguster cette tarte seule ou avec un peu de crème fraiche ou une boule de glace à la vanille.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/europe/mousseDeChocolate.js');
}();

;

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _serbia = __webpack_require__(142);

var _serbia2 = _interopRequireDefault(_serbia);

var _serbia3 = __webpack_require__(143);

var _serbia4 = _interopRequireDefault(_serbia3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES SERBES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Tarte de Belgrade',
		image: _serbia2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['13 jaunes d’œuf', '10 blancs montés en neige', '275g de sucre', '135g de fruits confits', '1 tablette de chocolat', '2 cuillérées de farine']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mélanger les jaunes d’œuf avec le sucre jusqu’à obtenir une crème mousseuse.', 'Ajouter les amandes, les fruits confits et la farine.', 'Fondre le chocolat dans un peu de lait et incorporer le mélange fait précédemment.', 'Battre les blancs en neige et mélanger le tout avec attention, jusqu’à obtenir un mélange homogène.', 'Verser le résultat dans un moule graissé au préalable avec du beurre, mettre le tout au four et faire reposer pendant 3⁄4 heure.', 'Enfin, retirer le gâteau, laisser refroidir et servir.']
		}]
	}, {
		title: 'DOUCEUR DE COING DE JAGODINA',
		image: _serbia4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['1 Kg de coing', '1 kg de sucre']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Laver les coings et les cuire dans beaucoup d’eau jusqu’à ce qu’ils ramollissent et que la peau commence à plisser.', 'Les égoutter, les éplucher et les couper en morceaux. Les passer au batteur ou presse-purée. Peser la pulpe obtenue et la mélanger avec le même poids de sucre.', 'Cuire à feu doux pendant 25 minutes, en remuant le mélange sans arrêt pour éviter qu’il accroche. Afin de voir si la cuisson est idéale, verser une petite portion sur une assiette et voir s’il se solidifie immédiatement.', 'Retirer du feu, verser dans un grand moule ou en plusieurs petits et mettre au frigo.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/europe/tarta.js');
}();

;

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _australie = __webpack_require__(146);

var _australie2 = _interopRequireDefault(_australie);

var _australie3 = __webpack_require__(147);

var _australie4 = _interopRequireDefault(_australie3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES AUSTRALIENNES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'ALBA',
		image: _australie2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Sucre', '2 citrons', 'Glace au choix']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mélanger les citrons avec le sucre et prendre son parfum de glace préféré, incorporer et mettre une heure au congélateur.']
		}]
	}, {
		title: 'Paletas de Mango',
		image: _australie4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['3 mangues mures.', 'sucre.', 'eau.', '1 coupelle pour boules de glace.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Peler les mangues.', 'Couper jusqu’à obtenir la pulpe.', 'Mélanger avec le sucre et l’eau.', 'Vider le jus dans des petites coupelles à glace et mettre au congélateur']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/oceania/alba.js');
}();

;

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _vanuatu = __webpack_require__(148);

var _vanuatu2 = _interopRequireDefault(_vanuatu);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTE DE VANUATU',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'GLACE A LA MANGUE',
		image: _vanuatu2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['1 tasse de pulpe de mangue.', '1 tasse de sucre.', '1 tasse de lait.', '1 capsule de lait condensé.', '4 oeufs', '1 cuillère de jus de citron.', 'Una pincée de sel.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Chauffer le lait et éteindre à ébullition.', 'Battre les œufs avec le sucre, ajouter le lait chaud peu à peu sans arrêter de battre. Ensuite, ajouter le lait condensé et la pulpe de mangue, le jus de citron et une pincée de sel. Bien mélanger.', 'Laisser refroidir, et mettre au congélateur pendant 12 heures.', 'Le lendemain, retirer du congélateur et mettre le contenu 30 minutes dans la machine à glace.', 'Pour obtenir une texture pour dense de la glace, la laisser ensuite reposer 30 minutes de nouveau au congélateur']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/oceania/helado.js');
}();

;

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _zelande = __webpack_require__(149);

var _zelande2 = _interopRequireDefault(_zelande);

var _zelande3 = __webpack_require__(150);

var _zelande4 = _interopRequireDefault(_zelande3);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETTES NEO-ZELANDAISES.',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'PAVLOVA',
		image: _zelande2.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['3 blancs d’oeuf.', 'Le double du poids des blancs en sucre', 'Quelques gouttes de citron.', '1 petite cuillère de vinaigre', '1 cuillérée de Maizena', '350 ml de crème liquide pour monter les blancs.', 'Fraises ou fruits de votre choix']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Monter les blancs en neige avec le sucre. Ajouter ensuite les gouttes de citron, le vinaigre, la maizena, et le sucre versé en pluie. Mélanger le tout jusqu’à obtenir une consistance épaisse et Monter avec le batteur en faisant des pics.', 'Dans un papier à four spécial, dessiner des cercles de la taille que vous souhaitez pour les meringues. Prendre une grille pour four et mettre le papier.', 'Ensuite, mettre la meringue dans les cercles en les dessinant bien ronds et faisant une espèce de nid, plus de quantité pour les bords et un peu moins au centre. La hauteur est à définir selon vos envies. En moyenne, 3 doigts de hauteur.', 'Les mettre dans le four à 140 degrés sans air ou 120 si votre four n’a que l’option air. Pendant 2 heures approximativement.', 'Les retirer et les laisser refroidir un moment pour les remplir par la suite.', 'Pour les remplir à l’intérieur, donner des petits et doux coups avec une cuillère pour obtenir un trou et les remplir de crème montée.', 'Les mettre dans un plat à dessert et les décorer au-dessus avec un peu de crème et de fruits: mangue, framboises, cerises, fraises (selon vos gouts']
		}]
	}, {
		title: 'HOT CROSS BUN',
		image: _zelande4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['375 gr de grosse farine.', '4 gr. De levure sèche (12 gr. fraiche).', '1/2 petite cuillère de cannelle.', '1/4 petite cuillère de gingembre.', '1/4 petite cuillère de noix de muscade.', '1/4 petite cuillère de cardamone.', '1/2 petite cuillère de sel.', '1 oeuf.', '175 ml. de lait entier.', '50 gr. de sucre.', '35 gr. de beurre.', 'raisins secs (ou morceau de chocolat).', 'oeuf battu pour peindre']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mélanger tous les ingrédients secs dans un bol, les épices, la farine, le sucre, le sel ...', 'Dissoudre la levure avec le lait entier et ajouter au mélange précédent avec l’oeuf battu. Bien mélanger et pétrir.', 'Ajouter à la pâte le beurre à température ambiante et recommencer à pétrir jusqu’à ce qu’il s’intègre bien. Une fois la pâte homogène et lisse, ajouter les raisins secs ou les morceaux de chocolat. Réserver dans un bol enfariné et recouvrir ; laisser reposer pendant une heure jusqu’à ce qu’elle double de volume.', 'Diviser la pâte en petites portions (50- 60 gr.), lui donner la forme de brioche, et réserver sur la plaque du four en ligne et recouvrir pendant 45 minutes.', 'Une fois qu’ils ont doublé de volume, les peindre avec l’oeuf battu et faire la pâte pour la croix: pour cela, mélanger la farine avec le sucre glace et ajouter de l’eau jusqu’à obtenir un mélange épais. Une fois obtenu, le mettre une poche pâtissière et dessiner des croix sur les petits pain..', 'Mettre au four pendant 15- 20 minutes à 180oC, jusqu’à ce qu’ils soient dorés. Laisser refroidir. C’est pret']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/oceania/pavlova.js');
}();

;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.whoarewe = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _color_tree = __webpack_require__(103);

var _color_tree2 = _interopRequireDefault(_color_tree);

var _pipiletRainbow = __webpack_require__(51);

var _pipiletRainbow2 = _interopRequireDefault(_pipiletRainbow);

__webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var whoarewe = exports.whoarewe = _react2.default.createElement(
	'div',
	{ className: 'wrapper-who-are-we' },
	_react2.default.createElement(
		'div',
		{ className: 'header-who-are-we' },
		_react2.default.createElement('img', { className: 'hidden', src: _pipiletRainbow2.default }),
		_react2.default.createElement(
			'h1',
			null,
			'\xBFQui\xE9nes somos?'
		),
		_react2.default.createElement('img', { src: _pipiletRainbow2.default })
	),
	_react2.default.createElement(
		'p',
		null,
		'La Asociaci\xF3n Humanitaria franco-espa\xF1ola Pipilet Mandala (www.AHFE-pipiletmandala.org) con Personalidad Jur\xEDdica en Francia est\xE1 compuesta por un equipo directivo constituido por personas francesas y espa\xF1olas, siendo sus intereses en unificar ambos pa\xEDses con el fin de fomentar la participaci\xF3n solidaria de \xE9stos para elevar la calidad de vida de los m\xE1s desfavorecidos del planeta.'
	),
	_react2.default.createElement(
		'p',
		null,
		'En breves palabras, les voy a contar c\xF3mo ha surgido la idea y c\xF3mo poco a poco ha ido tomando forma a trav\xE9s del apoyo de un grupo de personas francesas y espa\xF1olas que han cre\xEDdo en m\xED y en mi prop\xF3sito. Sin ellas no existir\xEDa actualmente esta asociaci\xF3n humanitaria.'
	),
	_react2.default.createElement(
		'p',
		null,
		'Por mi parte, les dir\xE9 que he trabajado como trabajadora social en Espa\xF1a durante 15 a\xF1os. Los servicios sociales han sido mi vocaci\xF3n desde mi tierna infancia. De alguna manera, esto me ha ayudado mucho para la creaci\xF3n de la Asociaci\xF3n Humanitaria Franco-Espa\xF1ola \u201CPipilet Mandala\u201D.'
	),
	_react2.default.createElement(
		'p',
		null,
		'Adem\xE1s de ser trabajadora social, tambi\xE9n soy profesora. De estos apasionantes campos nace \u201CPipilet Mandala\u201D, una mascota infantil. \xBFQui\xE9nes mejor que los ni\xF1os, nuestro futuro, para entender esta maravillosa propuesta?'
	),
	_react2.default.createElement(
		'p',
		null,
		'En mi forma de ver y sentir el mundo, uno de los animales m\xE1s arraigados a la tierra es el caracol. Este caracol, creado de fantas\xEDa, tiene una particularidad: es extraterrestre y viene a darnos un mensaje de amor universal. Procede de un planeta a\xFAn desconocido por el hombre, llamado \u201CGalappar\u201D. Quiere recorrer la Tierra para conocer sus diferentes pa\xEDses, sus culturas, su historia, m\xFAsica, gastronom\xEDa y hacerse amigos de todo el mundo. Como no conoce ning\xFAn idioma, va a ir al colegio como un ni\xF1o m\xE1s, tambi\xE9n para aprender a hablar y disfrutar con todo tipo de saber.'
	),
	_react2.default.createElement(
		'p',
		null,
		'Con el prop\xF3sito de llevar a cabo nuestros fines, nada mejor que la creaci\xF3n de una p\xE1gina web did\xE1ctica para ni\xF1os. De esta manera, es posible llevar m\xE1s r\xE1pido un mensaje universal... a trav\xE9s de \u201CPipilet Mandala\u201D. Doce lenguas tienen encuentro dentro de la web; y todas, con la tem\xE1tica de aprendizaje a trav\xE9s de la mascota musical, gastron\xF3mica y escolar.'
	),
	_react2.default.createElement(
		'p',
		null,
		'Esta p\xE1gina est\xE1 traducida en tres idiomas (espa\xF1ol, franc\xE9s e ingl\xE9s). Se pretende llevar un mensaje de amor universal. A trav\xE9s de diferentes v\xEDdeos, van frases de solidaridad, universalidad en los 12 idiomas que conlleva la p\xE1gina.'
	),
	_react2.default.createElement(
		'p',
		null,
		'\xBFPor qu\xE9 Mandala? Mandala es el apellido de la mascota, pero bas\xE1ndose en los principios del mandala. La palabra mandala proviene del s\xE1nscrito y significa \u201Cc\xEDrculo sagrado\u201D. Un s\xEDmbolo de sanaci\xF3n, uni\xF3n, integraci\xF3n. Psicol\xF3gicamente, los mandalas representan la totalidad de nuestro ser. Cada persona responde a ellos instintivamente, m\xE1s all\xE1 de su edad, sexo, origen, cultura... permitiendo que brote la sabidur\xEDa de nuestro inconsciente.'
	),
	_react2.default.createElement(
		'p',
		{ style: { alignSelf: 'flex-start' } },
		'Pipilet Mandala es m\xE1s que una mascota, es un proyecto humanitario internacional'
	),
	_react2.default.createElement(
		'p',
		null,
		'A trav\xE9s de la mascota damos forma a nuestro proyecto humanitario... para poder recaudar dinero y, as\xED, alcanzar los objetivos ( de fomentar la participaci\xF3n solidaria de \xE9stos para elevar la calidad de vida de los m\xE1s desfavorecidos del planeta) de nuestra Asociaci\xF3n Humanitaria Franco-Espa\xF1ola \u201CPipilet Mandala\u201D. Tambi\xE9n, por medio de compras solidarias (http://www mode-pipiletmandala.org).'
	),
	_react2.default.createElement(
		'p',
		{ style: { alignSelf: 'flex-start' } },
		'Muchas gracias por su atenci\xF3n en hacer realidad nuestro sue\xF1o.'
	),
	_react2.default.createElement(
		'h5',
		null,
		'\xAB Si todos aportamos un grano de arena podremos hacer una playa \xBB - Elena Garc\xEDa P\xE9rez'
	),
	_react2.default.createElement(
		'h2',
		{ style: { alignSelf: 'flex-start' } },
		'El equipo colaborador:'
	),
	_react2.default.createElement(
		'p',
		null,
		'Es mi deseo como Presidenta de la Asociaci\xF3n Humanitaria Franco-Espa\xF1ola Pipilet Mandala daros las gracias en nombre del equipo directivo ya que sin vuestros esfuerzos no se hubiesen hecho realidad nuestros sue\xF1os. Vosotros hab\xE9is sido los primeros en dar un ejemplo de solidaridad , por lo que deseamos dejar por escrito vuestra participaci\xF3n como miembros colaboradores fundadores.'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Traductores:'
	),
	_react2.default.createElement(
		'p',
		{ style: { alignSelf: 'flex-start' } },
		'- Abdelghani Benkhelil ( franc\xE9s-\xE1rabe)',
		_react2.default.createElement('br', null),
		'- Snezana ( franc\xE9s/serbio)',
		_react2.default.createElement('br', null),
		'- Helena Mucoseve (franc\xE9s-ruso)',
		_react2.default.createElement('br', null),
		'- C\xE9cile Bracciano (espa\xF1ol-frances)',
		_react2.default.createElement('br', null),
		'- Sophie Sheldon (franc\xE9s-ingl\xE9s)',
		_react2.default.createElement('br', null),
		'- Florence Gittard (franc\xE9s/ingl\xE9s/italiano/alem\xE1n)',
		_react2.default.createElement('br', null),
		'- St\xE9phane Araud (espa\xF1ol/franc\xE9s)',
		_react2.default.createElement('br', null),
		'- Alyson Bramandi (franc\xE9s/ingl\xE9s)',
		_react2.default.createElement('br', null),
		'- Marie Laurens Gnagne (franc\xE9s/ lengua Adiokrou- Costa de Marfil)',
		_react2.default.createElement('br', null),
		'- Poline Ribiera (franc\xE9s/ingl\xE9s)',
		_react2.default.createElement('br', null),
		'- Ianis Tamoud (franc\xE9s/ingl\xE9s/chino)',
		_react2.default.createElement('br', null)
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Creador/ dise\xF1ador del logotipo y de la mascota Pipilet Mandala'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- John Prieto. \u201CEntre l\xE1pices y pinceles\u201D // http://entrelapicesypinceles.blogspot.fr/'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Creador pagina web de Pipilet Manadala.com'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{
			style: { alignSelf: 'flex-start' } },
		'- Mavrick -Protfolio- www.mavrick-duchamp.com'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Creadora p\xE1gina web Asociaci\xF3n franco-espa\xF1ola Pipilet Mandala'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Lucile Araud.'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Coautor libros infantiles Pipilet Mandala'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Pedro Tena Tena'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Quadri +:'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Timothee Linder // www.quadriplus.com'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Coomunicaci\xF3n de recursos sociales:'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Alyson Bramardi'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Poline Ribiera'
	),
	_react2.default.createElement(
		'div',
		{ className: 'wrapper-image-tree' },
		_react2.default.createElement(
			'div',
			{ className: 'sentence-philosophe undisplay' },
			_react2.default.createElement(
				'i',
				null,
				_react2.default.createElement(
					'b',
					null,
					'Ayudar a otros es como ayudarte a ti mismo.- Henry Flagler.'
				)
			)
		),
		_react2.default.createElement('img', { src: _color_tree2.default }),
		_react2.default.createElement(
			'div',
			{ className: 'sentence-philosophe' },
			_react2.default.createElement(
				'i',
				null,
				_react2.default.createElement(
					'b',
					null,
					'Ayudar a otros es como ayudarte a ti mismo.- Henry Flagler.'
				)
			)
		)
	)
);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(whoarewe, 'whoarewe', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/who-are-we/spanish.jsx');
}();

;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".wrapper-who-are-we{padding:60px;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;display:flex;flex-direction:column;align-items:center;position:relative}.wrapper-who-are-we .header-who-are-we{height:180px;width:100%;display:flex;z-index:-1;justify-content:space-between;align-items:flex-end}.wrapper-who-are-we .header-who-are-we img{height:100%}.wrapper-who-are-we .header-who-are-we .hidden{visibility:hidden}.wrapper-who-are-we .header-who-are-we .text{display:flex;flex-direction:column}.wrapper-who-are-we .wrapper-image-tree{display:flex;justify-content:space-between;align-items:center}.wrapper-who-are-we .wrapper-image-tree img{max-width:100%;max-height:100%}.wrapper-who-are-we .wrapper-image-tree .sentence-philosophe{color:#5ea0e1}.undisplay{visibility:hidden}", ""]);

// exports


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_color_tree.jpg";

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_algerie1.jpg";

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_algerie2.jpg";

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_benin.jpg";

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_kenya.jpg";

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_malagasy.jpg";

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_maroc.jpg";

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_tunisie.jpg";

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_argentine.jpg";

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_brasil-2.jpg";

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_brasil.jpg";

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_canada.jpg";

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_chilie.jpg";

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_guyane.jpg";

/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_haiti.jpg";

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_haiti2.jpg";

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_mexico-nutella.jpg";

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_mexico-oreo.jpg";

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_usa1.jpg";

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_usa2.jpg";

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_arabia.jpg";

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_arabia2.jpg";

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_china.jpg";

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_china2.jpg";

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_india.jpg";

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_india2.jpg";

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_jordania2.jpg";

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_liban.png";

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpeg_liban2.jpeg";

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_singapour.jpg";

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_singapour2.jpg";

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_english.jpg";

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_french.jpg";

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_french2.jpg";

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_german.jpg";

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_italy.jpg";

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpeg_italy2.jpeg";

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_russia.jpg";

/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpeg_russia2.jpeg";

/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_serbia.jpg";

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_serbia2.jpg";

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_spanish.jpg";

/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpeg_spanish2.jpeg";

/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_australie.jpg";

/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_australie2.jpg";

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_vanuatu.jpg";

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_zelande.jpg";

/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_zelande2.jpg";

/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_ghana.png";

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_lebanon.jpg";

/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_south-africa.jpg";

/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_tanzania.jpg";

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_bike_big_draw_number.png";

/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_bike_little_draw_number.png";

/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_umbrella_big_draw_number.png";

/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_umbrella_little_draw_number.png";

/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(570);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
exports.getDependsOnOwnProps = getDependsOnOwnProps;
exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

var _verifyPlainObject = __webpack_require__(161);

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = verifyPlainObject;

var _isPlainObject = __webpack_require__(572);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(162);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject2.default)(value)) {
    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.routes = exports.route = exports.components = exports.component = exports.history = undefined;
exports.falsy = falsy;

var _propTypes = __webpack_require__(11);

function falsy(props, propName, componentName) {
  if (props[propName]) return new Error('<' + componentName + '> should not have a "' + propName + '" prop');
}

var history = exports.history = (0, _propTypes.shape)({
  listen: _propTypes.func.isRequired,
  push: _propTypes.func.isRequired,
  replace: _propTypes.func.isRequired,
  go: _propTypes.func.isRequired,
  goBack: _propTypes.func.isRequired,
  goForward: _propTypes.func.isRequired
});

var component = exports.component = (0, _propTypes.oneOfType)([_propTypes.func, _propTypes.string]);
var components = exports.components = (0, _propTypes.oneOfType)([component, _propTypes.object]);
var route = exports.route = (0, _propTypes.oneOfType)([_propTypes.object, _propTypes.element]);
var routes = exports.routes = (0, _propTypes.oneOfType)([route, (0, _propTypes.arrayOf)(route)]);

/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.isReactChildren = isReactChildren;
exports.createRouteFromReactElement = createRouteFromReactElement;
exports.createRoutesFromReactChildren = createRoutesFromReactChildren;
exports.createRoutes = createRoutes;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isValidChild(object) {
  return object == null || _react2.default.isValidElement(object);
}

function isReactChildren(object) {
  return isValidChild(object) || Array.isArray(object) && object.every(isValidChild);
}

function createRoute(defaultProps, props) {
  return _extends({}, defaultProps, props);
}

function createRouteFromReactElement(element) {
  var type = element.type;
  var route = createRoute(type.defaultProps, element.props);

  if (route.children) {
    var childRoutes = createRoutesFromReactChildren(route.children, route);

    if (childRoutes.length) route.childRoutes = childRoutes;

    delete route.children;
  }

  return route;
}

/**
 * Creates and returns a routes object from the given ReactChildren. JSX
 * provides a convenient way to visualize how routes in the hierarchy are
 * nested.
 *
 *   import { Route, createRoutesFromReactChildren } from 'react-router'
 *
 *   const routes = createRoutesFromReactChildren(
 *     <Route component={App}>
 *       <Route path="home" component={Dashboard}/>
 *       <Route path="news" component={NewsFeed}/>
 *     </Route>
 *   )
 *
 * Note: This method is automatically used when you provide <Route> children
 * to a <Router> component.
 */
function createRoutesFromReactChildren(children, parentRoute) {
  var routes = [];

  _react2.default.Children.forEach(children, function (element) {
    if (_react2.default.isValidElement(element)) {
      // Component classes may have a static create* method.
      if (element.type.createRouteFromReactElement) {
        var route = element.type.createRouteFromReactElement(element, parentRoute);

        if (route) routes.push(route);
      } else {
        routes.push(createRouteFromReactElement(element));
      }
    }
  });

  return routes;
}

/**
 * Creates and returns an array of routes from the given object which
 * may be a JSX route, a plain object route, or an array of either.
 */
function createRoutes(routes) {
  if (isReactChildren(routes)) {
    routes = createRoutesFromReactChildren(routes);
  } else if (routes && !Array.isArray(routes)) {
    routes = [routes];
  }

  return routes;
}

/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _redux = __webpack_require__(21);

var _chooseLanguage = __webpack_require__(181);

var _chooseLanguage2 = _interopRequireDefault(_chooseLanguage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = (0, _redux.combineReducers)({
	ChooseLanguage: _chooseLanguage2.default
});

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/reducers/index.js');
}();

;

/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Route = __webpack_require__(585);

var _Route2 = _interopRequireDefault(_Route);

var _IndexRoute = __webpack_require__(583);

var _IndexRoute2 = _interopRequireDefault(_IndexRoute);

var _appContainer = __webpack_require__(182);

var _appContainer2 = _interopRequireDefault(_appContainer);

var _homePage = __webpack_require__(197);

var _homePage2 = _interopRequireDefault(_homePage);

var _songPage = __webpack_require__(209);

var _songPage2 = _interopRequireDefault(_songPage);

var _lyricsPage = __webpack_require__(204);

var _lyricsPage2 = _interopRequireDefault(_lyricsPage);

var _colorNumberPage = __webpack_require__(185);

var _colorNumberPage2 = _interopRequireDefault(_colorNumberPage);

var _translatedNumberPage = __webpack_require__(227);

var _translatedNumberPage2 = _interopRequireDefault(_translatedNumberPage);

var _numberPage = __webpack_require__(205);

var _numberPage2 = _interopRequireDefault(_numberPage);

var _colorPage = __webpack_require__(186);

var _colorPage2 = _interopRequireDefault(_colorPage);

var _translatedColorPage = __webpack_require__(218);

var _translatedColorPage2 = _interopRequireDefault(_translatedColorPage);

var _cookPage = __webpack_require__(189);

var _cookPage2 = _interopRequireDefault(_cookPage);

var _chooseCountryCook = __webpack_require__(183);

var _chooseCountryCook2 = _interopRequireDefault(_chooseCountryCook);

var _displayRecipe = __webpack_require__(194);

var _displayRecipe2 = _interopRequireDefault(_displayRecipe);

var _presentationPage = __webpack_require__(206);

var _presentationPage2 = _interopRequireDefault(_presentationPage);

var _whoWeAre = __webpack_require__(228);

var _whoWeAre2 = _interopRequireDefault(_whoWeAre);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _react2.default.createElement(
	_Route2.default,
	{ path: '/', component: _appContainer2.default },
	_react2.default.createElement(_IndexRoute2.default, { component: _homePage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/home', component: _homePage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/song', component: _songPage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/song/:language', component: _lyricsPage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/colorNumber', component: _colorNumberPage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/number', component: _numberPage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/number/:language', component: _translatedNumberPage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/color', component: _colorPage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/color/:language', component: _translatedColorPage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/cooker', component: _cookPage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/cooker/:continent', component: _chooseCountryCook2.default }),
	_react2.default.createElement(_Route2.default, { path: '/cooker/:continent/:id', component: _displayRecipe2.default }),
	_react2.default.createElement(_Route2.default, { path: '/presentation', component: _presentationPage2.default }),
	_react2.default.createElement(_Route2.default, { path: '/whoarewe', component: _whoWeAre2.default })
);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/routes/index.js');
}();

;

/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

var path = __webpack_require__(588);
var webpack = __webpack_require__(55);

module.exports = {
	entry: ['react-hot-loader/patch', //HRM
	'webpack-hot-middleware/client', //HMR
	'./index.js'],
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.client.js',
		publicPath: '/'
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			use: ['babel-loader'],
			exclude: /(node_modules|bower_components)/
		}, {
			test: /\.(scss|sass)$/,
			use: [{
				loader: 'style-loader' // creates style nodes from JS strings
			}, {
				loader: 'css-loader?minimize' // translates CSS into CommonJS
			}, {
				loader: 'sass-loader' // compiles Sass to CSS
			}]
		}, {
			test: /\.(jpe?g|png|gif|svg|pdf)$/i,
			use: [{
				loader: 'file-loader',
				options: {
					name: '[ext]_[name].[ext]'
				}
			}, {
				loader: 'image-webpack-loader',
				options: {
					mozjpeg: {
						progressive: true
					},
					gifsicle: {
						interlaced: true
					},
					optipng: {
						optimizationLevel: 7
					}
				}
			}]
		}]
	},
	resolve: {
		extensions: ['.scss', '.js', '.jsx', '.jpg', '.png']
	},
	plugins: [new webpack.optimize.OccurrenceOrderPlugin(), //HMR
	new webpack.HotModuleReplacementPlugin(), //HMR
	new webpack.NoEmitOnErrorsPlugin() //HMR
	]
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
/* 168 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 169 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 170 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 171 */
/***/ (function(module, exports) {

module.exports = require("webpack-dev-middleware");

/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = require("webpack-hot-middleware");

/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _express = __webpack_require__(168);

var _express2 = _interopRequireDefault(_express);

var _webpack = __webpack_require__(55);

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevClient = __webpack_require__(167);

var _webpackDevClient2 = _interopRequireDefault(_webpackDevClient);

var _server = __webpack_require__(169);

var _redux = __webpack_require__(21);

var _reactRouter = __webpack_require__(20);

var _index = __webpack_require__(166);

var _index2 = _interopRequireDefault(_index);

var _reducers = __webpack_require__(165);

var _reducers2 = _interopRequireDefault(_reducers);

var _reactRedux = __webpack_require__(6);

var _reduxLogger = __webpack_require__(170);

var _reduxLogger2 = _interopRequireDefault(_reduxLogger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compiler = (0, _webpack2.default)(_webpackDevClient2.default);
var app = (0, _express2.default)();

var store = (0, _redux.createStore)(_reducers2.default, (0, _redux.applyMiddleware)(_reduxLogger2.default));
var style = '';

console.log('process.env.NODE_ENV ------> ', process.env.NODE_ENV);
if (process.env.NODE_ENV == 'development') {
	app.use(__webpack_require__(171)(compiler, {
		noInfo: true
	}));

	app.use(__webpack_require__(172)(compiler));
} else {
	style = '<link rel="stylesheet" type="text/css" href="/styles.min.css">';
}

app.use(_express2.default.static('public'));

app.get('*.js', function (req, res, next) {
	req.url = req.url + '.gz';
	res.set('Content-Encoding', 'gzip');
	next();
});

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
	return '\n    <!doctype html public="storage">\n    <html>\n      <head>\n        <meta charset=utf-8/>\n        <title>My First React Router App</title>\n        <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:300" rel="stylesheet">\n\t\t\t\t<link href="https://fonts.googleapis.com/css?family=Amatic+SC|Quattrocento+Sans|Work+Sans:100,200,300" rel="stylesheet">\n\t\t\t\t<link href="https://fonts.googleapis.com/css?family=Montserrat:800" rel="stylesheet">\n        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">\n        ' + style + '\n      </head>\n      <body>\n      <div id="app">\n        ' + (process.env.NODE_ENV === 'production' ? appHtml : '<div>' + appHtml + '</div>') + '\n      </div>\n        <script src="/bundle.client.js"></script>\n      </body>\n    </html\n   ';
}

var PORT = process.env.PORT || 8081;
app.listen(PORT, function () {
	console.log('Production Express server running at localhost:' + PORT);
});
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(renderPage, 'renderPage', '/Users/mavrickduchamp/Documents/pipiletMandala/server.js');

	__REACT_HOT_LOADER__.register(PORT, 'PORT', '/Users/mavrickduchamp/Documents/pipiletMandala/server.js');

	__REACT_HOT_LOADER__.register(compiler, 'compiler', '/Users/mavrickduchamp/Documents/pipiletMandala/server.js');

	__REACT_HOT_LOADER__.register(app, 'app', '/Users/mavrickduchamp/Documents/pipiletMandala/server.js');

	__REACT_HOT_LOADER__.register(store, 'store', '/Users/mavrickduchamp/Documents/pipiletMandala/server.js');

	__REACT_HOT_LOADER__.register(style, 'style', '/Users/mavrickduchamp/Documents/pipiletMandala/server.js');
}();

;

/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.changeWebsiteLanguage = undefined;

var _language = __webpack_require__(57);

var changeWebsiteLanguage = exports.changeWebsiteLanguage = function changeWebsiteLanguage(language) {
	return {
		type: _language.CHANGE_LANGUAGE,
		country: language
	};
};
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(changeWebsiteLanguage, 'changeWebsiteLanguage', '/Users/mavrickduchamp/Documents/pipiletMandala/src/action/website-language.js');
}();

;

/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(10);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DropdownMenu = function DropdownMenu(_ref) {
	var item = _ref.item;

	return _react2.default.createElement(
		'ul',
		{ className: 'wrapper-dropdown-menu' },
		item.title,
		_react2.default.createElement(
			'li',
			{ className: 'wrapper-dropdown' },
			item.subNavbar.map(function (item, index) {
				return _react2.default.createElement(
					'div',
					{ key: index, className: 'dropdown' },
					_react2.default.createElement(
						_Link2.default,
						{ to: '/' + item.url },
						item.title
					)
				);
			})
		)
	);
};

var _default = DropdownMenu;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(DropdownMenu, 'DropdownMenu', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/navbar/components/dropdown/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/navbar/components/dropdown/index.jsx');
}();

;

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(10);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimpleItem = function SimpleItem(_ref) {
	var item = _ref.item;

	return _react2.default.createElement(
		_Link2.default,
		{ to: '/' + item.url },
		item.title
	);
};

var _default = SimpleItem;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(SimpleItem, 'SimpleItem', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/navbar/components/simple-item/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/navbar/components/simple-item/index.jsx');
}();

;

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(12);

var _connect2 = _interopRequireDefault(_connect);

var _websiteLanguage = __webpack_require__(174);

__webpack_require__(322);

var _simpleItem = __webpack_require__(176);

var _simpleItem2 = _interopRequireDefault(_simpleItem);

var _dropdown = __webpack_require__(175);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _french_nav = __webpack_require__(374);

var _french_nav2 = _interopRequireDefault(_french_nav);

var _english_nav = __webpack_require__(373);

var _english_nav2 = _interopRequireDefault(_english_nav);

var _spanish_nav = __webpack_require__(394);

var _spanish_nav2 = _interopRequireDefault(_spanish_nav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Navbar = function Navbar(_ref) {
	var itemsNavbar = _ref.itemsNavbar,
	    dispatch = _ref.dispatch;


	var changeLanguage = function changeLanguage(country) {
		dispatch((0, _websiteLanguage.changeWebsiteLanguage)(country));
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
							return changeLanguage('fr');
						} },
					_react2.default.createElement('img', {
						src: _french_nav2.default, height: '27', width: '27' })
				),
				_react2.default.createElement(
					'li',
					{ onClick: function onClick() {
							return changeLanguage('eng');
						} },
					_react2.default.createElement('img', {
						src: _english_nav2.default, height: '27', width: '27' })
				),
				_react2.default.createElement(
					'li',
					{ onClick: function onClick() {
							return changeLanguage('esp');
						} },
					_react2.default.createElement('img', {
						src: _spanish_nav2.default, height: '27', width: '27' })
				)
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'navigation' },
			_react2.default.createElement(
				'ul',
				null,
				itemsNavbar.map(function (item, key) {
					return _react2.default.createElement(
						'li',
						{ key: key },
						item.url && _react2.default.createElement(_simpleItem2.default, { item: item }),
						!item.url && _react2.default.createElement(_dropdown2.default, { item: item })
					);
				})
			)
		)
	);
};

var _default = (0, _connect2.default)()(Navbar);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Navbar, 'Navbar', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/navbar/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/navbar/index.jsx');
}();

;

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(10);

var _Link2 = _interopRequireDefault(_Link);

__webpack_require__(323);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sidebar = function Sidebar(_ref) {
	var sidebar = _ref.sidebar;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-sidebar' },
		_react2.default.createElement(
			'div',
			{ style: { 'position': 'relative' } },
			_react2.default.createElement(
				'div',
				{ className: 'or-spacer-vertical right' },
				_react2.default.createElement('div', { className: 'mask' })
			),
			_react2.default.createElement(
				'div',
				null,
				sidebar.map(function (item, index) {
					var image = item.image;
					return _react2.default.createElement(
						_Link2.default,
						{ key: index, to: '/' + item.url },
						_react2.default.createElement(
							'div',
							{ className: 'wrapper-item' },
							_react2.default.createElement(
								'p',
								null,
								item.title
							),
							_react2.default.createElement('img', { src: image, width: '200' })
						)
					);
				})
			)
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

	__REACT_HOT_LOADER__.register(Sidebar, 'Sidebar', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/sidebar/index.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/components/sidebar/index.jsx');
}();

;

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var HOME = exports.HOME = 'home';
var PRESENTATION = exports.PRESENTATION = 'whoarewe';
var CONTACT = exports.CONTACT = 'contact';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HOME, 'HOME', '/Users/mavrickduchamp/Documents/pipiletMandala/src/constants/navbar.js');

  __REACT_HOT_LOADER__.register(PRESENTATION, 'PRESENTATION', '/Users/mavrickduchamp/Documents/pipiletMandala/src/constants/navbar.js');

  __REACT_HOT_LOADER__.register(CONTACT, 'CONTACT', '/Users/mavrickduchamp/Documents/pipiletMandala/src/constants/navbar.js');
}();

;

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var SONG = exports.SONG = 'song';
var COLORNUMBER = exports.COLORNUMBER = 'colorNumber';
var COOKER = exports.COOKER = 'cooker';
var PRESENTATIONSIDEBAR = exports.PRESENTATIONSIDEBAR = 'presentation';
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(SONG, 'SONG', '/Users/mavrickduchamp/Documents/pipiletMandala/src/constants/sidebar.js');

  __REACT_HOT_LOADER__.register(COLORNUMBER, 'COLORNUMBER', '/Users/mavrickduchamp/Documents/pipiletMandala/src/constants/sidebar.js');

  __REACT_HOT_LOADER__.register(COOKER, 'COOKER', '/Users/mavrickduchamp/Documents/pipiletMandala/src/constants/sidebar.js');

  __REACT_HOT_LOADER__.register(PRESENTATIONSIDEBAR, 'PRESENTATIONSIDEBAR', '/Users/mavrickduchamp/Documents/pipiletMandala/src/constants/sidebar.js');
}();

;

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = ChooseLanguage;

var _websiteLanguages = __webpack_require__(317);

var _websiteLanguages2 = _interopRequireDefault(_websiteLanguages);

var _language = __webpack_require__(57);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initialState = _extends({}, _websiteLanguages2.default[0]);

function ChooseLanguage() {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
	var action = arguments[1];

	switch (action.type) {
		case _language.CHANGE_LANGUAGE:
			{
				var language = {};

				_websiteLanguages2.default.forEach(function (item) {
					if (item.lan === action.country) {
						language = item;
					}
				});
				return _extends({}, language);
			}
			;

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

	__REACT_HOT_LOADER__.register(ChooseLanguage, 'ChooseLanguage', '/Users/mavrickduchamp/Documents/pipiletMandala/src/reducers/chooseLanguage.js');

	__REACT_HOT_LOADER__.register(initialState, 'initialState', '/Users/mavrickduchamp/Documents/pipiletMandala/src/reducers/chooseLanguage.js');
}();

;

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(12);

var _connect2 = _interopRequireDefault(_connect);

var _navbar = __webpack_require__(177);

var _navbar2 = _interopRequireDefault(_navbar);

var _sidebar = __webpack_require__(178);

var _sidebar2 = _interopRequireDefault(_sidebar);

__webpack_require__(324);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AppContainer = function AppContainer(_ref) {
	var children = _ref.children,
	    navbar = _ref.navbar,
	    sidebar = _ref.sidebar;

	return _react2.default.createElement(
		'div',
		{ className: 'o-container' },
		_react2.default.createElement(_navbar2.default, { itemsNavbar: navbar }),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-content' },
			children
		),
		_react2.default.createElement(_sidebar2.default, { sidebar: sidebar })
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return state.ChooseLanguage;
};

var _default = (0, _connect2.default)(mapStateToProps)(AppContainer);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(AppContainer, 'AppContainer', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/app-container/app-container.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/app-container/app-container.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/app-container/app-container.jsx');
}();

;

/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _displayCountry = __webpack_require__(184);

var _displayCountry2 = _interopRequireDefault(_displayCountry);

__webpack_require__(325);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChooseCountryCook = function ChooseCountryCook(_ref) {
	var continent = _ref.continent;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-choose-country-cook' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-title' },
			continent.title
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-country' },
			_react2.default.createElement(_displayCountry2.default, {
				country: continent.country,
				continent: continent
			})
		)
	);
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		continent: state.ChooseLanguage.chooseCountryContent[props.params.continent]
	};
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(ChooseCountryCook);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ChooseCountryCook, 'ChooseCountryCook', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/choose-country-cook/choose-country-cook.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/choose-country-cook/choose-country-cook.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/choose-country-cook/choose-country-cook.jsx');
}();

;

/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayCountry = function DisplayCountry(_ref) {
	var country = _ref.country,
	    continent = _ref.continent;

	return _react2.default.createElement(
		'div',
		{ className: 'wrapper-display-country' },
		country.map(function (item, index) {
			return _react2.default.createElement(
				_reactRouter.Link,
				{ to: '/cooker/' + continent.name + '/' + index, key: index },
				_react2.default.createElement(
					'div',
					{ className: 'display-country' },
					_react2.default.createElement(
						'div',
						{ className: 'wrapper-image' },
						_react2.default.createElement('img', { src: item.type, alt: '' })
					),
					item.name
				)
			);
		})
	);
};

var _default = DisplayCountry;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(DisplayCountry, 'DisplayCountry', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/choose-country-cook/component/display-country/display-country.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/choose-country-cook/component/display-country/display-country.jsx');
}();

;

/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(12);

var _connect2 = _interopRequireDefault(_connect);

var _Link = __webpack_require__(10);

var _Link2 = _interopRequireDefault(_Link);

var _pipiletNumberColor = __webpack_require__(14);

var _pipiletNumberColor2 = _interopRequireDefault(_pipiletNumberColor);

var _footer = __webpack_require__(7);

var _footer2 = _interopRequireDefault(_footer);

var _headerPage = __webpack_require__(15);

var _headerPage2 = _interopRequireDefault(_headerPage);

__webpack_require__(326);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorNumber = function ColorNumber(_ref) {
	var titleColor = _ref.titleColor,
	    imageColor = _ref.imageColor,
	    titleNumber = _ref.titleNumber,
	    imageNumber = _ref.imageNumber;


	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-colornumber' },
		_react2.default.createElement(_headerPage2.default, { title: titleColor, logo: _pipiletNumberColor2.default }),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-all-image' },
			_react2.default.createElement(
				_Link2.default,
				{ to: '/color' },
				_react2.default.createElement('img', { src: imageColor })
			)
		),
		_react2.default.createElement(_headerPage2.default, { title: titleNumber, logo: _pipiletNumberColor2.default }),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-all-image' },
			_react2.default.createElement(
				_Link2.default,
				{ to: '/number' },
				_react2.default.createElement('img', { src: imageNumber })
			)
		),
		_react2.default.createElement(_footer2.default, null)
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		titleColor: state.ChooseLanguage.colorNumberContent.titleColor,
		imageColor: state.ChooseLanguage.colorNumberContent.imageColor,
		titleNumber: state.ChooseLanguage.colorNumberContent.titleNumber,
		imageNumber: state.ChooseLanguage.colorNumberContent.imageNumber
	};
};

var _default = (0, _connect2.default)(mapStateToProps)(ColorNumber);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ColorNumber, 'ColorNumber', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/color-number-page/color-number-page.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/color-number-page/color-number-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/color-number-page/color-number-page.jsx');
}();

;

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(12);

var _connect2 = _interopRequireDefault(_connect);

var _pipiletNumberColor = __webpack_require__(14);

var _pipiletNumberColor2 = _interopRequireDefault(_pipiletNumberColor);

var _section = __webpack_require__(56);

var _section2 = _interopRequireDefault(_section);

var _footer = __webpack_require__(7);

var _footer2 = _interopRequireDefault(_footer);

__webpack_require__(327);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColorPage = function ColorPage(_ref) {
	var titleColor = _ref.titleColor,
	    imageColor = _ref.imageColor;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-color-page' },
		_react2.default.createElement(_section2.default, { path: '/color', image: imageColor, title: titleColor,
			logo: _pipiletNumberColor2.default, extraClassName: 'color' }),
		_react2.default.createElement(_footer2.default, null)
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		titleColor: state.ChooseLanguage.colorPageContent.titleColor,
		imageColor: state.ChooseLanguage.colorPageContent.owls
	};
};

var _default = (0, _connect2.default)(mapStateToProps)(ColorPage);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ColorPage, 'ColorPage', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/color-page/color-page.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/color-page/color-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/color-page/color-page.jsx');
}();

;

/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Description = function Description(_ref) {
	var description = _ref.description;

	return _react2.default.createElement(
		"div",
		{ className: "wrapper-description" },
		description
	);
};

var _default = Description;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Description, "Description", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/cook-page/components/description/description.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/cook-page/components/description/description.jsx");
}();

;

/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Map = function Map(_ref) {
	var map = _ref.map;

	return _react2.default.createElement(
		'div',
		{ className: 'wrapper-map' },
		_react2.default.createElement('img', { className: 'map', src: map }),
		_react2.default.createElement(
			_reactRouter.Link,
			{ className: 'america', to: '/cooker/america' },
			_react2.default.createElement('div', { className: 'absolute america-one' }),
			_react2.default.createElement('div', { className: 'absolute america-two' })
		),
		_react2.default.createElement(
			_reactRouter.Link,
			{ className: 'europe', to: '/cooker/europe' },
			_react2.default.createElement('div', { className: 'absolute europe-one' })
		),
		_react2.default.createElement(
			_reactRouter.Link,
			{ className: 'asia', to: '/cooker/asia' },
			_react2.default.createElement('div', { className: 'absolute asia-one' })
		),
		_react2.default.createElement(
			_reactRouter.Link,
			{ className: 'africa', to: '/cooker/africa' },
			_react2.default.createElement('div', { className: 'absolute africa-one' }),
			_react2.default.createElement('div', { className: 'absolute africa-two' })
		),
		_react2.default.createElement(
			_reactRouter.Link,
			{ className: 'oceania', to: '/cooker/oceania' },
			_react2.default.createElement('div', { className: 'absolute oceania-one' })
		)
	);
};

var _default = Map;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Map, 'Map', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/cook-page/components/map/map.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/cook-page/components/map/map.jsx');
}();

;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _headerPage = __webpack_require__(15);

var _headerPage2 = _interopRequireDefault(_headerPage);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _description = __webpack_require__(187);

var _description2 = _interopRequireDefault(_description);

var _map = __webpack_require__(188);

var _map2 = _interopRequireDefault(_map);

var _footer = __webpack_require__(7);

var _footer2 = _interopRequireDefault(_footer);

var _map3 = __webpack_require__(407);

var _map4 = _interopRequireDefault(_map3);

__webpack_require__(328);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CookPage = function CookPage(_ref) {
	var cookerPageContent = _ref.cookerPageContent;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-cooker-page' },
		_react2.default.createElement(_headerPage2.default, { title: cookerPageContent.title, logo: _pipiletCooker2.default }),
		_react2.default.createElement(_description2.default, { description: cookerPageContent.description }),
		_react2.default.createElement(_map2.default, { map: _map4.default }),
		_react2.default.createElement(_footer2.default, null)
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return state.ChooseLanguage;
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(CookPage);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(CookPage, 'CookPage', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/cook-page/cook-page.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/cook-page/cook-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/cook-page/cook-page.jsx');
}();

;

/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderRecipe = function HeaderRecipe(_ref) {
	var title = _ref.title,
	    flag = _ref.flag;

	return _react2.default.createElement(
		'div',
		{ className: 'wrapper-header-recipe' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-image-girl-man' },
			_react2.default.createElement('img', { src: flag })
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-title' },
			_react2.default.createElement(
				'div',
				{ className: 'title' },
				title
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-image-pipilet' },
			_react2.default.createElement('img', { src: _pipiletCooker2.default })
		)
	);
};

var _default = HeaderRecipe;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(HeaderRecipe, 'HeaderRecipe', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/component/header-recipe/header-recipe.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/component/header-recipe/header-recipe.jsx');
}();

;

/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _iconDownload = __webpack_require__(16);

var _iconDownload2 = _interopRequireDefault(_iconDownload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Ingredient = function Ingredient(_ref) {
	var sectionIngredient = _ref.sectionIngredient,
	    image = _ref.image,
	    download = _ref.download;

	return _react2.default.createElement(
		'div',
		{ className: 'wrapper-section-ingredient' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-all-recipe' },
			sectionIngredient.map(function (items, index) {
				return _react2.default.createElement(
					'div',
					{ key: index, className: 'wrapper-recipe' },
					_react2.default.createElement(
						'div',
						{ className: 'inner-recipe' },
						_react2.default.createElement(
							'div',
							{ className: 'wrapper-title-section' },
							items.title
						),
						_react2.default.createElement(
							'ul',
							null,
							items.ingredient.map(function (item, index) {
								return _react2.default.createElement(
									'li',
									{ key: index },
									item
								);
							})
						)
					)
				);
			})
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-logo-download' },
			_react2.default.createElement(
				'a',
				{
					href: download,
					download: download
				},
				_react2.default.createElement('img', { src: _iconDownload2.default, className: 'little-draw' })
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-logo-recipe' },
			_react2.default.createElement('img', { src: image })
		)
	);
};

var _default = Ingredient;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Ingredient, 'Ingredient', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/component/recipe/component/ingredient/ingredient.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/component/recipe/component/ingredient/ingredient.jsx');
}();

;

/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Preparation = function Preparation(_ref) {
	var sectionPreparation = _ref.sectionPreparation;

	return _react2.default.createElement(
		"div",
		{ className: "wrapper-section-preparation" },
		sectionPreparation.map(function (items, index) {
			return _react2.default.createElement(
				"div",
				{ key: index },
				_react2.default.createElement(
					"div",
					{ className: "wrapper-title-section" },
					items.title
				),
				_react2.default.createElement(
					"ul",
					null,
					items.preparation.map(function (item, index) {
						return _react2.default.createElement(
							"li",
							{ key: index },
							item
						);
					})
				)
			);
		})
	);
};

var _default = Preparation;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Preparation, "Preparation", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/component/recipe/component/preparation/preparation.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/component/recipe/component/preparation/preparation.jsx");
}();

;

/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _ingredient = __webpack_require__(191);

var _ingredient2 = _interopRequireDefault(_ingredient);

var _preparation = __webpack_require__(192);

var _preparation2 = _interopRequireDefault(_preparation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Recipe = function Recipe(_ref) {
	var recipe = _ref.recipe,
	    download = _ref.download;

	return _react2.default.createElement(
		'div',
		{ className: 'wrapper-recipe' },
		recipe.map(function (item, index) {
			return _react2.default.createElement(
				'div',
				{ className: 'wrapper-recipe-map', key: index },
				_react2.default.createElement(
					'div',
					{ className: 'wrapper-title' },
					item.title
				),
				_react2.default.createElement(_ingredient2.default, { sectionIngredient: item.sectionIngredient,
					image: item.image,
					download: download
				}),
				_react2.default.createElement(_preparation2.default, { sectionPreparation: item.sectionPreparation })
			);
		})
	);
};

var _default = Recipe;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Recipe, 'Recipe', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/component/recipe/recipe.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/component/recipe/recipe.jsx');
}();

;

/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _headerRecipe = __webpack_require__(190);

var _headerRecipe2 = _interopRequireDefault(_headerRecipe);

var _recipe = __webpack_require__(193);

var _recipe2 = _interopRequireDefault(_recipe);

__webpack_require__(329);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayRecipe = function DisplayRecipe(_ref) {
	var recipeCountry = _ref.recipeCountry,
	    downloadRecipe = _ref.downloadRecipe;


	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-display-recipe' },
		_react2.default.createElement(_headerRecipe2.default, { title: recipeCountry.title, flag: recipeCountry.flag }),
		_react2.default.createElement(_recipe2.default, { recipe: recipeCountry.recipe, download: downloadRecipe })
	);
};

var mapStateToProps = function mapStateToProps(state, props) {
	var continent = props.params.continent;
	var index = props.params.id;
	var allCountry = state.ChooseLanguage.chooseCountryContent[continent].country;

	return {
		recipeCountry: allCountry[index].recipe,
		downloadRecipe: allCountry[index].downloadRecipe
	};
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(DisplayRecipe);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(DisplayRecipe, 'DisplayRecipe', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/display-recipe.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/display-recipe.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/display-recipe/display-recipe.jsx');
}();

;

/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayImage = function DisplayImage(_ref) {
	var image = _ref.image;


	return _react2.default.createElement(
		"div",
		{ id: "wrapper-image" },
		_react2.default.createElement("img", { src: image })
	);
};

var _default = DisplayImage;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(DisplayImage, "DisplayImage", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/home-page/components/display-image/display-image.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/home-page/components/display-image/display-image.jsx");
}();

;

/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _familyOwls = __webpack_require__(408);

var _familyOwls2 = _interopRequireDefault(_familyOwls);

var _pipiletHorizontal = __webpack_require__(410);

var _pipiletHorizontal2 = _interopRequireDefault(_pipiletHorizontal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderTitle = function HeaderTitle() {
	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-headertitle' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-tree-bird' },
			_react2.default.createElement('img', { src: _familyOwls2.default, alt: '' })
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-title' },
			_react2.default.createElement('img', { src: _pipiletHorizontal2.default, alt: '' })
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

	__REACT_HOT_LOADER__.register(HeaderTitle, 'HeaderTitle', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/home-page/components/header-title/header-title.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/home-page/components/header-title/header-title.jsx');
}();

;

/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _footer = __webpack_require__(7);

var _footer2 = _interopRequireDefault(_footer);

var _headerTitle = __webpack_require__(196);

var _headerTitle2 = _interopRequireDefault(_headerTitle);

var _displayImage = __webpack_require__(195);

var _displayImage2 = _interopRequireDefault(_displayImage);

var _family = __webpack_require__(409);

var _family2 = _interopRequireDefault(_family);

__webpack_require__(330);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HomeContainer = function HomeContainer() {

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_headerTitle2.default, null),
		_react2.default.createElement(_displayImage2.default, { image: _family2.default }),
		_react2.default.createElement(_footer2.default, null)
	);
};

var _default = HomeContainer;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(HomeContainer, 'HomeContainer', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/home-page/home-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/home-page/home-page.jsx');
}();

;

/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _iconDownload = __webpack_require__(16);

var _iconDownload2 = _interopRequireDefault(_iconDownload);

__webpack_require__(331);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderLyrics = function HeaderLyrics(_ref) {
	var title = _ref.title,
	    image = _ref.image,
	    imageFlag = _ref.imageFlag,
	    nameDownload = _ref.nameDownload,
	    download = _ref.download;

	var nameFile = nameDownload.toLowerCase() + '.pdf';

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-header-song' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-title-flag' },
			_react2.default.createElement(
				'div',
				{ className: 'wrapper-title' },
				_react2.default.createElement(
					'div',
					{ className: 'title-song' },
					title
				)
			),
			_react2.default.createElement(
				'div',
				{ className: 'flag-song' },
				_react2.default.createElement('img', { src: imageFlag, alt: title + '-image' })
			),
			_react2.default.createElement(
				'div',
				{ className: 'wrapper-icon-download' },
				_react2.default.createElement(
					'a',
					{ href: download, download: nameFile },
					_react2.default.createElement('img', { src: _iconDownload2.default, alt: title + '-image' })
				)
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-image-song' },
			_react2.default.createElement('img', { src: '' + image, alt: title + '-image' })
		)
	);
};

var _default = HeaderLyrics;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(HeaderLyrics, 'HeaderLyrics', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/header/header.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/header/header.jsx');
}();

;

/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(332);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InformationSong = function InformationSong(_ref) {
	var information = _ref.information;

	console.log('information ------> ', information);
	return _react2.default.createElement(
		'div',
		{ className: 'container-information-song' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-title-information' },
			information.title
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-rules' },
			information.description.map(function (item, index) {
				return _react2.default.createElement(
					'div',
					{ className: 'rules', key: index },
					item
				);
			})
		)
	);
};

var _default = InformationSong;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(InformationSong, 'InformationSong', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/information-song/information-song.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/information-song/information-song.jsx');
}();

;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayLyrics = function DisplayLyrics(_ref) {
	var cssExtraClassName = _ref.cssExtraClassName,
	    music = _ref.music,
	    width = _ref.width;

	return _react2.default.createElement(
		'div',
		{ style: { width: width }, className: cssExtraClassName },
		_react2.default.createElement(
			'div',
			{ className: 'lyrics-text' },
			_react2.default.createElement(
				'h1',
				null,
				music.title
			),
			music['second-title'] && _react2.default.createElement(
				'h1',
				null,
				music['second-title']
			),
			_react2.default.createElement(
				'h2',
				null,
				music.language
			),
			music.couplet.map(function (items, index) {
				return _react2.default.createElement(
					'p',
					{ key: index },
					items.map(function (item, index) {
						return _react2.default.createElement(
							'span',
							{ key: index, style: { display: 'block' } },
							item
						);
					})
				);
			})
		)
	);
};

var _default = DisplayLyrics;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(DisplayLyrics, 'DisplayLyrics', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/lyrics/component/display-lyrics/display-lyrics.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/lyrics/component/display-lyrics/display-lyrics.jsx');
}();

;

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _displayLyrics = __webpack_require__(200);

var _displayLyrics2 = _interopRequireDefault(_displayLyrics);

__webpack_require__(333);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LyricsSong = function LyricsSong(_ref) {
	var musicTranslated = _ref.musicTranslated,
	    musicOriginal = _ref.musicOriginal,
	    sameLyrics = _ref.sameLyrics;

	var widthWrapper = sameLyrics ? '50%' : '100%';
	var widthLyrics = !sameLyrics ? '50%' : '100%';

	return _react2.default.createElement(
		'div',
		{ style: { width: widthWrapper }, id: 'wrapper-lyrics-song' },
		_react2.default.createElement(_displayLyrics2.default, { cssExtraClassName: 'wrapper-original-language',
			music: musicOriginal, width: widthLyrics }),
		!sameLyrics && _react2.default.createElement(_displayLyrics2.default, { cssExtraClassName: 'wrapper-selected-language',
			music: musicTranslated,
			width: widthLyrics })
	);
};

var _default = LyricsSong;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(LyricsSong, 'LyricsSong', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/lyrics/lyrics.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/lyrics/lyrics.jsx');
}();

;

/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

__webpack_require__(334);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sheetMusic = function sheetMusic(_ref) {
	var sheet = _ref.sheet;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-sheet' },
		_react2.default.createElement('img', { src: sheet, alt: '', width: '1000' })
	);
};

var _default = sheetMusic;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(sheetMusic, 'sheetMusic', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/sheet/sheet.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/sheet/sheet.jsx');
}();

;

/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactYoutube = __webpack_require__(589);

var _reactYoutube2 = _interopRequireDefault(_reactYoutube);

var _pipiletSong = __webpack_require__(52);

var _pipiletSong2 = _interopRequireDefault(_pipiletSong);

__webpack_require__(335);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var VideoYoutube = function VideoYoutube(_ref) {
	var music = _ref.music,
	    sameLyrics = _ref.sameLyrics;

	return _react2.default.createElement(
		'div',
		{ style: { width: sameLyrics ? '50%' : '100%' }, id: 'wrapper-video-image' },
		_react2.default.createElement(
			'div',
			{ style: { width: sameLyrics ? '100%' : '50%' },
				className: 'wrapper-youtube-video' },
			_react2.default.createElement(_reactYoutube2.default, { className: 'youtube-video', videoId: music.youtubeId })
		),
		_react2.default.createElement(
			'div',
			{ style: {
					width: sameLyrics ? '100%' : '50%',
					marginTop: sameLyrics ? '60px' : ''
				},
				className: 'image-pipilet-song' },
			_react2.default.createElement('img', { src: _pipiletSong2.default, width: '250' })
		)
	);
};

var _default = VideoYoutube;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(VideoYoutube, 'VideoYoutube', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/video-youtube/video-youtube.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/components/video-youtube/video-youtube.jsx');
}();

;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _header = __webpack_require__(198);

var _header2 = _interopRequireDefault(_header);

var _lyrics = __webpack_require__(201);

var _lyrics2 = _interopRequireDefault(_lyrics);

var _videoYoutube = __webpack_require__(203);

var _videoYoutube2 = _interopRequireDefault(_videoYoutube);

var _informationSong = __webpack_require__(199);

var _informationSong2 = _interopRequireDefault(_informationSong);

var _sheet = __webpack_require__(202);

var _sheet2 = _interopRequireDefault(_sheet);

var _footer = __webpack_require__(7);

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var LyricsPage = function LyricsPage(_ref) {
	var songPageContent = _ref.songPageContent,
	    params = _ref.params;


	var language = params.language;
	var index = songPageContent.music.map(function (index) {
		return index.name;
	}).indexOf(language);
	var music = songPageContent.music[index];
	var musicTranslated = music['translated-song'];
	var musicOriginal = music['original-song'];
	var title = musicOriginal['second-title'] ? musicOriginal.title + ' ' + musicOriginal['second-title'] : musicOriginal.title;
	var sameLryics = musicTranslated.id === musicOriginal.id;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_header2.default, { title: title,
			image: musicOriginal.image,
			imageFlag: musicOriginal.flag,
			nameDownload: musicTranslated.title,
			download: musicTranslated.download }),
		_react2.default.createElement(_lyrics2.default, { musicTranslated: musicTranslated, musicOriginal: musicOriginal,
			sameLyrics: sameLryics }),
		_react2.default.createElement(_videoYoutube2.default, { music: musicOriginal, sameLyrics: sameLryics }),
		musicTranslated.information && _react2.default.createElement(_informationSong2.default, { information: musicTranslated.information }),
		musicOriginal.sheet && _react2.default.createElement(_sheet2.default, { sheet: musicOriginal.sheet }),
		_react2.default.createElement(_footer2.default, null)
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return state.ChooseLanguage;
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(LyricsPage);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(LyricsPage, 'LyricsPage', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/lyrics-page.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/lyrics-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/lyrics-page/lyrics-page.jsx');
}();

;

/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(12);

var _connect2 = _interopRequireDefault(_connect);

var _pipiletNumberColor = __webpack_require__(14);

var _pipiletNumberColor2 = _interopRequireDefault(_pipiletNumberColor);

var _section = __webpack_require__(56);

var _section2 = _interopRequireDefault(_section);

var _footer = __webpack_require__(7);

var _footer2 = _interopRequireDefault(_footer);

__webpack_require__(336);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NumberPage = function NumberPage(_ref) {
	var titleNumber = _ref.titleNumber,
	    imageNumber = _ref.imageNumber;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-number-page' },
		_react2.default.createElement(_section2.default, { path: '/number', image: imageNumber, title: titleNumber,
			logo: _pipiletNumberColor2.default, extraClassName: 'number' }),
		_react2.default.createElement(_footer2.default, null)
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		titleNumber: state.ChooseLanguage.numberPageContent.titleNumber,
		imageNumber: state.ChooseLanguage.numberPageContent.imageNumber
	};
};

var _default = (0, _connect2.default)(mapStateToProps)(NumberPage);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(NumberPage, 'NumberPage', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/number-page/number-page.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/number-page/number-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/number-page/number-page.jsx');
}();

;

/***/ }),
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

__webpack_require__(337);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PresentationPage = function PresentationPage(_ref) {
	var presentationPageContent = _ref.presentationPageContent;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-presentation-page' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-image-pipilet' },
			_react2.default.createElement('img', { src: presentationPageContent['image-pipilet'] })
		),
		presentationPageContent.text
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return state.ChooseLanguage;
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(PresentationPage);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(PresentationPage, 'PresentationPage', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/presentation-page/presentation-page.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/presentation-page/presentation-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/presentation-page/presentation-page.jsx');
}();

;

/***/ }),
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(10);

var _Link2 = _interopRequireDefault(_Link);

var _earthSnow = __webpack_require__(411);

var _earthSnow2 = _interopRequireDefault(_earthSnow);

__webpack_require__(338);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChooseFlag = function ChooseFlag(_ref) {
	var flag = _ref.flag;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-flag' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-circle' },
			_react2.default.createElement(
				'ul',
				{ className: 'circle-container' },
				flag.map(function (item, index) {
					return _react2.default.createElement(
						_Link2.default,
						{ to: '/song/' + item.name, key: index },
						_react2.default.createElement(
							'li',
							{ className: 'test' },
							_react2.default.createElement('img', { src: item.value })
						)
					);
				})
			),
			_react2.default.createElement('img', {
				src: _earthSnow2.default,
				className: 'children-earth' })
		)
	);
};

var _default = ChooseFlag;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ChooseFlag, 'ChooseFlag', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/song-page/components/choose-flag/choose-flag.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/song-page/components/choose-flag/choose-flag.jsx');
}();

;

/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(10);

var _Link2 = _interopRequireDefault(_Link);

var _note = __webpack_require__(375);

var _note2 = _interopRequireDefault(_note);

var _note3 = __webpack_require__(376);

var _note4 = _interopRequireDefault(_note3);

var _note5 = __webpack_require__(377);

var _note6 = _interopRequireDefault(_note5);

var _note7 = __webpack_require__(378);

var _note8 = _interopRequireDefault(_note7);

__webpack_require__(339);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DisplayLanguageSong = function DisplayLanguageSong(_ref) {
	var language = _ref.language;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-language' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-display-language' },
			_react2.default.createElement('img', { src: _note2.default, className: 'absolute-language note1' }),
			_react2.default.createElement('img', { src: _note4.default, className: 'absolute-language note2' }),
			_react2.default.createElement('img', { src: _note6.default, className: 'absolute-language note3' }),
			_react2.default.createElement('img', { src: _note8.default, className: 'absolute-language note4' }),
			_react2.default.createElement('img', { src: _note2.default, className: 'absolute-language note5' }),
			_react2.default.createElement('img', { src: _note8.default, className: 'absolute-language note6' }),
			_react2.default.createElement('img', { src: _note6.default, className: 'absolute-language note7' }),
			_react2.default.createElement('img', { src: _note2.default, className: 'absolute-language note8' }),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/english', className: 'scale absolute-language english' },
				_react2.default.createElement(
					'div',
					null,
					language.english
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/india', className: 'scale absolute-language indian' },
				_react2.default.createElement(
					'div',
					null,
					language.india
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/french', className: 'scale absolute-language french' },
				_react2.default.createElement(
					'div',
					null,
					language.french
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/lebanon', className: 'scale absolute-language arab' },
				_react2.default.createElement(
					'div',
					null,
					language.arab
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/ghana', className: 'scale absolute-language african' },
				_react2.default.createElement(
					'div',
					null,
					language.africa
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/serbia', className: 'scale absolute-language serbia' },
				_react2.default.createElement(
					'div',
					null,
					language.serbia
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/italy', className: 'scale absolute-language italian' },
				_react2.default.createElement(
					'div',
					null,
					language.italy
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/spanish', className: 'scale absolute-language spanish' },
				_react2.default.createElement(
					'div',
					null,
					language.spanish
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/china', className: 'scale absolute-language china' },
				_react2.default.createElement(
					'div',
					null,
					language.china
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/german', className: 'scale absolute-language germany' },
				_react2.default.createElement(
					'div',
					null,
					language.german
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/russia', className: 'scale absolute-language russian' },
				_react2.default.createElement(
					'div',
					null,
					language.russia
				)
			),
			_react2.default.createElement(
				_Link2.default,
				{ to: '/song/brasil', className: 'scale absolute-language portuguese' },
				_react2.default.createElement(
					'div',
					null,
					language.portugal
				)
			)
		)
	);
};

var _default = DisplayLanguageSong;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(DisplayLanguageSong, 'DisplayLanguageSong', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/song-page/components/display-language/display-language.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/song-page/components/display-language/display-language.jsx');
}();

;

/***/ }),
/* 209 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _pipiletSong = __webpack_require__(52);

var _pipiletSong2 = _interopRequireDefault(_pipiletSong);

var _headerPage = __webpack_require__(15);

var _headerPage2 = _interopRequireDefault(_headerPage);

var _footer = __webpack_require__(7);

var _footer2 = _interopRequireDefault(_footer);

var _displayLanguage = __webpack_require__(208);

var _displayLanguage2 = _interopRequireDefault(_displayLanguage);

var _chooseFlag = __webpack_require__(207);

var _chooseFlag2 = _interopRequireDefault(_chooseFlag);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SongPage = function SongPage(_ref) {
	var title = _ref.title,
	    language = _ref.language,
	    flag = _ref.flag;

	return _react2.default.createElement(
		'div',
		null,
		_react2.default.createElement(_headerPage2.default, { title: title, logo: _pipiletSong2.default }),
		_react2.default.createElement(_displayLanguage2.default, { language: language }),
		_react2.default.createElement(_chooseFlag2.default, { flag: flag }),
		_react2.default.createElement(_footer2.default, null)
	);
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		title: state.ChooseLanguage.songPageContent.title,
		language: state.ChooseLanguage.songPageContent.language,
		flag: state.ChooseLanguage.songPageContent.flag
	};
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(SongPage);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(SongPage, 'SongPage', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/song-page/song-page.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/song-page/song-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/song-page/song-page.jsx');
}();

;

/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Drawing = function Drawing(_ref) {
	var draw = _ref.draw;

	return _react2.default.createElement(
		"div",
		{ id: "wrapper-drawing" },
		draw.map(function (item, index) {
			return _react2.default.createElement("img", { key: index, src: item });
		})
	);
};

var _default = Drawing;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Drawing, "Drawing", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/drawing/drawing.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/drawing/drawing.jsx");
}();

;

/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GridWord = function GridWord(_ref) {
	var grid = _ref.grid;

	return _react2.default.createElement(
		"div",
		{ id: "wrapper-grid-word" },
		_react2.default.createElement(
			"table",
			null,
			_react2.default.createElement(
				"tbody",
				null,
				grid.map(function (items, index) {
					return _react2.default.createElement(
						"tr",
						{ key: index },
						items.map(function (item, index) {
							return _react2.default.createElement(
								"td",
								{ key: index },
								item
							);
						})
					);
				})
			)
		)
	);
};

var _default = GridWord;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(GridWord, "GridWord", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/game/components/mot-croise/components/grid-word/grid-word.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/game/components/mot-croise/components/grid-word/grid-word.jsx");
}();

;

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ListWords = function ListWords(_ref) {
	var words = _ref.words,
	    language = _ref.language,
	    widthListWork = _ref.widthListWork;

	return _react2.default.createElement(
		"div",
		{ style: { width: widthListWork }, id: "wrapper-list-word" },
		_react2.default.createElement(
			"div",
			{ className: "list-word" },
			_react2.default.createElement(
				"table",
				null,
				_react2.default.createElement(
					"thead",
					null,
					_react2.default.createElement(
						"tr",
						null,
						_react2.default.createElement(
							"th",
							null,
							language
						)
					)
				),
				_react2.default.createElement(
					"tbody",
					null,
					words.map(function (word, index) {
						return _react2.default.createElement(
							"tr",
							{ key: index },
							_react2.default.createElement(
								"td",
								null,
								word
							)
						);
					})
				)
			)
		)
	);
};

var _default = ListWords;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ListWords, "ListWords", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/game/components/mot-croise/components/list-word/list-word.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/game/components/mot-croise/components/list-word/list-word.jsx");
}();

;

/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _listWord = __webpack_require__(212);

var _listWord2 = _interopRequireDefault(_listWord);

var _gridWord = __webpack_require__(211);

var _gridWord2 = _interopRequireDefault(_gridWord);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MotCroise = function MotCroise(_ref) {
	var original = _ref.original,
	    translated = _ref.translated,
	    sameLanguage = _ref.sameLanguage,
	    secondLanguage = _ref.secondLanguage,
	    firstLanguage = _ref.firstLanguage;

	var widthListWork = sameLanguage ? '' : '50%';

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-mot-croise' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-word' },
			_react2.default.createElement(_listWord2.default, { words: original.words, language: firstLanguage,
				widthListWork: widthListWork }),
			!sameLanguage && _react2.default.createElement(_listWord2.default, { words: translated.words, language: secondLanguage,
				widthListWork: widthListWork })
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-grid' },
			_react2.default.createElement(_gridWord2.default, { grid: translated.grid })
		)
	);
};

var _default = MotCroise;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(MotCroise, 'MotCroise', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/game/components/mot-croise/mot-croise.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/game/components/mot-croise/mot-croise.jsx');
}();

;

/***/ }),
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _motCroise = __webpack_require__(213);

var _motCroise2 = _interopRequireDefault(_motCroise);

__webpack_require__(340);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Game = function Game(_ref) {
	var originalGame = _ref.originalGame,
	    translatedGame = _ref.translatedGame,
	    sameLanguage = _ref.sameLanguage,
	    secondLanguage = _ref.secondLanguage,
	    firstLanguage = _ref.firstLanguage;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-game' },
		_react2.default.createElement(_motCroise2.default, { firstLanguage: firstLanguage, secondLanguage: secondLanguage,
			original: originalGame, translated: translatedGame,
			sameLanguage: sameLanguage })
	);
};

var _default = Game;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(Game, 'Game', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/game/game.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/game/game.jsx');
}();

;

/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _pipiletNumberColor = __webpack_require__(14);

var _pipiletNumberColor2 = _interopRequireDefault(_pipiletNumberColor);

var _pipiletHorizontal = __webpack_require__(393);

var _pipiletHorizontal2 = _interopRequireDefault(_pipiletHorizontal);

var _iconDownload = __webpack_require__(16);

var _iconDownload2 = _interopRequireDefault(_iconDownload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderColor = function HeaderColor(_ref) {
	var title = _ref.title,
	    rules = _ref.rules,
	    download = _ref.download,
	    nameDownload = _ref.nameDownload;

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-header' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-image-pipilet' },
			_react2.default.createElement('img', { src: _pipiletNumberColor2.default, alt: '' })
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-title-rules' },
			_react2.default.createElement(
				'div',
				{ className: 'wrapper-title' },
				title
			),
			_react2.default.createElement(
				'div',
				{ className: 'wrapper-logo-pipilet' },
				_react2.default.createElement('img', { src: _pipiletHorizontal2.default })
			),
			_react2.default.createElement(
				'div',
				{ className: 'wrapper-rules-download' },
				_react2.default.createElement(
					'div',
					{ className: 'wrapper-rules' },
					rules.map(function (rule, index) {
						return _react2.default.createElement(
							'div',
							{ key: index },
							rule
						);
					})
				),
				_react2.default.createElement(
					'div',
					{ className: 'wrapper-download' },
					_react2.default.createElement(
						'a',
						{ href: download, download: nameDownload },
						_react2.default.createElement('img', { src: _iconDownload2.default })
					)
				)
			)
		)
	);
};

var _default = HeaderColor;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(HeaderColor, 'HeaderColor', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/header/header.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/header/header.jsx');
}();

;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ColumnTable = function ColumnTable(_ref) {
	var color = _ref.color,
	    images = _ref.images,
	    title = _ref.title,
	    subTitle = _ref.subTitle;

	return _react2.default.createElement(
		"table",
		null,
		_react2.default.createElement(
			"thead",
			null,
			_react2.default.createElement(
				"tr",
				null,
				_react2.default.createElement(
					"td",
					null,
					!subTitle && title,
					subTitle && _react2.default.createElement(
						"div",
						null,
						subTitle
					)
				)
			)
		),
		_react2.default.createElement(
			"tbody",
			null,
			color && color.map(function (item, index) {
				return _react2.default.createElement(
					"tr",
					{ key: index },
					_react2.default.createElement(
						"td",
						null,
						item
					)
				);
			}),
			images && images.map(function (item, index) {
				return _react2.default.createElement(
					"tr",
					{ key: index },
					_react2.default.createElement(
						"td",
						null,
						_react2.default.createElement("img", { src: item, alt: "" })
					)
				);
			})
		)
	);
};

var _default = ColumnTable;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ColumnTable, "ColumnTable", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/table/component/table/table.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/table/component/table/table.jsx");
}();

;

/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _table = __webpack_require__(216);

var _table2 = _interopRequireDefault(_table);

var _black = __webpack_require__(348);

var _black2 = _interopRequireDefault(_black);

var _blue = __webpack_require__(349);

var _blue2 = _interopRequireDefault(_blue);

var _brown = __webpack_require__(351);

var _brown2 = _interopRequireDefault(_brown);

var _green = __webpack_require__(357);

var _green2 = _interopRequireDefault(_green);

var _orange = __webpack_require__(361);

var _orange2 = _interopRequireDefault(_orange);

var _pink = __webpack_require__(362);

var _pink2 = _interopRequireDefault(_pink);

var _purple = __webpack_require__(363);

var _purple2 = _interopRequireDefault(_purple);

var _red = __webpack_require__(364);

var _red2 = _interopRequireDefault(_red);

var _white = __webpack_require__(371);

var _white2 = _interopRequireDefault(_white);

var _yellow = __webpack_require__(372);

var _yellow2 = _interopRequireDefault(_yellow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableColor = function TableColor(_ref) {
	var originalColor = _ref.originalColor,
	    translatedColor = _ref.translatedColor,
	    sameLanguage = _ref.sameLanguage,
	    headerFirstColumn = _ref.headerFirstColumn,
	    headerThirdColumn = _ref.headerThirdColumn,
	    headerFourColumn = _ref.headerFourColumn,
	    subTitle = _ref.subTitle;


	var colors = [_red2.default, _yellow2.default, _white2.default, _blue2.default, _orange2.default, _green2.default, _black2.default, _brown2.default, _purple2.default, _pink2.default];

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-table' },
		_react2.default.createElement(_table2.default, { images: colors,
			title: headerFirstColumn + ' ' + headerThirdColumn }),
		_react2.default.createElement(_table2.default, { color: originalColor.data.colors, title: originalColor.name }),
		!sameLanguage && _react2.default.createElement(_table2.default, { color: translatedColor.colors, title: headerThirdColumn,
			subTitle: subTitle }),
		headerFourColumn && _react2.default.createElement(_table2.default, { color: translatedColor.write, title: headerFourColumn })
	);
};

var _default = TableColor;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(TableColor, 'TableColor', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/table/table.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/components/table/table.jsx');
}();

;

/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _color = __webpack_require__(229);

var _color2 = _interopRequireDefault(_color);

var _header = __webpack_require__(215);

var _header2 = _interopRequireDefault(_header);

var _table = __webpack_require__(217);

var _table2 = _interopRequireDefault(_table);

var _game = __webpack_require__(214);

var _game2 = _interopRequireDefault(_game);

var _drawing = __webpack_require__(210);

var _drawing2 = _interopRequireDefault(_drawing);

__webpack_require__(341);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TranslatedColor = function TranslatedColor(_ref) {
	var colorPage = _ref.colorPage,
	    translatedColor = _ref.translatedColor;


	var sameLanguage = colorPage.originalLanguage.id == translatedColor.id;
	var idTranslatedColor = translatedColor.id;
	var index = colorPage.translated.map(function (index) {
		return index.id;
	}).indexOf(idTranslatedColor);
	var colorTranslated = colorPage.translated[index];

	return _react2.default.createElement(
		'div',
		{ id: 'wrapper-translated-color' },
		_react2.default.createElement(_header2.default, {
			title: colorPage.title,
			rules: colorPage.rules,
			download: colorTranslated.download,
			nameDownload: colorTranslated.name + ' COLOR.pdf'
		}),
		_react2.default.createElement(_table2.default, {
			headerFirstColumn: colorPage.headerFirstColumn,
			headerThirdColumn: colorTranslated.name,
			headerFourColumn: colorTranslated.subSubTitle,
			subTitle: colorTranslated.subTitle,
			originalColor: colorPage.originalLanguage,
			translatedColor: translatedColor,
			sameLanguage: sameLanguage
		}),
		translatedColor.game && _react2.default.createElement(_game2.default, {
			originalGame: colorPage.originalLanguage.data.game,
			translatedGame: translatedColor.game,
			sameLanguage: sameLanguage,
			secondLanguage: colorTranslated.name,
			firstLanguage: colorPage.originalLanguage.name }),
		_react2.default.createElement(_drawing2.default, { draw: translatedColor.drawing })
	);
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		translatedColor: _color2.default[props.params.language],
		colorPage: state.ChooseLanguage.colorTranslatedPageContent
	};
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(TranslatedColor);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(TranslatedColor, 'TranslatedColor', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/translated-color-page.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/translated-color-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-color-page/translated-color-page.jsx');
}();

;

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _bookNumber = __webpack_require__(413);

var _bookNumber2 = _interopRequireDefault(_bookNumber);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderNumber = function HeaderNumber(_ref) {
	var title = _ref.title,
	    flag = _ref.flag;

	return _react2.default.createElement(
		'div',
		{ className: 'wrapper-flag-title-book' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-flag' },
			_react2.default.createElement('img', { src: flag, alt: '' })
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-title' },
			_react2.default.createElement(
				'h1',
				null,
				title
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-book-number' },
			_react2.default.createElement('img', { src: _bookNumber2.default, alt: '' })
		)
	);
};

var _default = HeaderNumber;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(HeaderNumber, 'HeaderNumber', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/header/header.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/header/header.jsx');
}();

;

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BigDraw = function BigDraw(_ref) {
	var draw = _ref.draw;

	return _react2.default.createElement(
		"div",
		{ className: "wrapper-big-draw" },
		_react2.default.createElement("img", { src: draw })
	);
};

var _default = BigDraw;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(BigDraw, "BigDraw", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/big-draw/big-draw.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/big-draw/big-draw.jsx");
}();

;

/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FirstTable = function FirstTable(_ref) {
	var language = _ref.language;

	return _react2.default.createElement(
		"table",
		{ className: "first-table" },
		_react2.default.createElement(
			"tbody",
			null,
			language.numbers.map(function (number, index) {
				return _react2.default.createElement(
					"tr",
					{ key: index },
					number.map(function (item, index) {
						return _react2.default.createElement(
							"td",
							{ key: index },
							_react2.default.createElement(
								"span",
								{ className: "letter-dot" },
								item.letter,
								"."
							),
							" ",
							item.value
						);
					})
				);
			})
		)
	);
};

var _default = FirstTable;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(FirstTable, "FirstTable", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/first-table/first-table.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/first-table/first-table.jsx");
}();

;

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FourTable = function FourTable(_ref) {
	var language = _ref.language;
	return _react2.default.createElement(
		"div",
		{ className: "wrapper-fourth-table" },
		_react2.default.createElement(
			"table",
			{ className: "fourth-table" },
			_react2.default.createElement(
				"tbody",
				null,
				language.exercice.map(function (item, index) {
					return _react2.default.createElement(
						"tr",
						{ key: index },
						_react2.default.createElement(
							"td",
							{ className: "exercice-number" },
							_react2.default.createElement(
								"span",
								null,
								item.letter
							)
						),
						_react2.default.createElement(
							"td",
							null,
							_react2.default.createElement(
								"span",
								null,
								item.value
							)
						)
					);
				})
			)
		)
	);
};

var _default = FourTable;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(FourTable, "FourTable", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/four-table/four-table.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/four-table/four-table.jsx");
}();

;

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _handWriteLogo = __webpack_require__(412);

var _handWriteLogo2 = _interopRequireDefault(_handWriteLogo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HandWriteLogo = function HandWriteLogo() {
	return _react2.default.createElement(
		'div',
		{ className: 'wrapper-logo' },
		_react2.default.createElement('img', { src: _handWriteLogo2.default, alt: '' })
	);
};

var _default = HandWriteLogo;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(HandWriteLogo, 'HandWriteLogo', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/hand-write-logo/hand-write-logo.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/hand-write-logo/hand-write-logo.jsx');
}();

;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _iconDownload = __webpack_require__(16);

var _iconDownload2 = _interopRequireDefault(_iconDownload);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SecondTable = function SecondTable(_ref) {
	var language = _ref.language,
	    draw = _ref.draw,
	    download = _ref.download;

	return _react2.default.createElement(
		'div',
		{ className: 'wrapper-second-table' },
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-logo-download' },
			_react2.default.createElement(
				'a',
				{
					href: download,
					download: download
				},
				_react2.default.createElement('img', { src: _iconDownload2.default, className: 'little-draw' })
			)
		),
		_react2.default.createElement(
			'table',
			{ className: 'second-table' },
			_react2.default.createElement(
				'tbody',
				null,
				language['ten-numbers'].map(function (item, index) {
					return _react2.default.createElement(
						'tr',
						{ key: index },
						_react2.default.createElement(
							'td',
							null,
							_react2.default.createElement(
								'span',
								{ className: 'letter-dot' },
								item.letter,
								'.'
							),
							' ',
							item.value
						)
					);
				})
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-little-draw' },
			_react2.default.createElement('img', { src: draw, className: 'little-draw' })
		)
	);
};

var _default = SecondTable;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(SecondTable, 'SecondTable', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/second-table/second-table.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/second-table/second-table.jsx');
}();

;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ThirdTable = function ThirdTable(_ref) {
	var language = _ref.language;
	return _react2.default.createElement(
		"div",
		{ className: "wrapper-third-table" },
		_react2.default.createElement(
			"table",
			{ className: "third-table" },
			_react2.default.createElement(
				"tbody",
				null,
				language.operator.map(function (item, index) {
					return _react2.default.createElement(
						"tr",
						{ key: index },
						_react2.default.createElement(
							"td",
							null,
							_react2.default.createElement(
								"span",
								{ className: "letter-dot" },
								item.letter
							)
						),
						_react2.default.createElement(
							"td",
							null,
							_react2.default.createElement(
								"span",
								null,
								item.value
							)
						)
					);
				})
			)
		)
	);
};

var _default = ThirdTable;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(ThirdTable, "ThirdTable", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/third-table/third-table.jsx");

	__REACT_HOT_LOADER__.register(_default, "default", "/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/component/third-table/third-table.jsx");
}();

;

/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _firstTable = __webpack_require__(221);

var _firstTable2 = _interopRequireDefault(_firstTable);

var _secondTable = __webpack_require__(224);

var _secondTable2 = _interopRequireDefault(_secondTable);

var _thirdTable = __webpack_require__(225);

var _thirdTable2 = _interopRequireDefault(_thirdTable);

var _fourTable = __webpack_require__(222);

var _fourTable2 = _interopRequireDefault(_fourTable);

var _handWriteLogo = __webpack_require__(223);

var _handWriteLogo2 = _interopRequireDefault(_handWriteLogo);

var _bigDraw = __webpack_require__(220);

var _bigDraw2 = _interopRequireDefault(_bigDraw);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableNumber = function TableNumber(_ref) {
	var language = _ref.language,
	    littleDraw = _ref.littleDraw,
	    bigDraw = _ref.bigDraw,
	    download = _ref.download;

	return _react2.default.createElement(
		'div',
		{ id: 'table-number' },
		_react2.default.createElement(_firstTable2.default, { language: language }),
		_react2.default.createElement(_secondTable2.default, { language: language, draw: littleDraw, download: download }),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-third-four' },
			_react2.default.createElement(_thirdTable2.default, { language: language }),
			_react2.default.createElement(_fourTable2.default, { language: language })
		),
		_react2.default.createElement(_handWriteLogo2.default, null),
		_react2.default.createElement(_bigDraw2.default, { draw: bigDraw })
	);
};

var _default = TableNumber;
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(TableNumber, 'TableNumber', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/table.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/components/table/table.jsx');
}();

;

/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(6);

var _number = __webpack_require__(268);

var _number2 = _interopRequireDefault(_number);

var _header = __webpack_require__(219);

var _header2 = _interopRequireDefault(_header);

var _table = __webpack_require__(226);

var _table2 = _interopRequireDefault(_table);

__webpack_require__(342);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TranslatedNumber = function TranslatedNumber(_ref) {
	var numbers = _ref.numbers;

	return _react2.default.createElement(
		'div',
		{ id: 'translated-number' },
		_react2.default.createElement(_header2.default, { title: numbers.header, flag: numbers.flag }),
		_react2.default.createElement(_table2.default, {
			download: numbers.download,
			language: numbers,
			littleDraw: numbers.draw['little-draw'],
			bigDraw: numbers.draw['big-draw']
		})
	);
};

var mapStateToProps = function mapStateToProps(state, props) {
	return {
		numbers: _number2.default[props.params.language]
	};
};

var _default = (0, _reactRedux.connect)(mapStateToProps)(TranslatedNumber);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(TranslatedNumber, 'TranslatedNumber', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/translated-number-page.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/translated-number-page.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/translated-number-page/translated-number-page.jsx');
}();

;

/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _connect = __webpack_require__(12);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WhoAreWe = function WhoAreWe(_ref) {
	var WhoarewePageContent = _ref.WhoarewePageContent;
	return WhoarewePageContent.whoarewe;
};

var mapStateToProps = function mapStateToProps(state) {
	return state.ChooseLanguage;
};

var _default = (0, _connect2.default)(mapStateToProps)(WhoAreWe);

exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(WhoAreWe, 'WhoAreWe', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/who-are-we/who-we-are.jsx');

	__REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/who-are-we/who-we-are.jsx');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/scenes/who-are-we/who-we-are.jsx');
}();

;

/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _french = __webpack_require__(61);

var _french2 = _interopRequireDefault(_french);

var _spanish = __webpack_require__(68);

var _spanish2 = _interopRequireDefault(_spanish);

var _german = __webpack_require__(62);

var _german2 = _interopRequireDefault(_german);

var _india = __webpack_require__(63);

var _india2 = _interopRequireDefault(_india);

var _english = __webpack_require__(60);

var _english2 = _interopRequireDefault(_english);

var _china = __webpack_require__(59);

var _china2 = _interopRequireDefault(_china);

var _brasil = __webpack_require__(58);

var _brasil2 = _interopRequireDefault(_brasil);

var _italy = __webpack_require__(64);

var _italy2 = _interopRequireDefault(_italy);

var _serbia = __webpack_require__(66);

var _serbia2 = _interopRequireDefault(_serbia);

var _southAfrica = __webpack_require__(67);

var _southAfrica2 = _interopRequireDefault(_southAfrica);

var _russia = __webpack_require__(65);

var _russia2 = _interopRequireDefault(_russia);

var _tanzania = __webpack_require__(69);

var _tanzania2 = _interopRequireDefault(_tanzania);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	french: _french2.default,
	spanish: _spanish2.default,
	german: _german2.default,
	india: _india2.default,
	english: _english2.default,
	china: _china2.default,
	brasil: _brasil2.default,
	italy: _italy2.default,
	serbia: _serbia2.default,
	southAfrica: _southAfrica2.default,
	russia: _russia2.default,
	tanzania: _tanzania2.default
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/color/index.js');
}();

;

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _usa = __webpack_require__(121);

var _usa2 = _interopRequireDefault(_usa);

var _usa3 = __webpack_require__(122);

var _usa4 = _interopRequireDefault(_usa3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETTES DES USA',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'DONUTS',
		image: _usa2.default,

		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['1 kg de farine', '400 g d’eau à température ambiante', '90 g de sucre blanc', '12 g de sel', '20 g de levure', '100 g d’oeuf (mélanger 2 oeufs moyens peser et retirer l’excédent)', '70 g de beurre à température ambiante', '10 g de zestes de citron', '3 g de cannelle en poudre', 'Huile de tournesol ou d’arachide pour frire']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Mettre tous les ingrédients à l’exception du beurre dans un grand saladier et mélanger le tout à la main. Malaxer à une main en un mouvement des doigts enveloppant jusqu’à complète intégration de la farine dans la pâte.', 'Au besoin, il est possible d’ajouter un peu de farine afin que la pâte se forme, le volume étant très variable en fonction du type de farine utilisé. La pâte doit être ferme et élastique à la fois. Elle doit être facile à travailler. Une fois la pâte terminée, la filmer avec une feuille alimentaire et laisser reposer 10 minutes au réfrigérateur.', 'Masser la pâte sur le plan de travail bien fariné et remettre au réfrigérateur.', 'Recommencer trois fois et ajouter le beurre pommade. Masser jusqu’à ce que la surface de la pâte soit totalement lisse. Filmer à nouveau et laisser reposer 10 minutes au réfrigérateur.', 'Etaler la pâte au rouleau à une épaisseur de 1 cm et couper autant de pièces que possible. Elles peuvent se congeler parfaitement et frire quand on le souhaite.', 'Pour les morceaux qu’on souhaite cuire, les placer sur un papier cuisson et les laisser monter à température ambiante environ une heure.', 'Faire chauffer l’huile de friture. Nous arrivons alors au point clé: l’huile doit être chaude mais pas trop car sinon les donuts deviennent trop foncés à l’extérieur alors qu’ils ne seront pas cuits à l’intérieur. Faire quelques essais en laissant frire les donuts environ deux minutes avec normalement une température de l’huile autour des 180°C.', 'Sortir les Donuts de la friteuse avec un écumoir laisser refroidir sur une grille. Suapoudrer de sucre,  chocolat ou sucre glace mélangé à de l’eau dans une proportion de 1 dose d’eau pour 4 de sucre glace.']
		}]
	}, {
		title: 'New York Cheesecake',
		image: _usa4.default,
		sectionIngredient: [{
			title: 'Ingrédients:',
			ingredient: ['Un paquet de biscuit au beurre type Petit Lu', '85 gr de beurre', '900 gr de fromage frais, type Philadelphia', '200 ml de crème fraîche (o yaourt à la grecque)', '250 gr de sucre', '3 oeufs', 'jus d’un demi citron', '3 cuillères à soupe de farine pour pâtisserie', 'une pincée de vanille', '300 gr de framboises (fraîches ou congelées)', 'jus d’un demi citron', 'une feuille de gélatine', '3 cuillères à soupe de sucre.']
		}],
		sectionPreparation: [{
			title: 'Préparation:',
			preparation: ['Préchauffer le four à 200 oC.', 'Pour la base, broyer les biscuits jusqu’à obtenir une fine poudre de biscuit.', 'Faire fondre le beurre et l’ajouter à la poudre de biscuit. Mélanger et enfoncer le fond du moule à charnière de 20 à 24 cm préalablement recouvert de papier cuisson. Placer l’ensemble au congélateur pendant que nous préparons la garniture.', 'Battre le fromage frais au fouet et ajouter le sucre, la crème fraîche (ou le yaourt grec), la vanille, le citron et la farine. Ajouter les oeufs un à un en remuant doucement jusqu’à complète intégration. La préparation doit être lisse. Verser toute la préparation sur la base de biscuit préparé précédemment.', 'Placer le gâteau au four et laisser chauffer 10 minutes à 200°C puis baisser la température 90°C et laisser cuire 30 minutes de plus. La préparation doit alors ressembler à un flan au centre quand on la secoue.', 'Eteindre le four et laisser le Cheesecake dans le four plusieurs heures jusqu’à complet refroidissement. Une fois à température ambiante, placer le Cheesecake au réfrigérateur jusqu’à ce qu’il devienne complètement froid (l’idéal est de faire le gâteau la veille).', 'En dernier il faut préparer le coulis de framboise. Hydrater la feuille de gélatine dans de l’eau froide pendant 5mn.', 'Dans une casserole, faire chauffer les framboises avec le jus de citron et le sucre. Remuer constamment et écraser les framboises en même temps.', 'Si les pépins de framboise vous gênent vous pouvez passer à la passoire le coulis à cette étape.', 'Lorsque le coulis est bien chaud, essorer la gélatine et l’incorporer à la préparation. Mélanger jusqu’à complète dissolution.', 'Verser alors le coulis de framboise sur le Cheesecake et replacer au réfrigérateur jusqu’au moment du service.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/fr/america/usa.js');
}();

;

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _algerie = __webpack_require__(104);

var _algerie2 = _interopRequireDefault(_algerie);

var _algerie3 = __webpack_require__(105);

var _algerie4 = _interopRequireDefault(_algerie3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETAS ARGELINAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Dátiles rellenos de pasta de almendras',
		image: _algerie2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['40 dátiles sin hueso (dependiendo del tamaño)', '150 gramos de almendra molida en polvo', '150 gramos de azúcar glas', '1 cuchara grande de margarina a temperatura ambiente', 'Unas gotitas de agua de azahar', '1 clara de huevo', '50 gramos de azúcar normal (para decorar)', 'colorante alimenticio (opcional)']
		}],
		sectionPreparation: [{
			title: 'Preparación de la macedonia de frutas tropicales helada:',
			preparation: ['En un recipiente mezclamos la almendra molida con el azúcar glas y mezclamos.', 'Añadimos la margarina, la clara de huevo y unas gotitas de agua de azahar al gusto. Mezclamos con las manos hasta obtener una pasta de almendras homogénea. Mucha gente le pone colorantes alimentarios a la masa para hacer dátiles de distintos colores.', 'Cogemos un poco de pasta de almendra y le damos la forma de un dátil.', 'Abrimos el dátil y lo rellenamos con la pasta de almendras.', 'Cuando los tengamos todos rellenos cogemos un cuchillo muy afilado y trazamos algunas estrías en la parte que sobresale de la pasta de dátil para decorarlo.', 'Cuando estén todos decorados con estrías los pasamos por azúcar normal para decorarlos.']
		}]
	}, {
		title: 'Tarta de galletas y chocolate',
		image: _algerie4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Un paquete de galletas redondas.', '100 grs de chocolate de cobertura.', '300 grs de mantequilla.', '150 grs de azúcar.', '2 huevos.', '50 grs de cacao en polvo']
		}],
		sectionPreparation: [{
			title: 'Receta:',
			preparation: ['Utilizar un molde de cristal.', 'En un recipiente apto para microondas, derretir la mantequilla y el chocolate cortado en trozos hasta que se funda, retirar y añadir los huevos, el azúcar y el cacao en polvo. Batir bien.', 'Poner una capa de esta mezcla en el fondo del molde cubrir con una capa de galletas, por capa así sucesivamente acabando con una capa de chocolate.', 'Una vez terminada, ponerla en el frigorífico hasta que quede bien consistente.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/africa/algerie.js');
}();

;

/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _benin = __webpack_require__(106);

var _benin2 = _interopRequireDefault(_benin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETA DE BENIN',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'BANANAS DULCES EN SALSA DE NARANJA',
		image: _benin2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['4 plátanos poco maduros.', '1⁄2 taza de jugo de naranja recién exprimido', '1 cucharada de jugo de limón fresco exprimido', '1⁄2 taza de azúcar morena', 'Helado de vainilla']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Calentar el jugo de naranja, jugo de limón y el azúcar moreno en una sartén durante unos 15 minutos. Debe reducir y espesar en un jarabe.', 'Pelar los plátanos o bananas, cortándolos por la mitad y cocinar en el jarabe hasta que se caliente.', 'Servir inmediatamente sobre el helado de vainilla.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/africa/benin.js');
}();

;

/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS EGIPCIAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'GUZEYA',
		// image: image,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1 vaso de coco rallado', '1 vaso de azúcar', 'Clara de 2 huevos', 'Esencia de vainilla', 'Mantequilla en cantidad necesaria.', 'Aceite en cantidad necesaria.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Batir la clara hasta que se endurezca.', 'En un recipiente aparte mezclar el coco, el azúcar y la vainilla.', 'Añadir la clara con movimiento envolvente para unificar.', 'Untar el molde con aceite o mantequilla derridita, poner la masa igualando la superficie, untar con aceite y meter en el horno a temperatura mediana.', 'Cuando esté la superficie tostada, sacar del horno y volcar La Guzeya en un plato.', 'Servir fría.']
		}]
	}, {
		title: 'Arroz con leche y frutos secos',
		// image: image,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['2 vasos de arroz', '1 vaso de azúcar', '1 vaso de leche', '1 cucharada grande de aceite', 'Frutos secos machacados']
		}],
		sectionPreparation: [{
			title: 'Receta:',
			preparation: ['Moler el arroz 2/ 3 veces.', 'Añadir leche, azúcar y aceite y poner al fuego moviendo constantemente.', 'Bajar la temperatura hasta que forme una masa.', 'Untar el molde con aceite, esparcir los frutos secos, poner la masa, igualar la superficie con lamano.', 'Untar la superficie con aceite, esparcir frutos secos y meter en el horno hasta que esté tostada.', 'Servir fría.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/africa/egypte.js');
}();

;

/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _kenya = __webpack_require__(107);

var _kenya2 = _interopRequireDefault(_kenya);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETA DE KENIA',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'MANGO HELADO',
		image: _kenya2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['2 tazas de mangos .', 'Un brick mediano de nata.', 'Azúcar.', 'Cáscara de limón.', 'Leche condensada.', 'Sal.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Machacar las 2 tazas de mango, haciendo un puré de ellos.', 'En la batidora echar la nata, 1/2 taza de azúcar hasta quedar bien espesa.', 'Unir al puré de los mangos 2 cucharadas de cáscara de limón finas, 1/2 taza de leche condensada y media cucharilla de sal.', 'Unir la nata con todo ello y ponerlo en el congelador.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/africa/kenya.js');
}();

;

/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _malagasy = __webpack_require__(108);

var _malagasy2 = _interopRequireDefault(_malagasy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETA DE MADAGASCAR',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'TORTA MAGALASY DE MADAGASCAR',
		image: _malagasy2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['2 tazas de leche', '1 vaina de vainilla', '4 cucharadas de azúcar', '1 pizca de nuez moscada', '1 pizca de clavo de olor', '5 cucharadas de tapioca', '2 cucharadas de crema', '4 bananas bien maduras', '30 g de mantequilla', '4 huevos']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Mezclar en una cacerola, la leche, la vainilla, el azúcar, la nuez moscada y el clavo, llevar a punto de ebullición.', 'Retirar del fuego, agregar la tapioca a la mezcla y volver a poner a fuego lento, dejar cocer 10 minutos, y revolver de vez en cuando.', 'Mientras se cocina la tapioca, precalentar el horno a 180 grados.', 'Retire la tapioca de fuego, retirar la vaina de vainilla y agregar la crema.', 'Hacer un puré con las bananas y agregarlas a la tapioca.', 'Enmantecar un molde.', 'Incorporar los huevos, uno a uno a la mezcla mientras se bate con una espátula.', 'Cocinar por 20 minutos.', 'Servir caliente o tibia en el plato de Postre.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/africa/malagasy.js');
}();

;

/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _maroc = __webpack_require__(109);

var _maroc2 = _interopRequireDefault(_maroc);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS MARROQUIES',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Bizcocho de limón',
		image: _maroc2.default,

		sectionIngredient: [{
			title: 'Ingrediente:',
			ingredient: ['200 g harina.', '150 g azúcar.', '100 ml de aceite.', '4 huevos.', 'ralladura de un limón.', '2 cucharadas de zumo de limón.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Dentro de un bol echamos los huevos y el azúcar, mezclamos todo muy bien, después añadimos el aceite, la ralladura de limón y dos cucharadas de zumo de limón, mezclamos todo de nuevo.', 'Aparte en otro bol mezclamos el harina y levadura química y la añadimos a la primera mezcla.', 'A continuación ponemos la mezcla en un molde enharinado y lo metemos en el horno a 180 grados sólo de fuego abajo y cuando esté cocido lo pongo el fuego de arriba para que coja más calor (más o menos 30 minutos).', 'Cuando lo sacamos de el horno metemos un cuchillo dentro para comprobar si está listo, por lo que si sale limpio, está listo sólo hay que dejarlo enfriar .', 'Una vez frío lo sacamos del molde y lo ponemos en una fuente para servir.']
		}]
	}, {
		title: 'Tarta de flan y chocolate',
		image: _maroc2.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Un paquete y medio de galletas cuadradas (las que más os gusten)', 'Un poco de leche (para mojar las galletas)', '1 litro de leche (para el flan)', '2 sobres de flan', '4-5 cucharadas de azúcar para el flan (según el gusto)', '200 gramos de chocolate negro de repostería', '(para cubrir la tarta)', '1 cuchara grande de mantequilla', '(para fundir el chocolate)', '1 brik pequeño de nata líquida (para fundir el chocolate)', 'Coco rallado (para decorar)']
		}],
		sectionPreparation: [{
			title: 'Receta:',
			preparation: ['Cogemos un molde cuadrado. Lo primero que haremos será hacer la base de la tarta. Para ello vamos mojando las galletas en un poco de leche y las vamos colocando sobre el molde. Haremos una base de dos pisos de galletas.', 'Hacemos el flan como lo indica el fabricante en el envase. Para ello necesitamos 1 litro de leche. Separamos un poco en un vaso grande y ponemos el resto en un cazo a calentar a fuego medio con el azúcar. Removemos de vez en cuando. En el vaso que hemos separado,  disolvemos los sobres de preparado para flan. Cuando la leche del cazo empiece a hervir,  añadimos el vaso con los polvos del flan sin parar de remover hasta que espese y vuelva a hervir.', 'Cuando el flan esté listo lo vertemos sobre nuestra base de galletas.', 'Encima del flan ponemos otra capa doble de galletas mojadas en leche.', 'Ahora preparamos nuestra cobertura de chocolate. Ponemos a calentar la nata líquida a fuego medio. Cuando hierva apagamos el fuego y añadimos el chocolate a trozos sin parar de remover para que se funda. Cuando se haya fundido añadimos 1 cuchara grande de mantequilla y movemos bien. Esto le dará brillo al chocolate.', 'Cuando la cobertura de chocolate esté lista la echamos sobre la última capa de galletas. Decoramos por encima con coco rallado.', 'Ahora esperamos que se enfríe un poco y la metemos al frigorífico unas horas antes de servir.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/africa/maroc.js');
}();

;

/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _tunisie = __webpack_require__(110);

var _tunisie2 = _interopRequireDefault(_tunisie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETA DE TUNEZ',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'GHRIYBA',
		image: _tunisie2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['250 gr. de almendra molida', '50 gr. de mantequilla en pomada', '100 gr. de azúcar glas', '1 huevo a temperatura ambiente', 'Almendras fileteadas, enteras o dátiles para decorar', 'Miel para rociar']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Precalentar el horno y dejarlo a 190º.', 'Mezclar las almendras, el azúcar, la mantequilla y el huevo hasta tener una pasta homogénea.', 'Dejar reposar 30 minutos en el frigorífico.', 'Hacer bolas del tamaño de una pelota de golf y poner en bandeja de horno con papel vegetal.', 'Aplanar un poco y colocar el adorno deseado.', 'Hornear unos 20 minutos dependiendo de hornos.', 'Dejar enfriar en la propia rejilla del horno.', 'Con un pincel huntar la ghriyba con miel.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/africa/tunisie.js');
}();

;

/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _argentine = __webpack_require__(111);

var _argentine2 = _interopRequireDefault(_argentine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETA ARGENTINA',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Alfajores argentinos',
		image: _argentine2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['9 yemas de huevo', '150 g mantequilla', '150 g azúcar glas.', '1 limón rallado', '500 g maicena', '1 cucharadita de levadura Royal']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Batir 150 g de manteca con 150 g de azúcar glas.', 'Luego ir agregano de una en una las yemas hasta un total de 9 yemas mientras se bate.', 'Añadir la esencia de vainilla y la ralladura de limón.', 'Aparte tamizar 500 g de maizena con la cucharadita de polvo para hornear (Royal).', 'Añadir 500 grs de maizena y una cucharadita de levadura royal.', 'Posteriormente dejamos descansar la masa como mínimo 1 hora. en la nevera.', 'Una vez enfriada pasamos a estirar la masa, dejando unos 50 cm de altura, cortamos la masa con un molde que tengamos redondo, para realizar los alfajores.', 'Colocarmos todos los alfajores cortados en una placa de horno entre 170º a 180º, aproximadamente unos 4 a 5 minutos, controlando que no se quemen. La masa no se debe de dorar pero si debe de estar hecha por dentro.', 'Posteriormente los sacamos del horno, dejándolos enfriar.', 'Una vez enfriados los alfajores se pasará a poner una capa de dulce de leche entre los dos alfajores y se le añadirá también algo de coco rallado']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/america/argentine.js');
}();

;

/***/ }),
/* 239 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _brasil = __webpack_require__(113);

var _brasil2 = _interopRequireDefault(_brasil);

var _brasil3 = __webpack_require__(112);

var _brasil4 = _interopRequireDefault(_brasil3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETAS BRASILEÑAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Quindim',
		image: _brasil2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['4 cucharadas', '2 yemas', '4 cuch azúcar', '1 lata leche condensada', 'Coco rallado', '1 bote de leche de coco']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Batir los 2 huevos y las 4 yemas con las 4 cucharadas de azúcar.', 'Acaramelar un molde.', 'En un bowl colocar el coco rallado junto a la leche de coco para que se hidrate.', 'Agregarle una lata de leche condensada y los huevos batidos.', 'Pasar todo al molde.', 'Cocinar en un molde a baño María unos 40 minutos. Y listo!']
		}]
	}, {
		title: 'Mousse de Maracuyá o Fruta de la pasión',
		image: _brasil4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['2 o 3 piezas de maracuyá o fruta de la pasión', '1 lata de leche condensada', '1 taza de jugo de maracuyá (fresco o congelado)', '1 lata de crema de leche', '6 huevos', '2 hojas de gelatina sin sabor']
		}],
		sectionPreparation: [{
			title: 'Receta para hacer el Mousse:',
			preparation: ['Con un poco de agua caliente, diluir la gelatina y reservar.', 'En un vaso de batidora, mezclar el jugo de maracuyá, la leche condensada, el zumo de limón, la crema de leche (sin suero), y la gelatina. Batir.', 'Separar las claras de las yemas y batirlas a punto de nieve.', 'Mezclar las claras a la mezcla de la batidora y remover con mucho cuidado para que no se baje.', 'Depositar la mezcla en un molde grande para el mousse o en porciones individuales como queramos. Llevarlos a la nevera para que cuaje.', 'A la hora de servir, acompañar el mousse con la pulpa fresca de maracuyá y algo de cereales.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/america/brasil.js');
}();

;

/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _canada = __webpack_require__(114);

var _canada2 = _interopRequireDefault(_canada);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETA CANADIENSE',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Trempettes',
		image: _canada2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['125 gr de harina .', 'una pizca de sal', '1 huevo y 1 yema de huevo', '300 ml de leche', '15 ml de mantequilla derretida', 'Miel de arce pura', 'mantequilla']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Coloca la harina y la sal un recipiente grande, luego haz un hueco en el centro de la harina.', 'Pon dentro del hueco que has hecho el huevo entero y la yema de otro.', 'Incorpora lentamente la mitad de la leche revolviendo continuamente.', 'Con ayuda de un batidor, introduce la mantequilla derretida y bate todo hasta obtener una masa cremosa.', 'Posteriormente agrega el resto de la leche y déjalo en reposo durante una hora antes de hacer los crepes.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/america/canadien.js');
}();

;

/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _chilie = __webpack_require__(115);

var _chilie2 = _interopRequireDefault(_chilie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETA CHILENA',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Cupcakes Para Navidad',
		image: _chilie2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['2-1/4 de Tazas de harina 315g.', '2 Huevos completos (yema y clara).', '1 Taza de leche 240 ml.', '1 Taza de azúcar.', '1 Cucharadita de vainilla.', '1/2 Taza de aceite (120ml).', '2 Cucharaditas de polvos de hornear.', '1/2 Paquete de queso crema', '2 Tazas de azúcar .', '1 Cucharadita de vainilla.', 'Leche (opcional).']
		}],
		sectionPreparation: [{
			title: 'Preparación Cupcakes:',
			preparation: ['Comenzamos a preparar la base de esta Receta de Cupcakes para Navidad, encendiendo el horno a fuego mediano y dejando pre-calentar.', 'Mientras el horno se calienta colocamos los huevos en un recipiente adecuado y le agregamos el azúcar, batiendo la mezcla hasta que alcance un punto espumoso y su color se aclare.', 'Añadimos entonces la vainilla y continuamos batiendo por un minuto mas para incorporar bien todo.', 'Agregando de a poco la harina, de forma circular en el recipiente y vamos mezclando suavemente con la ayuda de un batidor.', 'Cuando ya la harina este totalmente incorporada reservamos la mezcla.', 'Colocamos el papel en los moldes para cupcakes o muffins y añadimos a cada uno un poco de mantequilla para engrasar su superficie.', 'Vertemos la base de los cupcakes en cada molde y llevamos al horno pre-calentado.', 'Dejamos hornear por alrededor de veinticinco minutos o hasta que al introducir un palito en el centro de los cupcakes, este salga seco y sin restos.', 'En ese momento retiramos del horno y dejamos enfriar.']
		}, {
			title: 'Preparando la cobertura:',
			preparation: ['En un recipiente aparte colocamos la mitad de un paquete de queso crema (puede ser Philadelphia) y la llevamos al microondas, dejándola derretir por alrededor de treinta segundos aproximadamente.', 'Retiramos el recipiente del micro y le añadimos el extracto de vainilla y las dos tazas de azúcar.', 'Si deseamos incluir una cobertura de chocolate, entonces añadimos cincuenta gramos de chocolate previamente derretido y un par de cucharadas de chocolate amargo en polvo. Comenzamos a mezclar bien hasta lograr incorporar todos los ingredientes y obtener la textura deseada para la cobertura. En caso de que la mezcla se secara mucho, agregamos un poco de leche, calentamos nuevamente por unos segundos y continuamos mezclando.', 'Cuando ya la cobertura este lista, colocamos los colorantes deseados. Cubrimos los Cupcakes para Navidad con la cobertura, utilizando una manga o una cuchara y los decoramos a nuestro gusto.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/america/chilie.js');
}();

;

/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _guyane = __webpack_require__(116);

var _guyane2 = _interopRequireDefault(_guyane);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETA DE LAS GUAYANAS FRANCESAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'MANGO FOOL',
		image: _guyane2.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['3-4 mangos maduros, pelados, cortados en trozos grandes', '5 cucharadas de azúcar', '1 cáscara de limón y jugo', '1 taza de crema de leche', '1 cucharadita de extracto de vainilla', '1⁄4 cucharadita de nuez moscada']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Mezclar los mangos en una licuadora o procesador de alimentos junto con el jugo de limón y unas 2-3 cucharadas de azúcar.', 'Déjalo a un lado.', 'Con una batidora combinar la crema de leche, con 1 cucharada de azúcar, la ralladura de limón y la vainilla.', 'Mezclar el jugo de limón y el azúcar adicional.', 'Bate a alta velocidad hasta que se formen picos.', 'Para el montaje, dividir la mitad del puré de mango entre los vasos; alternar la crema batida, el puré y los cubitos de mando de acuerdo con sus preferencias. Enfriar hasta que esté listo para servir.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/america/guyane.js');
}();

;

/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _haiti = __webpack_require__(117);

var _haiti2 = _interopRequireDefault(_haiti);

var _haiti3 = __webpack_require__(118);

var _haiti4 = _interopRequireDefault(_haiti3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS DE HAITI',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'BANANA AL ZUMO DE NARANJA',
		image: _haiti2.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['4 bananas', '4 naranjas', '2 limones', '125 g de azúcar', 'Un copo de manteca']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Se enmanteca una cazuela térmica.', 'Se pelan las bananas y se cortan en rodajitas.', 'Se pelan dos naranjas, se cortan en rodajas.', 'Se exprime la pulpa de las naranjas restantes y de los limones y se deja aparte el zumo.', 'Se colocan en la cazuela las rodajitas de banana; posteriormente colocamos las naranjas cortadas en rodajas encima de los plátanos, se espolvorea con el azúcar y se rocía con el zumo que se había apartado.', 'Se introduce el recipiente en el horno a calor moderado y se deja hasta que la superficie se coloree ligeramente.']
		}]
	}, {
		title: 'PLÁTANO FRITO HAITIANO',
		image: _haiti4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['3 plátanos maduros', '1 cucharada de harina', '1/2 cucharadita de canela en polvo', '1/2 cucharadita de extracto de vainilla', '1 cucharada de azúcar', '1/8 cdta de bicarbonato de soda', 'Azúcar (opcional)']
		}],
		sectionPreparation: [{
			title: 'Receta para hacer el Mousse:',
			preparation: ['Mezclar la harina, azúcar, vainilla y canela en un recipiente, pasar los plátanos por esta mezcla y freír en aceite bien caliente, hasta dorar.', 'Escurrir sobre papel absorbente y servir espolvoreando azúcar por encima.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/america/haiti.js');
}();

;

/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _mexicoNutella = __webpack_require__(119);

var _mexicoNutella2 = _interopRequireDefault(_mexicoNutella);

var _mexicoOreo = __webpack_require__(120);

var _mexicoOreo2 = _interopRequireDefault(_mexicoOreo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS MEJICANAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Bizcocho de nutella',
		image: _mexicoNutella2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1 taza y 1/2 Harina.', '2 Huevos', '1 cucharada de azúcar', '1 taza y 1/2 Nutella', '1 cucharada de extracto de vainilla', '1 taza leche', 'Una pizca de bicarbonato.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['En un envase grande, echar los ingredientes secos primeros y luego los más líquidos.', 'Mezcla todo hasta obtener una mezcla espesa.', 'Finalmente, llena la bandeja o taza toda de mantequilla, luego echa la mezcla del bizcocho.', 'Si es en bandeja usaras el horno a 250° para que en las observaciones te sientas seguro y en 25 minutos o más con un palillo introdúcelo en el bizcocho, si sale mojado no esta hecho y si no sale nada es que ya está.', 'Añade frutas para la decoración.']
		}]
	}, {
		title: 'Receta de Helado de Oreo',
		image: _mexicoOreo2.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['12 Unidades Galleta Oreo', '2 Botes de Crema de leche fresca', '1 Lata Leche condensada']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Rompe las galletas Oreo en trozos más o menos pequeños y resérvalos en un bol.', 'Después bate la crema de leche en un bol de aluminio previamente enfriado en la nevera a ser posible, para que la crema quede espesa y hacer como una chantilly.', 'Luego añade la leche condensada y las galletas y mézclalo todo bien. Seguidamente, vierte el preparado en una bandeja de horno o en un molde para hacer helados y guárdalo en el refrigerador durante al menos 6 horas, o en el congelador durante 3 horas.', 'Una vez pasado ese tiempo, el de helado de Oreo ¡está listo para servir! Te recomendamos que lo consumas rápidamente ya que se derrite muy rápido si no está en la nevera.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/america/mexico.js');
}();

;

/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _usa = __webpack_require__(121);

var _usa2 = _interopRequireDefault(_usa);

var _usa3 = __webpack_require__(122);

var _usa4 = _interopRequireDefault(_usa3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS DE USA',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'DONUTS',
		image: _usa2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1 kilo de harina', '400 g de agua a temperatura ambiente', '90 g de azúcar refinado', '12 g de sal', '20 g de levadura fresca', '100 g de huevo (bate dos huevos medianos, pesa y retira el sobrante)', '70 g de mantequilla, a temperatura ambiente', '10 g de ralladura de limón', '3 g de canela en polvo', 'Aceite de girasol -preferentemente- o de oliva muy suave para freír']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Poner todos los ingredientes, salvo la mantequilla, en un bol grande que nos permita mezclar a mano con comodidad. Mezclar con una mano, haciendo movimientos envolventes, hasta que no quede harina dentro del bol.', 'Si es necesario se puede echar un poquito de agua para la unión de la masa, ya sabéis que la cantidad de agua puede variar considerablemente, dependiendo de la harina. Se trata de una masa firme pero elástica a la vez, debe ser fácil de trabajar. Una vez bien mezclado, tapar con plástico y reposar 10 minutos.', 'Amasar sobre la encimera. No debería hacer falta harina ni aceite para amasar.', 'Realizar tres rondas de amasados hasta que la superficie sea lisa, añadiendo en la última la mantequilla a temperatura ambiente. Tapar y dejar reposar otros 10 minutos para que el gluten se relaje.', 'Estirar con un rodillo hasta conseguir un grosor (uniforme) de 1cm aproximadamente y cortar tantas piezas como sea posible: se pueden congelar perfectamente y freír en cualquier otro momento.', 'Para aquellas piezas que vayamos a terminar en el momento, colocarlas sobre un papel de horno y dejar que fermenten hasta haber crecido considerablemente, aproximadamente una hora.', 'Calentar aceite para freír. Aquí llegamos a uno de los puntos clave: el aceite no debe estar demasiado caliente, pues los donuts cogerían demasiado color y no se cocerían del todo por dentro. Haced un par de pruebas hasta que los donuts puedan freírse 2 minutos por lado sin quemarse, alrededor de 180oC.', 'Sacar del aceite con una espumadera y enfriar en una rejilla. Decorar con azúcar espolvoreado, con chocolate o con una glas hecho con una parte de agua por cuatro de azúcar glas.']
		}]
	}, {
		title: 'New York Cheesecake',
		image: _usa4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Un paquete de galletas maría (o digestive)', '85 g de mantequilla', '900 g de queso crema, tipo philadelphia', '200 ml de crème fraîche (o yogur griego)', '250 gr de azúcar', '3 huevos', 'zumo de medio limón', '3 cucharadas soperas de harina de repostería', 'una pizca de vainilla', '300 gr de frambuesas (pueden ser congeladas)', 'zumo de medio limón', 'una hoja de gelatina', '3 cucharadas soperas de azúcar.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Precalentamos el horno a 200 oC.', 'Comenzamos preparando la base. Para ello, trituramos las galletas con ayuda de un robot de cocina, o metiéndolas dentro de una bolsa y golpeándolas con un rodillo, hasta obtener un polvo de galleta fino.', 'Derretimos la mantequilla y mezclamos con la galleta en polvo (debe quedar como arena mojada). Cubrimos la base de un molde desmontable de 20 a 24 cm con papel de hornear,  distribuimos encima la masa de galleta, presionando bien, e introducimos en el congelador mientras preparamos el relleno de nuestra tarta de queso.', 'Batimos el queso crema con unas varillas, añadimos el azúcar, la crème fraîche (o el yogur), la vainilla, el limón y la harina, hasta obtener una pasta lisa. Añadimos a continuación los huevos de uno en uno, pero sin batir mucho, lo justo para que se incorporen pero no coja mucho aire la masa. Ponemos la mezcla de queso sobre la base de galletas que habíamos preparado previamente.', 'Introducimos nuestra tarta de queso en el horno, y horneamos 10 minutos a 200 oC. Posteriormente bajamos la temperatura a 90 oC y horneamos durante 30 minutos más. El interior de la tarta, al moverlo, parecerá un flan.', 'Una vez pasado este tiempo, dejamos la tarta de queso en el horno apagado varias horas. Una vez a temperatura ambiente la tarta, la llevamos al frigorífico hasta que esté totalmente fría (lo mejor es preparar la tarta de un día para otro).', 'Por último preparamos la salsa de frambuesa. Hidratamos la hoja de gelatina en un vaso de agua fría durante 5 minutos.', 'En un cazo aparte, calentamos las frambuesas lavadas con el zumo de limón y el azúcar, y removemos constantemente, triturando al mismo tiempo las frambuesas.', 'Si os molestan las pepitas podéis colar la salsa de frambuesa antes del siguiente paso.', 'Cuando la salsa de frambuesa esté bien caliente, y triturada a nuestro gusto, incorporamos la gelatina bien escurrida a esta mezcla, removiendo hasta que se disuelva totalmente.', 'Distribuimos la salsa de frambuesa sobre la tarta y se metemos de nuevo en la nevera hasta que vayamos a consumirla.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/america/usa.js');
}();

;

/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _arabia = __webpack_require__(123);

var _arabia2 = _interopRequireDefault(_arabia);

var _arabia3 = __webpack_require__(124);

var _arabia4 = _interopRequireDefault(_arabia3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS DE ARABIA SAUDITA',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Maskina.',
		image: _arabia2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['2 vasos de harina.', '1 1/2 vaso de azúcar en polvo.', '1 vaso de nata.', 'Frutos secos machacados']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Mezclar la harina con el azúcar y la nata.', 'Untar el molde con aceite, poner la mezcla igualando la superficie, untarla con aceite y esparcir los frutos secos..', 'Meter en horno a temperatura mediana..', 'Servir fría.']
		}]
	}, {
		title: 'Mohalabeya de kamar el din',
		image: _arabia4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1/2 kg de zanahoria.', '1/2 kg de zumo de naranja natural.', '2 vasos de agua.', '2 cucharadas grandes de maicena.', 'Azúcar']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Cocer la zanahoria, pelarla y batirla en la batidora con el zumo de naranja. Poner a fuego y endulzar con azúcar ( 3 cucharadas grandes ).', 'Disolver la maicena en un poco de agua y echarla poco a poco moviendo el zumo hasta conseguir el espesor adecuado. Poner en platos y adornar con frutos secos y coco molido, dejar enfriar. Meter en frigorífico y servir fría.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/asia/arabia.js');
}();

;

/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _china = __webpack_require__(125);

var _china2 = _interopRequireDefault(_china);

var _china3 = __webpack_require__(126);

var _china4 = _interopRequireDefault(_china3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS CHINAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Helado Frito.',
		image: _china2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Pan de molde. (2 cortadas por helado)', '1 poco de leche en un bol', 'Tarrina de helado, de la que más te guste (vainilla, chocolate, nata, etc)', 'Para el rebozado del helado', '1 vaso 1/2 harina', '1 vaso leche', '1 huevo']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Cortamos los bordes del pan de molde o compramos pan de molde sin corteza.', 'Hacemos las bolas de helado. Mojamos los bordes del pan de molde en un poco de leche y colocamos la bola de helado encima del pan.', 'Cogemos el otro pan de molde y lo colocamos encima del helado cubriéndolo en forma de rombo (haciendo que se vean 8 picos de pan).', 'Lo apretamos bien con las manos hasta que le demos una forma redondita y lo envolvemos en papel de plata y lo metemos en el congelador hasta que se quede igual de duro que una piedra (un día entero).', 'Al día siguiente hacemos la masa/rebozado para freír el helado frito y ponemos en un bol el huevo, un vaso y medio de harina y un vaso de leche. Lo batimos bien hasta que se quede sin grumos.', 'Calentamos el aceite en un recipiente hondo. Metemos el helado que hemos sacado del congelador en el bol que tenemos la masa y lo embadurnamos bien y lo freímos con cuidado cuando esté el aceite muy caliente. Lo freímos hasta que esté bien dorado.', 'Una vez esté bien dorado lo sacamos y lo ponemos en un plato con una servilleta absorbente, para que absorba todo el aceite que le sobra al helado.', 'Quitamos la servilleta y ponemos el helado en el plato y le podéis poner por encima lo que queráis.' + 'Os recomiendo que le pongáis miel ya que sabe mucho mejor y como si te lo hubieran hecho en el restaurante chino.' + 'También podéis ponerle por encima chocolate, siropes, etc... LO QUE QUERÁIS!! y a disfrutar de vuestro helado frito chino.']
		}]
	}, {
		title: 'Flan con cereales de chocolate',
		image: _china4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1 litro leche', '200 g azúcar moreno', '1 sobre flan chino mandarin (o para hacer flanes)', '150 g cereales tipo arroz inflado', 'canela en polvo']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['En un cazo vamos a poner a hervir la leche y el azúcar. Cuando hierva añadimos el sobrecito y removemos con unas varillas para evitar los grumos.', 'En cada flanera vamos a poner un puñado de cereales, y verteremos la mezcla de flan, (podemos colarlo por si quedo algún resto).', 'Dejaremos enfriar en nevera y en el momento de servir, vamos a ponerles por encima caramelo.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/asia/china.js');
}();

;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _india = __webpack_require__(127);

var _india2 = _interopRequireDefault(_india);

var _india3 = __webpack_require__(128);

var _india4 = _interopRequireDefault(_india3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS INDIAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Lassi de fresa y plátano',
		image: _india2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1 yogur natural sin azúcar', '3 ó 4 fresas', 'Medio plátano', 'Una medida y media del vaso de yogur con agua', '1 cucharadita de miel', '1 cucharadita de azúcar', '1 golpe de pimienta']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Ponemos todos los ingredientes juntos y a la vez en el vaso de la batidora y trituramos unos minutos hasta que quede bien mezclado y perfectamente molido. probamos de dulzor para rectificar la cantidad de azúcar o de miel si es necesario.', 'Dejamos enfriar en la nevera hasta el momento de servir. Servimos bien frío con un poco de menta picada.']
		}]
	}, {
		title: 'Panna cotta de thé chaï',
		image: _india4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['2 cucharas de café de thé chaï', '60 cl de leche entera', '100 g de leche concentrada azucarada.', '1 hoja de gelatina.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['1. En una gran cazerola, vertir la leche, y hacerla calentar dulcemente. Adjuntar el té y dejarlo hervir durante 5 minutos. Retirarlo posteriormente del fuego, cubrirlo y dejarlo reposar durante 15 minutos.', '2. Poner la gelatina en agua fría, dejándola ablandar, escúrrela con las manos y ponla dentro del té para derretirla . Mezclalo todo y añade la leche concentrada e introduzcala en la nevera para poder enfríar.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/asia/india.js');
}();

;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _jordania = __webpack_require__(129);

var _jordania2 = _interopRequireDefault(_jordania);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS DE JORDANIA',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Chamia',

		// image: image,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Una taza y media de harina de maíz.', 'Una taza de azúcar.', 'Seis huevos.', '50 gramos de mantequilla.', 'Una cucharadita de bicarbonato de sodio.', 'Media taza de leche.', 'Gotas de esencia de vainilla.', 'Almendras para adornar.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Comienza mezclando la mantequilla con el azúcar en un recipiente hasta que se integren. Por otra parte, haz lo mismo batiendo los huevos con la esencia de vainilla.', 'Une ambas preparaciones.', 'comienza a incorporar suavemente la harina de maíz, removiendo suavemente hasta que se integre con el resto de la preparación.', 'Enmolda la preparación en una fuente previamente aceitada, corta en triángulos con la punta de un cuchillo poner las almendras encima de cada trozo cortado y llevarla a cocinar al horno. Cuando la superficie esté dorada, la Chamia estará lista.', 'Sacarla y dejarla enfriar antes de comer.']
		}]
	}, {
		title: 'Booza',
		image: _jordania2.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['2 vasos de trigo molido muy fino.', '2 vasos de agua.', '2 vasos de azúcar.', 'Jenjibre ó canela según te guste y también puedes acompañarla con avellanas tostadas por encima.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Dejar macerar durante una noche el trigo cubierto con agua.', 'Al día siguiente colarlo y cocinarlo con dos vasos de agua hasta que hierva.', 'Volver a colarlo y posteriormente mezlar los dos vasos de azúcar con la preparación.', 'Colocarlo en un recipiente de vídrio en la heladera y dejarlo que fermente durante tres días.', 'Cuando aparezcan burbujas en la superficie ya estrá listo el proceso de fermentación. Retirar y colar. Se sirve el líquido en vasos de vídrio.', 'Espolvorear con jenjibre y/o canela, cada comensal a su gusto, y las avellanas tostadas.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/asia/jordania.js');
}();

;

/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _liban = __webpack_require__(130);

var _liban2 = _interopRequireDefault(_liban);

var _liban3 = __webpack_require__(131);

var _liban4 = _interopRequireDefault(_liban3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETAS LIBANESAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Labneh',
		image: _liban2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Medio litro de leche', 'Una cucharada sopera de yogur']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Calentar la leche hasta unos 45o, o hasta que podamos mantener la punta del dedo dentro de la leche unos 10 segundos, sin quemarnos.', 'Diluimos el yogur en un poco de la leche caliente. Lo mezclamos con la leche, que pondremos en una olla, preferentemente, de barro. Removemos con cuchara de madera.', 'Tapamos la olla de barro con la tapa o con un plato. Tapamos con un trapo y dejamos reposar 5 o 6 horas. Yo la dejé toda la noche, tapada, en el horno apagado, puesto que tardó en empezar a cuajar.', 'Una vez ha tomado consistencia la leche cuajada, ponemos en el frigorífico.']
		}]
	}, {
		title: 'Pastel Libanenes de naranja',
		image: _liban4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['4 huevos.', '450gr. de naranjas enteras.', '200gr. Azúcar.', '1cucharadita de agua de azahar.', '8gr. levadura química', '200gr. almendra molida.', 'Azúcar glas para decorar']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Lavar las naranjas y cocerlas cubiertas de agua durante 15 minutos en la olla a presión. Escurrir, dejar enfriar y reservar.', 'Triturar las naranjas con la batidora.', 'Batir el azúcar junto con los huevos hasta que la mezcla se ponga blanquecina. Añadir el puré de naranja, el azahar y la levadura y seguir batiendo hasta que se integre.', 'Añadir la almendra y mezclar de forma manual con una espátula.', 'Untar un molde con mantequilla, verter la masa y hornear a 170o durante 60 minutos. Pasado ese tiempo, apagar el horno, abrir la puerta y dejar reposar otros 10 minutos.', 'Una vez frío, sacarlo del molde y espolvorear por encima con azúcar glas.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/asia/liban.js');
}();

;

/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _singapour = __webpack_require__(132);

var _singapour2 = _interopRequireDefault(_singapour);

var _singapour3 = __webpack_require__(133);

var _singapour4 = _interopRequireDefault(_singapour3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETAS DE SINGAPUR',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Melocotón con de vainilla',
		image: _singapour2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Melocotones maduros', 'Helado de vainilla', 'Avellanas tostadas']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Se pelan los melocotones y se les quita el hueso. Se pasa la carne de los melocotones por la batidora y se reservan en el frigorífico.', 'A parte, se pican las avellanas procurando que queden trocitos no muy finos. En una copa se pone un poco de helado de vainilla , una buena parte de puré de melocotón y, finalmente, un puñado de avellanas troceadas y se sirve inmediatamente.']
		}]
	}, {
		title: 'Mochi de helado',
		image: _singapour4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1 vaso de harina de arroz.', '3/4 vaso de agua.', '1/2 vaso de azúcar.', 'Helado de cualquier sabor que os guste.', 'Harina de arroz para enharinar']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Preparar el helado. Esperar que el helado esté un poco derretido para poder sacarlo y darle forma con facilidad.', 'Utilizar un molde de hielo para formar el helado. Congelar el helado de nuevo.', 'Ahora vamos a preparar la pasta. Con un batidor manual mezclar bien la harina, el agua y el azúcar en un recipiente.', 'Taparlo con un plástico transparente y cocinarlo en el microondas a máxima potencia durante 5 minutos.', 'Sacar el recipiente con mucho cuidado. Remover la masa con una cucharada de madera.', 'Echarla en una superficie que esté enharinada con mucha cantidad de harina de arroz. Echar más harina de arroz encima de la masa. Enrollar la masa hasta que tenga 2 -3 mm de grosor.', 'Utilizar un vaso pequeño de 5 cm de diámetro para dar la forma y cortar la masa.', 'Meter la masa en el frigo para que esté frio.', 'El paso final, ponemos el relleno en la masa. Enseguida guardarlo de nuevo en el congelador para que se quede firme.', 'Sacar los mochis del congelador cuando queráis servirlo y esperad unos minutos para comerlos. Disfrutad!']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/asia/singapour.js');
}();

;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS DE VIETNAM',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Chè chuối',

		// image: image,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1 c/s de semillas de sésamo.', '3 c/s de tapioca.', '350 ml de agua.', '1 pizca de sal.', '125 ml de leche de coco.', '3 c/s de azúcar.', '1 plátano.', 'Mantequilla (un poco)']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['En una sartén pon a que se tuestan ligeramente las semillas de sésamo.', 'Poner un cazo al fuego con el agua y la llevamos a ebullición. Cuando comience a hervir echamos la tapioca, bajamos el fuego al mínimo, y lo dejamos cocer 20 minutos removiendo de cuando en cuando.', 'Añadimos la leche de coco, el azúcar y la sal. Removemos bien y seguimos cociendo por 3 minutos.', 'Cortamos el plátano en rodajas. Reservamos algunas para la decoración y el resto las echamos en el cazo removiendo y dejando cocer durante unos minutos hasta que la mezcla espese.', 'Lo ponemos en unos cuencos y dejamos templar.', 'En una sartén derretimos la mantequilla y freímos ligeramente las rodajas de plátano que hemos reservado.', 'Lo servimos decorando con el plátano frito y las semillas de sésamo.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/asia/vietnam.js');
}();

;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _english = __webpack_require__(134);

var _english2 = _interopRequireDefault(_english);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS INGLESAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Fairy Cakes',
		image: _english2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['115 g (1⁄2 cup) de mantequilla sin sal', '115 g (1⁄2 cup + 1 cucharada) de azúcar superfino', '2 huevos', '1 cucharadita de extracto puro de vainilla', '115 g (7⁄8 cup) de harina de trigo (self-raising flour)', '1⁄4 cucharadita de sal.', '1-2 cucharadas (15-30 ml) de leche', '115 g (1 cup) de azúcar glass', '1-2 cucharadas (15-30 ml) de agua', 'Colorantes alimentarios en pasta variados', '30 g (1 oz) de chocolate con leche', '5 g (1 cucharadita) de mantequilla sin sal', 'Decoraciones de colores variadas (nonpareils, cristales de azúcar, perlitas, flores...)']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Precalentamos el horno (eléctrico) a 180ºC y colocamos la rejilla a media altura.', 'Colocamos las cápsulas de papel en el molde y reservamos.', 'Tamizamos juntos la harina y la sal y también reservamos.', 'En el cuenco de nuestra amasadora o en un cuenco grande mezclamos la mantequilla junto con el azúcar a velocidad media-alta hasta conseguir una textura esponjosa y un color más pálido (unos 4 ó 5 minutos). Despegamos los restos de masa de las paredes y fondo del cuenco (este proceso lo iremos repitiendo conforme vamos añadiendo ingredientes nuevos)', 'Añadimos y mezclamos más despacio los huevos ligeramente batidos y de uno en uno; no añadiremos el siguiente hasta que el anterior no se haya integrado del todo.', 'Añadimos el extracto de vainilla y mezclamos hasta integrar. Ahora añadimos la harina en 2 tandas y mezclamos lo justo hasta que prácticamente no quede rastro de ella.', 'Finalmente, agregamos la leche, una cucharada detrás de otra, hasta comprobar que conseguimos la consistencia deseada (algo así como el helado cuando empieza a derretirse).', 'Con ayuda de una cuchara de helado, rellenamos las cápsulas hasta 2⁄3 de su capacidad.', 'Horneamos durante 18-20 minutos o hasta que hayan subido y adquirido un tono dorado.', 'Comprobaremos si están hechos cuando al insertar una brocheta (o cake tester) en el centro ésta limpia de masa o migas.', 'Una vez horneados, lo sacamos del horno y lo dejamos enfriar en el molde durante unos 5 minutos. Pasado este tiempo, desmoldamos y dejamos enfriar por completo sobre una rejilla antes de glasear.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/europe/english.js');
}();

;

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _french = __webpack_require__(135);

var _french2 = _interopRequireDefault(_french);

var _french3 = __webpack_require__(136);

var _french4 = _interopRequireDefault(_french3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETAS FRANCESAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Mousse de chocolate con aguacate',
		image: _french2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['110 gramos de chocolate para repostería, troceado', '4 cucharadas de leche espesa de coco (tómala de la parte superior de la lata)', '1 aguacate maduro', '1/2 cucharadita de extracto de vainilla', '1 pizca de sal marina', '3 cucharadas de miel.', '1 cucharadita de ralladura de naranja']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Derrite el chocolate a baño María junto con la leche de coco, mezclando hasta incorporar completamente. Deja enfriar y vierte dentro del procesador de alimentos junto con el resto de los ingredientes. Procesa hasta tener una mezcla homogénea y suave.', 'Vierte dentro de dulceras y refrigera para servir bien frío. Decora a tu gusto.']
		}]
	}, {
		title: 'Tarta Tatin',
		image: _french4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Masa', '200 gramos de harina de trigo', '125 gramos de azúcar refinada', '1 pizca de sal', '1 yema de huevo', '25 mililitros de agua', 'Relleno', '60 gramos de mantequilla', '80 gramos de azúcar refinada', '1 cucharada de azúcar refinada', '1 kilo de manzanas, peladas, descorazonadas y cuarteadas.', '80 gramos de mantequilla, suavizada y troceada']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Cierne la harina en un tazón y agrega 125 gramos de azúcar y una pizca de sal. forma un pozo en el centro y llena con la mantequilla troceada. Frota hasta tener una consistencia arenosa. Agrega la yema y el agua, y amasa hasta formar una bola. Envuelve la masa en un plástico adherente y deja  reposar dentro del refrigerador de 1 a 2 horas.', 'Derrite la mantequilla en un molde de aluminio de 23 centímetros de diámetro sobre fuego medio. Cuando la mantequilla se haya derretido, agrega 80 gramos de azúcar y mezcla bien.', 'Acomoda las manzanas lo más apretadas posible en el molde, con el lado redondo hacia abajo. Espolvorea con la cucharada de azúcar restante y deja que se caramelicen a fuego medio durante aproximadamente 12 minutos.', 'Cuando las manzanas estén caramelizadas y un poco suaves, retira del fuego. Si las manzanas se encogieron o existen espacios entre trozos, júntalas de nuevo con cuidado, tratando de que queden en el centro y minimizando el espacio entre ellas. Permite que se enfríen un poco mientras terminas de preparar la masa.', 'Precalienta el horno a 200 °C.', 'Saca la masa del refrigerador, desenvuelve y coloca sobre una superficie plana enharinada. Extiende con un rodillo enharinado formando un círculo de aproximadamente 5 milímetros de grueso y un diámetro 3 centímetros más grande que el molde, alrededor de 29 centímetros.', 'Coloca la masa sobre las manzanas, doblando las orillas hacia los lados interiores del molde.', 'Hornea en el horno precalentado durante 30 minutos.', 'Retira del horno y deja enfriar 10 minutos, luego voltea sobre un platón. Disfruta esta tarta tibia sola o acompañada de un poco de crema de leche francesa, \'crème fraîche\'.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/europe/french.js');
}();

;

/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _german = __webpack_require__(137);

var _german2 = _interopRequireDefault(_german);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS ALEMANAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Receta de galletas de Pascua: Osterkekse.',
		image: _german2.default,

		sectionIngredient: [{
			title: 'Ingredientes para la masa:',
			ingredient: ['500 g Mehl – harina.', '250 g Butter – mantequilla.', '200 g Zucker – azúcar.', '2 Eier – huevos.', '1 Päckchen Vanillezucker – paquete azúcar de vainilla.', 'Messerspitze Zimt – un poquitín de canela (la puntita de un cuchillo)']
		}, {
			title: 'Ingredientes para el glaseado',
			ingredient: ['1 Eiweiß – clara de huevo', '1 Prise Salz – pellizco de sal', '200 g Puderzucker – azúcar glass', 'bunte Lebensmittelfarbe – colorante alimentario']
		}],
		sectionPreparation: [{
			title: 'Preparación de la masa para las galletas:',
			preparation: ['Poner la harina en un bol.', 'Añadir en el bol de la harina: la mantequilla cortada en trocitos, el azúcar, los huevos, el azúcar de vainilla y la canela. Trabajar todo con las manos de fuera hacia dentro hasta conseguir una masa compacta.', 'Envolver la masa como si fuera una pelota en un papel transparente (film) y dejar reposar en la nevera entre 30 y 60 minutos.', 'Precalentar el horno a 180 grados.', 'Cuando se haya enfriado la masa, quitaremos el papel film y, con la ayuda de un rodillo, la iremos trabajando hasta obtener una capa de unos 5 milímetros de grosor. Más fina no, de lo contrario las galletas se romperán.', 'Presionar con el molde de galletas escogido sobre la masa e ir depositándolas en la bandeja del horno que habremos cubierto previamente con papel de hornear.', 'Colocar la bandeja en la parte media del horno y hornear las galletas unos 10 minutos, controlando que no se doren demasiado.', 'Una vez horneadas, sacar la bandeja del horno y depositar las galletas con mucho cuidado sobre una superficie plana. Se recomienda hacerlo tirando del papel de hornear. Dejarlas enfriar encima del papel antes de proceder a decorarlas con el glaseado.']
		}, {
			title: 'Elaboración del glaseado',
			preparation: ['Batir la clara del huevo con el pellizco de sal a punto de nieve. Pueden utilizarse un par de claras si se desea obtener una cantidad de glaseado mayor.', 'Echar el azúcar glas junto a las claras y batir hasta obtener una crema compacta. En caso de que el glaseado sea demasiado líquido, echar algo más de azúcar glas.', 'El color del glaseado resultante será de color blanco. Podemos teñir el glaseado con los colores que más nos gusten. Para ello pondremos en pequeños bols un poco del glaseado y lo mezclaremos con el color deseado.', 'Rellenar una manga pastelera con el glaseado escogido para decorar las galletas. También puede hacerse rellenando con el glaseado una bolsa de congelar y cortando una de las puntitas. O con una cuchara manualmente, dependiendo de la decoración que se elija.', 'Decorar las galletas al gusto e imaginación de cada uno.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/europe/german.js');
}();

;

/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _italy = __webpack_require__(138);

var _italy2 = _interopRequireDefault(_italy);

var _italy3 = __webpack_require__(139);

var _italy4 = _interopRequireDefault(_italy3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETAS ITALIANAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Mousse de chocolate.',
		image: _italy2.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['100 gramos de cacao dulce.', '50 gramos de azúcar.', '0,4 litros de nata batida para postres.', 'un poco de vainilla.']
		}],
		sectionPreparation: [{
			title: 'Preparación del mousse de chocolate:',
			preparation: ['Echa el cacao a una pequeña cacerola, caliéntalo junto a poquito de agua (0,1 litros) hasta que se disuelva. En otra cacerola repita la operación con el azúcar. Después, une el cacao disuelto al azúcar y déjalo enfriar.', 'Une la nata batida y la vainilla, vierta en una copa de cristal y, si quiere, añade trozos de chocolate o fruta confitada. Guarde en el frigorífico antes de servir.']
		}]
	}, {
		title: 'Salami de chocolate',
		image: _italy4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['200 g de chocolate negro 70%', '100 g de mantequilla (o margarina)', '2 yemas de huevo', '8 galletas (80g) de mantequilla', '7 bizcochos de soletilla (40g)', 'Una mezcla de 40 g de almendras peladas, avellanas y piñones', '1-2 cucharadas de azúcar en polvo para recubrimiento']
		}],
		sectionPreparation: [{
			title: 'Receta para hacer el Salami de chocolate:',
			preparation: ['Picar el chocolate y colocar en un tazón o recipiente resistente al calor. Añadir la mantequilla cortada en trozos y colocar el recipiente sobre una olla de agua hirviendo (la parte inferior del recipiente no debe tocar el agua). Derretir al baño maría a fuego lento, revolviendo de vez en cuando con una cuchara de madera.', 'Una vez que la mezcla se derrite y forma una mezcla cremosa y suave, retirar del baño de agua y dejar enfriar. A continuación, añadir las yemas de huevo. Mezclar de manera uniforme y reservarmientras preparamos las galletas.', 'Cortar las galletas en trozos irregulares (para simular la grasa del salami) e incorporar a la mezcla de chocolate (incluyendo migas) junto con los frutos secos enteros. Amasar hasta que quede una pasta que se pueda moldear fácilmente con las manos.', 'Colocar un rectángulo grande de papel de aluminio sobre la encimera y situar encima un rectángulo de papel film. Extender la mezcla con una longitud de unos 35 cm y luego doblar la envoltura de plástico en los extremos para darle forma de salchichón. Doblar los extremos de la envoltura de plástico en un movimiento de tornillo.', 'Envolver el salami de chocolate con papel aluminio y colocarlo en la nevera varias horas (mínimo 3 horas) o una noche para que se endurezca. Para los impacientes se puede introducir en el congelador durante media hora.', 'Al día siguiente, o cuando el salami esté duro, hacerlo rodar un poco en la encimera para moldear más la forma y luego retirar el papel aluminio y el plástico.', 'Echar el azúcar en polvo en la encimera de trabajo y hacer rodar el salami para que se impregne bien. Con un pincel, quitar el exceso de azúcar antes de cortar unas rodajas no muy finas y servir preferentemente en un tablero de madera para completar el parecido.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/europe/italy.js');
}();

;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _russia = __webpack_require__(140);

var _russia2 = _interopRequireDefault(_russia);

var _russia3 = __webpack_require__(141);

var _russia4 = _interopRequireDefault(_russia3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS RUSAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Manzanas asadas al horno \'Assorti\'.',
		image: _russia2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Confitura de albaricoque - 2 cucharaditas', 'Piñones - 1 cucharadita', 'Jengibre molido - 1 pizca', 'Sirope de fresa - 2 cucharaditas', 'Sémola - 1 cucharadita', 'Vainilla - 1 pizca', 'Miel – 1 cucharadita', 'Nueces - 3 unidades', 'Agua - 3 cucharadas', 'Manzanas verdes - 3 unidades', 'Canela - 1 pizca']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Lavar las manzanas y descorazonarlas con un cuchillo especial o habitual. Se puede cortar de lado a lado. Entonces en el molde se formará una capa de mermelada.', 'Verter en el molde agua (opcional). Poner las manzanas en el molde. En la primera manzana poner la mermelada de albaricoque, a continuación, añadir los piñones y una pizca de jengibre, si lo deseas.', 'La segunda manzana rellenar con el sirope de la mermelada de fresa mezclado con sémola y espolvorear con la vainilla.', 'En la tercera manzana poner las nueces picadas, llenar con miel y espolvorear con canela.', 'Asar en el horno precalentado hasta 200ºC durante 20-30 minutos. Servir calientes o frías']
		}]
	}, {
		title: 'Pastel de zanahoria',
		image: _russia4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Huevos - 4 unidades', 'Azúcar - 2 tazas', 'Aceite de girasol - 1,5 tazas', 'Harina - 2 tazas', 'Zanahorias ralladas - 3 tazas', 'Nueces 120 g (se puede con pacanas, es más sabroso)', 'Canela molida - 2 cucharaditas', 'Soda - 2 cucharaditas', 'Sal - 1 cucharadita']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Mezclar los huevos, azúcar y la mantequilla. Aparte mezclar los ingredientes secos, mezclar todo y añadir las zanahorias y las nueces. Colocar la masa en el molde y hornear a 160ºC.', 'El pastel se puede cortar en dos tortas y echar la crema de mascarpone o crema de un 35% batida.', 'Servir una vez esté frío.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/europe/russia.js');
}();

;

/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _serbia = __webpack_require__(142);

var _serbia2 = _interopRequireDefault(_serbia);

var _serbia3 = __webpack_require__(143);

var _serbia4 = _interopRequireDefault(_serbia3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS SERBIAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Tarta de Belgrado',
		image: _serbia2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['13 yemas de huevo.', '10 claras a punto de nieve.', '275 gramos de azúcar .', '270 gramos da almendras molidas.', '135 gramos de frutas confitadas', '1 tableta de chocolate', '2 cucharada de harina.', 'Mantequilla o margarina para engrasar el molde.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Mezclar las yemas con el azúcar, hasta obtener una crema espumosa.', 'Añadir, las almendras picadas, la fruta confitada y la harina.', 'Fundir el chocolate en un poco de leche e incorporar en ella la mezcla obtenida previamente.', 'Batir las claras a punto de nieve y mezclarlo todo con cuidado, hasta obtener una mezcla homogénea.', 'Verter el resultado en un molde previamente untado con la mantequilla, ponerlo todo al horno y dejarlo allí durante 3⁄4 de hora.', 'Finalmente, retirar el pastel, dejar que se enfríe y servir.', 'Para decorar la tarta se aconseja añadir por encima almendras turradas y partidas por la mitad, o bien azúcar glass al gusto']
		}]
	}, {
		title: 'DULCE DE MEMBRILLO DESDE JAGODINA',
		image: _serbia4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1 Kg de membrillos', '1 Kg de azúcar']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Lavar los membrillos y cocerlos en agua abundante hasta que estén tiernos y la piel empiece a agrietarse.', 'Escurrirlos, pelarlos y cortarlos en trozos. Pasarlos por un pasapurés o la batidora.', 'Pesar la pulpa obtenida y mezclarla con el mismo peso de azúcar.', 'Cocer a fuego suave durante unos 25 minutos, removiendo la mezcla continuamente para evitar que se pegue.', 'La prueba de que la cocción está en su punto es que, al verter una pequeña porción sobre un plato, ésta cuaja de inmediato.', 'Retirar del fuego, verter en un molde grande o en varios pequeños y refrigerar.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/europe/serbia.js');
}();

;

/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _spanish = __webpack_require__(144);

var _spanish2 = _interopRequireDefault(_spanish);

var _spanish3 = __webpack_require__(145);

var _spanish4 = _interopRequireDefault(_spanish3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS ESPAÑOLAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'Macedonia de frutas tropicales.',
		image: _spanish2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['100 gr. de fresas', '3 naranjas', '2 plátanos', 'Uvas verdes o moradas', '2 rodajas de piña natural', '200 gr. de pulpa de sandía', '1 limón', 'Azúcar', 'Hojas de menta']
		}],
		sectionPreparation: [{
			title: 'Preparación de la macedonia de frutas tropicales helada:',
			preparation: ['Lavar bien todas las frutas. Pelar 2 naranjas y cortarlas en trozos pequeños. Disponerlos en un bol.', 'Pelar los plátanos y cortarlos en rodajas. Mezclarlos con la naranja.', 'Quitar las hojas a las fresas y cortarlas por la mitad. Añadirlas al bol con las demás frutas.', 'Pelar la piña y picar dos rodajas. Llevarlas al bol.', 'Cortar unos trozos de sandía y añadirlos al bol.', 'Añadir las uvas sin el tallo al bol.', 'Añadir el azúcar al gusto', 'Y por último, añadir el zumo del limón y de una naranja.']
		}]
	}, {
		title: 'Flan de huevo',
		image: _spanish4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1/2 litro de leche entera', '4 huevos grandes', '2 yemas de huevo', '1 vaina de vainilla o 1 trozo de canela en rama', '150 gramos de azúcar (para el flan)', '150 gramos de azúcar (para el caramelo)', '4 cucharadas de agua', '1 cucharada pequeña de zumo de limón', '6 flaneras (6 moldes para flan)']
		}],
		sectionPreparation: [{
			title: 'Receta para hacer Flan de Huevo:',
			preparation: ['Para preparar el caramelo echa 150 gramos de azúcar en un cazo. Añade una cucharada pequeña de zumo de limón y 4 cucharadas de agua. Pon el cazo a fuego medio y deja que se derrita el azúcar. Debes tener cuidado de no tocar el caramelo porque quema mucho.', 'Cuando el caramelo tenga un bonito color dorado apartamos del fuego. Vierte una cucharada de caramelo en cada uno de los 6 moldes. Y muévelos un poco para que se extienda bien el caramelo.', 'Ahora echa en un cazo limpio medio litro de leche entera y ponlo a fuego medio.', 'Abre una vaina de vainilla por la mitad a lo largo. Saca las semillas de la vainilla y echa todo a la leche. Lo dejamos al fuego hasta que esté a punto de hervir, entonces apartamos el cazo del fuego, lo tapamos con un plato y dejamos reposar 30 minutos.', 'Pon 4 huevos grandes en un cuenco. Añade dos yemas de huevo y 150 gramos de azúcar. Bate ligeramente hasta que se mezcle todo.', 'Cuando hayan pasado los 30 minutos de reposo de la leche retiramos la vaina de vainilla. Encendemos el horno y lo ponemos a 160ºC con calor arriba y abajo.', 'Incorpora la leche al cuenco con los huevos y el azúcar mientras bates ligeramente. Ahora coloca un colador sobre una jarra y cuela la mezcla del flan. Repártela entre los seis moldes o flaneras.', 'Coloca los moldes en una fuente para horno y llena la fuente con agua hasta alcanzar la mitad de la altura de los moldes. Mete en el horno y cuece al baño maría durante 40 minutos a 160ºC.', 'Cuando los flanes estén cuajados sácalos del horno. Con un guante de cocina saca los moldes del agua y deja que se enfríen.', 'Luego cúbrelos con papel film y mételos en el frigorífico durante al menos 4 horas.', 'Cuando estén bien fríos pasa un cuchillo por el filo del flan. Vuelca la flanera sobre un plato pequeño y eso es todo. Ya tenemos listo nuestro flan de huevo así que fuera de la cocina y a comer!!!']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/europe/spanish.js');
}();

;

/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _australie = __webpack_require__(146);

var _australie2 = _interopRequireDefault(_australie);

var _australie3 = __webpack_require__(147);

var _australie4 = _interopRequireDefault(_australie3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_female2.default,
	title: 'RECETAS AUSTRALIANAS',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'ALBA',
		image: _australie2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['Azúcar.', '2 limones.', 'helado a gusto.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['mezclar el azúcar con los limones y poner el gusto preferido del helado y luego colocar una hora en el congelador.']
		}]
	}, {
		title: 'Paletas de Mango',
		image: _australie4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['3 mangos, maduros.', 'azúcar.', 'agua la que necesite.', '1 molde para paletas de hielo.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Pelar los mangos. Cortas hasta dejar la pura pulpa. Licuarlo junto con el azúcar y el agua. Vaciar el jugo en pequeños moldes y ponerlo a congelar.']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/oceania/australie.js');
}();

;

/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _vanuatu = __webpack_require__(148);

var _vanuatu2 = _interopRequireDefault(_vanuatu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETA DE VANUATU',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'HELADO DE MANGO',
		image: _vanuatu2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['1 taza de pulpa de mango.', '1 taza de azúcar.', '1 taza de leche.', '1 lata de leche condensada.', '4 huevos.', '1 cucharada de jugo de limón.', 'Una pizca de sal.']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Calentar la leche y apagar el fuego justo antes de que comience la ebullición.', 'Batir los huevos con el azúcar, añadir la leche caliente poco a poco sin dejar de batir. Acontinuación, añadir la leche condensada y la pulpa de mango, jugo de limón y una pizca de sal. Mezclar bien.', 'Deje enfriar, luego poner en el congelador por 12 horas.', 'Al día siguientes se saca del congelador y pasamos a removerla durante 30 minutos dentro de la máquina para hacer helados.', 'Para obtener una textura más firme del helado, la dejamos posteriormente reposar durante 30 minutos en el congelador de nuevo. Y ya está lista para degustar, BUEN PROVECHO!!!']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/oceania/vanuatu.js');
}();

;

/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipiletCooker = __webpack_require__(1);

var _pipiletCooker2 = _interopRequireDefault(_pipiletCooker);

var _zelande = __webpack_require__(149);

var _zelande2 = _interopRequireDefault(_zelande);

var _zelande3 = __webpack_require__(150);

var _zelande4 = _interopRequireDefault(_zelande3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	flag: _pipilet_male2.default,
	title: 'RECETAS DE NUEVA ZELANDA',
	imagePipilet: _pipiletCooker2.default,
	recipe: [{
		title: 'PAVLOVA',
		image: _zelande2.default,

		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['3 claras de huevo.', 'El doble del peso de las claras en azúcar', 'Unas gotas de limón.', '1 cucharadita de vinagre', '1 cucharada de Maizena', '350 ml de nata líquida para montar.', 'Fresas o frutas a elección']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Montar las claras con el azúcar. Para eso ponemos las claras en la batidora y las batimos hasta que estén espumosas. Luego agregamos las gotas de limón, el vinagre, la maizena, y en forma de lluvia el azúcar. Lo batimos todo hasta que tenga una consistencia firme y al levantar el batidor,  haga picos.', 'En un papel de horno especial repostería, vamos a dibujar unos círculos del tamaño que quieras que tengan los merengues. Vamos a tomar una fuente para horno, y colocamos el papel.', 'Posteriormente colocamos el merengue por adentro de los círculos, tratando de que queden redondos, y haciendo una especie de nido, mas cantidad por los bordes y un poco mas ligero por adentro. La altura la vas a decidir vos. Dependiendo del tamaño que quieras que tenga, unos 3 dedos de alto.', 'Colocarlos en el horno a 140 grados sin aire y 120 si tu horno solo tiene la opción de aire. Por aproximadamente 2 horas.', 'Los retiras y los dejas enfriar un rato, para luego pasar a rellenarlos.', 'Para rellenarlos por dentro daremos unos pequeños y suaves golpes con una cuchara para obtener un hueco en su interior y pasar al relleno, poniéndoles la nata montada.', 'Colocarlos en un plato de postre y encima decorarlos un un poco de nata y cubiertos de frutas: mango, frambuesas, cerezas, fresas ( eso a tu voluntad). !Buen provecho!!!!']
		}]
	}, {
		title: 'HOT CROSS BUN',
		image: _zelande4.default,
		sectionIngredient: [{
			title: 'Ingredientes:',
			ingredient: ['375 gr. de harina de fuerza.', '4 gr. de levadura seca (12 gr. fresca).', '1/2 cucharadita de canela.', '1/4 cucharadita de jengibre..', '1/4 cucharadita de nuez moscada.', '1/4 cucharadita de cardamomo.', '1/2 cucharadita de sal.', '1 huevo.', '175 ml. de leche templada.', '50 gr. de azúcar.', '35 gr. de mantequilla.', 'un puñado de pasas (o trocitos de chocolate).', 'huevo batido para pintar']
		}],
		sectionPreparation: [{
			title: 'Preparación:',
			preparation: ['Mezclar todos los ingredientes secos en un bol, las especias, harina, azúcar, sal...', 'Disolver la levadura con la leche templada y añadir a la mezcla anterior junto con el huevo batido. Mezclar bien y amasar.', 'Añadir a la masa la mantequilla a temperatura ambiente y volver a amasar hasta integrarla bien. Una vez la masa queda homogénea y lisa, añadir las pasas o trocitos de chocolate. Reservar en un bol enharinado y tapar, dejando reposar durante 1 hora hasta que duplique su tamaño.', 'Dividir la masa en pequeñas porciones (50- 60 gr.), darle forma de panecillo, y reservar sobre la bandeja del horno tapadas durante unos 45 minutos.', 'Una vez veas duplicado el volumen, pasa a pintarlos con el huevo batido y haz la masa para la cruz: para esto debes de mezclar la harina con el azúcar glass y añadir el agua hasta tener una mezcla espesa. Una vez obtenida ponla sobre una mangera pastelera y pasa hacer las cruces sobre los panecillos.', 'Hornear durante 15- 20 minutos a 180ºC, hasta que estén dorados. Dejar enfriar y ¡Listos!']
		}]
	}]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/cook/spa/oceania/zelande.js');
}();

;

/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _brasil = __webpack_require__(36);

var _brasil2 = _interopRequireDefault(_brasil);

var _bike_little_draw_number = __webpack_require__(156);

var _bike_little_draw_number2 = _interopRequireDefault(_bike_little_draw_number);

var _bike_big_draw_number = __webpack_require__(155);

var _bike_big_draw_number2 = _interopRequireDefault(_bike_big_draw_number);

var _number_brasil = __webpack_require__(515);

var _number_brasil2 = _interopRequireDefault(_number_brasil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'BRASIL NÚMEROS DO 1 AOS 100',
	'flag': _brasil2.default,
	'download': _number_brasil2.default,
	'draw': {
		'little-draw': _bike_little_draw_number2.default,
		'big-draw': _bike_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'Um/Uma' }, { letter: '11', value: 'Onze' }, { letter: '21', value: 'Vinte e um' }, { letter: '31', value: 'Trinta e um' }], [{ letter: '2', value: 'Dois/Duas' }, { letter: '12', value: 'Doze' }, { letter: '22', value: 'Vinte e dois' }, { letter: '32', value: 'Trinta e dois' }], [{ letter: '3', value: 'Três' }, { letter: '13', value: 'Treze' }, { letter: '23', value: 'Vinte e três' }, { letter: '33', value: 'Trinta e três' }], [{ letter: '4', value: 'Quatro' }, { letter: '14', value: 'Catorze' }, { letter: '24', value: 'Vinte e quatro' }, { letter: '34', value: 'Trinta e quatro' }], [{ letter: '5', value: 'Cinco' }, { letter: '15', value: 'Quinze' }, { letter: '25', value: 'Vinte e cinco' }, { letter: '35', value: 'Trinta e cinco' }], [{ letter: '6', value: 'Seis' }, { letter: '16', value: 'Dezasseis' }, { letter: '26', value: 'Vinte e seis' }, { letter: '36', value: 'Trinta e seis' }], [{ letter: '7', value: 'Sete' }, { letter: '17', value: 'Dezassete' }, { letter: '27', value: 'Vinte e sete' }, { letter: '37', value: 'Trinta e sete' }], [{ letter: '8', value: 'Oito' }, { letter: '18', value: 'Dezoito' }, { letter: '28', value: 'Vinte e oito' }, { letter: '38', value: 'Trinta e oito' }], [{ letter: '9', value: 'Nove' }, { letter: '19', value: 'Dezanove' }, { letter: '29', value: 'Vinte e nove' }, { letter: '39', value: 'Trinta e nove' }], [{ letter: '10', value: 'Dez' }, { letter: '20', value: 'Vinte' }, { letter: '30', value: 'Trinta' }, { letter: '40', value: 'Quarenta' }]],
	'ten-numbers': [{ letter: '50', value: 'Cinquenta' }, { letter: '60', value: 'Sessenta' }, { letter: '70', value: 'Setenta' }, { letter: '80', value: 'Oitenta' }, { letter: '90', value: 'Noventa' }, { letter: '100', value: 'Cem/Cento' }],
	'operator': [{ letter: 'x', value: 'PARA' }, { letter: '-', value: 'MENOS' }, { letter: ':', value: 'DIVIDIDO' }, { letter: '+', value: 'MA' }, { letter: '=', value: 'IGUAL' }],
	'exercice': [{ letter: '5 + 8 =', value: 'Treze' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/brasil/index.js');
}();

;

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _china = __webpack_require__(37);

var _china2 = _interopRequireDefault(_china);

var _elephant_little_draw_number = __webpack_require__(9);

var _elephant_little_draw_number2 = _interopRequireDefault(_elephant_little_draw_number);

var _elephant_big_draw_number = __webpack_require__(8);

var _elephant_big_draw_number2 = _interopRequireDefault(_elephant_big_draw_number);

var _number_china = __webpack_require__(516);

var _number_china2 = _interopRequireDefault(_number_china);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': '中国 编号从 1 到 100',
	'flag': _china2.default,
	'download': _number_china2.default,
	'draw': {
		'little-draw': _elephant_little_draw_number2.default,
		'big-draw': _elephant_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: '一 [yī]' }, { letter: '11', value: '十一 [shi yi]' }, { letter: '21', value: '二十一 [èr shi yi]' }, { letter: '31', value: '三十一 [sān shi yi]' }], [{ letter: '2', value: '二 [èr]' }, { letter: '12', value: '十二 [shi er]' }, { letter: '22', value: '二十二 [èr shi èr]' }, { letter: '32', value: '三十二 [sān shi èr]' }], [{ letter: '3', value: '三 [sān]' }, { letter: '13', value: '十三 [shi san]' }, { letter: '23', value: '二十三 [èr shi sān]' }, { letter: '33', value: '三十三 [sān shi sān]' }], [{ letter: '4', value: '四 [sì]' }, { letter: '14', value: '十四 [shi sì]' }, { letter: '24', value: '二十四 [èr shi sì]' }, { letter: '34', value: '三十四 [sān shi sì]' }], [{ letter: '5', value: '五 [wǔ]' }, { letter: '15', value: '十五 [shi wǔ]' }, { letter: '25', value: '二十五 [èr shi wǔ]' }, { letter: '35', value: '三十五 [sān shi wǔ]' }], [{ letter: '6', value: '六 [liù]' }, { letter: '16', value: '十六 [shi liù]' }, { letter: '26', value: '二十六 [èr shi liù]' }, { letter: '36', value: '三十六 [sān shi liù]' }], [{ letter: '7', value: '七 [qī]' }, { letter: '17', value: '十七 [shi qī]' }, { letter: '27', value: '二十七 [èr shi qī]' }, { letter: '37', value: '三十七 [sān shi qī]' }], [{ letter: '8', value: '八 [bā]' }, { letter: '18', value: '十八 [shi bā]' }, { letter: '28', value: '二十八 [èr shi bā]' }, { letter: '38', value: '三十八 [sān shi bā]' }], [{ letter: '9', value: '九 [jiǔ]' }, { letter: '19', value: '十九 [shi jiǔ]' }, { letter: '29', value: '二十九 [èr shi jiǔ]' }, { letter: '39', value: '三十九 [sān shi jiǔ]' }], [{ letter: '10', value: '十 [shí]' }, { letter: '20', value: '二十 [èr shí]' }, { letter: '30', value: '三十 [sān shí]' }, { letter: '40', value: '四十 [sì shí]' }]],
	'ten-numbers': [{ letter: '0', value: '零 [líng]' }, { letter: '100', value: '一百 [yī bǎi]' }],
	'operator': [{ letter: 'x', value: '乘 [cheng]' }, { letter: '-', value: '减 [jian]' }, { letter: ':', value: '除 [chu]' }, { letter: '+', value: '加 [jia]' }, { letter: '=', value: '等于 [deng yu]' }],
	'exercice': [{ letter: '5 + 8 =', value: '十三' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/china/index.js');
}();

;

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _english = __webpack_require__(38);

var _english2 = _interopRequireDefault(_english);

var _umbrella_little_draw_number = __webpack_require__(158);

var _umbrella_little_draw_number2 = _interopRequireDefault(_umbrella_little_draw_number);

var _umbrella_big_draw_number = __webpack_require__(157);

var _umbrella_big_draw_number2 = _interopRequireDefault(_umbrella_big_draw_number);

var _number_english = __webpack_require__(517);

var _number_english2 = _interopRequireDefault(_number_english);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'ENGLISH FROM THE 1 TO 100',
	'flag': _english2.default,
	'download': _number_english2.default,
	'draw': {
		'little-draw': _umbrella_little_draw_number2.default,
		'big-draw': _umbrella_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'One' }, { letter: '11', value: 'Eleven' }, { letter: '21', value: 'Twenty one' }, { letter: '31', value: 'Thirty one' }], [{ letter: '2', value: 'Two' }, { letter: '12', value: 'Twelve' }, { letter: '22', value: 'Twenty two' }, { letter: '32', value: 'Thirty two' }], [{ letter: '3', value: 'Three' }, { letter: '13', value: 'Thirteen' }, { letter: '23', value: 'Twenty three' }, { letter: '33', value: 'Thirty three' }], [{ letter: '4', value: 'Four' }, { letter: '14', value: 'Fourteen' }, { letter: '24', value: 'Twenty four' }, { letter: '34', value: 'Thirty four' }], [{ letter: '5', value: 'Five' }, { letter: '15', value: 'Fifteen' }, { letter: '25', value: 'Twenty five' }, { letter: '35', value: 'Thirty five' }], [{ letter: '6', value: 'Six' }, { letter: '16', value: 'Sixteen' }, { letter: '26', value: 'Twenty six' }, { letter: '36', value: 'Thirty six' }], [{ letter: '7', value: 'Seven' }, { letter: '17', value: 'Seventeen' }, { letter: '27', value: 'Twenty seven' }, { letter: '37', value: 'Thirty seven' }], [{ letter: '8', value: 'Eight' }, { letter: '18', value: 'Eighteen' }, { letter: '28', value: 'Twenty eight' }, { letter: '38', value: 'Thirty eight' }], [{ letter: '9', value: 'Nine' }, { letter: '19', value: 'Nineteen' }, { letter: '29', value: 'Twenty nine' }, { letter: '39', value: 'Thirty nine' }], [{ letter: '10', value: 'Ten' }, { letter: '20', value: 'Twenty' }, { letter: '30', value: 'Thirty' }, { letter: '40', value: 'Forty' }]],
	'ten-numbers': [{ letter: '50', value: 'Fifty' }, { letter: '60', value: 'Sixty' }, { letter: '70', value: 'Seventy' }, { letter: '80', value: 'Eighty' }, { letter: '90', value: 'Ninety' }, { letter: '100', value: 'Hundred' }],
	'operator': [{ letter: 'x', value: 'Times' }, { letter: '-', value: 'Minus' }, { letter: ':', value: 'Divide' }, { letter: '+', value: 'Plus' }, { letter: '=', value: 'Equal' }],
	'exercice': [{ letter: '5 + 8 =', value: 'Thirteen' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/english/index.js');
}();

;

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _french = __webpack_require__(39);

var _french2 = _interopRequireDefault(_french);

var _elephant_little_draw_number = __webpack_require__(9);

var _elephant_little_draw_number2 = _interopRequireDefault(_elephant_little_draw_number);

var _elephant_big_draw_number = __webpack_require__(8);

var _elephant_big_draw_number2 = _interopRequireDefault(_elephant_big_draw_number);

var _number_french = __webpack_require__(518);

var _number_french2 = _interopRequireDefault(_number_french);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'CHIFFRES FRANÇAIS DE 1 À 100',
	'flag': _french2.default,
	'download': _number_french2.default,
	'draw': {
		'little-draw': _elephant_little_draw_number2.default,
		'big-draw': _elephant_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'Un' }, { letter: '11', value: 'Onze' }, { letter: '21', value: 'Vingt-et-un' }, { letter: '31', value: 'Trente-et-un' }], [{ letter: '2', value: 'Deux' }, { letter: '12', value: 'Douze' }, { letter: '22', value: 'Vingt-deux' }, { letter: '32', value: 'Trente-deux' }], [{ letter: '3', value: 'Trois' }, { letter: '13', value: 'Treize' }, { letter: '23', value: 'Vingt-trois' }, { letter: '33', value: 'Trente-trois' }], [{ letter: '4', value: 'Quatre' }, { letter: '14', value: 'Quatorze' }, { letter: '24', value: 'Vingt-quatre' }, { letter: '34', value: 'Trente-quatre' }], [{ letter: '5', value: 'Cinq' }, { letter: '15', value: 'Quinze' }, { letter: '25', value: 'Vingt-cinq' }, { letter: '35', value: 'Trente-cinq' }], [{ letter: '6', value: 'Six' }, { letter: '16', value: 'Seize' }, { letter: '26', value: 'Vingt-six' }, { letter: '36', value: 'Trente-six' }], [{ letter: '7', value: 'Sept' }, { letter: '17', value: 'Dix-sept' }, { letter: '27', value: 'Vingt-sept' }, { letter: '37', value: 'Trente-sept' }], [{ letter: '8', value: 'Huit' }, { letter: '18', value: 'Dix-huit' }, { letter: '28', value: 'Vingt-huit' }, { letter: '38', value: 'Trente-huit' }], [{ letter: '9', value: 'Neuf' }, { letter: '19', value: 'Dix-neuf' }, { letter: '29', value: 'Vingt-neuf' }, { letter: '39', value: 'Trente-neuf' }], [{ letter: '10', value: 'Dix' }, { letter: '20', value: 'Vingt' }, { letter: '30', value: 'Trente' }, { letter: '40', value: 'Quarante' }]],
	'ten-numbers': [{ letter: '50', value: 'Cinquante' }, { letter: '60', value: 'Soixante' }, { letter: '70', value: 'Soixante-dix' }, { letter: '80', value: 'Quatre-vingts' }, { letter: '90', value: 'Quatre-vingt-dix' }, { letter: '100', value: 'Cent' }],
	'operator': [{ letter: 'x', value: 'FOIS/PAR' }, { letter: '-', value: 'MOINS' }, { letter: ':', value: 'DIVISE' }, { letter: '+', value: 'PLUS' }, { letter: '=', value: 'EGAL' }],
	'exercice': [{ letter: '5 + 8 =', value: 'Treize' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/french/index.js');
}();

;

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _german = __webpack_require__(40);

var _german2 = _interopRequireDefault(_german);

var _bird_little_draw_number = __webpack_require__(563);

var _bird_little_draw_number2 = _interopRequireDefault(_bird_little_draw_number);

var _bird_big_draw_number = __webpack_require__(562);

var _bird_big_draw_number2 = _interopRequireDefault(_bird_big_draw_number);

var _number_german = __webpack_require__(519);

var _number_german2 = _interopRequireDefault(_number_german);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'ANZAHLEN DEN 1 BEL DEN 100',
	'flag': _german2.default,
	'download': _number_german2.default,
	'draw': {
		'little-draw': _bird_little_draw_number2.default,
		'big-draw': _bird_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'Eins' }, { letter: '11', value: 'Elf' }, { letter: '21', value: 'Einundzwanzig' }, { letter: '31', value: 'Einunddreißig' }], [{ letter: '2', value: 'Zwei' }, { letter: '12', value: 'Zwölf' }, { letter: '22', value: 'Zweiundzwanzig' }, { letter: '32', value: 'Zweiunddreißig' }], [{ letter: '3', value: 'Drei' }, { letter: '13', value: 'Dreizehn' }, { letter: '23', value: 'Dreiundzwanzig' }, { letter: '33', value: 'Dreiunddreißig' }], [{ letter: '4', value: 'Vier' }, { letter: '14', value: 'vierzehn' }, { letter: '24', value: 'Vierundzwanzig' }, { letter: '34', value: 'Vierunddreißig' }], [{ letter: '5', value: 'Fünf' }, { letter: '15', value: 'Fünfzehn' }, { letter: '25', value: 'Fünfundzwanzig' }, { letter: '35', value: 'Fünfunddreißig' }], [{ letter: '6', value: 'Sechs' }, { letter: '16', value: 'Sechzehn' }, { letter: '26', value: 'Sechsundzwanzig' }, { letter: '36', value: 'Sechsunddreißigi' }], [{ letter: '7', value: 'Sieben' }, { letter: '17', value: 'Siebzehn' }, { letter: '27', value: 'Siebenundzwanzig' }, { letter: '37', value: 'Siebenunddreißig' }], [{ letter: '8', value: 'Acht' }, { letter: '18', value: 'Achtzehn' }, { letter: '28', value: 'Achtundzwanzig' }, { letter: '38', value: 'Achtunddreißig' }], [{ letter: '9', value: 'Neun' }, { letter: '19', value: 'Neunzehn' }, { letter: '29', value: 'Neunundzwanzig' }, { letter: '39', value: 'Neununddreißig' }], [{ letter: '10', value: 'Zehn' }, { letter: '20', value: 'Zwanzig' }, { letter: '30', value: 'Dreißig' }, { letter: '40', value: 'Vierzig' }]],
	'ten-numbers': [{ letter: '50', value: 'Fünfzig' }, { letter: '60', value: 'Sechzig' }, { letter: '70', value: 'Siebzig' }, { letter: '80', value: 'Achtzig' }, { letter: '90', value: 'Neunzig' }, { letter: '100', value: 'Einhundert / Humdert' }],
	'operator': [{ letter: 'x', value: 'FÜR' }, { letter: '-', value: 'MINDESTENS' }, { letter: ':', value: 'DIVISOR' }, { letter: '+', value: 'PLUS' }, { letter: '=', value: 'EGA' }],
	'exercice': [{ letter: '5 + 8 =', value: 'Dreizehn' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/german/index.js');
}();

;

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _french = __webpack_require__(266);

var _french2 = _interopRequireDefault(_french);

var _spanish = __webpack_require__(274);

var _spanish2 = _interopRequireDefault(_spanish);

var _german = __webpack_require__(267);

var _german2 = _interopRequireDefault(_german);

var _india = __webpack_require__(269);

var _india2 = _interopRequireDefault(_india);

var _english = __webpack_require__(265);

var _english2 = _interopRequireDefault(_english);

var _china = __webpack_require__(264);

var _china2 = _interopRequireDefault(_china);

var _brasil = __webpack_require__(263);

var _brasil2 = _interopRequireDefault(_brasil);

var _italy = __webpack_require__(270);

var _italy2 = _interopRequireDefault(_italy);

var _serbia = __webpack_require__(272);

var _serbia2 = _interopRequireDefault(_serbia);

var _southAfrica = __webpack_require__(273);

var _southAfrica2 = _interopRequireDefault(_southAfrica);

var _russia = __webpack_require__(271);

var _russia2 = _interopRequireDefault(_russia);

var _tanzania = __webpack_require__(275);

var _tanzania2 = _interopRequireDefault(_tanzania);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	french: _french2.default,
	spanish: _spanish2.default,
	german: _german2.default,
	india: _india2.default,
	english: _english2.default,
	china: _china2.default,
	brasil: _brasil2.default,
	italy: _italy2.default,
	serbia: _serbia2.default,
	southAfrica: _southAfrica2.default,
	russia: _russia2.default,
	tanzania: _tanzania2.default
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/index.js');
}();

;

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _india = __webpack_require__(41);

var _india2 = _interopRequireDefault(_india);

var _elephant_little_draw_number = __webpack_require__(9);

var _elephant_little_draw_number2 = _interopRequireDefault(_elephant_little_draw_number);

var _elephant_big_draw_number = __webpack_require__(8);

var _elephant_big_draw_number2 = _interopRequireDefault(_elephant_big_draw_number);

var _number_india = __webpack_require__(520);

var _number_india2 = _interopRequireDefault(_number_india);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'हहिन्ददी (HINDI) 1 सस100 तक सस',
	'flag': _india2.default,
	'download': _number_india2.default,
	'draw': {
		'little-draw': _elephant_little_draw_number2.default,
		'big-draw': _elephant_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'एक [ek]' }, { letter: '11', value: 'गययरहि [gyaarah]' }], [{ letter: '2', value: 'दद [do]' }, { letter: '12', value: 'बयरहि [baarah]' }], [{ letter: '3', value: 'ततन [teen]' }, { letter: '13', value: 'तसरहि [terah]' }], [{ letter: '4', value: 'चयर [chaar]' }, { letter: '14', value: 'चचदहि [chaudah]' }], [{ letter: '5', value: 'पयसच [paanch]' }, { letter: '15', value: 'पसदहि [pitnacatj]' }], [{ letter: '6', value: 'छहि [chhah]' }, { letter: '16', value: 'सदलहि [shysnacatj]' }], [{ letter: '7', value: 'सयत [saat]' }, { letter: '17', value: 'सतहि [simjnacatj]' }], [{ letter: '8', value: 'आठ [aath]' }, { letter: '18', value: 'अठयरहि [athaarah]' }], [{ letter: '9', value: 'नच [nau]' }, { letter: '19', value: 'उन्नतस [unnees]' }], [{ letter: '10', value: 'दस [das]' }, { letter: '20', value: 'बतस [bees]' }]],
	'ten-numbers': [{ letter: '30', value: 'ततस [tees]' }, { letter: '40', value: 'चयलदीस [chaalees]' }, { letter: '50', value: 'पचयस [pachaas]' }, { letter: '60', value: 'सयठ [saath]' }, { letter: '70', value: 'सततर [sattar]' }, { letter: '80', value: 'अससत [assee]' }, { letter: '90', value: 'नववस [navve]' }, { letter: '100', value: 'सच [sau]' }],
	'operator': [{ letter: 'x', value: 'दवयरय [dvaara]' }, { letter: '-', value: 'कम [kam]' }, { letter: ':', value: 'ववभयजजत [vibhaajit]' }, { letter: '+', value: 'अधधक [adhik]' }, { letter: '=', value: 'जहसय [jaisa]' }],
	'exercice': [{ letter: '5 + 8 =', value: 'तसरहि' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/india/index.js');
}();

;

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _italy = __webpack_require__(42);

var _italy2 = _interopRequireDefault(_italy);

var _umbrella_little_draw_number = __webpack_require__(158);

var _umbrella_little_draw_number2 = _interopRequireDefault(_umbrella_little_draw_number);

var _umbrella_big_draw_number = __webpack_require__(157);

var _umbrella_big_draw_number2 = _interopRequireDefault(_umbrella_big_draw_number);

var _number_italy = __webpack_require__(521);

var _number_italy2 = _interopRequireDefault(_number_italy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'ITALIANO NUMERI DAL 1 AL 100',
	'flag': _italy2.default,
	'download': _number_italy2.default,
	'draw': {
		'little-draw': _umbrella_little_draw_number2.default,
		'big-draw': _umbrella_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'Uno' }, { letter: '11', value: 'Undici' }, { letter: '21', value: 'Ventuno' }, { letter: '31', value: 'Trentauno' }], [{ letter: '2', value: 'Due' }, { letter: '12', value: 'Dodici' }, { letter: '22', value: 'Ventidue' }, { letter: '32', value: 'Trentadue' }], [{ letter: '3', value: 'Tre' }, { letter: '13', value: 'Tredici' }, { letter: '23', value: 'Ventitré' }, { letter: '33', value: 'Trentatré' }], [{ letter: '4', value: 'Quattro' }, { letter: '14', value: 'Quattordici' }, { letter: '24', value: 'Ventiquattro' }, { letter: '34', value: 'Trentaquattro' }], [{ letter: '5', value: 'Cinque' }, { letter: '15', value: 'Quindici' }, { letter: '25', value: 'Venticinque' }, { letter: '35', value: 'Trentacinque' }], [{ letter: '6', value: 'Sei' }, { letter: '16', value: 'Sedici' }, { letter: '26', value: 'Ventisei' }, { letter: '36', value: 'Trentasei' }], [{ letter: '7', value: 'Sette' }, { letter: '17', value: 'Diciassette' }, { letter: '27', value: 'Ventisette' }, { letter: '37', value: 'Trentasette' }], [{ letter: '8', value: 'Otto' }, { letter: '18', value: 'Diciotto' }, { letter: '28', value: 'Ventotto' }, { letter: '38', value: 'Trentotto' }], [{ letter: '9', value: 'Nove' }, { letter: '19', value: 'Diciannove' }, { letter: '29', value: 'Ventinove' }, { letter: '39', value: 'Trentanove' }], [{ letter: '10', value: 'Dieci' }, { letter: '20', value: 'Venti' }, { letter: '30', value: 'Trenta' }, { letter: '40', value: 'Cuaranta' }]],
	'ten-numbers': [{ letter: '50', value: 'Cinquanta' }, { letter: '60', value: 'Sessanta' }, { letter: '70', value: 'Settanta' }, { letter: '80', value: 'Ottanta' }, { letter: '90', value: 'Novanta' }, { letter: '100', value: 'Cento' }],
	'operator': [{ letter: 'x', value: 'PER' }, { letter: '-', value: 'MENO' }, { letter: ':', value: 'DIVISO' }, { letter: '+', value: 'E' }, { letter: '=', value: 'UGUALE' }],
	'exercice': [{ letter: '5 + 8 =', value: 'Tredici' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/italy/index.js');
}();

;

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _russia = __webpack_require__(43);

var _russia2 = _interopRequireDefault(_russia);

var _elephant_little_draw_number = __webpack_require__(9);

var _elephant_little_draw_number2 = _interopRequireDefault(_elephant_little_draw_number);

var _elephant_big_draw_number = __webpack_require__(8);

var _elephant_big_draw_number2 = _interopRequireDefault(_elephant_big_draw_number);

var _number_russia = __webpack_require__(522);

var _number_russia2 = _interopRequireDefault(_number_russia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'РОССИЯ Числа от 1 до 100',
	'flag': _russia2.default,
	'download': _number_russia2.default,
	'draw': {
		'little-draw': _elephant_little_draw_number2.default,
		'big-draw': _elephant_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'один [adin]' }, { letter: '11', value: 'одиннадцать [adinacatj' }], [{ letter: '2', value: 'два [dva]' }, { letter: '12', value: 'двенадцать [dvinacatj' }], [{ letter: '3', value: 'три [tri]' }, { letter: '13', value: 'тринадцать [trinacatj]' }], [{ letter: '4', value: 'четыре [tchetirié]' }, { letter: '14', value: 'четырнадцать [chityrnacatj]' }], [{ letter: '5', value: 'пять [pyat]' }, { letter: '15', value: 'пятнадцать [pitnacatj]' }], [{ letter: '6', value: 'шесть [chiést]' }, { letter: '16', value: 'шестнадцать [shysnacatj]' }], [{ letter: '7', value: 'семь [siém]' }, { letter: '17', value: 'семнадцать [simjnacatj]' }], [{ letter: '8', value: 'восемь [vossiém\']' }, { letter: '18', value: 'восемнадцать [vosimnacatj]' }], [{ letter: '9', value: 'девять [diéviat]' }, { letter: '19', value: 'девятнадцать [divitnacatj]' }], [{ letter: '10', value: 'десять [diéciat]' }, { letter: '20', value: 'двадцать [dvacatj]' }]],
	'ten-numbers': [{ letter: '21', value: 'Двадцать один [dvacatj odin]' }, { letter: '22', value: 'Двадцать два [dvacatj dva]' }, { letter: '30', value: 'тридцать [tricatj]' }, { letter: '40', value: 'сорок [sorok]' }, { letter: '50', value: 'пятьдесят [pjatjdisjat]' }, { letter: '60', value: 'шестьдесят [shestjdisjat]' }, { letter: '70', value: 'семьдесят [semjdisjat]' }, { letter: '80', value: 'восемьдесят [vosimdisjat]' }, { letter: '90', value: 'девяносто [divjanosto]' }, { letter: '100', value: 'сто [sto]' }],
	'operator': [{ letter: 'x', value: 'умножить' }, { letter: '-', value: 'минус (вычесть)' }, { letter: ':', value: 'разделить' }, { letter: '+', value: 'плюс (прибавить)' }, { letter: '=', value: 'равно (равняется)' }],
	'exercice': [{ letter: '5 + 8 =', value: 'тринадцать' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/russia/index.js');
}();

;

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _serbia = __webpack_require__(44);

var _serbia2 = _interopRequireDefault(_serbia);

var _elephant_little_draw_number = __webpack_require__(9);

var _elephant_little_draw_number2 = _interopRequireDefault(_elephant_little_draw_number);

var _elephant_big_draw_number = __webpack_require__(8);

var _elephant_big_draw_number2 = _interopRequireDefault(_elephant_big_draw_number);

var _number_serbia = __webpack_require__(523);

var _number_serbia2 = _interopRequireDefault(_number_serbia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'Бројеви на Српском од 1 до 100',
	'flag': _serbia2.default,
	'download': _number_serbia2.default,
	'draw': {
		'little-draw': _elephant_little_draw_number2.default,
		'big-draw': _elephant_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'један [yedan]' }, { letter: '11', value: 'једанаест [yedanaest]' }], [{ letter: '2', value: 'два [dva]' }, { letter: '12', value: 'дванаест [dvanaest]' }], [{ letter: '3', value: 'три [tri]' }, { letter: '13', value: 'тринаест [Trinaest]' }], [{ letter: '4', value: 'четири [tchetiri]' }, { letter: '14', value: 'четрнаест [chetrnaest]' }], [{ letter: '5', value: 'пет [pet]' }, { letter: '15', value: 'петнаест [petnaest]' }], [{ letter: '6', value: 'шест [shest]' }, { letter: '16', value: 'шеснаест [shesnaest]' }], [{ letter: '7', value: 'седам [sedam]' }, { letter: '17', value: 'седамнаест [Sedamnaest]' }], [{ letter: '8', value: 'осам [osam]' }, { letter: '18', value: 'осамнаест [osamnaest]' }], [{ letter: '9', value: 'девет [devet]' }, { letter: '19', value: 'деветнаест [devetnaest]' }], [{ letter: '10', value: 'десет [desset]' }, { letter: '20', value: 'двадесет [dvadeset]' }]],
	'ten-numbers': [{ letter: '21', value: 'Двадесет један [dvadését]' }, { letter: '22', value: 'двадесет два [један dvadesét tédan]' }, { letter: '30', value: 'тридесет [tridéssét]' }, { letter: '40', value: 'четрдесет [chetrdéssét]' }, { letter: '50', value: 'педесет [pédéssét]' }, { letter: '60', value: 'шездесет [shézdéssét]' }, { letter: '70', value: 'седамдесет [sédamdéssét]' }, { letter: '80', value: 'осамдесет [ossamdéssét]' }, { letter: '90', value: 'деведесет [dévédéssét]' }, { letter: '100', value: 'сто [sto]' }],
	'operator': [{ letter: 'x', value: 'Пута ( puta)' }, { letter: '-', value: 'Минус (minus)' }, { letter: ':', value: 'Поделити(podéliti)' }, { letter: '+', value: 'Плус (plus)' }, { letter: '=', value: 'Једнако (yédnako)' }],
	'exercice': [{ letter: '5 + 8 =', value: 'тринаест' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/serbia/index.js');
}();

;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _southAfrica = __webpack_require__(153);

var _southAfrica2 = _interopRequireDefault(_southAfrica);

var _elephant_little_draw_number = __webpack_require__(9);

var _elephant_little_draw_number2 = _interopRequireDefault(_elephant_little_draw_number);

var _elephant_big_draw_number = __webpack_require__(8);

var _elephant_big_draw_number2 = _interopRequireDefault(_elephant_big_draw_number);

var _number_arabe = __webpack_require__(514);

var _number_arabe2 = _interopRequireDefault(_number_arabe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'الإنجليزية من 1 إلى 100',
	'flag': _southAfrica2.default,
	'download': _number_arabe2.default,
	'draw': {
		'little-draw': _elephant_little_draw_number2.default,
		'big-draw': _elephant_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'واحد [wahed]' }, { letter: '11', value: 'عشر أحد [ihda aachar]' }], [{ letter: '2', value: 'اثنان [itnan]' }, { letter: '12', value: 'عشر اثنا [itna aachar]' }], [{ letter: '3', value: 'ثلثة [talata]' }, { letter: '13', value: 'عشر ثلثة [talata aachar]' }], [{ letter: '4', value: 'أربعة [arbaa]' }, { letter: '14', value: 'عشر أربعة [arbaatou aachar]' }], [{ letter: '5', value: 'خمسة [khamsa]' }, { letter: '15', value: 'عشر خمسة [khamsatou aachar]' }], [{ letter: '6', value: 'ستة [sitatou]' }, { letter: '16', value: 'عشرة ست [sita aachar]' }], [{ letter: '7', value: 'سبعة [sabaa]' }, { letter: '17', value: 'عشر سبعة [sabaatou aachar]' }], [{ letter: '8', value: 'ثمانية [tamania]' }, { letter: '18', value: 'عشر ثمانية [tamaniatou aachar]' }], [{ letter: '9', value: 'تسعة [tisaa]' }, { letter: '19', value: 'عشر تسعة [tisaatou aachar]' }], [{ letter: '10', value: 'عشرة [aachra]' }, { letter: '20', value: 'عشرون [ichroun]' }]],
	'ten-numbers': [{ letter: '21', value: 'عشرون و واحد [wahed wa ichroun]' }, { letter: '22', value: 'عشرون و اثنان [itnani wa ichroun]' }, { letter: '30', value: 'ثلثون [talatoun]' }, { letter: '40', value: 'أربعون [arbaoun]' }, { letter: '50', value: 'خمسون [khamsoun]' }, { letter: '60', value: 'ستون [sitoun]' }, { letter: '70', value: 'سبعون [saboun]' }, { letter: '80', value: 'ثمانون [tamanoun]' }, { letter: '90', value: 'تسعون [tisoun]' }, { letter: '100', value: 'مئة [mia]' }],
	'operator': [{ letter: 'x', value: 'ف' }, { letter: '-', value: 'ناقص' }, { letter: ':', value: 'عل' }, { letter: '+', value: 'زيد' }, { letter: '=', value: 'يساوي' }],
	'exercice': [{ letter: '5 + 8 =', value: 'ثلثة عشر' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/south-africa/index.js');
}();

;

/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _spanish = __webpack_require__(45);

var _spanish2 = _interopRequireDefault(_spanish);

var _bike_little_draw_number = __webpack_require__(156);

var _bike_little_draw_number2 = _interopRequireDefault(_bike_little_draw_number);

var _bike_big_draw_number = __webpack_require__(155);

var _bike_big_draw_number2 = _interopRequireDefault(_bike_big_draw_number);

var _number_spanish = __webpack_require__(524);

var _number_spanish2 = _interopRequireDefault(_number_spanish);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'ESPAÑOL NÚMEROS DEL 1 AL 100',
	'flag': _spanish2.default,
	'download': _number_spanish2.default,
	'draw': {
		'little-draw': _bike_little_draw_number2.default,
		'big-draw': _bike_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'Uno' }, { letter: '11', value: 'Once' }, { letter: '21', value: 'Veintiuno' }, { letter: '31', value: 'Treinta y uno' }], [{ letter: '2', value: 'Dos' }, { letter: '12', value: 'Doce' }, { letter: '22', value: 'Veintidós' }, { letter: '32', value: 'Treintay dos' }], [{ letter: '3', value: 'Tres' }, { letter: '13', value: 'Trece' }, { letter: '23', value: 'Veintitrés' }, { letter: '33', value: 'Treintay tres' }], [{ letter: '4', value: 'Cuatro' }, { letter: '14', value: 'Catorce' }, { letter: '24', value: 'Veinticuatro' }, { letter: '34', value: 'Treintay cuatro' }], [{ letter: '5', value: 'Cinco' }, { letter: '15', value: 'Quince' }, { letter: '25', value: 'Veinticinco' }, { letter: '35', value: 'Treintay cinco' }], [{ letter: '6', value: 'Seis' }, { letter: '16', value: 'Dieciséis' }, { letter: '26', value: 'Veintiséis' }, { letter: '36', value: 'Treintay seis' }], [{ letter: '7', value: 'Siete' }, { letter: '17', value: 'Diecisiete' }, { letter: '27', value: 'Veintisiete' }, { letter: '37', value: 'Treintay siete' }], [{ letter: '8', value: 'Ocho' }, { letter: '18', value: 'Dieciocho' }, { letter: '28', value: 'Veintiocho' }, { letter: '38', value: 'Treintay ocho' }], [{ letter: '9', value: 'Nueve' }, { letter: '19', value: 'Diecinueve' }, { letter: '29', value: 'Veintinueve' }, { letter: '39', value: 'Treintay nueve' }], [{ letter: '10', value: 'Diez' }, { letter: '20', value: 'Veinte' }, { letter: '30', value: 'Treinta' }, { letter: '40', value: 'Cuarenta' }]],
	'ten-numbers': [{ letter: '50', value: 'Cincuenta' }, { letter: '60', value: 'Sesenta' }, { letter: '70', value: 'Setenta' }, { letter: '80', value: 'Ochenta' }, { letter: '90', value: 'Noventa' }, { letter: '100', value: 'Cien / Ciento' }],
	'operator': [{ letter: 'x', value: 'POR' }, { letter: '-', value: 'MENOS' }, { letter: ':', value: 'DIVIDO' }, { letter: '+', value: 'MAS' }, { letter: '=', value: 'IGUAL' }],
	'exercice': [{ letter: '5 + 8 =', value: 'Trece' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/spanish/index.js');
}();

;

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _tanzania = __webpack_require__(154);

var _tanzania2 = _interopRequireDefault(_tanzania);

var _elephant_little_draw_number = __webpack_require__(9);

var _elephant_little_draw_number2 = _interopRequireDefault(_elephant_little_draw_number);

var _elephant_big_draw_number = __webpack_require__(8);

var _elephant_big_draw_number2 = _interopRequireDefault(_elephant_big_draw_number);

var _number_swahili = __webpack_require__(525);

var _number_swahili2 = _interopRequireDefault(_number_swahili);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'header': 'ESPAÑOL NÚMEROS DEL 1 AL 100',
	'flag': _tanzania2.default,
	'download': _number_swahili2.default,
	'draw': {
		'little-draw': _elephant_little_draw_number2.default,
		'big-draw': _elephant_big_draw_number2.default
	},
	'numbers': [[{ letter: '1', value: 'Moja' }, { letter: '11', value: 'Kumi na moja' }, { letter: '21', value: 'Ishirini na moja' }, { letter: '31', value: 'Thelathini na moja' }], [{ letter: '2', value: 'Mbili' }, { letter: '12', value: 'Kumi na mbili' }, { letter: '22', value: 'Ishirini na mbili' }, { letter: '32', value: 'Thelathini na mbili' }], [{ letter: '3', value: 'Tatu' }, { letter: '13', value: 'Kumi na tatu' }, { letter: '23', value: 'Ishirini na tatu' }, { letter: '33', value: 'Thelathini na tatu' }], [{ letter: '4', value: 'Nne' }, { letter: '14', value: 'Kumi na nne' }, { letter: '24', value: 'Ishirini na nne' }, { letter: '34', value: 'Thelathini na nne' }], [{ letter: '5', value: 'Tano' }, { letter: '15', value: 'Kumi na tano' }, { letter: '25', value: 'Ishirini na tano' }, { letter: '35', value: 'Thelathini na tano' }], [{ letter: '6', value: 'Sita' }, { letter: '16', value: 'Kumi na sita' }, { letter: '26', value: 'Ishirini na sita' }, { letter: '36', value: 'Thelathini na sita' }], [{ letter: '7', value: 'Saba' }, { letter: '17', value: 'Kumi na saba' }, { letter: '27', value: 'Ishirini na saba' }, { letter: '37', value: 'Thelathini na saba' }], [{ letter: '8', value: 'Nane' }, { letter: '18', value: 'Kumi na nane' }, { letter: '28', value: 'Ishirini na nane' }, { letter: '38', value: 'Thelathini na nane' }], [{ letter: '9', value: 'Tisa' }, { letter: '19', value: 'Kumi na tisa' }, { letter: '29', value: 'Ishirini na tisa' }, { letter: '39', value: 'Thelathini na tisa' }], [{ letter: '10', value: 'Kumi' }, { letter: '20', value: 'Ishirini' }, { letter: '30', value: 'Thelathini' }, { letter: '40', value: 'Arobaini' }]],
	'ten-numbers': [{ letter: '50', value: 'Hansini' }, { letter: '60', value: 'Sitini' }, { letter: '70', value: 'Sabini' }, { letter: '80', value: 'Themanini' }, { letter: '90', value: 'Tisini' }, { letter: '100', value: 'Mia Moja' }],
	'operator': [{ letter: 'x', value: 'NA' }, { letter: '-', value: 'CHINI' }, { letter: ':', value: 'WALIGAWANA' }, { letter: '+', value: 'ZAIDI' }, { letter: '=', value: 'KAMA' }],
	'exercice': [{ letter: '5 + 8 =', value: 'Kumi na tatu' }, { letter: '10 + 30 =', value: '' }, { letter: '15 + 40 =', value: '' }, { letter: '20 + 50 =', value: '' }, { letter: '60 + 20 =', value: '' }]

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/number/tanzania/index.js');
}();

;

/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.presentation = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _universe = __webpack_require__(53);

var _universe2 = _interopRequireDefault(_universe);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var presentation = exports.presentation = _react2.default.createElement(
	'div',
	{ id: 'wrapper-text-image' },
	_react2.default.createElement(
		'div',
		{ className: 'wrapper-text' },
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Hello'
			),
			' ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'Kids!'
			)
		),
		_react2.default.createElement(
			'p',
			null,
			'My name is ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Pipilet Mandala'
			),
			' and I have just landed on Earth. I am an ',
			_react2.default.createElement(
				'span',
				{ className: 'purple' },
				'alien snail'
			),
			', I come from ',
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				'Planet Galappar'
			),
			', the planet of',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'music'
			),
			', ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'colours'
			),
			'and ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'love'
			),
			'.'
		),
		_react2.default.createElement(
			'p',
			null,
			'I can\u2019t speak as I only communicate through music and ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'colour'
			),
			' . Instead of writing, I',
			_react2.default.createElement(
				'span',
				{ className: 'orange' },
				'sing'
			),
			' and ',
			_react2.default.createElement(
				'span',
				{
					className: 'purple' },
				'peint'
			),
			'. I am a magic snail!!!'
		),
		_react2.default.createElement(
			'p',
			null,
			'I would really like to know you and for you ',
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				'to be my friend'
			),
			'. I love having friends all over the universe: ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'I am happy, kind and funny like you'
			),
			', and I believe we\u2019ll get along great. I am sure of it!'
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'I would like to go to school to learn your language, your culture, your customs, your history, your food, your crafts, etc. but also to understand all the children from the 5 continents and make a lot of friends.'
			),
			' I am also a gourmet and I love to cook.'
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				'I always travel with my guitar and my shell which is a mandala and a backpack'
			),
			'. In it, I put',
			_react2.default.createElement(
				'span',
				{ className: 'orange' },
				' music'
			),
			', ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'colours'
			),
			'and lots of ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'love'
			),
			'. This is great, isn\u2019t it. Well, I\u2019m going to tell you a secret. Wait no!! Come with me to discover it.'
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Would you like to play and take part in this amazing adventure? It will be marvellous! We will learn new things together and you will learn lots to things about my planet and myself.'
			)
		),
		_react2.default.createElement(
			'p',
			{ className: 'center' },
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'OK, Let\u2019s go! I\u2019m waiting for you! Come and join me!!!!'
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-image' },
			_react2.default.createElement('img', { src: _universe2.default })
		),
		_react2.default.createElement(
			'p',
			{ className: 'center' },
			'This is my ',
			_react2.default.createElement(
				'span',
				{
					className: 'green' },
				'Planet Galappar'
			),
			' . The planet of ',
			_react2.default.createElement(
				'span',
				{
					className: 'yellow' },
				'music'
			),
			', ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'colours'
			),
			' and',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'love'
			),
			'.'
		),
		_react2.default.createElement(
			'p',
			{ className: 'center' },
			'It is beautiful, isn\u2019t it?'
		)
	)
);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(presentation, 'presentation', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/presentation/english.js');
}();

;

/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.presentation = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _universe = __webpack_require__(53);

var _universe2 = _interopRequireDefault(_universe);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var presentation = exports.presentation = _react2.default.createElement(
	'div',
	{ id: 'wrapper-text-image' },
	_react2.default.createElement(
		'div',
		{ className: 'wrapper-text' },
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Bonjour'
			),
			' a tous ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'les enfants '
			),
			'!!!'
		),
		_react2.default.createElement(
			'p',
			null,
			'Je m\u2019appelle ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Pipilet Mandala'
			),
			' et je viens d\u2019arriver sur Terre il y a peu. Je suis un escargot extraterrestre, je viens de la ',
			_react2.default.createElement(
				'span',
				{
					className: 'green' },
				'plant\xE8te Galappar..'
			),
			_react2.default.createElement('br', null),
			'Qui est la plan\xE8te de la ',
			_react2.default.createElement(
				'span',
				{ className: 'orange' },
				'musique'
			),
			', de la',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'couleur'
			),
			' et de ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'l\u2019amour'
			),
			'.'
		),
		_react2.default.createElement(
			'p',
			null,
			'Je ne sais pas parler, puisque mon moyen de communication passe par la musique et la ',
			_react2.default.createElement(
				'span',
				{
					className: 'blue' },
				'couleur'
			),
			'.',
			_react2.default.createElement('br', null),
			'Et \xE0 la place de l\u2019\xE9criture, je ',
			_react2.default.createElement(
				'span',
				{ className: 'orange' },
				'chante'
			),
			' et je ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'peins'
			),
			', ',
			_react2.default.createElement(
				'span',
				{ className: 'brown' },
				'je suis un escargot magique!!!'
			)
		),
		_react2.default.createElement(
			'p',
			null,
			'J\u2019aimerais beaucoup te connaitre et ',
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				'que tu sois mon'
			),
			'ami. ',
			_react2.default.createElement('br', null),
			'J\u2019aime avoir des amis sur toutes les plan\xE8tes : ',
			_react2.default.createElement(
				'span',
				{
					className: 'red' },
				'je suis joyeux, sympathique et amusant'
			),
			' comme toi et je crois que l\u2019on va bien s\u2019entendre. Je n\u2019en ai aucun doute'
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'Je veux aller \xE0 l\u2019\xE9cole pour apprendre ta langue, ta culture, tes coutumes, ton histoire, ta gastronomie, ton folklore ; ton artisanat, etc... Mais aussi, pouvoir comprendre les enfants des cinq continents et me faire beaucoup d\u2019amis.'
			),
			' Je suis \xE9galement tr\xE8s gourmand et ',
			_react2.default.createElement(
				'span',
				{
					className: 'brown' },
				'j\u2019aime beaucoup cuisiner !!!'
			)
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				'Je voyage tout le temps avec ma guitare et ma carapace d\u2019escargot, qui est un Mandala et qui me sert de sac'
			),
			' \xE0 dos o\xF9 j\u2019am\xE8ne de la ',
			_react2.default.createElement(
				'span',
				{ className: 'orange' },
				'musique'
			),
			', de la ',
			_react2.default.createElement(
				'span',
				{
					className: 'blue' },
				'couleur'
			),
			' et beaucoup ',
			_react2.default.createElement(
				'span',
				{
					className: 'red' },
				'd\u2019amour'
			),
			' . C\u2019est super, non ? Et bien, je vais te dire un secret. Ou plut\xF4t, NON ! Viens avec moi le d\xE9couvrir !! '
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Tu veux t\u2019amuser et participer \xE0 cette aventure passionnante ? ce sera merveilleux ! On apprendra des choses ensemble et tu connaitras beaucoup plus de choses sur ma plan\xE8te et sur moi !!!'
			)
		),
		_react2.default.createElement(
			'p',
			{ className: 'center' },
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Allez, je t\u2019attends, rejoins moi !!!!!'
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-image' },
			_react2.default.createElement('img', { src: _universe2.default })
		),
		_react2.default.createElement(
			'p',
			{ className: 'center' },
			'Ceci est ma plan\xE8te le \u201C',
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				'Plan\xE8te Galappar'
			),
			'\u201D ,qui est la plan\xE8te de la ',
			_react2.default.createElement(
				'span',
				{ className: 'yellow' },
				'musique'
			),
			', de la',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'couleur'
			),
			' et de ',
			_react2.default.createElement(
				'span',
				{
					className: 'red' },
				'l\u2019amour'
			),
			'.'
		),
		_react2.default.createElement(
			'p',
			{ className: 'center' },
			'Elle est belle,non?'
		)
	)
);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(presentation, 'presentation', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/presentation/french.js');
}();

;

/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.presentation = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _universe = __webpack_require__(53);

var _universe2 = _interopRequireDefault(_universe);

__webpack_require__(35);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var presentation = exports.presentation = _react2.default.createElement(
	'div',
	{ id: 'wrapper-text-image' },
	_react2.default.createElement(
		'div',
		{ className: 'wrapper-text' },
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Hola,'
			),
			' a todos, ',
			_react2.default.createElement(
				'span',
				{
					className: 'blue' },
				'ni\xF1os'
			),
			' y ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'ni\xF1as'
			),
			':'
		),
		_react2.default.createElement(
			'p',
			null,
			'Mi nombre es ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Pipilet Mandala'
			),
			' y acabo de llegar a la Tierra. Soy un caracol ',
			_react2.default.createElement(
				'span',
				{
					className: 'purple' },
				'extraterrestre'
			),
			', que viene desde el ',
			_react2.default.createElement(
				'span',
				{
					className: 'green' },
				'planeta Galappar'
			),
			', que es el planeta de la ',
			_react2.default.createElement(
				'span',
				{
					className: 'orange' },
				'm\xFAsica'
			),
			', del ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'color'
			),
			' y del ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'amor'
			),
			'.'
		),
		_react2.default.createElement(
			'p',
			null,
			'Yo no s\xE9 hablar, ya que mi forma de comunicaci\xF3n es a trav\xE9s de la ',
			_react2.default.createElement(
				'span',
				{ className: 'orange' },
				'm\xFAsica'
			),
			' y el',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'color'
			),
			' y, en lugar de escritura, me comunico',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'pintando'
			),
			' y ',
			_react2.default.createElement(
				'span',
				{
					className: 'orange' },
				'cantando'
			),
			'. \xA1Soy un caracol m\xE1gico!'
		),
		_react2.default.createElement(
			'p',
			null,
			'Me gustar\xEDa conocerte. ',
			_react2.default.createElement(
				'span',
				{
					className: 'green' },
				'\xBFQuieres ser mi amigo?'
			),
			_react2.default.createElement('br', null),
			'Me encanta tener amigos en todos los planetas. ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'Soy alegre y divertido'
			),
			'como t\xFA, y creo que nos vamos a entender bien.'
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'Deseo ir a la escuela para aprender tu idioma y, tambi\xE9n, tu cultura, tu historia. Y quiero poder entenderme con los ni\xF1os y las ni\xF1as de los cinco continentes... y hacer muchos amigos.'
			),
			_react2.default.createElement('br', null),
			'\xA1Y me encanta cocinar!'
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				'Todo el tiempo viajo con mi guitarra y mi caparaz\xF3n de caracol, que es un mandala, y me sirve de mochila'
			),
			'. En ella llevo ',
			_react2.default.createElement(
				'span',
				{
					className: 'orange' },
				'm\xFAsica'
			),
			', ',
			_react2.default.createElement(
				'span',
				{ className: 'blue' },
				'color'
			),
			' y mucho ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'amor'
			),
			'. Es bonito \xBFverdad? Y ahora te voy a contar un secreto. Bueno, mejor... todav\xEDa \xA1NO! \xA1Ven conmigo y lo ir\xE1s descubriendo!'
		),
		_react2.default.createElement(
			'p',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'\xBFQuieres divertirte y participar en esta aventura apasionante? Ser\xE1 una experiencia maravillosa. Aprenderemos juntos y sabr\xE1s mucho de mi planeta y de m\xED. \xA1Vamos, te espero, an\xEDmate!'
			)
		),
		_react2.default.createElement(
			'div',
			{ className: 'wrapper-image' },
			_react2.default.createElement('img', { src: _universe2.default })
		),
		_react2.default.createElement(
			'p',
			{ className: 'center' },
			'Este es mi planeta: ',
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				'el planeta Galappar'
			),
			'el planeta de la ',
			_react2.default.createElement(
				'span',
				{ className: 'yellow' },
				'm\xFAsica'
			),
			', el ',
			_react2.default.createElement(
				'span',
				{
					className: 'dodgerblue' },
				'color'
			),
			' y el ',
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				'amor'
			),
			'.'
		),
		_react2.default.createElement(
			'p',
			{ className: 'center' },
			'\xBFA qu\xE9 es bonito?'
		)
	)
);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(presentation, 'presentation', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/presentation/spanish.js');
}();

;

/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fallFallBallon = __webpack_require__(47);

var _fallFallBallon2 = _interopRequireDefault(_fallFallBallon);

var _song_eng_fallFallBallon = __webpack_require__(526);

var _song_eng_fallFallBallon2 = _interopRequireDefault(_song_eng_fallFallBallon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'Fall, Fall Balloon',
	'sub-title': 'Children\'s Song',
	'download': _song_eng_fallFallBallon2.default,
	'image': _fallFallBallon2.default,
	'language': '(English)',
	'couplet': [['Fall, fall balloon,', 'Fall, fall balloon,', 'Here in my hand.'], ['Don\'t fall,', 'Don\'t fall,', 'Don\'t fall,'], ['Fall on soap street.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/fall-fall-ballon.js');
}();

;

/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _hereWeGoRoundTheMulberryBush = __webpack_require__(13);

var _hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush);

var _song_eng_hereWeGoRoundTheMulberryBush = __webpack_require__(527);

var _song_eng_hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_song_eng_hereWeGoRoundTheMulberryBush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'Here We Go Round',
	'second-title': 'the Mulberry Bush',
	'download': _song_eng_hereWeGoRoundTheMulberryBush2.default,
	'image': _hereWeGoRoundTheMulberryBush2.default,
	'language': '(English)',
	'couplet': [['Here we go round the mulberry bush*,', 'The mulberry bush, the mulberry bush;', 'Here we go round the mulberry bush', 'On a cold and frosty morning.'], ['This is the way we wash our hands**,', 'We wash our hands, we wash our hands;', 'This is the way we wash our hands', 'On a cold and frosty morning.'], ['Other verses...', 'This is the way we do our hair, etc.', 'This is the way we mend our shoes, etc.', 'This is the way we scrub our clothes, etc.', 'This is the way we dust our room, etc.', 'This is the way we clap our hands, etc.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/here-we-go-round-the-mulberry-bush.js');
}();

;

/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _itsRainning = __webpack_require__(48);

var _itsRainning2 = _interopRequireDefault(_itsRainning);

var _song_eng_itsRainning = __webpack_require__(528);

var _song_eng_itsRainning2 = _interopRequireDefault(_song_eng_itsRainning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'It\'s Raining',
	'download': _song_eng_itsRainning2.default,
	'image': _itsRainning2.default,
	'language': '(English)',
	'couplet': [['It\'s raining, grass is growing, forest is turning green,', 'It\'s raining, grass is growing, forest is turning green.'], ['In the forest, a tree is growing, slim and tall,', 'In the forest, a tree is growing, slim and tall.'], ['Under the tree my sister is sitting, I am beside her,', 'Under the tree my sister is sitting, I am beside her.']],
	information: {
		title: 'Transliteration',
		description: ['Kicha pada', 'Kicha pada, trava rastè, gora zèlèni, (2x)', 'Ou toy gori rastè drvo tanko visoko. (2x)', 'Pod nyim sèdi moya sèya, a ya porèd nyé. (2x)']
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/its-rainning.js');
}();

;

/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _patACake = __webpack_require__(17);

var _patACake2 = _interopRequireDefault(_patACake);

var _song_eng_onMondayMorning = __webpack_require__(529);

var _song_eng_onMondayMorning2 = _interopRequireDefault(_song_eng_onMondayMorning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'On Monday Morning',
	'sub-title': 'Children\'s Song',
	'download': _song_eng_onMondayMorning2.default,
	'image': _patACake2.default,
	'language': '(English)',
	'couplet': [['On Monday morning', 'The emperor, his wife and the little prince,', 'Came to my house', 'To shake my hand.', 'Since I had left,', 'The little prince said,', 'Since this is how it is,', 'We\'ll come back on Tuesday.'], ['On Tuesday morning', 'The emperor, his wife and the little prince,', 'Came to my house', 'To shake my hand.', 'Since I had left,', 'The little prince said,', 'Since this is how it is,', 'We\'ll come back on Wednesday.'], ['On Wednesday morning', 'The emperor, his wife and the little prince,', 'Came to my house', 'To shake my hand.', 'Since I had left,', 'The little prince said,', 'Since this is how it is,', 'We\'ll come back on Thursday.'], ['On Thursday morning', 'The emperor, his wife and the little prince,', 'Came to my house', 'To shake my hand.', 'Since I had left,', 'The little prince said,', 'Since this is how it is,', 'We\'ll come back on Friday.'], ['On Friday morning', 'The emperor, his wife and the little prince,', 'Came to my house', 'To shake my hand.', 'Since I had left,', 'The little prince said,', 'Since this is how it is,', 'We\'ll come back on Saturday.'], ['On Saturday morning', 'The emperor, his wife and the little prince,', 'Came to my house', 'To shake my hand.', 'Since I had left,', 'The little prince said,', 'Since this is how it is,', 'We\'ll come back on Sunday.'], ['On Sunday morning', 'The emperor, his wife and the little prince,', 'Came to my house', 'To shake my hand.', 'Since I had left,', 'The little prince said,', 'Since he\'s not here anymore,', 'We won\'t come back again.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/on-monday-morning.js');
}();

;

/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _song_eng_patACake = __webpack_require__(530);

var _song_eng_patACake2 = _interopRequireDefault(_song_eng_patACake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'Pat-a-cake',
	'download': _song_eng_patACake2.default,
	'image': _winterIsHere2.default,
	'language': '(English)',
	'couplet': [['Pat-a-cake, pat-a-cake,', 'Where were you?', 'At granny\'s!', 'What did you eat?', 'Porridge*!', '  What did you drink?', 'A little home-brewed beer**', 'The porridge is buttered,', 'The home-brewed beer is sweet,', 'Granny is kind!']],
	information: {
		title: 'Translittération:',
		description: ['Ladushki, ladushki', 'Gde byli?', '-U babushki.', 'Chto eli?', '- Kashku.', 'Chto pili?', '-Brazhku.', 'Kashka maslen\'ka', 'Brazhka sladen\'ka', 'Babushka dobren\'ka!', 'U = ou', 'Sh = ch', 'E = é', 'Ch = tch', 'Zh = j']
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/pat-a-cake.js');
}();

;

/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _song_eng_siMaMaKa = __webpack_require__(531);

var _song_eng_siMaMaKa2 = _interopRequireDefault(_song_eng_siMaMaKa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'SI MA MA KA',
	'download': _song_eng_siMaMaKa2.default,
	'image': _winterIsHere2.default,
	'language': '(English)',
	'couplet': [['Si si Kumbalé, le.', 'Banma, banma le, le..'], ['Si si Kumbalé, le.', 'Banma, banma le, le..'], ['Banma, banma lengue, lengue.', 'Banma, banma lengue, lengue.', 'Banma, banma lengue, lengue. (4 times)'], ['Donde, donde Kumbalé,e , kumbalé, e, le. (4 times)']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/si-ma-ma-ka.js');
}();

;

/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _springHasCome = __webpack_require__(49);

var _springHasCome2 = _interopRequireDefault(_springHasCome);

var _song_eng_springHasCome = __webpack_require__(532);

var _song_eng_springHasCome2 = _interopRequireDefault(_song_eng_springHasCome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'Spring Has Come',
	'sub-title': 'Folk Song (Dialecte sicilien)',
	'download': _song_eng_springHasCome2.default,
	'image': _springHasCome2.default,
	'language': '(English)',
	'couplet': [['Spring has come', 'The almond trees are in bloom', 'And the fire of love', 'Has awoken in my heart.', 'Amidst the sun and flowers,', 'Little birds are flying', 'All of these beautiful things', 'Make me sigh.'], ['(Chorus)', 'Rosa got married,', 'and Sara and Josephine,', 'and I who am beautiful,', 'I want to get married too.', 'Rosa got married', 'and Sara and Josephine,', 'But I who am beautiful', 'I am not married.'], ['So many handsome guys', 'Walk down this street;', 'But not even a glance', 'Do they give to my house.', 'Certainly this desire', 'Is destroying my life,', 'I want to get engaged', 'I want to get married.'], ['(Chorus)'], ['My dowry is ready,', 'A house as well,', 'I don\'t want to stay single', 'I am already a bit old.', 'It\'s my mother\'s fault', 'She kept me at home too much', 'But now all day long', 'I go here and there.'], ['(Chorus)']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/spring-has-come.js');
}();

;

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _hereWeGoRoundTheMulberryBush = __webpack_require__(13);

var _hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush);

var _song_eng_theCourtyardOfMyHouse = __webpack_require__(533);

var _song_eng_theCourtyardOfMyHouse2 = _interopRequireDefault(_song_eng_theCourtyardOfMyHouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'The Courtyard of My House',
	'download': _song_eng_theCourtyardOfMyHouse2.default,
	'image': _hereWeGoRoundTheMulberryBush2.default,
	'language': '(English)',
	'couplet': [['The courtyard of my house', 'Is special:', 'When it rains, it gets wet', 'As the others do.'], ['Duck down,', 'And duck down again', 'The little ducked-down ones', 'Know well how to play.'], ['H, I, J, K,', 'L, LL, M, A,', 'If you don\'t love me', 'Another girl will.'], ['Yellow chocolate,', 'Run, run or I\'ll catch you,', 'Stretch, stretch', 'For the devil must pass by.']],
	information: {
		title: 'Game Instructions:',
		description: ['The children form a circle holding hands and walk around singing the first part of the song. When they reach "agáchate y vuélvete agachar" they should squat twice. When they reach "chocolate" they stop walking around and go forwards raising their arms. Then on "estirar..." they go backwards stretching their arms to form a large circle without letting go of each others\' hands.']
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/the-courtyard-of-my-house.js');
}();

;

/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _song_eng_theWasherman = __webpack_require__(534);

var _song_eng_theWasherman2 = _interopRequireDefault(_song_eng_theWasherman);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'The Washerman',
	'download': _song_eng_theWasherman2.default,
	'image': _winterIsHere2.default,
	'language': '(English)',
	'couplet': [['The washerman, washerman came,', 'He brought how many clothes?', 'One, two, three,', 'One, two, three...'], ['The washerman, washerman came,', 'He brought how many clothes?', 'Four, five, six,', 'Four, five, six...'], ['The washerman, washerman came,', 'He brought how many clothes?', 'Seven, eight, nine,', 'Seven, eight, nine...'], ['The washerman, washerman came,', 'He brought how many clothes?', 'Ten, ten, ten,', 'Brother, ten, ten, ten.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/the-washerman.js');
}();

;

/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _song_eng_ticTicTic = __webpack_require__(535);

var _song_eng_ticTicTic2 = _interopRequireDefault(_song_eng_ticTicTic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'Tic Tic Tic Sleiman\'s Mother',
	'download': _song_eng_ticTicTic2.default,
	'image': _winterIsHere2.default,
	'language': '(English)',
	'couplet': [['Tic Tic Tic Sleiman\'s mother', 'Tic Tic Tic where was your husband?', 'Tic Tic Tic he was in the fields', 'Picking plums and pomegranates']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/tic-tic-tic.js');
}();

;

/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _twoTigers = __webpack_require__(50);

var _twoTigers2 = _interopRequireDefault(_twoTigers);

var _song_eng_twoTigers = __webpack_require__(536);

var _song_eng_twoTigers2 = _interopRequireDefault(_song_eng_twoTigers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'Two Tigers',
	'download': _song_eng_twoTigers2.default,
	'image': _twoTigers2.default,
	'language': '(English)',
	'couplet': [['Two Tigers', 'Two Tigers', 'Running fast', 'Running fast', 'One of them has no eyes', 'One of them has no tail', 'Very strange!', 'Very strange!']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/two-tigers.js');
}();

;

/***/ }),
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _song_eng_winter_is_here = __webpack_require__(537);

var _song_eng_winter_is_here2 = _interopRequireDefault(_song_eng_winter_is_here);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'eng',
	'title': 'A, a, a, l\'hiver est là',
	'download': _song_eng_winter_is_here2.default,
	'image': _winterIsHere2.default,
	'language': '(English)',
	'couplet': [['A, a, a, winter is here!', 'Autumn and summer have gone,', 'Winter has begun.', 'A, a, a, winter is here!'], ['E, e, e, it brings us ice and snow,', 'It paints for us, to pass the time,', 'Flowers on the windowpanes.', 'E, e, e, it brings us ice and snow.'], ['I, i, i, never forget the poor!', 'When you\'re lying on warm cushions', 'Think of those who must freeze!', 'I, i, i, never forget the poor!'], ['O, o, o, what cheerful children we are!', 'Every night, in a dream, we see ourselves', 'Under the Christmas tree.', 'O, o, o, what cheerful children we are!'], ['U, u, u, now I know what to do!', 'I\'ll get the sleigh out of the cellar', 'And then I\'ll go faster and faster.', 'U, u, u, now I know what to do!']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/eng/winter-is-here.js');
}();

;

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _fallFallBallon = __webpack_require__(47);

var _fallFallBallon2 = _interopRequireDefault(_fallFallBallon);

var _song_fr_fallFallBallon = __webpack_require__(550);

var _song_fr_fallFallBallon2 = _interopRequireDefault(_song_fr_fallFallBallon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_fallFallBallon2.default,
	'title': 'Tombe, tombe, ballon',
	'sub-title': 'Chanson enfantine',
	'image': _fallFallBallon2.default,
	'language': '(Français)',
	'couplet': [['Tombe, tombe, ballon,', 'Tombe, tombe, ballon', 'Ici dans ma main.'], ['Ne tombe pas,', 'Ne tombe pas', 'Ne tombe pas.'], ['Tombe dans la rue du savon.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/fall-fall-ballon.js');
}();

;

/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _hereWeGoRoundTheMulberryBush = __webpack_require__(13);

var _hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush);

var _song_fr_hereWeGoRoundTheMulberryBush = __webpack_require__(551);

var _song_fr_hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_song_fr_hereWeGoRoundTheMulberryBush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_hereWeGoRoundTheMulberryBush2.default,
	'title': 'On tourne autour',
	'second-title': ' du buisson de mûres',
	'image': _hereWeGoRoundTheMulberryBush2.default,
	'language': '(Français)',
	'couplet': [['On tourne autour du buisson de mûres,', 'Buisson de mûres, buisson de mûres;', 'On tourne autour du buisson de mûres', 'Par un matin froid et givré.'], ['C\'est ainsi qu\'on se lave les mains,', 'Lave les mains, lave les mains', 'C\'est ainsi qu\'on se lave les mains', 'Par un matin froid et givré.'], ['Autres couplets...', 'C\'est ainsi qu\'on coiffe nos cheveux, ...', 'C\'est ainsi qu\'on répare nos souliers, ...', 'C\'est ainsi qu\'on lave nos vêtements, ...', 'C\'est ainsi qu\'on dépoussière notre chambre,']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/here-we-go-round-the-mulberry-bush.js');
}();

;

/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _itsRainning = __webpack_require__(48);

var _itsRainning2 = _interopRequireDefault(_itsRainning);

var _song_fr_itsRainning = __webpack_require__(552);

var _song_fr_itsRainning2 = _interopRequireDefault(_song_fr_itsRainning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_itsRainning2.default,
	'title': 'Il pleut',
	'sub-title': 'Chanson traditionnelle',
	'image': _itsRainning2.default,
	'language': '(Français)',
	'couplet': [['Il pleut, l\'herbe pousse, la forêt verdit', 'Il pleut, l\'herbe pousse, la forêt verdit.'], ['Dans la forêt, l\'arbre pousse, mince et haut', 'Dans la forêt, l\'arbre pousse, mince et haut.'], ['Sous l\'arbre, ma sœur est assise, je suis près d\'elle', 'Sous l\'arbre, ma sœur est assise, je suis près d\'elle.']],
	information: {
		title: 'Translittération',
		description: ['Kicha pada', 'Kicha pada, trava rastè, gora zèlèni, (2x)', 'Ou toy gori rastè drvo tanko visoko. (2x)', 'Pod nyim sèdi moya sèya, a ya porèd nyé. (2x)']
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/its-rainning.js');
}();

;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _patACake = __webpack_require__(17);

var _patACake2 = _interopRequireDefault(_patACake);

var _song_fr_onMondayMorning = __webpack_require__(553);

var _song_fr_onMondayMorning2 = _interopRequireDefault(_song_fr_onMondayMorning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_onMondayMorning2.default,
	'title': 'Lundi matin',
	'sub-title': 'Chanson enfantine',
	'image': _patACake2.default,
	'language': '(Française)',
	'couplet': [['Lundi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince*', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons mardi.'], ['Mardi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons mercredi.'], ['Mercredi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons jeudi.'], ['Jeudi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons vendredi.'], ['Vendredi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons samedi.'], ['Samedi matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisque c\'est ainsi', 'Nous reviendrons dimanche.'], ['Dimanche matin,', 'L\'emp\'reur, sa femme et le p\'tit prince', 'Sont venus chez moi', 'Pour me serrer la pince', 'Comm\' j\'étais parti', 'Le p\'tit prince a dit', 'Puisqu\'il n\'y est plus', 'Nous ne reviendrons plus.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/on-monday-morning.js');
}();

;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _patACake = __webpack_require__(17);

var _patACake2 = _interopRequireDefault(_patACake);

var _song_fr_patACake = __webpack_require__(554);

var _song_fr_patACake2 = _interopRequireDefault(_song_fr_patACake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_patACake2.default,
	'title': 'Frappe des mains',
	'sub-title': 'Chanson pour frapper dans les mains',
	'image': _patACake2.default,
	'language': '(Français)',
	'couplet': [['Frappe des mains, frappe des mains,', 'Où es-tu?', 'Chez mamie!', 'Qu\'as-tu mangé?', 'De la bouillie*!', 'Qu\'as-tu bu?', 'De la boisson fermentée**', 'La bouillie a du beurre,', 'La boisson fermentée est douce,', 'Mamie est gentille !']],
	information: {
		title: 'Translittération:',
		description: ['Ladushki, ladushki', 'Gde byli?', '-U babushki.', 'Chto eli?', '- Kashku.', 'Chto pili?', '-Brazhku.', 'Kashka maslen\'ka', 'Brazhka sladen\'ka', 'Babushka dobren\'ka!', 'U = ou', 'Sh = ch', 'E = é', 'Ch = tch', 'Zh = j']
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/pat-a-cake.js');
}();

;

/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _song_fr_siMaMaKa = __webpack_require__(555);

var _song_fr_siMaMaKa2 = _interopRequireDefault(_song_fr_siMaMaKa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_siMaMaKa2.default,
	'title': 'SI MA MA KA',
	'image': _winterIsHere2.default,
	'language': '(Français)',
	'couplet': [['Si si Kumbalé, le.', 'Banma, banma le, le..'], ['Si si Kumbalé, le.', 'Banma, banma le, le..'], ['Banma, banma lengue, lengue.', 'Banma, banma lengue, lengue.', 'Banma, banma lengue, lengue.(4 times)'], ['Donde, donde Kumbalé,e , kumbalé, e, le.(4 times)']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/si-ma-ma-ka.js');
}();

;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _springHasCome = __webpack_require__(49);

var _springHasCome2 = _interopRequireDefault(_springHasCome);

var _song_fr_springHasCome = __webpack_require__(556);

var _song_fr_springHasCome2 = _interopRequireDefault(_song_fr_springHasCome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_springHasCome2.default,
	'title': 'Rose s\'est mariée',
	'sub-title': 'Folk Song (Dialecte sicilien)',
	'image': _springHasCome2.default,
	'language': '(Français)',
	'couplet': [['Le printemps est arrivé,', 'Les amandiers sont en fleur', 'Le feu de l\'amour', 'A embrasé mon cœur.', 'Et parmi le soleil et les fleurs', 'Les oiseaux volent.', 'Toutes ces belles choses', 'Me font soupirer.'], ['Refrain', 'Rose s\'est mariée,', 'Et Saridda et Pippinedda', 'E moi, qui suis belle,', 'Je veux me marier.', 'Rose s\'est mariée', 'Et Sarrida et Pippinedda', 'Mais moi qui suis belle,'], ['Mariée je ne le suis pas.', 'Tant de beaux jeunes hommes', 'Passent dans cette rue,', 'Mais pas un seul regard', 'Ils ne jettent vers ma maison.', 'Certes, ce désir', 'Me détruit la vie,', 'Je veux me fiancer,', 'Je veux me marier.'], ['(Refrain)'], ['La dot, je l\'ai faite,', 'J\'ai la maison aussi,', 'Je ne veux pas rester vieille fille,', 'Je suis déjà un peu passée,', 'C\'est la faute de ma mère', 'Elle me tient retirée,', 'Mais pendant la journée', 'Je vais de ci de là.'], ['(Refrain)']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/spring-has-come.js');
}();

;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _hereWeGoRoundTheMulberryBush = __webpack_require__(13);

var _hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush);

var _song_fr_theCourtyardOfMyHouse = __webpack_require__(557);

var _song_fr_theCourtyardOfMyHouse2 = _interopRequireDefault(_song_fr_theCourtyardOfMyHouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_theCourtyardOfMyHouse2.default,
	'title': 'La cour de ma maison',
	'image': _hereWeGoRoundTheMulberryBush2.default,
	'language': '(Français)',
	'couplet': [['La cour de ma maison', 'Est particulière :', 'Quand il pleut, elle se mouille', 'Comme les autres.'], ['Baisse-toi,', 'Et baisse-toi encore', 'Car les petits baissés', 'Savent bien jouer'], ['H, I, J, K', 'L, LL, M, A', 'Si tu ne m\'aimes pas', 'Une autre fille m\'aimera.'], ['Chocolat jaune', 'Cours, cours que je t\'attrape.', 'Tirez, tirez', 'Car le diable doit passer.']],
	information: {
		title: 'Règles du jeu',
		description: ['Les enfants forment une ronde en se donnant la main et tournent sur la première partie de la\n' + 'chanson. Quand ils arrivent au morceau "agáchate y vuélvete agachar" ils doivent s\'accroupir deux\n' + 'fois. Ils s\'arrêtent de tourner en arrivant à "chocolate" et ils avancent vers le centre en levant les\n' + 'bras. Au contraire, sur la partie finale "estirar..." ils s\'éloignent du centre en étirant les bras le plus\n' + 'possible pour former un grand cercle sans se lâcher les mains.']
	}

};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/the-courtyard-of-my-house.js');
}();

;

/***/ }),
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _song_fr_theWasherman = __webpack_require__(558);

var _song_fr_theWasherman2 = _interopRequireDefault(_song_fr_theWasherman);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_theWasherman2.default,
	'title': 'Le blanchisseur',
	'image': _winterIsHere2.default,
	'language': '(Français)',
	'couplet': [['Le blanchisseur, blanchisseur est venu.', 'Combien de vêtements a-t-il apporté ?', 'Un, deux, trois,', 'Un, deux, trois...'], ['Le blanchisseur, blanchisseur est venu.', 'Combien de vêtements a-t-il apporté ?', 'Quatre, cinq, six,', 'Quatre, cinq, six...'], ['Le blanchisseur, blanchisseur est venu.', 'Combien de vêtements a-t-il apporté ?', 'Sept, huit, neuf,', 'Sept, huit, neuf...'], ['Le blanchisseur, blanchisseur est venu.', 'Combien de vêtements a-t-il apporté ?', 'Dix, dix, dix,', 'Mon frère, dix .']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/the-washerman.js');
}();

;

/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _song_fr_ticTicTic = __webpack_require__(559);

var _song_fr_ticTicTic2 = _interopRequireDefault(_song_fr_ticTicTic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_ticTicTic2.default,
	'title': 'Tic, tic, tic, mère de Sleiman',
	'image': _winterIsHere2.default,
	'language': '(Français)',
	'couplet': [['Tic, tic, tic, mère de Sleiman', 'Tic, tic, tic, où était votre mari ?', 'Tic, tic, tic, il était dans les champs', 'Ramassant des prunes et des grenades.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/tic-tic-tic.js');
}();

;

/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _twoTigers = __webpack_require__(50);

var _twoTigers2 = _interopRequireDefault(_twoTigers);

var _song_fr_twoTigers = __webpack_require__(560);

var _song_fr_twoTigers2 = _interopRequireDefault(_song_fr_twoTigers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_twoTigers2.default,
	'title': 'Deux vieux tigres',
	'image': _twoTigers2.default,
	'language': '(Français)',
	'couplet': [['Deux vieux tigres', 'Deux vieux tigres', 'Courant très vite', 'Courant très vite', 'Un n\'a pas d\'yeux', 'Un n\'a pas de queue', 'Que c\'est étrange !', 'Que c\'est étrange !']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/two-tigers.js');
}();

;

/***/ }),
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _winterIsHere = __webpack_require__(5);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _song_fr_winterIsHere = __webpack_require__(561);

var _song_fr_winterIsHere2 = _interopRequireDefault(_song_fr_winterIsHere);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'fr',
	'download': _song_fr_winterIsHere2.default,
	'title': 'A, a, a, l\'hiver est là',
	'image': _winterIsHere2.default,
	'language': '(Français)',
	'couplet': [['A, a, a, l\'hiver est là !', 'L\'automne et l\'été sont passés,', 'L\'hiver a commencé.', 'A, a, a, l\'hiver est là !'], ['E, e, e, il apporte la glace et la neige,', 'Il nous peint, pour passer le temps', 'Des fleurs aux carreaux des fenêtres.', 'E, e, e, il apporte la glace et la neige.'], ['I, i, i, n\'oublie jamais les pauvres !', 'Quand tu es étendu sur de chauds coussins,', 'Pense à ceux qui doivent se geler !', 'I, i, i, n\'oublie jamais les pauvres !'], ['O, o, o, que nous sommes de joyeux enfants !', 'Chaque nuit, nous nous voyons en rêve', 'Sous l\'arbre de Noël.', 'O, o, o, que nous sommes de joyeux enfants !'], ['U, u, u, maintenant, je sais quoi faire !', 'Je vais chercher le traîneau à la cave', 'Et je vais de plus en plus vite.', 'U, u, u, maintenant, je sais quoi faire !']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/fr/winter-is-here.js');
}();

;

/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_fallFallBallon = __webpack_require__(538);

var _song_esp_fallFallBallon2 = _interopRequireDefault(_song_esp_fallFallBallon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_fallFallBallon2.default,
	'title': 'Cae, cae, globo',
	'language': '(Español)',
	'couplet': [['Cae, cae, globo', 'Cae, cae, globo', 'Aquí en mi mano.'], ['No caiga, no', 'No caiga, no,', 'No caiga, no.'], ['Cae en la carretera del jabón.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/fall-fall-ballon.js');
}();

;

/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_hereWeGoRoundTheMulberryBush = __webpack_require__(539);

var _song_esp_hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_song_esp_hereWeGoRoundTheMulberryBush);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_hereWeGoRoundTheMulberryBush2.default,
	'title': 'Giramos alrededor',
	'second-title': 'del moral',
	'language': '(Español)',
	'couplet': [['Giramos alrededor del moral', 'Del moral, del moral;', 'Giramos alrededor del moral', 'Por una mañana fría***.'], ['Nos lavamos las manos así,', 'Las manos así, las manos así', 'Nos lavamos las manos así', 'Por una mañana fría.'], ['Otras estrofas...', 'Nos peinamos el pelo así, etc.', 'Reparamos nuestros zapatos así, etc.', 'Lavamos nuestras ropas así, etc.', 'Quitamos el polvo de nuestra pieza así, etc.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/here-we-go-round-the-mulberry-bush.js');
}();

;

/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_itsRainning = __webpack_require__(540);

var _song_esp_itsRainning2 = _interopRequireDefault(_song_esp_itsRainning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_itsRainning2.default,
	'title': 'Llueve',
	'language': '(Español)',
	'couplet': [['Llueve, la hierba crece, el bosque verdea', 'Llueve, la hierba crece, el bosque verdea.'], ['En el bosque, el árbol crece, alto y delgado', 'En el bosque, el árbol crece, alto y delgado.'], ['Debajo el árbol está sentada mi hermana, estoy a su lado', 'Debajo el árbol está sentada mi hermana, estoy a su lado.']],
	information: {
		title: 'Transliteración',
		description: ['Kisha pada', 'Kisha pada, trava raste, gora zeleni, (2x)', 'U toy gori raste drvo tanko visoko. (2x)', 'Pod nyim sedi moya seya, a ya pored nye. (2x)', 'Las "e" son abiertas', '"sh" como en inglés', '"z" como en francés o inglés.']
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/its-rainning.js');
}();

;

/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_onMondayMorning = __webpack_require__(541);

var _song_esp_onMondayMorning2 = _interopRequireDefault(_song_esp_onMondayMorning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_onMondayMorning2.default,
	'title': 'El lunes por la mañana',
	'sub-title': 'Canción infantil',
	'language': '(Español)',
	'couplet': [['El lunes por la mañana', 'El emperador, su mujer, y el principito', 'Vinieron a mi casa', 'Para saludarme*', 'Pero como me había ido', 'El principito dijo', 'Pues es así', 'Volveremos el martes.'], ['El martes por la mañana', 'El emperador, su mujer, y el principito', 'Vinieron a mi casa', 'Para saludarme*', 'Pero como me había ido', 'El principito dijo', 'Pues es así', 'Volveremos el miércoles.'], ['El miércoles por la mañana', 'El emperador, su mujer, y el principito', 'Vinieron a mi casa', 'Para saludarme*', 'Pero como me había ido', 'El principito dijo', 'Pues es así', 'Volveremos el jueves.'], ['El jueves por la mañana', 'El emperador, su mujer, y el principito', 'Vinieron a mi casa', 'Para saludarme*', 'Pero como me había ido', 'El principito dijo', 'Pues es así', 'Volveremos el viernes.'], ['El viernes por la mañana', 'El emperador, su mujer, y el principito', 'Vinieron a mi casa', 'Para saludarme*', 'Pero como me había ido', 'El principito dijo', 'Pues es así', 'Volveremos el sábado.'], ['El sábado por la mañana', 'El emperador, su mujer, y el principito', 'Vinieron a mi casa', 'Para saludarme*', 'Pero como me había ido', 'El principito dijo', 'Pues es así', 'Volveremos el domingo.'], ['El domingo por la mañana', 'El emperador, su mujer, y el principito', 'Vinieron a mi casa', 'Para saludarme*', 'Pero como me había ido', 'El principito dijo', 'Pues ya no está', 'No volveremos jamás.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/on-monday-morning.js');
}();

;

/***/ }),
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_patACake = __webpack_require__(542);

var _song_esp_patACake2 = _interopRequireDefault(_song_esp_patACake);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_patACake2.default,
	'title': 'Bate las manos',
	'sub-title': 'Canción para jugar a las palmas',
	'language': '(Español)',
	'couplet': [['Bate las manos, bate las manos.', '¿Dónde estás?', '¡En casa de la abuela!', '¿Qué comiste?', '¡Gachas*!', '¿Qué bebiste?', 'Bebida fermentada**.', 'Las gachas llevan mantequilla,', 'La bebida fermentada está dulce,', 'Abuelita es muy buena.']],
	information: {
		title: 'Transliteración:',
		description: ['Ladushki, ladushki', 'Gde byli?', '-U babushki.', 'Chto eli?', '- Kashku.', 'Chto pili?', '-Brazhku.', 'Kashka maslen\'ka', 'Brazhka sladen\'ka', 'Babushka dobren\'ka!', 'Sh como en inglés', 'Zh = como una "j" francesa']
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/pat-a-cake.js');
}();

;

/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_siMaMaKa = __webpack_require__(543);

var _song_esp_siMaMaKa2 = _interopRequireDefault(_song_esp_siMaMaKa);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_siMaMaKa2.default,
	'title': 'SI MA MA KA',
	'language': '(Español)',
	'couplet': [['Si si Kumbalé, le.', 'Banma, banma le, le..'], ['Si si Kumbalé, le.', 'Banma, banma le, le.'], ['Banma, banma lengue, lengue.', 'Banma, banma lengue, lengue.', 'Banma, banma lengue, lengue. (4 veces todo)'], ['Donde, donde Kumbalé,e , kumbalé, e, le. (4veces)']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/si-ma-ma-ka.js');
}();

;

/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_springHasCome = __webpack_require__(544);

var _song_esp_springHasCome2 = _interopRequireDefault(_song_esp_springHasCome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_springHasCome2.default,
	'title': 'Se ha casado rosa',
	'sub-title': 'Canción Folk (Dialecto siciliano)',
	'language': '(Español)',
	'couplet': [['Vino la primavera,', 'Los almendros están en flor,', 'El fuego del amor', 'El corazón me prendió.', 'Y entre el sol y las flores', 'Vuelan los pájaros.', 'Todas estas cosas bellas', 'Me hacen suspirar.'], ['(Coro)', 'Si casó Rosa,', 'Saridda y Pippinedda,', 'Y yo, que soy bella,', 'Me quiero casar.', 'Se casó Rosa,', 'Saridda y Pippinedda', 'Pero yo que soy bella,', 'Casada no lo estoy.'], ['Tantos mocitos guapos', 'Pasan por esta calle;', 'Pero ni una mirada', 'A mi casa dan.', 'Claro, este deseo', 'Me destruye la vida,', 'Quiero tener novio,', 'Me quiero casar.'], ['(Coro)'], ['La dote, la he hecho,', 'Tengo casa también,', 'Soltera no quiero quedarme,', 'Madura soy ya', 'La culpa es de mi madre,', 'Me tiene retirada,', 'Pero siempre por el día', 'Voy aquí y allá.'], ['(Coro)']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/spring-has-come.js');
}();

;

/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_theCourtyardOfMyHouse = __webpack_require__(545);

var _song_esp_theCourtyardOfMyHouse2 = _interopRequireDefault(_song_esp_theCourtyardOfMyHouse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_theCourtyardOfMyHouse2.default,
	'title': 'El patio de mi casa',
	'language': '(Español)',
	'couplet': [['El patio de mi casa', 'Es particular :', 'Cuando llueve se moja', 'Como los demás.'], ['Agáchate', 'Y vuélvete a agachar', 'Que los agachaditos', 'Saben bien jugar.'], ['Hache, i, jota, ka', 'Ele, elle, eme, a,', 'Que si tú no me quieres', 'Otra niña me querrá.'], ['Chocolate amarillo', 'Corre, corre, que te pillo', 'Estirad, estirad', 'que el demoño ha de pasar']],
	information: {
		title: 'Reglas del juego',
		description: ['Los niños se colocan en corro tomados de las manos y van girando durante la primer parte de la canción. Cuando llegan a la parte "agáchate y vuélvete agachar" se deben agachar dos veces. Se	 paran de girar cuando llegan a "chocolate..." y se acercan del centro del corro levantando los	 brazos. En la parte "estirar..." se alejan del centro estirando los brazos lo más posible para hacer un	 corro grande sin soltar las manos.']
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/the-courtyard-of-my-house.js');
}();

;

/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_theWasherman = __webpack_require__(546);

var _song_esp_theWasherman2 = _interopRequireDefault(_song_esp_theWasherman);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_theWasherman2.default,
	'title': 'El lavandero',
	'language': '(Español)',
	'couplet': [['El lavandero, el lavandero vino.', '¿Cuántas prendas trajo?', 'Una, dos, tres,', 'Una, dos, tres.'], ['El lavandero, el lavandero vino.', '¿Cuántas prendas trajo?', 'Cuatro, cinco, seis,', 'Cuatro, cinco, seis...'], ['El lavandero, el lavandero vino.', '¿Cuántas prendas trajo?', 'Siete, ocho, nueve,', 'Siete, ocho, nueve...'], ['El lavandero, el lavandero vino.', '¿Cuántas prendas trajo?', 'Diez, diez, diez,', 'Hermano, diez, diez, diez.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/the-washerman.js');
}();

;

/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_ticTicTic = __webpack_require__(547);

var _song_esp_ticTicTic2 = _interopRequireDefault(_song_esp_ticTicTic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_ticTicTic2.default,
	'title': 'Tic, tic, tic, madre de Sleiman',
	'language': '(Español)',
	'couplet': [['Tic, tic, tic, madre de Sleiman', 'Tic, tic, tic, ¿dónde estaba su marido?', 'Tic, tic, tic, estaba en los campos', 'Recogiendo ciruelas y granadas.']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/tic-tic-tic.js');
}();

;

/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_twoTigers = __webpack_require__(548);

var _song_esp_twoTigers2 = _interopRequireDefault(_song_esp_twoTigers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_twoTigers2.default,
	'title': 'Dos tigres viejos',
	'language': '(Español)',
	'couplet': [['Dos tigres viejos', 'Dos tigres viejos', 'Corriendo muy rápido', 'Corriendo muy rápido', 'Uno no tiene ojos', 'Uno no tiene rabo', '¡Qué raro!', '¡Qué raro']],
	information: {
		title: 'Pinyin',
		description: ['liang3 zhi3 lao3 hu3', 'liang3 zhi3 lao3 hu3', 'pao3 de kuai4', 'pao3 de kuai4', 'yi4 zhi3 mei2 you3 yan3 jing1', 'yi4 zhi3 mei2 you3 wei3 ba', 'zhen1qi2 guai4', 'zhen1 qi2 guai4']
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/two-tigers.js');
}();

;

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _song_esp_winterIsHere = __webpack_require__(549);

var _song_esp_winterIsHere2 = _interopRequireDefault(_song_esp_winterIsHere);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = {
	'id': 'esp',
	'download': _song_esp_winterIsHere2.default,
	'title': 'A, a, a, el invierno llego ya',
	'language': '(Español)',
	'couplet': [['A, a, a, ¡el invierno llegó ya!', 'El otoño y el verano ya pasaron,', 'El invierno ya empezó.', 'A, a, a, ¡el invierno llegó ya!'], ['E, e, e, trae hielo y nieve,', 'Nos pinta, para pasar el tiempo', 'Flores en los cristales de las ventanas.', 'E, e, e, trae hielo y nieve.'], ['I, i, i, ¡nunca te olvides de los pobres!', 'Cuando estás tirado en cojines calientes,', '¡Piensa en los que tienen que helarse!', 'I, i, i, ¡nunca te olvides de los pobres!'], ['O, o, o, ¡qué niños alegres somos!', 'Cada noche, nos vemos en sueño', 'Bajo el árbol de Navidad.', 'O, o, o, ¡qué niños alegres somos!'], ['U, u, u, ¡ahora sé qué hacer!', 'Voy a buscar el trineo en el sótano,', 'Y conduzco cada vez más deprisa.', 'U, u, u, ¡ahora sé qué hacer!']]
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/songs/spa/winter-is-here.js');
}();

;

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _information = __webpack_require__(34);

var _information2 = _interopRequireDefault(_information);

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletDescription = __webpack_require__(18);

var _pipiletDescription2 = _interopRequireDefault(_pipiletDescription);

var _winterIsHere = __webpack_require__(290);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _fallFallBallon = __webpack_require__(279);

var _fallFallBallon2 = _interopRequireDefault(_fallFallBallon);

var _theWasherman = __webpack_require__(287);

var _theWasherman2 = _interopRequireDefault(_theWasherman);

var _ticTicTic = __webpack_require__(288);

var _ticTicTic2 = _interopRequireDefault(_ticTicTic);

var _siMaMaKa = __webpack_require__(284);

var _siMaMaKa2 = _interopRequireDefault(_siMaMaKa);

var _theCourtyardOfMyHouse = __webpack_require__(286);

var _theCourtyardOfMyHouse2 = _interopRequireDefault(_theCourtyardOfMyHouse);

var _hereWeGoRoundTheMulberryBush = __webpack_require__(280);

var _hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush);

var _itsRainning = __webpack_require__(281);

var _itsRainning2 = _interopRequireDefault(_itsRainning);

var _twoTigers = __webpack_require__(289);

var _twoTigers2 = _interopRequireDefault(_twoTigers);

var _springHasCome = __webpack_require__(285);

var _springHasCome2 = _interopRequireDefault(_springHasCome);

var _patACake = __webpack_require__(283);

var _patACake2 = _interopRequireDefault(_patACake);

var _onMondayMorning = __webpack_require__(282);

var _onMondayMorning2 = _interopRequireDefault(_onMondayMorning);

var _winterIsHere3 = __webpack_require__(33);

var _winterIsHere4 = _interopRequireDefault(_winterIsHere3);

var _fallFallBallon3 = __webpack_require__(22);

var _fallFallBallon4 = _interopRequireDefault(_fallFallBallon3);

var _theWasherman3 = __webpack_require__(30);

var _theWasherman4 = _interopRequireDefault(_theWasherman3);

var _ticTicTic3 = __webpack_require__(31);

var _ticTicTic4 = _interopRequireDefault(_ticTicTic3);

var _siMaMaKa3 = __webpack_require__(27);

var _siMaMaKa4 = _interopRequireDefault(_siMaMaKa3);

var _theCourtyardOfMyHouse3 = __webpack_require__(29);

var _theCourtyardOfMyHouse4 = _interopRequireDefault(_theCourtyardOfMyHouse3);

var _hereWeGoRoundTheMulberryBush3 = __webpack_require__(23);

var _hereWeGoRoundTheMulberryBush4 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush3);

var _itsRainning3 = __webpack_require__(24);

var _itsRainning4 = _interopRequireDefault(_itsRainning3);

var _twoTigers3 = __webpack_require__(32);

var _twoTigers4 = _interopRequireDefault(_twoTigers3);

var _springHasCome3 = __webpack_require__(28);

var _springHasCome4 = _interopRequireDefault(_springHasCome3);

var _patACake3 = __webpack_require__(26);

var _patACake4 = _interopRequireDefault(_patACake3);

var _onMondayMorning3 = __webpack_require__(25);

var _onMondayMorning4 = _interopRequireDefault(_onMondayMorning3);

var _map = __webpack_require__(46);

var _map2 = _interopRequireDefault(_map);

var _fairy_cakes = __webpack_require__(91);

var _fairy_cakes2 = _interopRequireDefault(_fairy_cakes);

var _mousseDeChocolate = __webpack_require__(96);

var _mousseDeChocolate2 = _interopRequireDefault(_mousseDeChocolate);

var _manzanasAsadas = __webpack_require__(94);

var _manzanasAsadas2 = _interopRequireDefault(_manzanasAsadas);

var _galletaDePascua = __webpack_require__(92);

var _galletaDePascua2 = _interopRequireDefault(_galletaDePascua);

var _macedonia = __webpack_require__(93);

var _macedonia2 = _interopRequireDefault(_macedonia);

var _mouse = __webpack_require__(95);

var _mouse2 = _interopRequireDefault(_mouse);

var _tarta = __webpack_require__(97);

var _tarta2 = _interopRequireDefault(_tarta);

var _alba = __webpack_require__(98);

var _alba2 = _interopRequireDefault(_alba);

var _helado = __webpack_require__(99);

var _helado2 = _interopRequireDefault(_helado);

var _pavlova = __webpack_require__(100);

var _pavlova2 = _interopRequireDefault(_pavlova);

var _kenya = __webpack_require__(73);

var _kenya2 = _interopRequireDefault(_kenya);

var _benin = __webpack_require__(71);

var _benin2 = _interopRequireDefault(_benin);

var _maroc = __webpack_require__(75);

var _maroc2 = _interopRequireDefault(_maroc);

var _tunisie = __webpack_require__(76);

var _tunisie2 = _interopRequireDefault(_tunisie);

var _egypt = __webpack_require__(72);

var _egypt2 = _interopRequireDefault(_egypt);

var _malagasy = __webpack_require__(74);

var _malagasy2 = _interopRequireDefault(_malagasy);

var _algerie = __webpack_require__(70);

var _algerie2 = _interopRequireDefault(_algerie);

var _mexique = __webpack_require__(82);

var _mexique2 = _interopRequireDefault(_mexique);

var _canada = __webpack_require__(78);

var _canada2 = _interopRequireDefault(_canada);

var _quindim = __webpack_require__(83);

var _quindim2 = _interopRequireDefault(_quindim);

var _guyane = __webpack_require__(80);

var _guyane2 = _interopRequireDefault(_guyane);

var _chilie = __webpack_require__(79);

var _chilie2 = _interopRequireDefault(_chilie);

var _haiti = __webpack_require__(81);

var _haiti2 = _interopRequireDefault(_haiti);

var _argentine = __webpack_require__(77);

var _argentine2 = _interopRequireDefault(_argentine);

var _singapour = __webpack_require__(89);

var _singapour2 = _interopRequireDefault(_singapour);

var _maskina = __webpack_require__(88);

var _maskina2 = _interopRequireDefault(_maskina);

var _india = __webpack_require__(85);

var _india2 = _interopRequireDefault(_india);

var _liban = __webpack_require__(87);

var _liban2 = _interopRequireDefault(_liban);

var _china = __webpack_require__(84);

var _china2 = _interopRequireDefault(_china);

var _vietnam = __webpack_require__(90);

var _vietnam2 = _interopRequireDefault(_vietnam);

var _jordanie = __webpack_require__(86);

var _jordanie2 = _interopRequireDefault(_jordanie);

var _color_eng_arabe = __webpack_require__(414);

var _color_eng_arabe2 = _interopRequireDefault(_color_eng_arabe);

var _color_eng_brasil = __webpack_require__(415);

var _color_eng_brasil2 = _interopRequireDefault(_color_eng_brasil);

var _color_eng_english = __webpack_require__(417);

var _color_eng_english2 = _interopRequireDefault(_color_eng_english);

var _color_eng_china = __webpack_require__(416);

var _color_eng_china2 = _interopRequireDefault(_color_eng_china);

var _color_eng_french = __webpack_require__(418);

var _color_eng_french2 = _interopRequireDefault(_color_eng_french);

var _color_eng_german = __webpack_require__(419);

var _color_eng_german2 = _interopRequireDefault(_color_eng_german);

var _color_eng_india = __webpack_require__(420);

var _color_eng_india2 = _interopRequireDefault(_color_eng_india);

var _color_eng_italy = __webpack_require__(421);

var _color_eng_italy2 = _interopRequireDefault(_color_eng_italy);

var _color_eng_russia = __webpack_require__(422);

var _color_eng_russia2 = _interopRequireDefault(_color_eng_russia);

var _color_eng_serbia = __webpack_require__(423);

var _color_eng_serbia2 = _interopRequireDefault(_color_eng_serbia);

var _color_eng_spanish = __webpack_require__(424);

var _color_eng_spanish2 = _interopRequireDefault(_color_eng_spanish);

var _color_eng_swahili = __webpack_require__(425);

var _color_eng_swahili2 = _interopRequireDefault(_color_eng_swahili);

var _english = __webpack_require__(276);

var _eng_owls = __webpack_require__(396);

var _eng_owls2 = _interopRequireDefault(_eng_owls);

var _eng_owls3 = __webpack_require__(397);

var _eng_owls4 = _interopRequireDefault(_eng_owls3);

var _eng_owls5 = __webpack_require__(398);

var _eng_owls6 = _interopRequireDefault(_eng_owls5);

var _eng_children = __webpack_require__(395);

var _eng_children2 = _interopRequireDefault(_eng_children);

var _allColorsEng = __webpack_require__(343);

var _allColorsEng2 = _interopRequireDefault(_allColorsEng);

var _spanish = __webpack_require__(101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var navbar = ['Home', 'Presentation', 'Pipilet Mandala', 'Videos', 'Contact']; /* eslint-disable no-unused-vars */


var sidebar = ['SONGS', 'COLORS AND NUMBERS', 'PASTRIES', 'DO YOU KNOW WHO I AM ?'];

var _default = {
	lan: 'eng',
	navbar: _information2.default.getNavbar(navbar, sidebar),
	sidebar: _information2.default.getSidebar(sidebar),
	songPageContent: {
		title: 'SONGS',
		language: {
			english: 'ENGLISH',
			arab: 'ARABIC',
			italy: 'ITALIAN',
			french: 'FRENCH',
			german: 'GERMAN',
			russia: 'RUSSIA',
			china: 'CHINESE',
			spanish: 'SPANISH',
			india: 'INDIA',
			africa: 'SWAHILI',
			portugal: 'PORTUGUESE',
			serbia: 'SERBA'
		},
		flag: _information2.default.getFlagsMusic(),
		music: [{
			name: 'lebanon', 'translated-song': _ticTicTic2.default,
			'original-song': _ticTicTic4.default
		}, {
			name: 'ghana',
			'translated-song': _siMaMaKa2.default,
			'original-song': _siMaMaKa4.default
		}, {
			name: 'china',
			'translated-song': _twoTigers2.default,
			'original-song': _twoTigers4.default
		}, {
			name: 'german',
			'translated-song': _winterIsHere2.default,
			'original-song': _winterIsHere4.default
		}, {
			name: 'india',
			'translated-song': _theWasherman2.default,
			'original-song': _theWasherman4.default
		}, {
			name: 'brasil',
			'translated-song': _fallFallBallon2.default,
			'original-song': _fallFallBallon4.default
		}, {
			name: 'italy',
			'translated-song': _springHasCome2.default,
			'original-song': _springHasCome4.default
		}, {
			name: 'french',
			'translated-song': _onMondayMorning2.default,
			'original-song': _onMondayMorning4.default
		}, {
			name: 'english',
			'translated-song': _hereWeGoRoundTheMulberryBush2.default,
			'original-song': _hereWeGoRoundTheMulberryBush4.default
		}, {
			name: 'serbia',
			'translated-song': _itsRainning2.default,
			'original-song': _itsRainning4.default
		}, {
			name: 'russia',
			'translated-song': _patACake2.default,
			'original-song': _patACake4.default
		}, {
			name: 'spanish',
			'translated-song': _theCourtyardOfMyHouse2.default,
			'original-song': _theCourtyardOfMyHouse4.default
		}]
	},
	colorNumberContent: {
		titleColor: 'COLORS',
		imageColor: _allColorsEng2.default,
		titleNumber: 'NUMBERS',
		imageNumber: _eng_children2.default
	},
	colorPageContent: {
		titleColor: 'COLORS',
		owls: [{
			image: _eng_owls2.default,
			countryName: ['french', 'india', 'spanish', 'russia']
		}, {
			image: _eng_owls4.default,
			countryName: ['german', 'serbia', 'italy', 'china']
		}, {
			image: _eng_owls6.default,
			countryName: ['english', 'tanzania', 'brasil', 'southAfrica']
		}]
	},
	numberPageContent: {
		titleNumber: 'NUMBERS',
		imageNumber: [{
			image: _eng_children2.default,
			countryName: ['french', 'china', 'german', 'spanish', 'italy', 'serbia', 'brasil', 'india', 'english', 'tanzania', 'russia', 'southAfrica']
		}]
	},
	colorTranslatedPageContent: {
		title: 'LEARN COLORS WITH YOUR FRIEND',
		rules: ['Under you will find:', '* Mixed words in french with colours as a theme', '* A mandala that you can colour the way you want.', 'You are strong no doubt that you will manage!'],
		headerFirstColumn: 'LEARNS COLORS IN',
		originalLanguage: {
			id: 'english',
			name: 'ENGLISH',
			data: _information2.default.englishColor
		},
		translated: [{
			id: 'arab',
			name: 'ARABE',
			subTitle: 'IS WRITTEN',
			subSubTitle: 'IT’S PRONOUNCED',
			data: _information2.default.southColor,
			download: _color_eng_arabe2.default
		}, {
			id: 'brasil',
			name: 'PORTUGUESE',
			data: _information2.default.brasilColor,
			download: _color_eng_brasil2.default
		}, {
			id: 'china',
			name: 'CHINESE',
			subTitle: 'IS WRITTEN',
			subSubTitle: 'IT’S PRONOUNCED',
			data: _information2.default.chinaColor,
			download: _color_eng_china2.default
		}, {
			id: 'english',
			name: 'ENGLISH',
			data: _information2.default.englishColor,
			download: _color_eng_english2.default
		}, {
			id: 'french',
			name: 'FRENCH',
			data: _information2.default.frenchColor,
			download: _color_eng_french2.default
		}, {
			id: 'german',
			name: 'GERMAN',
			data: _information2.default.germanColor,
			download: _color_eng_german2.default
		}, {
			id: 'india',
			name: 'HINDI',
			subTitle: 'IS WRITTEN',
			subSubTitle: 'IT’S PRONOUNCED',
			data: _information2.default.indiaColor,
			download: _color_eng_india2.default
		}, {
			id: 'italy',
			name: 'ITALIAN',
			data: _information2.default.italyColor,
			download: _color_eng_italy2.default
		}, {
			id: 'russia',
			name: 'RUSSIAN',
			subTitle: 'IS WRITTEN',
			subSubTitle: 'IT’S PRONOUNCED',
			data: _information2.default.russiaColor,
			download: _color_eng_russia2.default
		}, {
			id: 'serbia',
			name: 'SERBIO',
			subTitle: 'IS WRITTEN',
			subSubTitle: 'IT’S PRONOUNCED',
			data: _information2.default.serbiaColor,
			download: _color_eng_serbia2.default
		}, {
			id: 'spanish',
			name: 'SPANISH',
			data: _information2.default.spanishColor,
			download: _color_eng_spanish2.default
		}, {
			id: 'tanzania',
			name: 'SWAHILI',
			data: _information2.default.tanzaniaColor,
			download: _color_eng_swahili2.default
		}]
	},
	cookerPageContent: {
		title: 'RECIPES',
		description: _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				_react2.default.createElement(
					'b',
					null,
					'YOUR FRIEND'
				)
			),
			' MADE THE TOUR ',
			_react2.default.createElement(
				'span',
				{
					className: 'dodgerblue' },
				_react2.default.createElement(
					'b',
					null,
					'OF FIVE CONTINENTES'
				)
			),
			' AND BROUGHT BACK',
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				_react2.default.createElement(
					'b',
					null,
					'VARIOUS DELICIOUS '
				)
			),
			'. RECIPES OF ',
			_react2.default.createElement(
				'span',
				{
					className: 'yellow' },
				_react2.default.createElement(
					'b',
					null,
					'CONTRIES OF THE WORLD'
				)
			)
		),
		image: _map2.default
	},
	chooseCountryContent: {
		america: {
			name: 'america',
			title: 'AMERICAN COOKING WORKSHOP',
			country: [{ name: 'ARGENTINA', type: _pipilet_female2.default, recipe: _argentine2.default }, { name: 'BRAZIL', type: _pipilet_male2.default, recipe: _quindim2.default }, { name: 'HAITI', type: _pipilet_female2.default, recipe: _haiti2.default }, { name: 'CHILE', type: _pipilet_female2.default, recipe: _chilie2.default }, { name: 'FRENCH GUIANA', type: _pipilet_male2.default, recipe: _guyane2.default }, { name: 'MEXICO', type: _pipilet_female2.default, recipe: _mexique2.default }, { name: 'USA', type: _pipilet_female2.default, recipe: _canada2.default }, { name: 'CANADA', type: _pipilet_male2.default, recipe: _canada2.default }]
		},
		oceania: {
			name: 'oceania',
			title: 'SOUTH SEA ISLANDS COOKING WORKSHOP',
			country: [{ name: 'AUSTRALIA', type: _pipilet_female2.default, recipe: _alba2.default }, { name: 'VANUATU', type: _pipilet_male2.default, recipe: _helado2.default }, { name: 'NEW ZEALAND', type: _pipilet_male2.default, recipe: _pavlova2.default }]
		},
		europe: {
			name: 'europe',
			title: 'EUROPEAN COOKING WORKSHOP',
			country: [{ name: 'ENGLAND', type: _pipilet_female2.default, recipe: _fairy_cakes2.default }, { name: 'FRANCE', type: _pipilet_male2.default, recipe: _mousseDeChocolate2.default }, { name: 'GERMANY', type: _pipilet_female2.default, recipe: _galletaDePascua2.default }, { name: 'SPAIN', type: _pipilet_female2.default, recipe: _macedonia2.default }, { name: 'ITALY', type: _pipilet_male2.default, recipe: _mouse2.default }, { name: 'RUSSIA', type: _pipilet_female2.default, recipe: _manzanasAsadas2.default }, { name: 'SERBIE', type: _pipilet_female2.default, recipe: _tarta2.default }]
		},
		africa: {
			name: 'africa',
			title: 'TALLER DE COCINA AFRICANA',
			country: [{ name: 'BENIN', type: _pipilet_female2.default, recipe: _benin2.default }, { name: 'KENYA', type: _pipilet_male2.default, recipe: _kenya2.default }, { name: 'TUNISIE', type: _pipilet_female2.default, recipe: _tunisie2.default }, { name: 'EGYPTE', type: _pipilet_female2.default, recipe: _egypt2.default }, { name: 'ALGERIE', type: _pipilet_male2.default, recipe: _algerie2.default }, { name: 'MAROC', type: _pipilet_female2.default, recipe: _maroc2.default }, { name: 'MADAGASCAR', type: _pipilet_female2.default, recipe: _malagasy2.default }]
		},
		asia: {
			name: 'asia',
			title: 'ASIAN COOKING WORKSHOP',
			country: [{ name: 'JORDAN', type: _pipilet_female2.default, recipe: _jordanie2.default }, { name: 'SINGAPORE', type: _pipilet_male2.default, recipe: _singapour2.default }, { name: 'VIETNAM', type: _pipilet_female2.default, recipe: _vietnam2.default }, { name: 'CHINA', type: _pipilet_female2.default, recipe: _china2.default }, { name: 'LEBANON', type: _pipilet_male2.default, recipe: _liban2.default }, { name: 'INDIA', type: _pipilet_female2.default, recipe: _india2.default }, { name: 'SOUDI ARABIE', type: _pipilet_female2.default, recipe: _maskina2.default }]
		}
	},
	presentationPageContent: {
		imagepipilet: _pipiletDescription2.default,
		text: _english.presentation
	},
	WhoarewePageContent: {
		whoarewe: _spanish.whoarewe
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(navbar, 'navbar', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/english.js');

	__REACT_HOT_LOADER__.register(sidebar, 'sidebar', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/english.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/english.js');
}();

;

/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _information = __webpack_require__(34);

var _information2 = _interopRequireDefault(_information);

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletDescription = __webpack_require__(18);

var _pipiletDescription2 = _interopRequireDefault(_pipiletDescription);

var _winterIsHere = __webpack_require__(302);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _fallFallBallon = __webpack_require__(291);

var _fallFallBallon2 = _interopRequireDefault(_fallFallBallon);

var _theWasherman = __webpack_require__(299);

var _theWasherman2 = _interopRequireDefault(_theWasherman);

var _ticTicTic = __webpack_require__(300);

var _ticTicTic2 = _interopRequireDefault(_ticTicTic);

var _siMaMaKa = __webpack_require__(296);

var _siMaMaKa2 = _interopRequireDefault(_siMaMaKa);

var _theCourtyardOfMyHouse = __webpack_require__(298);

var _theCourtyardOfMyHouse2 = _interopRequireDefault(_theCourtyardOfMyHouse);

var _hereWeGoRoundTheMulberryBush = __webpack_require__(292);

var _hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush);

var _itsRainning = __webpack_require__(293);

var _itsRainning2 = _interopRequireDefault(_itsRainning);

var _twoTigers = __webpack_require__(301);

var _twoTigers2 = _interopRequireDefault(_twoTigers);

var _springHasCome = __webpack_require__(297);

var _springHasCome2 = _interopRequireDefault(_springHasCome);

var _patACake = __webpack_require__(295);

var _patACake2 = _interopRequireDefault(_patACake);

var _onMondayMorning = __webpack_require__(294);

var _onMondayMorning2 = _interopRequireDefault(_onMondayMorning);

var _winterIsHere3 = __webpack_require__(33);

var _winterIsHere4 = _interopRequireDefault(_winterIsHere3);

var _fallFallBallon3 = __webpack_require__(22);

var _fallFallBallon4 = _interopRequireDefault(_fallFallBallon3);

var _theWasherman3 = __webpack_require__(30);

var _theWasherman4 = _interopRequireDefault(_theWasherman3);

var _ticTicTic3 = __webpack_require__(31);

var _ticTicTic4 = _interopRequireDefault(_ticTicTic3);

var _siMaMaKa3 = __webpack_require__(27);

var _siMaMaKa4 = _interopRequireDefault(_siMaMaKa3);

var _theCourtyardOfMyHouse3 = __webpack_require__(29);

var _theCourtyardOfMyHouse4 = _interopRequireDefault(_theCourtyardOfMyHouse3);

var _hereWeGoRoundTheMulberryBush3 = __webpack_require__(23);

var _hereWeGoRoundTheMulberryBush4 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush3);

var _itsRainning3 = __webpack_require__(24);

var _itsRainning4 = _interopRequireDefault(_itsRainning3);

var _twoTigers3 = __webpack_require__(32);

var _twoTigers4 = _interopRequireDefault(_twoTigers3);

var _springHasCome3 = __webpack_require__(28);

var _springHasCome4 = _interopRequireDefault(_springHasCome3);

var _patACake3 = __webpack_require__(26);

var _patACake4 = _interopRequireDefault(_patACake3);

var _onMondayMorning3 = __webpack_require__(25);

var _onMondayMorning4 = _interopRequireDefault(_onMondayMorning3);

var _map = __webpack_require__(46);

var _map2 = _interopRequireDefault(_map);

var _fairy_cakes = __webpack_require__(91);

var _fairy_cakes2 = _interopRequireDefault(_fairy_cakes);

var _mousseDeChocolate = __webpack_require__(96);

var _mousseDeChocolate2 = _interopRequireDefault(_mousseDeChocolate);

var _manzanasAsadas = __webpack_require__(94);

var _manzanasAsadas2 = _interopRequireDefault(_manzanasAsadas);

var _galletaDePascua = __webpack_require__(92);

var _galletaDePascua2 = _interopRequireDefault(_galletaDePascua);

var _macedonia = __webpack_require__(93);

var _macedonia2 = _interopRequireDefault(_macedonia);

var _mouse = __webpack_require__(95);

var _mouse2 = _interopRequireDefault(_mouse);

var _tarta = __webpack_require__(97);

var _tarta2 = _interopRequireDefault(_tarta);

var _alba = __webpack_require__(98);

var _alba2 = _interopRequireDefault(_alba);

var _helado = __webpack_require__(99);

var _helado2 = _interopRequireDefault(_helado);

var _pavlova = __webpack_require__(100);

var _pavlova2 = _interopRequireDefault(_pavlova);

var _kenya = __webpack_require__(73);

var _kenya2 = _interopRequireDefault(_kenya);

var _benin = __webpack_require__(71);

var _benin2 = _interopRequireDefault(_benin);

var _maroc = __webpack_require__(75);

var _maroc2 = _interopRequireDefault(_maroc);

var _tunisie = __webpack_require__(76);

var _tunisie2 = _interopRequireDefault(_tunisie);

var _egypt = __webpack_require__(72);

var _egypt2 = _interopRequireDefault(_egypt);

var _malagasy = __webpack_require__(74);

var _malagasy2 = _interopRequireDefault(_malagasy);

var _algerie = __webpack_require__(70);

var _algerie2 = _interopRequireDefault(_algerie);

var _mexique = __webpack_require__(82);

var _mexique2 = _interopRequireDefault(_mexique);

var _canada = __webpack_require__(78);

var _canada2 = _interopRequireDefault(_canada);

var _quindim = __webpack_require__(83);

var _quindim2 = _interopRequireDefault(_quindim);

var _guyane = __webpack_require__(80);

var _guyane2 = _interopRequireDefault(_guyane);

var _chilie = __webpack_require__(79);

var _chilie2 = _interopRequireDefault(_chilie);

var _haiti = __webpack_require__(81);

var _haiti2 = _interopRequireDefault(_haiti);

var _argentine = __webpack_require__(77);

var _argentine2 = _interopRequireDefault(_argentine);

var _usa = __webpack_require__(230);

var _usa2 = _interopRequireDefault(_usa);

var _singapour = __webpack_require__(89);

var _singapour2 = _interopRequireDefault(_singapour);

var _maskina = __webpack_require__(88);

var _maskina2 = _interopRequireDefault(_maskina);

var _india = __webpack_require__(85);

var _india2 = _interopRequireDefault(_india);

var _liban = __webpack_require__(87);

var _liban2 = _interopRequireDefault(_liban);

var _china = __webpack_require__(84);

var _china2 = _interopRequireDefault(_china);

var _vietnam = __webpack_require__(90);

var _vietnam2 = _interopRequireDefault(_vietnam);

var _jordanie = __webpack_require__(86);

var _jordanie2 = _interopRequireDefault(_jordanie);

var _color_fr_swahili = __webpack_require__(449);

var _color_fr_swahili2 = _interopRequireDefault(_color_fr_swahili);

var _color_fr_spanish = __webpack_require__(448);

var _color_fr_spanish2 = _interopRequireDefault(_color_fr_spanish);

var _color_fr_serbia = __webpack_require__(447);

var _color_fr_serbia2 = _interopRequireDefault(_color_fr_serbia);

var _color_fr_russia = __webpack_require__(446);

var _color_fr_russia2 = _interopRequireDefault(_color_fr_russia);

var _color_fr_italy = __webpack_require__(445);

var _color_fr_italy2 = _interopRequireDefault(_color_fr_italy);

var _color_fr_india = __webpack_require__(444);

var _color_fr_india2 = _interopRequireDefault(_color_fr_india);

var _color_fr_german = __webpack_require__(443);

var _color_fr_german2 = _interopRequireDefault(_color_fr_german);

var _color_fr_english = __webpack_require__(441);

var _color_fr_english2 = _interopRequireDefault(_color_fr_english);

var _color_fr_china = __webpack_require__(440);

var _color_fr_china2 = _interopRequireDefault(_color_fr_china);

var _color_fr_brasil = __webpack_require__(439);

var _color_fr_brasil2 = _interopRequireDefault(_color_fr_brasil);

var _color_fr_arabe = __webpack_require__(438);

var _color_fr_arabe2 = _interopRequireDefault(_color_fr_arabe);

var _color_fr_french = __webpack_require__(442);

var _color_fr_french2 = _interopRequireDefault(_color_fr_french);

var _french = __webpack_require__(277);

var _fr_owls = __webpack_require__(404);

var _fr_owls2 = _interopRequireDefault(_fr_owls);

var _fr_owls3 = __webpack_require__(405);

var _fr_owls4 = _interopRequireDefault(_fr_owls3);

var _fr_owls5 = __webpack_require__(406);

var _fr_owls6 = _interopRequireDefault(_fr_owls5);

var _fr_children = __webpack_require__(403);

var _fr_children2 = _interopRequireDefault(_fr_children);

var _allColorsFr = __webpack_require__(345);

var _allColorsFr2 = _interopRequireDefault(_allColorsFr);

var _recette_fr_argentine = __webpack_require__(489);

var _recette_fr_argentine2 = _interopRequireDefault(_recette_fr_argentine);

var _recette_fr_brasil = __webpack_require__(490);

var _recette_fr_brasil2 = _interopRequireDefault(_recette_fr_brasil);

var _recette_fr_haiti = __webpack_require__(494);

var _recette_fr_haiti2 = _interopRequireDefault(_recette_fr_haiti);

var _recette_fr_chilie = __webpack_require__(492);

var _recette_fr_chilie2 = _interopRequireDefault(_recette_fr_chilie);

var _recette_fr_guyane = __webpack_require__(493);

var _recette_fr_guyane2 = _interopRequireDefault(_recette_fr_guyane);

var _recette_fr_mexique = __webpack_require__(495);

var _recette_fr_mexique2 = _interopRequireDefault(_recette_fr_mexique);

var _recette_fr_usa = __webpack_require__(496);

var _recette_fr_usa2 = _interopRequireDefault(_recette_fr_usa);

var _recette_fr_canada = __webpack_require__(491);

var _recette_fr_canada2 = _interopRequireDefault(_recette_fr_canada);

var _recette_fr_australie = __webpack_require__(511);

var _recette_fr_australie2 = _interopRequireDefault(_recette_fr_australie);

var _recette_fr_vanuatu = __webpack_require__(512);

var _recette_fr_vanuatu2 = _interopRequireDefault(_recette_fr_vanuatu);

var _recette_fr_zelande = __webpack_require__(513);

var _recette_fr_zelande2 = _interopRequireDefault(_recette_fr_zelande);

var _recette_fr_english = __webpack_require__(504);

var _recette_fr_english2 = _interopRequireDefault(_recette_fr_english);

var _recette_fr_french = __webpack_require__(505);

var _recette_fr_french2 = _interopRequireDefault(_recette_fr_french);

var _recette_fr_german = __webpack_require__(506);

var _recette_fr_german2 = _interopRequireDefault(_recette_fr_german);

var _recette_fr_spanish = __webpack_require__(510);

var _recette_fr_spanish2 = _interopRequireDefault(_recette_fr_spanish);

var _recette_fr_italy = __webpack_require__(507);

var _recette_fr_italy2 = _interopRequireDefault(_recette_fr_italy);

var _recette_fr_russia = __webpack_require__(508);

var _recette_fr_russia2 = _interopRequireDefault(_recette_fr_russia);

var _recette_fr_serbia = __webpack_require__(509);

var _recette_fr_serbia2 = _interopRequireDefault(_recette_fr_serbia);

var _recette_fr_benin = __webpack_require__(483);

var _recette_fr_benin2 = _interopRequireDefault(_recette_fr_benin);

var _recette_fr_kenya = __webpack_require__(485);

var _recette_fr_kenya2 = _interopRequireDefault(_recette_fr_kenya);

var _recette_fr_tunisie = __webpack_require__(488);

var _recette_fr_tunisie2 = _interopRequireDefault(_recette_fr_tunisie);

var _recette_fr_egypte = __webpack_require__(484);

var _recette_fr_egypte2 = _interopRequireDefault(_recette_fr_egypte);

var _recette_fr_algerie = __webpack_require__(482);

var _recette_fr_algerie2 = _interopRequireDefault(_recette_fr_algerie);

var _recette_fr_maroc = __webpack_require__(487);

var _recette_fr_maroc2 = _interopRequireDefault(_recette_fr_maroc);

var _recette_fr_malagasy = __webpack_require__(486);

var _recette_fr_malagasy2 = _interopRequireDefault(_recette_fr_malagasy);

var _recette_fr_jordanie = __webpack_require__(500);

var _recette_fr_jordanie2 = _interopRequireDefault(_recette_fr_jordanie);

var _recette_fr_singapur = __webpack_require__(502);

var _recette_fr_singapur2 = _interopRequireDefault(_recette_fr_singapur);

var _recette_fr_vietnam = __webpack_require__(503);

var _recette_fr_vietnam2 = _interopRequireDefault(_recette_fr_vietnam);

var _recette_fr_china = __webpack_require__(498);

var _recette_fr_china2 = _interopRequireDefault(_recette_fr_china);

var _recette_fr_liban = __webpack_require__(501);

var _recette_fr_liban2 = _interopRequireDefault(_recette_fr_liban);

var _recette_fr_india = __webpack_require__(499);

var _recette_fr_india2 = _interopRequireDefault(_recette_fr_india);

var _recette_fr_arabe = __webpack_require__(497);

var _recette_fr_arabe2 = _interopRequireDefault(_recette_fr_arabe);

var _french2 = __webpack_require__(319);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var navbar = ['Accueil', 'Présentation', 'Pipilet Mandala', 'Vidéos', 'Contact'];

var sidebar = ['LES CHANSONS', 'LES COULEURS ET LES CHIFFRES', 'LES PÂTISSERERIES', 'SAIS-TU QUI JE SUIS ?'];

var _default = {
	lan: 'fr',
	navbar: _information2.default.getNavbar(navbar, sidebar),
	sidebar: _information2.default.getSidebar(sidebar),
	songPageContent: {
		title: 'LES CHANSONS',
		language: {
			english: 'ANGLAIS',
			arab: 'ARABE',
			italy: 'ITALIEN',
			french: 'FRANÇAIS',
			german: 'ALLEMAND',
			russia: 'RUSSE',
			china: 'CHINOIS',
			spanish: 'ESPAGNOL',
			india: 'INDE',
			africa: 'AFRICAIN',
			portugal: 'PORTUGAIS',
			serbia: 'SERBIE'
		},
		flag: _information2.default.getFlagsMusic(),
		music: [{
			name: 'lebanon',
			'translated-song': _ticTicTic2.default,
			'original-song': _ticTicTic4.default
		}, {
			name: 'ghana',
			'translated-song': _siMaMaKa2.default,
			'original-song': _siMaMaKa4.default
		}, {
			name: 'china',
			'translated-song': _twoTigers2.default,
			'original-song': _twoTigers4.default
		}, {
			name: 'german',
			'translated-song': _winterIsHere2.default,
			'original-song': _winterIsHere4.default
		}, {
			name: 'india',
			'translated-song': _theWasherman2.default,
			'original-song': _theWasherman4.default
		}, {
			name: 'brasil',
			'translated-song': _fallFallBallon2.default,
			'original-song': _fallFallBallon4.default
		}, {
			name: 'italy',
			'translated-song': _springHasCome2.default,
			'original-song': _springHasCome4.default
		}, {
			name: 'french',
			'translated-song': _onMondayMorning2.default,
			'original-song': _onMondayMorning4.default
		}, {
			name: 'english',
			'translated-song': _hereWeGoRoundTheMulberryBush2.default,
			'original-song': _hereWeGoRoundTheMulberryBush4.default
		}, {
			name: 'serbia',
			'translated-song': _itsRainning2.default,
			'original-song': _itsRainning4.default
		}, {
			name: 'russia',
			'translated-song': _patACake2.default,
			'original-song': _patACake4.default
		}, {
			name: 'spanish',
			'translated-song': _theCourtyardOfMyHouse2.default,
			'original-song': _theCourtyardOfMyHouse4.default
		}]
	},
	colorNumberContent: {
		titleColor: 'LES COULEURS',
		imageColor: _allColorsFr2.default,
		titleNumber: 'LES NOMBRES',
		imageNumber: _fr_children2.default
	},
	colorPageContent: {
		titleColor: 'LES COULEURS',
		owls: [{
			image: _fr_owls2.default,
			countryName: ['french', 'india', 'spanish', 'russia']
		}, {
			image: _fr_owls4.default,
			countryName: ['german', 'serbia', 'italy', 'china']
		}, {
			image: _fr_owls6.default,
			countryName: ['english', 'tanzania', 'brasil', 'southAfrica']
		}]
	},
	numberPageContent: {
		titleNumber: 'LES NOMBRES',
		imageNumber: [{
			image: _fr_children2.default,
			countryName: ['french', 'china', 'german', 'spanish', 'italy', 'serbia', 'brasil', 'india', 'english', 'tanzania', 'russia', 'southAfrica']
		}]
	},
	colorTranslatedPageContent: {
		title: 'APPREND LES COULEURS AVEC TON AMI',
		rules: ['En bas tu trouveras:', '* un jeu de mots melangés sur le theme des couleurs', '* un mandala à colorier comme tu veux', 'Tu est fort pas de doute que tu reussiras !'],
		headerFirstColumn: 'LES COULEURS EN',
		originalLanguage: {
			id: 'french',
			name: 'FRANÇAIS',
			data: _information2.default.frenchColor
		},
		translated: [{
			id: 'brasil',
			name: 'PORTUGAIS',
			data: _information2.default.brasilColor,
			download: _color_fr_brasil2.default
		}, {
			id: 'china',
			name: 'CHINOIS',
			subTitle: 'S’ÉCRIT',
			subSubTitle: 'SE PRONONCE',
			data: _information2.default.chinaColor,
			download: _color_fr_china2.default
		}, {
			id: 'english',
			name: 'ANGLAIS',
			data: _information2.default.englishColor,
			download: _color_fr_english2.default
		}, {
			id: 'french',
			name: 'FRANÇAIS',
			data: _information2.default.frenchColor,
			download: _color_fr_french2.default
		}, {
			id: 'german',
			name: 'ALLEMAND',
			data: _information2.default.germanColor,
			download: _color_fr_german2.default
		}, {
			id: 'india',
			name: 'INDIEN',
			subTitle: 'S’ÉCRIT',
			subSubTitle: 'SE PRONONCE',
			data: _information2.default.indiaColor,
			download: _color_fr_india2.default
		}, {
			id: 'italy',
			name: 'ITALIEN',
			data: _information2.default.italyColor,
			download: _color_fr_italy2.default
		}, {
			id: 'russia',
			name: 'RUSSE',
			subTitle: 'S’ÉCRIT',
			subSubTitle: 'SE PRONONCE',
			data: _information2.default.russiaColor,
			download: _color_fr_russia2.default
		}, {
			id: 'serbia',
			name: 'SERBE',
			subTitle: 'S’ÉCRIT',
			subSubTitle: 'SE PRONONCE',
			data: _information2.default.serbiaColor,
			download: _color_fr_serbia2.default
		}, {
			id: 'arab',
			name: 'ARABE',
			subTitle: 'S’ÉCRIT',
			subSubTitle: 'SE PRONONCE',
			data: _information2.default.southColor,
			download: _color_fr_arabe2.default
		}, {
			id: 'spanish',
			name: 'ESPAGNOL',
			data: _information2.default.spanishColor,
			download: _color_fr_spanish2.default
		}, {
			id: 'tanzania',
			name: 'SWAHILI',
			data: _information2.default.tanzaniaColor,
			download: _color_fr_swahili2.default
		}]
	},
	cookerPageContent: {
		title: 'LES RECETTES',
		description: _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				_react2.default.createElement(
					'b',
					null,
					'TON AMI'
				)
			),
			' A FAIT LE TOUR ',
			_react2.default.createElement(
				'span',
				{
					className: 'dodgerblue' },
				_react2.default.createElement(
					'b',
					null,
					'DES CINQ CONTINENTS'
				)
			),
			' ET NOT\xC9 DIFF\xC9RENTS',
			_react2.default.createElement(
				'span',
				{ className: 'green' },
				_react2.default.createElement(
					'b',
					null,
					'RECETTES D\xC9LICIEUSES '
				)
			),
			'. DE DIFF\xC9RENTS ',
			_react2.default.createElement(
				'span',
				{ className: 'yellow' },
				_react2.default.createElement(
					'b',
					null,
					'PAYS DU MONDE'
				)
			)
		),
		image: _map2.default
	},
	chooseCountryContent: {
		america: {
			name: 'america',
			title: 'ATELIER DE CUISINE AMÉRICAINE',
			country: [{ name: 'ARGENTINE', type: _pipilet_female2.default, recipe: _argentine2.default, downloadRecipe: _recette_fr_argentine2.default }, { name: 'BRÉSIL', type: _pipilet_male2.default, recipe: _quindim2.default, downloadRecipe: _recette_fr_brasil2.default }, { name: 'HAÏTI', type: _pipilet_female2.default, recipe: _haiti2.default, downloadRecipe: _recette_fr_haiti2.default }, { name: 'CHILI', type: _pipilet_female2.default, recipe: _chilie2.default, downloadRecipe: _recette_fr_chilie2.default }, { name: 'GUAYANE.F', type: _pipilet_male2.default, recipe: _guyane2.default, downloadRecipe: _recette_fr_guyane2.default }, { name: 'MEXIQUE', type: _pipilet_female2.default, recipe: _mexique2.default, downloadRecipe: _recette_fr_mexique2.default }, { name: 'USA', type: _pipilet_female2.default, recipe: _usa2.default, downloadRecipe: _recette_fr_usa2.default }, { name: 'CANADA', type: _pipilet_male2.default, recipe: _canada2.default, downloadRecipe: _recette_fr_canada2.default }]
		},
		oceania: {
			name: 'oceania',
			title: 'ATELIER DE CUISINE DE L’OCÉANIE',
			country: [{ name: 'AUSTRALIE', type: _pipilet_female2.default, recipe: _alba2.default, downloadRecipe: _recette_fr_australie2.default }, { name: 'VANUATU', type: _pipilet_male2.default, recipe: _helado2.default, downloadRecipe: _recette_fr_vanuatu2.default }, { name: 'NOUVELLE ZÉLANDE', type: _pipilet_male2.default, recipe: _pavlova2.default, downloadRecipe: _recette_fr_zelande2.default }]
		},
		europe: {
			name: 'europe',
			title: 'ATELIER DE CUISINE EUROPÉENNE',
			country: [{ name: 'ANGLETERRE', type: _pipilet_female2.default, recipe: _fairy_cakes2.default, downloadRecipe: _recette_fr_english2.default }, { name: 'FRANCE', type: _pipilet_male2.default, recipe: _mousseDeChocolate2.default, downloadRecipe: _recette_fr_french2.default }, { name: 'ALLEMAGNE', type: _pipilet_female2.default, recipe: _galletaDePascua2.default, downloadRecipe: _recette_fr_german2.default }, { name: 'ESPAGNE', type: _pipilet_female2.default, recipe: _macedonia2.default, downloadRecipe: _recette_fr_spanish2.default }, { name: 'ITALIE', type: _pipilet_male2.default, recipe: _mouse2.default, downloadRecipe: _recette_fr_italy2.default }, { name: 'RUSSIE', type: _pipilet_female2.default, recipe: _manzanasAsadas2.default, downloadRecipe: _recette_fr_russia2.default }, { name: 'SERBIE', type: _pipilet_female2.default, recipe: _tarta2.default, downloadRecipe: _recette_fr_serbia2.default }]
		},
		africa: {
			name: 'africa',
			title: 'TALLER DE COCINA AFRICANA',
			country: [{ name: 'BENIN', type: _pipilet_female2.default, recipe: _benin2.default, downloadRecipe: _recette_fr_benin2.default }, { name: 'KENYA', type: _pipilet_male2.default, recipe: _kenya2.default, downloadRecipe: _recette_fr_kenya2.default }, { name: 'TUNISIE', type: _pipilet_female2.default, recipe: _tunisie2.default, downloadRecipe: _recette_fr_tunisie2.default }, { name: 'EGYPTE', type: _pipilet_female2.default, recipe: _egypt2.default, downloadRecipe: _recette_fr_egypte2.default }, { name: 'ALGERIE', type: _pipilet_male2.default, recipe: _algerie2.default, downloadRecipe: _recette_fr_algerie2.default }, { name: 'MAROC', type: _pipilet_female2.default, recipe: _maroc2.default, downloadRecipe: _recette_fr_maroc2.default }, { name: 'MADAGASCAR', type: _pipilet_female2.default, recipe: _malagasy2.default, downloadRecipe: _recette_fr_malagasy2.default }]
		},
		asia: {
			name: 'asia',
			title: 'ATELIER DE CUISINE ASIATIQUE',
			country: [{ name: 'JORDANIE', type: _pipilet_female2.default, recipe: _jordanie2.default, downloadRecipe: _recette_fr_jordanie2.default }, { name: 'SINGAPOUR', type: _pipilet_male2.default, recipe: _singapour2.default, downloadRecipe: _recette_fr_singapur2.default }, { name: 'VIETNAM', type: _pipilet_female2.default, recipe: _vietnam2.default, downloadRecipe: _recette_fr_vietnam2.default }, { name: 'CHINE', type: _pipilet_female2.default, recipe: _china2.default, downloadRecipe: _recette_fr_china2.default }, { name: 'LÍBAN', type: _pipilet_male2.default, recipe: _liban2.default, downloadRecipe: _recette_fr_liban2.default }, { name: 'INDE', type: _pipilet_female2.default, recipe: _india2.default, downloadRecipe: _recette_fr_india2.default }, { name: 'ARABIE SAUDITE', type: _pipilet_female2.default, recipe: _maskina2.default, downloadRecipe: _recette_fr_arabe2.default }]
		}
	},
	presentationPageContent: {
		'image-pipilet': _pipiletDescription2.default,
		text: _french.presentation
	},
	WhoarewePageContent: {
		whoarewe: _french2.whoarewe
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(navbar, 'navbar', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/french.js');

	__REACT_HOT_LOADER__.register(sidebar, 'sidebar', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/french.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/french.js');
}();

;

/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _spanish = __webpack_require__(318);

var _spanish2 = _interopRequireDefault(_spanish);

var _french = __webpack_require__(316);

var _french2 = _interopRequireDefault(_french);

var _english = __webpack_require__(315);

var _english2 = _interopRequireDefault(_english);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = [_spanish2.default, _french2.default, _english2.default];
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/index.js');
}();

;

/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _information = __webpack_require__(34);

var _information2 = _interopRequireDefault(_information);

var _pipilet_male = __webpack_require__(4);

var _pipilet_male2 = _interopRequireDefault(_pipilet_male);

var _pipilet_female = __webpack_require__(2);

var _pipilet_female2 = _interopRequireDefault(_pipilet_female);

var _pipiletDescription = __webpack_require__(18);

var _pipiletDescription2 = _interopRequireDefault(_pipiletDescription);

var _winterIsHere = __webpack_require__(314);

var _winterIsHere2 = _interopRequireDefault(_winterIsHere);

var _fallFallBallon = __webpack_require__(303);

var _fallFallBallon2 = _interopRequireDefault(_fallFallBallon);

var _theWasherman = __webpack_require__(311);

var _theWasherman2 = _interopRequireDefault(_theWasherman);

var _ticTicTic = __webpack_require__(312);

var _ticTicTic2 = _interopRequireDefault(_ticTicTic);

var _siMaMaKa = __webpack_require__(308);

var _siMaMaKa2 = _interopRequireDefault(_siMaMaKa);

var _theCourtyardOfMyHouse = __webpack_require__(310);

var _theCourtyardOfMyHouse2 = _interopRequireDefault(_theCourtyardOfMyHouse);

var _hereWeGoRoundTheMulberryBush = __webpack_require__(304);

var _hereWeGoRoundTheMulberryBush2 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush);

var _itsRainning = __webpack_require__(305);

var _itsRainning2 = _interopRequireDefault(_itsRainning);

var _twoTigers = __webpack_require__(313);

var _twoTigers2 = _interopRequireDefault(_twoTigers);

var _springHasCome = __webpack_require__(309);

var _springHasCome2 = _interopRequireDefault(_springHasCome);

var _patACake = __webpack_require__(307);

var _patACake2 = _interopRequireDefault(_patACake);

var _onMondayMorning = __webpack_require__(306);

var _onMondayMorning2 = _interopRequireDefault(_onMondayMorning);

var _winterIsHere3 = __webpack_require__(33);

var _winterIsHere4 = _interopRequireDefault(_winterIsHere3);

var _fallFallBallon3 = __webpack_require__(22);

var _fallFallBallon4 = _interopRequireDefault(_fallFallBallon3);

var _theWasherman3 = __webpack_require__(30);

var _theWasherman4 = _interopRequireDefault(_theWasherman3);

var _ticTicTic3 = __webpack_require__(31);

var _ticTicTic4 = _interopRequireDefault(_ticTicTic3);

var _siMaMaKa3 = __webpack_require__(27);

var _siMaMaKa4 = _interopRequireDefault(_siMaMaKa3);

var _theCourtyardOfMyHouse3 = __webpack_require__(29);

var _theCourtyardOfMyHouse4 = _interopRequireDefault(_theCourtyardOfMyHouse3);

var _hereWeGoRoundTheMulberryBush3 = __webpack_require__(23);

var _hereWeGoRoundTheMulberryBush4 = _interopRequireDefault(_hereWeGoRoundTheMulberryBush3);

var _itsRainning3 = __webpack_require__(24);

var _itsRainning4 = _interopRequireDefault(_itsRainning3);

var _twoTigers3 = __webpack_require__(32);

var _twoTigers4 = _interopRequireDefault(_twoTigers3);

var _springHasCome3 = __webpack_require__(28);

var _springHasCome4 = _interopRequireDefault(_springHasCome3);

var _patACake3 = __webpack_require__(26);

var _patACake4 = _interopRequireDefault(_patACake3);

var _onMondayMorning3 = __webpack_require__(25);

var _onMondayMorning4 = _interopRequireDefault(_onMondayMorning3);

var _map = __webpack_require__(46);

var _map2 = _interopRequireDefault(_map);

var _english = __webpack_require__(253);

var _english2 = _interopRequireDefault(_english);

var _french = __webpack_require__(254);

var _french2 = _interopRequireDefault(_french);

var _russia = __webpack_require__(257);

var _russia2 = _interopRequireDefault(_russia);

var _german = __webpack_require__(255);

var _german2 = _interopRequireDefault(_german);

var _spanish = __webpack_require__(259);

var _spanish2 = _interopRequireDefault(_spanish);

var _italy = __webpack_require__(256);

var _italy2 = _interopRequireDefault(_italy);

var _serbia = __webpack_require__(258);

var _serbia2 = _interopRequireDefault(_serbia);

var _australie = __webpack_require__(260);

var _australie2 = _interopRequireDefault(_australie);

var _vanuatu = __webpack_require__(261);

var _vanuatu2 = _interopRequireDefault(_vanuatu);

var _zelande = __webpack_require__(262);

var _zelande2 = _interopRequireDefault(_zelande);

var _kenya = __webpack_require__(234);

var _kenya2 = _interopRequireDefault(_kenya);

var _benin = __webpack_require__(232);

var _benin2 = _interopRequireDefault(_benin);

var _maroc = __webpack_require__(236);

var _maroc2 = _interopRequireDefault(_maroc);

var _tunisie = __webpack_require__(237);

var _tunisie2 = _interopRequireDefault(_tunisie);

var _egypte = __webpack_require__(233);

var _egypte2 = _interopRequireDefault(_egypte);

var _malagasy = __webpack_require__(235);

var _malagasy2 = _interopRequireDefault(_malagasy);

var _algerie = __webpack_require__(231);

var _algerie2 = _interopRequireDefault(_algerie);

var _mexico = __webpack_require__(244);

var _mexico2 = _interopRequireDefault(_mexico);

var _canadien = __webpack_require__(240);

var _canadien2 = _interopRequireDefault(_canadien);

var _brasil = __webpack_require__(239);

var _brasil2 = _interopRequireDefault(_brasil);

var _guyane = __webpack_require__(242);

var _guyane2 = _interopRequireDefault(_guyane);

var _chilie = __webpack_require__(241);

var _chilie2 = _interopRequireDefault(_chilie);

var _haiti = __webpack_require__(243);

var _haiti2 = _interopRequireDefault(_haiti);

var _argentine = __webpack_require__(238);

var _argentine2 = _interopRequireDefault(_argentine);

var _usa = __webpack_require__(245);

var _usa2 = _interopRequireDefault(_usa);

var _singapour = __webpack_require__(251);

var _singapour2 = _interopRequireDefault(_singapour);

var _arabia = __webpack_require__(246);

var _arabia2 = _interopRequireDefault(_arabia);

var _india = __webpack_require__(248);

var _india2 = _interopRequireDefault(_india);

var _liban = __webpack_require__(250);

var _liban2 = _interopRequireDefault(_liban);

var _china = __webpack_require__(247);

var _china2 = _interopRequireDefault(_china);

var _vietnam = __webpack_require__(252);

var _vietnam2 = _interopRequireDefault(_vietnam);

var _jordania = __webpack_require__(249);

var _jordania2 = _interopRequireDefault(_jordania);

var _color_esp_arabe = __webpack_require__(426);

var _color_esp_arabe2 = _interopRequireDefault(_color_esp_arabe);

var _color_esp_brasil = __webpack_require__(427);

var _color_esp_brasil2 = _interopRequireDefault(_color_esp_brasil);

var _color_esp_china = __webpack_require__(428);

var _color_esp_china2 = _interopRequireDefault(_color_esp_china);

var _color_esp_english = __webpack_require__(429);

var _color_esp_english2 = _interopRequireDefault(_color_esp_english);

var _color_esp_french = __webpack_require__(430);

var _color_esp_french2 = _interopRequireDefault(_color_esp_french);

var _color_esp_german = __webpack_require__(431);

var _color_esp_german2 = _interopRequireDefault(_color_esp_german);

var _color_esp_india = __webpack_require__(432);

var _color_esp_india2 = _interopRequireDefault(_color_esp_india);

var _color_esp_italy = __webpack_require__(433);

var _color_esp_italy2 = _interopRequireDefault(_color_esp_italy);

var _color_esp_russia = __webpack_require__(434);

var _color_esp_russia2 = _interopRequireDefault(_color_esp_russia);

var _color_esp_spanish = __webpack_require__(436);

var _color_esp_spanish2 = _interopRequireDefault(_color_esp_spanish);

var _color_esp_serbia = __webpack_require__(435);

var _color_esp_serbia2 = _interopRequireDefault(_color_esp_serbia);

var _color_esp_swahili = __webpack_require__(437);

var _color_esp_swahili2 = _interopRequireDefault(_color_esp_swahili);

var _spanish3 = __webpack_require__(278);

var _esp_owls = __webpack_require__(400);

var _esp_owls2 = _interopRequireDefault(_esp_owls);

var _esp_owls3 = __webpack_require__(401);

var _esp_owls4 = _interopRequireDefault(_esp_owls3);

var _esp_owls5 = __webpack_require__(402);

var _esp_owls6 = _interopRequireDefault(_esp_owls5);

var _esp_children = __webpack_require__(399);

var _esp_children2 = _interopRequireDefault(_esp_children);

var _allColorsEsp = __webpack_require__(344);

var _allColorsEsp2 = _interopRequireDefault(_allColorsEsp);

var _recette_esp_argentine = __webpack_require__(457);

var _recette_esp_argentine2 = _interopRequireDefault(_recette_esp_argentine);

var _recette_esp_brasil = __webpack_require__(458);

var _recette_esp_brasil2 = _interopRequireDefault(_recette_esp_brasil);

var _recette_esp_haiti = __webpack_require__(462);

var _recette_esp_haiti2 = _interopRequireDefault(_recette_esp_haiti);

var _recette_esp_chilie = __webpack_require__(460);

var _recette_esp_chilie2 = _interopRequireDefault(_recette_esp_chilie);

var _recette_esp_guyane = __webpack_require__(461);

var _recette_esp_guyane2 = _interopRequireDefault(_recette_esp_guyane);

var _recette_esp_mexique = __webpack_require__(463);

var _recette_esp_mexique2 = _interopRequireDefault(_recette_esp_mexique);

var _recette_esp_usa = __webpack_require__(464);

var _recette_esp_usa2 = _interopRequireDefault(_recette_esp_usa);

var _recette_esp_canada = __webpack_require__(459);

var _recette_esp_canada2 = _interopRequireDefault(_recette_esp_canada);

var _recette_esp_australie = __webpack_require__(479);

var _recette_esp_australie2 = _interopRequireDefault(_recette_esp_australie);

var _recette_esp_vanuatu = __webpack_require__(480);

var _recette_esp_vanuatu2 = _interopRequireDefault(_recette_esp_vanuatu);

var _recette_esp_zelande = __webpack_require__(481);

var _recette_esp_zelande2 = _interopRequireDefault(_recette_esp_zelande);

var _recette_esp_english = __webpack_require__(472);

var _recette_esp_english2 = _interopRequireDefault(_recette_esp_english);

var _recette_esp_french = __webpack_require__(473);

var _recette_esp_french2 = _interopRequireDefault(_recette_esp_french);

var _recette_esp_german = __webpack_require__(474);

var _recette_esp_german2 = _interopRequireDefault(_recette_esp_german);

var _recette_esp_spanish = __webpack_require__(478);

var _recette_esp_spanish2 = _interopRequireDefault(_recette_esp_spanish);

var _recette_esp_italy = __webpack_require__(475);

var _recette_esp_italy2 = _interopRequireDefault(_recette_esp_italy);

var _recette_esp_russia = __webpack_require__(476);

var _recette_esp_russia2 = _interopRequireDefault(_recette_esp_russia);

var _recette_esp_serbia = __webpack_require__(477);

var _recette_esp_serbia2 = _interopRequireDefault(_recette_esp_serbia);

var _recette_esp_benin = __webpack_require__(451);

var _recette_esp_benin2 = _interopRequireDefault(_recette_esp_benin);

var _recette_esp_kenya = __webpack_require__(453);

var _recette_esp_kenya2 = _interopRequireDefault(_recette_esp_kenya);

var _recette_esp_tunisie = __webpack_require__(456);

var _recette_esp_tunisie2 = _interopRequireDefault(_recette_esp_tunisie);

var _recette_esp_egypte = __webpack_require__(452);

var _recette_esp_egypte2 = _interopRequireDefault(_recette_esp_egypte);

var _recette_esp_algerie = __webpack_require__(450);

var _recette_esp_algerie2 = _interopRequireDefault(_recette_esp_algerie);

var _recette_esp_maroc = __webpack_require__(455);

var _recette_esp_maroc2 = _interopRequireDefault(_recette_esp_maroc);

var _recette_esp_malagasy = __webpack_require__(454);

var _recette_esp_malagasy2 = _interopRequireDefault(_recette_esp_malagasy);

var _recette_esp_jordanie = __webpack_require__(468);

var _recette_esp_jordanie2 = _interopRequireDefault(_recette_esp_jordanie);

var _recette_esp_singapur = __webpack_require__(470);

var _recette_esp_singapur2 = _interopRequireDefault(_recette_esp_singapur);

var _recette_esp_vietnam = __webpack_require__(471);

var _recette_esp_vietnam2 = _interopRequireDefault(_recette_esp_vietnam);

var _recette_esp_china = __webpack_require__(466);

var _recette_esp_china2 = _interopRequireDefault(_recette_esp_china);

var _recette_esp_liban = __webpack_require__(469);

var _recette_esp_liban2 = _interopRequireDefault(_recette_esp_liban);

var _recette_esp_india = __webpack_require__(467);

var _recette_esp_india2 = _interopRequireDefault(_recette_esp_india);

var _recette_esp_arab = __webpack_require__(465);

var _recette_esp_arab2 = _interopRequireDefault(_recette_esp_arab);

var _spanish4 = __webpack_require__(101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
var navbar = ['Inicio', 'Presentación', 'Pipilet Mandala', 'Videos', 'Contacto'];

var sidebar = ['LAS CANCIONES', 'LOS COLORES Y LOS NÚMEROS', 'LA REPOSTERÍA', '¿ SABES QUIÊN SOY ?'];

var _default = {
	lan: 'esp',
	navbar: _information2.default.getNavbar(navbar, sidebar),
	sidebar: _information2.default.getSidebar(sidebar),
	songPageContent: {
		title: 'LAS CANCIONES',
		language: {
			english: 'INGLÉS',
			arab: 'ARABE',
			italy: 'ITALIANO',
			french: 'FRANCÉS',
			german: 'ALEMÁN',
			russia: 'RUSO',
			china: 'CHINO',
			spanish: 'ESPAÑOL',
			india: 'HINDI',
			africa: 'AFRICANO',
			portugal: 'PORTUGUÉS',
			serbia: 'SERBIO'
		},
		flag: _information2.default.getFlagsMusic(),
		music: [{
			name: 'lebanon',
			'translated-song': _ticTicTic2.default,
			'original-song': _ticTicTic4.default
		}, {
			name: 'ghana',
			'translated-song': _siMaMaKa2.default,
			'original-song': _siMaMaKa4.default
		}, {
			name: 'china',
			'translated-song': _twoTigers2.default,
			'original-song': _twoTigers4.default
		}, {
			name: 'german',
			'translated-song': _winterIsHere2.default,
			'original-song': _winterIsHere4.default
		}, {
			name: 'india',
			'translated-song': _theWasherman2.default,
			'original-song': _theWasherman4.default
		}, {
			name: 'brasil',
			'translated-song': _fallFallBallon2.default,
			'original-song': _fallFallBallon4.default
		}, {
			name: 'italy',
			'translated-song': _springHasCome2.default,
			'original-song': _springHasCome4.default
		}, {
			name: 'french',
			'translated-song': _onMondayMorning2.default,
			'original-song': _onMondayMorning4.default
		}, {
			name: 'english',
			'translated-song': _hereWeGoRoundTheMulberryBush2.default,
			'original-song': _hereWeGoRoundTheMulberryBush4.default
		}, {
			name: 'serbia',
			'translated-song': _itsRainning2.default,
			'original-song': _itsRainning4.default
		}, {
			name: 'russia',
			'translated-song': _patACake2.default,
			'original-song': _patACake4.default
		}, {
			name: 'spanish',
			'translated-song': _theCourtyardOfMyHouse2.default,
			'original-song': _theCourtyardOfMyHouse4.default
		}]
	},
	colorNumberContent: {
		titleColor: 'LOS COLORES',
		imageColor: _allColorsEsp2.default,
		titleNumber: 'LOS NUMEROS',
		imageNumber: _esp_children2.default
	},
	colorPageContent: {
		titleColor: 'LOS COLORES',
		owls: [{
			image: _esp_owls2.default,
			countryName: ['french', 'india', 'spanish', 'russia']
		}, {
			image: _esp_owls4.default,
			countryName: ['german', 'serbia', 'italy', 'china']
		}, {
			image: _esp_owls6.default,
			countryName: ['english', 'tanzania', 'brasil', 'southAfrica']
		}]
	},
	numberPageContent: {
		titleNumber: 'LOS NUMEROS',
		imageNumber: [{
			image: _esp_children2.default,
			countryName: ['french', 'china', 'german', 'spanish', 'italy', 'serbia', 'brasil', 'india', 'english', 'tanzania', 'russia', 'southAfrica']
		}]
	},
	colorTranslatedPageContent: {
		title: 'APRENDIENDO LOS COLORES CON TU AMIGO',
		rules: ['En la parte de abajo encontrarás:', '* una sopa de letras con los colores a buscar', '* un mandala para que puedas colorear a tu gusto.', '!Tú eres fuertes seguro que lo harás bien.!'],
		headerFirstColumn: 'APRENDIENDO LOS COLORES EN',
		originalLanguage: {
			id: 'spanish',
			name: 'ESPAÑOL',
			data: _information2.default.spanishColor
		},
		translated: [{
			id: 'brasil',
			name: 'PORTUGÉS',
			data: _information2.default.brasilColor,
			download: _color_esp_brasil2.default
		}, {
			id: 'china',
			name: 'CHINO',
			subTitle: 'SE ESCRIBE',
			subSubTitle: 'SE PRONUNCIA',
			data: _information2.default.chinaColor,
			download: _color_esp_china2.default
		}, {
			id: 'english',
			name: 'INGLÉS',
			data: _information2.default.englishColor,
			download: _color_esp_english2.default
		}, {
			id: 'french',
			name: 'FRANCÉS',
			data: _information2.default.frenchColor,
			download: _color_esp_french2.default
		}, {
			id: 'german',
			name: 'ALEMAN',
			data: _information2.default.germanColor,
			download: _color_esp_german2.default
		}, {
			id: 'india',
			name: 'HINDI',
			subTitle: 'SE ESCRIBE',
			subSubTitle: 'SE PRONUNCIA',
			data: _information2.default.indiaColor,
			download: _color_esp_india2.default
		}, {
			id: 'italy',
			name: 'ITALIANO',
			data: _information2.default.italyColor,
			download: _color_esp_italy2.default
		}, {
			id: 'russia',
			name: 'RUSO',
			subTitle: 'SE ESCRIBE',
			subSubTitle: 'SE PRONUNCIA',
			data: _information2.default.russiaColor,
			download: _color_esp_russia2.default
		}, {
			id: 'serbia',
			name: 'SERBIO',
			subTitle: 'SE ESCRIBE',
			subSubTitle: 'SE PRONUNCIA',
			data: _information2.default.serbiaColor,
			download: _color_esp_serbia2.default
		}, {
			id: 'arab',
			name: 'ARABE',
			subTitle: 'SE ESCRIBE',
			subSubTitle: 'SE PRONUNCIA',
			data: _information2.default.southColor,
			download: _color_esp_arabe2.default
		}, {
			id: 'spanish',
			name: 'ESPAÑOL',
			data: _information2.default.spanishColor,
			download: _color_esp_spanish2.default
		}, {
			id: 'tanzania',
			name: 'SWAHILI',
			data: _information2.default.tanzaniaColor,
			download: _color_esp_swahili2.default
		}]
	},
	cookerPageContent: {
		title: 'LA RESPOSTERÍA',
		description: _react2.default.createElement(
			'div',
			null,
			_react2.default.createElement(
				'span',
				{ className: 'red' },
				_react2.default.createElement(
					'b',
					null,
					'TU AMIGO HA'
				)
			),
			' DECIDIDO RECORRER ',
			_react2.default.createElement(
				'span',
				{
					className: 'dodgerblue' },
				_react2.default.createElement(
					'b',
					null,
					'EL MUNDO'
				)
			),
			' Y HA VISITADO ',
			_react2.default.createElement(
				'span',
				{
					className: 'green' },
				_react2.default.createElement(
					'b',
					null,
					'LOS CINCO CONTINENTES'
				)
			),
			'. RECOPILANDO DELICIOSOS POSTRES DE ',
			_react2.default.createElement(
				'span',
				{ className: 'yellow' },
				_react2.default.createElement(
					'b',
					null,
					'DIFERENTES PA\xCDSES DEL MUNDO'
				)
			)
		),
		image: _map2.default
	},
	chooseCountryContent: {
		america: {
			name: 'america',
			title: 'TALLER DE COCINA AMERICANA',
			country: [{ name: 'ARGENTINA', type: _pipilet_female2.default, recipe: _argentine2.default, downloadRecipe: _recette_esp_argentine2.default }, { name: 'BRASIL', type: _pipilet_male2.default, recipe: _brasil2.default, downloadRecipe: _recette_esp_brasil2.default }, { name: 'HAITI', type: _pipilet_female2.default, recipe: _haiti2.default, downloadRecipe: _recette_esp_haiti2.default }, { name: 'CHILE', type: _pipilet_female2.default, recipe: _chilie2.default, downloadRecipe: _recette_esp_chilie2.default }, { name: 'GUAYANAS', type: _pipilet_male2.default, recipe: _guyane2.default, downloadRecipe: _recette_esp_guyane2.default }, { name: 'MÉJICO', type: _pipilet_female2.default, recipe: _mexico2.default, downloadRecipe: _recette_esp_mexique2.default }, { name: 'USA', type: _pipilet_female2.default, recipe: _usa2.default, downloadRecipe: _recette_esp_usa2.default }, { name: 'CANADA', type: _pipilet_male2.default, recipe: _canadien2.default, downloadRecipe: _recette_esp_canada2.default }]
		},
		oceania: {
			name: 'oceania',
			title: 'TALLER DE COCINA DE OCEANÍA',
			country: [{ name: 'AUSTRALIA', type: _pipilet_female2.default, recipe: _australie2.default, downloadRecipe: _recette_esp_australie2.default }, { name: 'VANUATU', type: _pipilet_male2.default, recipe: _vanuatu2.default, downloadRecipe: _recette_esp_vanuatu2.default }, { name: 'NUEVA ZELANDA', type: _pipilet_male2.default, recipe: _zelande2.default, downloadRecipe: _recette_esp_zelande2.default }]
		},
		europe: {
			name: 'europe',
			title: 'TALLER DE COCINA EUROPEA',
			country: [{ name: 'INGLATERRA', type: _pipilet_female2.default, recipe: _english2.default, downloadRecipe: _recette_esp_english2.default }, { name: 'FRANCIA', type: _pipilet_male2.default, recipe: _french2.default, downloadRecipe: _recette_esp_french2.default }, { name: 'ALEMANIA', type: _pipilet_female2.default, recipe: _german2.default, downloadRecipe: _recette_esp_german2.default }, { name: 'ESPAÑA', type: _pipilet_female2.default, recipe: _spanish2.default, downloadRecipe: _recette_esp_spanish2.default }, { name: 'ITALIA', type: _pipilet_male2.default, recipe: _italy2.default, downloadRecipe: _recette_esp_italy2.default }, { name: 'RUSIA', type: _pipilet_female2.default, recipe: _russia2.default, downloadRecipe: _recette_esp_russia2.default }, { name: 'SERBIA', type: _pipilet_female2.default, recipe: _serbia2.default, downloadRecipe: _recette_esp_serbia2.default }]
		},
		africa: {
			name: 'africa',
			title: 'TALLER DE COCINA AFRICANA',
			country: [{ name: 'BENIN', type: _pipilet_female2.default, recipe: _benin2.default, downloadRecipe: _recette_esp_benin2.default }, { name: 'KENIA', type: _pipilet_male2.default, recipe: _kenya2.default, downloadRecipe: _recette_esp_kenya2.default }, { name: 'TÚNEZ', type: _pipilet_female2.default, recipe: _tunisie2.default, downloadRecipe: _recette_esp_tunisie2.default }, { name: 'EGIPTO', type: _pipilet_female2.default, recipe: _egypte2.default, downloadRecipe: _recette_esp_egypte2.default }, { name: 'ARGELIA', type: _pipilet_male2.default, recipe: _algerie2.default, downloadRecipe: _recette_esp_algerie2.default }, { name: 'MARRUECOS', type: _pipilet_female2.default, recipe: _maroc2.default, downloadRecipe: _recette_esp_maroc2.default }, { name: 'MADAGASCAR', type: _pipilet_female2.default, recipe: _malagasy2.default, downloadRecipe: _recette_esp_malagasy2.default }]
		},
		asia: {
			name: 'asia',
			title: 'TALLER DE COCINA ASIÁTICA',
			country: [{ name: 'JORDANIA', type: _pipilet_female2.default, recipe: _jordania2.default, downloadRecipe: _recette_esp_jordanie2.default }, { name: 'SINGAPUR', type: _pipilet_male2.default, recipe: _singapour2.default, downloadRecipe: _recette_esp_singapur2.default }, { name: 'VIETNAM', type: _pipilet_female2.default, recipe: _vietnam2.default, downloadRecipe: _recette_esp_vietnam2.default }, { name: 'CHINA', type: _pipilet_female2.default, recipe: _china2.default, downloadRecipe: _recette_esp_china2.default }, { name: 'LÍBANO', type: _pipilet_male2.default, recipe: _liban2.default, downloadRecipe: _recette_esp_liban2.default }, { name: 'INDIA', type: _pipilet_female2.default, recipe: _india2.default, downloadRecipe: _recette_esp_india2.default }, { name: 'ARABIA SAUDITA', type: _pipilet_female2.default, recipe: _arabia2.default, downloadRecipe: _recette_esp_arab2.default }]
		}
	},
	presentationPageContent: {
		'image-pipilet': _pipiletDescription2.default,
		text: _spanish3.presentation
	},
	WhoarewePageContent: {
		whoarewe: _spanish4.whoarewe
	}
};
exports.default = _default;
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(navbar, 'navbar', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/spanish.js');

	__REACT_HOT_LOADER__.register(sidebar, 'sidebar', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/spanish.js');

	__REACT_HOT_LOADER__.register(_default, 'default', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/website-languages/spanish.js');
}();

;

/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.whoarewe = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _color_tree = __webpack_require__(103);

var _color_tree2 = _interopRequireDefault(_color_tree);

var _pipiletRainbow = __webpack_require__(51);

var _pipiletRainbow2 = _interopRequireDefault(_pipiletRainbow);

__webpack_require__(102);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var whoarewe = exports.whoarewe = _react2.default.createElement(
	'div',
	{ className: 'wrapper-who-are-we' },
	_react2.default.createElement(
		'div',
		{ className: 'header-who-are-we' },
		_react2.default.createElement('img', { className: 'hidden', src: _pipiletRainbow2.default }),
		_react2.default.createElement(
			'div',
			{ className: 'text' },
			_react2.default.createElement(
				'h1',
				null,
				'Qui sommes nous?'
			),
			_react2.default.createElement(
				'h3',
				null,
				'Le mot de La Pr\xE9sidente fondatrice :'
			)
		),
		_react2.default.createElement('img', { src: _pipiletRainbow2.default })
	),
	_react2.default.createElement(
		'p',
		null,
		'L\u2019Association Humanitaire franco-espagnole Pipilet Mandala (www.AHFE-pipiletmandala.org), dont le si\xE8ge est en France, est compos\xE9e d\u2019une \xE9quipe de direction fran\xE7aise et espagnole, qui a pour mission d\u2019unir les deux pays afin de d\xE9velopper leur participation solidaire et d\u2019am\xE9liorer la qualit\xE9 de vie des plus d\xE9favoris\xE9s de la plan\xE8te.'
	),
	_react2.default.createElement(
		'p',
		null,
		'\xAB Pour faire court, je vais vous dire comment m\u2019est venue cette id\xE9e et comment ce projet a pris forme lentement gr\xE2ce \xE0 l\'appui d\'un groupe de personnes fran\xE7aises et espagnoles qui ont cru en moi et \xE0 mon objectif. Sans eux, cette association humanitaire n\'existerait pas.'
	),
	_react2.default.createElement(
		'p',
		null,
		'Tout d\'abord, j\'ai travaill\xE9 en tant que travailleuse sociale en Espagne pendant 15 ans. Les services sociaux sont ma vocation depuis l\u2019enfance. D\'une certaine fa\xE7on, cela m\'a beaucoup aid\xE9 \xE0 la cr\xE9ation de l\u2019Association Humanitaire franco-espagnole \xAB Pipilet Mandala \xBB. En plus d\'\xEAtre travailleuse sociale, je suis aussi professeur.'
	),
	_react2.default.createElement(
		'p',
		null,
		'De ces domaines passionnants est n\xE9e \xAB Pipilet Mandala \xBB, une mascotte pour les enfants. Qui mieux que les enfants, symbole de l\u2019avenir, pourra comprendre cette merveilleuse proposition ?'
	),
	_react2.default.createElement(
		'p',
		null,
		'D\'une certaine mani\xE8re, pour moi, l\'un des animaux le plus enracin\xE9 \xE0 la Terre est l\u2019escargot. Cet escargot imaginaire a une particularit\xE9 : il est \xE9tranger et vient nous apporter un message d\'amour universel. Il vient d\'une plan\xE8te encore inconnue de l\'homme, appel\xE9 \xAB Galappar \xBB. Il veut parcourir la Terre, il veut aller \xE0 la rencontre de ses habitants, leur culture, leur histoire, leur musique, leur nourriture et cr\xE9er des amiti\xE9s avec tout le monde. Comme il ne connait pas notre langue, il ira \xE0 l\'\xE9cole comme un enfant, pour apprendre \xE0 parler et \xE0 profiter de toutes sortes de connaissances.'
	),
	_react2.default.createElement(
		'p',
		null,
		'Afin de mener \xE0 bien les objectifs de l\'association, rien de mieux que de cr\xE9er un site Web \xE9ducatif pour les enfants. Ainsi, il est possible d\'apporter un message universel plus rapide... gr\xE2ce \xE0 \xABPipilet Mandala \xBB. Douze langues sont disponibles sur notre site ; et tous les th\xE8mes d\u2019apprentissage \xE0 travers la mascotte : musique, cuisine et \xE9cole.'
	),
	_react2.default.createElement(
		'p',
		null,
		'Cette page est traduite en trois langues (espagnol, fran\xE7ais et anglais). Elle vise \xE0 apporter un message d\'amour universel. Gr\xE2ce \xE0 diverses vid\xE9os, vous y trouverez des phrases de solidarit\xE9, l\'universalit\xE9 en 12 langues.'
	),
	_react2.default.createElement(
		'p',
		null,
		'Pourquoi Mandala? Mandala fait partie du nom de la mascotte, car il en retire ses principes. Le mot mandala vient du sanskrit et signifie \xAB cercle sacr\xE9 \xBB. Un symbole de gu\xE9rison, d\'union, d\'int\xE9gration. Psychologiquement, les mandalas repr\xE9sentent la totalit\xE9 de notre \xEAtre. Chaque personne y r\xE9pond instinctivement, au-del\xE0 de l\'\xE2ge, le sexe, l\'origine, la culture ... un vecteur permettant la sagesse de notre inconscient.'
	),
	_react2.default.createElement(
		'p',
		null,
		'Pipilet Mandala est plus qu\'une mascotte, c\u2019est un projet international humanitaire. Gr\xE2ce \xE0 cet mascotte, nous fa\xE7onnons notre projet humanitaire ... pour r\xE9colter des fonds et ainsi atteindre les objectifs (d\xE9velopper une participation solidaire et d\u2019am\xE9liorer la qualit\xE9 de vie des plus d\xE9favoris\xE9s de la plan\xE8te) de notre Association Humanitaire franco-espagnole \xAB Pipilet Mandala \xBB. Mais \xE9galement, gr\xE2ce \xE0 des achats de solidarit\xE9 (http: // www mode-pipiletmandala.org).'
	),
	_react2.default.createElement(
		'p',
		null,
		'Je vous remercie pour votre aide \xE0 r\xE9aliser notre r\xEAve.'
	),
	_react2.default.createElement(
		'h5',
		null,
		'\xAB Si nous apportons tous un grain de sable, nous pouvons faire une plage \xBB - Elena Garc\xEDa P\xE9rez'
	),
	_react2.default.createElement(
		'h2',
		{ style: { alignSelf: 'flex-start' } },
		'L\u2019\xE9quipe de collaboration'
	),
	_react2.default.createElement(
		'p',
		null,
		'Je souhaite, en tant que Pr\xE9sidente de l\'Association Humanitaire franco-espagnole Pipilet Mandala, vous remercier au nom de l\'\xE9quipe de direction parce que sans vos efforts nos r\xEAves ne seraient pas devenus r\xE9alit\xE9. Vous avez \xE9t\xE9 les premiers \xE0 donner exemple de solidarit\xE9, et nous voulons inscrire votre participation en tant que collaborateurs membres fondateurs.'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Traducteurs:'
	),
	_react2.default.createElement(
		'p',
		{ style: { alignSelf: 'flex-start' } },
		'- Abdelghani Benkhelil ( fran\xE7ais/arabe) ',
		_react2.default.createElement('br', null),
		'- Snezana (fran\xE7ais/serbe) ',
		_react2.default.createElement('br', null),
		'- Helena Mucoseve (fran\xE7ais/russe) ',
		_react2.default.createElement('br', null),
		'- C\xE9cile Bracciano (espagnol-fran\xE7ais) ',
		_react2.default.createElement('br', null),
		'- Sophie Araud-Sheldon (fran\xE7ais-anglais) ',
		_react2.default.createElement('br', null),
		'- Emilie Sheldon (fran\xE7ais-anglais) ',
		_react2.default.createElement('br', null),
		'- Florence Guittard (fran\xE7ais/anglais/italien/allemand) ',
		_react2.default.createElement('br', null),
		'- St\xE9phane Araud (espagnol/fran\xE7ais) ',
		_react2.default.createElement('br', null),
		'- Alyson Bramardi (fran\xE7ais/anglais) ',
		_react2.default.createElement('br', null),
		'- Marie Laurens Gnagne (fran\xE7ais/ langue Adiokrou- Cote de Marfil) ',
		_react2.default.createElement('br', null),
		'- Poline Ribiera (fran\xE7ais/anglais) ',
		_react2.default.createElement('br', null),
		'- Ianis Tamoud (fran\xE7ais/anglais/chinois) ',
		_react2.default.createElement('br', null)
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Cr\xE9ateur/ dessinateur du logotype et de la mascotte Pipilet Mandala'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- John Prieto. \u201CEntre l\xE1pices y pinceles\u201D //hppt://entrelapicesypinceles.blogspot.fr'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Cr\xE9ateur page web de Pipilet Manadala.com'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Mavrick -Protfolio- www.mavrick-duchamp.com'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Cr\xE9atrice de la page web Asociaci\xF3n franco-espa\xF1ola Pipilet Mandala'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- C\xE9cile Araud.'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Co-auteur des livres pour enfants Pipilet Mandala'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Pedro Tena Tena'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Quadri +:'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Timothee Linder // www.quadriplus.com'
	),
	_react2.default.createElement(
		'h4',
		{ style: { alignSelf: 'flex-start' } },
		'* Communication des ressources sociales:'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Alyson Bramardi'
	),
	_react2.default.createElement('br', null),
	_react2.default.createElement(
		'span',
		{ style: { alignSelf: 'flex-start' } },
		'- Poline Ribiera'
	),
	_react2.default.createElement(
		'div',
		{ className: 'wrapper-image-tree' },
		_react2.default.createElement(
			'div',
			{ className: 'sentence-philosophe undisplay' },
			_react2.default.createElement(
				'i',
				null,
				_react2.default.createElement(
					'b',
					null,
					'\xAB Aider les autres c\u2019est s\u2019aider soi m\xEAme \xBB Henry Flagler.'
				)
			)
		),
		_react2.default.createElement('img', { src: _color_tree2.default }),
		_react2.default.createElement(
			'div',
			{ className: 'sentence-philosophe' },
			_react2.default.createElement(
				'i',
				null,
				_react2.default.createElement(
					'b',
					null,
					'\xAB Aider les autres c\u2019est s\u2019aider soi m\xEAme \xBB Henry Flagler.'
				)
			)
		)
	)
);
;

var _temp = function () {
	if (typeof __REACT_HOT_LOADER__ === 'undefined') {
		return;
	}

	__REACT_HOT_LOADER__.register(whoarewe, 'whoarewe', '/Users/mavrickduchamp/Documents/pipiletMandala/src/services/who-are-we/french.jsx');
}();

;

/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-footer{height:400px;display:flex;justify-content:center;margin-top:30px}#wrapper-footer img{max-width:100%;max-height:100%}", ""]);

// exports


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-title-logo{text-align:center;font-family:Amatic SC,cursive;font-size:10vw;margin:30px 0;color:#000;text-decoration:none;display:flex;align-items:center;justify-content:center}#wrapper-title-logo .wrapper-logo{width:20%;margin:0 60px}#wrapper-title-logo .wrapper-logo img{max-width:100%;max-height:100%}#wrapper-title-logo .wrapper-title{margin:0 60px}#wrapper-title-logo .undisplayed{display:none}.red{color:red}.green{color:green}.pink{color:pink}.dodgerblue{color:#1e90ff}.brown{color:brown}.yellowgreen{color:#9acd32}", ""]);

// exports


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-navbar{padding:30px;background:#fc5600;position:relative}#wrapper-navbar .language{display:inline-block;position:absolute;top:50%;left:0;transform:translateY(-50%)}#wrapper-navbar .language ul li{display:inline-block;margin-right:10px;margin-left:10px;cursor:pointer;text-align:center;transition:.5s}#wrapper-navbar .language ul li:hover{transform:scale(1.5)}#wrapper-navbar .navigation{display:inline-block;text-align:center;width:100%;margin:0}#wrapper-navbar .navigation ul{padding:0;margin:0}#wrapper-navbar .navigation li{display:inline-block;position:relative}#wrapper-navbar .navigation li+li{margin-left:60px}#wrapper-navbar .navigation ul li a{transition:.4s;text-decoration:none;color:#fff;font-size:1.8em;padding:20px 0;font-family:Work Sans,sans-serif}#wrapper-navbar .navigation ul li a:hover{border-top:3px solid #fff;border-bottom:3px solid #fff;padding:6px 0}#wrapper-navbar .navigation ul li:hover>ul.wrapper-dropdown-menu{perspective:1000px}#wrapper-navbar .navigation ul li:hover>ul.wrapper-dropdown-menu .wrapper-dropdown{display:block}#wrapper-navbar .navigation ul li:hover>ul.wrapper-dropdown-menu li div:first-child{animation-name:display-dropdown;animation-duration:.3s;animation-fill-mode:forwards}#wrapper-navbar .navigation ul li:hover>ul.wrapper-dropdown-menu li div:nth-child(2){animation-name:display-dropdown;animation-duration:.6s;animation-fill-mode:forwards}#wrapper-navbar .navigation ul li:hover>ul.wrapper-dropdown-menu li div:nth-child(3){animation-name:display-dropdown;animation-duration:.9s;animation-fill-mode:forwards}#wrapper-navbar .navigation ul li:hover>ul.wrapper-dropdown-menu li div:nth-child(4){animation-name:display-dropdown;animation-duration:1.2s;animation-fill-mode:forwards}#wrapper-navbar .wrapper-dropdown-menu{color:#fff;font-family:Work Sans,sans-serif;font-size:29px;position:relative}#wrapper-navbar .wrapper-dropdown-menu .wrapper-dropdown{padding-top:60px;width:120%;position:absolute;top:0;left:-10;text-align:left;font-size:7px;display:none}#wrapper-navbar .wrapper-dropdown-menu .wrapper-dropdown .dropdown{opacity:0;padding:15px 10px;background:#fc5600}#wrapper-navbar .wrapper-dropdown-menu .wrapper-dropdown .dropdown a{color:#fff}@keyframes display-dropdown{0%{opacity:0;-webkit-transform:rotateY(-90deg) translateY(30px);-moz-transform:rotateY(-90deg) translateY(30px);-ms-transform:rotateY(-90deg) translateY(30px);-o-transform:rotateY(-90deg) translateY(30px);transform:rotateY(-90deg) translateY(30px)}to{opacity:1;-webkit-transform:rotateY(0deg) translateY(0);-moz-transform:rotateY(0deg) translateY(0);-ms-transform:rotateY(0deg) translateY(0);-o-transform:rotateY(0deg) translateY(0);transform:rotateY(0deg) translateY(0)}}", ""]);

// exports


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-sidebar{width:20%;display:inline-block;vertical-align:top}#wrapper-sidebar a{font-family:Quattrocento Sans,sans-serif;color:#fc5600;font-weight:700;text-decoration:none}#wrapper-sidebar .wrapper-item{text-align:center;margin:30px}#wrapper-sidebar .wrapper-item img{width:70%;transition:.5s}#wrapper-sidebar .wrapper-item:hover img{transform:scale(1.1)}.or-spacer{margin-top:100px;margin-left:100px;width:400px;position:relative}.or-spacer .mask{overflow:hidden;height:20px}.or-spacer .mask:after{content:\"\";display:block;width:100%;height:25px;border-radius:125px/12px;box-shadow:0 0 8px #000}.or-spacer span{width:50px;height:50px;position:absolute;bottom:100%;margin-bottom:-25px;left:50%;margin-left:-25px;border-radius:100%;box-shadow:0 2px 4px #999;background:#fff}.or-spacer span i{position:absolute;top:4px;bottom:4px;left:4px;right:4px;border-radius:100%;border:1px dashed #aaa;text-align:center;line-height:40px;font-style:normal;color:#999}.or-spacer-vertical{display:inline-block;position:absolute}.or-spacer-vertical .mask{overflow:hidden;width:20px;height:1500px;margin-left:-20px}.or-spacer-vertical.left .mask:after{margin-left:-20px}.or-spacer-vertical.left .mask:after,.or-spacer-vertical.right .mask:before{content:\"\";display:block;width:20px;height:100%;border-radius:12px/125px;box-shadow:0 0 8px #000}.or-spacer-vertical.right .mask:before{margin-left:20px}", ""]);

// exports


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".o-container{width:100%}.wrapper-content{width:80%;display:inline-block;padding:0 60px 60px;overflow:hidden}", ""]);

// exports


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-choose-country-cook .wrapper-title{font-size:5vw;font-family:Montserrat,sans-serif;text-align:center;margin-top:30px}#wrapper-choose-country-cook .wrapper-display-country{margin-top:60px;display:flex;justify-content:space-around;flex-wrap:wrap}#wrapper-choose-country-cook .wrapper-display-country a{display:flex;text-decoration:none;font-family:Montserrat,sans-serif;color:#000}#wrapper-choose-country-cook .wrapper-display-country .display-country{flex-direction:column;align-items:center;display:flex;margin-bottom:15px}#wrapper-choose-country-cook .wrapper-display-country .display-country .wrapper-image{width:15vw;height:15vw;margin-bottom:15px;text-align:center}#wrapper-choose-country-cook .wrapper-display-country .display-country .wrapper-image img{height:100%}", ""]);

// exports


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-colornumber{display:flex;flex-direction:column;justify-content:center}#wrapper-colornumber .wrapper-all-image{width:100%;height:550px;text-align:center}#wrapper-colornumber .wrapper-all-image img{max-width:100%;max-height:100%}", ""]);

// exports


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-color-page .wrapper-section-color-number{display:flex;justify-content:center;flex-wrap:wrap;width:100%;transition:.5s}#wrapper-color-page .wrapper-section-color-number .wrapper-owls+.wrapper-owls{margin-top:30px}#wrapper-color-page .wrapper-section-color-number .wrapper-owls{width:60%}#wrapper-color-page .wrapper-section-color-number .wrapper-owls .owls-inner{position:relative}#wrapper-color-page .wrapper-section-color-number .wrapper-owls .owls-inner .border{position:absolute;flex-wrap:wrap}#wrapper-color-page .wrapper-section-color-number .wrapper-owls .owls-inner .width_color{width:23%;height:100%}#wrapper-color-page .wrapper-section-color-number .wrapper-owls .owls-inner .color_0{top:0;left:2%}#wrapper-color-page .wrapper-section-color-number .wrapper-owls .owls-inner .color_1{top:0;left:26%}#wrapper-color-page .wrapper-section-color-number .wrapper-owls .owls-inner .color_2{top:0;left:50.5%}#wrapper-color-page .wrapper-section-color-number .wrapper-owls .owls-inner .color_3{top:0;left:75%}#wrapper-color-page .wrapper-section-color-number .wrapper-owls img{max-height:100%;max-width:100%}", ""]);

// exports


/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-cooker-page .wrapper-description{vertical-align:middle;width:40%;display:inline-block;text-align:center;font-family:Raleway,sans-serif;font-weight:100;font-size:1.7vw}#wrapper-cooker-page .wrapper-map{vertical-align:middle;width:60%;display:inline-block;position:relative}#wrapper-cooker-page .wrapper-map .absolute{position:absolute;top:0;left:0}#wrapper-cooker-page .wrapper-map .america .america-one{top:7%;left:4%;height:26%;width:35%;z-index:1}#wrapper-cooker-page .wrapper-map .america .america-two{top:33%;left:14%;height:59%;width:25%;z-index:1}#wrapper-cooker-page .wrapper-map .america:hover+.map_america{display:inherit}#wrapper-cooker-page .wrapper-map .europe .europe-one{top:8%;left:40%;height:36%;width:18%;z-index:1}#wrapper-cooker-page .wrapper-map .europe:hover+.map_europe{display:inherit}#wrapper-cooker-page .wrapper-map .asia .asia-one{top:8%;left:58%;height:47%;width:37%;z-index:1}#wrapper-cooker-page .wrapper-map .asia:hover+.map_asia{display:inherit}#wrapper-cooker-page .wrapper-map .africa .africa-one{top:44%;left:43%;height:32%;width:14%;z-index:1}#wrapper-cooker-page .wrapper-map .africa .africa-two{top:56%;left:57%;height:15%;width:4%;z-index:1}#wrapper-cooker-page .wrapper-map .africa:hover+.map_africa{display:inherit}#wrapper-cooker-page .wrapper-map .oceania .oceania-one{top:55%;left:73%;height:30%;width:22%;z-index:1}#wrapper-cooker-page .wrapper-map .oceania:hover+.map_oceania{display:inherit}#wrapper-cooker-page .wrapper-map img{width:100%}#wrapper-cooker-page .wrapper-footer{margin-top:30px;height:300px;width:100%}#wrapper-cooker-page .wrapper-footer .wrapper-image{vertical-align:middle;height:100%;width:50%;display:inline-block;text-align:center}#wrapper-cooker-page .wrapper-footer .wrapper-image img{max-height:100%;max-width:100%}.red{color:red}.green{color:green}.yellow{color:#eabe00}.dodgerblue{color:#1e90ff}.brown{color:brown}.purple{color:#9370db}", ""]);

// exports


/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-display-recipe .wrapper-header-recipe{display:flex;justify-content:space-around;align-items:center;height:20vw;margin:60px 0}#wrapper-display-recipe .wrapper-header-recipe .wrapper-image-girl-man{text-align:center;height:100%}#wrapper-display-recipe .wrapper-header-recipe .wrapper-image-girl-man img{max-height:100%;max-width:100%}#wrapper-display-recipe .wrapper-header-recipe .wrapper-title{text-align:center;align-self:center;font-size:2.7vw;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}#wrapper-display-recipe .wrapper-header-recipe .wrapper-image-pipilet{height:100%}#wrapper-display-recipe .wrapper-header-recipe .wrapper-image-pipilet img{max-height:100%;max-width:100%}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map{margin-bottom:60px}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-title{display:flex;justify-content:center;color:red;text-align:center;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:2.4vw;margin-bottom:30px}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-ingredient{margin-bottom:60px;display:flex;justify-content:space-between;align-items:center}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-ingredient .wrapper-all-recipe .wrapper-recipe .inner-recipe{width:100%;margin-right:15px}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-ingredient .wrapper-all-recipe .wrapper-recipe .inner-recipe .wrapper-title-section{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:34px;margin-bottom:15px}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-ingredient .wrapper-all-recipe .wrapper-recipe .inner-recipe ul{margin:15px 0;padding:0}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-ingredient .wrapper-all-recipe .wrapper-recipe .inner-recipe ul li{font-size:18px;line-height:2}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-ingredient .wrapper-logo-download{width:10%}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-ingredient .wrapper-logo-download img{max-width:100%;max-height:100%}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-ingredient .wrapper-logo-recipe{width:50%;margin-left:15px;text-align:center}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-ingredient .wrapper-logo-recipe img{max-width:100%;max-height:100%}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-preparation .wrapper-title-section{font-family:Helvetica Neue,Helvetica,Arial,sans-serif;font-size:34px;margin-bottom:15px}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-preparation ul{margin:15px 0;padding:0}#wrapper-display-recipe .wrapper-recipe .wrapper-recipe-map .wrapper-section-preparation ul li{font-size:18px;line-height:2}", ""]);

// exports


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-headertitle{display:flex;align-items:center;justify-content:center;height:200px}#wrapper-headertitle .wrapper-tree-bird{width:30%}#wrapper-headertitle .wrapper-tree-bird img{width:100%}#wrapper-headertitle .wrapper-title{width:50%}#wrapper-headertitle .wrapper-title img{width:100%}#wrapper-image{padding:30px;text-align:center}#wrapper-image img{width:75%}", ""]);

// exports


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-header-song{margin:60px 0;display:flex;width:100%;justify-content:space-around;align-items:center;height:500px}#wrapper-header-song .wrapper-title-flag{display:flex;flex-direction:column;width:50%;height:100%;margin:0 15px}#wrapper-header-song .wrapper-title-flag .wrapper-title{width:100%}#wrapper-header-song .wrapper-title-flag .title-song{font-size:63px;text-align:center;margin:15px 0}#wrapper-header-song .wrapper-title-flag .flag-song,#wrapper-header-song .wrapper-title-flag .wrapper-icon-download{text-align:center}#wrapper-header-song .wrapper-title-flag .wrapper-icon-download img{width:30%;margin-top:15px}#wrapper-header-song .wrapper-image-song{display:flex;justify-content:center;align-items:center;width:50%;height:100%;margin:0 15px}#wrapper-header-song .wrapper-image-song img{max-width:100%;max-height:100%}", ""]);

// exports


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, ".container-information-song{margin-top:60px;display:flex;flex-direction:column;justify-content:flex-start;font-family:Helvetica Neue,Helvetica,Arial,sans-serif}.container-information-song .wrapper-title-information{color:#fba432;font-size:34px}.container-information-song .wrapper-rules{margin-top:15px;line-height:2}", ""]);

// exports


/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-lyrics-song{display:inline-block}#wrapper-lyrics-song .wrapper-original-language{vertical-align:top;display:inline-block}#wrapper-lyrics-song .wrapper-selected-language{vertical-align:top;display:inline-block;width:50%}#wrapper-lyrics-song .lyrics-text{display:inline-block;font-size:1.3vw}", ""]);

// exports


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-sheet{margin-top:60px;text-align:center}#wrapper-sheet img{width:100%}", ""]);

// exports


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-video-image{display:inline-block;vertical-align:top}#wrapper-video-image span{display:inline-block;width:100%}#wrapper-video-image .wrapper-youtube-video{display:inline-block;vertical-align:middle}#wrapper-video-image .youtube-video{display:inline-block;margin-top:30px;height:21vw;width:100%}#wrapper-video-image .image-pipilet-song{vertical-align:middle;display:inline-block;text-align:center}#wrapper-video-image .image-pipilet-song img{width:13vw}", ""]);

// exports


/***/ }),
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-number-page .wrapper-section-color-number{display:flex;justify-content:center;flex-wrap:wrap;width:100%;transition:.5s}#wrapper-number-page .wrapper-section-color-number .owls-inner{position:relative}#wrapper-number-page .wrapper-section-color-number .owls-inner .border{position:absolute;flex-wrap:wrap}#wrapper-number-page .wrapper-section-color-number .owls-inner .width_number{width:13%;height:50%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_0{top:0;left:6%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_1{top:0;left:19%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_2{top:0;left:33%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_3{top:0;left:50%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_4{top:0;left:69%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_5{top:0;left:86%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_6{top:50%;left:6%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_7{top:50%;left:22%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_8{top:50%;left:39%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_9{top:50%;left:55%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_10{top:50%;left:71%}#wrapper-number-page .wrapper-section-color-number .owls-inner .number_11{top:50%;left:86%}#wrapper-number-page .wrapper-section-color-number img{max-height:100%;max-width:100%}", ""]);

// exports


/***/ }),
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-presentation-page{padding:0 30px}#wrapper-presentation-page .wrapper-image-pipilet{width:30%;float:left}#wrapper-presentation-page .wrapper-image-pipilet img{width:93%}", ""]);

// exports


/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-flag,#wrapper-flag .wrapper-circle{position:relative;overflow:hidden}#wrapper-flag .wrapper-circle{padding:60px;width:100%;transition:.4s}#wrapper-flag .circle-container{position:relative;width:35vw;height:35vw;padding:0;border-radius:50%;list-style:none;box-sizing:content-box;margin:0 auto;z-index:2}#wrapper-flag .circle-container>*{display:block;position:absolute;top:50%;left:50%;width:6vw;height:6vw;margin:-3vw}#wrapper-flag .circle-container>:first-of-type{transform:rotate(0deg) translate(17.5vw) rotate(0deg)}#wrapper-flag .circle-container>:nth-of-type(2){transform:rotate(30deg) translate(17.5vw) rotate(-30deg)}#wrapper-flag .circle-container>:nth-of-type(3){transform:rotate(60deg) translate(17.5vw) rotate(-60deg)}#wrapper-flag .circle-container>:nth-of-type(4){transform:rotate(90deg) translate(17.5vw) rotate(-90deg)}#wrapper-flag .circle-container>:nth-of-type(5){transform:rotate(120deg) translate(17.5vw) rotate(-120deg)}#wrapper-flag .circle-container>:nth-of-type(6){transform:rotate(150deg) translate(17.5vw) rotate(-150deg)}#wrapper-flag .circle-container>:nth-of-type(7){transform:rotate(180deg) translate(17.5vw) rotate(-180deg)}#wrapper-flag .circle-container>:nth-of-type(8){transform:rotate(210deg) translate(17.5vw) rotate(-210deg)}#wrapper-flag .circle-container>:nth-of-type(9){transform:rotate(240deg) translate(17.5vw) rotate(-240deg)}#wrapper-flag .circle-container>:nth-of-type(10){transform:rotate(270deg) translate(17.5vw) rotate(-270deg)}#wrapper-flag .circle-container>:nth-of-type(11){transform:rotate(300deg) translate(17.5vw) rotate(-300deg)}#wrapper-flag .circle-container>:nth-of-type(12){transform:rotate(330deg) translate(17.5vw) rotate(-330deg)}#wrapper-flag .circle-container img{display:block;width:100%;border-radius:50%}#wrapper-flag .children-earth{position:absolute;top:50%;left:50%;width:25vw;height:25vw;transform:translate(-50%,-50%)}", ""]);

// exports


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-language{height:20vw;margin-bottom:30px;display:flex}#wrapper-language .wrapper-display-language{width:100%;height:100%;position:relative}#wrapper-language .wrapper-display-language .absolute-language{position:absolute;font-size:1.2vw;font-family:Roboto Slab,serif;transition:.5s;text-decoration:none}#wrapper-language .wrapper-display-language .scale:hover{transform:scale(1.2)}#wrapper-language .wrapper-display-language .arab{top:20%;left:2%;color:#00bfff}#wrapper-language .wrapper-display-language .english{top:10%;left:46%;color:#00008b}#wrapper-language .wrapper-display-language .indian{top:17%;left:71%;color:#ff1493}#wrapper-language .wrapper-display-language .french{top:44%;left:69%;color:#00bfff}#wrapper-language .wrapper-display-language .african{top:30%;left:29%;color:#006400}#wrapper-language .wrapper-display-language .serbia{top:50%;left:54%;color:#ff8c00}#wrapper-language .wrapper-display-language .italian{top:50%;left:10%;color:#00008b}#wrapper-language .wrapper-display-language .spanish{top:20%;left:90%;color:peru}#wrapper-language .wrapper-display-language .china{top:70%;left:36%;color:#ff1493}#wrapper-language .wrapper-display-language .germany{top:63%;left:80%;color:#ff8c00}#wrapper-language .wrapper-display-language .russian{top:80%;left:4%;color:peru}#wrapper-language .wrapper-display-language .portuguese{top:80%;left:64%;color:#006400}#wrapper-language .wrapper-display-language .note1{top:78%;left:93%;height:18%;transform:rotate(10deg)}#wrapper-language .wrapper-display-language .note2{top:10%;left:12%;height:25%;transform:rotate(13deg)}#wrapper-language .wrapper-display-language .note3{top:9%;left:60%;height:14%}#wrapper-language .wrapper-display-language .note4{top:34%;left:20%;height:40%}#wrapper-language .wrapper-display-language .note5{top:24%;left:42%;height:33%}#wrapper-language .wrapper-display-language .note6{top:22%;left:80%;height:31%}#wrapper-language .wrapper-display-language .note7{top:79%;left:49%;height:22%}#wrapper-language .wrapper-display-language .note8{top:73%;left:19%;height:25%}", ""]);

// exports


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-game #wrapper-title-game{font-size:34px;text-align:center;margin-bottom:60px}#wrapper-game #wrapper-mot-croise .wrapper-word{display:inline-block;width:50%;text-align:center}#wrapper-game #wrapper-mot-croise .wrapper-word #wrapper-list-word{display:inline-block}#wrapper-game #wrapper-mot-croise .wrapper-word #wrapper-list-word .list-word th{color:red;padding:15px;text-align:left;font-size:22px}#wrapper-game #wrapper-mot-croise .wrapper-word #wrapper-list-word .list-word td{padding:15px;font-size:22px}#wrapper-game #wrapper-mot-croise .wrapper-grid{display:inline-block;width:50%}#wrapper-game #wrapper-mot-croise .wrapper-grid #wrapper-grid-word{display:inline-block;width:100%}#wrapper-game #wrapper-mot-croise .wrapper-grid #wrapper-grid-word table{border-collapse:collapse;width:100%}#wrapper-game #wrapper-mot-croise .wrapper-grid #wrapper-grid-word table tr td{padding:15px;text-align:center;border:1px solid #000;font-size:22px}", ""]);

// exports


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#wrapper-translated-color #wrapper-header{margin:60px 0}#wrapper-translated-color #wrapper-header .wrapper-image-pipilet{width:30%;display:inline-block;vertical-align:middle}#wrapper-translated-color #wrapper-header .wrapper-image-pipilet img{width:100%}#wrapper-translated-color #wrapper-header .wrapper-title-rules{width:70%;display:inline-block;vertical-align:middle;text-align:center}#wrapper-translated-color #wrapper-header .wrapper-title-rules .wrapper-title{font-size:32px}#wrapper-translated-color #wrapper-header .wrapper-title-rules .wrapper-logo-pipilet{margin-bottom:60px}#wrapper-translated-color #wrapper-header .wrapper-title-rules .wrapper-logo-pipilet img{width:100%}#wrapper-translated-color #wrapper-header .wrapper-title-rules .wrapper-rules-download{display:flex;justify-content:space-around;flex-direction:column}#wrapper-translated-color #wrapper-header .wrapper-title-rules .wrapper-rules-download img{width:15%}#wrapper-translated-color #wrapper-header .wrapper-title-rules .wrapper-rules-download .wrapper-download{margin-top:15px}#wrapper-translated-color #wrapper-header .wrapper-title-rules .wrapper-rules-download .wrapper-rules div{margin:30px;font-size:22px}#wrapper-translated-color #wrapper-table{width:100%;text-align:center;margin-left:auto;margin-right:auto;margin-bottom:60px}#wrapper-translated-color #wrapper-table table{border-collapse:collapse;margin:0 auto;display:inline-block}#wrapper-translated-color #wrapper-table table thead{margin:15px}#wrapper-translated-color #wrapper-table table thead td{text-align:center;color:red;font-weight:700}#wrapper-translated-color #wrapper-table td{border:1px solid #000;width:15vw;height:70px;text-align:center}#wrapper-translated-color #wrapper-table td img{padding:5px;width:20%}#wrapper-translated-color #wrapper-game{margin-bottom:60px}#wrapper-translated-color #wrapper-drawing{text-align:center}#wrapper-translated-color #wrapper-drawing img{width:40%}", ""]);

// exports


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(undefined);
// imports


// module
exports.push([module.i, "#translated-number{padding:60px}#translated-number .wrapper-flag-title-book{margin-bottom:30px}#translated-number .wrapper-flag{text-align:center;width:20%;vertical-align:middle;display:inline-block}#translated-number .wrapper-flag img{width:100%}#translated-number .wrapper-title{text-align:center;font-size:31px;vertical-align:middle;width:60%;display:inline-block}#translated-number .wrapper-book-number{text-align:center;width:20%;vertical-align:middle;display:inline-block}#translated-number .wrapper-book-number img{width:150px}#table-number table{border-collapse:collapse}#table-number td{border:1px solid #000;width:20vw;padding:7px}#table-number .first-table{margin-bottom:60px}#table-number .letter-dot{color:red;font-weight:700;font-size:22px}#table-number .wrapper-third-four{display:flex;justify-content:space-around;margin-bottom:60px}#table-number .first-table{display:flex;justify-content:center}#table-number .wrapper-second-table{display:flex;align-items:center;justify-content:space-around;margin-bottom:60px}#table-number .wrapper-second-table .wrapper-logo-download{text-align:center;width:10%}#table-number .wrapper-second-table .wrapper-logo-download img{width:100%}#table-number .wrapper-second-table .wrapper-little-draw{height:25%}#table-number .wrapper-second-table .wrapper-little-draw .little-draw{height:100%}#table-number .wrapper-third-table .third-table{text-align:center}#table-number .wrapper-third-table .third-table td{width:10vw}#table-number .wrapper-fourth-table{text-align:center}#table-number .wrapper-fourth-table .fourth-table td{width:15vw;font-weight:700;font-size:22px;text-align:center}#table-number .wrapper-fourth-table .fourth-table .exercice-number{width:auto}#table-number .wrapper-logo{margin-bottom:60px}#table-number .wrapper-logo img{height:10%}#table-number .wrapper-big-draw{display:flex;justify-content:center}#table-number .wrapper-big-draw img{height:80%}", ""]);

// exports


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_all-colors-eng.png";

/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_all-colors-esp.png";

/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_all-colors-fr.png";

/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_arab_draw_1.png";

/***/ }),
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_arab_draw_2.png";

/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_black.png";

/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_blue.png";

/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_brasil_draw.png";

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_brown.png";

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_china_draw_1.png";

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_china_draw_2.png";

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_english_draw.png";

/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_french_draw.png";

/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_german_draw.png";

/***/ }),
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_green.png";

/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_india_draw_1.png";

/***/ }),
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_india_draw_2.png";

/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_italy_draw.png";

/***/ }),
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_orange.png";

/***/ }),
/* 362 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_pink.png";

/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_purple.png";

/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_red.png";

/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_russia_draw_1.png";

/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_russia_draw_2.png";

/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_serb_draw_1.png";

/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_serb_draw_2.png";

/***/ }),
/* 369 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_spanish_draw.png";

/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_tanzanie_draw.png";

/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_white.png";

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_yellow.png";

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_english_nav.png";

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_french_nav.png";

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_note-1.png";

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_note-2.png";

/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_note-3.png";

/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_note-4.png";

/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_on-monday-morning.jpg";

/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_si-ma-ma-ka.jpg";

/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_the-courtyard-of-my-house.jpg";

/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_the-washerman.jpg";

/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_tic-tic-tic.jpg";

/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_sheet-fall-fall-ballon.png";

/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_sheet-here-we-go-round-the-mulberry-bush.png";

/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_sheet-its-rainning.png";

/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_sheet-on-monday-morning.png";

/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_sheet-si-ma-ma-ka.png";

/***/ }),
/* 389 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_sheet-the-courtyard-of-my-house.png";

/***/ }),
/* 390 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_sheet-tic-tic-tic.jpg";

/***/ }),
/* 391 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_sheet-two-tigers.jpg";

/***/ }),
/* 392 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_sheet-winter-is-here.png";

/***/ }),
/* 393 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pipilet-horizontal.jpg";

/***/ }),
/* 394 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_spanish_nav.png";

/***/ }),
/* 395 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_eng_children.png";

/***/ }),
/* 396 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_eng_owls-1.png";

/***/ }),
/* 397 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_eng_owls-2.png";

/***/ }),
/* 398 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_eng_owls-3.png";

/***/ }),
/* 399 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_esp_children.png";

/***/ }),
/* 400 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_esp_owls-1.png";

/***/ }),
/* 401 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_esp_owls-2.png";

/***/ }),
/* 402 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_esp_owls-3.png";

/***/ }),
/* 403 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_fr_children.png";

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_fr_owls-1.png";

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_fr_owls-2.png";

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_fr_owls-3.png";

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_map.png";

/***/ }),
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_family-owls.jpg";

/***/ }),
/* 409 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_family.jpg";

/***/ }),
/* 410 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_pipilet-horizontal.jpg";

/***/ }),
/* 411 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jpg_earth-snow.jpg";

/***/ }),
/* 412 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_hand-write-logo.png";

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_book-number.png";

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_arabe.pdf";

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_brasil.pdf";

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_china.pdf";

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_english.pdf";

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_french.pdf";

/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_german.pdf";

/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_india.pdf";

/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_italy.pdf";

/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_russia.pdf";

/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_serbia.pdf";

/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_spanish.pdf";

/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_eng_swahili.pdf";

/***/ }),
/* 426 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_arabe.pdf";

/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_brasil.pdf";

/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_china.pdf";

/***/ }),
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_english.pdf";

/***/ }),
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_french.pdf";

/***/ }),
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_german.pdf";

/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_india.pdf";

/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_italy.pdf";

/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_russia.pdf";

/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_serbia.pdf";

/***/ }),
/* 436 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_spanish.pdf";

/***/ }),
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_esp_swahili.pdf";

/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_arabe.pdf";

/***/ }),
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_brasil.pdf";

/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_china.pdf";

/***/ }),
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_english.pdf";

/***/ }),
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_french.pdf";

/***/ }),
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_german.pdf";

/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_india.pdf";

/***/ }),
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_italy.pdf";

/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_russia.pdf";

/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_serbia.pdf";

/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_spanish.pdf";

/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_color_fr_swahili.pdf";

/***/ }),
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_algerie.pdf";

/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_benin.pdf";

/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_egypte.pdf";

/***/ }),
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_kenya.pdf";

/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_malagasy.pdf";

/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_maroc.pdf";

/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_tunisie.pdf";

/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_argentine.pdf";

/***/ }),
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_brasil.pdf";

/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_canada.pdf";

/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_chilie.pdf";

/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_guyane.pdf";

/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_haiti.pdf";

/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_mexique.pdf";

/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_usa.pdf";

/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_arab.pdf";

/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_china.pdf";

/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_india.pdf";

/***/ }),
/* 468 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_jordanie.pdf";

/***/ }),
/* 469 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_liban.pdf";

/***/ }),
/* 470 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_singapur.pdf";

/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_vietnam.pdf";

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_english.pdf";

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_french.pdf";

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_german.pdf";

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_italy.pdf";

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_russia.pdf";

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_serbia.pdf";

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_spanish.pdf";

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_australie.pdf";

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_vanuatu.pdf";

/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_esp_zelande.pdf";

/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_algerie.pdf";

/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_benin.pdf";

/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_egypte.pdf";

/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_kenya.pdf";

/***/ }),
/* 486 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_malagasy.pdf";

/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_maroc.pdf";

/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_tunisie.pdf";

/***/ }),
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_argentine.pdf";

/***/ }),
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_brasil.pdf";

/***/ }),
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_canada.pdf";

/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_chilie.pdf";

/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_guyane.pdf";

/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_haiti.pdf";

/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_mexique.pdf";

/***/ }),
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_usa.pdf";

/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_arabe.pdf";

/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_china.pdf";

/***/ }),
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_india.pdf";

/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_jordanie.pdf";

/***/ }),
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_liban.pdf";

/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_singapur.pdf";

/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_vietnam.pdf";

/***/ }),
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_english.pdf";

/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_french.pdf";

/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_german.pdf";

/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_italy.pdf";

/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_russia.pdf";

/***/ }),
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_serbia.pdf";

/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_spanish.pdf";

/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_australie.pdf";

/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_vanuatu.pdf";

/***/ }),
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_recette_fr_zelande.pdf";

/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_arabe.pdf";

/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_brasil.pdf";

/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_china.pdf";

/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_english.pdf";

/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_french.pdf";

/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_german.pdf";

/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_india.pdf";

/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_italy.pdf";

/***/ }),
/* 522 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_russia.pdf";

/***/ }),
/* 523 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_serbia.pdf";

/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_spanish.pdf";

/***/ }),
/* 525 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_number_swahili.pdf";

/***/ }),
/* 526 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_fall-fall-ballon.pdf";

/***/ }),
/* 527 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_here-we-go-round-the-mulberry-bush.pdf";

/***/ }),
/* 528 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_its-rainning.pdf";

/***/ }),
/* 529 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_on-monday-morning.pdf";

/***/ }),
/* 530 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_pat-a-cake.pdf";

/***/ }),
/* 531 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_si-ma-ma-ka.pdf";

/***/ }),
/* 532 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_spring-has-come.pdf";

/***/ }),
/* 533 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_the-courtyard-of-my-house.pdf";

/***/ }),
/* 534 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_the-washerman.pdf";

/***/ }),
/* 535 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_tic-tic-tic.pdf";

/***/ }),
/* 536 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_two-tigers.pdf";

/***/ }),
/* 537 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_eng_winter_is_here.pdf";

/***/ }),
/* 538 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_fall-fall-ballon.pdf";

/***/ }),
/* 539 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_here-we-go-round-the-mulberry-bush.pdf";

/***/ }),
/* 540 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_its-rainning.pdf";

/***/ }),
/* 541 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_on-monday-morning.pdf";

/***/ }),
/* 542 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_pat-a-cake.pdf";

/***/ }),
/* 543 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_si-ma-ma-ka.pdf";

/***/ }),
/* 544 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_spring-has-come.pdf";

/***/ }),
/* 545 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_the-courtyard-of-my-house.pdf";

/***/ }),
/* 546 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_the-washerman.pdf";

/***/ }),
/* 547 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_tic-tic-tic.pdf";

/***/ }),
/* 548 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_two-tigers.pdf";

/***/ }),
/* 549 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_esp_winter-is-here.pdf";

/***/ }),
/* 550 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_fall-fall-ballon.pdf";

/***/ }),
/* 551 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_here-we-go-round-the-mulberry-bush.pdf";

/***/ }),
/* 552 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_its-rainning.pdf";

/***/ }),
/* 553 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_on-monday-morning.pdf";

/***/ }),
/* 554 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_pat-a-cake.pdf";

/***/ }),
/* 555 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_si-ma-ma-ka.pdf";

/***/ }),
/* 556 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_spring-has-come.pdf";

/***/ }),
/* 557 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_the-courtyard-of-my-house.pdf";

/***/ }),
/* 558 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_the-washerman.pdf";

/***/ }),
/* 559 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_tic-tic-tic.pdf";

/***/ }),
/* 560 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_two-tigers.pdf";

/***/ }),
/* 561 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pdf_song_fr_winter-is-here.pdf";

/***/ }),
/* 562 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_bird_big_draw_number.png";

/***/ }),
/* 563 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "png_bird_little_draw_number.png";

/***/ }),
/* 564 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(159),
    getRawTag = __webpack_require__(567),
    objectToString = __webpack_require__(568);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 565 */
/***/ (function(module, exports) {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),
/* 566 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(569);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),
/* 567 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(159);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 568 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 569 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 570 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(565);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 571 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 572 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(564),
    getPrototype = __webpack_require__(566),
    isObjectLike = __webpack_require__(571);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),
/* 573 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = connectAdvanced;

var _hoistNonReactStatics = __webpack_require__(587);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__(19);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _Subscription = __webpack_require__(580);

var _Subscription2 = _interopRequireDefault(_Subscription);

var _PropTypes = __webpack_require__(579);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidUpdate` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(_react.Component);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (process.env.NODE_ENV !== 'production') {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        var _this2 = this;

        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          // If any connected descendants don't hot reload (and resubscribe in the process), their
          // listeners will be lost when we unsubscribe. Unfortunately, by copying over all
          // listeners, this does mean that the old versions of connected descendants will still be
          // notified of state changes; however, their onStateChange function is a no-op so this
          // isn't a huge deal.
          var oldListeners = [];

          if (this.subscription) {
            oldListeners = this.subscription.listeners.get();
            this.subscription.tryUnsubscribe();
          }
          this.initSubscription();
          if (shouldHandleStateChanges) {
            this.subscription.trySubscribe();
            oldListeners.forEach(function (listener) {
              return _this2.subscription.listeners.subscribe(listener);
            });
          }
        }
      };
    }

    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
  };
}

/***/ }),
/* 574 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

var _redux = __webpack_require__(21);

var _wrapMapToProps = __webpack_require__(160);

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && typeof mapDispatchToProps === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}

exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

var _wrapMapToProps = __webpack_require__(160);

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}

exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),
/* 576 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.defaultMergeProps = defaultMergeProps;
exports.wrapMergePropsFunc = wrapMergePropsFunc;
exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

var _verifyPlainObject = __webpack_require__(161);

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (process.env.NODE_ENV !== 'production') (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ }),
/* 577 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
exports.default = finalPropsSelectorFactory;

var _verifySubselectors = __webpack_require__(578);

var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (process.env.NODE_ENV !== 'production') {
    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 578 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = verifySubselectors;

var _warning = __webpack_require__(162);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 579 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.storeShape = exports.subscriptionShape = undefined;

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
  trySubscribe: _propTypes2.default.func.isRequired,
  tryUnsubscribe: _propTypes2.default.func.isRequired,
  notifyNestedSubs: _propTypes2.default.func.isRequired,
  isSubscribed: _propTypes2.default.func.isRequired
});

var storeShape = exports.storeShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  dispatch: _propTypes2.default.func.isRequired,
  getState: _propTypes2.default.func.isRequired
});

/***/ }),
/* 580 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    get: function get() {
      return next;
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

exports.default = Subscription;

/***/ }),
/* 581 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 582 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.ContextProvider = ContextProvider;
exports.ContextSubscriber = ContextSubscriber;

var _propTypes = __webpack_require__(11);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Works around issues with context updates failing to propagate.
// Caveat: the context value is expected to never change its identity.
// https://github.com/facebook/react/issues/2517
// https://github.com/reactjs/react-router/issues/470

var contextProviderShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  eventIndex: _propTypes2.default.number.isRequired
});

function makeContextName(name) {
  return '@@contextSubscriber/' + name;
}

function ContextProvider(name) {
  var _childContextTypes, _ref2;

  var contextName = makeContextName(name);
  var listenersKey = contextName + '/listeners';
  var eventIndexKey = contextName + '/eventIndex';
  var subscribeKey = contextName + '/subscribe';

  return _ref2 = {
    childContextTypes: (_childContextTypes = {}, _childContextTypes[contextName] = contextProviderShape.isRequired, _childContextTypes),

    getChildContext: function getChildContext() {
      var _ref;

      return _ref = {}, _ref[contextName] = {
        eventIndex: this[eventIndexKey],
        subscribe: this[subscribeKey]
      }, _ref;
    },
    componentWillMount: function componentWillMount() {
      this[listenersKey] = [];
      this[eventIndexKey] = 0;
    },
    componentWillReceiveProps: function componentWillReceiveProps() {
      this[eventIndexKey]++;
    },
    componentDidUpdate: function componentDidUpdate() {
      var _this = this;

      this[listenersKey].forEach(function (listener) {
        return listener(_this[eventIndexKey]);
      });
    }
  }, _ref2[subscribeKey] = function (listener) {
    var _this2 = this;

    // No need to immediately call listener here.
    this[listenersKey].push(listener);

    return function () {
      _this2[listenersKey] = _this2[listenersKey].filter(function (item) {
        return item !== listener;
      });
    };
  }, _ref2;
}

function ContextSubscriber(name) {
  var _contextTypes, _ref4;

  var contextName = makeContextName(name);
  var lastRenderedEventIndexKey = contextName + '/lastRenderedEventIndex';
  var handleContextUpdateKey = contextName + '/handleContextUpdate';
  var unsubscribeKey = contextName + '/unsubscribe';

  return _ref4 = {
    contextTypes: (_contextTypes = {}, _contextTypes[contextName] = contextProviderShape, _contextTypes),

    getInitialState: function getInitialState() {
      var _ref3;

      if (!this.context[contextName]) {
        return {};
      }

      return _ref3 = {}, _ref3[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _ref3;
    },
    componentDidMount: function componentDidMount() {
      if (!this.context[contextName]) {
        return;
      }

      this[unsubscribeKey] = this.context[contextName].subscribe(this[handleContextUpdateKey]);
    },
    componentWillReceiveProps: function componentWillReceiveProps() {
      var _setState;

      if (!this.context[contextName]) {
        return;
      }

      this.setState((_setState = {}, _setState[lastRenderedEventIndexKey] = this.context[contextName].eventIndex, _setState));
    },
    componentWillUnmount: function componentWillUnmount() {
      if (!this[unsubscribeKey]) {
        return;
      }

      this[unsubscribeKey]();
      this[unsubscribeKey] = null;
    }
  }, _ref4[handleContextUpdateKey] = function (eventIndex) {
    if (eventIndex !== this.state[lastRenderedEventIndexKey]) {
      var _setState2;

      this.setState((_setState2 = {}, _setState2[lastRenderedEventIndexKey] = eventIndex, _setState2));
    }
  }, _ref4;
}

/***/ }),
/* 583 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createReactClass = __webpack_require__(54);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(11);

var _routerWarning = __webpack_require__(586);

var _routerWarning2 = _interopRequireDefault(_routerWarning);

var _invariant = __webpack_require__(19);

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = __webpack_require__(164);

var _InternalPropTypes = __webpack_require__(163);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * An <IndexRoute> is used to specify its parent's <Route indexRoute> in
 * a JSX route config.
 */
/* eslint-disable react/require-render-return */
var IndexRoute = (0, _createReactClass2.default)({
  displayName: 'IndexRoute',

  statics: {
    createRouteFromReactElement: function createRouteFromReactElement(element, parentRoute) {
      /* istanbul ignore else: sanity check */
      if (parentRoute) {
        parentRoute.indexRoute = (0, _RouteUtils.createRouteFromReactElement)(element);
      } else {
        process.env.NODE_ENV !== 'production' ? (0, _routerWarning2.default)(false, 'An <IndexRoute> does not make sense at the root of your route config') : void 0;
      }
    }
  },

  propTypes: {
    path: _InternalPropTypes.falsy,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: _propTypes.func,
    getComponents: _propTypes.func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<IndexRoute> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = IndexRoute;
module.exports = exports['default'];

/***/ }),
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.locationShape = exports.routerShape = undefined;

var _propTypes = __webpack_require__(11);

var routerShape = exports.routerShape = (0, _propTypes.shape)({
  push: _propTypes.func.isRequired,
  replace: _propTypes.func.isRequired,
  go: _propTypes.func.isRequired,
  goBack: _propTypes.func.isRequired,
  goForward: _propTypes.func.isRequired,
  setRouteLeaveHook: _propTypes.func.isRequired,
  isActive: _propTypes.func.isRequired
});

var locationShape = exports.locationShape = (0, _propTypes.shape)({
  pathname: _propTypes.string.isRequired,
  search: _propTypes.string.isRequired,
  state: _propTypes.object,
  action: _propTypes.string.isRequired,
  key: _propTypes.string
});

/***/ }),
/* 585 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _createReactClass = __webpack_require__(54);

var _createReactClass2 = _interopRequireDefault(_createReactClass);

var _propTypes = __webpack_require__(11);

var _invariant = __webpack_require__(19);

var _invariant2 = _interopRequireDefault(_invariant);

var _RouteUtils = __webpack_require__(164);

var _InternalPropTypes = __webpack_require__(163);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * A <Route> is used to declare which components are rendered to the
 * page when the URL matches a given pattern.
 *
 * Routes are arranged in a nested tree structure. When a new URL is
 * requested, the tree is searched depth-first to find a route whose
 * path matches the URL.  When one is found, all routes in the tree
 * that lead to it are considered "active" and their components are
 * rendered into the DOM, nested in the same order as in the tree.
 */
/* eslint-disable react/require-render-return */
var Route = (0, _createReactClass2.default)({
  displayName: 'Route',

  statics: {
    createRouteFromReactElement: _RouteUtils.createRouteFromReactElement
  },

  propTypes: {
    path: _propTypes.string,
    component: _InternalPropTypes.component,
    components: _InternalPropTypes.components,
    getComponent: _propTypes.func,
    getComponents: _propTypes.func
  },

  /* istanbul ignore next: sanity check */
  render: function render() {
     true ? process.env.NODE_ENV !== 'production' ? (0, _invariant2.default)(false, '<Route> elements are for router configuration only and should not be rendered') : (0, _invariant2.default)(false) : void 0;
  }
});

exports.default = Route;
module.exports = exports['default'];

/***/ }),
/* 586 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = routerWarning;
exports._resetWarned = _resetWarned;

var _warning = __webpack_require__(590);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var warned = {};

function routerWarning(falseToWarn, message) {
  // Only issue deprecation warnings once.
  if (message.indexOf('deprecated') !== -1) {
    if (warned[message]) {
      return;
    }

    warned[message] = true;
  }

  message = '[react-router] ' + message;

  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  _warning2.default.apply(undefined, [falseToWarn, message].concat(args));
}

function _resetWarned() {
  warned = {};
}

/***/ }),
/* 587 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 588 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 589 */
/***/ (function(module, exports) {

module.exports = require("react-youtube");

/***/ }),
/* 590 */
/***/ (function(module, exports) {

module.exports = require("warning");

/***/ })
/******/ ]);