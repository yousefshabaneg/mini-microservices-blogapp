const { randomBytes } = require("crypto");
class Comment {
 #commentsByPostId;

 constructor() {
  this.#commentsByPostId = {};
 }

 getCommentsByPostId(postId) {
  return this.#commentsByPostId[postId] || [];
 }

 addCommentToPost(postId, content) {
  const id = randomBytes(4).toString("hex");

  if (!this.#commentsByPostId[postId]) {
   this.#commentsByPostId[postId] = [];
  }
  this.#commentsByPostId[postId].push({ id, content });
  return { id, content };
 }
}

module.exports = new Comment();
