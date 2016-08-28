'use strict';

require('./_signin.scss');

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('SigninController', ['$log', '$location','authService', SigninController]);

function SigninController($log, $location, authService){
  $log.debug('init signinCtrl');

  this.getToken = function(){
    $log.debug('signinCtrl.getToken');
    authService.getToken()
    .then( () => $location.path('/home'));
  };

  this.signin = function(){
    $log.debug('signinCtrl.signin');
    authService.signin(this.user)
    .then( token => {
      $log.info('token', token);
      $location.path('/home');
    })
    .catch( err => {
      $log.error(err);
    });
  };
}
