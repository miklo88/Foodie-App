const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
const restricted = require("../../middleware/restricted");
const usersModel = require("../../database/helper_modules/users-model");
const secrets = require("../../config/secrets");

const router = express.Router();

// CREATE NEW USER
router.post("/register", async (req, res, next) => {
  try {
    const saved = await usersModel.add(req.body);

    res.status(201).json(saved);
  } catch (err) {
    res.status(404).json({ message: "cannot register" });
  }
});

// LOGIN
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await usersModel.findBy({ email }).first();
    // since bcrypt hashes generate different results due to the salting,
    // we rely on the magic internals to compare hashes (rather than doing
    // it manulally by re-hashing and comparing)
    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      const token = jwt.sign(
        {
          subject: user.id,
          username: user.firstName
        },
        secrets.jwt,
        {
          expiresIn: "7d"
        }
      );

      res.status(200).json({
        message: `Welcome ${user.firstName}!`,
        token: token
      });
    } else {
      res.status(401).json({
        message: "Invalid Credentials"
      });
    }
  } catch (err) {
    next(err);
  }
});

router.get("/protected", restricted(), async (req, res, next) => {
  try {
    res.json({
      message: "You are authorized",
      userId: req.userId
    });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
