var config = require('./webpack.config-common');
var pathsConfig = require('./paths.config');
var webpack = require('webpack');

// Additional config that is DEVELOPMENT only
config.entry = [
  'webpack-dev-server/client?http://localhost:8080/',
  'webpack/hot/dev-server',
   pathsConfig.entry
];
config.output.publicPath = '/';
config.devServer = {
  hot: true,
  contentBase: pathsConfig.base,
  inline: true
};

config.plugins = [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
];

module.exports = config;
