const express = require("express");
const path = require("path");
const { Pool } = require("pg");

const app = express();

// PostgreSQL Database Configuration
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

// ✅ API Routes
app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

// ✅ Serve React Build (Frontend)
const frontendPath = path.join(__dirname, "../build"); // Move up one level to find 'build'
app.use(express.static(frontendPath));

// ✅ Catch-all Route (Serve React `index.html`, exclude `/api/` calls)
app.get("*", (req, res) => {
  if (req.originalUrl.startsWith("/api/")) {
    return res.status(404).json({ error: "API route not found" });
  }
  res.sendFile(path.join(frontendPath, "index.html"));
});

// ✅ Start Server
const port = process.env.PORT || 10000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
