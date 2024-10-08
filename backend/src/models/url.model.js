const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    urlCode: {
        type: String,
        required: true
    },
    longUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    },
    createdAt: {
        type: String,
        default: Date.now
    }
});

const URLModel = mongoose.model('Url', URLSchema);
module.exports = { URLModel }