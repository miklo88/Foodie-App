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
router.post("/users", async (req, res, next) => {
  res.status(200).json({ message: "success POST message", operation: "POST" });
});

// UPDATE USER
router.put("/users", async (req, res, next) => {
  res.status(200).json({ message: "success PUT message", operation: "PUT" });
});

// DELETE USER
router.delete("/users", async (req, res, next) => {
  res.status(204);
});

module.exports = router;
