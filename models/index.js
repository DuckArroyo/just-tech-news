const User = require("./User");
const Post = require("./Post");
const Vote = require("./Vote");

//create association User > Post
User.hasMany(Post, {
  foreignKey: "user_id",
});

//reverse association Post > User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

User.belongsToMany(Post, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "user_id",
});

Post.belongsToMany(User, {
  through: Vote,
  as: "voted_posts",
  foreignKey: "post_id",
});

module.exports = { User, Post };
