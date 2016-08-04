'use strict';

// npm modules
const webpack = require('webpack');
const CleanPlugin = require('clean-webpack-plugin');

const autoprefixer = require('autoprefixer');
const ExtractText = require('extract-text-webpack-plugin');

// module constants
const production = process.env.NODE_ENV === 'production';
const apiURL = process.env.API_URL || 'http://localhost:3000';


// webpack config
var plugins = [
  new ExtractText('bundle.css'),
  new webpack.DefinePlugin({
    __API_URL__: JSON.stringify(apiURL),
  }),
];

if (production){
  plugins = plugins.concat([
    new webpack.optimize.UglifyJsPlugin({
      mangle: true,
      compress: {
        warnings: false,
      },
    }),
    new CleanPlugin(),
  ]);
}

module.exports = {
  entry: `${__dirname}/app/entry.js`,
  debug: !production,
  devtool: production ? false : 'eval',
  plugins: plugins,
  output: {
    path: 'build',
    filename: 'bundle.js',
  },
  sassLoader: {
    includePaths: [`${__dirname}/app/scss/lib`],
  },
  postcss: function(){
    return [autoprefixer];
  },
  module:{
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractText.extract('style', 'css!postcss!sass!'),
      },
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
        test: /\.(jpg|gif|png)$/,
        loader: 'file?name=img/[hash].[ext]',
      },
      {
        test: /\.svg.*/,
        loader: 'url?limit=10000&mimetype=image/svg+xml&name=fonts/[name].[ext]',
      },
      {
        test: /\.woff.*/,
        loader: 'file?name=fonts/[name].[ext]',
      },
      { 
        test: /\.[ot]tf.*/,
        loader: 'url?limit=10000&mimetype=application/octet-stream&name=fonts/[name].[ext]' 
      },
      {
        test: /\.eot.*/, 
        loader: 'url?limit=10000&mimetype=application/vnd.ms-fontobject&name=fonts/[name].[ext]' 
      }
    ],
  },
};
