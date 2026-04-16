const mongoose = require("mongoose");
const app = require("../app");
const albumRoutes = require("../routes/album");

app.use("/albums", albumRoutes);

let isConnected = false;

async function connectToDatabase() {
  if (isConnected) return;

  await mongoose.connect(process.env.MONGO_URI);
  isConnected = true;
  console.log("MongoDB connected");
}

// connect once per cold start
connectToDatabase();

module.exports = app;
