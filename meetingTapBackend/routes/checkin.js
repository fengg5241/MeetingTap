var express = require('express');
var router = express.Router();
//var {Sequelize,sequelizeInstance} = require('../db/database');

// var Checkin = require('../models/checkin');
// var User = require('../models/user');
// var Meeting = require('../models/meeting');
var myDatabase = require('../db/db');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

var User = sequelizeInstance.define('user',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:Sequelize.STRING,
    ic:Sequelize.STRING,
    email:Sequelize.STRING,
    phone:Sequelize.INTEGER,
    icode:Sequelize.STRING,
    },
    {
        timestamps: false,
        freezeTableName:true
    }

);

var Meeting = sequelizeInstance.define('meeting',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:Sequelize.STRING,
    starttime:Sequelize.DATE,
    endtime:Sequelize.DATE,
    location:Sequelize.STRING
    },
    {
        timestamps: false,
        freezeTableName:true
    }

);

var Checkin = sequelizeInstance.define('checkin',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    meeting_id:Sequelize.INTEGER,
    user_id:Sequelize.INTEGER,
    createtime:Sequelize.DATE,
    updatetime:Sequelize.DATE
    },
    {
        timestamps: false,
        freezeTableName:true
    }

);

/* GET users listing. */
router.get('/', function(req, res, next) {

  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {

    res.send('respond with a resource');
  });


var checkinAssociation = [{
    association: Checkin.belongsTo(User, {foreignKey:'user_id', as:'user'})
},{
    association: Checkin.belongsTo(Meeting, {foreignKey:'meeting_id', as:'meeting'})
}]

// http://localhost:3000/checkin/getCheckin/:meetingId
router.get('/getCheckin/:meetingId', function(req, res, next) {
    const meetingId = req.params.meetingId;
    Checkin.findAll({
        where: {meeting_id:meetingId},
        include:checkinAssociation}).then(function(checkins) {
      res.status(200).json(checkins);
    });
});




// http://localhost:3000/checkin/checkin
router.post('/checkin', function(req, res, next) {
    let newCheckin = req.body;
    var icode = newCheckin.icode;
    // console.log("@@@@@@@@@@@@@@@@@@@@@@@:::::"+icode);

    console.log('Post a Customer: ' + JSON.stringify(req.body));
    const Op = Sequelize.Op;
    User.findOne({where:{
        [Op.or]: [
            {
            phone: {
                [Op.like]: '%'+icode
            }
            },
            {
            icode: {
                [Op.eq]: icode
            }
            }
       
        ]
    }
}).then(function(user) {
            if(user){
                Checkin.create({
                    createtime:Date.now(),
                    meeting_id:newCheckin.meeting_id,
                    user_id:user.id
                }).then(function(data) {
                    res.status(200).json(data);
                });
            }else {
                res.status(200).json({});
            }
        });
    
         
    

});


module.exports = router;