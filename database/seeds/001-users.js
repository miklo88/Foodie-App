exports.seed = async knex => {
  await knex("users").insert([
    {
      id: 1,
      firstName: "michelle",
      lastName: "obama",
      email: "email.com",
      password: "testpassword",
      username: "username1"
    },
    {
      id: 2,
      firstName: "paul",
      lastName: "simon",
      email: "email.com",
      password: "testpassword",
      username: "username2"
    },
    {
      id: 3,
      firstName: "leonardo",
      lastName: "davinci",
      email: "email.com",
      password: "testpassword",
      username: "username3"
    }
  ]);
};
