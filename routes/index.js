var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Radio Silence', layout: 'layfooter' });
});
router.get('/planning', function(req, res, next) {
  res.render('planning', { title: 'Radio Silence - Planing', layout: 'layfooter' });
});
router.get('/team', function(req, res, next) {
  res.render('team', { title: 'Radio Silence - Team' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Radio Silence - A Prpopos', layout: 'layfooter' });
});

module.exports = router;
