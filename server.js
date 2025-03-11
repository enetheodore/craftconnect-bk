require("dotenv").config(); //this loads the defined variables from .env file
const dbConnect = require("./config/dbConnect");
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
dbConnect();

app.use(express.json()); //this is a middleware that parses the incoming request with JSON payloads
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use('/test', require('./routes/testRoute'));
app.use("/register", require("./routes/apiRoute"));
app.use("/login", require("./routes/apiRoute"));
app.use("/cart", require("./routes/cartRoute"));
app.use("/order", require("./routes/orderRoute"));

// This is the error handler for routes that doesn't exist
app.all("*", (req, res) => {
  res.status(404).send("Page not found");
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
