'use strict';

const ExtractPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  plugins: [
    new ExtractPlugin('bundle.css')
  ],
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractPlugin.extract('style', 'css!sass!')
      },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      }

    ]
  }
};
