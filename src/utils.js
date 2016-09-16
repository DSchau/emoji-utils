export const EMOJI_EXPR = [
  '\ud83c[\udf00-\udfff]',
  '\ud83d[\udc00-\ude4f]',
  '\ud83d[\ude80-\udeff]'
];

export function getEmojiExpression(entireMatch = false, globalMatch = false) {
  const expr = `(${EMOJI_EXPR.join('|')})`;
  return new RegExp(entireMatch ? `^${expr}$` : expr, globalMatch && 'g' || '');
}

export function containsEmoji(string) {
  return string.split(/\s+/)
    .some((str) => isEmoji(str));
}

export function isEmoji(string) {
  const str = string || '';
  if ( typeof str !== 'string' ) {
    throw new Error('A string is required to detect an emoji');
  }
  return getEmojiExpression(true).test(string);
}
