import { describe, it, expect, beforeEach, beforeAll, afterAll } from "vitest";
import request from "supertest";
import mongoose from "mongoose";

import app from "../app.js";
import Album from "../models/album.js";
const MONGODB_URI =
  "mongodb+srv://mujtabasadat35_db_user:56bb8RP9_A_ZS8Y@cluster0.y4s6xu3.mongodb.net/backend_database?retryWrites=true&w=majority";

const testData = [
  { artist: "A", title: "One", year: 2000, genre: "Rock", tracks: 10 },
  { artist: "B", title: "Two", year: 2001, genre: "Pop", tracks: 8 },
];

describe("DELETE /api/albums", () => {
  beforeAll(async () => {
    await mongoose.connect(MONGODB_URI);
  });

  beforeEach(async () => {
    await Album.deleteMany({});
    await Album.insertMany(testData);
  });

  afterAll(async () => {
    await mongoose.connection.close();
    ``;
  });

  it("deletes an existing album and decreases count by 1", async () => {
    const albumToDelete = testData[0];

    // 1. Check initial count
    const initialAlbums = await Album.find({});
    const initialCount = initialAlbums.length;

    // 2. Send DELETE request
    const res = await request(app)
      .delete(`/albums/${albumToDelete._id}`) // ✅ your route
      .send();

    // 3. Check response
    expect(res.status).toBe(200);
    expect(res.body.artist).toBe(albumToDelete.artist);
    expect(res.body.title).toBe(albumToDelete.title);

    // 4. Check DB count decreased
    const finalAlbums = await Album.find({});
    expect(finalAlbums.length).toBe(initialCount - 1);
  });
});
