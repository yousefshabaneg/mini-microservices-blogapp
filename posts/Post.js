const { randomBytes } = require("crypto");
class Post {
 #posts;

 constructor() {
  this.#posts = {};
 }

 getAllPosts() {
  return this.#posts;
 }

 createNewPost(title) {
  const id = randomBytes(4).toString("hex");
  this.#posts[id] = { id, title };
  return this.#posts[id];
 }
}

module.exports = new Post();
