import "dotenv/config";
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import axios from "axios";
import _ from "lodash";

const app = express();
const port = 3000;

//set the root for static files at the "public" directory
app.use(express.static("public"));
//allows grabbing body inputs from forms
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app
  .route("/login")
  .get((req, res) => {
    res.render("login.ejs");
  })
  .post((req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
  });
app
  .route("/register")
  .get((req, res) => {
    res.render("register.ejs");
  })
  .post((req, res) => {
    console.log(req.body.email);
    console.log(req.body.password);
  });

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
