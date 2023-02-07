const mongoose = require("mongoose");

require("dotenv").config();

const mongoURI = process.env.DB;
mongoose.set("strictQuery", true);
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("~~~~~~ Connected to mongo");
  });
};
module.exports = connectToMongo;
