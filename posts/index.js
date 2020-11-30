const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
const asyncHandler = require("express-async-handler");

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

app.get("/posts", (req, res) => {
  res.send(posts);
});

app.post(
  "/posts/create",
  asyncHandler(async (req, res) => {
    const id = randomBytes(4).toString("hex");
    const { title } = req.body;
    posts[id] = {
      id,
      title,
    };
    await axios.post("http://event-bus-srv:4005/events", {
      type: "PostCreated",
      data: {
        id,
        title,
      },
    });
    res.status(201).send(posts[id]);
  })
);

app.post("/events", (req, res) => {
  console.log("[posts - POST /events] Event Received:", req.body.type);
  res.send({});
});

app.use((err, req, res, next) => {
  console.error("[posts - error]", err.stack);
});

app.listen(4000, () => {
  console.log("Listening on 4000");
});
