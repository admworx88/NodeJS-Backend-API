const mysql = require('mysql');
const { param } = require('../routes');

const conn = mysql.createPool({
  connectionLimit: 10,
  password: 'root',
  user: 'root',
  database: 'Asticom',
  host: 'localhost',
  port: 3306,
});

let dbcrudapi = {};

dbcrudapi.all = () => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM Users`, (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
};

dbcrudapi.one = (id) => {
  return new Promise((resolve, reject) => {
    conn.query(`SELECT * FROM Users WHERE id=?`, [id], (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
};
dbcrudapi.login = (username, password) => {
  return new Promise((resolve, reject) => {
    conn.query(
      `SELECT username, password FROM Users WHERE username=? and password=?`,
      [username, password],
      (err, res) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(res);
        }
      }
    );
  });
};
dbcrudapi.edit = (param, id) => {
  return new Promise((resolve, reject) => {
    let query =
      'Update Users set first_name=?, last_name=?, address=?, post_code=?,phone_number=?, email=?,username=?,password=? where id=? ';
    conn.query(
      query,
      [
        param.first_name,
        param.last_name,
        param.address,
        param.post_code,
        param.phone_number,
        param.email,
        param.username,
        param.password,
        id,
      ],
      (err, res) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(res);
        }
      }
    );
  });
};
dbcrudapi.add = (param) => {
  return new Promise((resolve, reject) => {
    let query =
      'Insert into Users (first_name, last_name, address, post_code,phone_number, email,username,password) Values(?,?,?,?,?,?,?,?) ';
    conn.query(
      query,
      [
        param.first_name,
        param.last_name,
        param.address,
        param.post_code,
        param.phone_number,
        param.email,
        param.username,
        param.password,
      ],
      (err, res) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(res);
        }
      }
    );
  });
};

dbcrudapi.delete = (id) => {
  return new Promise((resolve, reject) => {
    conn.query(`Delete FROM Users WHERE id=?`, [id], (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
};
dbcrudapi.bulkdelete = (id) => {
  return new Promise((resolve, reject) => {
    conn.query(`Delete FROM Users WHERE id=?`, [id], (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
};
module.exports = dbcrudapi;
