exports.up = async function(knex) {
  await knex.schema.createTable("users", table => {
    table.increments("id");

    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("username");
    table
      .boolean("Completed")
      .notNullable()
      .defaultTo(false);
  });

  await knex.schema.createTable("instructions", table => {
    table.increments("id");

    table.string("describe").notNullable();
    table
      .boolean("Completed")
      .notNullable()
      .defaultTo(false);
  });

  await knex.schema.createTable("recipes", table => {
    table.increments("id");
    table.string("recipeTitle").notNullable();
    table.string("mealType").notNullable();
    table.string("ingredients").notNullable();
    table
      .integer("instructions_id")
      .references("id")
      .inTable("instructions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
  await knex.schema.createTable("users_recipes", table => {
    table
      .integer("user_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    table
      .integer("recipe_id")
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE")
      .notNullable();

    table.primary(["user_id", "recipe_id"]);
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users_recipes");
  await knex.schema.dropTableIfExists("recipes");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("users");
};
