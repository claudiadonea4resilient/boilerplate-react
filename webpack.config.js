var webpack = require('webpack');
var path = require('path');
var config = {
    entry: [
    'webpack-dev-server/client?http://localhost:8080/', // WebpackDevServer host and port
    'webpack/hot/dev-server', // "only" prevents reload on syntax errors
    './index.js' // Your appʼs entry point
  ],
  output: {
    filename: 'main.js',
    publicPath: '/',
    path: './dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'//,
        // query: {
        //   presets: ['es2015','react']
        // }
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
    contentBase: './'
  }
};

module.exports = config;
