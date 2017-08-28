
var mongoose = require('mongoose');

var resultSchema = mongoose.Schema({
    user: String,
    quiz: String,
    answers: [],
    passed: Boolean
});

module.exports = mongoose.model('result', resultSchema);