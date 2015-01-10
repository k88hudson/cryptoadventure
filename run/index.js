#!/usr/bin/env node
var optimist = require('optimist');
var colors = require('colors');

console.log('#### STARTING CIPHER PROGRAM....\n\n'.green);
require('../program.js');
console.log('\n\n#### DONE.'.green);
