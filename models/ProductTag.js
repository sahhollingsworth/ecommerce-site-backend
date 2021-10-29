// import relevant parts of sequelize library
const { Model, DataTypes } = require('sequelize');

// import database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product Tag model (table) by extending off Sequelize's Model class
class ProductTag extends Model {}

// Fields and assiociated requirements for the Product Tag db model
ProductTag.init(
  {
    // define columns
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


    // - `id`
    //     - Integer.
    //     - Doesn't allow null values.
    //     - Set as primary key.
    //     - Uses auto increment.
    // - `product_id`
    //     - Integer.
    //     - References the `Product` model's `id`.
    // - `tag_id`
    //     - Integer.
    //     - References the `Tag` model's `id`.