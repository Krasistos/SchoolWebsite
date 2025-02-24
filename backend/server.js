require("dotenv").config({ path: "../.env" });
const { Pool } = require("pg");

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST, // Make sure this is NOT "localhost"
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: false, // Render requires SSL connections
  },
});

pool.connect()
  .then(client => {
    return client.query(`
      SELECT * 
      FROM users
    `)  // Query for all table names
      .then(res => {
        console.log("rows in the users:", res.rows.length);
        client.release();  // Release client back to pool
      })
      .catch(err => {
        client.release();
        console.error("Query failed:", err);
      });
  })
  .catch((err) => console.error("Database connection error:", err));

module.exports = pool;
