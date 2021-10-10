const express = require('express');

const incidentsController = require('../controllers/park_incidents-controller');

const router = express.Router();

// De lo particular a lo general 
router.get('/add', incidentsController.getList);

/*
router.post('/login', incidentsController.postLogin);

router.get('/logout', incidentsController.getLogout);

router.get('/add', incidentsController.getAdd);

router.post('/add', incidentsController.postAdd);
*/

module.exports = router;