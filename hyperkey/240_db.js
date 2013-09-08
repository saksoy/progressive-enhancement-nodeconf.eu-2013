var sub = require('level-sublevel');
var level = require('level');
var db = sub(level('/tmp/test.db', { valueEncoding: 'json' }));
module.exports = db;

var users = [ 'substack', 'trex', 'robot', 'utahraptor' ];
var words = [ 'hello', 'oh', 'rawr', 'stomping', 'dinosaur', 'beep', 'boop' ];

setInterval(function () {
    var who = users[Math.floor(Math.random() * users.length)];
    var body = [];
    for (var i = Math.random() * 5 + 2; i > 0; i--) {
        var word = words[Math.floor(Math.random() * words.length)];
        body.push(word);
    }
    var key = 'message-' + who + '-' + Math.random(Math.random() * 3);
    db.put(key, { who: 'substack', time: Date.now(), body: body.join(' ') });
}, 1000);
