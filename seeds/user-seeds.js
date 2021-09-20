const { User } = require("../models");

const userdata = [
  {
    username: "Allen",
    password: "secretpassword1",
  },
  {
    username: "Charles",
    password: "secretpassword2",
  },
  {
    username: "Joel",
    password: "secretpassword3",
  },
  {
    username: "Doc",
    password: "secretpassword4",
  },
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
