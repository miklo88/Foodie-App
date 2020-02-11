const express = require("express");
const bcrypt = require("bcryptjs");
const usersModel = require("../../database/helper_modules/users-model");
const { validateMiddleware } = require("../../middleware/validate");
const authModel = require("../../database/helper_modules/auth-model");
const generateToken = require("../../middleware/generateToken");

const router = express.Router();

// CREATE NEW USER POST
router.post("/register", async (req, res, next) => {
  try {
    const user = await usersModel.add(req.body);
    return res.status(201).json({ message: "welcome new created user", user });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// LOGIN POST
router.post("/login", validateMiddleware, async (req, res, next) => {
  try {
    let { email, password } = req.body;
    const user = await authModel.userAccount(email);
    const passwordValid = await bcrypt.compare(password, user.password);
    // if user and password are valid then user gets a token.
    console.log(passwordValid, user);
    if (user && passwordValid) {
      const token = generateToken(user);

      res.status(200).json({ message: `Bienvendidos ${user.email}!`, token });
    } else {
      res.status(401).json({
        error: "Invalid Credentials"
      });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
