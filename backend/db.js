const mongoose = require("mongoose");

// require("dotenv").config();

// const mongoURL = process.env.DB;
// console.log(mongoURL)
// console.log(mongoURL);
const connectToMongo = () => {
  mongoose.set("strictQuery", true);
  // mongoose.connect(
  //   "mongodb+srv://ronaldo:UxU6ZnxOtOgnF7Pg@cluster0.wqfcdio.mongodb.net/test",
  //   () => {
  //     console.log("~~~~~~ Connected to mongo");
  //   }
  // );
  mongoose.connect(
    "mongodb+srv://ronaldo:UxU6ZnxOtOgnF7Pg@cluster0.wqfcdio.mongodb.net/test",
    () => {
      console.log("Cum");
    }
  );
};
module.exports = connectToMongo;
