const express = require('express');
const app = express();

app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.get('/', (req, res) => res.send('Hello World!'))

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server started on port ${port}`));