// if you want to export multiple things
// add them as properies to the exports object

exports.hello = function(){
  console.log('hello!');
};

exports.goodbye = function(){
  console.log('byebye!');
};

// loging 'welcome!' will run if this file is requred 
// becase require will invoke this file's IIFE
console.log('welcome!');
