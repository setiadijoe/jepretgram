var express = require('express');
var router = express.Router();
const User = require('../controllers/users')

router.post('/signup', User.signUp)

module.exports = router;
