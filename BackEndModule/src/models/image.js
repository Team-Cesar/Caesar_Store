const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
    image_name: String,
    image_url: String
});

module.exports = mongoose.model('image', ImageSchema);