var express = require('express');
var app = express();
const request = require('request');
var path = require('path');
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

/**
 * API
 */
app.get('/api/*', function (req, res, next) {
    request('https://jsonplaceholder.typicode.com/todos/1', null, (err, response) => {
        res.send(response.body);
    });
});
// app.post('/api/', function (req, res, next) {
//     var data = req.body;
//     // query a database and save data
//     res.status(200).send(data);
// });

/**
 * STATIC FILES
 */
app.use('/', express.static('dist/sample'));
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/sample'));
});

module.exports = app;
