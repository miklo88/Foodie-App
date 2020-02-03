exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return (
    knex("instructions")
      // .del()
      .truncate()
      .then(function() {
        // Inserts seed entries
        return knex("instructions").insert([
          {
            instructions_id: 1,
            notes:
              "heat skillet and cook hangar steak 3-4 mins each side med-high heat take off and rest 10min. deglaze pan with butter add two eggs to pan and baste with butter 2 mins. plate and enjoy."
          }
        ]);
      })
  );
};
