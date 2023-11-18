const express = require("express");
const fs = require('fs');

const app = express();

const hostname = "127.0.0.1";
const port = 3004;

let notes = [
    {
        id: 1,
        content: 'backend using node.js',
        important: true
    },
    {
        id: 2,
        content: 'node.js is open source',
        important: false,
    },
    {
        id: 3,
        content: 'simple web server using node.js',
        important: true
    },
    {
        id: 4,
        content: 'express makes backend restful painless',
        important: true
    },
    {
        id: 5,
        content: 'backend restful using nodejs will grow complex',
        important: false
    }
];

app.get('/', (request, response) => {
    const content = new Date().toISOString();
    fs.writeFile('date-time.txt', content, err => {
        if (err) console.log(err);
        console.log('written successfully');
    });
    response.send(content);
});

app.get('/notes', (request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'application/json');
    response.end(JSON.stringify(notes));
});

app.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`);
});
