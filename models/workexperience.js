const  pool = require('../config/db');

async function getAllExp() {
  const [rows] = await pool.query('SELECT * FROM workexperience');
  return rows;
}

async function updateExp(item){
  const sql = `
        UPDATE workexperience 
        SET 
        company = COALESCE(?, company),
        companyENG = COALESCE(?, companyENG),
        companyType = COALESCE(?, companyType),
        location = COALESCE(?, location),
        yearInService = COALESCE(?, yearInService),
        tenure = COALESCE(?, tenure),
        jobPosition = COALESCE(?, jobPosition),
        jobPositionEng = COALESCE(?, jobPositionEng),
        descript = COALESCE(?, descript),
        descriptEng = COALESCE(?, descriptEng)
        WHERE id = ?
        `;
  const values = [ 
    item.company, 
    item.companyENG, 
    item.companyType, 
    item.location, 
    item.yearInService, 
    item.tenure, 
    item.jobPosition, 
    item.jobPositionEng,
    JSON.stringify(item.descript.split('\n')),
    JSON.stringify(item.descriptEng.split('\n')),
    item.id
  ];
  const [rows] = await pool.query(sql, values);
  return rows;
}

async function createExp(item){
  const sql = `
        INSERT INTO workexperience 
        (company,
        companyENG, 
        companyType, 
        location, 
        yearInService, 
        tenure, 
        jobPosition, 
        jobPositionEng, 
        descript, 
        descriptEng) VALUES (?,?,?,?,?,?,?,?,?,?)
        `;
  const values = [ 
    item.company, 
    item.companyENG, 
    item.companyType, 
    item.location, 
    item.yearInService, 
    item.tenure, 
    item.jobPosition, 
    item.jobPositionEng,
    JSON.stringify(item.descript.split('\n')),
    JSON.stringify(item.descriptEng.split('\n')),
  ];
  const [rows] = await pool.query(sql, values);
  return { ...item, id: rows.insertId };

}

async function deleteExp(id){
  const sql = 'DELETE FROM workexperience WHERE id = ?';
  const [rows] = await pool.query(sql, [id]);
  return rows;
}

module.exports = { getAllExp,updateExp,createExp,deleteExp };