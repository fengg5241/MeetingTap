var myDatabase = require('../db/db');
var sequelizeInstance = myDatabase.sequelizeInstance;
var Sequelize = myDatabase.Sequelize;

var Campaign = sequelizeInstance.define('campaigns',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:Sequelize.STRING,
    image:Sequelize.STRING,
    utcCreated:Sequelize.INTEGER,
    utcRelease:Sequelize.INTEGER,
    utcEnd:Sequelize.INTEGER
    //noOfQuestion:Sequelize.INTEGER
    },
    {
        timestamps: false,
        freezeTableName:true
    }

);

module.exports.Campaign = Campaign;

