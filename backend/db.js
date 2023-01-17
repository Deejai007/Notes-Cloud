const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://ronaldo:UxU6ZnxOtOgnF7Pg@cluster0.wqfcdio.mongodb.net/test";
mongoose.set("strictQuery", true);
const connectToMongo = () => {
  mongoose.connect(mongoURI, () => {
    console.log("~~~~~~ Connected to mongo");
  });
};
module.exports = connectToMongo;
// "mongodb+srv://ronaldo:UxU6ZnxOtOgnF7Pg@cluster0.wqfcdio.mongodb.net/test";
