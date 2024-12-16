const express = require('express');
const router = express.Router();
const OrderController = require('../controllers/OrderController');
const authenticate = require('../middleware/auth');

router.post('/create', authenticate, OrderController.store);

module.exports = router;