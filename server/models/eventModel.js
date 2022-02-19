const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    text: {
        type: String
    },
    time: {
        type: Date,
        required: true
    }
    //account?
});

module.exports = mongoose.model('Event', eventSchema);