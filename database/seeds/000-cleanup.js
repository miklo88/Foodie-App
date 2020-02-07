exports.seed = async knex => {
  await knex("recipes").truncate();
  await knex("instructions").truncate();
  await knex("users").truncate();
};
