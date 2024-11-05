const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://solarluiso:tFPMT9jDn0sLUqb2@cluster0.uucrx.mongodb.net/"
    );
    console.log("Mongodb has connected successfully!");
  } catch (error) {
    console.error("Mongodb connection failed", error);
    process.exit(1);
  }
};

module.exports = connectToDB;
