const express = require('express');
const router = express.Router();

const { index, productDetails } = require('../controllers/products');

// get all products from db
router.get('/', index);

// get a single product by id
router.get('/:id', productDetails);

module.exports = router;