const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Always anticipate errors!",
    user_id: 1,
    post_id: 1,
  },
  {
    comment_text: "I hope I can get this homework done tonight!",
    user_id: 2,
    post_id: 2,
  },
  {
    comment_text: "Sometimes, you need to take a break...",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "Stay positive, look for easy wins.",
    user_id: 4,
    post_id: 4,
  },
];

// here we edit more than one record at a time by utilizing bulkCreate
// we will use the above array of objects to seed our database with some sample comments
const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
