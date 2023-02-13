const cors = require("cors");
const express = require("express");
const itemsController = require("./controllers/itemsController");

//! CONFIGURATION
const app = express();

//! MIDDLEWARE
app.use(cors());
app.use(express.json());

//! ROUTES
app.use("/items", itemsController);

app.get("/", (req, res) => {
  res.send("Welcome to the Ducky App");
});

app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
