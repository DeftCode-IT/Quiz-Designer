const mongoose = require('mongoose');

const quizSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  successMessage: {
    type: String,
    required: true
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
      correctAnswers: [[Number]]
    }
  ],
  results: [
    {
      questionIndex: Number,
      answers: [Number]
    }
  ]
});

quizSchema.index({ title: 1, version: 1 }, { unique: true });

module.exports = mongoose.model('quiz', quizSchema);

