//先以不建立models 方式寫

const db = require('../config/db')
const BASE_URL = process.env.BASE_URL; 
const path = require('path');
const multer = require('multer');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images/aboutme/'));
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);
    cb(null, uniqueSuffix + ext);
  }
});
const upload = multer({ storage });

const getaboutme = async (req, res) => { 
    try {
        const [rows] = await db.query('SELECT * FROM aboutme');   
        const result = rows.map(row => ({
            ...row,
            photoUrl: row.photo ? `${BASE_URL}/images/aboutme/${row.photo}` : null
        }));
        res.json({ success: true, data: result });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const uploadphoto = async (req, res) => { 
     try {
        const file = req.file;
        if (!file) return res.status(400).json({ success: false, message: '沒有上傳檔案' });

        // 將檔名存入資料庫（假設只有一筆資料，id=1）
        await db.query('UPDATE aboutme SET photo = ? WHERE id = 1', [file.filename]);

        res.json({
            success: true,
            message: '上傳成功',
            url: `${BASE_URL}/images/aboutme/${file.filename}`
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ success: false, message: err.message });
    }
};

const updateAboutme = async (req, res) => { 
     try {
    const {
      id,
      name,
      englishName,
      gender,
      birth,
      phone,
      email,
      address,
      fb,
      ig,
      linkin,
      LINE,
      intro,
      introEng
    } = req.body;
    
    if (!id) {
      return res.status(400).json({ success: false, message: '缺少資料 ID' });
    }
    const sql = `
      UPDATE aboutme
      SET 
        name = COALESCE(?, name),
        englishName = COALESCE(?, englishName),
        gender = COALESCE(?, gender),
        birth = COALESCE(?, birth),
        phone = COALESCE(?, phone),
        email = COALESCE(?, email),
        address = COALESCE(?, address),
        fb = COALESCE(?, fb),
        ig = COALESCE(?, ig),
        linkin = COALESCE(?, linkin),
        LINE = COALESCE(?, LINE),
        intro = COALESCE(?, intro),
        introEng = COALESCE(?, introEng)
      WHERE id = ?
    `;
    const values = [
      name, englishName, gender, birth, phone, email, address,
      fb, ig, linkin, LINE, intro, introEng,
      id
    ];

    const [result] = await db.execute(sql, values);

    if (result.affectedRows === 0) {
      return res.status(404).json({ success: false, message: '找不到資料' });
    }

    res.json({ success: true, message: '更新成功' });

    }catch(err){
        console.error(err);
        res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
};


module.exports = {getaboutme, uploadphoto, updateAboutme, upload};

