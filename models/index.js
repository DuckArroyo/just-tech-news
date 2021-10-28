const User = require("./User");
const Post = require("./Post");

//create association User > Post
User.hasMany(Post, {
  foreignKey: "user_id",
});

//reverse association Post > User
Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
