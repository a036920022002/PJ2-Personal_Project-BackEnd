const express = require('express');
const router = express.Router();
const { getworks,getidwork,updateWork, delWork, createWork,uploadWorkphoto } = require('../controller/works')
const { worksuploadset } = require('../middleware/worksstotage')


router.get('/',getworks);
router.get('/:id',getidwork);
router.post('/upload/:id', worksuploadset.fields([{ name: 'files', maxCount: 10 }]), uploadWorkphoto);
router.put('/update',updateWork);
router.post('/create',createWork);
router.delete('/delete',delWork);

module.exports = router;