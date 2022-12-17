const connectToMongo = require("./db");

connectToMongo();
const express = require("express");
const app = express();
const port = 3000;
app.use(express.json());
// Avialable Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));
// app.get("/", (req, res) => {
// res.send("Hello Dude");
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
