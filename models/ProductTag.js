// import relevant parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product Tag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// Fields and assiociated requirements for the Product Tag db model
ProductTag.init(
  {
    id: {
      // Value will be an integer
      type: DataTypes.INTEGER,
      // Can't be a null value
      allowNull: false,
      // The primary key for the product_tag table
      primaryKey: true,
      // Value auto increments up one with each new record
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // This is a foreign key from the product model (table) on the id key (column value)
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      // This is a foreign key from the tag model (table) on the id key (column value)
      references: {
        model: 'tag',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;