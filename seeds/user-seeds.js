const { User } = require("../models");

const userdata = [
  {
    username: "Allen",
    password: "secret",
  },
  {
    username: "Charles",
    password: "secret",
  },
  {
    username: "Joel",
    password: "secret",
  },
  {
    username: "Doc",
    password: "secret",
  },
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
