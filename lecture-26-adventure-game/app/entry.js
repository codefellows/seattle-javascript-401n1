'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
// app modules
// angular module extensions
angular.module('demoApp', []);
require('./contoller/game-controller.js');

