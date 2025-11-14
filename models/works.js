const  pool = require('../config/db');

async function getAllWork() {
  const [rows] = await pool.query('SELECT * FROM works');
  
  return rows;
}

async function getWorkById(id) {
  const [rows] = await pool.query(`SELECT * FROM works Where id = ?`,[id]);
  if (rows.length === 0) return null;
  const work = rows[0];
  return work;
}

async function updateWorks(item) {
  const sql = `
  UPDATE works 
  SET 
  name = COALESCE(?, name),
  descript = COALESCE(?, descript),
  frontEnd = COALESCE(?, frontEnd),
  backEnd = COALESCE(?, backEnd),
  database_name = COALESCE(?, database_name),
  tool = COALESCE(?, tool),
  function_name = COALESCE(?, function_name),
  gitHub_link = COALESCE(?, gitHub_link),
  page_link = COALESCE(?, page_link),
  item_label = COALESCE(?, item_label)
  WHERE id = ?
  `;
  const values = [ 
  item.name, 
  item.descript, 
  JSON.stringify(item.frontEnd || []),
  JSON.stringify(item.backEnd || []),      
  item.database_name,
  JSON.stringify(item.tool || []),
  JSON.stringify(item.function_name || []),
  JSON.stringify(item.gitHub_link || []),  
  item.page_link,
  item.item_label,
  item.id
];
  const [rows] = await pool.query(sql, values);
  return rows;
}

async function deleteWorks(id){
  const sql = 'DELETE FROM works WHERE id = ?';
  const [rows] = await pool.query(sql, [id]);
  return rows;
}

async function createWorks(item){
  const sql = `
    INSERT INTO works 
    (name, descript, frontEnd, backEnd, database_name, tool, function_name, gitHub_link,page_link, item_label) VALUES (?,?,?,?,?,?,?,?,?,?)
    `;
  
  const values = [ 
    item.name, 
    item.descript, 
    JSON.stringify(item.frontEnd),
    JSON.stringify(item.backEnd),
    item.database_name,
    JSON.stringify(item.tool),
    JSON.stringify(item.function_name), 
    JSON.stringify(item.gitHub_link), 
    item.page_link,
    item.item_label,
  ];

  const [rows] = await pool.query(sql, values);
  return { ...item, id: rows.insertId };
}

async function uploadWorks(filenames,id){
  try{
    const sql=`
    UPDATE works SET image = ? WHERE id=?`
    const values = [JSON.stringify(filenames) ,id]
    const [result] = await pool.query(sql,values);
    return result
  }catch(err){
    console.error('uploadWorks error:', err);
    throw err;
  }
}




module.exports = { getAllWork, getWorkById, updateWorks, deleteWorks, createWorks,uploadWorks };