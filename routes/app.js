var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index');
});

router.post('/message', function (req, res, next) {
    const message = req.body.message
    res.redirect('/message/' + message);
});

router.get('/message/:msg', function (req, res, next) {
    res.render('node', { message: req.params.msg});
});

module.exports = router;
