const express = require('express');
const router = express.Router();
const { getworks,getidwork } = require('../controller/works')

router.get('/',getworks);
router.get('/:id',getidwork);

module.exports = router;