/* eslint-disable */

var path = require('path');

module.exports = [{
  context: path.join(__dirname),
  entry: 'index',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style-loader!css-loader?-svgo' },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      { test: /\.json$/, loader: 'json-loader' },
      {
        test: /\.woff$/,
        loader: 'url-loader',
        options: {
          limit: 50000,
        },
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: [
      path.join(__dirname, 'client'),
      'node_modules'
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  }
}];
