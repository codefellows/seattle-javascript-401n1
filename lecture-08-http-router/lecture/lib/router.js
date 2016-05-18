'use strict';

const parseUrl = require('url').parse;

const Router = module.exports = function(){
  this.routes = {
    GET: {},
    PUT: {},
    POST: {},
    DELETE: {}
  };
};

Router.prototype.get = function(endpoint, callback){
  this.routes.GET[endpoint] = callback;
  return this;
};

Router.prototype.put = function(endpoint, callback){
  this.routes.PUT[endpoint] = callback;
  return this;
};

Router.prototype.post = function(endpoint, callback){
  this.routes.POST[endpoint] = callback;
  return this;
};

Router.prototype.delete = function(endpoint, callback){
  this.routes.DELETE[endpoint] = callback;
  return this;
};

Router.prototype.route = function(){
  const routes = this.routes;
  return function(req, res){
    req.url = parseUrl(req.url);
    if(typeof routes[req.method][req.url.pathname] === 'function'){
      return routes[req.method][req.url.pathname](req, res);
    }

    res.writeHead(404, {
      'Content-Type': 'application/json'
    });

    res.write('not found');
    res.end();
  }
};
