// EXPRESS MIDDLWARE
const express = require("express");

// EXPRESS MIDDLEWARE SERVER
const server = express();

//  AUTH RECIPE USER ROUTERS
// const userRouter = require("../routers/auth/auth-router");
const usersRouter = require("../routers/users/users-router");
const recipesRouter = require("../routers/recipes/recipes-router");

server.use(express.json());

// ROUTERS BEING UTILIZED FROM IMPORTS.
server.use("/users", usersRouter);
server.use("/recipes", recipesRouter);

// server api GET
server.get("/", async (req, res) => {
  res.send("hola and welcome to root API!");
});

// route for /api/recipes or /api/users paths
server.get("/api", (req, res) => {
  res.json({ message: "Welcome to the /api/recipes or /api/users" });
});

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "ay dio mio we have an error."
  });
});

module.exports = server;
