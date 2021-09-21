const { Post } = require("../models");

const postData = [
  {
    title: "Video Games",
    content: "I never have time for video games anymore!",
    user_id: 1,
  },
  {
    title: "Studying",
    content: "If given the chance, keep studying!",
    user_id: 2,
  },
  {
    title: "Computer animation",
    content: "Imagine the coding in this movie!",
    user_id: 3,
  },
  {
    title: "Life",
    content: "All I want is the best life possible for my family!",
    user_id: 4,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
