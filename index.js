require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const  User = require("./models/userSchema.js");
const Question = require("./models/questions.js");

const PORT = process.env.PORT || 5000;

const mongo_uri =process.env.MONGO_URI;

mongoose
  .connect(mongo_uri)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.get("/api", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/questions", (req, res) => {
  Question.find({}, (err, questions) => {
    if (err) {
      res.send(err);
    } else {
      res.send(questions);
    }
  });
});

app.listen(PORT, () => {
  console.log("Listening on port"+PORT);
});
