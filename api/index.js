const express = require('express');
const Sequelize = require('sequelize');
//routes
const addPost = require('./routes/addPost');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

const db = new Sequelize('mariadb://root:@localhost/skblog',{
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.get('/', (req, res) => res.send('Hello World!'))
//app.use('/api/addpost', addPost);


app.listen(port, () => console.log(`Server started on port ${port}`));