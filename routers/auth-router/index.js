const bcrypt = require("bcryptjs");
const express = require("express");
const usersModel = require("../../database/helper_modules/users-model");
const userAccount = require("../../database/helper_modules/auth-model");

const router = express.Router();

// CREATE NEW USER
router.post("/register/users", async (req, res, next) => {
  try {
    const user = req.body;
    if (!user || !user.email || !user.password) {
      return res
        .status(401)
        .json({ message: "Include a valid email or password" });
    }
    const saved = await usersModel.add(user);
    res.status(201).json(saved);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// LOGIN
router.post("/login/users", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // add user error handler
    const user = await usersModel.userAccount(email).first();
    // add password error handler
    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      const user = generateToken(user);

      res.status(200).json({ message: `Bienvendidos ${user.email}!` });
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
