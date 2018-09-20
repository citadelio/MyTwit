const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const TwitterStrategy = require('passport-twitter').Strategy;
const logger = require('morgan');
const session = require('express-session');
const path = require('path');
const Twitter = require('twitter');
const keys = require('./secrete/twitterkey');
const Tauth = require('./routes/auth');
const Profile = require('./routes/profile');
const routes = require('./routes/index');
const User = require('./schemas/users');
const cors = require('cors');

const app = express();
// Enable CORS
app.use(cors());
//initialise session
app.use(session({
    secret: 'Some key val',
    resave: true,
    saveUninitialized: true
}));
//initialise passport
app.use(passport.initialize());
app.use(passport.session());
// view engine setup
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
// Static folder
app.use(express.static(path.join(__dirname, 'client','public','index.html')));
// app.use(express.static('client/build'));
// app.get('*', (req,res)=>{
//   res.sendFile(path.resolve(__dirname,'client','build','index.html'));
// })
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(logger('dev'));

//Routes
app.use('/auth', Tauth);
app.use('/profile', Profile);
app.use('/', routes);

var client = new Twitter({
  consumer_key: keys.consumerKey,
  consumer_secret:  keys.consumerSecret,
  access_token_key: keys.access_token_key,
  access_token_secret: keys. access_token_secret
});

passport.use(new TwitterStrategy({
        consumerKey: keys.consumerKey,
        consumerSecret: keys.consumerSecret,
        callbackURL: keys.callbackURL
    },
  
    function(token, tokenSecret, profile, cb) {
     // console.log(profile)
     process.nextTick(function() {
        User.findOne({ twitter_id: profile.id }, function (err, user) {
          if (err) console.log(err);
                if (user) {
                    return cb(null, user); // user found, return that user
                } else {
                  client.get('followers/ids', { user_id:profile.id},  function (err, data, response) {
                    followers = data.ids;
                    const getUser = new User({
                    twitter_id: profile.id,
                    username: profile.username,
                    twitterToken : token,
                    followers:followers
                });
                getUser.save(function (err, user) {
                    if(err) console.log(err);
                    return cb(null, getUser);
                });
              })
                }
         
        });
      });
      }
));

////////////////////////////
passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findById(id, function (err, user) {
      done(err, user);
    });
  });
  // app.get('*', (req,res)=>{
  //   res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  // })
/////////////////////////////////
if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req,res)=>{
    res.sendFile(path.resolve(__dirname,'client','build','index.html'));
  })
}
var port = 5000;
// Start server
app.listen(process.env.PORT || port ,() => console.log(`Server started on port ${port} `));