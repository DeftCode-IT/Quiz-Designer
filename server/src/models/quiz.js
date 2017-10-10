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
  createdDate: Number,
  updatedDate: Number,
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
      score: Number,
      answers: [
        {
          questionIndex: Number,
          answer: [Number]
        }
      ]
    }
  ]
});

quizSchema.index({ title: 1, version: 1 }, { unique: true });

module.exports = mongoose.model('quiz', quizSchema);

