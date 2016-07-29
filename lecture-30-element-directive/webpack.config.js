'use strict'

const autoprefixer = require('autoprefixer')
const ExtractText = require('extract-text-webpack-plugin');

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  output: {
    path: 'build', 
    filename: 'bundle.js',
  },
  plugins: [
    new ExtractText('bundle.css'),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
          presets: ['es2015'],
        },
      },
      {
        test: /\.html$/,
        loader: 'html',
      },
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss!sass!')
      },
      {
        test:/\.(jpg|gif|png)$/,
        loader: 'file?name=img/[hash].[ext]',
      },
      {
        test:/\.(eot|ttf|svg).*/,
        loader: 'file?prefix=font/',
      },
      {
        test: /\.woff.*/,
        loader: 'url?limit=10000',
      },
    ]
  },
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`],
  },
  postcss: function(){
    return [autoprefixer];
  }
};
