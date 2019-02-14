const express = require('express');
const router = express.Router();
const { isLoggedIn, isNotLoggedIn, isAdmin } = require('../lib/auth');
const ProductController = require('../controllers/Product');

router.get('/findallprod', ProductController.findAllProd);
router.get('/findprod/:id', ProductController.findProd);
router.post('/addprod', isLoggedIn, isAdmin, ProductController.addProd);
router.post('/editprod/:id', isLoggedIn, isAdmin, ProductController.editProd);
router.get('/delprod/:id', isLoggedIn, isAdmin, ProductController.delProd);
router.get('/fprodbycat/:cat_id', ProductController.findProdByCat);
router.get('/fprodbybra/:bra_id', ProductController.findProdByBrand);

module.exports = router;