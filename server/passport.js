const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

module.exports = function(passport, User) {
  passport.serializeUser((user, done) => {
    console.log('============ serialize');
    console.log(user);
    console.log(user.id);
    done(null, user.id);
  });

  passport.deserializeUser((id, done) => {
    console.log('============ deserialize');
    new User({ 'id': id }).fetch().then((model) => {
      console.log('============ here?', model.get('username'));
      done(null, model);
    }).catch((error) => {
      console.log('============ or here?');
      done(error, null);
    });
  });

  passport.use('local-signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    console.log(username);
    console.log(password);
    new User({ username: username }).fetch().then((model) => {
      if (model) {
        done(null, false);
      } else {
        console.log('is it here?: first');
        bcrypt.hash(password, 10, (err, hash) => {
          User.forge({
            username: username,
            password: hash
          }).save().then((user) => {
            console.log('is it here?: ', user);
            done(null, user);
          }).catch((error) => {
            console.log('is it error?: ', error);
            done(error, null);
          });
        });
      }
    });
  }));

  passport.use('local', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password'
  }, (username, password, done) => {
    console.log(username);
    console.log(password);
    new User({ username: username }).fetch().then((model) => {
      if (!model) {
        done(null, false);
      } else {
        console.log('is it here?: first');
        bcrypt.compare(password, model.get('password'), (err, results) => {
          if (results) {
            done(null, model);
          } else {
            done(null, false);
          }
        });
      }
    });
  }));

};