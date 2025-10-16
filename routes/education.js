const express = require('express');
const router = express.Router();
const education = require('../controller/education')

router.get('/',education);

module.exports = router;