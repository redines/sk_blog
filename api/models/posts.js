const Sequelize = require('sequelize');
const db = require('../config/database');

    const Posts = db.define('posts', {
        title: {
            type: Sequelize.STRING
        },
        post: {
            type: Sequelize.BLOB
        },
        username: {
            type: Sequelize.STRING,
        }
    })

module.exports = Posts;