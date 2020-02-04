const express = require("express");

const userModel = require("../../database/helper_models/user-model");

const router = express.Router();

router.get("/users", (req, res) => {
  res.status(200).json(users);
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
