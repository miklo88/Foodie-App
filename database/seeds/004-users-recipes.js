exports.seed = async knex => {
  await knex("users_recipes").insert([
    { user_id: 1, recipe_id: 1 },
    { user_id: 2, recipe_id: 1 },
    { user_id: 3, recipe_id: 1 }
  ]);
};
