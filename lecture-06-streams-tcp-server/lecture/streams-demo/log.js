'use strict';

function log(message){
  // process.stdout is  a writeable stream
  // invoke the .write() method to write text to it
  process.stdout.write(message + '\n');
}

log('hello from log');
