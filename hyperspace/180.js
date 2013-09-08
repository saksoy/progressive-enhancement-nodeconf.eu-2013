var fs = require('fs');
var trumpet = require('trumpet');

var tr = trumpet();
fs.createReadStream('080_index.html').pipe(tr).pipe(process.stdout);

var render = require('./170_render.js')();
render.pipe(tr.createWriteStream('#articles'));

render.write({
    href: '/glue',
    title: 'All programming is just glue code!',
    body: 'True facts.',
    author: 'substack'
});

render.end({
    href: '/hyper',
    title: 'hypertext is the future',
    body: 'Imagine documents that link to other documents.',
    author: 'substack'
});
