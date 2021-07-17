const Local_Strategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const sequelize = require('sequelize')
const passport = require('passport')
const UsersModel = require('../Model/UsersModel');

module.exports = function (passport) {

    passport.use(new Local_Strategy({
        usernameField: 'Email',
        passwordField: 'Password'
    }, (Email, Password, done) => {

        UsersModel.findOne({ where: { Email: Email }}).then((user) => {

            if (user) {
                bcrypt.compare(Password, user.Password, (err, success) => {
                    if (success) {
                        return done(null, user);
                    }
                    else {
                        return done(null, false, { Message: 'Password Incorrect' });
                    }
                });
            }
        });
    }));

    passport.serializeUser((user, done) => {
        return done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        UsersModel.findByPk(id).then((user) => {
            done(null, user);
        }).catch((err) => {
            done(err, null);
        });
    });
}