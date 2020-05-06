const Sequelize = require('sequelize');
const db = require('../config/database');

    const Posts = db.define('posts', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
          },
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