const express = require("express");

const issuesData = require("../public/js/issuesData.js");

const router = express.Router();

const issuesArray = issuesData.issues;

router.get("/education", (req, res) => {
  var educationData = issuesArray[0];
  res.render("issue", educationData);
});

router.get("/community", (req, res) => {
  var communityData = issuesArray[1];
  res.render("issue", communityData);
});

router.get("/business", (req, res) => {
  var businessData = issuesArray[2];
  res.render("issue", businessData);
});

router.get("/homeless", (req, res) => {
  var homelessData = issuesArray[3];
  res.render("issue", homelessData);
});

router.get("/", (req, res) => {
  res.render("issues", issuesData);
});

module.exports = router;
