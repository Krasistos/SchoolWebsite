const express = require("express");
const path = require("path");
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

// Example API Route
app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.json(result.rows);  // Send the result as JSON
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).send("Server Error");
  }
});

// Serve React Build (Frontend)
const frontendPath = path.join(__dirname, "../build"); // Move one level up

app.use(express.static(frontendPath));  // Serve the static files in build/

// Catch-all for React to handle routing
app.get("*", (req, res) => {
  // If it's not an API route, serve the React index.html
  if (req.originalUrl.startsWith("/api/")) {
    return res.status(404).json({ error: "API route not found" });
  }
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`✅ Server running on port ${port}`));
