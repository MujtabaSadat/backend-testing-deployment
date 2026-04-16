const express = require("express");
const albumRoutes = require("./routes/album");

const app = express();

app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// API routes
app.use("/albums", albumRoutes);

module.exports = app;
