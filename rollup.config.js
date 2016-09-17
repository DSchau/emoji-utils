const babel = require('rollup-plugin-babel');

const path = require('path');

module.exports = {
  entry: 'src/index.js',
  dest: 'dist/emoji-util.js',
  format: 'umd',
  moduleName: 'EmojiUtil',
  plugins: [
    babel({
      babelrc: false,
      presets: ['es2015-rollup'],
      plugins: ['external-helpers']
    })
  ]
};
