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

module.exports.User = User;

