const Sequelize = require('sequelize');
const db = require('../config/db');

const User = db.define('users', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, allowNull: false, primaryKey: true },
    nome: { type: Sequelize.STRING, allowNull: false },
    email: { type: Sequelize.STRING, allowNull: false }
});

// User.sync();
// User.sync({ alter: true }) 
module.exports = User;

/***
    User.sync() - This creates the table if it doesn't exist (and does nothing if it already exists)
    User.sync({ force: true }) - This creates the table, dropping it first if it already existed
    User.sync({ alter: true }) - This checks what is the current state of the table in the database (which columns it has, what are

    https://sequelize.org/docs/v6/core-concepts/model-basics/
 */