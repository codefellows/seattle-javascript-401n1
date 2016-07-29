'use strict';

const angular = require('angular');

angular.module('demoApp').controller('AppMainController', [AppMainController])

function AppMainController(){
  this.images = [];

  this.addImage = function(image){
    if (typeof image === 'object' && image.title && image.imageUrl){
      this.images.push(image);
    }
  }

}

//function AppMainController(){
  //this.dispayModalImage = false;

  //this.showModalImage = function(imageUrl){
    //this.displayImageUrl = imageUrl || 'http://www.clker.com/cliparts/T/R/0/1/N/m/side-hippo-hi.png';
    //this.dispayModalImage = true;
  //}

  //this.hideModalImage = function(){
    //console.log('hello');
    //this.dispayModalImage = false;
  //}
//}

