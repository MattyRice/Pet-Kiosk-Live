const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://petkiosklive-user:foewF2u49eOvsgbv@pet-kiosk-live-mernstac.hquwb.mongodb.net/Pet-Kiosk-Live-MERNstack?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );

    console.log("Database connection success");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
