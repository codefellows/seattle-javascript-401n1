'use strict';

require('./ham.scss');
const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.component('appHam', {
  template: require('./ham.html'),
  controller: 'HamController',
});

demoApp.controller('HamController', ['$log', HamController]);

function HamController($log){
  $log.debug('init HamController');
  this.showNav = true;
}
