import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import axios from "axios";
import _ from "lodash";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
