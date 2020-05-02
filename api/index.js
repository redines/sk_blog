const express = require('express');
const bodyParser = require('body-parser');
const db = require('./config/database');
//routes
const getPost = require('./routes/getPosts');
const addPost = require('./routes/addPost')

const app = express();
const port = process.env.PORT || 3000;

// parse application/json
app.use(bodyParser.json())

/*
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});*/

//testing connection to db
db.authenticate()
  .then(() => {console.log('Connection has been established successfully.');})
  .catch(err => {console.error('Unable to connect to the database:', err);});

//defining routes
app.get('/', (req, res) => res.send('Hello World!'))
app.use('/api/addpost', addPost);
app.use('/api/getpost', getPost);


app.listen(port, () => console.log(`Server started on port ${port}`));