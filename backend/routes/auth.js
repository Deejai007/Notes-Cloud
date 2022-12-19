const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");

const JWT_SECRET = "DeepakJainBoi";
//Create user using :POST "/api/auth"-Doesnt require Auth

router.post(
  "/",
  [
    body("email", "Enter a valid email").isEmail(),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    //If there are errors then return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    //Check whether the user with this email exists already
    let user = await User.findOne({ email: req.body.email });
    console.log("====================================");
    console.log(user);
    console.log("====================================");
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

    (user) => res.json(user);
    res.json({ authtoken });
  }
);
module.exports = router;
