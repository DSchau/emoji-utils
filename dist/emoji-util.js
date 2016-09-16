(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.EmojiUtil = factory());
}(this, (function () { 'use strict';

var EMOJI_EXPR = ['�[�-�]', '�[�-�]', '�[�-�]'];

function getEmojiExpression() {
  var entireMatch = arguments.length <= 0 || arguments[0] === undefined ? false : arguments[0];
  var globalMatch = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

  var expr = '(' + EMOJI_EXPR.join('|') + ')';
  return new RegExp(entireMatch ? '^' + expr + '$' : expr, globalMatch && 'g' || '');
}

function containsEmoji(string) {
  return string.split(/\s+/).some(function (str) {
    return isEmoji(str);
  });
}

function isEmoji(string) {
  var str = string || '';
  if (typeof str !== 'string') {
    throw new Error('A string is required to detect an emoji');
  }
  return getEmojiExpression(true).test(string);
}

function replace(stringContainingEmojis, expression) {
  if (!(typeof expression === 'string' || typeof expression === 'function')) {
    throw new Error('A string or function replacement is required');
  }
  return stringContainingEmojis.replace(getEmojiExpression(false), expression);
}

function replaceDOM(htmlElement, expression) {
  if (!htmlElement.innerHTML) {
    htmlElement = document.querySelector(htmlElement);
  }
  var replacement = replace(htmlElement.innerHTML, expression);
  htmlElement.innerHTML = replacement;
}

function replaceDOMElements(selectors, expression) {
  [].concat(selectors).forEach(function (htmlElement) {
    replaceDOM(htmlElement, expression);
  });
}

var index = {
  containsEmoji: containsEmoji,
  isEmoji: isEmoji,
  replace: replace,
  replaceDOM: replaceDOM,
  replaceDOMElements: replaceDOMElements
};

return index;

})));