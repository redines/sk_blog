const db = require('../config/database');
const Posts = require('../models/posts');
const Users = require('../models/users');

Users.hasMany(Posts);
Posts.belongsTo(Users);

db.sync({
    force: true
});