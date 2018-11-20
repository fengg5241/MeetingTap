var myDatabase = require('../db/db');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

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

module.exports.Meeting = Meeting;

