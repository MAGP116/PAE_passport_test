const passport = require('passport');
const User = require('../models/User');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.googleId);
    });

passport.deserializeUser(function (googleId, done) {
    User.find(googleId)
    .then(user => done(null, user))
    .catch(err => done(err));
    });

passport.use(
new GoogleStrategy(
    {
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    function (accessToken, refreshToken, profile, done) {
        //console.log('working');
        //console.log('accessToken', accessToken);
        //console.log('refreshToken', refreshToken);
        //console.log('profile', profile);

        User.find(profile.id)
        .then((user)=>{
            done(null,user);
        })
        .catch((err)=>{
            //console.log(err);
            User.create({
                googleId: profile.id,
                email: profile.emails[0].value,
                timestamp: Date.now(),
                name:  profile.displayName,
                imagenUrl: profile.photos[0].value
            }).then(user=>done(null, user)
            ).catch(err=>done(err));
            
        })
}
)
);