const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const cors = require("cors");



const app = express();


app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);



module.exports = app;