// require("dotenv").config();
const server = require("./api/server");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 9000;

// JEST TEST /// if statement to re-direct the server to be exported and ran in the index.spec.js for testing.
// if (!module.parent) {
//   // backend server port/host.
//   server.listen(port, () => {
//     console.log(`\n*** Listening on http://${host}:${port} ***\n`);
//   });
// }
// // exporting the api as a server to the index.spec.js file.
// module.exports = server; ///// JEST TEST

// backend server port/host.
server.listen(port, () => {
  console.log(`\n*** Listening on http://${host}:${port} ***\n`);
});
