const { Comment } = require("../models");

const commentData = [
  {
    comment_text: "Testing, testing, 1, 2, 3!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "First!",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: "I agree",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "For sure",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "No doubt",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "Agreed!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Eh, if you say so!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "Sounds good!",
    user_id: 2,
    post_id: 1,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
