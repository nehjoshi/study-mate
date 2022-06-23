const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    firstName: {
        type: String,
        default: ""
    },
    lastName: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        default: ""
    },
    phoneNumber: {
        type: String,
        default: ""
    },
    grade: {
        type: String,
        default: ""
    },
    password: {
        type: String,
        default: ""
    }
})
const User = mongoose.model('User', Schema);
module.exports = User;