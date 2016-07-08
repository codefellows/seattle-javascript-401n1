'use strict';

// require webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
// app modules
const cowsay = require('cowsay-browser');
// module constants

var app = angular.module('cowsayApp', []);
// app logic

app.controller('CowsayController', [ '$scope', function($scope){
  $scope.cowsayText = 'wish i had something better to say';
  $scope.cowsayFile = 'default';
  $scope.say = function(){
    let text = $scope.cowsayText || 'fill thiz out plz, k thnx :p';
    return cowsay.say({text: text, f: $scope.cowsayFile});
  }

  $scope.done = function(){
    let text = $scope.cowsayText || 'fill thiz out plz, k thnx :p';
    $scope.result = cowsay.say({text: text , f: $scope.cowsayFile});
  }

  cowsay.list(function(err, list) {
    if (err) {
      $scope.cowfiles = ['default'];
      return;
    }
    $scope.cowfiles = list;
  });
}]);
