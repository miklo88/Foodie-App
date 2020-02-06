module.exports = function validateMiddleware(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({ error: "Invalid Credentials for login" });
  } else {
    next();
  }
};
