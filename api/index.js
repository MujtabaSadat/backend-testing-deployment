const express = require("express");
const app = express();
const albumRoutes = require("./routes/albumRoutes");
// Middleware
app.use(express.json());

// Health check / default route
app.use("/albums", albumRoutes);
app.get("/", (req, res) => {
  res.status(200).send("Hello World");
});

// Optional test route
app.get("/api", (req, res) => {
  res.json({ message: "API is working" });
});

// IMPORTANT: export app for Vercel
module.exports = app;
