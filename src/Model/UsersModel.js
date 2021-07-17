const Sequelize  = require("sequelize");
const Connection = require("../Schema/Connection");

const UsersModel = Connection.define('Users', {
    Name:{
        type: Sequelize.STRING,
        allowNull: true
    },
    LastName:{
        type: Sequelize.STRING,
        allowNull: true
    },
    BirthDate:{
        type: Sequelize.STRING,
        allowNull: true
    },
    CPF:{
        type: Sequelize.STRING,
        allowNull: true
    },
    Email:{
        type: Sequelize.STRING,
        allowNull: true
    },
    Password:{
        type: Sequelize.STRING,
        allowNull: true
    },
});

UsersModel.sync({force: false}).then(() => {});
module.exports = UsersModel;