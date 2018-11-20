const Sequelize = require('sequelize');
var sequelizeInstance = new Sequelize('meeting-tap','root','root', {
    host:'10.0.75.1',
    port:'3306',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
});

module.exports.sequelizeInstance = sequelizeInstance;
module.exports.Sequelize = Sequelize;