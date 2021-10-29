const router = require('express').Router();
const { Category, Product } = require('../../models');
const { tableName } = require('../../models/Category');

// The `/api/categories` endpoint

// Get all category records, including any associated products
router.get('/', async (req, res) => {
  try {
    // find all category records
    const categoryData = await Category.findAll({
      //For each category record returned, any associated records in the Products model will also be return with that category
      include: [Product]
    });
    //if successful, return success code & return retrieved data as a json object
    res.status(200).json(categoryData);
  } catch (err) {
    //If unsuccessful, return error code
    res.status(500).json(err);
  }
});

// Get a category record, + any associated products, by `id` value
router.get('/:id', async (req, res) => {
  try {
    // use the id passed through the request to locate the category record as `id` is the table's primary key
    const categoryData = await Category.findByPk(req.params.id, {
      // include any product associated with the category
      include: [Product]
    });
    // If the id doesn't exist in the category table, throw not found error
    if (!categoryData) {
      res.status(404).json({message: "There are no categories with an ID of " + req.params.id + "."});
      return;
    }
    //if successful, return success code & return retrieved data as a json object
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Create a new Category record
router.post('/', async (req, res) => {
  try {
    const categoryData = await Category.create({category_name: req.body.category_name});
    //if successful, return success code & return newly created category data as a json object
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an existing Category record, as identified by `id`
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    // create a new variable with the updated category record data
    const categoryData = await Category.update(
      // assign the new value of `category_name` using contents of the request
      {category_name: req.body.category_name},
      // identify which category record to edit via `id`
      {where: {id: req.params.id}}
    );
    // If a category with req id doesn't exist, throw error and notify user
    if (!categoryData) {
      res.status(404).json({message: "There are no categories with an ID of " + req.params.id + "."});
      return;
    }
    //if successful, return success code & the new updated category record as a json object
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a category record, as identified by its `id` value
router.delete('/:id', (req, res) => {
  try {
    // Destroy the category record associated with the request `id`
    const categoryData = await Category.destroy({
      where: {
        id: req.params.id
      }
    });
    // If the id doesn't exist in the category table, throw not found error
    if(!categoryData) {
      res.status(404).json({message: "There are no categories with an ID of " + req.params.id + "."});
      return;
    }
    res.status(200).json({message: "Category removed sucessfully!"});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;