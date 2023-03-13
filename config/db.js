const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    await mongoose.connect(
      "mongodb+srv://" + process.env.DB_USER_PASS +"@cluster0.zp5qezl.mongodb.net/Person"
    );
    console.log("database is connected");
  } catch (error) {
    console.log("database is not connected");
  }
};
module.exports = connectDB;