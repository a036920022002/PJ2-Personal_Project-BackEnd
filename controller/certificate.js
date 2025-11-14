const multer = require('multer');
const BASE_URL = process.env.BASE_URL; 
const {getcertificate,updatecertificate, deletecertificate, createcertificate,uploadphoto} = require('../models/certificate')

const getAllcertificate = async (req, res) => {
    try{
        const certificate = await getcertificate();
        let certificatedata = certificate.map(cer=>({
            ...cer,
            photoUrl:`${BASE_URL}/images/certificate/${cer.photo}`
        }))
        return res.json({success: true,data: certificatedata});

    }catch(err){
        console.error('❌ getcertificate ERROR:', err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}

const createcertificatebyId = async (req, res) => {
    try{
        const certificate = await createcertificate(req.body);
        res.json({ success: true, message: '新增成功',id: certificate.id });
    }catch(err){
        console.error('❌ createcertificate ERROR:', err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}

const updatecertificatebyId = async (req, res) => {
    try{
        const {
            id,
            name,
            issuing_authority,
        }=req.body
        const item = req.body
        await updatecertificate(item);
        res.json({ success: true,message: '更新成功' })

    }catch(err){
        console.error('❌ updatecertificate ERROR:', err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}


const deletecertificatebyId = async (req, res) => {
    try{
        const id = req.body.id
        await deletecertificate(id);
        return res.json({ success: true, message: '刪除成功'});
    }catch(err){
        console.error('❌ deletecertificate ERROR:', err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}
const uploadcertificate = async (req, res) => {
    try{
        const id= req.params.id
        if (!id) {
            return res.status(400).json({ success: false, message: '缺少作品 id' });
        }
        if (!req.file) {
            return res.status(400).json({ success: false, message: '沒有上傳任何檔案' });
        }
        const filename = req.file.filename; 
        const result = await uploadphoto(filename,id)
        const photoUrl = `${process.env.BASE_URL}/images/certificate/${filename}`;
        return res.json({ success: true, message: '照片上傳成功',result, photoUrl });
    }catch(err){
        console.error('❌ uploadcertificate ERROR:', err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}


module.exports = {getAllcertificate,createcertificatebyId,updatecertificatebyId,deletecertificatebyId,uploadcertificate}