'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
const ngAnimate = require('angular-animate');

// angular modules
const demoApp = angular.module('demoApp', [ngRoute, ngAnimate])
// module config 
demoApp.config(['$routeProvider', '$logProvider', function($routeProvider, $logProvider){
  $routeProvider
  .when('/', {
    template: require('./view/home/home.html'),
  })
  .when('/home', {
    redirectTo: '/',
  })
  .when('/about', {
    template: require('./view/about/about.html'),
  })
  .otherwise({
    redirectTo: '/',
  })
}]);
// angular services
// angular controllers
// angular directives
// angular components
require('./component/nav');
require('./component/ham');
