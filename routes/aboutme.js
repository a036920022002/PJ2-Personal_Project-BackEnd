const express = require('express');
const router = express.Router();
const aboutme = require('../controller/aboutme')

router.get('/',aboutme);

module.exports = router;