const express = require('express');

const incidentsController = require('../controllers/park_incidents-controller');

const router = express.Router();

router.get('/add', incidentsController.addIncident);

router.post('/add', incidentsController.postIncident);

router.get('/list', incidentsController.getIncident);

module.exports = router;