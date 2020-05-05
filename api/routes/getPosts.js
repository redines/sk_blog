const router = require('express').Router();
const db = require('../config/database');
const Posts = require('../models/posts');

router.get('/', (req, res) =>
    Posts.findAll()
    .then(posts => {
        res.json(posts)
        console.log(posts)
    })
    .catch(err => console.log(err)));

    /*db.sync();
    Posts.create({
        title: "test",
        post : "test",
        username: "test"
  });*/
  
module.exports = router;