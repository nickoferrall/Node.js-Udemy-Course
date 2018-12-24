const express = require("express");

var app = express();

app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  //   res.send("<h1>Hello express</h1>");
  res.send({
    name: "Dave",
    likes: ["football", "travel"]
  });
});

app.get("/about", (req, res) => {
  res.send("About page");
});

app.get("/bad", (req, res) => {
  res.send({
    errorMessage: "Didn't work old sport!"
  });
});

app.listen(3000);
