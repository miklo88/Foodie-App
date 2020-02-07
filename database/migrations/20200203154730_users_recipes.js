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
    table
      .integer("users_id")
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("recipes");
  await knex.schema.dropTableIfExists("instructions");
  await knex.schema.dropTableIfExists("users");
};
