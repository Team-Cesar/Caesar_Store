const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/Product');

router.get('/findallprod', ProductController.findAllProd);
router.get('/findprod/:id', ProductController.findProd);
router.post('/addprod', ProductController.addProd);
router.post('/editprod/:id', ProductController.editProd);
router.get('/delprod/:id', ProductController.delProd);
router.get('/fprodbycat/:cat_id', ProductController.findProdByCat);
router.get('/fprodbybra/:bra_id', ProductController.findProdByBrand);

module.exports = router;