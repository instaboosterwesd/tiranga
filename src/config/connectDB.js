const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: process.env.DATABASE_HOST || process.env.MYSQLHOST || '127.0.0.1',
    port: Number(process.env.DATABASE_PORT || process.env.MYSQLPORT || 3306),
    user: process.env.DATABASE_USER || process.env.MYSQLUSER,
    password: process.env.DATABASE_PASSWORD || process.env.MYSQLPASSWORD,
    database: process.env.DATABASE_NAME || process.env.MYSQLDATABASE,
});

export default connection;
