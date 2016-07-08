'use strict';

//webpack.config.js

module.exports = {
  entry: `${__dirname}/entry.js`,
  output: {
    filename: 'bundle.js',
    path: 'build'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: 'style!css!sass!'
      }
    ]
  }
};

