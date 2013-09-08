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
hs.appendTo('#articles');

hs.on('element', function (elem) {
    elem.addEventListener('click', function () {
        elem.classList.toggle('dark');
    });
});

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

// browserify -t brfs 150_browser.js -o static/bundle.js
// xdg-open static/index.html
