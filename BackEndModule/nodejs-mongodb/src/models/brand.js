const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BrandSchema = new Schema({
    bra_name: String,
    prod_list: Array
});

module.exports = mongoose.model('brand', BrandSchema);