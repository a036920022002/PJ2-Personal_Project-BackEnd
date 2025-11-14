//以models 方式撰寫
const {getAllWork, getWorkById, updateWorks, deleteWorks, createWorks, uploadWorks} = require('../models/works')
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
                imageUrl:imageArray.map(photoname=>`${BASE_URL}/images/works/${work.id}/${photoname}`)
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
        work.imageUrl = imageArray.map(photoname => `${BASE_URL}/images/works/${id}/${photoname}`);
        
        res.json(work);
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
}
const updateWork = async (req, res) => {
    try {
    console.log('🧩 接收到前端資料:', req.body);

    // 解析所有可能被 stringify 的欄位
    const parseJSON = (value) => {
      if (typeof value === 'string') {
        try {
          return JSON.parse(value);
        } catch {
          return value; // 若不是合法 JSON 就原樣返回
        }
      }
      return value;
    };

    const item = {
      ...req.body,
      frontEnd: parseJSON(req.body.frontEnd),
      backEnd: parseJSON(req.body.backEnd),
      tool: parseJSON(req.body.tool),
      function_name: parseJSON(req.body.function_name),
      gitHub_link: parseJSON(req.body.gitHub_link),
    };

    const result = await updateWorks(item);
    res.json({ success: true, result });
    }catch(err){
        console.error('❌ UPDATE WORKS ERROR:', err);
    res.status(500).json({
      error: 'Internal Server Error',
      message: err.message,
      stack: err.stack,
    });
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
        res.json({ success: true, message: '更新成功',id: newItem.id });
    }catch(err){
        console.error(err);
        res.status(500).json({ success: false, message: '新增失敗' });
    }
 }

 const uploadWorkphoto = async(req,res) => {
    try{
        const id= req.body.id
        
        if (!id) {
            return res.status(400).json({ success: false, message: '缺少作品 id' });
        }

        if (!req.files || req.files.length === 0) {
            return res.status(400).json({ success: false, message: '沒有上傳任何檔案' });
        }
        const filenames = req.files['files'].map(file => file.filename); 
        const result = await uploadWorks(filenames,id)
        const imageUrls = filenames.map(name => `${process.env.BASE_URL}/images/works/${id}/${name}`);
        return res.json({ success: true, message: '照片上傳成功',result, imageUrls });
    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
 }



module.exports = {getworks,getidwork,updateWork, delWork, createWork,uploadWorkphoto}