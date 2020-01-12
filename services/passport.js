const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require('mongoose')
const keys = require("../config/keys");

const User= mongoose.model('users')

//using the passport module with the google strategy
// also providing the clientID and client secret and the callBackUrl
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, done) => {
      new User({googleId: profile.id}).save()
    }
  )
)