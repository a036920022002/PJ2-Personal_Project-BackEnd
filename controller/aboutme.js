//先以不建立models 方式寫

const db = require('../config/db')
const BASE_URL = process.env.BASE_URL; 

const getaboutme = async (req, res) => { 
    try {
        const [rows] = await db.query('SELECT * FROM aboutme');   
        const result = rows.map(row => ({
            ...row,
            photoUrl: row.photo ? `${BASE_URL}/images/${row.photo}` : null
        }));
        res.json({ success: true, data: result });
        console.log('rows', rows);
        console.log('result', result);
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};


module.exports = getaboutme;