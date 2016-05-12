module.exports = function variatic(callback){
  var args = Array.prototype.slice.call(arguments,1);
  console.log('args', args);
  callback.apply(null, args);
};
