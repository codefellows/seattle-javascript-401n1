'use strict';

require('./talking-head.scss');
require('!!file?name=gif/talking-mouth.gif!../../asset/gif/talking-mouth.gif');
const angular = require('angular');

angular.module('demoApp').directive('appTalkingHead', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./talking-head.html'),
  }
});
