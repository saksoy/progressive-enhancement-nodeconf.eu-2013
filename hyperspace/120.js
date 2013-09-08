var hyperspace = require('hyperspace');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/010_article.html');

var trumpet = require('trumpet');
var tr = trumpet();
fs.createReadStream('080_index.html').pipe(tr).pipe(process.stdout);

var hs = hyperspace(html, function (row) {
    return {
        '.title a': {
            href: row.href,
            _text: row.title
        },
        '.body': { _html: row.body },
        '.author': row.author
    };
});
hs.pipe(tr.createWriteStream('#articles'));

hs.write({
    href: '/glue',
    title: 'All programming is just glue code!',
    body: 'True facts.',
    author: 'substack'
});

hs.end({
    href: '/hyper',
    title: 'hypertext is the future',
    body: 'Imagine documents that link to other documents.',
    author: 'substack'
});

// 120.js
