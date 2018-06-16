const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const galleryData = require("./public/js/galleryData.js");
const campaignGalleryData = require("./public/js/campaignGalleryData.js");
const issuesRoute = require("./routers/issues.js");

const app = express();
const PORT = process.env.PORT || 3000;
const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")));

app.use("/issues", issuesRoute);

app.get("/gallery", (req, res) => {
  //console.log("galleryData", galleryData.galleries[1]);
  res.render("gallery", galleryData);
});

app.get("/campaign", (req, res) => {
  //console.log("galleryData", galleryData.galleries[1]);
  res.render("gallery", campaignGalleryData);
});

app.get("/about", (req, res) => {
  res.render("about");
});

app.get("/getinvolved", (req, res) => {
  res.render("getinvolved");
});

app.get("/message", (req, res) => {
  res.render("message");
});

app.get("/", (req, res) => {
  res.render("home"); //( view, dataToInput )
});

const server = app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
