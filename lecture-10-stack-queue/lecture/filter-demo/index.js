'use strict';

var search = process.env.SEARCH || '';

var makrew = ['slug', 'turtle', 'bat', 'mole', 'porky pine', 
'pup', 'roudy', 'snake', 'fluffy bear','armadillo', 'racoon'];

var result = makrew.filter(function(value){
  if (value.indexOf(search) === -1) return false;
  return true;
});

console.log(result);
