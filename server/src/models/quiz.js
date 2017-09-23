const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  title: String,
  description: String,
  successMessage: String,
  failureMessage: String,
  pointsToSuccess: Number,
  url: String,
  editMode: Boolean,
  status: String,
  version: Number,
  createdBy: String,
  questions: [String],
  results: [
    {
      questionIndex: Number,
      answers: [Number]
    }
  ]
});

module.exports = mongoose.model('quiz', quizSchema);

