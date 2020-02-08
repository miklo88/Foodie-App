const express = require("express");
// const restricted = require("../../middleware/restricted");
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
    const recipeId = await recipeModel
      .findById(req.params.id)
      .where("id", id)
      .first();
    return res.status(200).json(recipeId);
  } catch (err) {
    next(err);
  }
});
// res
//   .status(200)
//   .json({ message: "looking for an individual recipe? you've found the route" });
// } catch (error) {
//   res.status(418).json({ message: "GET ID ERROR" });
// }

// for re-implementing restricted routes-
// router.get("/", restricted(), async (req, res, next) => {
// ADD RECIPE
router.post("/", async (req, res, next) => {
  try {
    const [id] = await db("recipes").insert(req.body);
    const newRecipe = await db("recipes")
      .where("id", id)
      .first();
    return res.status(201).json(newRecipe);
  } catch (err) {
    next(err);
  }
  console.log(newRecipe);
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
