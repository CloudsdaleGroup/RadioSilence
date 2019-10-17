var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Radio Silence' });
});
router.get('/planning', function(req, res, next) {
  res.render('planning', { title: 'Radio Silence - Planing' });
});
router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Radio Silence - Team' });
});

module.exports = router;
