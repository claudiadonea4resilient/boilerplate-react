var config = require('./webpack.config-common');
var pathsConfig = require('./paths.config');
var webpack = require('webpack');

// Additional config that is DEVELOPMENT only
config.output.publicPath = '/';
config.devServer = {
  hot: true,
  contentBase: pathsConfig.base,
  inline: true
};

plugins = [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
];
config.plugins = config.plugins.concat(plugins);

module.exports = config;
