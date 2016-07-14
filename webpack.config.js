require("babel-polyfill");
require("babel-register");

var webpack = require('webpack');

var config = {
  entry:  __dirname + "/App/App.js",
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  },
  devServer: {
    contentBase: './public',
    historyApiFallback: true,
    inline: true
  }
};

module.exports = config;
