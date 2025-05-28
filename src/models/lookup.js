const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Lookup = sequelize.define('Lookup', {
  lookup_uuid: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  lookup_id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    unique: true
  },
  lookup_group: DataTypes.STRING,
  lookup_key: DataTypes.STRING,
  lookup_value: DataTypes.STRING,
  lookup_display: DataTypes.STRING
}, {
  tableName: 'lookup',
  schema: 'bmm',
  timestamps: false
});

module.exports = Lookup;
