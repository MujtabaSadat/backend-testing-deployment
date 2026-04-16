// db.js
const mongoose = require("mongoose");

const MONGODB_URI =
  "mongodb+srv://mujtabasadat35_db_user:56bb8RP9_A_ZS8Y@cluster0.y4s6xu3.mongodb.net/backend_database?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose
  .connect(MONGODB_URI) // <- no extra options needed
  .then(async () => {
    console.log("Connected to MongoDB");

    // List all collections in the database
    const collections = await mongoose.connection.db
      .listCollections()
      .toArray();
    console.log("Collections in DB:");
    collections.forEach((c) => console.log(`- ${c.name}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));

module.exports = mongoose;
