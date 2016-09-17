const uglify = require('rollup-plugin-uglify');

const baseConfig = require('./rollup.config');

baseConfig.dest = 'dist/emoji-util.min.js';
baseConfig.plugins = baseConfig.plugins.concat([
  uglify()
]);

module.exports = baseConfig;
