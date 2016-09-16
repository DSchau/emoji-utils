const uglify = require('rollup-plugin-uglify');

module.exports = {
  dest: 'dist/emoji-util.min.js',
  plugins: [
    uglify()
  ]
};
