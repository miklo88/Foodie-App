const bcrypt = require("bcryptjs");
const express = require("express");
// const jwt = require("jsonwebtoken");
// const restricted = require("../../middleware/restricted");
const usersModel = require("../../database/helper_modules/users-model");
// const secrets = require("../../config/secrets");

const router = express.Router();

// CREATE NEW USER
router.post("/register", async (req, res, next) => {
  try {
    const user = req.body;

    // if (!user || !user.email || !user.password) {
    //   return res
    //     .status(401)
    //     .json({ message: "Include a valid email or password" });
    // }

    const saved = await usersModel.add(user);
    res.status(201).json(saved);
  } catch (err) {
    console.log(err);
    next(err);
  }
});

// LOGIN
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await usersModel.findBy({ email }).first();

    const passwordValid = await bcrypt.compare(password, user.password);

    if (user && passwordValid) {
      const token = generateToken(user);
      console.log(token);

      res.status(200).json({ token, message: `Bienvendidos ${user.email}!` });
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
