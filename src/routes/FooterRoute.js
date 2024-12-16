const FooterController = require('../controllers/FooterController');
const express = require('express');
const router = express.Router();

router.get('/', FooterController.index);

module.exports = router;