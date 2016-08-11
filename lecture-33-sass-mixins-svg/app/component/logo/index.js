'use strict';

require('./logo.scss');

const angular = require('angular');
angular.module('demoApp').directive('appLogo', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./logo.html'),
  };
});
