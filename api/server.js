// express and the middleware trio
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// authenticate, routers will be brought in here.
const authenticate = require("../auth/authenticate-middleware.js");
const authRouter = require("../auth/auth-router.js");
// const recipeRouter = require("../recipe/recipe-router.js")

// ROUTERS BEING UTILIZED FROM IMPORTS.
server.use("/users", usersRouter);
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
