'use strict';

const angular = require('angular')

angular.module('demoApp')
.controller('AppHelloController', [AppHelloController])

function AppHelloController(){
  this.name = 'content sould show this string';
}

