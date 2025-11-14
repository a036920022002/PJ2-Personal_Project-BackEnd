const express = require('express');
const router = express.Router();
const { getworks,getidwork,updateWork, delWork, createWork,uploadWorkphoto } = require('../controller/works')
const { worksuploadset } = require('../middleware/worksstotage')
const verifyToken = require('../middleware/verifyToken')

router.get('/',getworks);
router.get('/private',verifyToken,getworks);

router.get('/:id',getidwork);
router.put('/update',verifyToken,updateWork);
router.post('/create',verifyToken,createWork);
router.delete('/delete',verifyToken,delWork);
router.post('/upload/:id', verifyToken, worksuploadset.fields([{ name: 'files', maxCount: 10 }]),uploadWorkphoto);

module.exports = router;