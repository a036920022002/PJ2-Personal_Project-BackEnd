//以models 方式撰寫
const {getAllExp,updateExp,createExp,deleteExp} = require('../models/workexperience')

const getexp = async (req, res) => { 
    try{
        const exp = await getAllExp();
        res.json(exp);;
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

const updateWorkExp = async (req,res) => {
    try{
        await updateExp(req.body);
        res.json({success: true, message: '更新成功' })

    }catch(err){
         res.status(500).json({success: false, message: '更新失敗'});
    }
}

const createWorkExp = async (req,res) => {
    try{
        const newItem = await createExp(req.body);
        res.json({ success: true, message: '更新成功',id: newItem.insertId });
    }catch(err){
        console.error(err);
        res.status(500).json({ success: false, message: '新增失敗' });
    }
}

const delWorkExp = async (req,res) => {
    try{
        const id= req.body.id
        await deleteExp(id);
        return res.json({ success: true, message: '刪除成功'});
    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }

}


module.exports = {getexp, updateWorkExp, createWorkExp, delWorkExp}