// moving to another repository.

// EXPRESS MIDDLWARE
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const apiRouter = require("../routers/api-router/router");
// AUTH ROUTER
const authRouter = require("../routers/auth-router");
// USER ROUTER
const usersRouter = require("../routers/users-router");
// RECIPES ROUTER
const recipesRouter = require("../routers/recipes-router");

// EXPRESS MIDDLEWARE SERVER
const server = express();

server.use(helmet());
server.use(morgan("short"));
server.use(cors());
server.use(express.json());

// ROOT ROUTER
server.use("/", apiRouter);
// API ROUTER
server.use("/api", apiRouter);
// AUTH ROUTER
server.use("/api/auth", authRouter);
//  USER ROUTER
server.use("/api/users", usersRouter);
//  RECIPES ROUTER
server.use("/api/recipes", recipesRouter);

server.use((err, req, res, next) => {
  console.log("Error:", err);
  res.status(500).json({
    message: "didnt make it past the server.js."
  });
});

module.exports = server;
