'use strict';

const prefs = require(__dirname + '/prefs');

const name = 'slug';

exports.getUserStatus = function(){
  return name + ' status: ' + prefs.getStatus();
};

exports.toggleUserStatus = function(){
  prefs.toggleStatus();
};
