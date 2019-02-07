const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn, isAdmin } = require('../lib/auth');
const UserController = require('../controllers/User');

var Usuario = require('../models/Users/user');

router.post('/signin', isNotLoggedIn, UserController.signin);


module.exports = router;