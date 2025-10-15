const mysql = require('mysql2/promise');
const config = require('./config');


let pool; // 連線池物件

const connectDB = async () => {
    // console.log('Connecting to MySQL at', config.db.host, config.db.port);
  try {
    // 建立連線池
    pool = mysql.createPool({
      host: config.db.host,
      user: config.db.user,
      password: config.db.password,
      database: config.db.database,
      port: config.db.port,
      waitForConnections: true,  // 等待連線釋放
      connectionLimit: 10,       // 最大同時連線數
      queueLimit: 0,            // 無限排隊
    });

    // 測試連線是否成功
    const connection = await pool.getConnection();
    
    const [userResult] = await connection.query('SELECT USER()');
    const [currentUserResult] = await connection.query('SELECT CURRENT_USER()');

    console.log('✅ 成功連接 MySQL 資料庫');
    
    connection.release(); // 用完立即釋放
  } catch (err) {
    console.error('❌ MySQL 連線失敗：', err.message);
    process.exit(1);
  }
  


};

module.exports = { connectDB, pool };