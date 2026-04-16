const app = require("../app");
const albumRoutes = require("./routes/album");

app.use("/albums", albumRoutes);

module.exports = app;
