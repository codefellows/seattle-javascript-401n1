'use strict';

const angular = require('angular');

angular.module('demoApp').controller('AppMainController', [AppMainController])

function AppMainController(){
  this.dispayModalImage = false

  this.showModalImage = function(){
    this.dispayModalImage = true
  }

  this.hideModalImage = function(){
    console.log('lulwat')
    this.dispayModalImage = false
  }
}

