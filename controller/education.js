//先以不建立models 方式寫

const db = require('../config/db')

const education = async (req, res) => { 
    try {
        const [rows] = await db.query('SELECT * FROM education');   
        const result = rows.map(row => ({
            ...row,
        }));
        res.json({ success: true, data: result });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

const updateeducation = async (req,res)=>{

    try{
        const {
            id,
            school,
            schoolEng,
            department,
            departmentEng,
            degree,
            degreeEng,
            periodOfStudytime
        } = req.body;
        console.log("req.body",req.body)

        const sql = `
        UPDATE education
        SET 
        school = COALESCE(?, school),
        schoolEng = COALESCE(?, schoolEng),
        department = COALESCE(?, department),
        departmentEng = COALESCE(?, departmentEng),
        degree = COALESCE(?, degree),
        degreeEng = COALESCE(?, degreeEng),
        periodOfStudytime = COALESCE(?, periodOfStudytime)
        WHERE id = ?
        `;

        const values = [ school, schoolEng, department, departmentEng, degree, degreeEng, periodOfStudytime, id];

        const [result] = await db.execute(sql, values);

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: '找不到資料' });
        }

        return res.json({ success: true, message: '更新成功' });
    }
    catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
        }
}
const createeducation = async (req,res)=>{
    try{
        const {
            id,
            school,
            schoolEng,
            department,
            departmentEng,
            degree,
            degreeEng,
            periodOfStudytime
        } = req.body;
    if (!school || !degree) {
      return res.status(400).json({
        success: false,
        message: '缺少必要欄位（例如 school 或 degree）'
      });
    }

    const sql = `
        INSERT INTO education
        (school, schoolEng, department, departmentEng, degree, degreeEng, periodOfStudytime) VALUES (?,?,?,?,?,?,?)
        `;
    const values = [ school, schoolEng, department, departmentEng, degree, degreeEng, periodOfStudytime];

    const [result] = await db.execute(sql, values);
    return res.json({ success: true, message: '更新成功',id: result.insertId });
    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}

const deleteeducation = async (req,res)=>{
    
    console.log("req.body",req.body.id)
    
    try{
        const id = req.body.id
        console.log("index",id)
        await db.execute(`DELETE FROM education WHERE id=?`,[id]);
        return res.json({ success: true, message: '刪除成功'});
    }catch(err){
        console.error(err);
        return res.status(500).json({ success: false, message: '伺服器錯誤' });
    }
}


module.exports = {education, updateeducation, createeducation,deleteeducation};