const express = require('express');
const { lacakController } = require('../controllers');
const router = express.Router();

// get all tarif
router.get('/lacak', lacakController.getLacak);



module.exports = router;