// imports express' router object
const router = require("express").Router();
// points to our index.js within the api folder
const apiRoutes = require("./api");
// imports our home-route
const homeRoutes = require("./home-routes.js");
// imports our dashboard-routes
const dashboardRoutes = require("./dash-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/dashboard", dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});
module.exports = router;
