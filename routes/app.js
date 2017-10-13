var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.post('/', function (req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Max',
        lastName: 'Markov',
        password: 'super-secret',
        email: email
    });
    user.save();
    res.redirect('/');

});

router.get('/', function (req, res, next) {
    res.render('node');
});

module.exports = router;
