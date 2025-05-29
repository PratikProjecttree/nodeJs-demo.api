const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const User = sequelize.define('User', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'User', // optional: use your actual table name if different
    schema: 'bmm', 
  timestamps: false,  // or true if you use createdAt/updatedAt
});

module.exports = User;