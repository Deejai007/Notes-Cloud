const jwt = require("jsonwebtoken");
const JWT_SECRET = "DeepakJainBoi";

const fetchuser = (req, res, next) => {
  // Get user from JWT token and append id to req object
  const token = req.header("auth-token");
  //   console.log("!!", token);
  if (!token) {
    res.status(401).send({ error: "1Please auth using valid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    console.log(data);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "2Please auth using valid token" });
  }
};
module.exports = fetchuser;
