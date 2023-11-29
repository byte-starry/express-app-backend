const { Pool } = require('pg');

const pool = new Pool({
  user: 'shamita',
  password: 'abcd1234',
  host: 'localhost',
  port: 5432, // default Postgres port
  database: 'movies'
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};

