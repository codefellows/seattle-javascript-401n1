'use strict';

const angular = require('angular')

angular.module('demoApp')
.directive('appGallery', function(){
  return {
    restrict: 'E',
    replace: true,
    scope: {},
    controller: 'AppGalleryController',
    controllerAs: 'appGalleryCtrl',
    bindToController: true,
    template: require('./app-gallery.html')
  }
})
