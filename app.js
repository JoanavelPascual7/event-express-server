const cors = require("cors");
const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("🌎Events Server🌎");
});

// EVENTS ROUTES
const eventsController = require("./controllers/eventsController.js");
app.use("/events", eventsController);

// REVIEWS ROUTES
const reviewsController = require("./controllers/reviewsController.js");
app.use("/reviews", reviewsController);

// USERS ROUTES
const usersController = require("./controllers/usersController.js");
app.use("/users", usersController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

module.exports = app;
