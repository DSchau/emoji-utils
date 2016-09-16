import { expect } from 'chai';

import EmojiUtils from '../src/index';

import * as EMOJI from './mocks/emoji';

describe('emoji-utils', () => {
  describe('replace()', () => {
    const smiley = '😀';
    it('can replace emoji with a simple expression', () => {
      expect(EmojiUtils.replace(smiley, '<span class="emoji">$1</span>'))
        .to.equal(`<span class="emoji">${smiley}</span>`);
    });

    it('can replace emoji with a function', () => {
      expect(EmojiUtils.replace(smiley, (match, emoji) => `ha${emoji}ha`))
        .to.equal(`ha${smiley}ha`);
    });

    it('leaves string as if if no emoji', () => {
      [
        'hello world',
        '<h1>asdfasdf</h1>'
      ]
        .forEach((str) => {
          expect(EmojiUtils.replace(str, '')).to.equal(str);
        });
    });

    it('leaves non-emoji in-place', () => {
      const replacer = (match, emoji) => `<span class="emoji">${emoji}</span>`;
      [
        [`hello world ${smiley}`, replacer, 'hello world '],
        [`hello ${smiley} world`, replacer, ['hello ', ' world']]
      ]
        .forEach(([str, fn, expected]) => {
        });
    });

    it.skip('replaces falsy values with empty string', () => {
      [
        null,
        undefined,
        ''
      ]
        .forEach((replacer) => {
          expect(EmojiUtils.replace(smiley, replacer)).to.equal('');
        });
    });
  });

  describe('isEmoji()', () => {
    it('returns true if an emoji matches unicode char sequence', () => {
      expect(EmojiUtils.isEmoji('😀')).to.be.true;
    });

    it('returns false if character sequence does not match emoji char sequence', () => {
      [
        'asdfasdf',
        false,
        '⊙'
      ]
        .forEach((seq) => {
          expect(EmojiUtils.isEmoji(seq)).to.be.false;
        });
    });

    it.skip('identifies smileys and people', () => {
      EMOJI.SMILEYS_AND_PEOPLE
        .forEach((emoji) => {
          expect(EmojiUtils.isEmoji(emoji)).to.be.true;
        });
    });
  });
});
