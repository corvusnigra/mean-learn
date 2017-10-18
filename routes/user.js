var express = require('express');
var router = express.Router();
var bcrypt = require('bcryptjs');

var User = require('../models/user');

router.post('/', function (req, res) {
    var user = new User({
        firstName : req.body.firstName,
        lastName: req.body.lastName,
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email
    });

    user.save(function(err, result){
        if(err){
            res.status(500).json({
                title: 'An error occurred',
                error: err
            })
        }
        res.status(200).json({
            title: 'User create',
            obj: result
        })
    })

});

module.exports = router;
