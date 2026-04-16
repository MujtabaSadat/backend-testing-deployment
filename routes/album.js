const express = require("express");
const router = express.Router();
const Album = require("../models/album");

// GET all albums
router.get("/", async (req, res) => {
  try {
    const albums = await Album.find({}).exec();
    res.json(albums);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET album by ID
router.get("/:id", async (req, res) => {
  try {
    const album = await Album.findById(req.params.id).exec();
    if (!album) return res.status(404).json({ error: "Album not found" });
    res.json(album);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST a new album
router.post("/", async (req, res) => {
  try {
    const newAlbum = await Album.create(req.body);
    res.status(201).json(newAlbum);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// PUT / PATCH update album
router.put("/:id", async (req, res) => {
  try {
    const updatedAlbum = await Album.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true },
    ).exec();
    if (!updatedAlbum)
      return res.status(404).json({ error: "Album not found" });
    res.json(updatedAlbum);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE an album
router.delete("/:id", async (req, res) => {
  try {
    const deletedAlbum = await Album.findByIdAndDelete(req.params.id).exec();
    if (!deletedAlbum)
      return res.status(404).json({ error: "Album not found" });
    res.json({ message: "Album deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
