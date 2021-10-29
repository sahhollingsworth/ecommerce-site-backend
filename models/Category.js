// import relevant parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import database connection from config.js
const sequelize = require('../config/connection.js');

// Initialize Category model (table) by extending off Sequelize's Model class
class Category extends Model {}

// Fields and assiociated requirements for the Category db model
Category.init(
  {
    id: {
      // Value will be an integer
      type: DataTypes.INTEGER,
      // Can't be a null value
      allowNull: false,
      // The primary key for Category
      primaryKey: true,
      // Value auto increments up one with each new record
      autoIncrement: true
    },
    category_name: {
      // Value will be a string
      type: DataTypes.STRING,
      // Can't be a null value
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;