const db = require('../config/db')
const path = require('path');
const generateToken = require('../middleware/generateToken');
// const bcrypt = require('bcrypt')

const authlogin = async (req, res) => { 
    try{
        const { email, password} =req.body
        const [member] = await db.query('SELECT * FROM auth WHERE email = ?',[email])
        if(member.length===0){
            return res.status(401).json({message:"帳號不存在"})
        }
        console.log("member",member)
        const user = member[0]
        console.log("user",user)

        // 後續待加上bcrypt
        // const isMatch = await bcrypt.compare(password, member.password)
        // if(!isMatch){
        // return res.status(401).json({message:"密碼錯誤"}) 
        // }

        if(password !== user.password){
            return res.status(401).json({message:"密碼錯誤"})
        }

        const token = generateToken({id:user.id, email:user.email});
        const safeuser = {id:user.id, email:user.email, name:user.name};
        return res.status(200).json({
            message:"登入成功",
            token,
            user:safeuser
        })
    }catch(err){
        console.error('登入錯誤', err);
    res.status(500).json({ message: '伺服器錯誤' });
    }
}
const getAllAuth = async(req,res)=>{
    try{
        const [rows] = await db.query('SELECT * FROM auth');   
        const result = rows.map(row => ({
            ...row,}))
        res.json({ success: true, data: result });
    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
}

const createAccount = async(req,res)=>{
    try{
        const {email,password,name}=req.body
        console.log("req.body",req.body)
        if(!email&&!password){
           return res.status(401).json({message:"缺少email 或password"})
        }
        const sql = `INSERT INTO auth (email,password,name) values (?,?,?)`
        const values = [email, password, name];

        const [result] = await db.execute(sql, values);
        return res.json({ success: true, message: '更新成功',id: result.insertId });
    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}

const updateAccount = async(req,res)=>{
    try{
        const {email,password,name,id}=req.body
        console.log("update account req.body",req.body)
        const sql = `UPDATE auth 
        SET
        email = COALESCE(?, email),
        password = COALESCE(?, password),
        name = COALESCE(?, name)
        WHERE id=?`;

        const values =[email, password, name,id]
        const [result] = await db.execute(sql, values);
        console.log('updateaccount result',result)
        return res.json({ success: true, message: '更新成功' });

    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}

const deleteAccount = async(req,res)=>{
    console.log("req.body",req.params.id)
    try{
        const id = req.params.id;
        console.log("index",id)
        await db.execute(`DELETE FROM auth WHERE id=?`,[id]);
        return res.json({ success: true, message: '刪除成功'});
    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}

module.exports = {authlogin,getAllAuth,createAccount,updateAccount,deleteAccount};
