const mongoose = require('mongoose');

const questionSchema = mongoose.Schema({
  type: String,
  question: String,
  answers: [String],
  correctAnswers: [Number],
});

module.exports = mongoose.model('question', questionSchema);
