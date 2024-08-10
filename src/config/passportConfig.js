const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const UserRepository = require('../repositories/userRepository');

// Configure the Local Strategy
passport.use(new LocalStrategy(
  {
    usernameField: 'email', // assuming you want to use email as the username field
    passwordField: 'password', // this is the default field for password
  },
  async (email, password, done) => {
    try {
      // Find the user by email
      const user = await UserRepository.getUserByEmail(email);
      if (!user) {
        return done(null, false, { message: 'Incorrect email.' });
      }

      // Validate the password
      const isPasswordValid = await bcrypt.compare(password, user.password);
      if (!isPasswordValid) {
        return done(null, false, { message: 'Incorrect password.' });
      }

      // If everything is fine, return the user
      return done(null, user);
    } catch (err) {
      return done(err);
    }
  }
));

// Serialize the user to store in the session
passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize the user from the session
passport.deserializeUser(async (id, done) => {
  try {
    const user = await UserRepository.getUserById(id);
    done(null, user);
  } catch (err) {
    done(err);
  }
});

module.exports = passport;
