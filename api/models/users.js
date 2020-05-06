const Sequelize = require('sequelize');
const db = require('../config/database');

const Users = db.define('users', {
	id: {
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
		type: Sequelize.INTEGER
	},
	username: {
		type: Sequelize.STRING
	},
	token: {
		type: Sequelize.STRING
	}
})

module.exports = Users;