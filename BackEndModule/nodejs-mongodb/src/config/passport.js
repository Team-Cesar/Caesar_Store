var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
// var mongoose = require('mongoose');
var User = require('../models/Users/user');


passport.use(new LocalStrategy({
    usernameField: 'user_username',
    passwordField: 'user_pass'
  },
  function(username, password, done) {
    User.findOne({ user_username: username }, function (err, user) {
      if (err) { return done(err); }
      // Return if user not found in database
      if (!user) {
        return done(null, false, {
          message: 'User not found'
        });
      }
      // Return if password is wrong
      if (!user.validPassword(password)) {
        return done(null, false, {
          message: 'Password is wrong'
        });
      }
      // If credentials are correct, return the user object
      return done(null, user);
    });
  }
));