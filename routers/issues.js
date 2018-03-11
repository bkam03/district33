const express = require("express");

const issuesData = require("../public/js/issuesData.js");

const router = express.Router();

router.get("/", (req, res) => {
  res.render("issues", issuesData);
});

module.exports = router;
