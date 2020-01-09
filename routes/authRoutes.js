const passport = require("passport");

module.exports = app => {
  //the rout that start the oauth with the google auth
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //the callBack rout
  app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );
};
