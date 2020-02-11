const bcrypt = require("bcryptjs");
const db = require("../../dbConfig");

function find() {
  return db("users").select("id", "firstName", "lastName", "email");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

// ADDING USER POST
async function add(user) {
  user.password = await bcrypt.hash(user.password, 14);
  return db("users").insert(user);
}

// update PUT
async function update(id, changes) {
  await db("users")
    .where({ id })
    .update(changes);

  return findById(id);
}

// delete DELETE
function remove(id) {
  return db("users")
    .where({ id })
    .del();
}

module.exports = {
  add,
  find,
  findById,
  update,
  remove
};
