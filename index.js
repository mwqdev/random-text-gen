const express = require('express');
// const http = require('http');
// const path = require('path');
// const url = require('url');
const loremIpsum = require('lorem-ipsum');

const app = express();

app.get('/', function(req, res) {
    res.send('<a href="/lorem">Lorem Generator</a>');
});

app.get('/lorem/', function (req, res) {

    res.write('<p><em>Add desired paragraph count to URL i.e. "/lorem/3" (default is 3)</em></p>');
    res.write(loremIpsum({
        count: 3,
        units: 'paragraphs',
        format: 'html'
    }));
    res.end();
});

app.get('/lorem/:count', function (req, res) {

    var count = req.params.count;

    res.send(loremIpsum({
        count: count,
        units: 'paragraphs',
        format: 'html'
    }));
});

app.listen(3000);

// Create Express app that responds on '/lorem' and returns 3 paragraphs of text

// Hard mode: Add support for /lorem/[number-of-paragraphs] to control the number of paragraphs returned