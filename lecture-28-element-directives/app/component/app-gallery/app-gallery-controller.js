'use strict'

const angular = require('angular')

angular.module('demoApp').controller('AppGalleryController', [AppGalleryController])

function AppGalleryController(){
  this.galleryItem = {
    title: '',
    desc: '',
    imgSrc: '',
  }

  this.addGalleryItem = function(){
    this.images.push(angular.copy(this.galleryItem))
    this.galleryItem = {title: '', desc: '', imgSrc: ''}
  }

  this.images = [
    {
      title: 'Flower One',
      desc: 'this is dat typa flow pow dat gunna make dem brds happi yo',
      imgSrc: require('../../asset/img/flower/flower-0.jpg')
    },
    {
      title: 'Flower Two',
      desc: 'i dont think i cant maby not do somthin like that if i would',
      imgSrc: require('../../asset/img/flower/flower-1.jpg')
    },
    {
      title: 'Flower Three',
      desc: '#yolo #swag #hax',
      imgSrc: require('../../asset/img/flower/flower-2.jpg')
    },
  ]
}
