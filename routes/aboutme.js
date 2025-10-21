const express = require('express');
const router = express.Router();
const db = require('../config/db')
const getaboutme = require('../controller/aboutme')


router.get('/',getaboutme);

module.exports = router;