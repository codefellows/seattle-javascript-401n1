'use strict';

require('./list.scss');
const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.directive('appList', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./list.html'),
    controller: 'ListController',
    controllerAs: 'listCtrl',
    bindToController: true,
    scope: {
      list: '=',
    },
  }
});

demoApp.controller('ListController', ['$q', '$log', 'listService', 'noteService', ListController]);

function ListController($q, $log, listService, noteService){
  this.deleteList = function(){
    $log.debug('listCtrl.deleteList');
    listService.deleteList(this.list._id)
    .catch(() => {
      alert('you failed to deleteme yanoob');
    });
  };

  this.createNote = function(data){
    $log.debug('listCtrl.createNote');
    return $q((resolve, reject) => {
      data.listId = this.list._id;

      noteService.createNote(data)
      .then( note => {
        this.list.notes.push(note);
        resolve(note);
      })
      .catch( (err) => {
        alert('dat soe daint werk awt awl');
        reject(err);
      });
    });
  }

  this.deleteNote = function(noteId){
    $log.debug('listCtrl.deleteNote');
    noteService.deleteNote(noteId)
    .then( () => {
      this.list.notes.forEach( (note, index) => {
        if (note._id === noteId) this.list.notes.splice(index, 1);
      });
    })
    .catch(() => {
      alert('DERRRRRNN');
    })
  };

}
