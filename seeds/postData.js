const { Post } = require("../models");

const postData = [
  {
    postTitle: "Video Games",
    postContent: "I never have time for video games anymore!",
    userid: 1,
  },
  {
    postTitle: "Studying",
    postContent: "If given the chance, keep studying!",
    userid: 2,
  },
  {
    postTitle: "Computer animation",
    postContent: "Imagine the coding in this movie!",
    userid: 3,
  },
  {
    postTitle: "Life",
    postContent: "All I want is the best life possible for my family!",
    userid: 4,
  },
];

const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
