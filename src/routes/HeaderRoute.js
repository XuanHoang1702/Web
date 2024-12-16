const HeaderController = require('../controllers/HeaderController');
const express = require('express');
const router = express.Router();

router.get('/', HeaderController.index);

module.exports = router;