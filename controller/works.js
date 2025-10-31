//以models 方式撰寫
const {getAllWork, getWorkById} = require('../models/works')
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



module.exports = {getworks,getidwork}