var express = require('express');
var router = express.Router();
var {multiplicar} = require('../helpers/multiplicar');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'PabloGalan-Node-pug' });
});

router.post('/', function(req, res) {
  let number = multiplicar(req.body.base);
  res.render('tabla', { base: number });
});

module.exports = router;
