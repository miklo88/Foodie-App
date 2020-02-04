const knex = require("knex");
const db = require("../dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  remove
};

function find(users) {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function add(user) {}

function update(changes, id) {}

function remove(id) {}
