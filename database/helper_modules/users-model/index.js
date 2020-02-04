// const knex = require("knex")
// const config = require("../knexfile.js")
const bcrypt = require("bcryptjs");
const db = require("../../dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find() {
  return db("users").select("id", "email");
}

function findById(filter) {
  return db("users")
    .where(filter)
    .first("id", "firstName", "email", "password");
}
// ADDING USER POST
async function add(user) {
  // second parameter is the time complexity, not the number of rounds.
  user.password = await bcrypt.hash(user.password, 14);

  const [id] = await db("users").insert(user);

  return findById(id);
}
function findById(id) {
  return db("users")
    .where({ id })
    .first("id", "email");
}

// function update(changes, id) {}

// function remove(id) {}
