var mongoose = require('mongoose');

var questionSchema = mongoose.Schema({
    type: String,
    question: String,
    answers: [],
    correctAnswers: []
});

module.exports = mongoose.model('question', questionSchema);