const supertest = require("supertest");
const server = require("../api/server");
// const db = require("../database/dbConfig");

describe("users-router", () => {
  describe("/users endpoint", () => {
    it("return a status 200", async () => {
      const res = await supertest(server).get("/users");
      expect(res.status).toBe(200);
    });

    it("return a body of type JSON", async () => {
      const res = await supertest(server).get("/users");
      expect(res.type).toBe("application/json");
    });
  });
});
