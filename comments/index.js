const express = require("express");
const bodyParser = require("body-parser");
const { randomBytes } = require("crypto");
const cors = require("cors");
const axios = require("axios");
const asyncHandler = require("express-async-handler");

const app = express();

app.use(bodyParser.json());
app.use(cors());

const commentsByPostId = {};

app.get("/posts/:id/comments", (req, res) => {
  res.send(commentsByPostId[req.params.id] || []);
});

app.post(
  "/posts/:id/comments",
  asyncHandler(async (req, res) => {
    const commentId = randomBytes(4).toString("hex");
    const { content } = req.body;
    const comments = commentsByPostId[req.params.id] || [];
    const comment = { id: commentId, content, status: "pending" };
    comments.push(comment);
    commentsByPostId[req.params.id] = comments;
    await axios.post("http://localhost:4005/events", {
      type: "CommentCreated",
      data: {
        ...comment,
        postId: req.params.id,
      },
    });
    res.status(201).send(comments);
  })
);

app.post(
  "/events",
  asyncHandler(async (req, res) => {
    console.log("[comments] Event Received:", req.body.type);
    const { type, data } = req.body;
    if (type === "CommentModerated") {
      const { postId, id, status, content } = data;
      const comments = commentsByPostId[postId];
      const comment = comments.find((comment) => {
        return comment.id === id;
      });
      comment.status = status;
      await axios.post("http://localhost:4005/events", {
        type: "CommentUpdated",
        data: {
          id,
          status,
          postId,
          content,
        },
      });
    }
    res.send({});
  })
);

app.use((err, req, res, next) => {
  console.error("[comments]", err.stack);
});

app.listen(4001, () => {
  console.log("Listening on 4001");
});
