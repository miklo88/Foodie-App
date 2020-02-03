exports.up = function(knex, Promise) {
  return knex.schema
    .createTable("users", function(tbl) {
      tbl.increments("user_id").primary();
      tbl.string("firstName").notNullable();
      tbl.string("lastName").notNullable();
      tbl.string("email").notNullable();
      tbl.text("username");
      tbl.string("password").notNullable();
    })
    .createTable("recipes", function(tbl) {
      tbl.increments("recipe_id").primary();
      tbl.text("title").notNullable();
      tbl.text("meal_type").notNullable();
      tbl.text("ingredients").notNullable();
      tbl
        .integer("instructions_id")
        .notNullable()
        .references("instructions_id")
        .inTable("instructions");
    })
    .createTable("instructions", function(tbl) {
      tbl.increments().primary();
      tbl.text("notes");
    })
    .createTable("users_recipes", function(tbl) {
      tbl
        .integer("user_id")
        .notNullable()
        .references("user_id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("recipe_id")
        .notNullable()
        .references("recipe_id")
        .inTable("recipes")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["user_id", "recipe_id"]);
    });
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists("users_recipes")
    .dropTableIfExists("instructions")
    .dropTableIfExists("recipes")
    .dropTableIfExists("users");
};
