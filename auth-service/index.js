const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const User = require("./backend/model/user.Model.js");
const connect = require("./backend/dbConnect.js");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "yo i am from the auth service",
  });
});

app.post("/test", (req, res) => {
  res.send("this is from auth servicdss ok");
});

app.listen(8001, () => {
  console.log("server listening on port 8001");

  // connect to the database
  // connect();
});
