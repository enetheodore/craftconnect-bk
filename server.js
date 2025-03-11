const dbConnect = require("./config/dbConnect");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
dbConnect();
app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
});

mongoose.connection.on("error", (error) => {
  console.log("Error connecting to MongoDB", error);
}); 

module.exports = app;
