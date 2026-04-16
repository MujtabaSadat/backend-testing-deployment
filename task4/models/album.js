const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema({
  artist: String,
  title: String,
  year: Number,
  genre: String,
  tracks: Number,
});

// ✅ FIX: prevent model overwrite error
const Album = mongoose.models.Album || mongoose.model("Album", albumSchema);

module.exports = Album;
