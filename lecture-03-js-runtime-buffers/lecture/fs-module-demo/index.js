'use strict';

const fs = require('fs');

fs.readFile('./data/first.txt', function(err, data){
  if (err) return console.error(err);
  console.log(data.toString());
});

fs.readFile('./data/barf.txt', function(err, data){
  if (err) return console.error(err);
  console.log(data);
});

console.log('first');
