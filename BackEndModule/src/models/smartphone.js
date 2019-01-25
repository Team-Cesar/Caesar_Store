const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SmartphoneSchema = new Schema({
    brand_name: String,
    prod_list: Array
});

module.exports = mongoose.model('smartphone', SmartphoneSchema);