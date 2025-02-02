const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sql10759382', 'sql10759382', 'Q8F2IrIWAX', {
  host: 'localhost',
  dialect: 'mysql'
});


module.exports = sequelize