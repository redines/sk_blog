const Sequelize = require('sequelize');
const db = require('../config/database');

    const Users = db.define('users', {
        username: {
            type: Sequelize.STRING
        },
        token: {
            type: Sequelize.STRING
        }
    })

module.exports = Users;