var level = require('level');
var sub = require('level-sublevel');
var db = sub(level('/tmp/assoc.db', { valueEncoding: 'json' }));

var rows = require('./115_data.json');

var spaces = rows.map(function (row) {
    return row.value.type === 'hackerspace' && row.key;
}).filter(Boolean);

var tools = rows.map(function (row) {
    return row.value.type === 'tool' && row.key;
}).filter(Boolean);

db.batch(rows.map(function (row) {
    return { type: 'put', key: row.key, value: row.value };
}));

setInterval(function () {
    // create a new hacker
}, 500);

setInterval(function () {
    // create a new hackerspace
}, 10 * 1000);

setInterval(function () {
    // create new tool usage
}, 500);

var assoc = require('level-assoc')(db);
assoc.add('hackerspace')
    .hasMany('hackers', [ 'type', 'hacker' ])
    .hasMany('tools', [ 'type', 'tool' ])
;
assoc.add('hacker')
    .hasMany('projects', [ 'type', 'project' ])
    .hasMany('usage', [ 'type', 'usage' ])
;
assoc.add('tool')
    .hasMany('usage', [ 'type', 'usage' ])
;
module.exports = assoc;
