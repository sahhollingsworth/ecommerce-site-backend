// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Categories have many Products, as a category can have multiple products
Category.hasMany(Product, {
  foreignKey:'category_id'
});

// Products belongsTo Category, as a product can only belong to one category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Products belongToMany Tags (through ProductTag), products have multiple tags 
Product.belongsToMany(Tag, {
  // Additional ProdutTag attribute for the join table.
  through: ProductTag,
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag), tags have many products
Tag.belongsToMany(Product, {
  // Additional ProdutTag attribute for the join table.
  through: ProductTag,
  foreignKey: 'tag_id'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};