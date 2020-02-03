exports.seed = async knex => {
  await knex("Recipes").insert([
    {
      id: 1,
      recipeTitle: "Steak and Eggs",
      mealType: "breakfast",
      ingredients: "one hangar steak and two eggs"
    }
  ]);
};
