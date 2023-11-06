const express = require("express");
const path = require("path");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv").config();
const cors = require("cors");

app.use(cors());

app.use(express.static(path.join(__dirname, "sathyagarments", "build")));

mongoose.connect(
  `mongodb+srv://saravana1:${process.env.mongopass}@cluster0.gdr7v46.mongodb.net/sathyagarments?retryWrites=true&w=majority`
);

app.get("/offers", (req, res) => {
  res.json([
    {
      url: "https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg",
    },
    {
      url: "https://img.freepik.com/free-vector/mega-sale-offers-banner-template_1017-31299.jpg",
    },
  ]);
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/sathyagarments/build/index.html"));
});

app.post("/signup", (req, res) => {});

app.listen("8000");
