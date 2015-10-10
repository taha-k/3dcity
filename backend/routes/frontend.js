'use strict';

var auth = require('../middleware/auth');
var express = require('express');
var util = require('util');
var common = require('./common');
var fs = require('fs');
var path = require('path');
var router = express.Router();
var achievements = require('../common/achievements');
var User = require('../models').users;
var Log = require('../models').logs;
var defaultPath = path.dirname(require.main.filename) + '/res/missingProfile.png';

router.get('/', function (req, res) {
  //res.send('Hello World!');
  res.sendFile(path.join(__dirname+'../../../front/index.html'));
});

module.exports = router;