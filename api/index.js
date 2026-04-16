const express = require("express");
const connectDB = require("./db");

const albumRoutes = require("./routes/album");

const app = express();

app.use(express.json());

// connect DB (async safe)
connectDB();

// routes
app.use("/albums", albumRoutes);

// hello world
app.get("/", (req, res) => {
  res.send("Hello World");
});

module.exports = app;
