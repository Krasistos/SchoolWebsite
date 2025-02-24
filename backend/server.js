const express = require("express");
const sequelize = require("./database");
const User = require("./models/User");

const app = express();
app.use(express.json());

// Test Route
app.get("/", (req, res) => res.send("API is running..."));

// Fetch All Users
app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.use(express.json()); // Ensure JSON body parsing

app.post("/users", async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const newUser = await User.create({ name, email, password, role });

    res.status(201).json({ message: "User created ✅", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error creating user ❌", error: error.message });
  }
});
// Sync DB and Start Server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connected to database ✅");
    await sequelize.sync({ alter: true });

    app.listen(3001, () => console.log("Server running on port 3001 🚀"));
  } catch (error) {
    console.error("Database connection failed ❌", error);
  }
};

startServer();
