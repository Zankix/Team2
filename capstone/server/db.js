const mysql = require('mysql');

const db = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: '76July20',
    database: 'fit_db',
});

module.exports = db;
