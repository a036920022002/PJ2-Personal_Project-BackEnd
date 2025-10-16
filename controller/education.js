//先以不建立models 方式寫

const { connectDB } = require('../config/db')

async function education(req,res){
    try{
        const pool = await connectDB();
        const [rows]= await pool.query('SELECT * FROM education');
        res.json({success:true, data:rows});
    } catch (err){
        console.error('🔥 Server Error:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = education;