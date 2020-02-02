exports.up = async knex => {
  await knex.schema.createTable("users", tbl => {
    tbl.increments("user_id").primary();
    tbl.text("firstName").notNullable();
    tbl.text("lastName").notNullable();
    tbl.text("email").notNullable();
    tbl.text("username");
    tbl.text("password").notNullable();
  });
};

exports.down = async knex => {
  await knex.schema.dropTableIfExists("users");
};
