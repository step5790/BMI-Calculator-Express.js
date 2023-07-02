// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, function () {
  console.log("server started");
});

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});
