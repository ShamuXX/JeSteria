const routes = (module.exports = require("next-routes")());

routes
  .add("Login")
  .add("Home")
  .add({ name: "beta", pattern: "/v3", page: "v3" });
