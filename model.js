const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    // Add other fields as needed
});

module.exports = mongoose.model('Item', itemSchema);
