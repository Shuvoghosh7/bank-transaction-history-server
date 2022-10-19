const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");

//middleware
app.use(express.json());
app.use(cors());
//routes
const transactionRoute=require('./routes/transaction.route');


app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

// route colling
app.use("/api/v1",transactionRoute)

 

module.exports = app;
