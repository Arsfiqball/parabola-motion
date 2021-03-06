#!/usr/bin/env node
var program = require('commander');

global.GRAVITY = 10;
var vx0 = 0, vy0 = 0;

function printPositionAtTime(time) {
  var x = vx0 * time;
  var y = vy0 * time - (1/2) * GRAVITY * Math.pow(time, 2);

  console.log("X position: " + x + " meters");
  console.log("Y position: " + y + " meters");
  return true;
}

program
 .arguments('<time>')
 .option(
    '-x, --velocity-x <value>',
    'Initial X axis velocity (meters) default 0',
    function (value) {
      vx0 = value;
    })
 .option(
    '-y, --velocity-y <value>',
    'Initial Y axis velocity (meters) default 0',
    function (value) {
      vy0 = value;
    })
 .action(printPositionAtTime)
 .parse(process.argv);
