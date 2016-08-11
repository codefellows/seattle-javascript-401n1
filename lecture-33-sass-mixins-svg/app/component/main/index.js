'use strict';
require('./main.scss');

const angular = require('angular');

angular.module('demoApp').directive('appMain', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./main.html'),
    controller: [MainController],
    controllerAs: 'mainCtrl',
    bindToController: true,
    scope: {},
  }
});

function MainController(){
  this.example = 'hello world';
};
