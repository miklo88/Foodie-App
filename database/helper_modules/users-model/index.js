const bcrypt = require("bcryptjs");
const db = require("../../dbConfig");

module.exports = {
  find,
  findBy,
  findById,
  add,
  remove
};

function find() {
  return db("users").select("id", "firstName", "lastName", "email");
}
function findBy(filter) {
  return db("users")
    .where(filter)
    .select("id", "firstName", "lastName", "email");
}

async function userAccount(user) {
  const user = await db("users")
    .where({ email })
    .first();
  if (user) {
    return user;
  }
  return error;
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
// update PUT
// function update(changes, id) {}

// delete DELETE
function remove(id) {
  return db("users")
    .where({ id })
    .del();
}
