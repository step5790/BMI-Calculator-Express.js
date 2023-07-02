// jshint esversion:6

const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// declare this to use body-parser

app.use(bodyParser.urlencoded({ extended: true }));

// listen to server

app.listen(3000, function () {
  console.log("server started");
});

// this till get from home route fx. index.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

// this will post & send the variables; home route fx. index.html
app.post("/", function (req, res) {
  console.log(req.body);

  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var output = weight / Math.pow(height, 2);

  res.send("Your BMI is:" + Math.round(output));
});

// this will get the get the result from post, specific url fx. localhost:3000/bmicalculator
app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var output = weight / Math.pow(height, 2);

  res.send("Your BMI is:" + Math.round(output));
});
