const multer = require('multer');
const path = require('path');
const fs = require('fs');

const worksstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const workid = req.params.id
    console.log("req.params.id:", workid)
    
    if (!workid) return cb(new Error('缺少作品 id'));
    const dir = path.join(__dirname, `../public/images/works/${workid}`);
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});

const worksuploadset = multer({storage: worksstorage });

module.exports = {worksuploadset};