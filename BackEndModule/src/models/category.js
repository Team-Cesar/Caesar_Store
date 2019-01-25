const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
    cat_name: String,
    brand_list: Array
});

module.exports = mongoose.model('category', CategorySchema);