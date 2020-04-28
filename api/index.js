const express = require('express');
const mariadb = require('mariadb');

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


const pool = mariadb.createPool({
     host: 'localhost', 
     user:'root', 
     password: '',
     database: 'skblog',
     connectionLimit: 5
});

pool.getConnection()
.then(conn => {
    conn.query("SELECT * from posts")
      .then((rows) => {
        console.log(rows);

      })
      .catch(err => {
        //handle error
        console.log(err); 
        conn.end();
      })
      
  }).catch(err => {
    //not connected
  });

app.get('/', (req, res) => res.send('Hello World!'))


app.listen(port, () => console.log(`Server started on port ${port}`));