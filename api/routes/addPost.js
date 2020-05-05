const router = require('express').Router();
const db = require('../config/database');
const Posts = require('../models/posts');

router.post('/', (req, res) => {

  Posts.create({
    title: req.body.title,
    post: req.body,
    username: req.body.username
  })
    .then(function (posts) {
      if (posts) {
        res.send(posts);
      } else {
        res.status(400).send('Error in insert new record');
      }
    })
    .catch(err => console.log(err))
})

module.exports = router;