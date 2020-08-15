const express = require('express');
const router = express.Router();

router.get('/logged', (req, res) => {
    if(req.user){
        res.render('logged');
      }
      else{res.render('noPermission')};
    });

router.get('/no-permission', (req, res) => {
  res.render('noPermission');
});


module.exports = router;