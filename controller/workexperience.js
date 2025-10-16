//以models 方式撰寫

const { getAllWorkExperience } = require('../models/workexperience')

async function workexperience(req,res){
    try{
        const data= await getAllWorkExperience();
        res.json({success:true, data:data});
    } catch (err){
        console.error('🔥 Server Error:', err);
        res.status(500).json({ success: false, message: 'Server Error' });
    }
};

module.exports = workexperience;