const express = require("express");
const path = require("node:path");

const feedRoutes = require("./routes/feed");

const app = express();

app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === "OPTIONS") return res.sendStatus(204);
  next();
});

app.use("/feed", feedRoutes);

module.exports = app;
