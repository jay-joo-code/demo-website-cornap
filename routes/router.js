var router = require('express').Router();

router.get('/', function(req, res) {
    res.render('index', {title: 'test'});
});

router.get('/login', function(req, res) {
    res.render('login');
});

router.get('/team', function(req, res) {
    res.render('team');
});

module.exports = router;