const express = require('express');
const { prisma } = require('../config/prisma');
const { priceController} = require('../controllers');
const router = express.Router();

router.get('/price', priceController.getPrice);

module.exports = router;