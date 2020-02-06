// const supertest = require("supertest");
// const server = require("../api/server");
// const db = require("../database/dbConfig");

// // HOOK IN JEST. THIS FUNCTION RUNS BEFORE EVERY TEST IN OUR TEST SUITE.
// beforeEach(async () => {
//   // RUNNING NEW SEEDS SO FRESH TO DEATH DATA. EVERY TIME A TEST RUNS THE DATA RE-SEEDS.
//   await db.seed.run();
// });

// const testUser = { email: "email.com", password: "testpassword" };

// const existingUser = { email: "email.com", password: "testpassword" };

// describe("auth-router", () => {
//   describe("POST /register endpoint", () => {
//     it("return a status 201", async () => {
//       const res = await supertest(server)
//         .post("/register")
//         .send(testUser);
//       expect(res.status).toBe(201);
//     });

//     it("return a body of type JSON", async () => {
//       const res = await supertest(server)
//         .post("/register")
//         .send(testUser);
//       expect(res.type).toBe("application/json");
//     });
//   });

//   describe("POST /login endpoint", () => {
//     it("return a status 200", async () => {
//       const res = await supertest(server)
//         .post("/login")
//         .send(user);
//       expect(res.status).toBe(401);
//     });

//     it("return a body of type JSON", async () => {
//       const res = await supertest(server)
//         .post("/login")
//         .send(user);
//       expect(res.type).toBe("application/json");
//     });
//   });
// });
