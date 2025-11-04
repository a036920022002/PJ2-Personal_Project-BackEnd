const express = require('express');
const router = express.Router();
const { getexp, updateWorkExp, createWorkExp, delWorkExp } = require('../controller/workexperience')

router.get('/',getexp);
router.put('/update',updateWorkExp);
router.post('/create',createWorkExp);
router.delete('/delete',delWorkExp);

module.exports = router;