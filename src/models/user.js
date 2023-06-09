const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    preference: {
        type: String,
        required: false
    }
});

module.exports = mongoose.model('User', userSchema);