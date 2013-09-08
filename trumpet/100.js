var trumpet = require('trumpet');
var fs = require('fs');

var robot = trumpet();
fs.createReadStream('080_robot.html').pipe(robot);
