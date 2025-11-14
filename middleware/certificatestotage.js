const multer = require('multer');
const path = require('path');
const fs = require('fs');

const certificatephoto = multer.diskStorage({
  destination: (req, file, cb) => {
    const cerid = req.params.id
    console.log("req.params.id:", cerid)
    
    if (!cerid) return cb(new Error('缺少作品 id'));
    const dir = path.join(__dirname, `../public/images/certificate`);
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const cerid = req.params.id
    const ext = path.extname(file.originalname);
    cb(null, cerid + ext);
  }
});

const certificateuploadset = multer({
  storage: certificatephoto,
  limits:{fileSize:5242880}
});

module.exports = {certificateuploadset};