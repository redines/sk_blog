const router = require('express').Router();
const db = require('../config/database');
const Posts = require('../models/posts');

router.get('/', (req, res) =>
    Posts.findAll()
    .then(posts => {
        console.log(posts)
    })
    .catch(err => console.log(err)));
  
module.exports = router;