exports.up = async knex => {
  await knex.schema.createTable("users", tbl => {
    tbl.increments().primary();
    tbl.text("firstName").notNullable();
    tbl.text("lastName").notNullable();
    tbl.text("email").notNullable();
    tbl.text("username");
    tbl.text("password").notNullable();
  });

  await knex.schema.createTable("recipes", tbl => {
    tbl.increments().primary();
    tbl.text("title").notNullable();
    tbl.text("meal_type").notNullable();
    tbl.text("ingredients").notNullable();
    tbl
      .integer("instructions_id")
      .notNullable()
      .references("notes")
      .inTable("instructions");
  });

  await knex.schema.createTable("instructions", tbl => {
    tbl.increments().primary();
    tbl.text("notes");
  });

  await knex.schema.createTable("users_recipes", tbl => {
    tbl
      .integer("users_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl
      .integer("recipes_id")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onUpdate("CASCADE")
      .onDelete("CASCADE");
    tbl.primary(["users_id", "recipes_id"]);
  });
};
exports.down = async knex => {
  await knex.schema.dropTableIfExists("users_recipes");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("recipes");
  await knex.schema.dropTableIfExists("users");
};
