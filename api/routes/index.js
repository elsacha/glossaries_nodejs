var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.JWT_SECRET,
  userProperty: 'payload'
});

var ctrlEngRus = require('../controllers/glosCtrls');
var ctrlAuth = require('../controllers/authentication');

router.get('/home', ctrlEngRus.ctrlHome);
router.get('/engrus/:w', auth, ctrlEngRus.ctrlTranslateEngRus);

// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
