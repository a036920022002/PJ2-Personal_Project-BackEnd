const express = require('express');
const router = express.Router();
const { getexp} = require('../controller/workexperience')

router.get('/',getexp);

module.exports = router;