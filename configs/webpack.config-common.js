var path = require('path');
var webpackValidator = require('webpack-validator');
var pathsConfig = require('./paths.config');

console.log("======= WEBPACK START ===========\n");

var config = {
  output: {
    filename: 'main.js',
    path: pathsConfig.dist
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [path.join(__dirname, pathsConfig.app)],
        exclude: /(node_modules|bower_components)/,
        loader: pathsConfig.babelPath
      }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

module.exports = config;
