const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    prod_name: String,
    prod_desc: String,
    prod_code: String,
    prod_stock: Number,
    prod_price: Number,
    prod_discount: Number,
    prod_status: {
        type: Boolean,
        default: false
    },
    prod_image:String
});

module.exports = mongoose.model('product', ProductSchema);