// app.js
const express = require("express");
require("./db");
const albumRoutes = require("./routes/album");

const app = express();
app.use(express.json());

app.use("/albums", albumRoutes);

const PORT = process.env.PORT || 3000;
if (process.env.NODE_ENV !== "test") {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}
module.exports = app;
