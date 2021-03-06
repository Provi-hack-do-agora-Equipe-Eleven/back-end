const knex = require('knex')({
  client: 'pg',
  connection: 
  // {
  //   connectionSring: `${process.env.DATABASE_URL}?ssl=true`,
  //   ssl: { rejectUnauthorized: false }
  // }
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    ssl: { rejectUnauthorized: false }
  }
});

module.exports = knex;