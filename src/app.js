const express = require("express");
const locationRoutes = require("./routes/locationRoutes");

const app = express();

app.use(express.json());

app.use("/api", locationRoutes);

module.exports = app;