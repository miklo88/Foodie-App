const express = require("express");
const restricted = require("../../middleware/restricted");
const userModel = require("../../database/helper_modules/users-model");

const router = express.Router();

router.get("/", restricted(), async (req, res, next) => {
  try {
    const users = await userModel.find();

    res.json(users);
  } catch (err) {
    next(err);
  }
});
// router.get("/", async (req, res, next) => {
//   try {
//     res
//       .status(200)
//       .json({ message: "youve made it to the foodie users endpoint" });
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   try {
//     res.status(200).json({ message: "now to the foodie users/:id endpoint" });
//   } catch (error) {
//     res.status(418).json({ message: "no no no no - Dikembe Mutombo" });
//   }
// });

module.exports = router;
