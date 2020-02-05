const validateMiddleware = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
    res.status(401).json({ error: "Invalid Credentials for login" });
  } else {
    next();
  }
};

module.exports = validateMiddleware;
