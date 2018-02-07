const express = require("express");
const exphbs = require("express-handlebars");
const path = require("path");

const app = express();

const PORT = process.env.PORT || 3000;

const hbs = exphbs.create({
  defaultLayout: "main",
  extname: "hbs"
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");

app.use(express.static(path.join(__dirname, "/public")));

app.get("/issues", (req, res) => {
  res.render("issues");
});

app.get("/", (req, res) => {
  res.render("home"); //( view, dataToInput )
});

const server = app.listen(PORT, () => {
  console.log(`server listening at ${PORT}`);
});
