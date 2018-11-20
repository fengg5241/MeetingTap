var express = require('express');
var router = express.Router();
//var {Sequelize,sequelizeInstance} = require('../db/database');

var Meeting = require('../models/meeting');

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

    res.send('respond with a resource');
  });

// http://localhost:3000/users/getUsers
router.get('/getMeetings', function(req, res, next) {
    Meeting.findAll().then(function(users) {
      res.status(200).json(users);
    });
});


module.exports = router;