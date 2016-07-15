'use strict';

// webpack assets
// npm modules
const angular = require('angular');
// app modules
// module constants
const app = angular.module('adventureApp');
// module logic
app.controller('AdventureController', ['$scope', function($scope){
  $scope.setup = {
    powers: ['fly', 'ice', 'fire', 'loud', 'hack', 'carbonate'],
    classes: [
      {id: 0, name: 'noob'},
      {id: 1, name: 'slug'},
      {id: 2, name: 'bird'},
      {id: 3, name: 'robot'},
    ]
  };

  $scope.player = {

  };

}]);
