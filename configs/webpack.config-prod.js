var config = require('./webpack.config-common');
var pathsConfig = require('./paths.config');
var webpack = require('webpack');

// Additional config that is PRODUCTION only
config.output.publicPath = 'some cdn';
config.devtool =  'eval';

config.plugins = [
    new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.OccurenceOrderPlugin()
  ];

module.exports = config;
