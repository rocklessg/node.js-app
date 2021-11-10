const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('<h1>hello World!</h1>');
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});