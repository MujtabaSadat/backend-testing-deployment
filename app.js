const express = require("express");
const albumRoutes = require("./routes/album");
const connectDB = require("./db");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());
connectDB();
app.use(express.json());

// Home route
app.get("/", (req, res) => {
  res.send("Hello World");
});

// API routes
app.use("/albums", albumRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
