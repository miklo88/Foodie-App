const express = require("express");

const recipeModel = require("../../database/helper_modules/recipes-model");

const router = express.Router();

// GET RECIPE
router.get("/", async (req, res, next) => {
  try {
    const recipes = await recipeModel.find();

    res.status(200).json(recipes);
  } catch (error) {
    next(error);
  }
});
// GET RECIPE ID
router.get("/:id", async (req, res, next) => {
  try {
    res
      .status(200)
      .json({ message: "looking for an individual recipe? you've found one" });
  } catch (error) {
    res.status(418).json({ message: "no no no no - Dikembe Mutombo" });
  }
});

// ADD RECIPE
router.post("/:id", async (req, res, next) => {
  try {
    res.status(200).json({ message: "route endpoint working!" });
  } catch (err) {
    return res.status(500).json({ error: "Error" });
    //  next(err)
  }
});
// changes // edit
router.put("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "route endpoint PUT working!" });
  } catch (err) {
    return res.status(500).json({ error: "Error" });
    //  next(err)
  }
});
// DELETE
router.delete("/", async (req, res, next) => {
  try {
    res.status(200).json({ message: "route endpoint DELETE working!" });
  } catch (err) {
    return res.status(500).json({ error: "Error" });
    //  next(err)
  }
});
module.exports = router;
