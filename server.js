const express = require("express");
const connectDB = require("./config/connectDB");
const Person = require("./model/Person");

const app = express();
const port = 5000;

connectDB();

app.use(express.json());

app.listen(port, (err) =>
  err ? console.log(err) : console.log(`Example app listening on port ${port}!`)
);