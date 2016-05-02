'use strict';

const prefs = require(__dirname + '/prefs');

const name = 'unicorn';

exports.getUserStatus = function(){
  return name + ' status: ' + prefs.getStatus();
};

exports.toggleUserStatus = function(){
  prefs.toggleStatus();
};
