
module.exports = function(demoapp){
  demoapp.controller('SettingsController', ['$location', '$log', SettingsController]);
};

function SettingsController($location, $log){
  $log.log('location.hash', $location.hash()) 
  $log.log('location.search', $location.search()) 
  $log.log('location.url', $location.url()) 
  $log.log('location.absUrl', $location.absUrl()) 
  $log.log('location.port', $location.port()) 
  $log.log('location.host', $location.host()) 

  this.configColor = function(){
    $log.log('this.color', this.color);
    $location.url(`/?color=${this.color}`)
    //$location.path(`/?color=${this.color}`);
  };
}
