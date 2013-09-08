var hyperspace = require('hyperspace');
var fs = require('fs');
var html = fs.readFileSync(__dirname + '/010_article.html');

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
hs.pipe(process.stdout);

hs.write({
    href: '/glue',
    title: 'All programming is just glue code!',
    body: 'True facts.',
    author: 'substack'
});

// 060.js
