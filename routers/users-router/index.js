const express = require("express");
// const restricted = require("../../middleware/restricted");
const userModel = require("../../database/helper_modules/users-model");

const router = express.Router();
// GET USER
router.get("/", async (req, res, next) => {
  try {
    const users = await userModel.find();
    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});
// for re-implementing restricted routes-
// router.get("/", restricted(), async (req, res, next) => {
//  GET USER ID
router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const users = await userModel.findById(id);

    res.status(200).json(users);
  } catch (err) {
    next(err);
  }
});
// ADD NEW USER / REGISTER / CREATE
router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("users").insert(req.body);
    const newUser = await db("users")
      .where("id", id)
      .first();
    return res.status(201).json(newUser);
  } catch (err) {
    next(err);
  }
  console.log(newUser);
});

// changes // EDIT
router.put("/:id", async (req, res, next) => {
  try {
    const { id } = await db("users")
      .update(req.params.id, req.body)
      .then(user => {
        if (user) {
          return res.status(200).json(user);
        } else {
          return res.status(404).json({ message: "couldnt find user." });
        }
      });
  } catch (err) {
    return res.status(500).json({ error: "error on put request muchacho." });
  }
});
// DELETE
router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params.id;
    const user = await usersModel.remove(id);
    return res.status(204).json({ message: "user deleted/removed" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
