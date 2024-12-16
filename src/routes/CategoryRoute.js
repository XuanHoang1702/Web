const CategoryController = require('../controllers/CategoryController');
const express = require('express');
const router = express.Router();

router.get('/', CategoryController.index);
router.post('/create', CategoryController.create);

module.exports = router;
