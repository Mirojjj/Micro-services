const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "hello from payment",
  });
});

app.post("/receive", (req, res) => {
  console.log("Payment service received:", req.body);

  res.send("Data received by payment service!");
});

app.listen(8000, () => {
  console.log("payment service running");
});
