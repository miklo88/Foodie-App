// const bcrypt = require("bcryptjs");
const db = require("../database/dbConfig");

function find() {
  return db("users");
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "firstName", "lastName", "email", "password");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first("id");
}

function add(user) {
  db("users")
    .insert(user)
    .then(ids => {
      return findById(ids[0]);
    });
}
//tuck in at line25 before the }   user.password = await bcrypt.hash(user.password, 14);
//   const [id] = await db("users").insert(user);
//   return findById(id);

function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove
};
