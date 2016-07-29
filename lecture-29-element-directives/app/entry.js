'use strict'


// webpack assets
require('!!file?name=[name].[ext]!./html/index.html')
require('./scss/base.scss')
// npm modules 
const angular = require('angular')
// angular modules
// create angular module
angular.module('demoApp', [])
// add angualr code to your angular module
require('./component/app-main')
require('./component/app-modal-image')
