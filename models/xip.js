const mongoose = require('mongoose');
const Xipsolo = require('./xipsolo');

const xipSchema = new mongoose.Schema({
    name: { type: String, required: true },
    publisher: String,
    coverArtUrl: String,
    comments: String,
    completed: Boolean,
});

const Xip = mongoose.model('Xip', xipSchema);

module.exports = Xip;