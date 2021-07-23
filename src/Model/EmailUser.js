const Sequelize  = require("sequelize");
const Connection = require("../Schema/connection");

const EmailUsersModel = Connection.define('EmailUsers', {

    Email:{
        type: Sequelize.STRING,
        allowNull: true
    }
});

EmailUsersModel.sync({force: false}).then(() => {});
module.exports = EmailUsersModel;