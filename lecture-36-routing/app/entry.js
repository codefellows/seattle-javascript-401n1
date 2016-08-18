'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
const demoApp = angular.module('demoApp', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
    resolve: {
      'homeCtrl.lists': ['$http', function($http){
        return $http.get('http://localhost:3000/api/list').then(
          function success(resp) { return resp.data;},
          function failure(resp) {return false;}
        );
      }],
      boogers: ['$http', function($http){
        return 3;
      }]
    }
  })
  .when('/home',{
    redirectTo: '/',
  })
  .when('/home/:colorFg/:colorBg', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl',
  })
  .when('/settings', {
    template: require('./view/settings/settings.html'),
    controller: 'SettingsController',
    controllerAs: 'settingsCtrl',
  })
  .otherwise({
    template: require('./view/404/404.html'),
    controller: 'FourOhFourController',
    //controllerAs: 'fourOhFourCtrl',
  })
}]);

// angular services

// angular components
require('./view/404/404-controller.js');
require('./view/settings/settings-controller.js')(demoApp);
require('./view/home/home-controller.js');
