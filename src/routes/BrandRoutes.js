const BrandController = require('../controllers/BrandController');
const express = require('express');
const router = express.Router();

router.get('/', BrandController.index);

module.exports = router;