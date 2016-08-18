'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');
demoApp.controller('FourOhFourController', ['$location', '$timeout', FourOhFourController]);

function FourOhFourController($location, $timeout){
  $timeout(() => {
    $location.path('/');
  }, 3000);
}
