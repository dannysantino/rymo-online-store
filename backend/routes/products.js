const express = require('express');
const router = express.Router();

const { getProducts, getItem } = require('../controllers/products');

// get all products from db
router.get('/', getProducts);

// get a single product by id
router.get('/:id', getItem);

module.exports = router;