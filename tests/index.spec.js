// actual integration test SUPERTEST library for endpoints.
const supertest = require("supertest");
// server is the port on index.js
const server = require("../index");

test("root route. welcome route", async () => {
  const rest = await supertest(server).get("/");
});
