const express = require('express');
const router = express.Router();
const BrandController = require('../controllers/Brand');

router.get('/findallbrand', BrandController.findAllBrand);
router.get('/findbrand/:id', BrandController.findBrand);
router.post('/addbrand', BrandController.addBrand);
router.post('/editbrand/:id', BrandController.editBrand);
router.get('/delbrand/:id', BrandController.delBrand);

module.exports = router;