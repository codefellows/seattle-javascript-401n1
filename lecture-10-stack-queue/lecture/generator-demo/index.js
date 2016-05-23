'use strict';

// generators have a *
function *step(){
  yield 1;
  yield 2;
  yield 3;
  yield 'haha';
  yield 3;
  yield 'lulwat';
  yield 3;
  return 4;
}

function run(genorator){
  var example = genorator();

  var result = example.next();
  while(result.done === false){
    console.log(result);
    result = example.next();
  }
  console.log(result);
}

run(step);
