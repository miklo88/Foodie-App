const express = require("express");
const router = express.Router();
// ROOT ROUTER
router.get("/", async (req, res, next) => {
  res
    .status(200)
    .json({ message: "Welcome to the root api get of foodie/chef blog." });
});
// /API/
router.get("/api", (req, res) => {
  res.json({ message: "Welcome to the API route" });
});

module.exports = router;
