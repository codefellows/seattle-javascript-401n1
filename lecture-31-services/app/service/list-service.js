'use strict';

const angular = require('angular');

angular.module('demoApp').factory('listService', ['$log', '$q', '$http', listService]);

function listService($log, $q, $http){
  let service = {};
  // add functionality to the service
  service.lists = [];

  let url = `${__API_URL__}/api/list`;
  let config = {
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
  };
 
  service.createList = function(data){
    $log.debug('listService.createList');
    return $q((resolve, reject) => {
      $http.post( url , data, config)
      .then( res  => {
        $log.log(`POST ${url}:${res.status} success!`);

        this.lists.push(res.data);
        resolve(res.data);
      })
      .catch( err => {
        $log.error(`POST ${url}:${err.status} failure!`);
        reject(err);
      })
    });
  };

  service.fetchLists = function(){
    $log.debug('listService.fetchLists');
    return $q((resolve, reject) => {
      $http.get(url, config)
        .then( res => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.lists = res.data;
          resolve(this.lists);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  service.updateList = function(data){
    $log.debug('listService.updateList');
    return $q((resolve, reject) => {
      $http.put(`${url}/${data._id}`, data, config)
        .then( lists => {
          $log.log(`GET ${url}:${res.status} success!`);
          this.lists.forEach((list, index) => {
            if (list._id === res.data._id) this.lists[index] = res.data;
          });
          resolve(res.data);
        })
        .catch( err => {
          $log.error(`GET ${url}:${err.status} failure!`);
          reject(err);
        });
    });
  };

  return service;
};
