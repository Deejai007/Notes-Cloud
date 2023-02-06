const connectToMongo = require("./db");
let cors = require("cors");
connectToMongo();
const express = require("express");
require("dotenv").config();
const app = express();

const port = 5001;
app.use(cors());
app.use(express.json());
// Avialable Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`~~~~~~ listening on port ${port}`);
});
