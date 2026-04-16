const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://mujtabasadat35_db_user:56bb8RP9_A_ZS8Y@cluster0.y4s6xu3.mongodb.net/backend_database?retryWrites=true&w=majority";

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null };
}

const connectDB = async () => {
  if (cached.conn) return cached.conn;

  try {
    cached.conn = await mongoose.connect(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB connected");

    return cached.conn;
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
};

module.exports = connectDB;
