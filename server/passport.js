const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.export = function(passport, LocalStrategy) {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {

  });


};