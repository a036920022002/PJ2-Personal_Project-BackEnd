//先以不建立models 方式寫

const db = require('../config/db')

const education = async (req, res) => { 
    try {
        const [rows] = await db.query('SELECT * FROM education');   
        const result = rows.map(row => ({
            ...row,
        }));
        res.json({ success: true, data: result });
        console.log('rows', rows);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });

    }
};


module.exports = education;