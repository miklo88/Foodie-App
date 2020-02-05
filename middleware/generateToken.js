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
  return jwt.sign(payload, secrets, options);
}

module.exports = generateToken;

// const email = req.body.email
// const user = { email: email }
// const accerssToken = jwt.sign(user, process.env.JWT_SECRET)

// return jwt.sign(payload, secrets.jwtSecret, options);
