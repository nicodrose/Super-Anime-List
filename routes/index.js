const express = require('express');
const router = express.Router();
const passport = require('passport');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Super Anime List' });
});

router.get('/auth/google', passport.authenticate(
  // Which passport strategy is being used? Here it's google OAuth
  'google',
  {
    scope: ['profile', 'email'],
    // Optionally, forces user to pick account every time. 
    // If you have multiple accounts, will prompt you for which acct every time
    prompt: 'select_account'
  }
));

router.get('/oauth2callback', passport.authenticate(
  'google',
  {
    successRedirect: '/',
    // Change to what's best for YOUR app. For your app might just be root '/'
    failureRedirect: '/'
  }
));

router.get('/logout', function (req, res) {
  req.logout(function () {
    // Change path for YOUR 'landing' page, maybe root '/'
    res.redirect('/');
  });
});

module.exports = router;
