exports.up = function(knex) {
  return knex.schema.createTable("users", users => {
    users.increments("id");
    users.string("firstName", 100).notNullable();
    users.string("lastname", 100).notNullable();
    users
      .string("email", 100)
      .notNullable()
      .unique();
    users.string("username", 100);
    users.string("password", 25).notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("users");
};
