const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    const authHeader = req.headers['authorization']; // 先將傳送過來的資料單獨取出authorization 這個欄位
    //通常authorization 包含 Bearer + <JWT_TOKEN>，需要先取得Token     
     
     if (!authHeader || !authHeader.startsWith('Bearer ')) {
         // 沒帶 token 或格式錯誤 → 將使用者設為訪客
        req.user = null;
        console.log('未取得 Authorization'); 
        return res.status(401).json({ message: '未取得 Authorization token' });
        }
    //拆出真正的 JWT token（去掉 Bearer 前綴）
    const token = authHeader.split(' ')[1];
    try{
        req.user = jwt.verify(token, process.env.JWT_SECRET);
        //驗證token
        next();
    }catch(err){
        console.log('JWT 無效或過期', err.message);
        return res.status(401).json({ message: '請重新登入' });
    }
}


module.exports = verifyToken;