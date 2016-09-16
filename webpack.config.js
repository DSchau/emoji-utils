const path = require('path');
const pkg = require(path.resolve('./package.json'));

const merge = require('webpack-merge');

module.exports = function(env) {
  const productionConfig = env === 'production' ? require(path.resolve('./webpack.config.production')) : {};
  return merge({
    devtool: 'source-map',
    entry: {
      [pkg.name]: path.resolve('src/index.js')
    },
    output: {
      filename: '[name].js',
      libraryTarget: 'umd',
      path: path.resolve('./dist'),
      publicPath: '/'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          include: path.join(__dirname, 'src'),
          loaders: ['babel']
        }
      ]
    }
  }, productionConfig);
};
