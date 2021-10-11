const express = require('express');

const placesController = require('../controllers/places-controller');

const router = express.Router();

router.get('/addPlace', placesController.addPlace);

router.post('/addPlace', placesController.postPlace);

module.exports = router;