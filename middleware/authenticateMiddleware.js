const jwt = require("jsonwebtoken");
const secrets = require("../config/secrets");

module.exports = (req, res, next) => {
  const { authorization } = req.headers;

  if (authorization) {
    jwt.verify(authorization, secrets.jwtSecret, function(err, decoded) {
      if (err) {
        res.status(401).json({ message: "wrong token credentials" });
      } else {
        req.token = decoded;
        next();
      }
    });
  } else {
    res.status(401).json({ message: "Please try login again." });
  }
};
