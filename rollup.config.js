const babel = require('rollup-plugin-babel');

const path = require('path');

const production = process.env.NODE_ENV === 'production';
const productionConfig = production ? require(path.resolve('./rollup.config.production')) : {};

module.exports = {
  entry: 'src/index.js',
  dest: productionConfig.dest || 'dist/emoji-util.js',
  format: 'umd',
  moduleName: 'EmojiUtil',
  plugins: [
    babel()
  ].concat(productionConfig.plugins || [])
};
