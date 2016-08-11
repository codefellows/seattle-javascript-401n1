'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');

// angular modules
angular.module('demoApp', [])
.config(['$httpProvider', '$logProvider', function($httpProvider, $logProvider){
  $logProvider.debugEnabled(__DEBUG__);

  $httpProvider.defaults.headers.post= {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  };
}])

// angular services
require('./service/list-service');
require('./service/note-service');

// angular components
require('./component/main');
require('./component/create-list-form');
require('./component/list');
require('./component/create-note-form');
require('./component/note-li');
