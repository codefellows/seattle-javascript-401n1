'use strict';

const url = require('url');
const queryString = require('querystring');

module.exports = function(req){
  return new Promise(function(resolve){
    req.url = url.parse(req.url);
    url.query =  queryString.parse(url.query);
    resolve();
  });
};
