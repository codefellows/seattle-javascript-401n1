'use strict';

const Transform = require('stream').Transform;

// create a tranfrom stream that will uppercase all text comming from 
// its input to its output
const upperTransform = new Transform({
  transform: function(chunk, _, next){
    this.push(chunk.toString().toUpperCase());
    next();
  }
});

process.stdin.pipe(upperTransform).pipe(process.stdout);
