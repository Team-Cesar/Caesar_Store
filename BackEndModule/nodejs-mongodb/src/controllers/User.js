const passport = require('passport');

var Usuario = require('../models/Users/user');

var controller = {
    signin: async (req, res) => {
        passport.authenticate('local', (err, user, info) => {
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
    },
    signup: async(req,res) => {
        let { user_username, user_name, user_lastname, user_email, user_pass } = req.body;
        let user = new Usuario({
            user_username,
            user_name,
            user_lastname,
            user_email,
            user_role: 3,
            user_status: 'Activo',
            purchase_list: []
        });
        user.setPassword(user_pass);

        Usuario.findOne({user_username}, (req, usuario) => {
            if (usuario == null){
                var usuario = new Usuario();
                usuario = user;
            } else {
                var usuario = usuario;
                console.log(usuario);
            }
            usuario.save((err, usuario) => {
                if (err) {
                    return res.status(500).send({ Error: "Error 500 saving user"});
                }
                if (!usuario) {
                    return res.status(404).send({ Error: "Error 404 saving user" });
                }
                var token = user.generateJwt();
                return res.status(200).send(usuario);
            });
        });
    },
    getuser: async (req, res) => {
        let { user_username } = req.params;
        Usuario.findOne({user_username}, (req, usuario) => {
            if (usuario == null){
                return res.status(500).send({ Error: "Crear primero un usuario" });
            } else {
                return res.status(200).send(usuario);
            }
        });
    },
    deleteuser: async (req, res) => {
        let { user_username } = req.body;
        Usuario.findOneAndDelete({user_username},(err,usuario)=>{
            if(err) return res.status(404).send({Error: 'Error 404: Usuario no encontrado'});
            else if(!usuario) return res.status(500).send({Error: 'Error 500: Error en la busqueda de usuario'});
            usuario.save((err, usuario) => {
                if (err) {
                    return res.status(500).send({ Error: "Error 500 deleting user" });
                }
                if (!usuario) {
                    return res.status(404).send({ Error: "Error 404 deleting user"})
                }
                return res.status(200).send(usuario);
            });
        });
    }
};

module.exports = controller;