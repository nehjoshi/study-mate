const mongoose = require('mongoose');
const Schema = mongoose.Schema({
    grade: {
        type: Number,
        default: 2
    },
    additionNormal: {
        type: Array,
        default: []
    },
    subtractionNormal: {
        type: Array,
        default: []
    }
})
const Math = mongoose.model('maths', Schema);
module.exports = Math;