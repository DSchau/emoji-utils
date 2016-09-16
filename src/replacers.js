import { getEmojiExpression } from './utils';

export function replace(stringContainingEmojis, expression) {
  if ( !(typeof expression === 'string' || typeof expression === 'function') ) {
    throw new Error('A string or function replacement is required');
  }
  return stringContainingEmojis
    .replace(getEmojiExpression(false), expression);
}

export function replaceDOM(htmlElement, expression) {
  if ( !htmlElement.innerHTML ) {
    htmlElement = document.querySelector(htmlElement);
  }
  const replacement = replace(htmlElement.innerHTML, expression);
  htmlElement.innerHTML = replacement;
}

export function replaceDOMElements(selectors, expression) {
  [].concat(selectors)
    .forEach((htmlElement) => {
      replaceDOM(htmlElement, expression);
    });
}
