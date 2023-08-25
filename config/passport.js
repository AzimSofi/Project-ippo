const passport = require('passport');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const LocalStrategy = require('passport-local').Strategy;


passport.use(new LocalStrategy(
  (username, password, done) => {
    User.findOne({ username: username }, (err, user) => {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Incorrect username.' }); }
        // ここでパスワードの検証などを行う

        bcrypt.compare(password, user.password, (err, isMatch) => {
            if (err) { return done(err); }

            if (isMatch) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Incorrect password.' });
            }
        });

        return done(null, user);
    });
  }
));

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;