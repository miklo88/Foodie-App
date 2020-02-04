const express = require("express");

// creating a new recipes route
const router = express.Router();

const db = require("../../database/dbConfig");

router.get("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "FOOD RECIPES" });
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res.status(200).json({ message: "now to the recipes/:id endpoint" });
  } catch (error) {
    res.status(418).json({ message: "no no no no - Dikembe Mutombo" });
  }
});

module.exports = router;
