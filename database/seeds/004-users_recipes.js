exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex("users_recipes").insert([
    {
      users_Id: 1,
      recipes_Id: 1
    }
  ]);
};
