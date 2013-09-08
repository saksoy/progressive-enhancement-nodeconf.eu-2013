var sub = require('level-sublevel');
var level = require('level');
var db = sub(level('/tmp/test.db', { valueEncoding: 'json' }));
module.exports = db;

var users = [ 'substack', 'trex', 'robot', 'utahraptor' ];
var words = [ 'hello', 'oh', 'rawr', 'stomping', 'dinosaur', 'beep', 'boop' ];

setInterval(function () {
    // ...
}, 1000);
