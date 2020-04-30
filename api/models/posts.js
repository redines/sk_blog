const Sequelize = require('sequelize');
const db = require('../config/database');

    const Posts = db.define('posts', {
        date: {
            type: Sequelize.DATE,
        },
        titel: {
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