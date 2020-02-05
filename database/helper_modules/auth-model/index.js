const db = require("../../dbConfig");

async function userAccount(user) {
  const user = await db("users")
    .where({ email })
    .first();
  if (user) {
    return user;
  }
  return error;
}
