// validateMiddlware for login/register
function validateMiddleware(req, res, next) {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(401).json({ error: "Invalid Credentials for login" });
  } else {
    next();
  }
}

// validating recipes post - inc , instructions, userId in req.body
function validateRecipeData(req, res, next) {
  const { recipeTitle, mealType, ingredients } = req.body;

  if (!recipeTitle || !mealType || !ingredients) {
    return res
      .status(400)
      .json({ message: "you need a to fill out all req fields." });
  }
  next();
}

module.exports = {
  validateMiddleware,
  validateRecipeData
};
