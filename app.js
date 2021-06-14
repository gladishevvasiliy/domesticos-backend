var express = require('express')
var mongoose = require('mongoose')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()

app.use(cors())
var jsonParser = bodyParser.json()

var kruk = require('./routes/kruk.route') // Imports routes for the kruks
var composition = require('./routes/composition.route') // Imports routes for the compositions

var theport = process.env.PORT || 5000

var mongoose = require('mongoose')
var ___dev_db_url = 'mongodb://domestikos:yaplakal1936@ds137404.mlab.com:37404/kruk'
var dev_db_url =
  'mongodb+srv://domestikos:yaplakal1936@kruk.dsm9g.mongodb.net/kruk?retryWrites=true&w=majority'
var mongoDB = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongoDB)
mongoose.Promise = global.Promise
var db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.use('/kruk', jsonParser, kruk)
app.use('/composition', jsonParser, composition)

app.listen(theport, function () {
  console.log('Backend is working on port', theport)
})
