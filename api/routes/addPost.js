const router = require('express').Router();
const db = require('../config/database');
const Posts = require('../models/posts');

    router.post('/', (req, res) => {
        let { title,post,username } = req.body;
          Posts.create({
            title,
            post,
            username
          })
          .then(post => res.redirect('/'))
          .catch(err => console.log(err))
    })
  
module.exports = router;