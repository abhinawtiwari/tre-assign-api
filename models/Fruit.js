const mongoose = require('mongoose');

const FruitSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Fruits', FruitSchema);