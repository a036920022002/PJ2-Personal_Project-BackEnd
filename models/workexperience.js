const  pool = require('../config/db');

async function getAllExp() {
  const [rows] = await pool.query('SELECT * FROM workexperience');
  return rows;
}

module.exports = { getAllExp };