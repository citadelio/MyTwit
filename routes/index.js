const express = require('express');
const router = express.Router();
const Twitter = require('twitter');
const keys = require('../secrete/twitterkey');
const client = new Twitter({
    consumer_key: keys.consumerKey,
    consumer_secret:  keys.consumerSecret,
    access_token_key: keys.access_token_key,
    access_token_secret: keys. access_token_secret
});
router.get('/', (req, res) => {
    res.json({title: "Home page"})
})
router.get('/friendsof/:screen_name', (req, res) => {
    let friendName = req.params.screen_name;
    client.get('/followers/list', {screen_name:friendName}, (err, data, response) =>{
        if(data.users){
            res.json(data);
        }else{
            res.json({users:"No user found"})
        }
    })

});


module.exports = router;