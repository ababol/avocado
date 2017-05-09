const express = require('express');
const router = express.Router();

router.use('/avocats', require('./services/avocats/avocats.route'));

module.exports = router;
