const express = require("express");
const connectDB = require("./db");

const albumRoutes = require("../routes/album");

const app = express();

app.use(express.json());

// safe async init (DO NOT crash function)
connectDB().catch((err) => {
  console.error("DB init failed:", err.message);
});

// routes
app.use("/albums", albumRoutes);

// hello world
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
