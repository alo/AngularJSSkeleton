var express = require('express');
var app = express();
var path = require('path');


app.use(express.static(__dirname + '/src/'));
app.listen(8080);
console.log('app in http://localhost:8080/');