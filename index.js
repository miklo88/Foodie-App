// heroku deployment. package json is already set up for it.
// .env in root directory for deploying
// require("dotenv").config();

const server = require("./api/server");

const host = process.env.HOST || "localhost";
const port = process.env.PORT || 9000;

if (!module.parent) {
  // backend server port/host.
  server.listen(port, () => {
    console.log(`\n*** Listening on http://${host}:${port} ***\n`);
  });
}

module.exports = server;
