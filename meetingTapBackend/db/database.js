var Sequelize = require('sequelize');
//var sequelizeTransforms = require('sequelize-transforms');
const sequelizeInstance = new Sequelize('pa-social-norms', 'root', 'root', {
    host: '10.0.75.1',
    port: '3306',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

sequelizeInstance.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch(err => {
    console.error('Unable to connect to the database:', err);
});

sequelizeTransforms(sequelizeInstance);

module.exports.sequelizeInstance = sequelizeInstance;
module.exports.Sequelize = Sequelize;