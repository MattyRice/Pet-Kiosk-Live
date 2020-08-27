"use strict";

var express = require("express");

var app = express();

var cors = require("cors");

var morgan = require("morgan");

var connectDB = require("./database/db");

var authRoutes = require("./routes/auth"); //middleware


app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/auth/", authRoutes);
connectDB();
app.get("/", function (req, res) {
  res.send("inside server");
});
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});