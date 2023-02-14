const mongoose = require("mongoose");

require("dotenv").config();

const mongoURL = process.env.DB;

const connectToMongo = () => {
  mongoose.set("strictQuery", true);

  mongoose.connect(mongoURL, () => {
    console.log("~~~~~Connected to MONGO!");
  });
};
module.exports = connectToMongo;
