const express = require('express');
const router = express.Router();

const { shop, item } = require('../controllers/products');

// get all products from db
router.get('/', shop);

// get a single product by id
router.get('/:id', item);

module.exports = router;