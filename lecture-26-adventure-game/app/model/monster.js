'use strict';


const randomArrayItem = require('../lib/random-array-item')
const monsterNames = ['boogy bug', 'wack smackl', 'qroaker blob', 'duck nark', 'shhmim-eye colon', 'asssalt rain']

module.exports = function Monster(){
  this.name = randomArrayItem(monsterNames);
  this.dammage = Math.floor(Math.random() * 20) + 1;
  this.hp = Math.floor(Math.random() * 20) + 11;
}
