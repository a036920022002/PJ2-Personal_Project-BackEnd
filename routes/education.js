const express = require('express');
const router = express.Router();
const {education , updateeducation, createeducation,deleteeducation} = require('../controller/education')
const verifyToken = require('../middleware/verifyToken')

router.get('/',education);

router.get('/private',verifyToken,education);
router.put('/update',verifyToken,updateeducation)
router.post('/create',verifyToken,createeducation)
router.delete('/delete',verifyToken,deleteeducation)

module.exports = router;