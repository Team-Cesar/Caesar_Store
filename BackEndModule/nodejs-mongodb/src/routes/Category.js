const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn, isAdmin } = require('../lib/auth');
const CategoryController = require('../controllers/Category');

router.get('/findallcat', CategoryController.findAllCat);
router.get('/findcat/:id', CategoryController.findCat);
router.post('/addcat', isLoggedIn, isAdmin, CategoryController.addCat);
router.post('/editcat/:id', isLoggedIn, isAdmin, CategoryController.editCat);
router.get('/delcat/:id', isLoggedIn, isAdmin, CategoryController.delCat);

module.exports = router;