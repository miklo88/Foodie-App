exports.seed = async knex => {
  await knex("instructions").insert([
    {
      id: 1,
      describe:
        "heat skillet and cook hangar steak 3-4 mins each side med-high heat take off and rest 10min. deglaze pan with butter add two eggs to pan and baste with butter 2 mins. plate and enjoy."
    },
    {
      id: 2,
      describe:
        "combine all veggies in a bowl after chopping up ingredients. combine salt, pepper and mayo to make dressing. cook steak on grill. fry totilla strips. toss lemon pepper aioli with veggies and add steak and tortilla."
    },
    {
      id: 3,
      describe:
        "combine black beans, farro, quinoa, chickpeas make into patties and cook on flatop. build bun with brioche, lettuce, tomato, dijonaise and add patty. throw your face into it."
    },
    {
      id: 4,
      describe:
        "mix flour with sugar, egg, vanilla extract and milk. fold grated carrot. pour into sheet pan and bake 12-15 mins 350F. mix sugar, cream cheese and vanilla until smooth. cut cookie shapes out of the cake and add frosting. EAT THEM ALL "
    }
  ]);
};
