exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex("recipes").insert([
    {
      recipe_id: 1,
      title: "Steak and Eggs",
      user_id: 1,
      meal_type: "breakfast",
      ingredients: "one hangar steak and two eggs",
      instructions_id: 1
    }
  ]);
};
