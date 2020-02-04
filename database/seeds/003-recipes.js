exports.seed = async knex => {
  await knex("Recipes").insert([
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
  ]);
};
