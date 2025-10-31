// 連線至local MySQL Client.js
const mysql = require('mysql2/promise')
const {dbConfig}=require('./config');

const pool = mysql.createPool({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.database,
  port: dbConfig.port,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

(async () => {
  try {
    const connection = await pool.getConnection();
    console.log('✅ MySQL connected successfully!');
    connection.release(); // 記得釋放連線
  } catch (err) {
    console.error('❌ MySQL connection failed:', err.message);
  }
})();

module.exports = pool;

// 連線至GCP SQL 方式
// const mysql = require('mysql2/promise');
// const config = require('./config');


// let pool; // 連線池物件

// async function connectDB() {
//   if (!pool) {
//     pool = mysql.createPool({
//       host: config.db.host,
//       port: config.db.port,
//       user: config.db.user,
//       password: config.db.password,
//       database: config.db.database,
//       waitForConnections: true,
//       connectionLimit: 10,
//     });
//     console.log('✅ MySQL pool created');
//   }
//   return pool; // 回傳 pool 給 controller 使用
// }

// module.exports = { connectDB };