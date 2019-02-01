const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccesorySchema = new Schema({
    brand_name: String,
    prod_list: Array
})

module.exports = mongoose.model('accesory', AccesorySchema);