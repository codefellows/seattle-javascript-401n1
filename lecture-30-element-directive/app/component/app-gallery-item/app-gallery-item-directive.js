'use strict'

const angular = require('angular')

angular.module('demoApp')
.directive('appGalleryItem', function(){
  return {
    restrict: 'E',
    replace: true,
    controller: 'AppGalleryItemController',
    controllerAs: 'appGalleryItemCtrl',
    bindToController: true,
    template: require('./app-gallery-item.html'),
    scope: {
      image: '=',
    }
  }
})
