const mongoose = require("mongoose");
const app = require("../app");

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.MONGO_URI);
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("DB error:", err);
  }
}

connectDB();

module.exports = app;
