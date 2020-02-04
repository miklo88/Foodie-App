const db = require("../dbConfig");

module.exports = {
  find,
  findById,
  add,
  update,
  delete
};

function find() {
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
