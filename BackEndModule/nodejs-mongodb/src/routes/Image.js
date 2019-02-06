const express = require('express');
const router = express.Router();
const ImageController = require('../controllers/Image');

router.get('/fimgbyprod/:pro_id', ImageController.findImgByProd);
router.get('/findimg/:id', ImageController.findImg);
router.post('/addimg', ImageController.addImg);
router.post('/editimg/:id', ImageController.editImg);
router.get('/delimg/:id', ImageController.delImg);

module.exports = router;