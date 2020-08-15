const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
    if(req.user){
      res.render('logged', { name: req.user.name.givenName, avatar: req.user.photos[0].value } , console.log('hidden data: ', req.user), console.log('picture path: ', req.user.photos[0].value)  );
      }
      else{res.render('noPermission')};
    });

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});

router.get('/profile', (req, res) => {
    if(req.user){
      res.render('profile');
    }
    else{res.render('noPermission')};
  });
  
  router.get('/profile/settings', (req, res) => {
    if(req.user){
      res.render('settings');
    }
    else{res.render('noPermission')};
  });

  router.get('/auth.logout', (req, res) => {
    res.render('logOff')
    req.logout();
    });


module.exports = router;