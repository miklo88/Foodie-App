exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("users").insert([
        {
          id: 1,
          firstName: "michelle",
          lastName: "obama",
          email: "email@gmail.com",
          username: "username1",
          password: "testpassword"
        },
        {
          id: 2,
          firstName: "paul",
          lastName: "simon",
          email: "email@gmail.com",
          username: "username2",
          password: "testpassword"
        },
        {
          id: 3,
          firstName: "leonardo",
          lastName: "davinci",
          email: "email@gmail.com",
          username: "username3",
          password: "testpassword"
        }
      ]);
    });
};
