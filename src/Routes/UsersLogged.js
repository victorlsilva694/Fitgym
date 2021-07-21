const express = require('express');
const Router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const passport = require('passport');
const UsersModel = require('../Model/UsersModel');


Router.get('/DashBoard', (req, res, next) => {
    res.render('DashBoard_User', {
        User: req.user
    });
});

Router.get('/DashBoard/HealthyEating', (req, res, next) => {
    res.render('DashBoard_Itens/HealthyEating', {
        User: req.user
    });
});


module.exports = Router;