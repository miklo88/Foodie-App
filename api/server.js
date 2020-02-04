// EXPRESS MIDDLWARE
const express = require("express");

// EXPRESS MIDDLEWARE SERVER
const server = express();

//  AUTH RECIPE USER ROUTERS
// const userRouter = require("../routers/users/users-router")
const recipesRouter = require("../routers/recipes/recipes-router");

server.use(express.json());

// ROUTERS BEING UTILIZED FROM IMPORTS.
server.use("/recipes", recipesRouter);

// server api GET
server.get("/", async (req, res) => {
  res.send("hola and welcome to carls api!");
});
// sneak JWT Token on line 14. pushing down res.send message.

server.use((err, req, res, next) => {
  res.status(500).json({
    message: "ay dio mio we have an error."
  });
});

module.exports = server;
