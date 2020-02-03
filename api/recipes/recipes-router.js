const express = require("express");

const router = express.Router();

const db = require("../database/dbConfig");

router.get("/api/instructions", async (req, res, next) => {
  try {
    // get all species from the database
    res.json(await db("instructions"));
  } catch (err) {
    next(err);
  }
});

router.get("/api/recipes", async (req, res, next) => {
  try {
    // get all recipes from the database
    // include instuctions
    const recipes = await db("recipes as a")
      .leftJoin("instructions as s", "s.describe", "a.instructions_id")
      .select(
        "a.recipeTitle",
        "a.mealType",
        "a.ingredients",
        "s.describe as describe"
      );

    res.json(recipes);
  } catch (err) {
    next(err);
  }
});

router.post("/api/recipes", async (req, res, next) => {
  try {
    // create recipes
    const [id] = await db("recipes").insert(req.body);

    const recipe = await db("recipes")
      .where({ id })
      .first();

    res.status(201).json(recipe);
  } catch (err) {
    next(err);
  }
});

router.delete("/api/instructions/:id", async (req, res, next) => {
  try {
    // remove instructions
    const count = await db("instructions")
      .where({ id: req.params.id })
      .del();

    if (count > 0) {
      res.status(204).end();
    } else {
      res.status(404).json({
        message: "instructions not found"
      });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
