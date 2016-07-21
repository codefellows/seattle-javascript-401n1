'use strict'

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html')
require('./sass/base.scss')
// npm moudles
const angular = require('angular')
// app modules
// create angular module
angular.module('demoApp', [])
// angular module extensions
require('./component/app-main')
require('./component/app-hello')
require('./component/app-gallery')
require('./component/app-gallery-item')
require('./component/app-edit-gallery-item-form')
//require('./controller/example-parrent.js')
