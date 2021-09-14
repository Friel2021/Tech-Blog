const sequelize = require("../config/connection");
const seedUsers = require("./users-seed");
const seedPosts = require("./posts-seed");
const seedComments = require("./comments-seed");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  await seedUsers();
  await seedPosts();
  await seedComments();
  process.exit(0);
};

seedAll();
