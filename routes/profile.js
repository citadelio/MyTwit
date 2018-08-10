const express = require("express");
const bodyParser = require('body-parser');
const router = express.Router();
const path = require('path');
const Users = require('../schemas/users');
const mongoose = require('mongoose');
const Twitter = require('twitter');
const keys = require('../secrete/twitterkey');
var client = new Twitter({
    consumer_key: keys.consumerKey,
    consumer_secret:  keys.consumerSecret,
    access_token_key: keys.access_token_key,
    access_token_secret: keys. access_token_secret
});
const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());


router.get('/',isLoggedIn, (req, res) => {
    let user_id = req.user.twitter_id;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
            client.get('users/show', {user_id:user.twitter_id,screen_name:user.username}, function (err, data, response) {
                if(err) console.log(err);
                res.json(data);
            });
        }else{
            res.json({error: "User not found"})
        }
    })
})

router.get('/fanatics',isLoggedIn, (req, res) => {
    let user_id =req.user.twitter_id;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
            client.get('followers/list', { screen_name: user.username },  function (err, data, response) {
                res.json(data)
              })
        }else{
            res.json({error: "User not found"})
        }
    })
})

router.get('/leads',isLoggedIn,  (req, res) => {
    let user_id =req.user.twitter_id;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
            client.get('friends/list', { screen_name: user.username },  function (err, data, response) {
                res.json(data);
              })
        }else{
            res.json({error: "User not found"})
        }
    })
})

router.get('/padi',isLoggedIn,  (req, res) => {
    let user_id = req.user.twitter_id;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
            client.get('friends/ids', { screen_name: user.username },  function (err, data, response) {
              let leads = data.ids;
              client.get('followers/ids', { screen_name: user.username },  function (err, data, response) {
                let fans = data.ids;
                let mutualFriends = [];
                let fansArray = [];
                let leadsArray = [];
                leads.forEach(user => {
                    if(fans.indexOf(user) >= 0){
                        mutualFriends.push(user);
                    }
                })
                let sliceFriends = mutualFriends.slice(0,99);
                let joinFriends = sliceFriends.join();
               client.get('users/lookup', {user_id: joinFriends}, (err,data,response) => {
                   res.json(data)
               })
              })
              })
        }else{
            res.json({error: "User not found"})
        }
    })
})

router.get('/not_follower',isLoggedIn,  (req, res) => {
    let user_id =req.user.twitter_id;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
            client.get('friends/ids', { screen_name: user.username },  function (err, data, response) {
              let leads = data.ids;
              client.get('followers/ids', { screen_name: user.username },  function (err, data, response) {
                let fans = data.ids;
                let not_follower = [];
                leads.forEach(user => {
                    if(fans.indexOf(user) == -1){
                        not_follower.push(user);
                    }
                })
                let slicenot_follower = not_follower.slice(0,99);
                let joinnot_follower = slicenot_follower.join();
               client.get('users/lookup', {user_id: joinnot_follower}, (err,data,response) => {
                   res.json(data)
               // res.render('index', {id:user_id, users:data})
               })
              })
              })
        }else{
            res.json({error: "User not found"})
        }
    })
})

router.get('/i_dont_follow',isLoggedIn,  (req, res) => {
    let user_id = req.user.twitter_id;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
            client.get('followers/ids', { screen_name: user.username },  function (err, data, response) {
              let fans = data.ids;
              client.get('friends/ids', { screen_name: user.username },  function (err, data, response) {
                let leads = data.ids;
                let i_dont_follow = [];
                fans.forEach(user => {
                    if(leads.indexOf(user) == -1){
                        i_dont_follow.push(user);
                    }
                })
                let slicei_dont_follow = i_dont_follow.slice(0,99);
                let joini_dont_follow = slicei_dont_follow.join();
               client.get('users/lookup', {user_id: joini_dont_follow}, (err,data,response) => {
                // res.render('follow', {id:user_id, users:data})
                res.json(data);
               })
              })
              })
        }else{
            res.json({error: "User not found"})
        }
    })
})

router.get('/unfollow/:user',isLoggedIn,  (req, res) => {
    let user_id = req.user.twitter_id;
    let friend_id = req.params.user;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
          client.post('friendships/destroy', {user_id:friend_id}, (err, data, response) => {
              res.json(data)
                      })
        }else{
            res.json({error: "User not found"})
        }
    })
})

router.get('/follow/:user',isLoggedIn,  (req, res) => {
    let user_id = req.user.twitter_id;
    let friend_id = req.params.user;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
          client.post('friendships/create', {user_id:friend_id}, (err, data, response) => {
              res.json(data)
                      })
        }else{
            res.json({error: "User not found"})
        }
    })
})

router.get('/unfollowed',isLoggedIn,  (req, res) => {
    let user_id = req.user.twitter_id;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
            oldfollowers = user.followers;
            unfollowedArray = [];
          client.get('followers/ids', {user_id:user_id}, (err, data, response) => {
            newfollowers = data.ids;
           
            oldfollowers.forEach(user => {
                if(newfollowers.indexOf(user) == -1){
                    unfollowedArray.push(user);
                }
            })
            if(unfollowedArray.length > 0){
                sliceunfollowedArray = unfollowedArray.slice(0,99);
                joinunfollowed = sliceunfollowedArray.join();
                //"90515250,586786732"
                client.get('users/lookup', {user_id:joinunfollowed}, (err,data,response) => {
                    res.json(data);
                    Users.update({followers:oldfollowers}, {$set:{followers:newfollowers}}, (err, data) => {
                      //  res.json(data);
                      console.log('Followers array updated');
                    })
                  });
            }else{
           res.json({status:"No new unfollower"});                
            }
                      })
                    }else{
                        res.json({error: "User not found"})
                    }
})
})

router.post('/scheduleTweet/',isLoggedIn,  (req, res) =>{
    console.log(req.user.username)
    console.log(client)
   let user_id =req.user.twitter_id;
    Users.findOne({twitter_id:user_id}, (err, user) => {
        if(user){
            let time = req.body.time;
            let date = req.body.date;
            let tweet = req.body.tweet;
            let fullDate = new Date(" "+date+" "+time);// date in milliseconds
            let currentDate = new Date();
            let scheduleDate = fullDate.getTime() - currentDate.getTime(); 
            
            // Make a Tweet when it gets to schedule date
            setTimeout(()=>{
                client.post('statuses/update', { status: tweet }, function(err, data, response) {
                  //  res.json(data)
                    res.json({
                        status:"successful", 
                        tweet: data.text , 
                        user: data.user.screen_name,
                        time: time })
                  })
            }, scheduleDate)
        }else{
                        res.json({error: "User not found"})
                    }
    })
    

})

router.get('/logout', (req, res) => {
    req.logout();
    res.json({status:"successful"});
})

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {
    // if user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // if they aren't redirect them to the home page
    res.json({status:'not authenticated'});
    next();
}
module.exports = router;