const app = require("../app");
const albumRoutes = require("../routes/album");
const serverless = require("serverless-http");
app.use("/albums", albumRoutes);

// MongoDB connection (reuse existing connection)
let isConnected = false;

async function connectToDatabase() {
  if (isConnected) {
    return;
  }

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
}

// Wrap all routes with DB connection
app.use(async (req, res, next) => {
  try {
    await connectToDatabase();
    next();
  } catch (err) {
    res.status(500).json({ error: "Database connection failed" });
  }
});

module.exports = app;
module.exports.handler = serverless(app);
