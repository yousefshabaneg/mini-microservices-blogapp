const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

app.get("/posts", (req, res) => {
 res.status(200).json(posts);
});

app.post("/events", (req, res) => {
 const { type, data } = req.body;

 if (type === "PostCreated") {
  const { id, title } = data;
  posts[id] = { id, title, comments: [] };
 } else if (type === "CommentCreated") {
  const { id, content, postId, status } = data;
  posts[postId].comments.push({ id, content, status });
 }

 console.log("Received Event: ", req.body.type);

 res.json({});
});

const PORT = 4002;
app.listen(PORT, () => {
 console.log(`Listening on http://localhost:${PORT}`);
});
