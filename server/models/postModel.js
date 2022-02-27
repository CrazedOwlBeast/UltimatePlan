const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    user: {
        type: String,
        required: true,
      },
    addedUsers: {
        type: Array,
        default: [],
    },
});

module.exports = mongoose.model('Post', postSchema);