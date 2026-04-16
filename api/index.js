const express = require("express");
const app = express();

// Middleware
app.use(express.json());

// Health check / default route
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Optional test route
app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});

// IMPORTANT: export app for Vercel
module.exports = app;
