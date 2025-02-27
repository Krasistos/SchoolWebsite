const sequelize = require("./database"); // Now pointing to config/database.js
const User = require("../models/User");  // Adjusted path for models

const syncDatabase = async () => {
  try {
    await sequelize.authenticate(); // Test connection
    console.log("Connected to database ✅");

    await sequelize.sync({ alter: true }); // Auto-sync tables
    console.log("Tables created/updated ✅");

    process.exit(); // Exit after execution
  } catch (error) {
    console.error("Error syncing database ❌", error);
  }
};

syncDatabase();
