const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const items = require('./routes/api/items');

//init express
const app = express();

//body-parser middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to mongo
mongoose.connect(db)
  .then(() => console.log('MongoDB Connected ...'))
  .catch(err => console.log(err));

//use Routes
app.use('/api/items',items);

//run server; may deploy to HEROKU || or port 5000
const port = process.env.PORT || 5000;

app.listen(port, ()=> console.log(`Server started on ${port}`));
