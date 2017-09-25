const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  successMessage: {
    type: String,
    required: true,
    unique: true
  },
  failureMessage: {
    type: String,
    required: true
  },
  pointsToSuccess: {
    type: Number,
    required: true
  },
  url: String,
  editMode: Boolean,
  status: {
    type: String,
    required: true
  },
  version: {
    type: Number,
    required: true
  },
  createdBy: String,
  questions: [
    {
      index: Number,
      type: {
        type: String
      },
      question: String,
      answers: [String],
      correctAnswers: [Number]
    }
  ],
  results: [
    {
      questionIndex: Number,
      answers: [Number]
    }
  ]
});

module.exports = mongoose.model('quiz', quizSchema);

