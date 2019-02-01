const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user_name: String,
    user_email: String,
    user_salt: String,
    user_hash: String,
    purchases_list: Array
});

module.exports = mongoose.model('user', UserSchema);