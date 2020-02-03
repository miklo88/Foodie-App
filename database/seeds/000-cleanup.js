exports.seed = async knex => {
  await knex("users_recipes").truncate();
  await knex("recipes").truncate();
  await knex("instructions").truncate();
  await knex("users").truncate();
};
