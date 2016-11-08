var path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var webpackValidator = require('webpack-validator');
var pathsConfig = require('./paths.config');

console.log("======= WEBPACK START ===========\n");

var config = {
    entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
     pathsConfig.entry
  ],
  output: {
    filename: 'main.js',
    path: pathsConfig.dist
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: pathsConfig.app,
        exclude: /(node_modules|bower_components)/,
        loader: pathsConfig.babelPath
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          "style",
          "css!sass")
       }
    ]
  },

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
      new ExtractTextPlugin("app.css")
  ]

};

module.exports = config;
