const express = require('express');
const router = express.Router();
const passport = require('passport');

// Importamos los modelos
// Modelos de usuario
const User = require('../models/Users/user');
const Purchase = require('../models/Users/purchase');
// const Product = require('../models/product');

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
    User.findOne({ user_username: requerimiento.user_username }, (err, response) => {
        console.log("index|user|findOne|response");
        console.log(response);

        if (response == null) {
            var user = new User();
            user.user_username = requerimiento.user_username;
            user.user_name = requerimiento.user_name;
            user.user_lastname = requerimiento.user_lastname;
            user.user_email = requerimiento.user_email;
            user.user_role = 3;
            user_user_status = 'Active';
            user.purchase_list = new Array();
            user.setPassword(requerimiento.user_pass);
            var token = user.generateJwt();

            console.log("index|user|findOne| user");
            console.log(user);

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
        }else{
            return res.status(500).json({Error: "Error 500 usuario ya existe"});
            console.log("index|user|findOne|else|mensajeError");
            console.log("Usuario ya registrado");
        }
    });
});


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

// eiminar producto
router.put('/product/:id',(req,res)=>{
    let {id} = req.params;
    // let { prod_name  } = req.body;

    console.log("index|put|product|req.body");
    console.log(req.body);
    console.log("index|put|product|id");
    console.log(id);
    
    User.findById(id, async (err,response)=>{
        console.log("index|put|findById|response");
        console.log(response);
        var user = response;
        user.user_lastname = req.body.user_lastname;
        // user.purchases_list[0].purchase_date = new Date();
        
        console.log("index|put|findById|purchase_date");
        console.log(user.purchases_list[0].purchase_date);

        User.findByIdAndDelete(id,(err,response)=>{
            console.log("index|findById|findByIdAndDelete|response");
            console.log(response);
            
            let new_user = new User();
            new_user = user;
            new_user.purchases_list[0].purchase_date = new Date();
            
            new_user.save((err, saved) => {
                console.log("index|findById|findByIdAndDelete|save|saved");
                console.log(saved);
                if (err) {
                    console.log(err);
                    return res.status(500).send({ Error: "Error 500 saving user" });
                }
                if (!saved) {
                    return res.status(404).send({ Error: "Error 404 saving user" });
                }
                return res.status(200).send(saved);
            },{w:1});
        });
        // user.pre("save", function(next) {
        //     if(!this.trial){
        //         //do your job here
        //         next();
        //     }
        // }
        // await user.save((err, saved) => {
        //     console.log("index|put|findById|save|saved");
        //     console.log(saved.purchases_list[0].purchase_date);
        //     if (err) {
        //         console.log(err);
        //         return res.status(500).send({ Error: "Error 500 saving user" });
        //     }
        //     if (!saved) {
        //         return res.status(404).send({ Error: "Error 404 saving user" });
        //     }
        //     return res.status(200).send(saved);
        // },{w:1});
    });
    // User.findOneAndUpdate(
    //     { _id: id },
    //     { $pull: { purchases_list: { prod_details: { _id : req.body.prod_name } } } },
    //     (err, response)=>{
    //         if(err){
    //             console.log("index|put|product|update|err");
    //             console.log(err);
    //         }
    //         console.log("index|put|product|update|response");
    //         console.log(response); 
    //     }
    //   );
});

// eliminar compra
router.delete('/purchase',(req,res)=>{
    console.log("index|delete|req.body");
    console.log(req.body);
    // let {user_id, purch_id, prod_id} = req.body;
    let {user_id, purch_index, prod_index} = req.body;
    User.findOne({_id:user_id},(err, response)=>{
        if(err){
            console.log("index|delete|findOne|err");
            console.log(err);
        }
        console.log("index|delete|findOne|response");
        console.log(response);

        var user = response;
        user.purchases_list[purch_index].purchase_date = new Date();
        user.purchases_list[purch_index].prod_details.splice(prod_index,1);

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

    // User.update(
    //     {"_id": user_id, "purchases_list._id": purch_id },
    //     { $pull: { "purchases_list.$.prod_details" : { "_id": prod_id } } }
    //   );
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
