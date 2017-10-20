var express = require('express');
var router = express.Router();
var jwt = require('jsonwebtoken');

var Message = require('../models/message');
var User = require('../models/user');



router.get('/', function (req, res, next) {
   Message.find()
       .exec(function (err, messages) {
           if (err) {
               return res.status(500).json({
                   title: 'An error occurred',
                   error: err
               });
           }
           res.status(201).json({
               message: 'Saved message',
               obj: messages
           });

       })
});


router.use('/', function (req, res, next) {
    jwt.verify(req.query.token, 'secret', function (err, decoded) {
        if(err){
            res.status(500).json({
                title: 'Not autentificated',
                error: err
            })
        }
        next();
    })

});

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token);
    console.log(decoded.user._id);
    User.findById(decoded.user._id, function (err, user) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }

        var message = new Message({
            content: req.body.content,
            user: user
        });

        message.save(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            user.messages.push(result);
            user.save();
            res.status(201).json({
                message: 'Saved message',
                obj: result
            });
        });
    });

});


router.patch('/:id',function (req, res, next) {
   Message.findById(req.params.id,function (err, message) {
       if (err) {
           return res.status(500).json({
               title: 'An error occurred',
               error: err
           });
       }
       if (!message) {
           return res.status(500).json({
               title: 'Message not found',
               error: {error: 'Message not found'}
           });
       }
       message.content = req.body.content;
       message.save(function (err, result) {
           if (err) {
               return res.status(500).json({
                   title: 'An error occurred',
                   error: err
               });
           }
           res.status(201).json({
               message: 'Saved message',
               obj: result
           });
       })

   })
});



router.delete('/:id', function (req, res , next) {
    Message.findById(req.params.id,function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'Message not found',
                error: {error: 'Message not found'}
            });
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Delete message',
                obj: result
            });
        })

    })
});

module.exports = router;
