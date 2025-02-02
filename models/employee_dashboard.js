const { Sequelize, DataTypes, Model } = require('sequelize');
const sequelize = require('../sequelize')

class employee extends Model {}

employee.init(
  {
  
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    Name: {
      type: Sequelize.STRING
    },
    Position: {
      type: Sequelize.STRING
    },
    Email: {
      type: Sequelize.STRING
    },
  },
  {
  
    sequelize, 
    modelName: 'employee', 
    tableName: 'Employee_Dashboards', 
    timestamps: true
  },
);

module.exports = employee;
