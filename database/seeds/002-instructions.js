exports.seed = async knex => {
  await knex("instructions").insert([
    {
      id: 1,
      describe:
        "heat skillet and cook hangar steak 3-4 mins each side med-high heat take off and rest 10min. deglaze pan with butter add two eggs to pan and baste with butter 2 mins. plate and enjoy."
    }
  ]);
};
