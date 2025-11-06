const express = require('express');
const router = express.Router();
const { getworks,getidwork,updateWork, delWork, createWork } = require('../controller/works')

router.get('/',getworks);
router.get('/:id',getidwork);
router.put('/update',updateWork);
router.post('/create',createWork);
router.delete('/delete',delWork);

module.exports = router;