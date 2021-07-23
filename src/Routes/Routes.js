const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const passport = require('passport');
const UsersModel = require('../Model/UsersModel');
const EmailUsersModel = require('../Model/EmailUser')


router.get('/', (req, res, next) => {
    res.render('Homepage');
});

router.get('/login', (req, res, next) => {
    res.render('Login');
});

router.get('/reset/password', (req, res, next) => {

});

router.get('/Register', (req, res, next) => {
    res.render('Register');
});

router.post('/login/Auth', (req, res, next) => {
    
    let { Email, Password } = req.body;

    passport.authenticate("local", {
        successRedirect: '/User/DashBoard',
        failureRedirect: '/login',
        failureFlash: true
    })(req, res, next)
});


router.post('/Register/Save', (req, res, next) => {

    let { Name, LastName,
        BirthDate, CPF,
        Email, Password } = req.body;

    //Encrypta  a senha
    var Salt = bcrypt.genSaltSync(10);
    var Hash = bcrypt.hashSync(Password, Salt);

    if (Name !== '' && LastName !== '' && BirthDate !== ''
        && CPF !== '' && Email !== '' && Hash !== '') {
        UsersModel.create({
            Name: Name,
            LastName: LastName,
            BirthDate: BirthDate,
            CPF: CPF,
            Email: Email,
            Password: Hash
        }).then(() => {
            res.redirect('/login');
        })
    }
    else{
        res.redirect('/Register');
    }
});

router.post('/SaveMail', (req, res, next) => {
    
    let Email = req.body.Email;
    
    EmailUsersModel.create({
        Email: Email
    }).then(() => {
        res.redirect('/');
    })
});

module.exports = router;