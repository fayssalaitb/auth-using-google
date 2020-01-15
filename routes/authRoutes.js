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
app.get('/api/logout', (req,res)=>{
  req.logout();
  res.send(req.user);
})
  app.get('/api/current_user', (req, res)=>{
    res.send(req.user)
  });
};
