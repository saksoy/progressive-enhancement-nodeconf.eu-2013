var sub = require('level-sublevel');
var level = require('level');
var db = sub(level('/tmp/test.db', { valueEncoding: 'json' }));
module.exports = db;

