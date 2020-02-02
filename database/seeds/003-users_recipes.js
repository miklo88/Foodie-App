exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users_recipes")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("users_recipes").insert([
        { user_id: 1, recipe_id: 1 },
        { user_id: 2, recipe_id: 1 },
        { user_id: 3, recipe_id: 1 }
      ]);
    });
};
