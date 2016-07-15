'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');
// npm modules
const angular = require('angular');
// app modules
// module constants
angular.module('adventureApp', []);
// module logic
require('./controller/adventure-controller');
