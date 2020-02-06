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
    const { id } = req.params;
    const users = await usersModel.findById(id);
    res.status(200).json(users);
  } catch (err) {
    res
      .status(418)
      .json({ error: "didnt get user/id but youre at your endpoint" });
    // next(err);
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
});

router.put("/", async (req, res, next) => {
  try {
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: "error on put request muchacho." });
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    await usersModel.delete(req.params.id);
    return res.status(204).json({ message: "user deleted/removed" });
  } catch (err) {
    res.status(418).json({ error: "didnt delete but youre at your endpoint" });
    // next(err);
  }
});

module.exports = router;
