const express = require('express');
const router = express.Router();
const passport = require('passport');
router.get('/twitter', passport.authenticate('twitter')
);

router.get('/twitter/response', passport.authenticate('twitter', {
    failureRedirect:'/'//, successRedirect:'/profile'
}, (req, res)=>{
    //authenticated = true;
    res.redirect('/profile');
})
);

module.exports = router;
