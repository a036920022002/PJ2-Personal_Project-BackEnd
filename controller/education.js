//先以不建立models 方式寫

const db = require('../config/db')

function education(req,res){
     try {
        const rows = db.prepare('SELECT * FROM education').all();
        res.json({ success: true, data: rows });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = education;