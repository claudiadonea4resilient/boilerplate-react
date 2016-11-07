var webpack = require('webpack');
var path = require('path');
var pathsConfig = require('./paths.config');

console.log("==================");

var config = {
    entry: [
    'webpack-dev-server/client?http://localhost:8080/',
    'webpack/hot/dev-server',
     pathsConfig.entry
  ],
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: pathsConfig.dist
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        include: [ path.join(__dirname, pathsConfig.app)],
        exclude: /(node_modules|bower_components)/,
        loader: pathsConfig.babelPath
      }
    ]
  },
  plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
  ],

  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    hot: true,
    contentBase: pathsConfig.base
  }
};

module.exports = config;
