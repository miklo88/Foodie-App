exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("users_recipes")
      // .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("users_recipes").insert([{ user_id: 1, recipe_id: 1 }]);
      })
  );
};
