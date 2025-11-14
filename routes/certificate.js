const express = require('express');
const router = express.Router();
const verifyToken = require('../middleware/verifyToken')
const { certificateuploadset } = require('../middleware/certificatestotage')
const {getAllcertificate,createcertificatebyId,updatecertificatebyId,deletecertificatebyId,uploadcertificate} = require('../controller/certificate')

router.get('/',getAllcertificate)

router.get('/private',verifyToken,getAllcertificate)
router.post('/create',verifyToken,createcertificatebyId)
router.put('/update',verifyToken,updatecertificatebyId)
router.delete('/delete',verifyToken,deletecertificatebyId)

router.post('/upload/:id', verifyToken, certificateuploadset.single('file'),uploadcertificate);

module.exports = router;