const express = require('express');
const router = express.Router();
// const db = require('../config/db')
const {getaboutme, uploadphoto , updateAboutme,upload} = require('../controller/aboutme')


router.get('/',getaboutme);
router.post('/upload',upload.single('file'),uploadphoto);
router.put('/update',updateAboutme)



module.exports = router;