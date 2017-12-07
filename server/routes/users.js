var express = require('express');
var router = express.Router();
const User = require('../controllers/users')

router.post('/signup', User.signUp)
router.post('/signin', User.signIn)
router.get('/', User.getAll)

module.exports = router;
