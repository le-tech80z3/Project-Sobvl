const mongoose = require("mongoose");
const Xip = require('./xip');

const xipsoloSchema = new mongoose.Schema({
    name: String,
    // creating a relationship through a reference
    xips: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Xip'
    }]
})

const Xipsolo = mongoose.model('Xipsolo', xipsoloSchema)

module.exports = Xipsolo