const { connectDB } = require('../config/db');

async function getAllWorkExperience() {
  const pool = await connectDB();
  const [rows] = await pool.query('SELECT * FROM workexperience');
  return rows;
}

module.exports = { getAllWorkExperience };