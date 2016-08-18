'use strict';

require('./nav.scss');
const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.component('appNav', {
  template: require('./nav.html'),
})
