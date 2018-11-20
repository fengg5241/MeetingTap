var express = require('express');
var router = express.Router();
//var {Sequelize,sequelizeInstance} = require('../db/database');

var myDatabase = require('../db/db');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize

var User = require('../models/user');

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

    res.send('respond with a resource');
  });

// http://localhost:3000/users/getUsers
router.get('/getUsers', function(req, res, next) {
    User.findAll().then(function(users) {
      res.status(200).json(users);
    });
});

// http://localhost:3000/users/getUserByMeetingId
router.get('/getUsers/:meetingId', function(req, res, next) {
  const meetingId = req.params.meetingId;
  User.findAll({meeting_id:meetingId}).then(function(users) {
    res.status(200).json(users);
  });
});
module.exports = router;