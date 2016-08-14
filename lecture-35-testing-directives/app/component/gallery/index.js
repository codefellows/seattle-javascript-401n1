'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.directive('appGallery', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./gallery.html'),
    transclude:true,
    scope: {},
  }
});
