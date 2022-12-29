const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchUser");
const JWT_SECRET = "DeepakJainBoi";
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ROUTE 1:
//Create user using :POST "/api/auth"-Doesnt require Auth
router.post(
  "/createuser",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    let success = false;
    //If there are errors then return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      //Check whether the user with this email exists already
      let user = await User.findOne({ email: req.body.email });

      // console.log(user);

      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with same email already exists" });
      }

      // Hashing the password;
      const salt = await bcrypt.genSalt(10);
      const hashedPass = await bcrypt.hash(req.body.password, salt);

      // Create new user
      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPass,
      });
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      success = true;
      (user) => res.json(user);
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Some Error occured(Internal server error)");
    }
  }
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ROUTE 2:
// Authenticate a User using POST "/api/auth/login".-No login required
router.post(
  "/login",
  [
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password Cannot be blank!").exists(),
  ],
  async (req, res) => {
    let success = false;
    // Check for errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // cred from client
    const { email, password } = req.body;
    try {
      // Check  if user email exists
      let user = await User.findOne({ email });
      if (!user) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please check your credentials" });
      }
      // compare given password from that one in DB
      const passwordCompare = await bcrypt.compare(password, user.password);
      // if password is incorrect
      if (!passwordCompare) {
        success = false;
        return res
          .status(400)
          .json({ success, error: "Please check your credentials" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const authtoken = jwt.sign(data, JWT_SECRET);

      // (user) => res.json(user);
      success = true;
      res.json({ success, authtoken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal server error!");
    }
  }
);
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Route 3:
// Geet loggedin User Details using POST "/api/auth/getuser".-Login REQUIRED
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    // res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal server error!");
  }
});
module.exports = router;
