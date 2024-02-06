const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    id: Number,
    coverImage: String,
    name: { type: String, required: true, max: [60, '最大60文字までです'] },
    price: Number,
    description: String,
    heading1: String,
    headingtext1: String,
    heading2: String,
    headingtext2: String,
    heading3: String,
    headingtext3: String,
});

module.exports = mongoose.model('Product', ProductSchema);

