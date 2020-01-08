const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require("./config/keys");

const app = express();

//using the passport module with the google strategy
// also providing the clientID and client secret and the callBackUrl
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    accessToken => {
      console.log(accessToken);
    }
  )
);

//the rout that start the oauth with the goole auth
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

const PORT = process.env.PORT || 5000;
app.listen(PORT);
