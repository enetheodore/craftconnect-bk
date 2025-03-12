require("dotenv").config(); 
const dbConnect = require("./config/dbConnect");
const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
dbConnect();

app.use(cors({ origin: "*" }));

app.use(express.json()); //this is a middleware that parses the incoming request with JSON payloads
app.get("/", (req, res) => {
  res.send("Hello World!");
});


app.use('/test', require('./routes/testRoute'));
app.use("/register", require("./routes/userRoute"));
app.use("/login", require("./routes/userRoute"));
app.use("/product", require("./routes/productRoute"));
app.use("/order", require("./routes/orderRoute"));
app.use("/category", require("./routes/categoryRoute"));  
app.use("/file", require("./routes/fileRoute"));
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
