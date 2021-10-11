const express = require('express');

const typesController = require('../controllers/types-controller');

const router = express.Router();

router.get('/addType', typesController.addType);

router.post('/addType', typesController.postType);

module.exports = router;