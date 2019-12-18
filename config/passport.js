const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const mongoose = require("mongoose");
const Customer = mongoose.model("customers");
const keys = require("../config/keys");
const Strategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;



const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

module.exports = passport => {


  passport.use(new GoogleStrategy({
      clientID: "online-shop-261808",
      clientSecret: "479723769648",
      callbackURL: "http://localhost:5000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  ));

  passport.use(new Strategy({
      clientID: '2541112962624188',
      clientSecret: 'c0251a9c2be18f4cad567790716bd0b1',
      callbackURL: 'http://localhost:5000/auth/facebook/callback'
    },
    function(accessToken, refreshToken, profile, cb) {
      console.log( profile);
      // cb(null, profile);
    }));

  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      Customer.findById(jwt_payload.id)
        .then(customer => {
          if (customer) {
            return done(null, customer);
          }
          return done(null, false);
        })
        .catch(err => console.log(err));
    })
  );
};
