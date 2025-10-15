const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

// const envFile = process.env.NODE_ENV === 'production' ? '.env.production' : '.env.local';
// dotenv.config({ path: path.resolve(__dirname, '..', envFile) });

const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  db: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT || 3306,
  }
};
// console.log('Config DB:', config.db);

module.exports = config;
