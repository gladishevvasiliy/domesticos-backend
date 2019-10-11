var express = require('express');
var mongoose = require ("mongoose");
var bodyParser = require("body-parser");
var app = express();
var path = require('path');

var kruk = require("./routes/kruk.route"); // Imports routes for the products
var composition = require("./routes/composition.route"); // Imports routes for the products


var uristring = process.env.PROD_MONGODB 

var theport = process.env.PORT || 5000;

var mongoose = require("mongoose");
var dev_db_url =
  "mongodb://domestikos:yaplakal1936@ds137404.mlab.com:37404/kruk";
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// app.use("/kruk", kruk);

app.listen(theport, function () {
    console.log('Node app is working!', theport);
});