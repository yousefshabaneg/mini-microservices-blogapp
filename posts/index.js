const express = require("express");
const axios = require("axios");
const Post = require("./Post");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
  res.status(200).json(Post.getAllPosts());
});

app.post("/posts", async (req, res) => {
  const { title } = req.body;
  const createdPost = Post.createNewPost(title);

  await axios.post("http://event-bus-srv:4005/events", {
    type: "PostCreated",
    data: createdPost,
  });
  res.status(201).json(createdPost);
});

app.post("/events", (req, res) => {
  console.log("Received Event: ", req.body.type);

  res.json({});
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log("V60");
  console.log(`Listening on http://localhost:${PORT}`);
});
