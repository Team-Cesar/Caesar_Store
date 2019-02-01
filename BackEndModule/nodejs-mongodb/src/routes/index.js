const express = require('express');
const router = express.Router();
const passport = require('passport');

// Importamos los modelos
// Modelos de usuario
const User = require('../models/Users/user');
const Purchase = require('../models/Users/purchase');

// modelos de productos
const Task = require('../models/task');
const Smartphone = require('../models/smartphone');
// const Tablet = require('../models/tablet');
const Camera = require('../models/camera');
const Accesory = require('../models/accesory');
const Brand = require('../models/brand');
const Product = require('../models/product');
const Image = require('../models/image');

// rutas de autenticacion
router.post('/login', (req, res) => {
    console.log("index|login|req.body");
    console.log(req.body);
    passport.authenticate('local', function (err, user, info) {
        console.log("index|login|err");
        console.log(err);
        console.log("index|login|user");
        console.log(user);
        console.log("index|login|info");
        console.log(info);
        var token;
        // If Passport throws/catches an error
        if (err) {
            res.status(404).json(err);
            return;
        }

        // If a user is found
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token": token
            });
        } else {
            // If user is not found
            res.status(401).json(info);
        }
    })(req, res);
});

// rutas users
// leer usuarios
router.get('/users', async (req, res) => {
    const users = await User.find();
    console.log(users);
    return res.status(200).json(users);
});

// leer usuario por ID
router.get('/user/:id', (req, res) => {
    let { id } = req.params;
    User.findById(id, (err, response) => {
        let user = response;
        console.log("index|user/:id|get|user");
        console.log(user);
        return res.status(200).json(user);
    });
});

// crear usuario o actualizar compra a usuario
router.post('/user', (req, res) => {
    console.log("index|user|findOne|req.body");
    console.log(req.body);
    let requerimiento = req.body;
    User.findOne({ _id: requerimiento.id }, (err, response) => {
        console.log("index|user|findOne|response");
        console.log(response);
    //     if(err){
    //         console.log(err);
    //     }
        if (response == null) {
            var user = new User();
            user.user_name = requerimiento.user_name;
            user.user_lastname = requerimiento.user_lastname;
            user.user_email = requerimiento.user_email;
            user.user_role = 3;
            user.purchase_list = new Array();
            user.setPassword(requerimiento.user_pass);
            var token = user.generateJwt();

            // let purchase = new Purchase();
            // purchase.purchase_date = new Date();

            // purchase.send_details.send_name = requerimiento.send_name;
            // purchase.send_details.send_lastname = requerimiento.send_lastname;
            // purchase.send_details.send_company = requerimiento.send_company;
            // purchase.send_details.send_country = requerimiento.send_country;
            // purchase.send_details.send_city = requerimiento.send_city;
            // purchase.send_details.send_street = requerimiento.send_street;
            // purchase.send_details.send_state = requerimiento.send_state;
            // purchase.send_details.send_phone = requerimiento.send_phone;
            // purchase.send_details.send_zip = requerimiento.send_zip;

            // purchase.prod_details.prod_name = requerimiento.prod_name;
            // purchase.prod_details.prod_image = requerimiento.prod_image;
            // purchase.prod_details.prod_currency = requerimiento.prod_currency;
            // purchase.prod_details.prod_price = requerimiento.prod_price;
            // purchase.prod_details.prod_state = requerimiento.prod_state;
            // purchase.prod_details.prod_amount = requerimiento.prod_amount;
            // purchase.prod_details.prod_totalPay = requerimiento.prod_totalPay;

            // user.purchases_list.push(purchase);

            console.log("index|user|findOne| user");
            console.log(user);

            // res.status(200);
            // res.json({"token" : token});

        } else {
            var user = response;

            let purchase = new Purchase();
            purchase.purchase_date = new Date();

            purchase.send_details.send_name = requerimiento.purchase.send_details.send_name;
            purchase.send_details.send_lastname = requerimiento.purchase.send_details.send_lastname;
            purchase.send_details.send_company = requerimiento.purchase.send_details.send_company;
            purchase.send_details.send_country = requerimiento.purchase.send_details.send_country;
            purchase.send_details.send_city = requerimiento.purchase.send_details.send_city;
            purchase.send_details.send_street = requerimiento.purchase.send_details.send_street;
            purchase.send_details.send_state = requerimiento.purchase.send_details.send_state;
            purchase.send_details.send_phone = requerimiento.purchase.send_details.send_phone;
            purchase.send_details.send_zip = requerimiento.purchase.send_details.send_zip;

            requerimiento.purchase.prod_details.forEach((product)=>{
                let data = {
                    prod_name: product.prod_name,
                    prod_image: product.prod_image, 
                    prod_currency: product.prod_currency, 
                    prod_price: product.prod_price,
                    prod_state: product.prod_state, 
                    prod_totalPay: product.prod_totalPay
                }
                
                // let {prod_name, prod_image, prod_currency, prod_price, prod_state, prod_amount, prod_totalPay } = product;
                purchase.prod_details.push(data);
            });
            // purchase.prod_details.prod_name = requerimiento.purchase.prod_details.prod_name;
            // purchase.prod_details.prod_image = requerimiento.purchase.prod_details.prod_image;
            // purchase.prod_details.prod_currency = requerimiento.purchase.prod_details.prod_currency;
            // purchase.prod_details.prod_price = requerimiento.purchase.prod_details.prod_price;
            // purchase.prod_details.prod_state = requerimiento.purchase.prod_details.prod_state;
            // purchase.prod_details.prod_amount = requerimiento.purchase.prod_details.prod_amount;
            // purchase.prod_details.prod_totalPay = requerimiento.purchase.prod_details.prod_totalPay;

            user.purchases_list.push(purchase);
            console.log("index|user|findOne| user");
            console.log(user);
        }
        user.save((err, saved) => {
            if (err) {
                console.log(err);
                return res.status(500).send({ Error: "Error 500 saving user" });
            }
            if (!saved) {
                return res.status(404).send({ Error: "Error 404 saving user" });
            }
            return res.status(200).send(saved);
        });
    });
});

// añadir compra usuario
// router.post('/user/:id', (req, res) => {
//     let requerimiento = req.body;
//     let { id } = req.params;
//     User.findById(id, (err, response) => {
//         var user = response;

//         let purchase = new Purchase();
//         purchase.purchase_date = new Date();

//         purchase.send_details.send_name = requerimiento.send_name;
//         purchase.send_details.send_lastname = requerimiento.send_lastname;
//         purchase.send_details.send_company = requerimiento.send_company;
//         purchase.send_details.send_country = requerimiento.send_country;
//         purchase.send_details.send_city = requerimiento.send_city;
//         purchase.send_details.send_street = requerimiento.send_street;
//         purchase.send_details.send_state = requerimiento.send_state;
//         purchase.send_details.send_phone = requerimiento.send_phone;
//         purchase.send_details.send_zip = requerimiento.send_zip;

//         purchase.prod_details.prod_name = requerimiento.prod_name;
//         purchase.prod_details.prod_image = requerimiento.prod_image;
//         purchase.prod_details.prod_currency = requerimiento.prod_currency;
//         purchase.prod_details.prod_price = requerimiento.prod_price;
//         purchase.prod_details.prod_state = requerimiento.prod_state;
//         purchase.prod_details.prod_amount = requerimiento.prod_amount;
//         purchase.prod_details.prod_totalPay = requerimiento.prod_totalPay;

//         user.purchases_list.push(purchase);
//         console.log("index|user|findOne| user");
//         console.log(user);
//         user.save((err, saved) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(500).send({ Error: "Error 500 saving user" });
//             }
//             if (!saved) {
//                 return res.status(404).send({ Error: "Error 404 saving user" });
//             }
//             return res.status(200).send(saved);
//         });
//     })
// });

// eliminar usuario o tarea
router.delete('/user/:id', (req, res) => {
    let { id } = req.params;
    console.log("index|delete|id");
    console.log(id);

    User.findByIdAndDelete(id, (err, response) => {
        console.log("index|delete|response");
        console.log(response);
        return res.status(200).send(saved);
    });
});

// Actualizar usuario
router.put('/user/:id', (req, res) => {
    let { id } = req.params;
    console.log("index|findByIdAndUpdate|req.body");
    console.log(req.body);
    User.findByIdAndUpdate(id, { $set: req.body }, { new: true }, (err, response) => {
        console.log("index|findByIdAndUpdate|response");
        console.log(response);
        return res.status(200).json(response);
    });
});


// rutas productos
router.get('/', async (req, res) => {
    const smartphones = (JSON.stringify(await Smartphone.find()));
    // const tablets = (JSON.stringify(await Tablet.find()));
    const cameras = (JSON.stringify(await Camera.find()));
    const accesories = (JSON.stringify(await Accesory.find()));
    // res.end(smartphones, tablets, cameras, accesories);
    res.end(smartphones, cameras, accesories);
});

router.post('/addsmart', async (req, res) => {
    const smartphone = new Smartphone(req.body);
    await smartphone.save((err, saved) => {
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
    await Smartphone.update({ _id: id }, req.body, (err, edited) => {
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
    await Smartphone.remove({ _id: id });
    res.send(console.log("Eliminado"));
    res.redirect('/');
});

// router.post('/addtab', async (req,res) => {
//     const tablet = new Tablet(req.body);
//     await tablet.save((err, saved)=>{
//         if (err) {
//             return res.status(500).send({ Error: "Error 500 saving tablet-brand" });
//         }
//         if (!saved) {
//             return res.status(404).send({ Error: "Error 404 saving tablet-brand" });
//         }
//         return res.status(200).send(saved);
//     });
// });

// router.post('/updtab/:id', async (req, res) => {
//     const { id } = req.params;
//     await Tablet.update({_id: id}, req.body, (err, edited)=>{
//         if (err) {
//             return res.status(500).send({ Error: "Error 500 editing Tablet-brand" });
//         }
//         if (!edited) {
//             return res.status(404).send({ Error: "Error 404 editing Tablet-brand" });
//         }
//         return res.status(200).send(edited);
//     });
//     res.redirect('/');
// });

// router.get('/deltab/:id', async (req, res) => {
//     const { id } = req.params;
//     await Tablet.remove({_id: id});
//     res.send(console.log("Eliminado"));
//     res.redirect('/');
// });

// router.post('/Product', (req, res)=>{ //añadir producto 
//     console.log("routes|index|post|addcam|req");
//     console.log(req.body);

//     let brand_name = req.body.brand_name;

//     let product = new Product();
//     product.prod_name = req.body.prod_name;
//     product.prod_desc = req.body.prod_desc;
//     product.prod_code = req.body.prod_code;
//     product.prod_stock = req.body.prod_stock;
//     product.prod_price = req.body.prod_price;
//     product.prod_discount = req.body.prod_discount;
//     product.prod_status.type = req.body.type;
//     product.prod_image = req.body.image;

// });

router.post('/addcam', async (req, res) => {
    console.log("routes|index|post|addcam|req");
    console.log(req.body);

    // console.log("routes|index|post|addcam|req.body.brand_name");
    // console.log(req.body.brand_name);

    let product = new Product();
    product.prod_name = req.body.prod_name;
    product.prod_desc = req.body.prod_desc;
    product.prod_code = req.body.prod_code;
    product.prod_stock = req.body.prod_stock;
    product.prod_price = req.body.prod_price;
    product.prod_discount = req.body.prod_discount;
    product.prod_status.type = req.body.type;
    product.prod_image = req.body.image;

    console.log("routes|index|post|addcam| product");
    console.log(product);

    Camera.findOne({ brand_name: req.body.brand_name }, (err, response) => {
        console.log("routes|index|post|addcam|findOne|response");
        console.log(response);

        if (response == null) {
            var camera = new Camera();
            camera.prod_list.push(product);
            camera.brand_name = req.body.brand_name;
            console.log("routes|index|post|addcam|findOne|camera");
            console.log(camera);

        } else {
            var camera = response;
            camera.prod_list.push(product);
        }
        camera.save((err, saved) => {
            if (err) {
                return res.status(500).send({ Error: "Error 500 saving camera-brand" });
            }
            if (!saved) {
                return res.status(404).send({ Error: "Error 404 saving camera-brand" });
            }
            return res.status(200).send(saved);
        });
    });
});

router.post('/updcam/:id', async (req, res) => {
    const { id } = req.params;
    await Camera.update({ _id: id }, req.body, (err, edited) => {
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
    await Camera.remove({ _id: id });
    res.send(console.log("Eliminado"));
    res.redirect('/');
});

router.post('/addacc', async (req, res) => {
    const accesory = new Accesory(req.body);
    await accesory.save((err, saved) => {
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
    await Accesory.update({ _id: id }, req.body, (err, edited) => {
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
    await Accesory.remove({ _id: id });
    res.send(console.log("Eliminado"));
    res.redirect('/');
});

router.post('/addsprod', async (req, res) => {
    const product = new Product(req.body);
    await Smartphone.findByIdAndUpdate({ _id: req.body.brand_id }, { $push: { prod_list: product } });
    res.end(JSON.stringify(await Smartphone.findOne({ _id: req.body.brand_id })));
});

// router.get('/edit/:id', async (req, res) => {
//     const { id } = req.params;
//     const task = await Task.findById(id);
//     res.render('edit', {
//         task
//     });
// });

router.get('/prod', async (req, res) => {
    var brand = await Smartphone.findOne({ _id: req.body.brand_id }).prod_list.findById(prod_id);
    res.send(console.log(JSON.stringify(brand)));
});

router.post('/updsprod/:id', async (req, res) => {
    const { id } = req.params;
    const prod_id = req.body.prod_id;
    // const p_id = req.body.prod_id;
    await Smartphone.findByIdAndUpdate({ _id: id }, { $pull: { prod_list: { _id: prod_id } } }, { safe: true });
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

router.post('/addtprod', async (req, res) => {
    const product = new Product(req.body);
    await Tablet.findOneAndUpdate({ _id: req.body.brand_id }, { $push: { prod_list: product } }, (err, saved) => {
        if (err) {
            return res.status(500).send({ Error: "Error 500 saving product-Tablet" });
        }
        if (!saved) {
            return res.status(404).send({ Error: "Error 404 saving product-Tablet" });
        }
        return res.status(200).send(saved);
    });
});

router.post('/addcprod', async (req, res) => {
    const product = new Product(req.body);
    await Camera.findOneAndUpdate({ _id: req.body.brand_id }, { $push: { prod_list: product } }, (err, saved) => {
        if (err) {
            return res.status(500).send({ Error: "Error 500 saving product-Camera" });
        }
        if (!saved) {
            return res.status(404).send({ Error: "Error 404 saving product-Camera" });
        }
        return res.status(200).send(saved);
    });
});
router.post('/addaprod', async (req, res) => {
    const product = new Product(req.body);
    await Accesory.findOneAndUpdate({ _id: req.body.brand_id }, { $push: { prod_list: product } }, (err, saved) => {
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

router.post('/update/:id', async (req, res) => {
    const { id } = req.params;
    await Task.update({ _id: id }, req.body);
    res.redirect('/');
});

router.get('/delete/:id', async (req, res) => {
    const { id } = req.params;
    await Task.remove({ _id: id });
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
