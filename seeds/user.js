const { User } = require("../models");

const userdata = [
  {
    username: "Allen",
    email: "Iverson@gmail.com",
    password: "secretpassword1",
  },
  {
    username: "Charles",
    email: "Chuck@gmail.com",
    password: "secretpassword2",
  },
  {
    username: "Joel",
    email: "Embiid@gmail.com",
    password: "secretpassword3",
  },
  {
    username: "Doc",
    email: "Rivers@gmail.com",
    password: "secretpassword4",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
