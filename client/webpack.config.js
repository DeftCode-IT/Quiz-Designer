const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const ExtractSassPluginConfig = new ExtractTextPlugin('dist/styles/main.css', {
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
      { test: /\.js$/, loader: 'eslint-loader', exclude: /node_modules/, enforce: 'pre', options: {
        formatter: require('eslint-friendly-formatter')
      }},
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, include: /node_modules/, use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader' }],
        })
      },
      { test: /\.scss$/, loaders: ExtractTextPlugin.extract('css-loader!sass-loader') },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    ExtractSassPluginConfig
  ]
};