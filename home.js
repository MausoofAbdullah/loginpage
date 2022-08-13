var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  if (req.session.login) {
   res.redirect("/index");
  } else {
    res.render("home", { loginError: req.session.loginError });
    req.session.loginError = false;
  }
});

//form authentication

const name = "mausoofabdullah@gmail.com";
const password = 123123;

router.post("/index", function (req, res) {
  let userName = req.body.email;
  let inPassword = req.body.password;

  if (userName == name && inPassword == password) {
    req.session.login = true;
    res.redirect("/index");
  } else {
    req.session.loginError = true;
    res.redirect("/");
  }
});

router.get("/logout", (req, res) => {
  req.session.destroy();
  res.redirect("/");
});

module.exports = router;
