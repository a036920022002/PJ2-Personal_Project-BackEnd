const express = require('express');
const router = express.Router();
const { getexp, updateWorkExp, createWorkExp, delWorkExp } = require('../controller/workexperience')
const verifyToken = require('../middleware/verifyToken')

router.get('/',getexp);

router.get('/private',verifyToken,getexp);
router.put('/update',verifyToken,updateWorkExp);
router.post('/create',verifyToken,createWorkExp);
router.delete('/delete',verifyToken,delWorkExp);

module.exports = router;