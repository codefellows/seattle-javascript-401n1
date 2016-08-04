'use strict';
require('./main.scss');

const angular = require('angular');

angular.module('demoApp').directive('appMain', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./main.html'),
    controller: ['listService', MainController],
    controllerAs: 'mainCtrl',
    bindToController: true,
    scope: {},
  }
});

function MainController(listService){
  listService.fetchLists()
    .then((lists) => {
      this.lists = lists;
    })
    .catch((err) => {
      alert('that failed');
    });;
}
