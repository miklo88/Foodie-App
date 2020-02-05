// EXPRESS MIDDLWARE
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
// AUTH ROUTER
const authRouter = require("../routers/auth-router");
// USER ROUTER
const usersRouter = require("../routers/users-router");
// RECIPES ROUTER
const recipesRouter = require("../routers/recipes-router");

// EXPRESS MIDDLEWARE SERVER
const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// AUTH ROUTER
server.use("/auth", authRouter);
//  USER ROUTER
server.use("/users", usersRouter);
//  RECIPES ROUTER
server.use("/recipes", recipesRouter);
// ROOT ROUTER
server.get("/", async (req, res, next) => {
  res.status(200).json({ message: "homepage api get of foodie/chef blog." });
});

server.use((err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: "didnt make it past the server.js."
  });
});

module.exports = server;
