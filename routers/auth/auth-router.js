const express = require("express");

const router = express.Router();

// database config file
const db = require("../../database/dbConfig");

// READ USERS
router.get("/users", async (req, res, next) => {
  res
    .status(200)
    .json({ message: "users auth endpoint GET reached", operation: "GET" });
});

// CREATE USER
router.post("/users/:id", async (req, res, next) => {
  const userInfo = req.body;

  res.status(200).json({ message: "success POST message", operation: "POST" });
});

// UPDATE USER
router.put("/users", async (req, res, next) => {
  res.status(200).json({ message: "success PUT message", operation: "PUT" });
});

// DELETE USER
router.delete("/users/:id", async (req, res, next) => {
  const { id } = req.params;

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
