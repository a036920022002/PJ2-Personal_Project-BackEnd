const express = require('express');
const router = express.Router();
const {getaboutme, uploadphoto , updateAboutme,upload} = require('../controller/aboutme')
const verifyToken = require('../middleware/verifyToken')


//公開route
router.get('/',getaboutme);
//private Route
router.get('/private',verifyToken,getaboutme);
router.post('/upload',upload.single('file'),verifyToken,uploadphoto);
router.put('/update',verifyToken,updateAboutme)



module.exports = router;