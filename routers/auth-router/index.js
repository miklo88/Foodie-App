const bcrypt = require("bcryptjs");
const express = require("express");
const jwt = require("jsonwebtoken");
// const restricted = require("../");
// const usersModel = require("../../database/helper_modules/users-module");
const secrets = require("../../config/secrets");

const router = express.Router();

router.post("/login", (req, res) => {
  let { email, password } = req.body;

  Users.findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user); // new line

        // the server needs to return the token to the client
        // this doesn't happen automatically like it happens with cookies
        res.status(200).json({
          message: `Welcome ${user.firstName}!, have a token...`,
          token // attach the token as part of the response
        });
      } else {
        res.status(401).json({ message: "Invalid Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id, // sub in payload is what the token is about
    username: user.username
    // ...otherData
  };

  const options = {
    expiresIn: "1d" // show other available options in the library's documentation
  };

  // extract the secret away so it can be required and used where needed
  return jwt.sign(payload, secrets.jwtSecret, options); // this method is synchronous
}

module.exports = router;
