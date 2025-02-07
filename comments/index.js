const express = require("express");
const Comment = require("./Comment");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/posts/:id/comments", (req, res) => {
 const { id } = req.params;
 res.status(200).json(Comment.getCommentsByPostId(id));
});

app.post("/posts/:id/comments", (req, res) => {
 const { content } = req.body;
 const { id } = req.params;
 const createdComment = Comment.addCommentToPost(id, content);
 res.status(201).json(createdComment);
});

const PORT = 4001;
app.listen(PORT, () => {
 console.log(`Listening on http://localhost:${PORT}`);
});
