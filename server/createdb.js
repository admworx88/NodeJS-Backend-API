const mysql = require('mysql');

const conn = mysql.createConnection({
  connectionLimit: 10,
  password: 'root',
  user: 'root',
  host: 'localhost',
  port: '3306',
});

let sql = 'CREATE DATABASE Asticom';
conn.query(sql, (err) => {
  if (err) {
    throw err;
  }
  console.log('Database created...');
  console.log('Please exit the program...');
});
