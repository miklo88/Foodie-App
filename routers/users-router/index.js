const express = require("express");

// const userModel = require("../../database/helper_modules/users-module");

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    res
      .status(200)
      .json({ message: "youve made it to the foodie users endpoint" });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.status(200).json({ message: "now to the foodie users/:id endpoint" });
  } catch (error) {
    res.status(418).json({ message: "no no no no - Dikembe Mutombo" });
  }
});

// router.get("/users/:id", (req, res) => {
//   const { id } = req.params;
//   res.status(200).json({
//     url: `/users/${id}`,
//     operation: `GET user with id ${id}`
//   });
// });

// // DELETE
module.exports = router;
