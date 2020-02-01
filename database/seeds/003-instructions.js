exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex("recipes").insert([
    {
      id: 1,
      notes:
        "cook steak 2 mins each side med high heat, let rest 10 mins. take two eggs and use previous pan and deglaze with butter and fry eggs."
    }
  ]);
};
