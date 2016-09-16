(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var EmojiDetector = exports.EmojiDetector = function () {
  function EmojiDetector(additionalCodePoints) {
    _classCallCheck(this, EmojiDetector);

    EmojiDetector.EMOJI_EXPR = EmojiDetector.EMOJI_EXPR.concat(additionalCodePoints);
  }

  _createClass(EmojiDetector, [{
    key: 'containsEmoji',
    value: function containsEmoji(string) {
      return true;
    }
  }, {
    key: 'isEmoji',
    value: function isEmoji(string) {
      var str = string || '';
      if (typeof str !== 'string') {
        throw new Error('A string is required to detect an emoji');
      }
      return this.getEmojiExpression(true).test(string);
    }
  }, {
    key: 'replace',
    value: function replace(stringContainingEmojis, expression) {
      var str = stringContainingEmojis || '';
      if (!(typeof expression === 'string' || typeof expression === 'function')) {
        throw new Error('A string or function replacement is required');
      }
      return str.replace(this.getEmojiExpression(false), expression);
    }
  }, {
    key: 'replaceHTMLElement',
    value: function replaceHTMLElement(htmlElement, expression) {
      var replacement = this.replace(htmlElement.innerHTML, expression);
      htmlElement.innerHTML = replacement;
      return this;
    }
  }, {
    key: 'replaceHTMLElements',
    value: function replaceHTMLElements(selectors, expression) {
      var _this = this;

      [].concat(selectors).reduce(function (elements, elementOrSelector) {
        return elementOrSelector.innerHTML ? elements.concat(elementOrSelector) : elements.concat([].slice.apply(document.querySelectorAll(elementOrSelector)));
      }, []).forEach(function (htmlElement) {
        _this.replaceHTMLElement(htmlElement, expression);
      });
      return this;
    }
  }, {
    key: 'getEmojiExpression',
    value: function getEmojiExpression() {
      var entireMatch = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
      var globalMatch = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

      var expr = '(' + EmojiDetector.EMOJI_EXPR.join('|') + ')';
      return new RegExp(entireMatch ? '^' + expr + '$' : expr, globalMatch && 'g' || '');
    }
  }]);

  return EmojiDetector;
}();

EmojiDetector.EMOJI_EXPR = ['�[�-�]', '�[�-�]', '�[�-�]'];
exports.default = new EmojiDetector();

/***/ }
/******/ ])
});
;
//# sourceMappingURL=emoji-util.js.map