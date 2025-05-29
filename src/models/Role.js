const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db');

const Role = sequelize.define('Role', {
  Id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  Name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'Role',
  schema: 'bmm',
  timestamps: false,
});

module.exports = Role;
