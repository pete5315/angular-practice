const express = require("express");
const router = express.Router();
let data = ["1", "+", "5", "6"];

router.get("/", (req, res) => {
  res.json(data);
});

router.get("/history", (req, res) => {
  res.json(data);
});

module.exports = router;
