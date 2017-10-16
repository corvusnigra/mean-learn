var express = require('express');
var router = express.Router();

var Message = require('../models/message');


router.post('/', function (req, res) {
    var message = new Message({
        content: req.body.content
    });

    message.save(function(err, result){
        if(err){
            res.status(500).json({
                title: 'An error ocured',
                err: err
            })
        }
        res.status(201).json({
            message: 'Save message',
            obj: result
        })
    })

});

module.exports = router;
