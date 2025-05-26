const express = require("express");
require("./db/conn");
const Registor = require("./models/Registor");
const app = express();
const port = 3000;
const path = require("path");
const hbs = require("hbs");

const static_path = path.join(__dirname, "../public");
const templates_path = path.join(__dirname, "../templates/views");
const partial_path = path.join(__dirname, "../templates/partials");
console.log(static_path);

// app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partial_path);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/registor", (req, res) => {
  res.render("registor");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/registor", (req, res) => {
  // console.log(req);
  try {
    const password = req.body.password;
    const conf_password = req.body.conf_password;

    if (password === conf_password) {
      const newRegistor = new Registor(req.body);
      console.log(newRegistor);
      newRegistor.save();
      res.send("Registration is sucessful");
    } else {
    }
  } catch (err) {
    console.log(err);
    res.send("password is not matching");
  }
});

app.post("/login/verification", (req, res) => {
  check();

  async function check() {
    const user = await Registor.find({
      email: req.body.email,
      password: req.body.password,
    });

    console.log(user);
    if (user.length !== 0) {
      res.send("login success");
    } else {
      res.send("fail");
    }
  }
});

app.listen(port, () => {
  console.log("server is started" + `${port}`);
});
