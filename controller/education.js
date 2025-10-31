//先以不建立models 方式寫

const { connectDB } = require('../config/db')

<<<<<<< Updated upstream
async function education(req,res){
    try{
        const pool = await connectDB();
        const [rows]= await pool.query('SELECT * FROM education');
        res.json({success:true, data:rows});
    } catch (err){
        console.error('🔥 Server Error:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
=======
const education = async (req, res) => { 
    try {
        const [rows] = await db.query('SELECT * FROM education');   
        const result = rows.map(row => ({
            ...row,
        }));
        res.json({ success: true, data: result });
        
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
>>>>>>> Stashed changes
    }
};

module.exports = education;