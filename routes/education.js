const express = require('express');
const router = express.Router();
const {education , updateeducation, createeducation,deleteeducation} = require('../controller/education')

router.get('/',education);
router.put('/update',updateeducation)
router.post('/create',createeducation)
router.delete('/delete',deleteeducation)

module.exports = router;