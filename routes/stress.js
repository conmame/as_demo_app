var express = require('express');
var exec = require('child_process').exec
var router = express.Router();

router.get('/', function(req, res) {
child = exec('timeout 480 sh ./bin/stress &', function(err, stdout, stderr){})
  res.send('Stress....');
});

module.exports = router;
