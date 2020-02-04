const express = require("express");

// creating a new recipes route
const router = express.Router();

const db = require("../../database/dbConfig");

router.get("/", async (req, res, next) => {
  try {
    const sortField = req.query.sortby || "id";
    const recipes = [
      {
        id: 1,
        recipeTitle: "Steak and Eggs",
        mealType: "breakfast",
        ingredients: "one hangar steak and two eggs"
      },
      {
        id: 2,
        recipeTitle: "Southwest Steak Salad",
        mealType: "lunch",
        ingredients:
          "ancho chiles, napa cabbage, corn, lemon, salt, pepper, tortillas, carronts, mayo, hangar steak"
      },
      {
        id: 3,
        recipeTitle: "Blackbean Veggie Burger",
        mealType: "Dinner",
        ingredients:
          "black beans, quinoa, farro, chickpeas, lettuce, tomato, dijonaise, brioche buns"
      },
      {
        id: 4,
        recipeTitle: "Carrot Cake Cookies",
        mealType: "dessert",
        ingredients:
          "eggs, carrots, milk, sugar, cream cheese, vanilla, all purpose flour."
      }
    ];
    const response = recipes.sort((a, b) =>
      a[sortField] < b[sortField] ? -1 : 1
    );
    res.status(200).json(response);
  } catch (error) {
    next(error);
  }
});

// router.get("/", async (req, res, next) => {
//   try {
//     res.status(200).json({ message: "FOOD RECIPES" });
//   } catch (error) {
//     next(error);
//   }
// });

router.get("/:id", async (req, res, next) => {
  try {
    res.status(200).json({ message: "now to the recipes/:id endpoint" });
  } catch (error) {
    res.status(418).json({ message: "no no no no - Dikembe Mutombo" });
  }
});

module.exports = router;
