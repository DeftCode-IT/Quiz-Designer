const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  entry: './src/repository.js',
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
      { test: /\.css$/, include: /node_modules/, loaders: ['style-loader', 'css-loader']},
      { test: /\.scss$/, include: /node_modules/, loaders: ['style-loader', 'css-loader', 'sass-loader'], include: [path.resolve(__dirname, './src/styles')] },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
};