// EXPRESS MIDDLWARE
const express = require("express");

// EXPRESS MIDDLEWARE SERVER
const server = express();

// USER ROUTER
const usersRouter = require("../routers/users/users-router");
// RECIPES ROUTER
const recipesRouter = require("../routers/recipes/recipes-router");
// AUTH ROUTER
// const authRouther = require("../routers/auth/auth-router");

server.use(express.json());

//  USER ROUTER
server.use("/users", usersRouter);
//  RECIPES ROUTER
server.use("/recipes", recipesRouter);
// AUTH ROUTER
// server.use("/auth", authRouther);
// ROOT ROUTER
server.get("/", async (req, res) => {
  res.status(200).json({ message: "homepage api get of foodie/chef blog." });
});

server.use((err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: "didnt make it past the server.js."
  });
});

module.exports = server;
