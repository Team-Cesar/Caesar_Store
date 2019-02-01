const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
    purch_date: Date,
    purch_prod: String,
    purch_currency: String,
    purch_price: Number,
    purch_state: String
});

module.exports = mongoose.model('purchase', PurchaseSchema);