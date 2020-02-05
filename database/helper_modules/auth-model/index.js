const db = require("../../dbConfig");

async function userAccount(user) {
  var user = await db("users")
    .where({ email })
    .first();
  if (user) {
    return user;
  }
  return null;
}

module.exports = userAccount;
