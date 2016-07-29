'use strict';

const angular = require('angular')
angular.module('demoApp')
.directive('appShowModalForm', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./app-show-modal-form.html'),
    scope: {
      showImage: '&',
    },
  }
});
