const express = require("express");
const cors = require("cors");
const app = express();
const authRoute = require("./routes/auth");

module.exports = app;

app.use(cors());

app.use(express.json());

app.use("/api/v1/auth", authRoute)