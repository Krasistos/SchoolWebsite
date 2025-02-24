const express = require("express");
const sequelize = require("./config/database"); // Updated path
const User = require("./models/User");

const app = express();
app.use(express.json());

app.get("/", (req, res) => res.send("API is running..."));

app.get("/users", async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post("/users", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

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
