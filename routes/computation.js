var express = require('express');
var router = express.Router();

/* Math.sign function */
router.get('/', function(req, res, next) {
  var rand = Math.random()* 100;
  var x = rand;

  if (req.query.x !== undefined) {
    x = parseFloat(req.query.x);
  }

  var result = Math.sign(x);
  var final = `Math.sign(${x}) is ${result}`;
  
  res.render('computation', { title: final });
});

module.exports = router;