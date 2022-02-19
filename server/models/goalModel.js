const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    }
    //account?
});

module.exports = mongoose.model('Goal', goalSchema);