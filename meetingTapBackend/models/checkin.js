var myDatabase = require('../db/db');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

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

module.exports.Checkin = Checkin;

