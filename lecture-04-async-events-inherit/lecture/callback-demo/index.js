'use strict';

// async callback demo
function asyncMyCallback(lulwat){
  setTimeout(lulwat, 3000);
}

asyncMyCallback(function(){
  console.log('that took a while');
});



// syncronus callback demo
function callMyCallback(unicorn){
  unicorn('slug');
}

callmycallback(function(name){
  console.log('hello', name);
});
