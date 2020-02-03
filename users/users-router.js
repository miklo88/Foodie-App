const router = require("express").Router();
// const usersModel = require("../users/users-model");
// const generateToken = require("./generateToken");
// const bcrypt = require("bcryptjs");

router.get("/users", (req, res) => {
  res.status(200).json({
    message: "hola foodie/chef! you've touched your endpoint."
  });
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.status(200).json({
    url: `/users/${id}`,
    operation: `GET user with id ${id}`
  });
});

// DELETE
