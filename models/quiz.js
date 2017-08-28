var mongoose = require('mongoose');

var quizSchema = mongoose.Schema({
    title: String, 
    description: String,
    successMessage: String,
    failureMessage: String,
    pointsToSuccess: Number,
    url: String,
    editMode: Boolean,
    version: Number,
    createdBy: String,
    questions: []
});

module.exports = mongoose.model('quiz', quizSchema);

