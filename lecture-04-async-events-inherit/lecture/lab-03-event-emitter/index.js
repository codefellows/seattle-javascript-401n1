'use strict';

const Cat = require('./lib/cat');
const cat = new Cat();

const filePaths = [
  __dirname + '/data/one.txt',
  __dirname + '/data/two.txt',
  __dirname + '/data/three.txt'
];


//cat.on('lul', function(){
  //console.log('lul');
//});

cat.emit('readSeq', filePaths);

