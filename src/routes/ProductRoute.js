const ProductController = require('../controllers/ProductController');
const express = require('express');
const router = express.Router();

router.get('/', ProductController.index);

module.exports = router;