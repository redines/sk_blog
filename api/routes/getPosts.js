const router = require('express').Router();
const db = require('../config/database');
const Posts = require('../models/posts');
const dbsync = require('../config/db_sync')

router.get('/', (req, res) =>
    Posts.findAll()
    .then(posts => {
        res.json(posts)
        console.log(posts)
    })
    .catch(err => console.log(err)));

module.exports = router;