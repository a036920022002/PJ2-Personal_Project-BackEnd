//以models 方式撰寫
const {getAllExp} = require('../models/workexperience')

const getexp = async (req, res) => { 
    try{
        const exp = await getAllExp();
        res.json(exp);;
        console.log(exp)
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

module.exports = {getexp}