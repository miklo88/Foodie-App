// EXPRESS AND THE MIDDLWARE TRIO
const express = require("express");
const helmet = require("helmet");

// EXPRESS MIDDLEWARE SERVER
const server = express();

//  AUTH RECIPE USER ROUTERS
const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
const usersRouter = require("../users/users-router");
// const recipeRouter = require("../recipe/recipe-router.js")

server.use(express.json());
server.use(helmet());

// ROUTERS BEING UTILIZED FROM IMPORTS.
// server.use("/users", usersRouter);
// server.use("/recipes", recipesRouter);

// server api GET
server.get("/", (req, res) => {
  res.send("hola and welcome to carls api!");
});
// sneak JWT Token on line 14. pushing down res.send message.

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "ay dio mio we have an error."
  });
});

module.exports = server;
