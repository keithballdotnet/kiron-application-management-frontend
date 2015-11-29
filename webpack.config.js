var path = require('path');
var webpack = require('webpack');

var HTMLWebpackPlugin = require('html-webpack-plugin');
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'sourcemap',

  entry: {
    index: './src/index.js'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle-[hash].js'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.css', '.scss']
  },

  module: {
    loaders: [
      {
        test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel'
      }, {
        test: /\.json?$/, loader: 'json-loader'
      }, {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract('css?sourceMap')
      }, {
        test: /\.pdf$|pdf\.worker\.js$/,
        loader: "url-loader?limit=10000"
      }
    ],
  },

  plugins: [
    // new webpack.NoErrorsPlugin(),
    new ExtractTextWebpackPlugin('style-[hash].css', {
        allChunks: true,
    }),
    new HTMLWebpackPlugin({
      template: './src/index.html',
      inject: 'body' // Inject all scripts into the body
    }),
    new WebpackNotifierPlugin({
      alwaysNotify: true,
      title: 'Kiron | AM'
    }),
  ],
}
