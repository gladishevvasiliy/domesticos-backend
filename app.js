var express = require('express');
var mongoose = require ("mongoose");
var app = express();
var path = require('path');

var uristring =
    process.env.MONGOLAB_URI ||
    process.env.MONGOHQ_URL ||
    'mongodb://localhost/HelloMongoose';

var theport = process.env.PORT || 5000;

mongoose.connect(uristring, function (err, res) {
    if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
    console.log ('Succeeded connected to: ' + uristring);
    }
  });

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(theport, function () {
    console.log('Node app is working!');
});