const express = require('express'),
      logger = require('morgan'),
      mongoose = require('mongoose')
      bodyParser = require('body-parser');


const app = express();
//database
mongoose.connect('mongodb://localhost/node-blog');

const db = mongoose.connection;
db.on('error', function(err) {
  console.error(err);
});
db.once('open', function(){
  console.log('connected to the db')
})

//midleware
app.use(logger('dev'));
app.use (bodyParser.json());
//routes
app.use('/posts', require('./routes/posts'));
//server
app.listen(3000, function(){
  console.log("blogger is up and running");
});
