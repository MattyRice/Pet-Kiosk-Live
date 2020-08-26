"use strict";

var express = require("express");

var app = express();

var cors = require("cors");

var morgan = require("morgan");

var connectDB = require("./database/db"); //middleware


app.use(coors());
connectDB();
var port = process.env.PORT || 5000;
app.listen(port, function () {
  return console.log("Listening on port ".concat(port));
});