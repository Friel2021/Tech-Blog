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
];

const seedUser = () =>
  User.bulkCreate(userdata, {
    individualHooks: true,
    returning: true,
  });

module.exports = seedUser;
