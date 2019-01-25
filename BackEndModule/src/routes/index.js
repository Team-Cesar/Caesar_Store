const express = require('express');
const router = express.Router();
const Task = require('../models/task');
const Smartphone = require('../models/smartphone');
const Tablet = require('../models/tablet');
const Camera = require('../models/camera');
const Accesory = require('../models/accesory');
const Brand = require('../models/brand');
const Product = require('../models/product');
const Image = require('../models/image');

router.get('/', async (req, res)=> {
    const smartphones = (JSON.stringify(await Smartphone.find()));
    const tablets = (JSON.stringify(await Tablet.find()));
    const cameras = (JSON.stringify(await Camera.find()));
    const accesories = (JSON.stringify(await Accesory.find()));
    res.end(smartphones, tablets, cameras, accesories);
});

router.post('/addsmart', async (req,res) => {
    const smartphone = new Smartphone(req.body);
    await smartphone.save((err, saved)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 saving smartphone-brand" });
        }
        if (!saved) {
            return res.status(404).send({ Error: "Error 404 saving smartphone-brand" });
        }
        return res.status(200).send(saved);
    });
    // res.end(JSON.stringify(await Smartphone.find()));
});

router.post('/updsmart/:id', async (req, res) => {
    const { id } = req.params;
    await Smartphone.update({_id: id}, req.body, (err, edited)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 editing smartphone-brand" });
        }
        if (!edited) {
            return res.status(404).send({ Error: "Error 404 editing smartphone-brand" });
        }
        return res.status(200).send(edited);
    });
    res.redirect('/');
});

router.get('/delsmart/:id', async (req, res) => {
    const { id } = req.params;
    await Smartphone.remove({_id: id});
    res.send(console.log("Eliminado"));
    res.redirect('/');
});

router.post('/addtab', async (req,res) => {
    const tablet = new Tablet(req.body);
    await tablet.save((err, saved)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 saving tablet-brand" });
        }
        if (!saved) {
            return res.status(404).send({ Error: "Error 404 saving tablet-brand" });
        }
        return res.status(200).send(saved);
    });
});

router.post('/updtab/:id', async (req, res) => {
    const { id } = req.params;
    await Tablet.update({_id: id}, req.body, (err, edited)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 editing Tablet-brand" });
        }
        if (!edited) {
            return res.status(404).send({ Error: "Error 404 editing Tablet-brand" });
        }
        return res.status(200).send(edited);
    });
    res.redirect('/');
});

router.get('/deltab/:id', async (req, res) => {
    const { id } = req.params;
    await Tablet.remove({_id: id});
    res.send(console.log("Eliminado"));
    res.redirect('/');
});

router.post('/addcam', async (req,res) => {
    const camera = new Camera(req.body);
    await camera.save((err, saved)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 saving camera-brand" });
        }
        if (!saved) {
            return res.status(404).send({ Error: "Error 404 saving camera-brand" });
        }
        return res.status(200).send(saved);
    });
});

router.post('/updcam/:id', async (req, res) => {
    const { id } = req.params;
    await Camera.update({_id: id}, req.body, (err, edited)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 editing Camera-brand" });
        }
        if (!edited) {
            return res.status(404).send({ Error: "Error 404 editing Camera-brand" });
        }
        return res.status(200).send(edited);
    });
    res.redirect('/');
});

router.get('/delcam/:id', async (req, res) => {
    const { id } = req.params;
    await Camera.remove({_id: id});
    res.send(console.log("Eliminado"));
    res.redirect('/');
});

router.post('/addacc', async (req,res) => {
    const accesory = new Accesory(req.body);
    await accesory.save((err, saved)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 saving accesory-brand" });
        }
        if (!saved) {
            return res.status(404).send({ Error: "Error 404 saving accesory-brand" });
        }
        return res.status(200).send(saved);
    });
});

router.post('/updacc/:id', async (req, res) => {
    const { id } = req.params;
    await Accesory.update({_id: id}, req.body, (err, edited)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 editing Accesory-brand" });
        }
        if (!edited) {
            return res.status(404).send({ Error: "Error 404 editing Accesory-brand" });
        }
        return res.status(200).send(edited);
    });
    res.redirect('/');
});

router.get('/delacc/:id', async (req, res) => {
    const { id } = req.params;
    await Accesory.remove({_id: id});
    res.send(console.log("Eliminado"));
    res.redirect('/');
});

router.post('/addsprod', async (req,res) => {
    const product = new Product(req.body);
    await Smartphone.findByIdAndUpdate({_id: req.body.brand_id},{$push: {prod_list: product}});
    res.end(JSON.stringify(await Smartphone.findOne({_id: req.body.brand_id})));
});

// router.get('/edit/:id', async (req, res) => {
//     const { id } = req.params;
//     const task = await Task.findById(id);
//     res.render('edit', {
//         task
//     });
// });

router.get('/prod', async(req,res) => {
    var brand = await Smartphone.findOne({_id: req.body.brand_id}).prod_list.findById(prod_id);
    res.send(console.log(JSON.stringify(brand)));
});

router.post('/updsprod/:id', async (req,res) => {
    const { id } = req.params;
    const prod_id = req.body.prod_id;
    // const p_id = req.body.prod_id;
    await Smartphone.findByIdAndUpdate({_id: id},{$pull: {prod_list: {_id : prod_id }}}, {safe: true});
    res.send(console.log('DONe'))
});
// router.post('/updsprod/:id', async (req,res) => {
//     const { id } = req.params;
//     const product = new Product(req.body)
//     await Smartphone.findOne({_id: id},(err, brand)=>{
//         // console.log(brand.prod_list);
//         var prod = new Product(brand.prod_list); 
//         prod.findOneAndReplace({_id: req.body.prod_id}, {product});
//     })
//     res.send(product);
//     // await Task.update({_id: id}, req.body);
//     // res.redirect('/');
// });

router.post('/addtprod', async (req,res) => {
    const product = new Product(req.body);
    await Tablet.findOneAndUpdate({_id: req.body.brand_id},{$push: {prod_list: product}},(err, saved)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 saving product-Tablet" });
        }
        if (!saved) {
            return res.status(404).send({ Error: "Error 404 saving product-Tablet" });
        }
        return res.status(200).send(saved);
    });
});

router.post('/addcprod', async (req,res) => {
    const product = new Product(req.body);
    await Camera.findOneAndUpdate({_id: req.body.brand_id},{$push: {prod_list: product}},(err, saved)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 saving product-Camera" });
        }
        if (!saved) {
            return res.status(404).send({ Error: "Error 404 saving product-Camera" });
        }
        return res.status(200).send(saved);
    });
});
router.post('/addaprod', async (req,res) => {
    const product = new Product(req.body);
    await Accesory.findOneAndUpdate({_id: req.body.brand_id},{$push: {prod_list: product}},(err, saved)=>{
        if (err) {
            return res.status(500).send({ Error: "Error 500 saving product-Accesory" });
        }
        if (!saved) {
            return res.status(404).send({ Error: "Error 404 saving product-Accesory" });
        }
        return res.status(200).send(saved);
    });
});

router.get('/turn/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    task.status = !task.status;
    await task.save();
    res.redirect('/');
});

router.get('/edit/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    res.render('edit', {
        task
    });
});

router.post('/update/:id', async (req, res) =>{
    const { id } = req.params;
    await Task.update({_id: id}, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({_id: id});
    res.redirect('/');
});

module.exports = router;

// router.post('/addproduct', async (req,res) => {
//     const product = new Product(req.body);
//     // const cat_id = req.body.cat_id;
//     // const brand_id = req.body.brand_id;
//     // // await Brand.findOneAndUpdate({_id: req.body.brand_id},{$push: {prod_list: product}});
//     // // var mi_cat = await Category.findOne({_id: req.body.cat_id});
//     // // console.log('categoria');
//     // // console.log(mi_cat);
//     // // await mi_cat(Brand.findOneAndUpdate({_id: req.body.brand_id},{$push: {prod_list: product}}));
//     // await Category.findOne({_id: req.body.cat_id},()=>{
//     //     console.log('Entro a categoria');
//     //     var brand = Brand.findOneAndUpdate({_id: brand_id},{$push: {prod_list: product}});
//     //     console.log(brand);
//     //     console.log('Salio de categoria');
//     // });
//     // res.end(JSON.stringify(await Category.findOne({_id: req.body.cat_id})));

//     // var task = {
//     //     name: req.body.name,
//     //     description: req.body.description,
//     //     state: 'Pendiente'
//     // }
//     var query = Category.where({ _id: req.body.cat_id });
//     query.find().elemMatch(await Brand.findOne({_id: req.body.brand_id}),{prod_list: product});
//     res.end(JSON.stringify(await Category.findOne({_id: req.body.cat_id})));
// })
