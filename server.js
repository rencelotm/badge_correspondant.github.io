const express = require('express');
const consolidate = require('consolidate');
const fs = require('fs');
const http = require('http');


let app = express();
app.engine("html", consolidate.hogan);
app.set('views', 'pages');

app.get('/', (req, res) => {
    res.render('Principale.html');
});


app.use(express.static('pages'));
app.listen(1337);
