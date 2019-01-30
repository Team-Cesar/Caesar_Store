const express = require('express');
const router = express.Router();
const passport = require('passport');

var Usuarios = require('../models/Users/users');
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
        username: 'Omar',
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

    Usuarios.findOne({}, (req, coleccion) => {
        if (coleccion == null) {
            console.log('Usuarios|find|coleccion');
            console.log(coleccion);
            var usuarios = new Usuarios();
            usuarios.agregarUsuario(user);
        } else {
            var usuarios = coleccion;
            console.log('Usuarios|find|usuarios');
            console.log(usuarios);
            usuarios.agregarUsuario(user);
        }

        usuarios.save((err, users) => {
            console.log('usuarios|agregarUsuario|find|else|save|users');
            console.log(users);
            if (err) {
                console.log(err);
                return res.status(500).send({ Error: "Error 500 saving user" });
            }
            if (!users) {
                return res.status(404).send({ Error: "Error 404 saving user" });
            }
            return res.status(200).send(users);
        });
    });
});

// DESACTIVAR USUARIO (cambio de estado a inactivo)
router.post('/desact-user', (req, res) => {
    let { user_email, user_role } = req.body;
    user_role = parseInt(user_role);
    switch (user_role) {
        case 1: {
            Usuarios.updateOne({ admin_list: { $elemMatch: { user_email } } }, { $set: { 'admin_list.$.user_status': 'Inactivo' } }, (err, raw) => { if (raw) return res.status(200).send("ok"); });;
            // Usuarios.updateOne({admin_list:{$elemMatch:{user_email}}},{$set:{'admin_list.$':[user]}},(err, raw)=>console.log(raw));
            break;
        }
        case 2: {
            Usuarios.updateOne({ operator_list: { $elemMatch: { user_email } } }, { $set: { 'operator_list.$.user_status': 'Inactivo' } }, (err, raw) => { if (raw) return res.status(200).send("ok"); });
            break;
        }
        case 3: {
            Usuarios.updateOne({ client_list: { $elemMatch: { user_email } } }, { $set: { 'client_list.$.user_status': 'Inactivo' } }, (err, raw) => { if (raw) return res.status(200).send("ok"); });
            // Usuarios.updateOne({},{$pull:{client_list:{user_email}}},(err, raw)=>console.log(raw));
            break;
        }
    }
});

// ELIMINAR DEFINITIVAMENTE
router.delete('/delete-user', (req, res) => {
    let { user_email, user_role } = req.body;
    user_role = parseInt(user_role);
    switch (user_role) {
        case 1: {
            Usuarios.updateOne({}, { $pull: { admin_list: { user_email } } }, (err, raw) => { if (raw) return res.status(200).send("ok"); });
            break;
        }
        case 2: {
            Usuarios.updateOne({}, { $pull: { operator_list: { user_email } } }, (err, raw) => { if (raw) return res.status(200).send("ok"); });
            break;
        }
        case 3: {
            Usuarios.updateOne({}, { $pull: { client_list: { user_email } } }, (err, raw) => { if (raw) return res.status(200).send("ok"); });
            break;
        }
    }
});

// TRAER USUARIO
router.post('/get-user', (req, res) => {
    let { username, user_role } = req.body;
    user_role = parseInt(user_role);
    Usuarios.findOne({}, (req, coleccion) => {
        if (coleccion == null) {
            console.log('Usuarios|find|coleccion');
            console.log(coleccion);
            return res.status(500).send({ Error: "Cree una coleccion primero" });
        } else {
            var usuarios = coleccion;
            console.log('Usuarios|find|usuarios');
            console.log(usuarios);
            let user = usuarios.buscarPorUsername(username, user_role);
            if (user) {
                return res.status(200).send(user);
            }
        }
    });
});

// ************** PRODUCTOS ********************

module.exports = router;