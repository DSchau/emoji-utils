# Emoji Utils (WIP)

A simple module to provide various emoji functionality, such as passing a string and validating if the string contains an emoji (or is an emoji), as well as replacing any emoji in a string/DOM element with a replacement.

## Install

1. `npm install emoji-utils -S`

## Usage

Emoji Utils is packaged as a UMD module, and so is available with most major module bundlers (RollupJS, Webpack, etc.), as well as AMD or a a global (if you're a heathen...).

```javascript
import EmojiUtils from 'emoji-utils';

// do something great
```

## API

Emoji Utils is really a (small) subset of useful modules, broken apart into replacing content, and then validating if an emoji is contained within a string.

### `containsEmoji(string)`

Determine if given string _contains_ an emoji.

Returns: `boolean`

### `isEmoji(string)`

Determine if given string _is_ an emoji

Returns: `boolean`

### `replace(string, string|function)`

Given a string, replace _each_ emoji occurrence with replacement

Returns: `string` containing the (replaced) emoji
