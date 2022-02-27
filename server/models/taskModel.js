const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    time: {
        type: Date,
        required: true
    },
    user: {
        type: String,
        required: true,
      },
    /*added: {

    } */
});

module.exports = mongoose.model('Task', taskSchema);