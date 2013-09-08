var render = require('./170_render.js')().appendTo('#articles');

render.on('element', function (elem) {
    elem.addEventListener('click', function () {
        elem.classList.toggle('dark');
    });
});

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

// browserify -t brfs 190_browser.js -o static/bundle.js
// xdg-open static/index.html
