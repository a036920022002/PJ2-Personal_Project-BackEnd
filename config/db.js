const mysql = require('mysql2/promise');
const config = require('./config');


let pool; // 連線池物件

async function connectDB() {
  if (!pool) {
    pool = mysql.createPool({
      host: config.db.host,
      port: config.db.port,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database,
      waitForConnections: true,
      connectionLimit: 10,
    });
    console.log('✅ MySQL pool created');
  }
  return pool; // 回傳 pool 給 controller 使用
}

module.exports = { connectDB };