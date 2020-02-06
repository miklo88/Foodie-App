// actual integration test SUPERTEST library for endpoints.
const supertest = require("supertest");
// server is the port on index.js
const server = require("../index");

test("root route. welcome route", async () => {
  const res = await supertest(server).get("/");
  //   doest it return the expected status codes?
  expect(res.status).toBe(200);

  //   doest it return the expected data format?
  expect(res.type).toBe("application/json");

  //   doest it return the expected data?
  expect(res.body.message).toBe("homepage api get of foodie/chef blog.");
});
