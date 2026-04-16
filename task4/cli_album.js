#!/usr/bin/env node
const mongoose = require("./db");
const yargs = require("yargs");
const { hideBin } = require("yargs/helpers");
const Album = require("./models/album");

const argv = yargs(hideBin(process.argv))
  .usage(
    "Usage: $0 --artist [string] --title [string] --year [num] --genre [string] --tracks [num]",
  )
  .option("artist", {
    type: "string",
    demandOption: true,
    describe: "Artist name",
  })
  .option("title", {
    type: "string",
    demandOption: true,
    describe: "Album title",
  })
  .option("year", {
    type: "number",
    demandOption: true,
    describe: "Release year",
  })
  .option("genre", {
    type: "string",
    demandOption: true,
    describe: "Genre of album",
  })
  .option("tracks", {
    type: "number",
    demandOption: true,
    describe: "Number of tracks",
  }).argv;

const main = async () => {
  try {
    const albumData = {
      artist: argv.artist,
      title: argv.title,
      year: argv.year,
      genre: argv.genre,
      tracks: argv.tracks,
    };

    const newAlbum = await Album.create(albumData);
    console.log("Album created successfully:");
    console.log(newAlbum.toJSON());
  } catch (err) {
    console.error("Error creating album:", err.message);
  } finally {
    mongoose.connection.close();
  }
};

main();
