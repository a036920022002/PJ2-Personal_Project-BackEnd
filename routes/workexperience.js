const express = require('express');
const router = express.Router();
const workexperience = require('../controller/workexperience')

router.get('/',workexperience);

module.exports = router;