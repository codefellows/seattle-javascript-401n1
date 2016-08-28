'use strict';

require('./_signup.scss');

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.controller('SignupController', ['$log', '$location','authService', SignupController]);

function SignupController($log, $location, authService){
  $log.debug('init signupCtrl');

  this.signup = function(){
    $log.debug('signupCtrl.signup');
    authService.signup(this.user)
    .then( token => {
      $log.info('token', token);
    })
    .catch( err => {
      $log.error(err);
    });
  };
}
