const express = require("express");

const recipeModel = require("../../database/helper_modules/recipes-model");

const router = express.Router();
// const db = require("../../database/dbConfig");

router.get("/", async (req, res, next) => {
  try {
    const recipes = await recipeModel.find();

    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    res
      .status(200)
      .json({ message: "looking for an individual recipe? you've found one" });
  } catch (error) {
    res.status(418).json({ message: "no no no no - Dikembe Mutombo" });
  }
});

module.exports = router;
