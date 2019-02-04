const express = require('express');
const router = express.Router();
const passport = require('passport');

// var Usuarios = require('../models/Users/users');
var Usuario = require('../models/Users/user');
var Compra = require('../models/Users/purchase');
var Producto = require('../models/Users/product');
var Envio = require('../models/Users/send');

// ************ USUARIOS **********************
// CREAR USUARIO
router.post('/create-user', (req, res) => {
    console.log("index|user|post|req.body");
    console.log(req.body);

    let user = new Usuario({
        user_username: 'Daniele',
        user_name: 'Oshin',
        user_lastname: 'Cabana',
        user_email: 'Daniele@user.com',
        user_role: 3,
        user_status: 'Activo',
        purchases_list: [new Compra({
            purchase_date: new Date,
            send_details: new Envio,
            prod_details: [
                new Producto({
                    prod_name: 'Xiaomi',
                    prod_image: '',
                    prod_currency: 'USD',
                    prod_price: 735.0,
                    prod_state: 'Arequipa',
                    prod_amount: 1,
                    prod_totalPay: 735.0
                }), new Producto({
                    prod_name: 'Samsung',
                    prod_image: '',
                    prod_currency: 'USD',
                    prod_price: 555.5,
                    prod_state: 'Arequipa',
                    prod_amount: 2,
                    prod_totalPay: 1111.0
                })]
        })]
    });

    Usuario.findOne({}, (req, usuario) => {
        if (usuario == null) {
            console.log('Usuarios|find|usuario');
            console.log(usuario);
            var usuario = new Usuario();
            usuario = user;
        } else {
            var usuario = usuario;
            console.log('Usuarios|find|usuarios');
            console.log(usuario);
        }

        usuario.save((err, usuario) => {
            console.log('usuario|agregarUsuario|find|else|save|usuario');
            console.log(usuario);
            if (err) {
                console.log(err);
                return res.status(500).send({ Error: "Error 500 saving user" });
            }
            if (!usuario) {
                return res.status(404).send({ Error: "Error 404 saving user" });
            }
            return res.status(200).send(usuario);
        });
    });
});

// DESACTIVAR USUARIO (cambio de estado a inactivo)
router.put('/desact-user', (req, res) => {
    let { user_username } = req.body;
    Usuario.findOne({user_username},(err,usuario)=>{
        if(err) return res.status(404).send({Error: 'Error 404: Usuario no encontrado'});
        else if(!usuario) return res.status(500).send({Error: 'Error 500: Error en la búsqueda de usuario'});
        usuario.user_status = 'Inactivo';
        usuario.save((err, usuario) => {
            console.log('usuario|agregarUsuario|find|else|save|usuario');
            console.log(usuario);
            if (err) {
                console.log(err);
                return res.status(500).send({ Error: "Error 500 saving user" });
            }
            if (!usuario) {
                return res.status(404).send({ Error: "Error 404 saving user" });
            }
            return res.status(200).send(usuario);
        });
    })
});

// ELIMINAR DEFINITIVAMENTE
router.delete('/delete-user', (req, res) => {
    let { user_username } = req.body;
    Usuario.findOneAndDelete({user_username},(err,usuario)=>{
        if(err) return res.status(404).send({Error: 'Error 404: Usuario no encontrado'});
        else if(!usuario) return res.status(500).send({Error: 'Error 500: Error en la búsqueda de usuario'});
        usuario.save((err, usuario) => {
            console.log('usuario|agregarUsuario|find|else|save|usuario');
            console.log(usuario);
            if (err) {
                console.log(err);
                return res.status(500).send({ Error: "Error 500 deleting user" });
            }
            if (!usuario) {
                return res.status(404).send({ Error: "Error 404 deleting user" });
            }
            return res.status(200).send(usuario);
        });
    })
});

// TRAER USUARIO
router.get('/get-user/:user_username', (req, res) => {
    let { user_username } = req.params;
    Usuario.findOne({user_username}, (req, usuario) => {
        if (usuario == null) {
            console.log('Usuario|find|usuario');
            console.log(usuario);
            return res.status(500).send({ Error: "Cree un usuario primero" });
        } else {
            console.log('Usuarios|find|usuario');
            console.log(usuario);
            return res.status(200).send(usuario);
        }
    });
});

// ************** PRODUCTOS ********************
// AGREGAR COMPRA (ADD PURCHASE)
router.post('/push-purchase', (req, res)=>{
    let { purchase, user_username } = req.body;
    let producto = new Producto({
        prod_name: 'Huawei',
        prod_image: '',
        prod_currency: 'USD',
        prod_price: 1250.5,
        prod_state: 'Correcto',
        prod_amount: 1,
        prod_totalPay: 1250.5
    });

    let Purchase = new Compra({
        purchase_date : new Date,
        send_details : {}
    }); 
    Purchase.prod_details.push(producto);
    console.log('push-purchase|Purchase');
    console.log(purchase);
    if(Purchase != null){
        Usuario.findOneAndUpdate({user_username},{$push:{purchases_list:Purchase}},{new:true},(err, doc, response)=>{
            if(err) return res.send(500).send({Error: "Error 500: Error al guardar compra"});
            else if(doc){
                let index = doc.purchases_list.length;
                let lastPurchase = doc.purchases_list[index - 1];
                return res.status(200).send(lastPurchase);
            }
        });
    }else{
        return res.send(500).send({Error:'Error 500: "Purchase" vacio'});
    }
});

// QUITAR COMPRA (REMOVE PURCHASE)
router.delete('/delete-purchase', (req, res)=>{
    let { id, user_username } = req.body;

    Usuario.findOneAndUpdate({user_username},{$pull:{purchases_list:{_id:id}}},{new:true},(err, doc, response)=>{
        if(err) return res.send(500).send({Error: "Error 500: Error al guardar compra"});
        else if(doc){
            return res.status(200).send(doc);
        }
    });
});

module.exports = router;