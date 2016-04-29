'use strict';

// requre will invoke the IFFI wraped around greeting...
// 'welcome!' will print because of this
const greeting = require(__dirname + '/lib/greeting');

// invoke the functions on the greeting module
greeting.hello();
greeting.goodbye();

