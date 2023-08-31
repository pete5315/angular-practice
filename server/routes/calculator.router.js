const express = require("express");
const router = express.Router();
let data = {
  input1: "",
  input2: "",
  sign: "+",
}



router.get("/", (req, res) => {
  res.json(data);
});

module.exports = router;
