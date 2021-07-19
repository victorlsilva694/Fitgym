const Sequelize = require('sequelize');

const Connection = new Sequelize('Fitgym', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = Connection;