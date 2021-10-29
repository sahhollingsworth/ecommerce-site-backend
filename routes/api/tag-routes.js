const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

// Get all tag records, including any associated products
router.get('/', async (req, res) => {
  try {
    // find all tag records
    const tagData = await Tag.findAll({
      //For each tag record returned, any associated records in the Products model will also be return with that tag
      include: [Product]
    });
    //if successful, return success code & return retrieved data as a json object
    res.status(200).json(tagData);
  } catch (err) {
    //If unsuccessful, return error code
    res.status(500).json(err);
  }
});

// Get a tag record, + any associated products, by `id` value
router.get('/:id', async (req, res) => {
  try {
    // use the id passed through the request to locate the tag record as `id` is the table's primary key
    const tagData = await Tag.findByPk(req.params.id, {
      // include any product associated with the tag
      include: [Product]
    });
    // If the id doesn't exist in the tag table, throw not found error
    if (!tagData) {
      res.status(404).json({message: "There are no tags with an ID of " + req.params.id + "."});
      return;
    }
    //if successful, return success code & return retrieved data as a json object
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});


// VERY BROKEN -- FIX
// Create a new Tag record 
router.post('/', async (req, res) => {
  try {
    const tagData = await tag.create({tag_name: req.body.tag_name});
    //if successful, return success code & return newly created tag data as a json object
    res.status(200).json(tagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Update an existing Tag record, as identified by `id`
router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const tagData = await Tag.findByPk(req.params.id,
    
    {});
    if (!tagData) {
      res.status(404).json({message: "There are no tags with an ID of " + req.params.id + "."});
      return;
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

// Delete a tag record, as identified by its `id` value
router.delete('/:id', (req, res) => {
  try {
    // Destroy the tag record associated with the request `id`
    const tagData = await Tag.destroy({
      where: {
        id: req.params.id
      }
    });
    // If the id doesn't exist in the tag table, throw not found error
    if(!tagData) {
      res.status(404).json({message: "There are no tags with an ID of " + req.params.id + "."});
      return;
    }
    res.status(200).json({message: "Tag removed sucessfully!"});
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
