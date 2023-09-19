const express = require("express");
const router = express.Router();
let data = [];

router.get("/", (req, res) => {
  res.json(data);
});

router.get("/history", (req, res) => {
  res.json(data);
});

module.exports = router;
