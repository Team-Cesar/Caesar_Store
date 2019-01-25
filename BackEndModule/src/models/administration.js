const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdministrationSchema = new Schema({
    admin_name: String,
    admin_email: String,
    admin_salt: String,
    admin_hash: String,
    admin_role: {
        role_admin: Boolean,
        role_oper: Boolean,
        role_client: Boolean
    },
    purchases_list: Array
});

module.exports = mongoose.model('administration', AdministrationSchema);