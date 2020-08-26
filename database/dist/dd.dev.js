"use strict";

var mongoose = require("mongoose");

var connectDB = function connectDB() {
  return regeneratorRuntime.async(function connectDB$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(mongoose.connect("mongodb+srv://petkiosklive-user:<foewF2u49eOvsgbv>@pet-kiosk-live-mernstac.hquwb.mongodb.net/<dbname>?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true
          }));

        case 3:
          console.log("Database connection success");
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          console.log(_context.t0);

        case 9:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

module["export"] = connectDB;