'use strict';

const angular = require('angular');

angular.module('demoApp').controller('PlayerController', ['$scope', function($scope){
  $scope.player = {
    name: 'nena',
    power: 'whacha',
    class: 'mom'
  };

  $scope.getJSON = function(){
    return JSON.stringify($scope.player);
  };

  $scope.updateClass = function(playerClass){
    $scope.player.class = playerClass;
  }
}]);
