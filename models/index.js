const User = require("./User.js");
const Post = require("./Post.js");
const Comment = require("./Comment.js");

// comment
User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Comment.belongsTo(Post, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "cascade",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
  onDelete: "cascade",
});

module.exports = { User, Post, Comment };
