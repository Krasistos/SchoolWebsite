require("dotenv").config({ path: "../.env" });
const express = require("express");
const { Pool } = require("pg");

const app = express();
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: { rejectUnauthorized: false },
});

// Middleware to parse JSON
app.use(express.json());

// ✅ API Route (Make sure this comes before `app.use(express.static("build"))`)
app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server Error");
  }
});

// ❗ Move this **after** defining API routes
app.use(express.static("build"));

// Handle React frontend routes
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/build/index.html");
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
