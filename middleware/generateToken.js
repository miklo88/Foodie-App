const jwt = require("jsonwebtoken");
const secrets = require("./secrets");

function generateToken(user) {
  const payload = {
    subject: user.id,
    email: user.email
  };

  const options = {
    expiresIn: "14d"
  };
  return jwt.sign(payload, secrets.jwtSecret, options);
}

module.exports = generateToken;

// purpose of generating a token as a module is if application grows in size and needs an admin etc
