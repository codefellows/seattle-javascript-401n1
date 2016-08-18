'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('HomeController', ['$route', '$routeParams', '$rootScope', '$location', HomeController]);

function HomeController($route, $routeParams, $rootScope, $location) {
  this.route = $route;
  this.params = $routeParams;

  this.$rootScope = $rootScope;

  $rootScope.$on('$routeChangeStart', function(event, next, current){
    if( $location.path() === '/home') {
      console.log('wat we are home back up the data');
    }
  });

  this.colorBg = $routeParams.colorBg || 'blue';
  this.colorFg = $routeParams.colorFg || 'white';
}

