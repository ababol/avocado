const ControllerAvocats = require('./avocats.controller');
const express = require('express');
const router = express.Router();

router.get('/:id', ControllerAvocats.findById);

module.exports = router;
