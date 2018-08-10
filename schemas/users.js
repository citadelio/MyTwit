const mongoose = require('mongoose');
mongoose.connect('mongodb://twitpadi:jakande50@ds131971.mlab.com:31971/twitpadi');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;
const UserSchema = new Schema({
        twitter_id:Number,
        username: String,
        twitterToken: String,
        followers: Array
});

var Users = module.exports = mongoose.model('user', UserSchema);