const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name: {
        type:String,
        required:true
    },
    user_lastname:{
        type:String,
        required:true
    },
    user_email: {
        type:String,
        unique:true,
        required:true
    },
    user_role: {
        type:Number,
        required:true
    },
    purchases_list: {
        type:Array,
        required:false
    },
    user_salt: String,
    user_hash: String
});

UserSchema.methods.setPassword = function(password){
  this.user_salt = crypto.randomBytes(16).toString('hex');
  this.user_hash = crypto.pbkdf2Sync(password, this.user_salt, 1000, 64, 'sha512').toString('hex');
};

UserSchema.methods.validPassword = function(password) {
  var hash = crypto.pbkdf2Sync(password, this.user_salt, 1000, 64, 'sha512').toString('hex');
  return this.user_hash === hash;
};

UserSchema.methods.generateJwt = function() {
  var expiry = new Date();
  expiry.setDate(expiry.getDate() + 7);

  return jwt.sign({
    _id: this._id,
    user_name: this.user_name,
    user_lastname: this.user_lastname,
    user_email: this.user_email,
    user_role: this.user_role,
    purchases_list: this.purchases_list,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); 
};

module.exports = mongoose.model('User', UserSchema);

// var mongoose = require( 'mongoose' );
// var crypto = require('crypto');
// var jwt = require('jsonwebtoken');

// var userSchema = new mongoose.Schema({
//   email: {
//     type: String,
//     unique: true,
//     required: true
//   },
//   username: {
//     type: String,
//     required: true
//   },
//   hash: String,
//   salt: String
// });

// userSchema.methods.setPassword = function(password){
//   this.salt = crypto.randomBytes(16).toString('hex');
//   this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
// };

// userSchema.methods.validPassword = function(password) {
//   var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
//   return this.hash === hash;
// };

// userSchema.methods.generateJwt = function() {
//   var expiry = new Date();
//   expiry.setDate(expiry.getDate() + 7);

//   return jwt.sign({
//     _id: this._id,
//     email: this.email,
//     username: this.username,
//     exp: parseInt(expiry.getTime() / 1000),
//   }, "MY_SECRET"); // DO NOT KEEP YOUR SECRET IN THE CODE!
// };

// module.exports = mongoose.model('Usuario', userSchema);