const router = require("express").Router();

const userRoutes = require("./users-routes.js");
const postRoutes = require("./posts-routes.js");
const commentRoutes = require("./comments-routes.js");

router.use("/users", usersRoutes);
router.use("/posts", postsRoutes);
router.use("/comments", commentsRoutes);

module.exports = router;
