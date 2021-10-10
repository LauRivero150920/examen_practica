const express = require('express');

const nameController = require('../controllers/name_controller');

const router = express.Router();

// De lo particular a lo general 
router.get('/login', nameController.getLogin);

router.post('/login', nameController.postLogin);

router.get('/logout', nameController.getLogout);

router.get('/add', nameController.getAdd);

router.post('/add', nameController.postAdd);

module.exports = router;