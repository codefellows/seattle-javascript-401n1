'use strict'

const angular = require('angular')
angular.module('demoApp')
.directive('appEditGalleryItemForm', function(){
  return {
    restrict: 'E', 
    replace: true, 
    scope: {
      title: '=',
      desc: '=',
    },
    template: require('./app-edit-gallery-item-from.html'),
  }
})
