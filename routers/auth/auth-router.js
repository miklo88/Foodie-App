const express = require("express");

const router = express.Router();

// database config file
const db = require("../../database/dbConfig");

// READ USERS
router.get("/users", async (req, res, next) => {
  console.log(req.query);
  res.status(200).json(response);
  // .json({ message: "users auth endpoint GET reached", operation: "GET" });
});

// CREATE USER
let nextUser = 4;
router.post("/users/:id", async (req, res, next) => {
  const user = req.body;
  user.id = nextUser++;

  users.push(user);

  //   res.status(200).json({ message: "success POST message", operation: "POST" });
  res.status(200).json(users);
});

// UPDATE USER
router.put("/users", async (req, res, next) => {
  res.status(200).json({ message: "success PUT message", operation: "PUT" });
});
// // UPDATE USER ID
// router.put("/users", async (req, res, next) => {

// })

// DELETE USER
router.delete("/users/:id", async (req, res, next) => {
  const id = req.params.id;

  db.remove("id")
    .then(deleted => {
      if (deleted) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "id not found", operation: "DELETE" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "error", err });
    });
});

module.exports = router;
