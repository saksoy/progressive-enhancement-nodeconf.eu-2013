var trumpet = require('trumpet');
var fs = require('fs');

var robot = trumpet();
robot.createWriteStream('.name').end('BOLTY');
robot.createWriteStream('.desc').end('unsuspecting usual suspect');

fs.createReadStream('080_robot.html').pipe(robot);
