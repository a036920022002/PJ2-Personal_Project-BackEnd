//以models 方式撰寫
const {getAllWork, getWorkById, updateWorks, deleteWorks, createWorks} = require('../models/works')
const BASE_URL = process.env.BASE_URL; 

const getworks = async (req, res) => { 
    try{
        const works = await getAllWork();
        const imageUrl = works.map(work=>{
            let imageArray=[]
            try{
                imageArray = JSON.parse(work.image||[])
            } catch {
                imageArray = [];
            }
            return{
                ...work,
                imageUrl:imageArray.map(photoname=>`${BASE_URL}/images/${photoname}`)
            }
        })
        res.json(imageUrl);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}

const getidwork = async (req, res) => { 
    try{
        const id=req.params.id
        console.log("req.params.id",id)
        const work = await getWorkById(id);
        console.log("works",work)
        if (!work) return res.status(404).json({ error: 'Work not found' });
        
        let imageArray = [];
        
        try {
            imageArray = JSON.parse(work.image || '[]');
        } catch {
            imageArray = [];
        }
        work.imageUrl = imageArray.map(photoname => `${BASE_URL}/images/${photoname}`);
        
        res.json(work);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}
const updateWork = async (req, res) => {
    try{
        await updateWorks(req.body);
        res.json({success: true, message: '更新成功' })

    }catch(err){
         res.status(500).json({success: false, message: '更新失敗'});
    }

 }

const delWork = async (req, res) => {
    try{
        const id= req.body.id
        await deleteWorks(id);
        return res.json({ success: true, message: '刪除成功'});
    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }

 }

const createWork = async (req, res) => {
    try{
        const newItem = await createWorks(req.body);
        res.json({ success: true, message: '更新成功',id: newItem.insertId });
    }catch(err){
        console.error(err);
        res.status(500).json({ success: false, message: '新增失敗' });
    }
 }



module.exports = {getworks,getidwork,updateWork, delWork, createWork}