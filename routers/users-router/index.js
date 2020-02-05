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
// for re-implementing restricted routes-
// router.get("/", restricted(), async (req, res, next) => {

router.get("/:id", async (req, res, next) => {
  try {
    res.status(200).json(user);
  } catch (error) {
    res.status(418).json({ error: "usersRouter err" });
  }
});

module.exports = router;
