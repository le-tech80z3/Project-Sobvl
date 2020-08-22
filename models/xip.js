const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const XipSchema = new Schema({
    title: String,
    publisher: String,
    coverArtUrl: String,
    completed: Boolean,
});

const Xip = mongoose.model('Xip', XipSchema);

module.exports = Xip;