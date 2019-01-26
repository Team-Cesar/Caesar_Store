// const mongoose = require('mongoose');
// const Schema = mongoose.Schema;

// const PurchaseSchema = new Schema({
//     purchase_date:Date,
//     send_details:{
//         send_name:String,
//         send_lastname:String,
//         send_company:String,
//         send_country:String,
//         send_city:String,
//         send_street:String,
//         send_state:String,
//         send_phone:String,
//         send_zip:String
//     },
//     prod_details:{
//         prod_name: String,
//         prod_image: String,
//         prod_currency: String,
//         prod_price: Number,
//         prod_state: String,
//         prod_amount: Number,
//         prod_totalPay: Number
//     }
// });

// module.exports = mongoose.model('Purchase', PurchaseSchema);

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PurchaseSchema = new Schema({
    purchase_date:Date,
    send_details:{
        send_name:String,
        send_lastname:String,
        send_company:String,
        send_country:String,
        send_city:String,
        send_street:String,
        send_state:String,
        send_phone:String,
        send_zip:String
    },
    prod_details:[
        {
            prod_name: String,
            prod_image: String,
            prod_currency: String,
            prod_price: Number,
            prod_state: String,
            prod_amount: Number,
            prod_totalPay: Number
        }
    ]
});

module.exports = mongoose.model('Purchase', PurchaseSchema);