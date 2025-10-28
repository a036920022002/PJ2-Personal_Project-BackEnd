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



module.exports = { getAllWork, getWorkById };