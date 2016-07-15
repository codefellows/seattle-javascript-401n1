'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
// npm modules
const angular = require('angular');
// app modules
// module constants
// module logic
angular.module('demoApp', []);

// requries modules deppend on angular module
require('./controller/player-controller');
require('./controller/monster-controller');
