const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //DON'T EXPOSE URI
    await mongoose.connect(
      "mongodb+srv://petkiosklive-user:foewF2u49e0vsgbv@pet-kiosk-live-mernstac.hquwb.mongodb.net/Pet-Kiosk-Live-MERNstack?retryWrites=true&w=majority",
      {
        useNreURLParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database connection success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
