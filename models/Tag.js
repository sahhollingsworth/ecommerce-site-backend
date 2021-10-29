// import relevant parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Tag model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// Fields and assiociated requirements for the Tag db model
Tag.init(
  {
    id: {
      // Value will be an integer
      type: DataTypes.INTEGER,
      // Can't be a null value
      allowNull: false,
      // The primary key for Categories
      primaryKey: true,
      // Value auto increments up one with each new record
      autoIncrement: true
    },
    tag_name: {
      // Value will be a string
      type: DataTypes.INTEGER,
      // Can't be a null value
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;