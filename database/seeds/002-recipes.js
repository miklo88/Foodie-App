exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex("recipes").insert([
    {
      id: 1,
      title: "Steak and Eggs",
      meal_type: "breakfast",
      ingredients: "one hangar steak and two eggs",
      instructions_Id: 1
    }
  ]);
};
