const mongoose = require('mongoose');

const goalSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',
      },
});

module.exports = mongoose.model('Goal', goalSchema);