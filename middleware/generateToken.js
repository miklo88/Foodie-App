const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

function generateToken(user) {
  const payload = {
    subject: user.id,
    email: user.email
  };

  const options = {
    expiresIn: "14d"
  };

  return jwt.sign(user, secrets.jwtSecret, options);
}

module.exports = generateToken;
