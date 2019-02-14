const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn, isAdmin } = require('../lib/auth');
const BrandController = require('../controllers/Brand');

router.get('/findallbrand', BrandController.findAllBrand);
router.get('/findbrand/:id', BrandController.findBrand);
router.post('/addbrand', isLoggedIn, isAdmin, BrandController.addBrand);
router.post('/editbrand/:id', isLoggedIn, isAdmin, BrandController.editBrand);
router.get('/delbrand/:id', isLoggedIn, isAdmin, BrandController.delBrand);

module.exports = router;