const express = require("express");
// const restricted = require("../../middleware/restricted");
const userModel = require("../../database/helper_modules/users-model");

const router = express.Router();

router.get("/", async (req, res, next) => {
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
    const [id] = await userModel
      .findById(id)
      .where("id", id)
      .first();
  } catch (err) {
    return res
      .status(500)
      .json({ error: "ay dio hit the endpoint. but not close enough" });
  }
});

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

// changes
router.put("/:id", async (req, res, next) => {
  try {
    const [id] = await db("users")
      .update(req.params.id, req.body)
      .then(user => {
        if (user) {
          return res.status(200).json(user);
        } else {
          return res
            .status(404)
            .json({ message: "couldnt update user, couldnt find user." });
        }
      });
  } catch (err) {
    return res.status(500).json({ error: "error on put request muchacho." });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await usersModel.remove(req.params.id);
    return res.status(204).json({ message: "user deleted/removed" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
