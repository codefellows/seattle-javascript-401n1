'use strict';

// npm modules
const angular = require('angular');
// app modules
const Monster = require('../model/monster.js');

// module logic
angular.module('demoApp').controller('GameController', [GameController]);

function GameController(){
  this.history = ['WELCOME TO THE SALTMINE!'];
  this.moveCount = 0;
  this.map = require('../model/map');

  this.player = {
    name: 'slugtron',
    hp: 100,
    dammage: 10,
    xp: 0,
    location: 'roomA'
  };

  this.gameForm = {
    direction: 'north'
  };

  this.room = {
    name: this.player.location
  };
}

GameController.prototype.moveDirection = function(direction){
  this.moveCount++;
  var oldLocation = this.player.location;
  var newLocation = this.map[oldLocation][direction];
  if (newLocation && newLocation !== 'wall'){
    // move into that location
    this.updateLocation(newLocation)
    return
  }

  // stay were you are
  this.holdLocation();
};

GameController.prototype.updateLocation = function(location){
  this.player.location = location;
  this.room.name = location;
  if (Math.random() < this.map[location].monsterChance){
    this.room.monster = new Monster();
    this.player.hp -= this.room.monster.dammage;
    this.logTurn(`is now in ${this.player.location}. a ${this.room.monster.name} attacked. you lost ${this.room.monster.dammage}`)
    return;
  }

  this.room.monster = null;
  this.logTurn(`is now in ${this.player.location}, the room is empty`);
};

GameController.prototype.holdLocation = function(){
  this.logTurn(`hit a wall.`);
};

GameController.prototype.logTurn = function(message){
  this.history.push(`TURN ${this.moveCount}: ${this.player.name} ${message}`);
};

GameController.prototype.attackMonster = function(){
  this.moveCount++;
  if (this.room.monster){
    var message = ''
    if (Math.random() > 0.5 ) {
      this.player.hp -= this.room.monster.dammage;
      message += `the monster hurt you!, you lost ${this.room.monster.dammage}.`
    }
    this.room.monster.hp -= this.player.dammage;
    if (this.room.monster.hp < 0){
      this.player.xp += 10000;
      this.logTurn(`you killed the ${this.room.monster.name} and gained 10000 xp`);
      this.room.monster = null;
      return
    }
    this.logTurn(message + ' you attacked the monster')
  }
};




