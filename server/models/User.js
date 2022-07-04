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
    },
    emailToken: {
        type: String,
        default: ""
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    profileComplete: {
        type: Boolean,
        default: false
    },
    numberOfHomeworks: {
        type: Number,
        default: 0
    },
    tasksCompleted: {
        type: Array,
        default: []
    },
    points: {
        type: Number,
        default: 0
    },
    incorrectQuestionsArray: {
        type: Array,
        default: []
    },
    correctQuestions: {
        type: Number,
        default: 0
    },
    incorrectQuestions: {
        type: Number,
        default: 0
    },
    accuracy: {
        type: Number,
        default: 0
    },
    enrolledCourses: {
        type: Array,
        default: []
    },
    photo: {
        type: String,
        default: ""
    }
})
const User = mongoose.model('User', Schema);
module.exports = User;