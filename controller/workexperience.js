//以models 方式撰寫

const { getAllWorkExperience } = require('../models/workexperience')
const db = require('../config/db')

function workexperience(req,res){
    try {
        const rows = db.prepare('SELECT * FROM workexperience').all();
        res.json({ success: true, data: rows });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

module.exports = workexperience;