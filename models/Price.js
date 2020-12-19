const mongoose = require('mongoose');

const PriceSchema = mongoose.Schema({
    month: {
        type: String,
        required: true
    },
    value: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Prices', PriceSchema);