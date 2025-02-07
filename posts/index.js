const express = require("express");
const Post = require("./Post");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/posts", (req, res) => {
 res.status(200).json(Post.getAllPosts());
});

app.post("/posts", (req, res) => {
 const { title } = req.body;
 const createdPost = Post.createNewPost(title);
 res.status(201).json(createdPost);
});

const PORT = 4000;
app.listen(PORT, () => {
 console.log(`Listening on http://localhost:${PORT}`);
});
