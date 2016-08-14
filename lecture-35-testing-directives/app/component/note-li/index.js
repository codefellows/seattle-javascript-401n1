'use strict';

require('./note-li.scss');
const angular = require('angular')
angular.module('demoApp').directive('appNoteLi', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./note-li.html'),
    controller: ['$log', 'noteService', NoteLiController],
    controllerAs: 'noteLiCtrl',
    bindToController: true,
    scope: {
      note: '=',
      deleteNote: '&',
    }
  }
});

function NoteLiController(){
  // edit note goes here
}
