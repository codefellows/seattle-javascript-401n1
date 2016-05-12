'use strict';

// no-op version one with pipe
// process.stdin is areadable stream
//process.stdin.pipe(process.stdout);

// no-op version two with events
// readable streams have a data event for every time data 
// is ready to read
process.stdin.on('data', function(chunk){
  process.stdout.write(chunk.toString());
});
