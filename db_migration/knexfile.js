/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const db = require('../db.config');

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: 'Asticom',
      user: 'root',
      password: 'root',
      host: '127.0.0.1',
      port: 3306,
    },
    seeds: {
      directory: './seed',
    },
  },
};
