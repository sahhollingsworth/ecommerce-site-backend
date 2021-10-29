// import relevant parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// Fields and assiociated requirements for the Product db model
Product.init(
  {
    id: {
      // Value will be an integer
      type: DataTypes.INTEGER,
      // Can't be a null value
      allowNull: false,
      // The primary key for the product table
      primaryKey: true,
      // Value auto increments up one with each new record
      autoIncrement: true
    },
    product_name: {
      // Value will be a string
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      // Value will be a decimal that accepts 2 values before the decimal 
      type: DataTypes.DECIMAL(10,2),
      allowNull: false,
      validate: {
        // Verify input is a decimal
        isDecimal: true
      }
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        // Verify input is a number
        isNumeric: true
      }
    },
    category_ids: {
      type: DataTypes.INTEGER,
      // This is a foreign key from the category model (table) on the id key (column value)
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;