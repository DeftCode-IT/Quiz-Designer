const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractTextPluginConfig = new ExtractTextPlugin('dist/styles/main.css', {
  allChunks: true
});

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('release'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ExtractTextPlugin.extract('css-loader!sass-loader') }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractTextPluginConfig
  ]
};