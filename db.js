const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://mujtabasadat35_db_user:56bb8RP9_A_ZS8Y@cluster0.y4s6xu3.mongodb.net/backend_database?retryWrites=true&w=majority";

let isConnected = false;

// ✅ async function
const connectDB = async () => {
  if (isConnected) {
    return mongoose;
  }

  try {
    await mongoose.connect(MONGODB_URI);

    isConnected = true;
    console.log("Connected to MongoDB");

    // Optional: list collections (debug only)
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();

    console.log("Collections in DB:");
    collections.forEach((c) => console.log(`- ${c.name}`));

    return mongoose;
  } catch (err) {
    console.error("MongoDB connection error:", err);
    throw err;
  }
};

module.exports = connectDB;
