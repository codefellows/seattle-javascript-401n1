'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');

// angular modules
angular.module('demoApp', []);

// angular services
require('./service/list-service');

// angular components
require('./component/main');
require('./component/create-list-form');
