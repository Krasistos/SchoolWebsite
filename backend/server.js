// Load environment variables from .env file
require("dotenv").config({ path: "../.env" });

const express = require("express");
const { Pool } = require("pg");

// Set up the PostgreSQL connection pool
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

// Test the database connection and query for users
pool.connect()
  .then(client => {
    return client.query("SELECT * FROM users")  // Example query to fetch users
      .then(res => {
        console.log("Users in database:", res.rows);
        client.release();  // Release the client back into the pool
      })
      .catch(err => {
        console.error("Query failed:", err);
        client.release();  // Always release the client
      });
  })
  .catch(err => console.error("Database connection error:", err));

// Initialize Express app
const app = express();

// Example API route to fetch users from the database
app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows); // Send the result as JSON
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server Error");
  }
});

// Set up the server to listen on the correct port from the .env file
const port = process.env.BACKEND_PORT || 5000;  // Use BACKEND_PORT from .env
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
