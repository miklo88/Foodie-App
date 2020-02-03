exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("recipes").insert([
        {
          recipe_id: 1,
          title: "Steak and Eggs",
          user_id: 1,
          meal_type: "breakfast",
          ingredients: "one hangar steak and two eggs",
          instructions_id: 1
        }
      ]);
    });
};
