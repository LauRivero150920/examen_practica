const express = require('express');

const incidentsController = require('../controllers/park_incidents-controller');

const router = express.Router();

router.get('/add', incidentsController.addIncident);

router.get('/list', incidentsController.getIncident);

router.post('/add', incidentsController.postIncident);

module.exports = router;