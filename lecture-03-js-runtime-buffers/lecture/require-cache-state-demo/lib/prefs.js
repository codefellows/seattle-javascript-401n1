'use strict';

var userStatus = 'online';

exports.getStatus = function(){
  return userStatus;
};

exports.toggleStatus = function(){
  if (userStatus === 'online'){
    userStatus = 'sleeping';
  } else {
    userStatus = 'online';
  }
};
