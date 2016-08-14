'use strict';

const angular = require('angular');
const demoApp = angular.module('demoApp');

demoApp.directive('appGalleryItem', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./gallery-item.html'),
    scope: {},
    link: function(scope, elem, attr) {
      scope.title = 'happy wumpus'; 
      scope.url = 'https://s-media-cache-ak0.pinimg.com/736x/17/3f/40/173f404bb1f03c884512960acbeae378.jpg';
      elem.append(angular.element('<h1>!</h1>'));
      elem.append(angular.element('<h1>!</h1>'));
      elem.append(angular.element('<h1>!</h1>'));

      elem.on('click', function(){
        scope.title = 'boooya';
        scope.$apply();
        console.log('booya');
      });

      elem.on('mouseover', function(){
        elem.addClass('focus');
      });

      elem.on('mouseleave', function(){
        elem.removeClass('focus');
      });
    }
  }
});


