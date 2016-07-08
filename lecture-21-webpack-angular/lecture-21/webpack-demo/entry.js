'use strict';

// webpack assets (html|images|css/scss|*)
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const $ = require('jquery');
const cowsay = require('cowsay-browser');

// app modules
// app logic

$().ready(function(){
  $('.cowsay').html('<pre>' + cowsay.say({text: 'wat wat lulwat'}) + '</pre>');
});
