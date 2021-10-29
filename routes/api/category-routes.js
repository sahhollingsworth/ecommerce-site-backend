const router = require('express').Router();
const { Category, Product } = require('../../models');

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
      res.status(404).json({message: "There are no categories with an ID of " + req.params.id});
      return;
    }
    //if successful, return success code & return retrieved data as a json object
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {

  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {

  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {

  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
