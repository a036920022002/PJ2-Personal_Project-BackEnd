const  pool = require('../config/db');

async function getcertificate(){
    const [rows] = await pool.query('SELECT * FROM certificate');
    return rows;
}

async function updatecertificate(item){
    const sql = `
    UPDATE certificate 
    SET
    name = COALESCE(?, name),
    issuing_authority = COALESCE(?, issuing_authority)
    WHERE id = ?
    `;
    const values = [ 
    item.name, 
    item.issuing_authority,
    item.id
    ];
    const [rows] = await pool.query(sql, values);
    return rows;
}

async function deletecertificate(id){
    const sql = 'DELETE FROM certificate WHERE id = ?';
    const [rows] = await pool.query(sql, [id]);
    return rows;
}
async function createcertificate(item){
    const sql = `
    INSERT INTO certificate 
    (name, issuing_authority) VALUES (?,?)
    `;
    const values = [ 
    item.name, 
    item.issuing_authority,
    ];
    
    const [rows] = await pool.query(sql, values);
    return { ...item, id: rows.insertId };
}


async function uploadphoto(filename,id){
  try{
    const sql=`
    UPDATE certificate SET photo = ? WHERE id=?`
    const values = [filename ,id]
    const [result] = await pool.query(sql,values);
    return result;
  }catch(err){
    console.error('uploadWorks error:', err);
    throw err;
  }
}

module.exports = { getcertificate,updatecertificate,deletecertificate,createcertificate,uploadphoto}