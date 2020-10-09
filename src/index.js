'use strict';

const express = require('express');
const verbTheNoun = require('./verb-the-noun');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
    res.send(verbTheNoun());
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})