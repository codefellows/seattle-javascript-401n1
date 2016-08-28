'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('HomeController', ['$log', '$location', 'authService', HomeController]);

function HomeController($log, $location, authService){
  $log.debug('init homeCtrl');

  this.getToken = function(){
    authService.getToken()
    .catch( () => $location.path('/login'));
  };

  this.logout = function(){
    authService.logout()
    .then( () => $location.path('/login'));
  };
}
