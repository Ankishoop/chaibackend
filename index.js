//console.log("Ankish");
require("dotenv").config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello Lakshya");
});

app.get("/about", (req, res) => {
  res.send("Ankishoop");
});

app.get("/login", (req, res) => {
  res.send("<h1> Ram Ram Bhai sarayane</h1>");
});

app.listen(process.env.PORT, () => {
  console.log(`listening at port ${port}`);
});
