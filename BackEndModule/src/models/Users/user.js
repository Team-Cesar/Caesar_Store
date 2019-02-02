const mongoose = require('mongoose');
const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_username:{
        type:String,
        required:true,
        unique:true
    },
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
        // unique:true,
        // required:true
    },
    user_role: {
        type:Number,
        required:true
    },
    user_status: {
        type:String
    },
    purchases_list: {
        type:Array,
        required:false
    },
    user_salt: String,
    user_hash: String
},{timestamps: true, collection: 'Users'});

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
    user_username: this.user_username,
    user_name: this.user_name,
    user_lastname: this.user_lastname,
    user_email: this.user_email,
    user_role: this.user_role,
    purchases_list: this.purchases_list,
    exp: parseInt(expiry.getTime() / 1000),
  }, "MY_SECRET"); 
};

module.exports = mongoose.model('User', UserSchema);
