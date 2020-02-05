const bcrypt = require("bcryptjs");
const express = require("express");
const usersModel = require("../../database/helper_modules/users-model");
const authentication = require("../../database/helper_modules/auth-model");
const generateToken = require("../../middleware/generateToken");

const router = express.Router();

// CREATE NEW USER
router.post("/register", async (req, res, next) => {
  try {
    const user = await usersModel.add(req.body);
    res.status(201).json({ user, message: "welcome new user" });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// LOGIN
router.post("/", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // add user error handler
    const user = await authentication.userAccount(email).first();
    // add password error handler
    const passwordValid = await bcrypt.compare(password, user.password);
    // if user and password are valid then user gets a token.
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

// router.get("/protected", restricted(), async (req, res, next) => {
//   try {
//     res.json({
//       message: "You are authorized",
//       userId: req.userId
//     });
//   } catch (err) {
//     next(err);
//   }
// });

module.exports = router;
