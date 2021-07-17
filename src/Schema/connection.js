const Sequelize = require('sequelize');

const Connection = new Sequelize('fitgym', 'root', 'Victor123@#!', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Connection;