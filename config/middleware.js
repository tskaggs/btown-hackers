var passport = require('passport')
    , GitHubStrategy = require('passport-github').Strategy;


var verifyHandler = function (token, tokenSecret, profile, done) {
    process.nextTick(function () {

        User.findOne({
                or: [
                    {uid: parseInt(profile.id)},
                    {uid: profile.id}
                ]
            }
        ).done(function (err, user) {
                if (user) {
                    return done(null, user);
                } else {

                    var data = {
                        provider: profile.provider,
                        uid: profile.id,
                        name: profile.displayName,
                        profileUrl: profile.profileUrl,
                        hireable: profile.hireable,
                        location: profile.location,
                        company: profile.company,
                        followers: profile.followers,
                        public_repos: profile.public_repos,
                        bio: profile.bio,
                        avatar_url: profile.profilePic,
                    };

                    if(profile.emails && profile.emails[0] && profile.emails[0].value) {
                        data.email = profile.emails[0].value;
                    }
                    if(profile.name && profile.name.givenName) {
                        data.fistname = profile.name.givenName;
                    }
                    if(profile.name && profile.name.familyName) {
                        data.lastname = profile.name.familyName;
                    }

                    User.create(data).done(function (err, user) {
                            return done(err, user);
                        });
                }
            });
    });
};

passport.serializeUser(function (user, done) {
    done(null, user.uid);
});

passport.deserializeUser(function (uid, done) {
    User.findOne({uid: uid}).done(function (err, user) {
        done(err, user)
    });
});


module.exports = {

    // Init custom express middleware
    express: {
        customMiddleware: function (app) {

            passport.use(new GitHubStrategy({
                    clientID: "e2618c899ce23da6ae3b",
                    clientSecret: "46a128b567a3193d38c1b43f6f9d8ff9dd91cad7",
                    callbackURL: "http://localhost:1337/auth/github/callback"
                },
                verifyHandler
            ));

            app.use(passport.initialize());
            app.use(passport.session());
        }
    }

};
