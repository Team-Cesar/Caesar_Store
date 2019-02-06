const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/Category');

router.get('/findallcat', CategoryController.findAllCat);
router.get('/findcat/:id', CategoryController.findCat);
router.post('/addcat', CategoryController.addCat);
router.post('/editcat/:id', CategoryController.editCat);
router.get('/delcat/:id', CategoryController.delCat);

module.exports = router;